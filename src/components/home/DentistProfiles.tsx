"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Star, ArrowRight, Award, CheckCircle } from "lucide-react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { blurDataURL } from "@/lib/images";

const dentists = [
  {
    id: 1,
    name: "Dr. Emily Parker",
    title: "Lead Cosmetic Dentist",
    specializations: ["Cosmetic", "Implants", "Veneers"],
    rating: 4.9,
    patients: 3200,
    experience: 14,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop",
    bio: "Harvard-trained cosmetic dentist with a passion for smile transformations. Published in 6 peer-reviewed journals on AI-assisted dentistry.",
    achievements: ["Award for Clinical Excellence 2023", "1000+ Smile Makeovers", "Featured in NYC Magazine Top Dentists"],
  },
  {
    id: 2,
    name: "Dr. James Mitchell",
    title: "Orthodontics Specialist",
    specializations: ["Braces", "Invisalign", "Pediatric"],
    rating: 4.8,
    patients: 2800,
    experience: 11,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop",
    bio: "Board-certified orthodontist specializing in digital treatment planning. Over 2,000 successful Invisalign cases delivered.",
    achievements: ["Invisalign Diamond Provider", "Top Orthodontist 2022-2024", "Digital Dentistry Pioneer Award"],
  },
  {
    id: 3,
    name: "Dr. Sarah Chen",
    title: "Oral Surgeon",
    specializations: ["Implants", "Wisdom Teeth", "Bone Grafting"],
    rating: 4.9,
    patients: 2100,
    experience: 9,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop",
    bio: "Double-board certified oral surgeon with advanced training in guided implant surgery and 3D-printed bone grafts.",
    achievements: ["Surgical Excellence Award 2023", "500+ Complex Reconstructions", "Published in JOMS"],
  },
  {
    id: 4,
    name: "Dr. Michael Torres",
    title: "Periodontics Lead",
    specializations: ["Gum Treatment", "Laser Therapy", "Root Canal"],
    rating: 4.7,
    patients: 1900,
    experience: 13,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop",
    bio: "Leading periodontist specializing in laser therapy and regenerative procedures. Trained at UCSF School of Dentistry.",
    achievements: ["AAP Research Grant Recipient", "2000+ Laser Procedures", "Clinical Educator of the Year"],
  },
];

export function DentistProfiles() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const { isLowEnd } = useDeviceDetect();
  const active = dentists[activeIdx];

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % dentists.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  useEffect(() => {
    if (!counterRef.current || isLowEnd) return;
    gsap.fromTo(counterRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    if (progressRef.current) {
      gsap.fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1, duration: 4.5, ease: "none" });
    }
  }, [activeIdx, isLowEnd]);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">Our Team</span>
            <h2 className="mt-6 font-display text-display-2 text-foreground">Meet Your Dental Experts</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Board-certified specialists with decades of combined experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid items-start gap-8 lg:gap-12 lg:grid-cols-5">
          {/* Active profile - large */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-xl"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <div className="relative w-full min-h-[250px] md:min-h-[400px]">
                      <Image src={active.image} alt={active.name} fill className="object-cover" placeholder="blur" blurDataURL={blurDataURL} sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium text-white">{active.rating}</span>
                      <span className="text-xs text-white/60">· {active.patients.toLocaleString()} patients</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {active.specializations.map((s) => (
                        <span key={s} className="rounded-md bg-primary-50 px-3 py-1 text-xs font-medium text-primary">{s}</span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{active.name}</h3>
                    <p className="text-muted-foreground mb-4">{active.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{active.bio}</p>
                    <div ref={counterRef} className="space-y-3">
                      {active.achievements.map((a) => (
                        <div key={a} className="flex items-center gap-2 text-sm text-card-foreground/80">
                          <Award className="h-4 w-4 text-amber-500 shrink-0" />
                          {a}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="text-3xl font-bold font-display text-primary">{active.experience}</div>
                      <div className="text-xs text-muted-foreground">Years of<br />Experience</div>
                    </div>
                    <Link href="/dentists" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                      View Full Profile <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="lg:col-span-2 space-y-3">
            {dentists.map((d, i) => (
              <motion.button
                key={d.id}
                onClick={() => { setActiveIdx(i); setAutoRotate(false); }}
                className={`w-full flex items-center gap-4 rounded-2xl p-4 text-left transition-all border ${
                  i === activeIdx
                    ? "border-primary bg-primary-50 shadow-md scale-[1.02]"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative shrink-0">
                  <Image src={d.image} alt={d.name} width={56} height={56} className="h-14 w-14 rounded-xl object-cover" placeholder="blur" blurDataURL={blurDataURL} />
                  {i === activeIdx && (
                    <motion.div layoutId="indicator" className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </motion.div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-card-foreground truncate">{d.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{d.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-muted-foreground">{d.rating} · {d.patients.toLocaleString()} patients</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
