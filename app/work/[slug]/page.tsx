import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name}, by Reza Putra Pratama`, description: p.summary };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const shots = p.cover ? [p.cover, ...p.screens] : p.screens;

  return (
    <article className="detail">
      <header className="container detail__head">
        <Link href="/#work" className="detail__back">
          Back to all my work
        </Link>
        <h1 className="detail__title">{p.name}</h1>
        <div className="detail__intro">
          <div className="detail__body">
            {p.body.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <dl className="detail__facts">
            <div>
              <dt>For</dt>
              <dd>{p.company}</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd className="num">{p.years}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{p.kind}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>Flutter</dd>
            </div>
          </dl>
        </div>
        {(p.playStore || p.appStore) && (
          <div className="actions">
            {p.playStore && (
              <a className="btn btn--primary" href={p.playStore}>
                Get it on Google Play
              </a>
            )}
            {p.appStore && (
              <a className="btn" href={p.appStore}>
                Download on the App Store
              </a>
            )}
          </div>
        )}
      </header>

      {p.features && (
        <section className="container detail__features" aria-label={`What ${p.name} does`}>
          <h2 className="detail__subhead">What it does</h2>
          <ul className="features">
            {p.features.map((f) => (
              <li key={f.title}>
                <h3 className="features__title">{f.title}</h3>
                <p>{f.line}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {shots.length > 0 && (
      <section className="container detail__shots" aria-label={`${p.name} screens`}>
        <ul className="shots">
          {shots.map((s, n) => (
            <li key={s.src}>
              <Image
                src={s.src}
                width={s.width}
                height={s.height}
                priority={n === 0}
                sizes="(max-width: 40rem) 100vw, (max-width: 60rem) 50vw, 330px"
                alt={`${p.name} screen ${n + 1}`}
                data-matte={s.matte || undefined}
              />
            </li>
          ))}
        </ul>
      </section>
      )}

      <nav className="container detail__next" aria-label="Next project">
        <Link href={`/work/${next.slug}`} className="next">
          <small>Up next</small>
          <span className="next__name">{next.name}</span>
        </Link>
        <a className="btn" href={`mailto:${profile.email}`}>
          Say hello
        </a>
      </nav>
    </article>
  );
}
