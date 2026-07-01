import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LiveChat } from "@/components/home/LiveChat";
import { CheckCircle, Clock, Calendar, Shield, ChevronRight, Star } from "lucide-react";

interface ServicePageProps {
  title: string;
  description: string;
  overview: string;
  benefits: string[];
  procedureSteps: { title: string; description: string }[];
  estimatedDuration: string;
  recoveryGuidance: string[];
  faqs: { question: string; answer: string }[];
  priceRange?: string;
}

export function ServiceTemplate({
  title,
  description,
  overview,
  benefits,
  procedureSteps,
  estimatedDuration,
  recoveryGuidance,
  faqs,
  priceRange,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-slate-50/50">
        {/* Premium Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-16 text-white md:py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary-400/5 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-secondary-300">{title}</span>
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl leading-tight">{title}</h1>
              <p className="mb-8 text-lg text-white/70">{description}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/booking">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                    <Calendar className="h-4 w-4" /> Book Appointment
                  </Button>
                </Link>
                <Link href={`/booking?service=${encodeURIComponent(title)}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      {/* Overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-secondary-900">Treatment Overview</h2>
              <p className="text-lg leading-relaxed text-secondary-600">{overview}</p>

              {/* Benefits */}
              <h3 className="mb-4 mt-10 text-xl font-semibold text-secondary-900">Benefits</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    <span className="text-secondary-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <h3 className="mb-4 text-lg font-semibold text-secondary-900">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Duration</p>
                      <p className="text-sm text-secondary-500">{estimatedDuration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Safety</p>
                      <p className="text-sm text-secondary-500">AI-Assisted Precision</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Satisfaction</p>
                      <p className="text-sm text-secondary-500">4.9/5 Patient Rating</p>
                    </div>
                  </div>
                  {priceRange && (
                    <div className="border-t border-secondary-200 pt-4">
                      <p className="text-sm text-secondary-500">Starting from</p>
                      <p className="text-2xl font-bold text-primary-700">{priceRange}</p>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <Link href="/booking">
                    <Button fullWidth>Book Appointment</Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-secondary-900">Procedure Steps</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {procedureSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-xl border border-secondary-200 bg-white p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {idx + 1}
                </div>
                <h3 className="mb-2 font-semibold text-secondary-900">{step.title}</h3>
                <p className="text-sm text-secondary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-secondary-900">Recovery Guidance</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recoveryGuidance.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg border border-secondary-200 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <span className="text-sm text-secondary-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-secondary-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-secondary-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium text-secondary-900">
                  {faq.question}
                  <ChevronRight className="h-5 w-5 text-secondary-400 transition-transform group-open:rotate-90" />
                </summary>
                <div className="border-t border-secondary-100 px-6 py-4">
                  <p className="text-sm leading-relaxed text-secondary-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-16 text-center text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to {title.toLowerCase().includes("treatment") ? "proceed" : "get started"}?
          </h2>
          <p className="mb-8 text-lg text-primary-100">
            Book a consultation today and let our AI-powered team take care of your smile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                <Calendar className="h-4 w-4" /> Book Appointment
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Call (123) 456-7890
              </Button>
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <LiveChat />
    </>
  );
}
