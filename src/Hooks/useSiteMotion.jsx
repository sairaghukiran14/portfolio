import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Global scroll + interaction motion, scoped to the app root.
 *  - [data-reveal]            → fade/slide in on scroll (optional [data-reveal-delay])
 *  - [data-count]="+25%"      → counts the numeric part up when scrolled into view
 *  - [data-magnetic]          → element is pulled toward the cursor
 */
export function useSiteMotion(scope) {
  useGSAP(
    () => {
      const cleanups = [];

      // ── scroll reveals ───────────────────────────────────────────
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        const delay = parseFloat(el.dataset.revealDelay) || 0;
        gsap.fromTo(
          el,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

      // ── count-up numbers ─────────────────────────────────────────
      gsap.utils.toArray("[data-count]").forEach((el) => {
        const raw = el.dataset.count;
        const match = raw.match(/([\d,]+\.?\d*)/);
        if (!match) {
          el.textContent = raw;
          return;
        }
        const num = parseFloat(match[1].replace(/,/g, ""));
        const [pre, post] = raw.split(match[1]);
        const obj = { v: 0 };
        el.textContent = pre + "0" + post;
        gsap.to(obj, {
          v: num,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
          onUpdate() {
            el.textContent = pre + Math.round(obj.v).toLocaleString() + post;
          },
        });
      });

      // ── magnetic elements ────────────────────────────────────────
      gsap.utils.toArray("[data-magnetic]").forEach((el) => {
        const strength = parseFloat(el.dataset.magnetic) || 0.35;
        const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
        const move = (e) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * strength);
          yTo((e.clientY - (r.top + r.height / 2)) * strength);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope }
  );
}
