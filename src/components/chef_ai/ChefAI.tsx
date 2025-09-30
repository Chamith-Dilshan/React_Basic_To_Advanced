import { useEffect, useRef, useState } from "react";
import RecipeGeneratorCard from "./RecipeGeneratorCard";
import AIReponseCard from "./AIReponseCard";
import NavBarComp from "../NavBarComp";
import { getRecipeStreamOllama } from "../../hooks/useOllamaStream";

interface IngredientProps {
  id: string;
  value: string;
}

// A simple SVG icon component for the remove button
const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-red-500 hover:text-red-700"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChefAI = () => {
  const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add ref to track the current request
  const abortControllerRef = useRef<AbortController | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleAddIngredient = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the page from reloading on form submission
    if (currentIngredient.trim() !== "") {
      const newIngredient: IngredientProps = {
        id: crypto.randomUUID(),
        value: currentIngredient.trim(),
      };
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      setCurrentIngredient(""); // Clear the input field after adding
    }
  };

  const handleRemoveIngredient = (idToRemove: string) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== idToRemove)
    );
  };

  const ingredientData = ingredients.map((item: IngredientProps) => {
    return (
      <div key={item.id} className="flex flex-row items-center justify-between">
        <li>{item.value}</li>
        <button
          onClick={() => handleRemoveIngredient(item.id)}
          aria-label={`Remove ${item.value}`}
        >
          <CrossIcon />
        </button>
      </div>
    );
  });

  const getRecipe = async () => {
    // Cancel any existing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    abortControllerRef.current = new AbortController();

    // Reset state before starting
    setRecipe("");
    setError(null);
    setIsLoading(true);

    try {
      await getRecipeStreamOllama({
        ingredientsArray: ingredients.map((item) => item.value),
        signal: abortControllerRef.current.signal,
        onStream: (token) => {
          setRecipe((prev) => prev + token);
        },
        onComplete: () => {
          setIsLoading(false);
          abortControllerRef.current = null; // Clear the reference
        },
        onError: (err) => {
          if (err.message === "Request was aborted") {
            // Don't show error for user-initiated cancellations
            return;
          }
          setError(`Error: ${err.message}`);
          setIsLoading(false);
          abortControllerRef.current = null; // Clear the reference
        },
      });
    } catch (error) {
      console.error("Recipe generation failed:", error);
    }
  };

  return (
    <main className="w-screen h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <NavBarComp
        navBarProps={{ imageSrc: "chef_hat.svg", title: "Chef AI" }}
      />
      <section>
        <form
          onSubmit={handleAddIngredient}
          className="flex flex-col md:flex-row items-center justify-center gap-3 p-5 
          max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="e.g. pineapple"
            aria-label="Add Ingredient"
            value={currentIngredient}
            onChange={(e) => {
              setCurrentIngredient(e.target.value);
            }}
            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-black text-white font-medium rounded-lg 
          shadow hover:bg-gray-800 transition"
          >
            + Add Ingredient
          </button>
        </form>

        <div className="max-w-xl mx-auto p-5">
          <h1 className="text-2xl md:text-3xl font-bold">
            Ingredients on hand:
          </h1>
          <ul className="list-disc list-inside mt-3 space-y-3">
            {ingredientData}
          </ul>
        </div>

        {/* Get recipe button */}
        {ingredients.length > 3 ? (
          <RecipeGeneratorCard handleClick={getRecipe} />
        ) : null}
      </section>
      {/* AI response */}
      <section className="max-w-xl mx-auto w-full px-5 pb-10 flex items-center justify-center">
        <AIReponseCard recipe={recipe} isLoading={isLoading} error={error} />
      </section>
    </main>
  );
};

export default ChefAI;
