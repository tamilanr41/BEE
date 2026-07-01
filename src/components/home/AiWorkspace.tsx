"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Bot, Mic, Send, Sparkles, Brain, BarChart3, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { cn } from "@/lib/utils";

const aiMessages = [
  { role: "ai", text: "Hello! I'm your SmileCare AI assistant. How can I help you today?" },
  { role: "user", text: "What treatments do you recommend for stained teeth?" },
  { role: "ai", text: "Based on your symptoms, I'd recommend our professional teeth whitening treatment. It's AI-powered with custom shade matching. Would you like to see a simulation?" },
  { role: "user", text: "Yes, please show me!" },
  { role: "ai", text: "Great choice! I'm generating your personalized smile preview now. Meanwhile, here's what to expect:" },
];

const recommendations = [
  { label: "Teeth Whitening", time: "60 min", price: "$299", match: "96% match" },
  { label: "Porcelain Veneers", time: "2 visits", price: "$1,200", match: "88% match" },
  { label: "Composite Bonding", time: "45 min", price: "$450", match: "82% match" },
];

export function AiWorkspace() {
  const [visibleMsgs, setVisibleMsgs] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [showRecs, setShowRecs] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [barHeights, setBarHeights] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const waveformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBarHeights(Array.from({ length: 40 }, () => Math.random() * 60 + 10));
  }, []);
  const { isLowEnd } = useDeviceDetect();

  useEffect(() => {
    if (visibleMsgs >= aiMessages.length) {
      setTimeout(() => setShowRecs(true), 500);
      return;
    }
    const timeout = setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setVisibleMsgs((v) => v + 1);
      }, 800);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [visibleMsgs]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMsgs, isTyping]);

  useEffect(() => {
    if (!waveformRef.current || isLowEnd || barHeights.length === 0) return;
    const bars = waveformRef.current.querySelectorAll(".wave-bar");
    if (bars.length === 0) return;
    gsap.to(bars, {
      scaleY: () => Math.random() * 1.5 + 0.3,
      duration: 0.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.05,
    });
  }, [isLowEnd, barHeights]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary-400/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
              <Brain className="h-3.5 w-3.5 text-secondary-300" /> AI-Powered Intelligence
            </span>
            <h2 className="mt-6 font-display text-display-2 text-white">Your AI Dental Workspace</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Interact with our AI assistant in real-time. Ask questions, get treatment recommendations, 
              and see your personalized smile preview — all powered by advanced AI.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* AI Chat Interface */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary-500/10">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">SmileCare AI</p>
                  <p className="text-xs text-white/50">Powered by GPT-4o · Always learning</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400/80">Active</span>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[320px] overflow-y-auto p-5 space-y-4">
                {aiMessages.slice(0, visibleMsgs).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
                  >
                    <div className={cn(
                      "max-w-[85%] rounded-md px-4 py-3 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-white/10 text-white/90"
                    )}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="rounded-md bg-white/10 px-4 py-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                        <span className="h-2 w-2 rounded-full bg-white/30" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Recommendation cards */}
              <AnimatePresence>
                {showRecs && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/10"
                  >
                    <div className="p-4 space-y-2">
                      <p className="text-xs font-medium text-white/60 uppercase tracking-wider px-1">AI Recommendations</p>
                      {recommendations.map((rec, i) => (
                        <motion.div
                          key={rec.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                        >
                          <div>
                            <p className="text-sm font-medium text-white">{rec.label}</p>
                            <p className="text-xs text-white/50">{rec.time} · {rec.price}</p>
                          </div>
                          <span className="rounded-md bg-emerald-500/20 px-2.5 py-1 text-[10px] font-medium text-emerald-400">{rec.match}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input */}
              <div className="border-t border-white/10 p-4">
                <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5">
                  <button
                    onClick={() => setIsListening(!isListening)}
                    className={cn("transition-all", isListening ? "text-accent" : "text-white/40 hover:text-white/70")}
                  >
                    <Mic className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    placeholder="Ask about treatments, symptoms, or pricing..."
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                    disabled
                  />
                  <button className="text-white/40 hover:text-white/70 transition-all">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Voice waveform + features */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="space-y-6">
              {/* Voice waveform */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mic className="h-5 w-5 text-secondary-300" />
                  <p className="text-sm font-medium text-white">Voice-to-Notes Demo</p>
                </div>
                <div ref={waveformRef} className="flex items-end gap-[2px] sm:gap-[3px] h-12 sm:h-16 overflow-hidden">
                  {barHeights.length === 0 && (
                    <div className="flex items-end gap-[2px] sm:gap-[3px] h-full">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="w-[4px] sm:w-[6px] bg-gradient-to-t from-secondary-400 to-primary-400 rounded-full" style={{ height: `${(i % 5 + 2) * 10}%` }} />
                      ))}
                    </div>
                  )}
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="wave-bar w-[4px] sm:w-[6px] bg-gradient-to-t from-secondary-400 to-primary-400 rounded-full"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-white/40 text-center">Live voice analysis — try saying &ldquo;Book an appointment&rdquo;</p>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Sparkles, label: "Treatment Plans", desc: "AI-generated in seconds" },
                  { icon: BarChart3, label: "Predictive Analytics", desc: "98.7% accuracy" },
                  { icon: FileText, label: "Auto Documentation", desc: "HIPAA compliant" },
                  { icon: Brain, label: "Smile Simulation", desc: "Preview your results" },
                ].map((f) => (
                  <div key={f.label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                    <f.icon className="h-5 w-5 text-secondary-300 mb-2" />
                    <p className="text-sm font-medium text-white">{f.label}</p>
                    <p className="text-xs text-white/50">{f.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/ai-features"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                Explore All AI Features <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
