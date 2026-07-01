"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerGrid } from "@/components/animations/StaggerGrid";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { blurDataURL } from "@/lib/images";

const treatments = [
  { id: "all", label: "All" },
  { id: "whitening", label: "Whitening" },
  { id: "implants", label: "Implants" },
  { id: "veneers", label: "Veneers" },
];

const galleryItems = [
  { id: 1, treatment: "whitening", src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop", alt: "Teeth whitening result", span: "row-span-2" },
  { id: 2, treatment: "implants", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop", alt: "Dental implant procedure", span: "" },
  { id: 3, treatment: "veneers", src: "https://images.unsplash.com/photo-1598259646477-49216eac2ddc?w=600&auto=format&fit=crop", alt: "Veneers before and after", span: "" },
  { id: 4, treatment: "whitening", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop", alt: "Smile transformation", span: "row-span-2" },
  { id: 5, treatment: "implants", src: "https://images.unsplash.com/photo-1598259646477-49216eac2ddc?w=600&auto=format&fit=crop", alt: "Implant restoration", span: "" },
  { id: 6, treatment: "veneers", src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop", alt: "Veneer smile design", span: "" },
  { id: 7, treatment: "whitening", src: "https://images.unsplash.com/photo-1598259646477-49216eac2ddc?w=600&auto=format&fit=crop", alt: "Whitening results", span: "" },
  { id: 8, treatment: "implants", src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop", alt: "Full mouth restoration", span: "row-span-2" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const filtered = activeFilter === "all" ? galleryItems : galleryItems.filter((c) => c.treatment === activeFilter);

  return (
    <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">Real Transformations</span>
            <h2 className="mt-6 font-display text-display-2 text-foreground">Our Work Speaks</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Click any image to view full size. Every smile is a real patient result.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {treatments.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveFilter(t.id)}
                className={cn(
                  "rounded-md px-5 py-2 text-sm font-medium transition-all",
                  activeFilter === t.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <StaggerGrid className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              className="group relative overflow-hidden rounded-md cursor-pointer break-inside-avoid shadow-sm"
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightboxImg(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={lightboxImg}
                alt="Gallery image"
                width={1200}
                height={900}
                className="rounded-lg shadow-2xl object-contain"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
