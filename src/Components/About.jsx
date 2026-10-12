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
  { icon: "📞", text: "+91 6300109886", href: "tel:+916300109886" },
  { icon: "📍", text: "Bengaluru, India · Immediate Joiner", href: null },
];

const STATS = [
  { n: "+25%", l: "Speed" },
  { n: "96+", l: "Lighthouse" },
  { n: "750+", l: "Users" },
  { n: "3+", l: "Years" },
];

export function About() {
  return (
    <section className="about-section" id="about">
      <div>
        <div data-reveal>
          <div className="section-eyebrow">About</div>
          <h2 className="section-title">
            Building intelligent products,
            <br />
            <span className="serif grad">models to interfaces.</span>
          </h2>
        </div>

        <p className="about-desc" data-reveal data-reveal-delay="0.1" style={{ marginTop: 32 }}>
          I'm an <strong>AI Application Engineer</strong> and <strong>Full-Stack Developer</strong> with 3+ years
          shipping production React, TypeScript, and Node.js systems, now focused on LLM application engineering:
          <strong> RAG pipelines</strong>, <strong>DAG orchestration</strong>, <strong>evaluations &amp; guardrails</strong>, and <strong>tracing</strong>.
          <br />
          <br />
          I built <strong>Pravah</strong>, a visual AI pipeline builder with a topological-sort DAG engine and eval/regression suite. At{" "}
          <strong>Alphavima Technologies</strong>, I integrated AI suggestion agents into enterprise CRM chat to cut manual lookup time by 35%.
          Comfortable owning full feature cycles from database schemas to deployed UI. Immediate joiner based in Bengaluru.
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
        <div className="av-role">AI Application Engineer · Full Stack Developer</div>
        <div className="av-badge">Immediate Joiner · Bengaluru</div>

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

        <div className="av-cert">
          <span className="cert-icon">📜</span>
          <div className="cert-text">
            <div className="cert-title">Full Stack MERN Certification</div>
            <div className="cert-sub">GUVI · 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}
