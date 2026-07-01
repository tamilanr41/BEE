"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { StatsCard } from "@/components/ui/StatsCard";
import { Calendar, FileText, DollarSign, Pill, MessageSquare, Users, ArrowRight } from "lucide-react";

const quickActions = [
  { label: "Book Appointment", href: "/booking", icon: Calendar, color: "bg-blue-50 text-blue-600" },
  { label: "View Records", href: "/patient-portal/records", icon: FileText, color: "bg-green-50 text-green-600" },
  { label: "Pay Bill", href: "/patient-portal/billing", icon: DollarSign, color: "bg-purple-50 text-purple-600" },
  { label: "Messages", href: "/patient-portal/messages", icon: MessageSquare, color: "bg-orange-50 text-orange-600" },
  { label: "Prescriptions", href: "/patient-portal/records", icon: Pill, color: "bg-pink-50 text-pink-600" },
  { label: "Family Members", href: "/patient-portal/family", icon: Users, color: "bg-teal-50 text-teal-600" },
];

const upcomingAppointments = [
  { date: "Jul 15, 2026", time: "10:00 AM", doctor: "Dr. Sarah Johnson", type: "Check-up & Cleaning", status: "Confirmed" },
  { date: "Aug 20, 2026", time: "2:30 PM", doctor: "Dr. Michael Chen", type: "Implant Consultation", status: "Scheduled" },
];

export default function PatientPortalPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-[70vh] bg-slate-50 flex items-center justify-center">
          <div className="max-w-md w-full mx-4 rounded-2xl border border-secondary-200 bg-white p-8 shadow-xl text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4 text-xl">
              🔐
            </span>
            <h1 className="mb-2 text-2xl font-bold text-secondary-900 font-display">Patient Portal</h1>
            <p className="mb-6 text-secondary-600 text-sm">Sign in to access your digital treatment files, appointments, and billing.</p>
            <Link href="/auth/login" className="w-full block"><Button size="lg" fullWidth>Sign In to Portal</Button></Link>
            <p className="mt-4 text-xs text-secondary-500">
              Don&apos;t have an account? <Link href="/auth/register" className="text-primary-600 font-semibold hover:underline">Register Now</Link>
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-slate-50/50 min-h-screen">
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary-950 via-primary-900 to-primary-800 text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-[200px] h-[200px] bg-white/5 rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-300 backdrop-blur-md mb-2">
                  👤 Patient Dashboard
                </span>
                <h1 className="text-3xl font-bold font-display">Welcome back, {session.user?.name}</h1>
                <p className="text-white/70 text-sm mt-1">Manage your dental care, view records, and schedule visits from one place.</p>
              </div>
            </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-secondary-900">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-2 rounded-xl border border-secondary-200 bg-white p-4 text-center transition-all hover:shadow-md"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-secondary-700">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-secondary-900">Upcoming Appointments</h2>
              <Link href="/patient-portal/appointments" className="text-sm text-primary-600 hover:underline">View All</Link>
            </div>
            <div className="space-y-3">
              {upcomingAppointments.map((apt) => (
                <div key={apt.date + apt.time} className="flex items-center justify-between rounded-xl border border-secondary-200 bg-white p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary-700">{apt.date.split(",")[0].split(" ")[1]}</p>
                      <p className="text-xs text-secondary-500">{apt.date.split(" ")[0]}</p>
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900">{apt.type}</p>
                      <p className="text-sm text-secondary-500">{apt.doctor} &bull; {apt.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-700">{apt.status}</span>
                    <Link href={`/patient-portal/appointments`}>
                      <ArrowRight className="h-4 w-4 text-secondary-400" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Visits" value="12" icon={Calendar} variant="primary" />
            <StatsCard title="Upcoming" value="2" icon={FileText} variant="success" />
            <StatsCard title="Pending Balance" value="$250" icon={DollarSign} variant="warning" />
            <StatsCard title="Treatment Progress" value="75%" icon={Calendar} variant="default" />
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
