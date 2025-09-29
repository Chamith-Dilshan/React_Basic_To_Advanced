import type { MemeData } from "./types/MemeData";

const MemePreview = ({ memeData }: { memeData: MemeData }) => {
  return (
    <section className="max-w-xl mx-auto w-full px-5 pb-10">
      {/* 1. Add a container with 'relative' positioning */}
      <div className="relative">
        {memeData.imageUrl && (
          <img src={memeData.imageUrl} alt="Meme" className="w-full" />
        )}
        {/* 2. These h2 elements are now positioned relative to the div above */}
        <h2 className="meme-text top-4">{memeData.topText}</h2>
        <h2 className="meme-text bottom-4">{memeData.bottomText}</h2>
      </div>
    </section>
  );
};

export default MemePreview;
