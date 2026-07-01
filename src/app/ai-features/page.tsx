"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import {
  Bot,
  Brain,
  MessageSquareText,
  ScanLine,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Mic,
  ArrowRight,
  Send,
  Smile,
  AlertTriangle,
  Clock,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Dental Assistant",
    description: "24/7 intelligent chatbot that answers questions, schedules appointments, and provides post-treatment care instructions.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: Brain,
    title: "Smart Triage System",
    description: "AI-powered symptom analysis that prioritizes appointments based on urgency and prepares your visit before you arrive.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: FileText,
    title: "Treatment Plan Generator",
    description: "Automatically generates personalized treatment plans with timelines, costs, and AI-predicted outcomes based on your scans.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: ScanLine,
    title: "Imaging Assistant",
    description: "AI-enhanced X-ray and 3D scan analysis that highlights areas of concern and tracks changes over time with precision.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: Smile,
    title: "Smile Simulator",
    description: "Preview your new smile before treatment begins. AI generates photorealistic before/after visualizations from your photos.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: Mic,
    title: "Voice-to-Notes",
    description: "Dictate clinical notes hands-free during procedures. AI transcribes, structures, and integrates directly into patient records.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: Clock,
    title: "Follow-up Automation",
    description: "AI-powered post-treatment check-ins via SMS, email, or WhatsApp — reducing no-shows and improving recovery outcomes.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Audit",
    description: "Automated HIPAA compliance monitoring, audit logging, and security threat detection across the entire platform.",
    color: "bg-primary",
    gradient: "bg-primary-50 dark:bg-primary-950",
  },
];

const quickQuestions = [
  "What should I do after a tooth extraction?",
  "How long does teeth whitening take?",
  "Do dental implants hurt?",
  "What's the cost of Invisalign?",
  "How often should I get a checkup?",
];

const demoResponses: Record<string, string> = {
  "What should I do after a tooth extraction?": "After a tooth extraction, rest for 24 hours, avoid rinsing or spitting, apply ice packs for swelling, eat soft foods, and take prescribed pain medication as directed. Avoid straws and smoking for at least 48 hours. Contact us immediately if bleeding persists.",
  "How long does teeth whitening take?": "Professional in-office whitening takes about 60–90 minutes and shows results immediately. Take-home kits typically require 1–2 weeks of daily 30-minute applications for optimal results. Our AI can predict your final shade before you start!",
  "Do dental implants hurt?": "Most patients report minimal discomfort. The procedure is performed under local anesthesia, so you won't feel pain during surgery. Post-procedure soreness is typically mild and managed with over-the-counter pain relievers for 2–3 days.",
  "What's the cost of Invisalign?": "Invisalign treatment ranges from $3,000–$8,000 depending on complexity and duration. We offer payment plans starting at $85/month. Book a consultation and our AI will generate a precise quote with your insurance coverage included.",
  "How often should I get a checkup?": "We recommend bi-annual checkups every 6 months. However, our AI triage system may suggest more frequent visits based on your risk factors — including genetics, oral hygiene habits, and medical history.",
};

export default function AIFeaturesPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I'm the SmileCare AI assistant. Ask me anything about dental care or our services!" },
  ]);
  const [chatLoading, setChatLoading] = useState(false);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setChatInput("");
    setChatLoading(true);

    setTimeout(() => {
      const matchedQuestion = Object.keys(demoResponses).find(
        (q) => q.toLowerCase() === userMsg.toLowerCase()
      );
      const matchedKey = Object.keys(demoResponses).find(
        (q) => userMsg.toLowerCase().includes(q.toLowerCase().slice(0, 20))
      );
      const response = matchedQuestion
        ? demoResponses[matchedQuestion]
        : matchedKey
        ? demoResponses[matchedKey]
        : "Thanks for your question! Our AI is analyzing the best response. For immediate assistance, please call (123) 456-7890 or book an appointment.";
      setChatMessages((prev) => [...prev, { role: "ai", text: response }]);
      setChatLoading(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-background">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-secondary-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-secondary-300" />
                AI-Powered Platform
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="mt-6 font-display text-display-1 text-white">
                Dentistry,<br />
                <span className="text-gradient bg-gradient-to-r from-primary-300 to-white">Intelligently</span>
                <br />
                Transformed
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
                Eight AI-powered modules that work together to make your dental experience 
                faster, smarter, and more comfortable — from first symptom to final follow-up.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {aiFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={feature.title}>
                    <motion.div
                      className={cn(
                        "group relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer",
                      )}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveDemo(feature.title === activeDemo ? null : feature.title)}
                    >
                      <div className={cn(
                        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform group-hover:scale-110",
                        feature.color
                      )}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Interactive AI Chat Demo */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div>
                <ScrollReveal direction="left">
<span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
                    <MessageSquareText className="h-3.5 w-3.5" /> Try It Now
                  </span>
                  <h2 className="mt-6 font-display text-display-2 text-foreground">
                    Talk to Our AI Dental Assistant
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Ask any dental question and get an instant, clinically-informed response. 
                    This is a live demo — type a question or pick one below.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.2}>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {quickQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          setChatMessages((prev) => [...prev, { role: "user", text: q }]);
                          setChatLoading(true);
                          setTimeout(() => {
                            setChatMessages((prev) => [...prev, { role: "ai", text: demoResponses[q] || "Let me look that up for you..." }]);
                            setChatLoading(false);
                          }, 800);
                        }}
                        className="rounded-md border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:bg-primary-50"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.3}>
                  <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-800">AI Disclaimer</p>
                      <p className="text-xs text-amber-700/80 mt-1">
                        Our AI assists — never replaces — professional diagnosis. Always consult 
                        a licensed dentist for medical decisions. Responses are for informational purposes only.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={0.1}>
                <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                  <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary-50 to-secondary-50 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">SmileCare AI Assistant</p>
                      <p className="text-xs text-muted-foreground">Online — Powered by GPT-4o</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Active
                    </span>
                  </div>

                  <div className="h-[400px] overflow-y-auto p-5 space-y-4" style={{ scrollBehavior: "smooth" }}>
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={cn(
                          "flex",
                          msg.role === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[80%] rounded-md px-4 py-3 text-sm leading-relaxed",
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-card-foreground"
                          )}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    {chatLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="rounded-md bg-muted px-4 py-3">
                          <div className="flex gap-1">
                            <span className="h-2 w-2 rounded-full bg-foreground/40" />
                            <span className="h-2 w-2 rounded-full bg-foreground/30" />
                            <span className="h-2 w-2 rounded-full bg-foreground/20" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="border-t border-border p-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Ask a dental question..."
                        className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!chatInput.trim()}
                        className="rounded-xl bg-primary px-4 py-2.5 text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
                  <Stethoscope className="h-3.5 w-3.5" /> How It Works
                </span>
                <h2 className="mt-6 font-display text-display-2 text-foreground">
                  AI in Every Step of Your Journey
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  From your first symptom check to post-treatment follow-up, our AI works 
                  silently in the background to make every visit better.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Before Your Visit",
                  items: ["AI symptom triage & urgency scoring", "Smart appointment scheduling", "Pre-visit questionnaire automation", "Insurance verification"],
                },
                {
                  step: "02",
                  title: "During Your Visit",
                  items: ["AI-assisted X-ray analysis", "Real-time treatment planning", "Voice-to-notes documentation", "Smile simulation preview"],
                },
                {
                  step: "03",
                  title: "After Your Visit",
                  items: ["Automated follow-up messages", "Recovery progress tracking", "Medication reminders", "AI-powered satisfaction survey"],
                },
              ].map((phase, i) => (
                <ScrollReveal key={phase.step} direction="up" delay={i * 0.15}>
                  <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-lg font-bold text-primary">
                      {phase.step}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-card-foreground mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <ScrollReveal>
              <h2 className="font-display text-display-2 text-white">
                Ready to Experience AI-Powered Dentistry?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
                Book an appointment and let our AI platform transform your dental experience. 
                First time patients get a complimentary digital smile assessment.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton>
                  <Link
                    href="/booking"
                    className="group inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    Book Your Visit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
