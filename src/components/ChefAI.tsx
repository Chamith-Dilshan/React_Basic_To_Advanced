import { useState } from "react"
import NavBarComp from "./NavBarComp"

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

const InputIngredients = () => {
  const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const handleAddIngredient = (event: React.FormEvent) => {
    event.preventDefault();// Prevents the page from reloading on form submission
    if (currentIngredient.trim() !== "") {
      const newIngredient: IngredientProps = {
        id: crypto.randomUUID(),
        value: currentIngredient.trim(),
      }
      setIngredients((prevIngredients => [...prevIngredients, newIngredient]));
      setCurrentIngredient("");// Clear the input field after adding
    }
  };

  const handleRemoveIngredient = (idToRemove: string) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== idToRemove)
    );
  };

  const ingredientData = ingredients.map((item: IngredientProps) => {
    return (
      <div
        key={item.id}
        className="flex flex-row items-center justify-between"
      >
        <li>{item.value}</li>
        <button
          onClick={() => handleRemoveIngredient(item.id)}
          aria-label={`Remove ${item.value}`}
        >
          <CrossIcon />
        </button>
      </div>
    )
  });

  return (
    <main>
      <form
        onSubmit={handleAddIngredient}
        className="flex flex-col md:flex-row items-center justify-center gap-3 p-5 
      max-w-xl mx-auto">
        <input
          type="text"
          placeholder="e.g. pineapple"
          aria-label="Add Ingredient"
          value={currentIngredient}
          onChange={(e) => { setCurrentIngredient(e.target.value)}}
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-black text-white font-medium rounded-lg 
        shadow hover:bg-gray-800 transition">
          + Add Ingredient
        </button>
      </form>

      <div className="max-w-xl mx-auto p-5">
        <h1 className="text-2xl md:text-3xl">Ingredients on hand:</h1>
        <ul className="list-disc list-inside mt-3 space-y-3">
          {ingredientData}
        </ul>
      </div>
    </main>
  )
}


const ChefAI = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <NavBarComp navBarProps={{ imageSrc: "chef_hat.svg", title: "Chef AI" }} />
      <InputIngredients />
    </section>
  )
}

export default ChefAI