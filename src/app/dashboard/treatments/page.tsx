"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Plus, ClipboardList } from "lucide-react";

const treatments = [
  { id: 1, patient: "Jessica Martinez", plan: "Teeth Whitening", provider: "Dr. Johnson", start: "Mar 22, 2026", status: "Completed", progress: 100, cost: 599 },
  { id: 2, patient: "Robert Kim", plan: "Dental Implant #19", provider: "Dr. Chen", start: "Jun 10, 2026", status: "In Progress", progress: 35, cost: 4500 },
  { id: 3, patient: "Amanda Foster", plan: "Invisalign Treatment", provider: "Dr. Johnson", start: "Apr 10, 2026", status: "In Progress", progress: 65, cost: 5500 },
  { id: 4, patient: "David Thompson", plan: "Root Canal #14", provider: "Dr. Williams", start: "Jul 5, 2026", status: "Planned", progress: 0, cost: 1200 },
  { id: 5, patient: "Sarah Lee", plan: "Braces", provider: "Dr. Rodriguez", start: "Feb 15, 2026", status: "In Progress", progress: 45, cost: 6000 },
];

export default function TreatmentsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Treatment Plans</h1>
          <p className="text-secondary-500">Multi-stage treatment plans with progress tracking.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> New Treatment Plan</Button>
      </div>

      <div className="space-y-4">
        {treatments.map((tx) => (
          <div key={tx.id} className="rounded-xl border border-secondary-200 bg-white p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">{tx.plan}</h3>
                  <p className="text-sm text-secondary-500">{tx.patient} &bull; {tx.provider}</p>
                  <p className="text-sm text-secondary-500">Started: {tx.start} &bull; Cost: ${tx.cost.toLocaleString()}</p>
                </div>
              </div>
              <Badge variant={
                tx.status === "Completed" ? "success" :
                tx.status === "In Progress" ? "info" :
                "default"
              }>{tx.status}</Badge>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-secondary-500">Progress</span>
                <span className="font-medium text-secondary-700">{tx.progress}%</span>
              </div>
              <Progress value={tx.progress} variant={tx.status === "Completed" ? "success" : "default"} />
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
