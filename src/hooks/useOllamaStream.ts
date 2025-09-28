const SYSTEM_PROMPT = `You are "ChefAI", a world-class culinary expert and nutritionist. Your task is to create a delicious, easy-to-follow recipe using a given list of ingredients.

**Your Rules:**
1.  You MUST use the provided ingredients.
2.  You may suggest 1-2 common pantry items (like oil, salt, pepper) if essential. Clearly label them as "(Optional)".
3.  The entire response MUST be in Markdown format.
4.  The tone should be encouraging, clear, and professional.
5.  Do not add any conversational text before or after the recipe itself. Start directly with the recipe title.`;

interface StreamOllamaOptions {
  ingredientsArray: string[];
  onStream: (token: string) => void;
  onComplete: () => void;
  onError: (error: Error) => void;
}

export async function getRecipeStreamOllama({
  ingredientsArray,
  onStream,
  onComplete,
  onError,
}: StreamOllamaOptions) {
  if (!ingredientsArray || ingredientsArray.length === 0) {
    onError(new Error("No ingredients provided."));
    return;
  }

  // Guide the LLM with a clear example of the desired output format.
  const prompt = `
Create a recipe using the following ingredients: ${ingredientsArray.join(", ")}.

Follow this exact Markdown format for your response:

**Recipe Title:** [Your Recipe Title]

**Description:**
[A brief, enticing description of the dish.]

**Prep time:** [e.g., 10 minutes]
**Cook time:** [e.g., 20 minutes]
**Servings:** [e.g., 4]

**Ingredients:**
*   [Quantity] [Unit] [Ingredient Name]
*   [Quantity] [Unit] [Ingredient Name]
*   (Optional) [Quantity] [Unit] [Ingredient Name]

**Instructions:**
1.  [Step 1]
2.  [Step 2]
3.  [Step 3]

**Nutritional Information (Approximate per serving):**
*   **Calories:** [Value]
*   **Protein:** [Value]g
*   **Fat:** [Value]g
*   **Carbohydrates:** [Value]g
`;

  try {
    const res = await fetch("/api/ollama/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma3:4b",
        system: SYSTEM_PROMPT,
        prompt,
        stream: true,
      }),
    });

    if (!res.ok) {
      throw new Error(
        `API request failed with status ${res.status}: ${res.statusText}`
      );
    }

    if (!res.body) {
      throw new Error("No response body from the server.");
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        onComplete(); // Signal that the stream has finished successfully
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");

      // Keep the last partial line in the buffer
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const json = JSON.parse(line);
          if (json.response) {
            onStream(json.response); // Callback with each new token
          }
          if (json.error) {
            throw new Error(`Ollama API Error: ${json.error}`);
          }
        } catch (err) {
          console.error("Failed to parse streaming line:", line, err);
          // Continue to the next line, as one corrupted line shouldn't stop the whole stream
        }
      }
    }
  } catch (error) {
    console.error("An error occurred during the Ollama stream:", error);
    if (error instanceof Error) {
      onError(error);
    } else {
      onError(new Error("An unknown error occurred."));
    }
  }
}
