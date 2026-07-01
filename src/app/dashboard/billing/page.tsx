"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { StatsCard } from "@/components/ui/StatsCard";
import { Badge } from "@/components/ui/Badge";
import { DollarSign, TrendingUp, CreditCard, FileText, Download, Plus } from "lucide-react";

const invoices = [
  { id: "INV-2026-001", patient: "Jessica Martinez", date: "Jul 12, 2026", amount: 599, paid: 599, status: "Paid", method: "Credit Card" },
  { id: "INV-2026-002", patient: "Robert Kim", date: "Jul 10, 2026", amount: 1200, paid: 1200, status: "Paid", method: "Insurance" },
  { id: "INV-2026-003", patient: "Amanda Foster", date: "Jul 8, 2026", amount: 350, paid: 0, status: "Pending", method: "-" },
  { id: "INV-2026-004", patient: "David Thompson", date: "Jul 5, 2026", amount: 1500, paid: 500, status: "Partial", method: "Cash" },
  { id: "INV-2026-005", patient: "Sarah Lee", date: "Jun 28, 2026", amount: 250, paid: 250, status: "Paid", method: "Credit Card" },
];

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Billing</h1>
          <p className="text-secondary-500">Manage invoices, payments, and insurance claims.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> New Invoice</Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Revenue Today" value="$4,200" icon={DollarSign} variant="success" />
        <StatsCard title="Revenue This Month" value="$124,500" icon={TrendingUp} variant="primary" />
        <StatsCard title="Pending Payments" value="$1,850" icon={CreditCard} variant="warning" />
        <StatsCard title="Insurance Claims" value="12" icon={FileText} variant="default" />
      </div>

      <div className="rounded-xl border border-secondary-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-secondary-200">
              {["Invoice #", "Patient", "Date", "Amount", "Paid", "Balance", "Status", "Method", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase text-secondary-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                <td className="px-4 py-3 text-sm font-medium text-primary-700">{inv.id}</td>
                <td className="px-4 py-3 text-sm text-secondary-900">{inv.patient}</td>
                <td className="px-4 py-3 text-sm text-secondary-700">{inv.date}</td>
                <td className="px-4 py-3 text-sm text-secondary-900">${inv.amount.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-secondary-700">${inv.paid.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm font-medium text-secondary-900">${(inv.amount - inv.paid).toLocaleString()}</td>
                <td className="px-4 py-3">
                  <Badge variant={
                    inv.status === "Paid" ? "success" :
                    inv.status === "Pending" ? "warning" : "info"
                  }>{inv.status}</Badge>
                </td>
                <td className="px-4 py-3 text-sm text-secondary-500">{inv.method}</td>
                <td className="px-4 py-3">
                  <button className="rounded-lg p-1 text-secondary-400 hover:bg-secondary-100">
                    <Download className="h-4 w-4" />
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
