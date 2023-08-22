import ScoreCard from "../components/ScoreCard";

export default function ScoreCounter() {
  return (
    <div>
      <h2>Score Counter Page</h2>
      <div className="flex items-center">
        <ScoreCard
          title={{ value: "Blue Team", color: "text-blue-500" }}
          score={1}
        />
        <ScoreCard
          title={{ value: "Red Team", color: "text-red-500" }}
          score={0}
        />
      </div>
    </div>
  );
}
