import ScoreCard from "../components/ScoreCard";

export default function ScoreCounter() {
  return (
    <div>
      <h2 className="text-center">Score Counter Page</h2>
      <div className="flex justify-center">
        <ScoreCard title={{ value: "Blue Team", color: "text-blue-500" }} />
        <ScoreCard title={{ value: "Red Team", color: "text-red-500" }} />
      </div>
    </div>
  );
}
