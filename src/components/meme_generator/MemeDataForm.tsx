import React from "react";
import type { MemeData } from "./types/MemeData";

interface FormProps {
  memeData: MemeData;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const MemeDataForm = ({ memeData, onChange, onSubmit }: FormProps) => {
  return (
    <section>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-3 p-5 
          max-w-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <label htmlFor="topText" className="flex flex-col w-full">
            <span className="text-sm font-medium mb-2">Top Text</span>
            <input
              type="text"
              id="topText"
              name="topText"
              value={memeData.topText}
              onChange={onChange}
              className="flex-1 lg:w-lg border border-gray-300 px-4 py-2 rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Hello"
            />
          </label>
          <label htmlFor="bottomText" className="flex flex-col w-full">
            <span className="text-sm font-medium mb-2">Bottom Text</span>
            <input
              type="text"
              id="bottomText"
              name="bottomText"
              value={memeData.bottomText}
              onChange={onChange}
              className="flex-1 lg:w-lg border border-gray-300 px-4 py-2 rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="World"
            />
          </label>
        </div>

        <div className="flex flex-row items-center justify-center mt-4">
          <button
            type="submit"
            className="px-5 py-2  font-medium 
          shadow bg-green-600
                             hover:bg-green-700 rounded text-white transition"
          >
            Get a new meme image
          </button>
        </div>
      </form>
    </section>
  );
};

export default MemeDataForm;
