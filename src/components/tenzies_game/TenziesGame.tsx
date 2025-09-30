import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import { gsap } from "gsap";
import Confetti from "react-confetti";
import DieCard from "./DieCard";
import CustomButton from "./CustomButton";

interface diceProps {
  id: string;
  value: number;
  isHeld: boolean;
}

const TenziesGame = () => {
  const generateNewDiceValues = () => {
    console.log("Generating new dice values...");
    // here are two ways to create a new array of 10 dice objects
    // with random values. Pick one.
    return Array.from({ length: 10 }, () => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
    // return new Array(10).fill(0).map((_, i) => {
    //   return {
    //     id: i + 1,
    //     value: Math.ceil(Math.random() * 6),
    //     isHeld: false
    //   };
    // });
  };

  const [dice, setDice] = useState<diceProps[]>(() => generateNewDiceValues());
  //usually we use 'useRef' to reference a DOM element
  //but here we are using it to keep track of the button element
  //so that we can focus on it after the game is reset
  const buttonRef = useRef<HTMLButtonElement>(null);

  const resetGame = () => {
    const newDiceValues = generateNewDiceValues();
    setDice(newDiceValues);
    console.log("Array state:", newDiceValues);
  };

  const rollDice = () => {
    const newDiceValues = dice.map((die) =>
      die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
    );
    setDice(newDiceValues);
    console.log("New dice value generated - ", newDiceValues);
  };

  const freezeDie = (id: string) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
    console.log(`Die with id ${id} changed.`);
  };

  const launchConfetti = () => {
    const colors = ["#EF4444", "#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"];

    Array.from({ length: 80 }).forEach(() => {
      const el = document.createElement("div");
      el.className = "w-2 h-2 absolute top-0 left-1/2 rounded-sm";
      el.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      el.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(el);

      gsap.to(el, {
        y: window.innerHeight + 50,
        x: "+=" + (Math.random() * 200 - 100),
        rotation: Math.random() * 720,
        duration: Math.random() * 3 + 2,
        ease: "power1.out",
        onComplete: () => el.remove(), // cleanup
      });
    });
  };

  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value
  );

  //since we are dealing with DOM element(dealing with external elements)
  // here, we can use useEffect
  useEffect(() => {
    if (gameWon && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  if (gameWon) {
    launchConfetti();
  }

  return (
    <main>
      {gameWon && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>
            Congratulations! You've won the game! Please Press "New Game" to
            play again.
          </p>
        )}
      </div>
      <section
        className="w-screen h-screen flex flex-col overflow-x-hidden items-center 
      justify-center bg-gradient-to-b from-indigo-200 to-green-200 p-4"
      >
        <div className="w-full max-w-md p-6 md:p-10 bg-gray-100 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Tenzies</h1>
          <p className="text-gray-600 text-sm mb-4 md:mb-6">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="grid grid-cols-5 gap-2 md:gap-3 mb-2 md:mb-4">
            {dice.map((die) => (
              <DieCard
                key={die.id}
                id={die.id}
                value={die.value}
                isHeld={die.isHeld}
                onClick={() => freezeDie(die.id)}
              />
            ))}
          </div>
          <div className="flex justify-center gap-2">
            <CustomButton
              ref={buttonRef}
              onClick={gameWon ? resetGame : rollDice}
            >
              {gameWon ? "New Game" : "Roll"}
            </CustomButton>
            <CustomButton
              onClick={resetGame}
              containerClass="bg-red-600 hover:bg-red-700"
            >
              Reset
            </CustomButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TenziesGame;
