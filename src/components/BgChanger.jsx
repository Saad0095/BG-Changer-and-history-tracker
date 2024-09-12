import React, { useState } from "react";

const BgChanger = () => {
  const [textColor, setTextColor] = useState("text-black");
  const [bgColour, setbgColour] = useState("bg-white");
  const [colorHistory, setColorHistory] = useState([]);

  return (
    <div className="w-full md:w-1/2 mx-auto shadow-xl rounded bg-white p-12 ">
      <h1 className="text-3xl font-bold text-center p-4">BG CHANGER</h1>
      <div
        className={`color-preview-container w-full h-60 border-2 border-black rounded flex justify-center items-center ${bgColour} ${textColor}`}
      >
        <p>Color Preview</p>
      </div>
      <div className="my-5">
        <h1 className="font-bold text-lg">Select A Color:</h1>
        <div className="flex gap-5 py-2 flex-wrap">
          <button
            className="bg-red-700 text-white p-2 rounded"
            onClick={(e) => {
              setbgColour("bg-red-700");
              setTextColor("text-white");
              setColorHistory([
                ...colorHistory,
                { name: "red", color: "text-white", bgColor: "bg-red-700" },
              ]);
            }}
          >
            red
          </button>
          <button
            className="bg-blue-700 text-white p-2 rounded"
            onClick={() => {
              setbgColour("bg-blue-700");
              setTextColor("text-white");
              setColorHistory([
                ...colorHistory,
                { name: "blue", color: "text-white", bgColor: "bg-blue-700" },
              ]);
            }}
          >
            blue
          </button>
          <button
            className="bg-green-700 text-white p-2 rounded"
            onClick={() => {
              setbgColour("bg-green-700");
              setTextColor("text-white");
              setColorHistory([
                ...colorHistory,
                { name: "green", color: "text-white", bgColor: "bg-green-700" },
              ]);
            }}
          >
            green
          </button>
          <button
            className="bg-yellow-500 text-white p-2 rounded"
            onClick={() => {
              setbgColour("bg-yellow-500");
              setTextColor("text-white");
              setColorHistory([
                ...colorHistory,
                {
                  name: "yellow",
                  color: "text-white",
                  bgColor: "bg-yellow-500",
                },
              ]);
            }}
          >
            yellow
          </button>
          <button
            className="bg-purple-700 text-white p-2 rounded"
            onClick={() => {
              setbgColour("bg-purple-700");
              setTextColor("text-white");
              setColorHistory([
                ...colorHistory,
                {
                  name: "purple",
                  color: "text-white",
                  bgColor: "bg-purple-700",
                },
              ]);
            }}
          >
            purple
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg">Color History:</h1>
        <div className="flex gap-5 py-2 flex-wrap">
          {colorHistory.map((button) => {
            return (
              <button
                key={button.name}
                className={`${button.bgColor} ${button.color} p-2 rounded`}
              >
                {button.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
