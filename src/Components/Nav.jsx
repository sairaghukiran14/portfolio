import { useEffect, useState } from "react";
import { NAV_LINKS } from "../Hooks/Data";
import { useClock } from "../Hooks/useClock";

export function Nav() {
  const clock = useClock();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="nav"
      style={{ background: scrolled ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0.72)" }}
    >
      <div className="nav-logo">
        ASRK<span>.</span>
      </div>
      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}>
            {l}
          </a>
        ))}
        <span style={{ fontSize: 12, color: "rgba(255,255,255,.35)" }}>
          {clock}
        </span>
      </div>
      <a href="mailto:avulasairaghukiran@gmail.com">
        <button className="nav-cta">Get in touch</button>
      </a>
    </nav>
  );
}
