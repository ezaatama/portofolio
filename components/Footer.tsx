import Link from "next/link";
import { profile } from "@/lib/data";

const elsewhere = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Instagram", href: profile.instagram },
];

const pages = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__hello">
            <p className="footer__line">Thanks for stopping by.</p>
            <a className="footer__mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            <div>
              <h3 className="footer__head">Elsewhere</h3>
              <ul className="footer__list">
                {elsewhere.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="footer__head">Pages</h3>
              <ul className="footer__list">
                {pages.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <small>© 2026 Reza Putra Pratama. {profile.city}.</small>
          <a className="footer__up" href="#main">
            Back to top
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
