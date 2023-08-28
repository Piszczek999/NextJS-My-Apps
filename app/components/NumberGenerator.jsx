"use client";

import { useEffect, useState } from "react";

export default function NumberGenerator() {
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(10);
  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isGenerating) {
      intervalId = setInterval(() => {
        setRandomNumber(getRandomNumber());
      }, 100);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isGenerating, startIndex, endIndex]);

  function getRandomNumber() {
    return Math.floor(
      startIndex > endIndex
        ? endIndex + Math.random() * (startIndex + 1 - endIndex)
        : startIndex + Math.random() * (endIndex + 1 - startIndex)
    );
  }

  const toggleGeneration = () => {
    setIsGenerating(!isGenerating);
  };

  return (
    <div className={`card ${isGenerating ? "" : "stopped"}`}>
      <div className="card-title" onClick={toggleGeneration}>
        Random Number:
      </div>
      <div className="card-content" onClick={toggleGeneration}>
        <p className="text-8xl text-green-700 capitalize">{randomNumber}</p>
      </div>
      <div className="card-footer">
        <input
          className={`border-2 rounded-full w-20 text-center ${
            isGenerating ? "bg-gray-200" : ""
          } [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
          type="number"
          value={startIndex}
          onChange={(e) => setStartIndex(parseInt(e.target.value))}
          readOnly={isGenerating}
        />
        {" - "}
        <input
          className={`border-2 rounded-full w-20 text-center ${
            isGenerating ? "bg-gray-200" : ""
          } [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
          type="number"
          value={endIndex}
          onChange={(e) => setEndIndex(parseInt(e.target.value))}
          readOnly={isGenerating}
        />
      </div>
    </div>
  );
}
