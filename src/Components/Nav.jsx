import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../Hooks/Data";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // hide when scrolling down past the hero, reveal on scroll up
      setHidden(y > lastY.current && y > 400);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${hidden ? "hidden" : ""}`}>
      <a href="#home" className="nav-logo">
        <span className="dot" />
        Sai Raghu Kiran
      </a>

      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}>
            {l}
          </a>
        ))}
      </div>

      <a href="mailto:avulasairaghukiran@gmail.com" data-magnetic="0.4">
        <button className="nav-cta">Get in touch</button>
      </a>
    </nav>
  );
}
