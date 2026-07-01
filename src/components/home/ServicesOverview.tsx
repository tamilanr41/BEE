"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerGrid } from "@/components/animations/StaggerGrid";
import { TiltCard } from "@/components/animations/TiltCard";
import { ArrowRight, Sparkles, Scan, Syringe, Baby, Heart, Smile, Pill, Bone, Wrench, Gem, Brush, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { blurDataURL } from "@/lib/images";

interface ServiceProps {
  icon: any;
  label: string;
  href: string;
  color: string;
  description: string;
  details: string;
  beforeAfter: string;
}

const services: ServiceProps[] = [
  { icon: Activity, label: "General Dentistry", href: "/services/general-dentistry", color: "bg-primary", description: "Comprehensive exams, cleanings & preventive care", details: "Our AI-enhanced checkups detect issues months earlier than traditional exams. Includes digital X-rays, oral cancer screening, and personalized hygiene plans.", beforeAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&auto=format&fit=crop" },
  { icon: Sparkles, label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry", color: "bg-primary", description: "Transform your smile with precision artistry", details: "AI smile simulation lets you preview results before treatment begins. From veneers to bonding, every procedure is digitally planned to perfection.", beforeAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&auto=format&fit=crop" },
  { icon: Brush, label: "Teeth Whitening", href: "/services/teeth-whitening", color: "bg-primary", description: "Professional whitening, dramatically brighter", details: "Our AI-powered shade analysis predicts your final result. In-office treatment takes 60 minutes with results lasting 12+ months.", beforeAfter: "https://images.unsplash.com/photo-1598259646477-49216eac2ddc?w=400&auto=format&fit=crop" },
  { icon: Bone, label: "Dental Implants", href: "/services/dental-implants", color: "bg-primary", description: "Permanent replacement that looks and feels natural", details: "AI-guided implant placement ensures 99.3% success rate. Same-day crowns available with our digital workflow.", beforeAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&auto=format&fit=crop" },
  { icon: Smile, label: "Orthodontics", href: "/services/orthodontics", color: "bg-primary", description: "Straighter teeth, confidently yours", details: "AI treatment planning predicts tooth movement with weekly progress tracking. Invisalign and traditional braces available.", beforeAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&auto=format&fit=crop" },
  { icon: Syringe, label: "Root Canal", href: "/services/root-canal", color: "bg-primary", description: "Pain-free relief with microscopic precision", details: "GentleWave technology cleans 99% of root canal surfaces. AI-assisted diagnosis identifies issues traditional X-rays miss.", beforeAfter: "https://images.unsplash.com/photo-1598259646477-49216eac2ddc?w=400&auto=format&fit=crop" },
  { icon: Baby, label: "Pediatric Dentistry", href: "/services/pediatric-dentistry", color: "bg-primary", description: "Gentle care for growing smiles", details: "Child-friendly environment with AI-powered cavity detection. Digital scanners replace uncomfortable molds.", beforeAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&auto=format&fit=crop" },
  { icon: Heart, label: "Gum Treatment", href: "/services/gum-treatment", color: "bg-primary", description: "Healthy gums, healthy life", details: "Laser therapy with AI-guided precision targeting. Non-invasive treatment with faster recovery times.", beforeAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&auto=format&fit=crop" },
  { icon: Scan, label: "Wisdom Tooth", href: "/services/wisdom-tooth", color: "bg-primary", description: "Smart extraction with faster recovery", details: "3D CBCT scan guides precise extraction planning. AI predicts nerve proximity for maximum safety.", beforeAfter: "https://images.unsplash.com/photo-1598259646477-49216eac2ddc?w=400&auto=format&fit=crop" },
  { icon: Wrench, label: "Crowns & Bridges", href: "/services/crowns-bridges", color: "bg-primary", description: "Same-day restoration with digital precision", details: "CEREC technology creates custom crowns in a single visit. AI color-matching ensures natural blend with adjacent teeth.", beforeAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&auto=format&fit=crop" },
  { icon: Gem, label: "Veneers", href: "/services/veneers", color: "bg-primary", description: "Flawless smile, instantly transformed", details: "AI smile design creates your perfect shape, size, and shade. Ultra-thin porcelain with zero-prep options available.", beforeAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&auto=format&fit=crop" },
  { icon: Pill, label: "Dentures", href: "/services/dentures", color: "bg-primary", description: "Modern fit, natural feel, confident smile", details: "3D-printed precision dentures with AI-optimized fit. Digital impressions eliminate gagging and discomfort.", beforeAfter: "https://images.unsplash.com/photo-1598259646477-49216eac2ddc?w=400&auto=format&fit=crop" },
];

export function ServicesOverview() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { isLowEnd } = useDeviceDetect();

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Comprehensive Care
            </span>
            <h2 className="mt-6 font-display text-display-2 text-foreground">Every Smile Deserves the Best</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tap any service to explore. Each treatment is enhanced by AI for precision, speed, and comfort.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expanded === service.label;

            return (
              <TiltCard key={service.label} tiltDegree={isLowEnd ? 0 : 4}>
                <motion.div
                  layout
                  className={cn(
                    "group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer transition-shadow",
                    isExpanded ? "shadow-xl ring-2 ring-primary/20" : "shadow-sm hover:shadow-lg"
                  )}
                  whileHover={isLowEnd ? {} : { y: -4, scale: 1.01 }}
                  onClick={() => setExpanded(isExpanded ? null : service.label)}
                >
                  <div className="p-6">
                    <div className={cn(
                      "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-all",
                      service.color,
                      isExpanded ? "scale-110" : "group-hover:scale-110"
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-card-foreground">{service.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                          <div className="rounded-xl overflow-hidden">
                            <Image
                              src={service.beforeAfter}
                              alt={service.label}
                              width={400}
                              height={150}
                              className="w-full h-32 object-cover"
                              placeholder="blur"
                              blurDataURL={blurDataURL}
                            />
                          </div>
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Learn More <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </TiltCard>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
