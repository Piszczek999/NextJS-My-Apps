"use client";

import React, { useState, useEffect } from "react";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

export default function RandomValueGenerator() {
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
    <main className="justify-center">
      <div className="flex justify-center mt-5">
        <div
          className={`card ${isGenerating ? "" : "stopped"}`}
          onClick={toggleGeneration}
        >
          <div className="card-title">Random Letter:</div>
          <div className="card-content">
            <p className="text-6xl text-green-700 capitalize">{randomLetter}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
