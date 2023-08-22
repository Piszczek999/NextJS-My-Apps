import React from "react";

export default function ScoreCard({ title, score }) {
  return (
    <div className="card">
      <h2 className={`card-title ${title.color}`}>{title.value}</h2>
      <div className="card-content">
        <p className="text-8xl">{score}</p>
        <p className="mt-10">Click to add point</p>
      </div>
      <div className="card-footer">
        <p className="text-red-600">Remove Point</p>
      </div>
    </div>
  );
}
