import { languages } from "../../data/languagesData";
import GameStateContainer from "../assembly_endGame/GameStateContainer";
import TechCard from "../assembly_endGame/TechCard";
import CustomButton from "../CustomButton";
import Keybord from "./Keybord";
import WordField from "./WordField";

const AssemblyEndgame = () => {
  return (
    <main>
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
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </div>

        {/* Game state section*/}
        <div>
          <GameStateContainer isWon={true} />
        </div>

        {/* Programming language section */}
        <div className="flex flex-wrap gap-2 items-center justify-center my-4">
          {languages.map((language) => (
            <TechCard
              key={language.id}
              languageData={language}
              isDead={false}
            />
          ))}
        </div>

        {/* missing word section */}
        <WordField word="BELL" guess={["A", "B", "E", "N", "L"]} />

        {/* Keyboard Section */}
        <Keybord
          handleClick={(char) => console.log("Key Clicked " + char)}
          GuessedRightKeys={[]}
          GuessedWrongKeys={[]}
        />

        {/* button Section */}
        <CustomButton
          onClick={() => console.log("Button Clicked")}
          children={"New Game"}
        />
      </section>
    </main>
  );
};

export default AssemblyEndgame;
