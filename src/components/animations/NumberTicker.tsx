"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function NumberTicker({ value, suffix = "", prefix = "", duration = 2, decimals = 0, className = "" }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration,
      ease: "power3.out",
      onUpdate: () => {
        setDisplayVal(obj.val);
      },
    });
  }, [isInView, value, duration]);

  const formatVal = (v: number) => {
    const parts = v.toFixed(decimals).split(".");
    const int = parts[0].padStart(String(Math.round(value)).length, "0");
    return decimals > 0 ? `${int}.${parts[1]}` : int;
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatVal(displayVal)}{suffix}
    </span>
  );
}
