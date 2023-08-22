import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/score-counter">Score Counter</Link>
    </nav>
  );
}
