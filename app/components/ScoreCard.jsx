export default function ScoreCard({ title, score, onIncrement, onDecrement }) {
  return (
    <div className="card max-w-sm grow hover:scale-105">
      <h2 className={`card-title ${title.color}`}>{title.value}</h2>
      <div
        className="card-content border-b-2 p-10 hover:bg-green-300 transition"
        onClick={onIncrement}
      >
        <p className="text-8xl">{score}</p>
        <p className="justify-end">Click to add point</p>
      </div>
      <div
        className="card-footer hover:bg-red-300 transition"
        onClick={onDecrement}
      >
        <p className="text-red-600">Remove Point</p>
      </div>
    </div>
  );
}
