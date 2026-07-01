"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { Bot, Calendar, BarChart3, User, LayoutDashboard, MessageSquareText } from "lucide-react";

const tabs = [
  { id: "reception", label: "Reception", icon: Calendar },
  { id: "dashboard", label: "Dentist Dashboard", icon: LayoutDashboard },
  { id: "portal", label: "Patient Portal", icon: User },
  { id: "ai", label: "AI Assistant", icon: Bot },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

const tabContent: Record<string, { title: string; desc: string; lines: string[] }> = {
  reception: {
    title: "Smart Reception",
    desc: "AI-powered appointment scheduling with instant confirmation",
    lines: ["Today's Appointments", "Sarah Johnson - 2:30 PM", "Michael Chen - 3:00 PM", "Emily R. - 4:15 PM", "85% occupancy today"],
  },
  dashboard: {
    title: "Doctor Dashboard",
    desc: "Real-time clinical overview with AI insights",
    lines: ["3 patients waiting", "2 lab results ready", "AI Flag: Review X-ray #4521", "5 treatments completed today"],
  },
  portal: {
    title: "Patient Portal",
    desc: "Secure access to your health records anytime",
    lines: ["Your Records", "Prescription: Amoxicillin", "Next Visit: Dec 15", "Balance: $0.00"],
  },
  ai: {
    title: "AI Assistant",
    desc: "24/7 intelligent dental assistant",
    lines: ["How can I help?", "Tip: Brush twice daily", "Analyzing symptoms...", "Triage complete - Level 3"],
  },
  analytics: {
    title: "Analytics Hub",
    desc: "Live practice metrics and insights",
    lines: ["Revenue: +23% this month", "1,247 active patients", "NPS Score: 92", "94% appointment adherence"],
  },
};

export function LivePlatformPreview() {
  const [activeTab, setActiveTab] = useState("reception");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const { isLowEnd } = useDeviceDetect();

  useEffect(() => {
    if (!linesRef.current || isLowEnd) return;
    const lines = linesRef.current.querySelectorAll(".preview-line");
    gsap.fromTo(lines, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out", delay: 0.2 });
  }, [activeTab, isLowEnd]);

  const handleTabChange = (id: string) => {
    if (isTransitioning || id === activeTab) return;
    setIsTransitioning(true);
    setActiveTab(id);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const content = tabContent[activeTab];

  return (
    <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
              <LayoutDashboard className="h-3.5 w-3.5" /> Live Platform Preview
            </span>
            <h2 className="mt-6 font-display text-display-2 text-foreground">Your Dental OS, Live</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Switch between modules to see the platform in action.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div ref={previewRef} className="mx-auto max-w-4xl">
            {/* Laptop mockup */}
            <div className="relative rounded-t-2xl border border-border bg-card shadow-2xl overflow-hidden">
              {/* Top bar / Camera */}
              <div className="flex items-center justify-center h-8 bg-foreground/5 border-b border-border">
                <div className="w-2 h-2 rounded-full bg-foreground/20" />
              </div>

              {/* Tab bar */}
              <div className="flex overflow-x-auto border-b border-border bg-background/50">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`flex items-center gap-2 px-4 py-3 text-xs font-medium transition-all whitespace-nowrap border-b-2 ${
                        activeTab === tab.id
                          ? "border-primary text-primary bg-primary-50/50"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Content area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 min-h-[300px] bg-gradient-to-br from-background to-muted/20"
                >
                  <div ref={linesRef}>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{content.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{content.desc}</p>
                    <div className="space-y-3">
                      {content.lines.map((line, i) => (
                        <div key={i} className="preview-line flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3 text-sm text-card-foreground shadow-sm">
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Laptop base */}
            <div className="h-3 bg-gradient-to-b from-foreground/10 to-foreground/5 rounded-b-2xl mx-4" />
            <div className="h-2 bg-foreground/5 rounded-b-xl mx-12" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
