"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Tabs } from "@/components/ui/Tabs";
import { Calendar, List, Plus, Search, Filter, MoreHorizontal } from "lucide-react";

const appointments = [
  { id: 1, patient: "Jessica Martinez", doctor: "Dr. Johnson", date: "Jul 15, 2026", time: "9:00 AM", type: "Check-up", status: "Confirmed", chair: "1" },
  { id: 2, patient: "Robert Kim", doctor: "Dr. Chen", date: "Jul 15, 2026", time: "9:30 AM", type: "Implant Follow-up", status: "Checked In", chair: "2" },
  { id: 3, patient: "Amanda Foster", doctor: "Dr. Johnson", date: "Jul 15, 2026", time: "10:00 AM", type: "Invisalign Check", status: "Confirmed", chair: "1" },
  { id: 4, patient: "David Thompson", doctor: "Dr. Williams", date: "Jul 15, 2026", time: "10:30 AM", type: "Root Canal", status: "Scheduled", chair: "3" },
  { id: 5, patient: "Sarah Lee", doctor: "Dr. Rodriguez", date: "Jul 15, 2026", time: "11:00 AM", type: "Braces Adjustment", status: "Scheduled", chair: "4" },
  { id: 6, patient: "Michael Brown", doctor: "Dr. Chen", date: "Jul 15, 2026", time: "1:00 PM", type: "Consultation", status: "Scheduled", chair: "2" },
];

export default function AppointmentsPage() {
  const [view, setView] = useState<"list" | "calendar">("list");

  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Appointments</h1>
          <p className="text-secondary-500">Manage appointments, chair scheduling, and waitlist.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-lg border border-secondary-200">
            <button
              onClick={() => setView("list")}
              className={`rounded-l-lg p-2 ${view === "list" ? "bg-primary-50 text-primary-700" : "text-secondary-500 hover:bg-secondary-50"}`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`rounded-r-lg p-2 ${view === "calendar" ? "bg-primary-50 text-primary-700" : "text-secondary-500 hover:bg-secondary-50"}`}
            >
              <Calendar className="h-4 w-4" />
            </button>
          </div>
          <Button><Plus className="h-4 w-4" /> New Appointment</Button>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
          <input type="text" placeholder="Search appointments..." className="w-full rounded-lg border border-secondary-300 py-2 pl-10 pr-4 text-sm" />
        </div>
        <Button variant="outline"><Filter className="h-4 w-4" /> Filter</Button>
      </div>

      <Tabs
        tabs={[
          { id: "all", label: "All" },
          { id: "confirmed", label: "Confirmed" },
          { id: "checked-in", label: "Checked In" },
          { id: "scheduled", label: "Scheduled" },
          { id: "completed", label: "Completed" },
          { id: "cancelled", label: "Cancelled" },
        ]}
      >
        {(activeTab) => (
          <div className="rounded-xl border border-secondary-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-200">
                  {["Patient", "Doctor", "Date", "Time", "Type", "Status", "Chair", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase text-secondary-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {appointments
                  .filter((a) => activeTab === "all" || a.status.toLowerCase().replace(" ", "-") === activeTab)
                  .map((apt) => (
                    <tr key={apt.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-medium text-primary-700">
                            {apt.patient.split(" ").map(n => n[0]).join("")}
                          </div>
                          <span className="font-medium text-secondary-900">{apt.patient}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-secondary-700">{apt.doctor}</td>
                      <td className="px-4 py-3 text-sm text-secondary-700">{apt.date}</td>
                      <td className="px-4 py-3 text-sm text-secondary-700">{apt.time}</td>
                      <td className="px-4 py-3 text-sm text-secondary-700">{apt.type}</td>
                      <td className="px-4 py-3">
                        <Badge variant={
                          apt.status === "Confirmed" ? "success" :
                          apt.status === "Checked In" ? "info" :
                          apt.status === "Scheduled" ? "default" : "warning"
                        } size="sm">{apt.status}</Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-secondary-700">Chair {apt.chair}</td>
                      <td className="px-4 py-3">
                        <button className="rounded-lg p-1 text-secondary-400 hover:bg-secondary-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </Tabs>
    </DashboardLayout>
  );
}
