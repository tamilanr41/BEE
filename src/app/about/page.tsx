import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Button } from "@/components/ui/Button";
import { Shield, Microscope, Heart, Users, Zap, Globe } from "lucide-react";
import Link from "next/link";

const values = [
  { icon: Shield, title: "AI-Powered Precision", desc: "Leveraging artificial intelligence for more accurate diagnoses and treatment planning." },
  { icon: Heart, title: "Patient-Centered Care", desc: "Every treatment plan is personalized to your unique needs and comfort level." },
  { icon: Microscope, title: "Advanced Technology", desc: "State-of-the-art equipment including digital scanners, 3D imaging, and CAD/CAM." },
  { icon: Users, title: "Expert Team", desc: "Board-certified specialists with advanced training in all dental disciplines." },
  { icon: Zap, title: "Efficiency & Convenience", desc: "Smart scheduling, same-day treatments, and automated follow-up care." },
  { icon: Globe, title: "Accessible Care", desc: "Multi-language support, insurance-friendly, and flexible payment options." },
];

const timeline = [
  { year: "2014", event: "SmileCare Dental founded with a vision to transform dental care." },
  { year: "2016", event: "Expanded to multi-specialty practice, adding orthodontics and implantology." },
  { year: "2018", event: "Introduced digital dentistry with intraoral scanning and same-day crowns." },
  { year: "2020", event: "Launched tele-dentistry and patient portal for remote care." },
  { year: "2023", event: "Implemented AI-powered diagnostics and treatment planning." },
  { year: "2024", event: "Opened second location and introduced AI voice assistant for clinicians." },
  { year: "2025", event: "Full AI integration across all clinical and administrative workflows." },
  { year: "2026", event: "Leading dental AI platform with predictive analytics and smart automation." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-slate-50/50">
        {/* Premium Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-16 text-center text-white md:py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary-400/5 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-300 backdrop-blur-md mb-4">
              ✨ Our Practice
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl leading-tight">
              About SmileCare Dental
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Where advanced technology meets compassionate care. We&apos;re redefining the dental
              experience with AI-powered precision and a patient-first approach.
            </p>
          </div>
        </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-secondary-900">Our Mission</h2>
            <p className="text-lg leading-relaxed text-secondary-600">
              To make exceptional dental care accessible, comfortable, and efficient through
              the power of artificial intelligence. We believe that everyone deserves a healthy,
              beautiful smile, and we use the best technology available to deliver outstanding
              results with a gentle touch.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-secondary-900">What Sets Us Apart</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-secondary-200 bg-white p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-secondary-900">{v.title}</h3>
                <p className="text-sm text-secondary-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-secondary-900">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-200" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-12">
                  <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary-600 bg-white" />
                  <span className="text-sm font-bold text-primary-600">{item.year}</span>
                  <p className="mt-1 text-secondary-700">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16 text-center text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-2xl font-bold">Ready to Experience the Difference?</h2>
          <p className="mb-8 text-primary-100">Book your appointment and see why thousands trust SmileCare Dental.</p>
          <div className="flex justify-center gap-4">
            <Link href="/booking"><Button size="lg" className="bg-white text-primary-700">Book Now</Button></Link>
            <Link href="/dentists"><Button variant="outline" size="lg" className="border-white/30 text-white">Meet Our Team</Button></Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <LiveChat />
    </>
  );
}
