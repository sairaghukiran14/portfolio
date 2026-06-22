import gsap from "gsap";
import { PROJECTS } from "../Hooks/Data";

function tiltMove(e) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  gsap.to(card, {
    rotateY: px * 9,
    rotateX: -py * 9,
    transformPerspective: 1000,
    transformOrigin: "center",
    duration: 0.5,
    ease: "power2.out",
    overwrite: "auto",
  });
}

function tiltReset(e) {
  gsap.to(e.currentTarget, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.7,
    ease: "power3.out",
    overwrite: "auto",
  });
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="divider" style={{ marginBottom: 90 }} />
      <div data-reveal>
        <div className="section-eyebrow">Projects</div>
        <h2 className="section-title">
          Built from scratch. <span className="serif grad">Shipped</span> to users.
        </h2>
        <p className="section-sub">
          Products that solve real problems — from privacy-first AI tooling to full-stack SaaS
          platforms.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="project-card"
            data-reveal
            data-reveal-delay={((i % 2) * 0.1).toFixed(2)}
            onMouseMove={tiltMove}
            onMouseLeave={tiltReset}
          >
            <div className="project-bg" style={{ background: p.grad }} />
            <div className="project-emoji-wrap">{p.emoji}</div>
            <div className="project-scrim" />

            <div className="project-inner">
              <div className="project-eyebrow" style={{ color: p.accent }}>
                Project
              </div>
              <div className="project-name">{p.name}</div>
              <div className="project-tagline">{p.tagline}</div>
              <div className="project-desc">{p.desc}</div>

              <div className="project-chips">
                {p.chips.map((c, j) => (
                  <span key={j} className="p-chip">
                    {c}
                  </span>
                ))}
              </div>

              <div className="project-metrics">
                {p.metrics.map(([val, key], j) => (
                  <div key={j}>
                    <div className="pm-val" style={{ color: p.accent }}>
                      {val}
                    </div>
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
