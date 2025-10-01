const GameStateContainer = ({ isWon }: { isWon: boolean }) => {
  return (
    <div
      className={`w-full max-w-sm md:max-w-md mx-auto rounded-md px-6 py-4 text-white text-center font-semibold shadow-md ${
        isWon ? "bg-green-800" : "bg-red-900"
      }`}
    >
      <h2 className="text-xl mb-2">{isWon ? "You Won!" : "You Lost!"}</h2>
      <p className="text-sm opacity-90">
        {isWon
          ? "Congratulations! You saved world of programming"
          : "Nooope! Assembly has taken over the programming world..."}
      </p>
    </div>
  );
};

export default GameStateContainer;
