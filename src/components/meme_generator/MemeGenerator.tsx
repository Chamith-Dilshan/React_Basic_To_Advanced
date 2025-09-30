import { useEffect, useState } from "react";
import NavBarComp from "../NavBarComp";
import MemeDataForm from "./MemeDataForm";
import MemePreview from "./MemePreview";
import type { MemeData, ApiMemeProps } from "./types/MemeData";

const MemeGenerator = () => {
  const [memeData, setMemeData] = useState<MemeData>({
    topText: "One does not simply",
    bottomText: "walks into Mordor.",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  // State to hold the array of all memes from the API
  const [allMemes, setAllMemes] = useState<ApiMemeProps[]>([]);

  // Fetch memes from the API only once when the component loads
  /*
  React’s useEffect callback is not meant to return a promise, but an optional cleanup function. Making the effect callback async changes its return type to a promise, which can cause subtle bugs and warnings.So use then/catch instead of async/await here.
  */
  useEffect(() => {
    return () => {
      fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setAllMemes(data.data.memes);
          }
        })
        .catch((error) => console.error("Failed to fetch memes:", error));
      console.log("Meme Api request made");
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setMemeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getRandomMeme = (e: React.FormEvent) => {
    e.preventDefault();
    if (allMemes.length > 0) {
      const randomNumber = Math.floor(Math.random() * allMemes.length);
      const randomMeme = allMemes[randomNumber];
      setMemeData((prevData) => ({
        ...prevData,
        imageUrl: randomMeme.url,
      }));
      console.log("Random meme", randomNumber);
    }
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
        onSubmit={getRandomMeme}
      />
      <MemePreview memeData={memeData} />
    </main>
  );
};

export default MemeGenerator;
