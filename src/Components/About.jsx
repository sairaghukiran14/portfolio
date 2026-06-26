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
  { n: "96+", l: "Lighthouse" },
  { n: "750+", l: "Users" },
  { n: "2+", l: "Years" },
];

export function About() {
  return (
    <section className="about-section" id="about">
      <div>
        <div data-reveal>
          <div className="section-eyebrow">About</div>
          <h2 className="section-title">
            Building products,
            <br />
            <span className="serif grad">front to back.</span>
          </h2>
        </div>

        <p className="about-desc" data-reveal data-reveal-delay="0.1" style={{ marginTop: 32 }}>
          I'm a <strong>Full-Stack Developer</strong> with 2+ years building enterprise CRM and
          SaaS products end-to-end — from <strong>React &amp; Next.js</strong> frontends to{" "}
          <strong>Node.js, Express &amp; PostgreSQL</strong> backends. I work across SSR/SSG/ISR
          rendering, <strong>Redux Toolkit</strong> state, <strong>REST &amp; GraphQL</strong>{" "}
          APIs, and JWT/OAuth auth.
          <br />
          <br />
          I've delivered measurable production wins — 25% faster rendering, 96+ Lighthouse
          scores, 750+ users secured — and shipped AI-integrated interfaces on Microsoft
          Dynamics 365. Immediate joiner based in Bengaluru.
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
        <div className="av-role">Full-Stack Developer · React · Node.js · PostgreSQL</div>
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
