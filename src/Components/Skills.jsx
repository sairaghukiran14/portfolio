import { ALL_SKILLS, SKILLS_FEATURED } from "../Hooks/Data";
import { Ticker } from "./Ticker";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="divider" style={{ marginBottom: 90 }} />
      <div data-reveal>
        <div className="section-eyebrow">Skills</div>
        <h2 className="section-title">
          The tools I <span className="serif grad">master</span> daily.
        </h2>
        <p className="section-sub">
          Two years of building, optimizing, and shipping production apps with a modern,
          battle-tested frontend stack.
        </p>
      </div>

      <div className="skills-bento">
        {SKILLS_FEATURED.map((s, i) => (
          <div
            key={i}
            className="skill-tile"
            data-reveal
            data-reveal-delay={((i % 3) * 0.08).toFixed(2)}
          >
            <span className="st-icon">{s.icon}</span>
            <div className="st-name">{s.name}</div>
            <div className="st-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 72 }}>
        <Ticker />
      </div>

      <div className="skills-cloud" data-reveal style={{ marginTop: 56 }}>
        {ALL_SKILLS.map((s, i) => (
          <div key={i} className="skill-bubble">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
