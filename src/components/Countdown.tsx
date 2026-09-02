import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-10T15:30:00-04:00").getTime();

function diff() {
  const t = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(t / 86400000),
    h: Math.floor((t / 3600000) % 24),
    m: Math.floor((t / 60000) % 60),
    s: Math.floor((t / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Días", value: t.d },
    { label: "Horas", value: t.h },
    { label: "Min", value: t.m },
    { label: "Seg", value: t.s },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {items.map((i) => (
        <div
          key={i.label}
          className="neon-card tilt-hover min-w-20 rounded-2xl px-4 py-3 text-center sm:min-w-24"
        >
          <div className="font-display text-4xl leading-none text-graffiti sm:text-5xl">
            {String(i.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );
}
