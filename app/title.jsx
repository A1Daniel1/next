import React from "react";

function ImageTitle() {
  return (
    <div className="landing-page">

      <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-center">
        <h1 className="font-sans text-7xl">welcome to my app</h1>
        <p className="italic">the app to do whatever i want</p>

        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Start
        </button>
      </div>
    </div>
  );
}

export default ImageTitle;
