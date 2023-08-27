"use client";

import { useState } from "react";
import ScoreCard from "../components/ScoreCard";

export default function ScoreCounter() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  function incrementScore(team) {
    team === "A" ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
  }

  function decrementScore(team) {
    team === "A" ? setScoreA(scoreA - 1) : setScoreB(scoreB - 1);
  }

  return (
    <main className="text-center">
      <h2>Score Counter Page</h2>
      <div className="flex justify-center">
        <ScoreCard
          title={{ value: "Blue Team", color: "text-blue-500" }}
          score={scoreA}
          onIncrement={() => incrementScore("A")}
          onDecrement={() => decrementScore("A")}
        />
        <ScoreCard
          title={{ value: "Red Team", color: "text-red-500" }}
          score={scoreB}
          onIncrement={() => incrementScore("B")}
          onDecrement={() => decrementScore("B")}
        />
      </div>
      <button
        className="btn mt-4 w-1/4"
        onClick={() => {
          setScoreA(0);
          setScoreB(0);
        }}
      >
        Reset
      </button>
    </main>
  );
}
