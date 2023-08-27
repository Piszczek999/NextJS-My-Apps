export default function ScoreCard({ title, score, onIncrement, onDecrement }) {
  return (
    <div className="card">
      <h2 className={`card-title ${title.color}`}>{title.value}</h2>
      <div className="card-content" onClick={onIncrement}>
        <p className="text-8xl">{score}</p>
        <p className="justify-end">Click to add point</p>
      </div>
      <div className="card-footer" onClick={onDecrement}>
        <p className="text-red-600">Remove Point</p>
      </div>
    </div>
  );
}
