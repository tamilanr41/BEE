"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { TextArea } from "@/components/ui/TextArea";
import { LiveChat } from "@/components/home/LiveChat";
import { AlertTriangle, Phone, Ambulance, Clock, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function EmergencyPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-slate-50/50">
        {/* Premium Emergency Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-red-800 py-16 text-white">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-red-400/5 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md shadow-lg border border-white/20">
                <AlertTriangle className="h-8 w-8 text-white animate-pulse" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300 border border-red-500/30 mb-2">
                  🚨 Priority Service
                </span>
                <h1 className="text-3xl font-bold text-white md:text-4xl">Emergency Dental Care</h1>
                <p className="text-lg text-red-100/70 mt-1">Immediate care when you need it most. 24/7 Response.</p>
              </div>
            </div>
          </div>
        </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-secondary-900">Dental Emergencies We Treat</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Severe toothache",
                  "Knocked-out tooth",
                  "Broken or chipped tooth",
                  "Lost filling or crown",
                  "Abscess or infection",
                  "Bleeding that won't stop",
                  "Swollen jaw or face",
                  "Injury to soft tissues",
                  "Broken braces or wires",
                  "Severe sensitivity",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-800">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-3 text-red-800">
                  <Shield className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Same-Day Emergency Appointments</h3>
                    <p className="text-sm">Call us immediately for priority scheduling.</p>
                  </div>
                </div>
                <a href="tel:+1234567890">
                  <Button variant="danger" size="lg" className="mt-4 w-full gap-2">
                    <Phone className="h-5 w-5 animate-pulse" /> Call (123) 456-7890
                  </Button>
                </a>
              </div>
            </div>

            <div>
              {!submitted ? (
                <div className="rounded-xl border border-secondary-200 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-secondary-900">Request Emergency Care</h3>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="space-y-4">
                      <Input label="Full Name" required placeholder="Your name" />
                      <Input label="Phone Number" type="tel" required placeholder="(123) 456-7890" />
                      <Select
                        label="Emergency Type"
                        required
                        placeholder="Select your emergency"
                        options={[
                          { value: "toothache", label: "Severe Toothache" },
                          { value: "knocked-out", label: "Knocked-out Tooth" },
                          { value: "broken", label: "Broken/Chipped Tooth" },
                          { value: "abscess", label: "Abscess/Infection" },
                          { value: "bleeding", label: "Uncontrolled Bleeding" },
                          { value: "swelling", label: "Swelling" },
                          { value: "injury", label: "Injury/Trauma" },
                          { value: "other", label: "Other Emergency" },
                        ]}
                      />
                      <Select
                        label="Pain Severity"
                        required
                        placeholder="Rate your pain (1-10)"
                        options={Array.from({ length: 10 }, (_, i) => ({
                          value: String(i + 1),
                          label: `${i + 1} - ${i < 3 ? "Mild" : i < 7 ? "Moderate" : "Severe"}`,
                        }))}
                      />
                      <TextArea label="Brief Description" placeholder="Describe your symptoms..." />
                      <Button type="submit" variant="danger" size="lg" fullWidth>
                        <AlertTriangle className="h-4 w-4" /> Submit Emergency Request
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center animate-fade-in">
                  <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Emergency Request Received!</h3>
                  <p className="mb-4 text-green-700">
                    We have received your emergency request. A team member will contact you within 5 minutes.
                    If this is a life-threatening emergency, please call 911 immediately.
                  </p>
                  <a href="tel:+1234567890">
                    <Button variant="danger" className="gap-2">
                      <Phone className="h-4 w-4" /> Call Us Directly
                    </Button>
                  </a>
                </div>
              )}

              <div className="mt-6 rounded-lg bg-secondary-50 p-4 text-sm text-secondary-600">
                <div className="flex items-start gap-2">
                  <Ambulance className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <p>
                    In case of life-threatening emergencies, please call <strong>911</strong> immediately.
                    Our emergency dental services are for non-life-threatening dental emergencies only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <LiveChat />
    </>
  );
}
