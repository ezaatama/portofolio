"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="index">
      <ol className="index__list">
        {projects.map((p, i) => (
          <li key={p.slug} className={i === active ? "index__row is-active" : "index__row"}>
            <Link
              href={`/work/${p.slug}`}
              className="index__link"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="index__num num" aria-hidden="true">
                {i + 1}
              </span>
              <span className="index__text">
                <span className="index__name">{p.name}</span>
                <span className="index__meta">{p.summary}</span>
              </span>
              <span className="index__side">
                <span>{p.company}</span>
              </span>
              {p.cover ? (
                <Image
                  className="index__thumb"
                  data-matte={p.cover.matte || undefined}
                  src={p.cover.src}
                  width={p.cover.width}
                  height={p.cover.height}
                  sizes="96px"
                  alt=""
                />
              ) : (
                <span className="index__thumb index__thumb--type" aria-hidden="true">
                  {p.name.charAt(0)}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ol>

      <figure className="index__preview">
        <div className="index__stage">
          {projects.map((p, i) =>
            p.cover ? (
              <Image
                key={p.slug}
                src={p.cover.src}
                width={p.cover.width}
                height={p.cover.height}
                sizes="(max-width: 60rem) 0px, 520px"
                alt={`${p.name} app screen`}
                className={i === active ? "index__shot is-active" : "index__shot"}
                data-matte={p.cover.matte || undefined}
              />
            ) : (
              <div
                key={p.slug}
                className={i === active ? "index__shot standin is-active" : "index__shot standin"}
              >
                <span className="standin__name">{p.name}</span>
                <span className="standin__kind">{p.kind}</span>
              </div>
            ),
          )}
        </div>
      </figure>
    </div>
  );
}
