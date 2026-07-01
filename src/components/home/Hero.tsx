"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Play, Sparkles, Shield, Zap, Bot, Calendar, Bell } from "lucide-react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { NumberTicker } from "@/components/animations/NumberTicker";
import { blurDataURL } from "@/lib/images";

function FloatingOrbit({ children, radius, duration, delay = 0 }: { children: React.ReactNode; radius: number; duration: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { isLowEnd } = useDeviceDetect();

  useEffect(() => {
    if (isLowEnd || !ref.current) return;
    const el = ref.current;
    let start: number | null = null;
    let animId: number;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const t = ((timestamp - start) / 1000) * (1 / duration) * Math.PI * 2 + delay;
      el.style.transform = `translate(${radius * Math.cos(t)}px, ${radius * Math.sin(t)}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [radius, duration, delay, isLowEnd]);

  return <div ref={ref} className="absolute pointer-events-none">{children}</div>;
}

function FloatingElement({ children, amplitude = 15, duration = 3, delay = 0 }: { children: React.ReactNode; amplitude?: number; duration?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { isLowEnd } = useDeviceDetect();

  useEffect(() => {
    if (isLowEnd || !ref.current) return;
    gsap.to(ref.current, {
      y: amplitude, duration, ease: "sine.inOut", yoyo: true, repeat: -1, delay,
    });
  }, [amplitude, duration, delay, isLowEnd]);

  return <div ref={ref}>{children}</div>;
}

const dentalIcons = ["●", "◆", "▲", "■", "○", "◇", "△", "□"];

export function Hero() {
  const { isLowEnd } = useDeviceDetect();
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroBgX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const heroBgY = useTransform(mouseY, [-1, 1], [-20, 20]);
  const imageX = useTransform(mouseX, [-1, 1], [-30, 30]);
  const imageY = useTransform(mouseY, [-1, 1], [-30, 30]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-float-1", { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.06, duration: 1.5, ease: "elastic.out(1, 0.5)" });
      gsap.fromTo(".hero-float-2", { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.04, duration: 1.5, delay: 0.3, ease: "elastic.out(1, 0.5)" });
      gsap.fromTo(".hero-ai-widget", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.out" });
      gsap.fromTo(".hero-notification", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 1.8, ease: "power2.out" });
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.querySelectorAll(".stat-item"), { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 1, ease: "back.out(1.7)" });
      }
    });
    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800">
      <motion.div className="absolute inset-0 overflow-hidden" style={{ x: heroBgX, y: heroBgY }}>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary-400/10 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-accent/5 blur-3xl" style={{ animationDelay: "1s" }} />
        {!isLowEnd && dentalIcons.map((icon, i) => (
          <span key={i} className={`hero-float-${i % 2 === 0 ? "1" : "2"} absolute select-none text-[120px] leading-none`}
            style={{ left: `${10 + (i * 13) % 75}%`, top: `${10 + (i * 17) % 75}%`, opacity: i % 2 === 0 ? 0.06 : 0.04, transform: `rotate(${i * 45}deg)` }}>
            {icon}
          </span>
        ))}
      </motion.div>

      {!isLowEnd && <canvas id="hero-particles" className="absolute inset-0 pointer-events-none z-[1]" />}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 md:pt-40 md:pb-32 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm mb-6">
              <Sparkles className="h-3.5 w-3.5 text-secondary-400" />
              AI-Powered Dental Operating System
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-display-1 text-white leading-[0.95]">
              Your Smile,<br />
              <span className="text-gradient bg-gradient-to-r from-primary-300 to-white">Reimagined</span><br />
              by AI + Expert Care
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-lg text-white/60 leading-relaxed">
              Experience award-winning dentistry where artificial intelligence meets
              clinical expertise. Book in 60 seconds, get AI-powered triage, and
              receive care that&apos;s as advanced as it is compassionate.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/booking" data-cursor="Book Now"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Book in 60 Seconds
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/ai-features" data-cursor="Explore AI"
                className="group inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
              >
                <Play className="h-4 w-4" />
                See AI in Action
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary-400" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-secondary-400" />
                AI-Powered
              </div>
              <div className="flex items-center gap-2">
                <span className="flex -space-x-1">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-primary-900 bg-gradient-to-br from-primary-300 to-primary-500" />
                  ))}
                </span>
                2k+ Happy Patients
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="relative hidden lg:block h-[500px]" style={{ x: imageX, y: imageY }}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop"
                alt="Modern dental clinic with advanced technology"
                width={800}
                height={600}
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
            </div>

            {!isLowEnd && (
              <>
                <FloatingElement amplitude={12} duration={4} delay={0.5}>
                  <motion.div className="hero-ai-widget absolute -right-8 -top-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-4 shadow-xl"
                    whileHover={{ scale: 1.05 }}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-400/20">
                        <Bot className="h-5 w-5 text-secondary-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">AI Triage Active</p>
                        <p className="text-xs text-white/60">Instant symptom analysis</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary-400/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary-400/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary-400/20" />
                    </div>
                  </motion.div>
                </FloatingElement>

                <FloatingElement amplitude={8} duration={3.5} delay={1}>
                  <motion.div className="hero-notification absolute -left-4 bottom-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 p-3 shadow-xl flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}>
                    <Bell className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs font-medium text-white">New Appointment</p>
                      <p className="text-[10px] text-white/50">Today at 2:30 PM</p>
                    </div>
                  </motion.div>
                </FloatingElement>

                <FloatingOrbit radius={180} duration={20} delay={0}>
                  <div className="h-4 w-4 rounded-full bg-white/10 border border-white/20" />
                </FloatingOrbit>
                <FloatingOrbit radius={140} duration={16} delay={2}>
                  <div className="h-3 w-3 bg-white/10 rotate-45 border border-white/20" />
                </FloatingOrbit>
                <FloatingOrbit radius={160} duration={22} delay={4}>
                  <div className="h-4 w-4 rounded-full bg-white/10 border border-white/20" />
                </FloatingOrbit>
                <FloatingOrbit radius={120} duration={18} delay={1}>
                  <div className="h-3 w-3 rotate-45 border border-white/20" />
                </FloatingOrbit>
              </>
            )}
          </motion.div>
        </div>

        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 border-t border-white/10 pt-8">
          {[
            { value: 50000, label: "Patients Treated", suffix: "+" },
            { value: 25, label: "Years Experience", suffix: "+" },
            { value: 4.9, label: "Average Rating", suffix: "" },
            { value: 98, label: "Satisfaction Rate", suffix: "%" },
          ].map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="text-2xl font-bold font-display text-white md:text-3xl">
                <NumberTicker value={stat.value} suffix={stat.suffix} duration={2} decimals={stat.value % 1 !== 0 ? 1 : 0} />
              </div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
