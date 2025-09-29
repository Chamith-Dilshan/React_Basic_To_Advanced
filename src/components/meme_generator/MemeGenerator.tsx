import { useState } from "react";
import NavBarComp from "../NavBarComp";
import MemeDataForm from "./MemeDataForm";
import MemePreview from "./MemePreview";
import type { MemeData } from "./types/MemeData";

const MemeGenerator = () => {
  const [memeData, setMemeData] = useState<MemeData>({
    topText: "One does not simply",
    bottomText: "walks into Mordor.",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setMemeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", memeData);
    // Here you would typically send the data to a server
    alert(
      "Form submitted! Check the console for the data.\nForm Data: " +
        JSON.stringify(memeData)
    );
  };

  return (
    <main className="w-screen h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <NavBarComp
        navBarProps={{
          imageSrc: "meme.svg",
          title: "Meme Generator",
          containerClass: "bg-gray-800 text-white items-start",
        }}
      />
      <MemeDataForm
        memeData={memeData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <MemePreview memeData={memeData} />
    </main>
  );
};

export default MemeGenerator;
