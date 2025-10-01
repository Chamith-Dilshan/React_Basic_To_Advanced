interface WordFieldProps {
  word: string;
  guess: string[];
}

const WordField = ({ word, guess }: WordFieldProps) => {
  return (
    <div className="flex gap-2 justify-center mb-6">
      {word.toUpperCase().split("").map((char, index) => {
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
    </div>
  );
};

export default WordField;
