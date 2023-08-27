"use client";

import { useState } from "react";

export default function ScoreCard({ title }) {
  const [score, setScore] = useState(0);

  return (
    <div className="card">
      <h2 className={`card-title ${title.color} select-none`}>{title.value}</h2>
      <div className="card-content" onClick={() => setScore(score + 1)}>
        <p className="text-8xl select-none">{score}</p>
        <p className="justify-end select-none">Click to add point</p>
      </div>
      <div className="card-footer" onClick={() => setScore(score - 1)}>
        <p className="text-red-600 select-none">Remove Point</p>
      </div>
    </div>
  );
}
