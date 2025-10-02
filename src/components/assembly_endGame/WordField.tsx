interface WordFieldProps {
  word: string;
  guess: string[];
  attempts: number;
}

const WordField = ({ word, guess, attempts }: WordFieldProps) => {

  const lastGuessedLetter = guess[guess.length - 1];
  const numGuessesLeft = attempts - guess.length;
  
  return (
    <div className="flex gap-2 justify-center mb-6">
      {word
        .toUpperCase()
        .split("")
        .map((char, index) => {
          const isGuessed = guess.includes(char);

          return (
            <div
              key={index}
              className={`w-8 h-10 flex items-center justify-center border-b-2
         border-gray-500 text-lg font-bold uppercase ${
           isGuessed ? "text-green-500" : "text-red-500"
         }`}
            >
              {isGuessed ? char : "_"}
            </div>
          );
        })}

      {/* Screen reader only text for accessibility */}
      <div className="sr-only" aria-live="polite" role="status">
        <p>
          {word.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:
          {word
            .split("")
            .map((letter) => (guess.includes(letter) ? letter + "." : "blank"))
            .join(" ")}
        </p>
      </div>
    </div>
  );
};

export default WordField;
