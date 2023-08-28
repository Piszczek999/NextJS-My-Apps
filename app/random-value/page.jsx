import LetterGenerator from "../components/LetterGenerator";
import NumberGenerator from "../components/NumberGenerator";

export default function RandomValueGenerator() {
  return (
    <main className="justify-center">
      <div className="flex justify-center mt-5 gap-4">
        <LetterGenerator />
        <NumberGenerator />
      </div>
    </main>
  );
}
