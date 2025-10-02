import { useState } from "react";
import { languages } from "../../data/languagesData";
import GameStateContainer from "../assembly_endGame/GameStateContainer";
import TechCard from "../assembly_endGame/TechCard";
import CustomButton from "../CustomButton";
import Keybord from "./Keybord";
import WordField from "./WordField";
import Confetti from "react-confetti";
import {
  getFarewellText,
  getRandomWord,
} from "../../utils/assembly_game_utils";

const AssemblyEndgame = () => {
  {
    /*
    when adding a function as a initial state, use a function to avoid re-evaluation on 
    each render. don't do it like this - useState(getRandomWord());
    do this insted - useState(() => getRandomWord()); 
    */
  }
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    );

    // Using a set here make the component rerender when changes happen
    // setGuessedLetters((prevLetters) => {
    //   const letterSet = new Set(prevLetters);
    //   letterSet.add(letter);
    //   return Array.from(letterSet);
    // });
  };

  // Calculate both right and wrong letters in a single operation
  const { guessedRightKeys, guessedWrongKeys } = guessedLetters.reduce(
    (acc, letter) => {
      if (currentWord.toLowerCase().includes(letter.toLowerCase())) {
        acc.guessedRightKeys.push(letter);
      } else {
        acc.guessedWrongKeys.push(letter);
      }
      return acc;
    },
    { guessedRightKeys: [] as string[], guessedWrongKeys: [] as string[] }
  );

  const resetGame = () => {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  };

  // Derive other game state
  const attempts = languages.length - 1;
  const wrongGuessCount = guessedWrongKeys.length;
  const isGameLost = wrongGuessCount >= attempts;
  const isGameWon = currentWord
    .toLowerCase()
    .split("")
    .every((letter) =>
      guessedLetters.map((l) => l.toLowerCase()).includes(letter)
    );
  const isGameOver = isGameWon || isGameLost;

  // Calculate dead languages
  const deadLanguages = languages
    .slice(0, wrongGuessCount) // Get the first 'wrongGuessCount' languages
    .map((language) => language.name);

  const getFarewellMessage = () => {
    if (deadLanguages.length === 0) return "";
    return getFarewellText(deadLanguages.join(", "));
  };

  console.log("Current Word:", currentWord);
  console.log("Guessed Letters:", guessedLetters);
  console.log("Wrong Guess Count:", wrongGuessCount);
  console.log("Is Game Won:", isGameWon);
  console.log("Is Game Lost:", isGameLost);
  console.log("Dead Languages:", deadLanguages);

  return (
    <main>
      {isGameWon ? (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={5000}
        />
      ) : null}
      <section
        className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b
      from-gray-900 to-black text-white p-4"
      >
        {/* Header Section */}
        <div className="text-center max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Assembly Endgame
          </h1>
          <p className="text-sm mb-4">
            Guess the word in under {attempts} attempts to keep the programming
            world safe from Assembly!
          </p>
        </div>

        {/* Game state section*/}
        <div>
          <GameStateContainer
            currentword={currentWord}
            farewellText={getFarewellMessage()}
            gameState={isGameWon ? "won" : isGameLost ? "lost" : "playing"}
            remainingAttempts={attempts - wrongGuessCount}
          />
        </div>

        {/* Programming language section */}
        <div className="flex flex-wrap gap-2 items-center justify-center my-4">
          {languages.map((language, index) => {
            return (
              <TechCard
                key={language.id}
                languageData={language}
                isDead={index < wrongGuessCount}
              />
            );
          })}
        </div>

        {/* missing word section */}
        <WordField
          word={currentWord}
          guess={guessedLetters}
          attempts={attempts}
        />

        {/* Keyboard Section */}
        <Keybord
          handleClick={(char) => addGuessedLetter(char)}
          GuessedRightKeys={guessedRightKeys}
          GuessedWrongKeys={guessedWrongKeys}
          isDesabled={isGameOver}
        />

        {/* button Section */}
        {isGameOver ? (
          <CustomButton onClick={resetGame} children={"New Game"} />
        ) : null}
      </section>
    </main>
  );
};

export default AssemblyEndgame;
