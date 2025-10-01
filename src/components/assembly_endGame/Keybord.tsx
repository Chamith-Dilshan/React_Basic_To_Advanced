interface KeyboardProps {
  handleClick: (char: string) => void;
  GuessedRightKeys: string[];
  GuessedWrongKeys: string[];
}

const rows = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  "ZXCVBNM".split(""),
];

const Keybord = ({
  handleClick,
  GuessedRightKeys,
  GuessedWrongKeys,
}: KeyboardProps) => {
  return (
    <div
      className="flex flex-col items-center gap-1 md:gap-2 w-full max-w-xs 
    sm:max-w-md mx-auto px-2"
    >
      {rows.map((row, index) => (
        <div key={index} className="flex gap-1 md:gap-2 justify-center w-full">
          {row.map((char) => {
            const isDisabledRight = GuessedRightKeys.includes(char);
            const isDisabledWrong = GuessedWrongKeys.includes(char);
            return (
              <button
                key={char}
                onClick={() => handleClick(char)}
                disabled={isDisabledRight || isDisabledWrong}
                className={`w-8 h-10 sm:w-10 sm:h-12 flex items-center justify-center rounded-md font-bold text-white text-sm sm:text-base
                  transition-colors duration-200
                  ${
                    isDisabledRight
                      ? "bg-green-600 cursor-not-allowed"
                      : isDisabledWrong
                      ? "bg-red-600 cursor-not-allowed"
                      : "bg-amber-600 hover:bg-amber-500 active:scale-95"
                  }`}
              >
                {char}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keybord;
