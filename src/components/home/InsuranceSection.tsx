"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ShieldCheck } from "lucide-react";

const insurers = [
  "Aetna", "Cigna", "Delta Dental", "MetLife", "Guardian",
  "Humana", "Blue Cross Blue Shield", "United Concordia",
  "Principal", "Renaissance", "Ameritas", "Dentegra",
];

export function InsuranceSection() {
  return (
    <section className="relative py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Insurance & Payment
            </span>
            <h2 className="mt-6 font-display text-display-3 text-foreground">
              We Work With All Major Insurers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We accept over 50 insurance plans and offer flexible payment options. 
              Our team handles the paperwork so you can focus on your smile.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {insurers.map((insurer) => (
              <div
                key={insurer}
                className="rounded-xl border border-border bg-card px-4 md:px-6 py-3 text-xs md:text-sm font-medium text-card-foreground shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                {insurer}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            And 38+ more plans. <a href="/contact" className="text-primary hover:underline">Contact us</a> to verify your coverage.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
