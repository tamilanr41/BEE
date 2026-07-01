"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { LiveChat } from "@/components/home/LiveChat";
import { Video, MessageSquare, Image, Calendar, Phone, Shield, Clock, Users } from "lucide-react";
import Link from "next/link";

const upcomingCalls = [
  { id: 1, doctor: "Dr. Sarah Johnson", date: "Jul 15, 2026", time: "10:00 AM", type: "Follow-up", status: "Confirmed" },
  { id: 2, doctor: "Dr. Michael Chen", date: "Jul 20, 2026", time: "2:00 PM", type: "Consultation", status: "Scheduled" },
];

const features = [
  { icon: Video, title: "Video Consultations", desc: "Face-to-face consultations from anywhere" },
  { icon: MessageSquare, title: "Secure Messaging", desc: "Encrypted text communication with your dentist" },
  { icon: Image, title: "Image Sharing", desc: "Share photos of your dental concerns securely" },
  { icon: Calendar, title: "Follow-up Visits", desc: "Automated follow-up scheduling" },
  { icon: Shield, title: "HIPAA Compliant", desc: "Your data is encrypted and protected" },
  { icon: Users, title: "Family Access", desc: "Manage consultations for family members" },
];

export default function TeleDentistryPage() {
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">Tele-Dentistry</h1>
              <p className="mb-6 text-lg text-primary-100">
                Connect with your dentist from the comfort of your home. Secure video
                consultations, messaging, and digital treatment planning.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  <Video className="h-4 w-4" /> Start Consultation
                </Button>
                <Link href="/booking">
                  <Button variant="outline" size="lg" className="border-white/30 text-white">
                    Schedule Video Visit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-video rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Video className="h-16 w-16 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-secondary-900">Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-secondary-200 bg-white p-6 text-center transition-shadow hover:shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-secondary-900">{f.title}</h3>
                <p className="text-sm text-secondary-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-secondary-900">Upcoming Consultations</h2>
          <div className="space-y-3">
            {upcomingCalls.map((call) => (
              <div key={call.id} className="flex items-center justify-between rounded-xl border border-secondary-200 bg-white p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Video className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">{call.doctor}</p>
                    <p className="text-sm text-secondary-500">
                      <Clock className="mr-1 inline h-3.5 w-3.5" />
                      {call.date} at {call.time} &bull; {call.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={call.status === "Confirmed" ? "success" : "default"}>{call.status}</Badge>
                  <Button size="sm"><Video className="h-4 w-4" /> Join Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <LiveChat />
    </>
  );
}
