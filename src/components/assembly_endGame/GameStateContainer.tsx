interface GameStateContainerProps {
  gameState: "playing" | "won" | "lost";
  remainingAttempts: number;
  currentword: string;
  farewellText: string;
}

const GameStateContainer = ({
  gameState,
  remainingAttempts,
  currentword,
  farewellText,
}: GameStateContainerProps) => {
  const getContainerStyle = () => {
    switch (gameState) {
      case "won":
        return "bg-green-800";
      case "lost":
        return "bg-red-900";
      case "playing":
        return "bg-gray-800";
      default:
        return "bg-gray-800";
    }
  };

  const getContent = () => {
    switch (gameState) {
      case "won":
        return {
          title: "You Won!",
          description: "Congratulations! You saved the world of programming!",
        };
      case "lost":
        return {
          title: "You Lost!",
          description: `The fated word was "${currentword.toUpperCase()}" And you failed 
          to guess it. \nNow Assembly has taken over the programming world...`,
        };
      case "playing":
        return {
          title: `${remainingAttempts} ${
            remainingAttempts === 1 ? "Attempt" : "Attempts"
          } Left`,
          description: farewellText
            ? `💀 ${farewellText}\n Keep fighting to save the remaining programming languages!`
            : `🛡️ All programming languages are still safe! Keep it that way!`,
        };
      default:
        return { title: "", description: "" };
    }
  };

  const content = getContent();

  return (
    <div
      aria-live="polite"
      role="status"
      className={`w-full max-w-sm md:max-w-md mx-auto rounded-md px-6 py-4 text-white 
        text-center font-semibold shadow-md ${getContainerStyle()}`}
    >
      <h2 className="text-xl mb-2">{content.title}</h2>
      <p className="text-sm opacity-90 whitespace-pre-line">
        {content.description}
      </p>
    </div>
  );
};

export default GameStateContainer;
