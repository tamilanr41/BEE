"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <ScrollReveal>
          <h2 className="font-display text-display-2 text-white">
            Ready to Transform Your Smile?
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Your journey to a healthier, more confident smile is one click away. 
            Book your appointment in under 60 seconds — no waiting rooms, no hassle.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <MagneticButton>
              <Link
                href="/booking"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                Book in 60 Seconds
                <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" /> Call (123) 456-7890
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
            <MessageCircle className="h-4 w-4" />
            Or WhatsApp us — we typically reply within 5 minutes
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
