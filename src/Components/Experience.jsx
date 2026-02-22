import { useState } from "react";
import { EXPERIENCE } from "../Hooks/Data";

export function Experience() {
  const [expanded, setExpanded] = useState(0);
  return (
    <section className="section" id="experience">
      <div className="divider" style={{ marginBottom: 100 }} />
      <div className="reveal">
        <div className="section-eyebrow">Experience</div>
        <h2 className="section-title large">
          Where I've
          <br />
          made an impact.
        </h2>
        <p className="section-sub">
          Real results at real companies. Every project shipped, every metric
          improved.
        </p>
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <div
            key={i}
            className={`exp-card reveal reveal-d${i + 1}`}
            style={{ background: e.bg, cursor: "pointer" }}
            onClick={() => setExpanded(expanded === i ? -1 : i)}
          >
            <div className="exp-header">
              <div className="exp-header-left">
                <div
                  className="exp-logo"
                  style={{
                    background: `${e.color}22`,
                    border: `0.5px solid ${e.color}44`,
                  }}
                >
                  {e.icon}
                </div>
                <div className="exp-title-block">
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-role-text">{e.role}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {e.live ? (
                  <div className="exp-live-badge">
                    <div className="exp-live-dot" />
                    ACTIVE
                  </div>
                ) : (
                  <div className="exp-period">{e.period}</div>
                )}
                <div
                  style={{
                    color: "rgba(255,255,255,.3)",
                    fontSize: 20,
                    transform:
                      expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform .3s",
                  }}
                >
                  ⌄
                </div>
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

            {expanded === i && (
              <div className="exp-bullets-wrap">
                {e.bullets.map((b, j) => (
                  <div key={j} className="exp-bullet">
                    {b}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
