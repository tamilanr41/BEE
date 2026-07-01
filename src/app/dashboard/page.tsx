"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/ui/StatsCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Users, DollarSign, Activity, TrendingUp, Clock } from "lucide-react";

const stats = [
  { title: "Today's Appointments", value: "18", icon: Calendar, trend: { value: 12, isUp: true }, variant: "primary" as const },
  { title: "Total Patients", value: "2,847", icon: Users, trend: { value: 8, isUp: true }, variant: "success" as const },
  { title: "Revenue This Month", value: "$124,500", icon: DollarSign, trend: { value: 15, isUp: true }, variant: "default" as const },
  { title: "No-Show Rate", value: "4.2%", icon: Activity, trend: { value: 2, isUp: false }, variant: "warning" as const },
];

const todayAppointments = [
  { time: "9:00 AM", patient: "Jessica Martinez", doctor: "Dr. Johnson", type: "Check-up", status: "Checked In" },
  { time: "9:30 AM", patient: "Robert Kim", doctor: "Dr. Chen", type: "Implant Follow-up", status: "Confirmed" },
  { time: "10:00 AM", patient: "Amanda Foster", doctor: "Dr. Johnson", type: "Invisalign Check", status: "Confirmed" },
  { time: "10:30 AM", patient: "David Thompson", doctor: "Dr. Williams", type: "Root Canal", status: "Scheduled" },
  { time: "11:00 AM", patient: "Sarah Lee", doctor: "Dr. Rodriguez", type: "Braces Adjustment", status: "Scheduled" },
  { time: "1:00 PM", patient: "Michael Brown", doctor: "Dr. Chen", type: "Consultation", status: "Scheduled" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Dashboard Overview</h1>
        <p className="text-secondary-500">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today's Appointments */}
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-secondary-900">Today&apos;s Schedule</h2>
            <Badge variant="info">6 appointments</Badge>
          </div>
          <div className="space-y-3">
            {todayAppointments.map((apt) => (
              <div
                key={apt.patient + apt.time}
                className="flex items-center justify-between rounded-lg border border-secondary-100 p-3 transition-colors hover:bg-secondary-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-xs font-medium text-primary-700">
                    {apt.patient.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-900">{apt.patient}</p>
                    <p className="text-xs text-secondary-500">{apt.doctor} &bull; {apt.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-secondary-900">{apt.time}</p>
                  <Badge
                    variant={
                      apt.status === "Checked In" ? "success" :
                      apt.status === "Confirmed" ? "info" : "default"
                    }
                    size="sm"
                  >
                    {apt.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
              View Full Schedule
            </button>
          </div>
        </Card>

        {/* Quick Actions & Stats */}
        <Card>
          <h2 className="mb-4 text-lg font-semibold text-secondary-900">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "New Patient", icon: Users, color: "bg-blue-50 text-blue-600" },
              { label: "Book Appointment", icon: Calendar, color: "bg-green-50 text-green-600" },
              { label: "Create Invoice", icon: DollarSign, color: "bg-purple-50 text-purple-600" },
              { label: "AI Assistant", icon: Activity, color: "bg-orange-50 text-orange-600" },
            ].map((action) => (
              <button
                key={action.label}
                className="flex items-center gap-3 rounded-lg border border-secondary-200 p-4 transition-all hover:border-primary-200 hover:shadow-sm"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-secondary-700">{action.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-secondary-700">Performance This Week</h3>
            <div className="space-y-3">
              {[
                { label: "Appointment Utilization", value: 85, color: "bg-primary-500" },
                { label: "Treatment Acceptance", value: 72, color: "bg-blue-500" },
                { label: "Patient Satisfaction", value: 94, color: "bg-green-500" },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-secondary-600">{metric.label}</span>
                    <span className="font-medium text-secondary-900">{metric.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary-200">
                    <div
                      className={`h-full rounded-full ${metric.color} transition-all`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
