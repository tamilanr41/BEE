"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGsap } from "@/lib/animations";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Calendar, Bot, Stethoscope, Heart, Smile, MessageSquareText, Sparkles } from "lucide-react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

const steps = [
  { icon: Calendar, label: "Book Online", desc: "60-second booking with AI scheduling" },
  { icon: Bot, label: "AI Triage", desc: "Smart symptom analysis & prep" },
  { icon: Stethoscope, label: "Consultation", desc: "AI-assisted diagnosis" },
  { icon: Sparkles, label: "Treatment", desc: "Precision care with digital workflow" },
  { icon: Heart, label: "Recovery", desc: "AI-tracked healing progress" },
  { icon: MessageSquareText, label: "Follow-up", desc: "Automated check-ins & reminders" },
  { icon: Smile, label: "Smile Complete", desc: "Your perfect smile, delivered" },
];

export function PatientJourney() {
  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const { isLowEnd } = useDeviceDetect();
  useGsap();

  useEffect(() => {
    if (isLowEnd) return;
    const container = containerRef.current;
    if (!container) return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const stepEls = container.querySelectorAll(".journey-step");
      stepEls.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el as HTMLElement,
          start: "top 70%",
          end: "top 30%",
          onEnter: () => setActiveStep(i),
          onEnterBack: () => setActiveStep(i),
        });
      });
        ScrollTrigger.create({
          trigger: container,
          start: "top 60%",
          end: "bottom 40%",
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.height = `${self.progress * 100}%`;
            }
          },
        });
      });
      return () => ctx.revert();
    };
    init();
  }, [isLowEnd]);

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">Your Journey</span>
            <h2 className="mt-6 font-display text-display-2 text-foreground">From First Click to Perfect Smile</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every step is enhanced by AI — from booking your first appointment to your final follow-up.
            </p>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* Progress line */}
          {!isLowEnd && (
            <div className="absolute left-[35px] top-0 bottom-0 w-px bg-border">
              <div ref={progressRef} className="w-full bg-primary transition-all duration-300 ease-out" style={{ height: "0%" }} />
            </div>
          )}

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeStep;

              return (
                <motion.div
                  key={step.label}
                  className="journey-step flex items-start gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={`relative z-10 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110"
                      : "border-border bg-card text-muted-foreground"
                  }`}>
                    <Icon className="h-7 w-7" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-sm">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 pt-4">
                    <h3 className={`font-display text-xl font-semibold transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.label}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors duration-500 ${isActive ? "text-primary" : "text-muted-foreground/60"}`}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
