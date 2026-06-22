import { CodeCard } from "./CodeCard";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <CodeCard side="left" />
      <CodeCard side="right" />

      <div className="hero-eyebrow">Frontend Developer · React · Next.js · TypeScript</div>
      <h1 className="hero-title">
        <span className="line1">Crafted with code.</span>
        <span className="line2">Powered by Next.js.</span>
      </h1>
      <p className="hero-sub">
        Hi, I'm{" "}
        <strong style={{ color: "rgba(255,255,255,.85)", fontWeight: 600 }}>
          Sai Raghu Kiran
        </strong>{" "}
        — a Frontend Developer building enterprise CRM &amp; SaaS products with React,
        TypeScript, and Next.js, turning complex problems into fast, accessible interfaces.
      </p>
      <div className="hero-actions">
        <a href="#work">
          <button className="btn-primary">See My Work →</button>
        </a>
        <a href="/resume.pdf" download="Sai_Raghu_Kiran_Resume.pdf">
          <button className="btn-ghost" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.2)" }}>Download Resume</button>
        </a>
        <a href="#contact">
          <button className="btn-ghost">Get in Touch</button>
        </a>
      </div>

      <div className="hero-metrics">
        {[
          { num: "+25%", label: "Faster Rendering" },
          { num: "−35%", label: "Smaller Bundles" },
          { num: "96+", label: "Lighthouse Score" },
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
