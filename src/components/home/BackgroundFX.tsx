"use client";

import { useEffect, useRef } from "react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

const shapes = ["●", "◆", "▲", "■", "○", "◇", "△", "□"];

export function BackgroundFX({ sectionIndex = 0 }: { sectionIndex?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { isLowEnd } = useDeviceDetect();

  useEffect(() => {
    if (isLowEnd || !ref.current) return;
    const items = ref.current.querySelectorAll<HTMLSpanElement>(".bg-float-icon");
    items.forEach((el, i) => {
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 3;
      const xAmt = (Math.random() - 0.5) * 20;
      const yAmt = 10 + Math.random() * 20;
      el.animate([
        { transform: "translate(0, 0) rotate(0deg)", opacity: 0.04 },
        { transform: `translate(${xAmt}px, -${yAmt}px) rotate(${(Math.random() - 0.5) * 20}deg)`, opacity: 0.08 },
        { transform: "translate(0, 0) rotate(0deg)", opacity: 0.04 },
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity,
        easing: "ease-in-out",
      });
    });
  }, [isLowEnd, sectionIndex]);

  if (isLowEnd) return null;

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {shapes.map((shape, i) => (
        <span
          key={i}
          className="bg-float-icon absolute text-[40px] leading-none text-foreground"
          style={{
            left: `${8 + (i * 19) % 85}%`,
            top: `${10 + (i * 23) % 80}%`,
            opacity: 0.04,
          }}
        >
          {shape}
        </span>
      ))}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-3xl" />
    </div>
  );
}

export function SectionDivider({ variant = "wave" }: { variant?: "wave" | "blur" | "gradient" }) {
  return (
    <div className="relative h-24 overflow-hidden -mb-1">
      {variant === "wave" && (
        <div className="absolute inset-0">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="hsl(var(--muted) / 0.3)" />
          </svg>
        </div>
      )}
    </div>
  );
}
