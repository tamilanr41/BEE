"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

const appointments = [
  { id: 1, date: "Jul 15, 2026", time: "10:00 AM", doctor: "Dr. Sarah Johnson", type: "Check-up & Cleaning", status: "Confirmed", location: "Main Clinic" },
  { id: 2, date: "Aug 20, 2026", time: "2:30 PM", doctor: "Dr. Michael Chen", type: "Implant Consultation", status: "Scheduled", location: "Main Clinic" },
  { id: 3, date: "May 10, 2026", time: "11:00 AM", doctor: "Dr. Emily Rodriguez", type: "Invisalign Check", status: "Completed", location: "Main Clinic" },
  { id: 4, date: "Mar 22, 2026", time: "9:30 AM", doctor: "Dr. Sarah Johnson", type: "Teeth Whitening", status: "Completed", location: "Main Clinic" },
];

const statusVariant = { Confirmed: "success", Scheduled: "info", Completed: "default", Cancelled: "danger" } as const;

export default function PatientAppointmentsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-secondary-50 min-h-screen pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">My Appointments</h1>
              <p className="text-secondary-500">Manage your dental appointments.</p>
            </div>
            <Link href="/booking"><Button>Book New</Button></Link>
          </div>

          <div className="space-y-3">
            {appointments.map((apt) => (
              <div key={apt.id} className="rounded-xl border border-secondary-200 bg-white p-4 transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="hidden h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-center sm:flex">
                      <div>
                        <p className="text-lg font-bold text-primary-700">{apt.date.split(" ")[1].replace(",", "")}</p>
                        <p className="text-xs text-primary-500">{apt.date.split(" ")[0]}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">{apt.type}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-secondary-500">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{apt.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{apt.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{apt.location}</span>
                      </div>
                      <p className="mt-1 text-sm text-secondary-500">{apt.doctor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={statusVariant[apt.status as keyof typeof statusVariant]}>{apt.status}</Badge>
                    {apt.status === "Confirmed" && (
                      <Link href={`/patient-portal/appointments`}>
                        <Button variant="outline" size="sm">Reschedule</Button>
                      </Link>
                    )}
                    <ChevronRight className="h-5 w-5 text-secondary-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
