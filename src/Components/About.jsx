export function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-left">
        <div className="reveal">
          <div className="section-eyebrow">About</div>
          <h2 className="section-title">
            Building the web,
            <br />
            one component
            <br />
            at a time.
          </h2>
        </div>
        <p className="about-desc reveal reveal-d1">
          I'm a <strong>Full Stack Developer</strong> with 2+ years of experience designing and shipping scalable, end-to-end web applications across frontend, backend, database, cloud, and AI layers. I specialize in building high-performance systems using <strong>React.js, Node.js, TypeScript, AWS, and PostgreSQL</strong>, while leveraging modern AI tools like <strong>Claude Code, Gemini, and Antigravity</strong> to accelerate development, automate workflows, and enhance product intelligence.

          I focus on delivering production-ready solutions with clean architecture, reusable components, and seamless integrations — combining engineering precision with AI-driven efficiency to build smarter, faster, and more impactful applications.
        </p>
        {/* <p className="about-desc reveal reveal-d2" style={{ marginBottom: 32 }}>
          Currently at <strong>Alphavima Technologies</strong>, I ship products
          used by real teams every day — from asset schedulers to CRM
          integrations.
        </p> */}
        <div className="contact-row reveal reveal-d3">
          {[
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
          ].map((c, i) =>
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
            ),
          )}
        </div>
      </div>
      <div className="about-visual reveal reveal-d1">
        <div className="avatar-card">

          <img src="./ProfilePic.png" alt="" className="av-avatar" />

          <div className="av-name">Avula Sai Raghu Kiran</div>
          <div className="av-role">
            Full Stack Developer · React & Node.js · AWS
          </div>
          <div className="av-badge">Immediate Joiner</div>

          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              position: "relative",
              zIndex: 1,
            }}
          >
            {[
              { n: "+30%", l: "Efficiency" },
              { n: "+25%", l: "Speed" },
              { n: "400+", l: "Assets" },
              { n: "750+", l: "Users" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "14px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,.05)",
                  border: "0.5px solid rgba(255,255,255,.1)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Unbounded',sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: i % 2 === 0 ? "var(--blue)" : "var(--violet)",
                    marginBottom: 4,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,.4)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
