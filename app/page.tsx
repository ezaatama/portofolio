import Image from "next/image";
import { WorkIndex } from "@/components/WorkIndex";
import { Contact } from "@/components/Contact";
import { CaseCarousel } from "@/components/CaseCarousel";
import { experience, profile, projectBy, projects } from "@/lib/data";

const skills = [
  { word: "Flutter", line: "One Dart codebase for Android and iOS. I’ve worked in it every day since 2021." },
  { word: "Bloc", line: "Tidy state with Bloc and Cubit." },
  { word: "REST APIs", line: "Wired up, tested, and kept in sync with the backend team." },
  { word: "Golang", line: "I write the endpoint myself when the app needs one." },
  { word: "Store releases", line: "Play Store and App Store, with UAT notes for your QA." },
];

export default function Home() {
  const art = ["ngaji-kuy", "gethome", "koperasi-digital-propertree"].map((slug) => projectBy(slug).cover!);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>
              Hi, I’m Reza.
              <br />
              I build Mobile or Web apps.
            </h1>
            <p className="lead">Four are live in the stores. I’d love to build yours next.</p>
            <div className="actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                Say hello
              </a>
              <a className="btn" href={profile.cv} download>
                Download my CV
              </a>
            </div>
          </div>
          <div className="hero__art">
            {art.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                width={s.width}
                height={s.height}
                priority
                sizes="(max-width: 60rem) 40vw, 260px"
                alt={i === 1 ? "Gethome.id home screen" : ""}
                className={`hero__phone hero__phone--${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-head">
        <div className="container">
          <div className="split-head">
            <h2 id="work-head">Apps I’ve built</h2>
            <p className="lead">Six so far, newest first.</p>
          </div>
          <WorkIndex projects={projects} />
        </div>
      </section>

      <CaseCarousel projects={projects} start={projects.findIndex((p) => p.slug === "phinter-mobile")} />

      <section className="skills" aria-labelledby="skills-head">
        <div className="container">
          <h2 id="skills-head">How I can help your team</h2>
          <ul className="skills__grid">
            {skills.map((s, i) => (
              <li key={s.word} className={i === 0 ? "skill skill--lead" : i === 4 ? "skill skill--mint" : "skill"}>
                <h3 className="skill__word">{s.word}</h3>
                <p className="skill__line">{s.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="exp-head">
        <div className="container">
          <div className="sheet">
            <h2 id="exp-head">Where I’ve worked so far</h2>
            <ol className="exp">
              {experience.map((e) => (
                <li className="exp__row" key={e.company}>
                  <span className="exp__years num">{e.years}</span>
                  <span className="exp__who">
                    <span className="exp__company">{e.company}</span>
                    <span className="exp__role">{e.role}</span>
                  </span>
                  <span className="exp__line">{e.line}</span>
                </li>
              ))}
            </ol>
            <dl className="edu">
              <div>
                <dt>Bachelor of Information Systems, 2023</dt>
                <dd>Universitas Nusa Mandiri, GPA 3.84</dd>
              </div>
              <div>
                <dt>Diploma in Information Systems, 2020</dt>
                <dd>Universitas Bina Sarana Informatika, GPA 3.80</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
