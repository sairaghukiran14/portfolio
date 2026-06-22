import { useState } from "react";
import { EXPERIENCE } from "../Hooks/Data";

export function Experience() {
  const [open, setOpen] = useState(() => EXPERIENCE.map((_, i) => i));

  const toggle = (i) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <section className="section" id="experience">
      <div className="divider" style={{ marginBottom: 90 }} />
      <div data-reveal>
        <div className="section-eyebrow">Experience</div>
        <h2 className="section-title">
          Where I've made an <span className="serif grad">impact.</span>
        </h2>
        <p className="section-sub">
          Real results at real companies — every project shipped, every metric moved.
        </p>
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((e, i) => {
          const isOpen = open.includes(i);
          return (
            <div
              key={i}
              className="exp-card"
              data-reveal
              data-reveal-delay={(i * 0.08).toFixed(2)}
            >
              <div className="exp-header" onClick={() => toggle(i)}>
                <div className="exp-header-left">
                  <div
                    className="exp-logo"
                    style={{ background: `${e.color}1f`, borderColor: `${e.color}3a` }}
                  >
                    {e.icon}
                  </div>
                  <div>
                    <div className="exp-company">{e.company}</div>
                    <div className="exp-role-text">{e.role}</div>
                  </div>
                </div>
                <div className="exp-header-right">
                  <div className="exp-period">{e.period}</div>
                  <div className={`exp-chevron ${isOpen ? "open" : ""}`}>▼</div>
                </div>
              </div>

              <div className="exp-metrics-row">
                {e.highlights.map((h, j) => (
                  <div key={j} className="exp-metric">
                    <div className="em-num" style={{ color: e.color }}>
                      {h.metric}
                    </div>
                    <div className="em-desc">{h.desc}</div>
                  </div>
                ))}
              </div>

              {isOpen && (
                <div className="exp-bullets-wrap">
                  {e.bullets.map((b, j) => (
                    <div key={j} className="exp-bullet">
                      {b}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
