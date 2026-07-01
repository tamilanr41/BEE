"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { LiveChat } from "@/components/home/LiveChat";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-slate-50/50">
        {/* Premium Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-16 text-center text-white">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-secondary-400/5 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-300 backdrop-blur-md mb-4">
              ✉ Support & Inquiry
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl leading-tight">
              Contact Us
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/70">
              We&apos;d love to hear from you. Get in touch with our administrative and medical teams.
            </p>
          </div>
        </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-secondary-900">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+1234567890" },
                  { icon: Mail, label: "Email", value: "info@smilecaredental.com", href: "mailto:info@smilecaredental.com" },
                  { icon: MapPin, label: "Address", value: "123 Dental Street, Suite 100\nNew York, NY 10001" },
                  { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-6PM | Sat: 9AM-3PM\nSun: Closed (Emergency Only)" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-primary-600 hover:underline whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-secondary-600 whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" icon={<MessageCircle className="h-4 w-4" />}>WhatsApp</Button>
                </a>
                <a href="tel:+1234567890">
                  <Button variant="outline" icon={<Phone className="h-4 w-4" />}>Call Us</Button>
                </a>
              </div>
            </div>

            <div>
              {!submitted ? (
                <div className="rounded-xl border border-secondary-200 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-secondary-900">Send a Message</h3>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input label="First Name" required />
                        <Input label="Last Name" required />
                      </div>
                      <Input label="Email" type="email" required />
                      <Input label="Phone" type="tel" />
                      <Input label="Subject" required />
                      <TextArea label="Message" required rows={5} />
                      <Button type="submit" size="lg" fullWidth>Send Message</Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center rounded-xl border border-green-200 bg-green-50 p-8 text-center animate-fade-in">
                  <div>
                    <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
                    <h3 className="mb-2 text-xl font-semibold text-green-800">Message Sent!</h3>
                    <p className="text-green-700">We&apos;ll get back to you within 24 hours.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>Send Another</Button>
                  </div>
                </div>
              )}
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
