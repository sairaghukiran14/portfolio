import { CodeCard } from "./CodeCard";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <CodeCard side="left" />
      <CodeCard side="right" />

      <div className="hero-eyebrow">Full Stack Developer · React & Node.js</div>
      <h1 className="hero-title">
        <span className="line1">Crafted with code.</span>
        <span className="line2">Powered by React.</span>
      </h1>
      <p className="hero-sub">
        Hi, I'm{" "}
        <strong style={{ color: "rgba(255,255,255,.85)", fontWeight: 600 }}>
          Sai Raghu Kiran
        </strong>{" "}
        — a Full Stack Developer who turns complex problems into elegant, fast, and
        beautiful digital experiences.
      </p>
      <div className="hero-actions">
        <a href="#work">
          <button className="btn-primary">See My Work →</button>
        </a>
        <a href="#contact">
          <button className="btn-ghost">Get in Touch</button>
        </a>
      </div>

      <div className="hero-metrics">
        {[
          { num: "+30%", label: "Efficiency Boost" },
          { num: "+25%", label: "Faster Rendering" },
          { num: "400+", label: "Assets Managed" },
          { num: "2+", label: "Years Experience" },
        ].map((m, i) => (
          <div key={i} className="metric-item">
            <div className="metric-num">{m.num}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
