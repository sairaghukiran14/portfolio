import { ALL_SKILLS, SKILLS_FEATURED } from "../Hooks/Data";
import { Ticker } from "./Ticker";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="divider" style={{ marginBottom: 100 }} />
      <div className="reveal">
        <div className="section-eyebrow">Skills</div>
        <h2 className="section-title large">
          The tools I<br />
          master daily.
        </h2>
        <p className="section-sub">
          Two years of building, optimizing, and shipping production apps with a
          modern, battle-tested stack.
        </p>
      </div>

      <div className="skills-bento">
        {SKILLS_FEATURED.map((s, i) => (
          <div key={i} className={`skill-tile reveal reveal-d${(i % 3) + 1}`}>
            <span className="st-icon">{s.icon}</span>
            <div className="st-name">{s.name}</div>
            <div className="st-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 80 }}>
        <Ticker />
      </div>

      <div className="skills-cloud reveal" style={{ marginTop: 60 }}>
        {ALL_SKILLS.map((s, i) => (
          <div
            key={i}
            className="skill-bubble"
            style={{ animationDelay: i * 20 + "ms" }}
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
