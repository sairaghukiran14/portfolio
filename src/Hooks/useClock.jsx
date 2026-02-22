import { useEffect, useState } from "react";

export function useClock() {
  const [t, set] = useState("");
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      const h = n.getHours() % 12 || 12;
      const m = String(n.getMinutes()).padStart(2, "0");
      set(`${h}:${m} ${n.getHours() >= 12 ? "PM" : "AM"}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}
