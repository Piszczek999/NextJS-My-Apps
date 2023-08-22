import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>My Apps</h2>
      <Link href="/">Home</Link>
      <Link href="/score-counter">Score Counter</Link>
    </nav>
  );
}
