import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CodeCard } from "./CodeCard";

const METRICS = [
  { num: "+25%", label: "Faster Rendering" },
  { num: "−35%", label: "Smaller Bundles" },
  { num: "96+", label: "Lighthouse Score" },
  { num: "2+", label: "Years Experience" },
];

export function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      // gentle perpetual float on the code chips
      gsap.to(".hero-code-card.left", {
        y: 16,
        rotate: -2,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".hero-code-card.right", {
        y: -18,
        rotate: 2,
        duration: 4.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // mouse parallax
      const onMove = (e) => {
        const cx = (e.clientX / window.innerWidth - 0.5) * 2;
        const cy = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(".hero-code-card.left", { x: cx * 24, duration: 0.8, overwrite: "auto" });
        gsap.to(".hero-code-card.right", { x: cx * -24, duration: 0.8, overwrite: "auto" });
        gsap.to(".hero-title", { x: cx * 8, y: cy * 6, duration: 1, overwrite: "auto" });
      };
      window.addEventListener("mousemove", onMove);

      return () => {
        window.removeEventListener("mousemove", onMove);
      };
    },
    { scope: root }
  );

  return (
    <section className="hero" id="home" ref={root}>
      <CodeCard side="left" />
      <CodeCard side="right" />

      <div className="hero-eyebrow">
        <span className="pulse" />
        Available for opportunities · Bengaluru
      </div>

      <h1 className="hero-title">
        <span className="line">
          <span className="line-inner">Frontend that</span>
        </span>
        <span className="line">
          <span className="line-inner">
            feels <span className="serif grad">effortless.</span>
          </span>
        </span>
      </h1>

      <p className="hero-sub">
        Hi, I'm <strong>Sai Raghu Kiran</strong> — a Frontend Developer building enterprise
        CRM &amp; SaaS products with <strong>React</strong>, <strong>TypeScript</strong> &amp;{" "}
        <strong>Next.js</strong>, turning complex problems into fast, accessible interfaces.
      </p>

      <div className="hero-actions">
        <a href="#projects" data-magnetic>
          <button className="btn btn-primary">See My Work →</button>
        </a>
        <a href="/resume.pdf" download="Sai_Raghu_Kiran_Resume.pdf" data-magnetic>
          <button className="btn btn-ghost">Download Resume</button>
        </a>
      </div>

      <div className="hero-metrics">
        {METRICS.map((m, i) => (
          <div key={i} className="metric-item">
            <div className="metric-num" data-count={m.num}>
              {m.num}
            </div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="scroll-hint">
        <div className="mouse" />
        Scroll
      </div>
    </section>
  );
}
