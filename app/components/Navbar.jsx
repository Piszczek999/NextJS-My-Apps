import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="border-r-2 pr-4 flex items-center gap-4">
        <img src="/my-apps-logo.png" alt="Logo" width={40} />
        <h1 className="text-4xl hover:text-green-700">My Apps</h1>
      </Link>
      <div className="flex justify-between grow gap-4">
        <div className="flex gap-4 ml-4 items-center">
          <Link href="/" className="nav-item">
            Home
          </Link>
          <Link href="/score-counter" className="nav-item">
            Score Counter
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="nav-item">
            Log in
          </Link>
          <Link href="/register" className="nav-item">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
