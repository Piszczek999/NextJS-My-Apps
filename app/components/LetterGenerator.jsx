"use client";

import { useEffect, useState } from "react";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

export default function LetterGenerator() {
  const [randomLetter, setRandomLetter] = useState(getRandomLetter);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isGenerating) {
      intervalId = setInterval(() => {
        setRandomLetter(getRandomLetter());
      }, 100);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isGenerating]);

  const toggleGeneration = () => {
    setIsGenerating(!isGenerating);
  };

  return (
    <div
      className={`card ${isGenerating ? "" : "stopped"}`}
      onClick={toggleGeneration}
    >
      <div className="card-title">Random Letter:</div>
      <div className="card-content">
        <p className="text-8xl text-green-700 capitalize">{randomLetter}</p>
      </div>
    </div>
  );
}
