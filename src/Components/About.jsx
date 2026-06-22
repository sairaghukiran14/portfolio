const CONTACTS = [
  {
    icon: "✉️",
    text: "avulasairaghukiran@gmail.com",
    href: "mailto:avulasairaghukiran@gmail.com",
  },
  {
    icon: "🔗",
    text: "linkedin.com/in/avulasairaghukiran",
    href: "https://linkedin.com/in/avulasairaghukiran",
  },
  { icon: "📞", text: "+91 8332020170", href: "tel:+918332020170" },
  { icon: "📍", text: "Bengaluru · Available to Relocate", href: null },
];

const STATS = [
  { n: "+25%", l: "Speed" },
  { n: "−35%", l: "Bundles" },
  { n: "96+", l: "Lighthouse" },
  { n: "750+", l: "Users" },
];

export function About() {
  return (
    <section className="about-section" id="about">
      <div>
        <div data-reveal>
          <div className="section-eyebrow">About</div>
          <h2 className="section-title">
            Building the web,
            <br />
            one <span className="serif grad">component</span>
            <br />
            at a time.
          </h2>
        </div>

        <p className="about-desc" data-reveal data-reveal-delay="0.1" style={{ marginTop: 32 }}>
          I'm a <strong>Frontend Developer</strong> with 2+ years building enterprise CRM and
          SaaS products using <strong>React, TypeScript, and Next.js</strong>. I specialize in
          the <strong>Next.js App Router (v13–15)</strong>, SSR/SSG/ISR rendering strategies,{" "}
          <strong>Redux Toolkit</strong> state management, and <strong>TanStack Query</strong>{" "}
          data-fetching.
          <br />
          <br />
          I've delivered measurable production wins — 25% faster rendering, 35% smaller bundles,
          96+ Lighthouse scores — and shipped AI-integrated interfaces on Microsoft Dynamics 365.
          Immediate joiner based in Bengaluru.
        </p>

        <div className="contact-row" data-reveal data-reveal-delay="0.2">
          {CONTACTS.map((c, i) =>
            c.href ? (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-pill"
              >
                <span className="contact-pill-icon">{c.icon}</span>
                {c.text}
              </a>
            ) : (
              <div key={i} className="contact-pill">
                <span className="contact-pill-icon">{c.icon}</span>
                {c.text}
              </div>
            )
          )}
        </div>
      </div>

      <div className="avatar-card" data-reveal data-reveal-delay="0.15">
        <img src="./ProfilePic.png" alt="Avula Sai Raghu Kiran" className="av-avatar" />
        <div className="av-name">Avula Sai Raghu Kiran</div>
        <div className="av-role">Frontend Developer · React · Next.js · TypeScript</div>
        <div className="av-badge">Immediate Joiner</div>

        <div className="av-stats">
          {STATS.map((s, i) => (
            <div key={i} className="av-stat">
              <div
                className="n"
                data-count={s.n}
                style={{ color: i % 2 === 0 ? "var(--indigo)" : "var(--cyan)" }}
              >
                {s.n}
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
