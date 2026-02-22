import { PROJECTS } from "../Hooks/Data";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="divider" style={{ marginBottom: 100 }} />
      <div className="reveal">
        <div className="section-eyebrow">Projects</div>
        <h2 className="section-title large">Built from scratch.<br/>Shipped to users.</h2>
        <p className="section-sub">Personal projects that solve real problems — from real-time communication to AI-powered tooling.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div key={i} className={`project-card reveal reveal-d${i + 1}`}>
            <div className="project-bg" style={{ background: p.grad, position: "absolute", inset: 0 }} />
            <div className="project-emoji-wrap">{p.emoji}</div>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75) 100%)" }} />
            <div className="project-inner">
              <div className="project-eyebrow" style={{ color: p.accent }}>Personal Project</div>
              <div className="project-name">{p.name}</div>
              <div className="project-tagline">{p.tagline}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-chips">
                {p.chips.map((c, j) => <span key={j} className="p-chip">{c}</span>)}
              </div>
              <div className="project-metrics">
                {p.metrics.map(([val, key], j) => (
                  <div key={j} className="pm-item">
                    <div className="pm-val" style={{ color: p.accent }}>{val}</div>
                    <div className="pm-key">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}