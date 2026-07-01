"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { NumberTicker } from "@/components/animations/NumberTicker";
import { Smile, Award, Star, Building2 } from "lucide-react";

const stats = [
  { icon: Smile, end: 50000, suffix: "+", label: "Patients Treated", color: "text-primary" },
  { icon: Award, end: 25, suffix: "+", label: "Years Experience", color: "text-secondary" },
  { icon: Star, end: 4.9, suffix: "", decimals: 1, label: "Average Rating", color: "text-amber-400" },
  { icon: Building2, end: 50, suffix: "+", label: "Insurance Partners", color: "text-primary" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <Icon className={`h-8 w-8 mb-3 ${s.color}`} />
                  <div className="text-3xl font-bold font-display text-foreground">
                    <NumberTicker value={s.end} suffix={s.suffix} decimals={s.decimals ?? 0} duration={2} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
