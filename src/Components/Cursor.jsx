import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const setDotX = gsap.quickSetter(dot.current, "x", "px");
    const setDotY = gsap.quickSetter(dot.current, "y", "px");
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.4, ease: "power3" });
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.4, ease: "power3" });

    const move = (e) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const hoverIn = () => ring.current?.classList.add("hover");
    const hoverOut = () => ring.current?.classList.remove("hover");

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button, [data-magnetic]");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", hoverIn);
      t.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", hoverIn);
        t.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
