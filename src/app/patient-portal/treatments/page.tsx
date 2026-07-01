"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { ClipboardList, CheckCircle, Clock } from "lucide-react";

const treatments = [
  { id: 1, name: "Teeth Whitening", status: "Completed", progress: 100, startDate: "Mar 22, 2026", endDate: "Mar 22, 2026" },
  { id: 2, name: "Invisalign Treatment", status: "In Progress", progress: 65, startDate: "Apr 10, 2026", endDate: "Dec 2026 (est.)", steps: "18/28 aligners" },
  { id: 3, name: "Dental Implant - Tooth #19", status: "Planned", progress: 0, startDate: "Aug 2026 (est.)", endDate: "Nov 2026 (est.)" },
];

export default function PatientTreatmentsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-secondary-50 min-h-screen pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-2 text-2xl font-bold text-secondary-900">My Treatments</h1>
          <p className="mb-6 text-secondary-500">Track your ongoing and completed treatments.</p>

          <div className="space-y-4">
            {treatments.map((tx) => (
              <div key={tx.id} className="rounded-xl border border-secondary-200 bg-white p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      tx.status === "Completed" ? "bg-green-50 text-green-600" :
                      tx.status === "In Progress" ? "bg-blue-50 text-blue-600" : "bg-secondary-100 text-secondary-500"
                    }`}>
                      {tx.status === "Completed" ? <CheckCircle className="h-5 w-5" /> : <ClipboardList className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">{tx.name}</h3>
                      <div className="mt-1 flex items-center gap-3 text-sm text-secondary-500">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{tx.startDate} - {tx.endDate}</span>
                        {tx.steps && <span>{tx.steps}</span>}
                      </div>
                    </div>
                  </div>
                  <Badge variant={
                    tx.status === "Completed" ? "success" :
                    tx.status === "In Progress" ? "info" : "default"
                  }>{tx.status}</Badge>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-secondary-500">Progress</span>
                    <span className="font-medium text-secondary-700">{tx.progress}%</span>
                  </div>
                  <Progress value={tx.progress} />
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
