"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Search, Plus, MoreHorizontal, Mail, Phone } from "lucide-react";

const patients = [
  { id: 1, name: "Jessica Martinez", email: "jessica@example.com", phone: "(123) 456-7890", lastVisit: "Jul 10, 2026", status: "Active", dob: "Jan 15, 1990" },
  { id: 2, name: "Robert Kim", email: "robert@example.com", phone: "(123) 456-7891", lastVisit: "Jul 8, 2026", status: "Active", dob: "Mar 22, 1985" },
  { id: 3, name: "Amanda Foster", email: "amanda@example.com", phone: "(123) 456-7892", lastVisit: "Jul 5, 2026", status: "Active", dob: "Aug 10, 1995" },
  { id: 4, name: "David Thompson", email: "david@example.com", phone: "(123) 456-7893", lastVisit: "Jun 28, 2026", status: "Active", dob: "Nov 5, 1978" },
  { id: 5, name: "Sarah Lee", email: "sarah@example.com", phone: "(123) 456-7894", lastVisit: "Jun 20, 2026", status: "Inactive", dob: "May 30, 2000" },
  { id: 6, name: "Michael Brown", email: "michael@example.com", phone: "(123) 456-7895", lastVisit: "Jun 15, 2026", status: "Active", dob: "Sep 12, 1988" },
];

export default function PatientsPage() {
  const [search, setSearch] = useState("");

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Patients</h1>
          <p className="text-secondary-500">Manage patient records, history, and information.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Add Patient</Button>
      </div>

      <div className="mb-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
          <input
            type="text"
            placeholder="Search patients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-secondary-300 py-2.5 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="rounded-xl border border-secondary-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-secondary-200">
              {["Patient", "Contact", "DOB", "Last Visit", "Status", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase text-secondary-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-secondary-100 hover:bg-secondary-50 cursor-pointer">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-medium text-primary-700">
                      {p.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="font-medium text-secondary-900">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-0.5 text-sm">
                    <span className="flex items-center gap-1 text-secondary-700"><Mail className="h-3 w-3" />{p.email}</span>
                    <span className="flex items-center gap-1 text-secondary-500"><Phone className="h-3 w-3" />{p.phone}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-secondary-700">{p.dob}</td>
                <td className="px-4 py-3 text-sm text-secondary-700">{p.lastVisit}</td>
                <td className="px-4 py-3">
                  <Badge variant={p.status === "Active" ? "success" : "default"}>{p.status}</Badge>
                </td>
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
    </DashboardLayout>
  );
}
