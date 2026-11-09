import Link from "next/link";

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__mark" aria-label="Reza Putra Pratama, home">
          <span className="nav__full">Reza Putra Pratama</span>
          <span className="nav__short">Reza</span>
        </Link>
        <nav className="nav__links" aria-label="Main">
          <Link href="/#work" className="nav__link">
            Work
          </Link>
          <Link href="/#experience" className="nav__link nav__link--wide">
            Experience
          </Link>
          <Link href="/#contact" className="btn btn--primary btn--small">
            Say hello
          </Link>
        </nav>
      </div>
    </header>
  );
}
