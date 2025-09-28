import Markdown from "react-markdown";

interface AIResponseCardProps {
  recipe: string;
   isLoading: boolean;
   error: string | null;
}

const AIResponseCard = ({ recipe, isLoading, error }: AIResponseCardProps) => {
    if (isLoading && !recipe) {
      return (
        <p className="text-gray-500 animate-pulse">Generating your recipe...</p>
      );
   }

   if (error) {
      return <p className="text-red-500">{error}</p>;
   }

   if (!recipe) {
      return null; // Don't render anything if there's no recipe and it's not loading
   }
   
  return (
    <div className="prose prose-sm md:prose-base max-w-none">
      {/* The 'prose' class styles the markdown output */}
      <Markdown>{recipe}</Markdown>
    </div>
  );
};

export default AIResponseCard;
