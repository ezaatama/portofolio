import { profile } from "@/lib/data";

export function ArrowIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

type Channel = { label: string; value: string; href?: string; download?: boolean };

const channels: Channel[] = [
  { label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
  { label: "LinkedIn", value: "reza-putra-pratama", href: profile.linkedin },
  { label: "Curriculum vitae", value: "resume_reza.pdf", href: profile.cv, download: true },
  { label: "Location", value: profile.city },
];

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-head">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__intro">
            <p className="contact__status">
              <span className="contact__dot" aria-hidden="true" />
              Available for new roles and projects
            </p>
            <h2 id="contact-head">Let’s build something together</h2>
            <p className="lead">Looking for a Flutter developer? Drop me a line, I’d be glad to talk.</p>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              <span>{profile.email}</span>
              <ArrowIcon size={24} />
            </a>
          </div>

          <dl className="contact__list">
            {channels.map((c) => (
              <div className="contact__row" key={c.label}>
                <dt>{c.label}</dt>
                <dd>
                  {c.href ? (
                    <a href={c.href} download={c.download || undefined}>
                      {c.value}
                      <ArrowIcon size={16} />
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
