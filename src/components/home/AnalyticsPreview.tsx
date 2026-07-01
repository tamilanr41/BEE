"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useGsap } from "@/lib/animations";
import { TrendingUp, Users, DollarSign, Star, Activity } from "lucide-react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

export function AnalyticsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isLowEnd } = useDeviceDetect();
  useGsap();

  useEffect(() => {
    if (isLowEnd || !sectionRef.current) return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current!;
      const bars = el.querySelectorAll(".chart-bar");
      gsap.fromTo(bars, { scaleY: 0, transformOrigin: "bottom center" }, {
        scaleY: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none reverse" },
      });

      const counters = el.querySelectorAll(".metric-value");
      counters.forEach((counter) => {
        const target = counter.getAttribute("data-target");
        if (!target) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: parseFloat(target.replace(/[^0-9.]/g, "")),
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: counter.parentElement, start: "top 80%", toggleActions: "play none none reverse" },
          onUpdate: () => {
            const suffix = target.includes("%") ? "%" : target.includes("+") ? "+" : "";
            counter.textContent = `${Math.round(obj.val)}${suffix}`;
          },
        });
      });

      const ring = el.querySelector(".progress-ring-circle");
      if (ring) {
        gsap.to(ring, {
          strokeDashoffset: 25,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: ring, start: "top 80%", toggleActions: "play none none reverse" },
        });
      }
    };
    init();
  }, [isLowEnd]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
              <Activity className="h-3.5 w-3.5" /> Live Analytics
            </span>
            <h2 className="mt-6 font-display text-display-2 text-foreground">Data-Driven Practice</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See how our AI platform transforms practice metrics in real-time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-6">Revenue Trend</h3>
            <div className="flex items-end gap-2 h-52">
              {[40, 55, 48, 62, 58, 72, 68, 80, 75, 88, 82, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-muted-foreground">{h}k</span>
                  <div className="chart-bar w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/60" style={{ height: `${h}%` }} />
                  <span className="text-[10px] text-muted-foreground">M{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: DollarSign, label: "Monthly Revenue", target: "$284,500", change: "+23.5%", color: "text-emerald-500" },
              { icon: Users, label: "Active Patients", target: "1,247", change: "+12.8%", color: "text-blue-500" },
              { icon: Star, label: "NPS Score", target: "92", change: "+4 pts", color: "text-amber-500" },
              { icon: TrendingUp, label: "Adherence Rate", target: "94%", change: "+7.2%", color: "text-primary" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                  </div>
                  <span className={`text-xs font-medium ${metric.color}`}>{metric.change}</span>
                </div>
                <div className="metric-value font-display text-2xl font-bold text-card-foreground" data-target={metric.target.replace(/[^0-9.]/g, "")}>
                  {metric.label === "NPS Score" ? "0" : metric.label === "Adherence Rate" ? "0%" : "$0"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
