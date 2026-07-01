"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/ui/StatsCard";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, Activity } from "lucide-react";

const metrics = [
  { title: "Appointment Utilization", value: "85%", icon: Calendar, trend: { value: 5, isUp: true }, variant: "primary" as const },
  { title: "Treatment Acceptance", value: "72%", icon: Activity, trend: { value: 3, isUp: true }, variant: "success" as const },
  { title: "New vs Returning", value: "35/65", icon: Users, trend: { value: 8, isUp: true }, variant: "info" as any },
  { title: "No-Show Rate", value: "4.2%", icon: TrendingUp, trend: { value: 1, isUp: false }, variant: "warning" as const },
  { title: "Avg Revenue/Patient", value: "$425", icon: DollarSign, trend: { value: 12, isUp: true }, variant: "success" as const },
  { title: "Patient Satisfaction", value: "4.9/5", icon: BarChart3, trend: { value: 2, isUp: true }, variant: "primary" as const },
];

const revenueData = [
  { procedure: "General Dentistry", revenue: 45200, count: 182 },
  { procedure: "Cosmetic Dentistry", revenue: 38500, count: 45 },
  { procedure: "Dental Implants", revenue: 32000, count: 12 },
  { procedure: "Orthodontics", revenue: 28000, count: 18 },
  { procedure: "Teeth Whitening", revenue: 12400, count: 42 },
  { procedure: "Root Canal", revenue: 9500, count: 11 },
  { procedure: "Crowns & Bridges", revenue: 8800, count: 14 },
  { procedure: "Other", revenue: 15600, count: 95 },
];

const topProcedures = [
  { name: "Check-up & Cleaning", count: 210, revenue: 21000 },
  { name: "Teeth Whitening", count: 42, revenue: 12400 },
  { name: "Fillings", count: 38, revenue: 9500 },
  { name: "Crowns", count: 14, revenue: 8800 },
  { name: "Implants", count: 12, revenue: 32000 },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Analytics</h1>
        <p className="text-secondary-500">Track performance metrics and business insights.</p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {metrics.map((m) => (
          <StatsCard key={m.title} {...m} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue by Procedure */}
        <Card>
          <h2 className="mb-4 text-lg font-semibold text-secondary-900">Revenue by Procedure</h2>
          <div className="space-y-3">
            {revenueData.map((item) => (
              <div key={item.procedure}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-secondary-700">{item.procedure}</span>
                  <span className="font-medium text-secondary-900">${item.revenue.toLocaleString()}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary-200">
                  <div
                    className="h-full rounded-full bg-primary-500"
                    style={{ width: `${(item.revenue / 45200) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-secondary-400">{item.count} procedures</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Procedures */}
        <Card>
          <h2 className="mb-4 text-lg font-semibold text-secondary-900">Top Procedures This Month</h2>
          <div className="space-y-4">
            {topProcedures.map((proc, idx) => (
              <div key={proc.name} className="flex items-center justify-between border-b border-secondary-100 pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-sm font-bold text-primary-700">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-medium text-secondary-900">{proc.name}</p>
                    <p className="text-sm text-secondary-500">{proc.count} procedures</p>
                  </div>
                </div>
                <p className="font-semibold text-secondary-900">${proc.revenue.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
