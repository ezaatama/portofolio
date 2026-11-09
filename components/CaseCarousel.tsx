"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project, Shot } from "@/lib/data";

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "prev" ? <path d="M19 12H5M11 6l-6 6 6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  );
}

// three screens per project: its screens, topped up with the cover when there are fewer
const shotsOf = (p: Project): Shot[] => (p.screens.length >= 3 ? p.screens : [...(p.cover ? [p.cover] : []), ...p.screens]).slice(0, 3);

const pad = (n: number) => String(n).padStart(2, "0");

export function CaseCarousel({ projects, start = 0 }: { projects: Project[]; start?: number }) {
  const [index, setIndex] = useState(Math.max(0, start));
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animate, setAnimate] = useState(false);
  const total = projects.length;
  const p = projects[index];
  const shots = shotsOf(p);
  const sectionRef = useRef<HTMLElement>(null);

  const go = useCallback(
    (step: 1 | -1) => {
      setAnimate(true);
      setDir(step === 1 ? "next" : "prev");
      setIndex((i) => (i + step + total) % total);
    },
    [total],
  );

  // left and right arrow keys move between projects while focus is inside the section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  const anim = animate ? ` is-${dir}` : "";

  return (
    <section className="case" aria-roledescription="carousel" aria-labelledby="case-head" ref={sectionRef}>
      <div className="container">
        <div className="case__head">
          <div className={`case__title${anim}`} key={`t-${p.slug}`} aria-live="polite">
            <p className="case__eyebrow">
              {p.company} · {p.years}
            </p>
            <h2 id="case-head">A closer look at {p.name}</h2>
            <p className="lead">{p.summary}</p>
          </div>

          <div className="case__nav">
            <span className="case__count num" aria-hidden="true">
              <strong>{pad(index + 1)}</strong> / {pad(total)}
            </span>
            <button type="button" className="case__arrow" onClick={() => go(-1)} aria-label="Previous project">
              <Chevron dir="prev" />
            </button>
            <button type="button" className="case__arrow" onClick={() => go(1)} aria-label="Next project">
              <Chevron dir="next" />
            </button>
          </div>
        </div>

        <div className="case__progress" aria-hidden="true">
          <span style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>

        <div className={`case__grid${anim}`} key={`g-${p.slug}`}>
          {shots.map((s, i) => (
            <div className="case__shot" key={s.src} style={{ animationDelay: `${i * 60}ms` }}>
              <Image
                src={s.src}
                width={s.width}
                height={s.height}
                sizes="(max-width: 40rem) 33vw, (max-width: 60rem) 30vw, 300px"
                alt={`${p.name} screen ${i + 1}`}
                data-matte={s.matte || undefined}
              />
            </div>
          ))}
          <div className="case__facts" style={{ animationDelay: `${shots.length * 60}ms` }}>
            <dl>
              <div>
                <dt>My role</dt>
                <dd>{p.role}</dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>{p.stack}</dd>
              </div>
              <div>
                <dt>Highlight</dt>
                <dd>{p.highlight}</dd>
              </div>
            </dl>
            <Link className="btn" href={`/work/${p.slug}`}>
              See the app
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
