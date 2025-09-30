
import React from 'react';

interface RecipeGeneratorCardProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  handleClick: () => void;
}

const RecipeGeneratorCard = ({
  scrollRef,
  handleClick,
}: RecipeGeneratorCardProps) => {
  return (
    <div className="max-w-md mx-auto p-4">
      <div
        className="bg-gray-100 rounded-lg shadow p-6 flex flex-col sm:flex-row 
        sm:items-center sm:justify-between"
      >
        <div ref={scrollRef} className="mb-4 sm:mb-0">
          <h2 className="text-lg font-semibold text-gray-900">
            Ready for a recipe?
          </h2>
          <p className="text-sm text-gray-600">
            Generate a recipe from your list of ingredients.
          </p>
        </div>

        <button
          className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 
          text-white font-medium px-4 py-2 rounded"
          onClick={() => {
            handleClick();
          }}
        >
          Get a recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeGeneratorCard