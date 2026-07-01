"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Star, Quote, Play } from "lucide-react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

const reviews = [
  {
    name: "Sarah Johnson",
    text: "The AI triage saved me so much time. I described my symptoms online and they were ready for me when I arrived. Incredible experience!",
    rating: 5,
    treatment: "Teeth Whitening",
    avatar: "SJ",
    color: "bg-primary",
  },
  {
    name: "Michael Chen",
    text: "I was terrified of dentists. The AI assistant answered all my questions and the team made me feel completely at ease. Life-changing results.",
    rating: 5,
    treatment: "Dental Implants",
    avatar: "MC",
    color: "bg-primary",
  },
  {
    name: "Emily Rodriguez",
    text: "My smile makeover exceeded every expectation. The before/after simulation helped me visualize everything before we started. State-of-the-art!",
    rating: 5,
    treatment: "Smile Makeover",
    avatar: "ER",
    color: "bg-primary",
  },
  {
    name: "James Wilson",
    text: "Same-day crown? Unbelievable. Their digital workflow is so efficient. In and out in 2 hours with a perfect-fitting crown.",
    rating: 5,
    treatment: "Crowns & Bridges",
    avatar: "JW",
    color: "bg-primary",
  },
  {
    name: "Priya Patel",
    text: "The follow-up care is amazing. The AI checked on me after my procedure and the team called personally the next day. They truly care.",
    rating: 5,
    treatment: "Root Canal",
    avatar: "PP",
    color: "bg-primary",
  },
  {
    name: "David Kim",
    text: "My kids actually look forward to going to the dentist now! The pediatric team is wonderful and the technology keeps them engaged.",
    rating: 5,
    treatment: "Pediatric Dentistry",
    avatar: "DK",
    color: "bg-primary",
  },
];

export function PatientReviews() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { isLowEnd } = useDeviceDetect();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none hidden md:block" />

      <div className="relative mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
              <Star className="h-3.5 w-3.5 fill-amber-500" /> 4.9 Average Rating
            </span>
            <h2 className="mt-6 font-display text-display-2 text-foreground">Real Smiles, Real Results</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tap any card to read the full story. These are real patients from our practice.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => {
            const isExpanded = expanded === review.name;

            return (
              <ScrollReveal key={review.name} direction="up" delay={i * 0.08}>
                <motion.div
                  layout
                  className={`group relative rounded-2xl border transition-all cursor-pointer ${
                    isExpanded
                      ? "border-primary/30 bg-card shadow-xl scale-[1.02] z-10"
                      : "border-border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:-translate-y-1"
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : review.name)}
                  whileHover={isLowEnd ? {} : { scale: isExpanded ? 1.02 : 1.01 }}
                >
                  <div className="p-6">
                    <Quote className={`h-8 w-8 absolute top-4 right-4 transition-opacity ${isExpanded ? "opacity-20" : "opacity-10"}`} />
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className={`text-sm text-card-foreground/80 leading-relaxed transition-all ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}>
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-muted/50" data-cursor="Play">
                            <Play className="h-8 w-8 text-primary/40" />
                            <div>
                              <p className="text-xs font-medium text-foreground">Video Testimonial</p>
                              <p className="text-[10px] text-muted-foreground">Watch {review.name}&apos;s full story</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${review.color} text-sm font-semibold text-white shadow-sm`}>
                        {review.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-card-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.treatment}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
