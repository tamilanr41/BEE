"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Star, ThumbsUp } from "lucide-react";

const allReviews = [
  { id: 1, name: "Jessica Martinez", treatment: "Teeth Whitening", rating: 5, content: "I was nervous about teeth whitening, but the AI consultation made me feel completely at ease. The results are incredible! My smile has never looked better.", date: "2 weeks ago", helpful: 24 },
  { id: 2, name: "Robert Kim", treatment: "Dental Implants", rating: 5, content: "The implant procedure was seamless. The 3D treatment planning showed me exactly what to expect. Recovery was faster than I anticipated.", date: "1 month ago", helpful: 18 },
  { id: 3, name: "Amanda Foster", treatment: "Invisalign", rating: 5, content: "Tracking my aligner progress through the patient app is so convenient. My dentist checked in regularly via the AI follow-up system.", date: "3 weeks ago", helpful: 31 },
  { id: 4, name: "David Thompson", treatment: "Root Canal", rating: 4, content: "Dreading a root canal but the sedation options made it painless. The AI-assisted diagnosis was spot on.", date: "2 months ago", helpful: 15 },
  { id: 5, name: "Sarah Lee", treatment: "Braces", rating: 5, content: "My daughter's braces experience was amazing! The staff was so gentle and patient with her. Would highly recommend.", date: "2 months ago", helpful: 22 },
  { id: 6, name: "Michael Brown", treatment: "Check-up & Cleaning", rating: 5, content: "The most thorough dental cleaning I've ever had. The AI system detected an early cavity that other dentists missed.", date: "3 months ago", helpful: 19 },
];

export default function ReviewsPage() {
  const [sortBy, setSortBy] = useState<"latest" | "highest" | "lowest">("latest");

  const sorted = [...allReviews].sort((a, b) => {
    if (sortBy === "latest") return 0;
    if (sortBy === "highest") return b.rating - a.rating;
    return a.rating - b.rating;
  });

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-slate-50/50">
        {/* Premium Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-16 text-center text-white">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary-400/5 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-300 backdrop-blur-md mb-4">
              ✨ Verified Reviews
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl leading-tight">
              Patient Reviews
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/70 mb-4">
              See what our patients say about their experience. Transparency & quality care.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-white/80">
              <span className="text-2xl font-bold text-white">4.9</span>
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span>({allReviews.length} reviews)</span>
            </div>
          </div>
        </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-2">
              {(["latest", "highest", "lowest"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
                    sortBy === s ? "bg-primary-600 text-white" : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                  }`}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            <Button size="sm">Write a Review</Button>
          </div>

          <div className="space-y-6">
            {sorted.map((review) => (
              <div key={review.id} className="rounded-xl border border-secondary-200 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                    {review.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">{review.name}</p>
                    <p className="text-xs text-secondary-500">{review.treatment} &bull; {review.date}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-secondary-200"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-secondary-700">{review.content}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-secondary-500">
                  <button className="flex items-center gap-1 hover:text-primary-600">
                    <ThumbsUp className="h-3.5 w-3.5" /> Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
