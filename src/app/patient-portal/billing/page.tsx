"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DollarSign, Download, CreditCard } from "lucide-react";
import Link from "next/link";

const invoices = [
  { id: "INV-2026-001", date: "Jun 15, 2026", description: "Teeth Whitening - Complete", amount: 599, paid: 599, status: "Paid" },
  { id: "INV-2026-002", date: "May 20, 2026", description: "Consultation & X-rays", amount: 250, paid: 0, status: "Pending" },
  { id: "INV-2026-003", date: "Apr 10, 2026", description: "Invisalign - Initial Payment", amount: 2000, paid: 2000, status: "Paid" },
  { id: "INV-2026-004", date: "Mar 22, 2026", description: "Filling - Tooth #19", amount: 350, paid: 350, status: "Paid" },
];

export default function PatientBillingPage() {
  const totalPending = invoices.filter((i) => i.status === "Pending").reduce((s, i) => s + i.amount - i.paid, 0);

  return (
    <>
      <Navbar />
      <section className="bg-secondary-50 min-h-screen pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-secondary-900">Billing & Payments</h1>
            <p className="text-secondary-500">View invoices, make payments, and download receipts.</p>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-secondary-200 bg-white p-5">
              <p className="text-sm text-secondary-500">Total Paid</p>
              <p className="text-2xl font-bold text-green-700">$2,949</p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-white p-5">
              <p className="text-sm text-secondary-500">Pending Balance</p>
              <p className="text-2xl font-bold text-orange-700">${totalPending}</p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-white p-5">
              <p className="text-sm text-secondary-500">Insurance Coverage</p>
              <p className="text-2xl font-bold text-blue-700">$1,200</p>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-secondary-900">Invoices</h2>
            <Link href="/patient-portal/billing"><Button size="sm" variant="outline"><CreditCard className="h-4 w-4" /> Pay Now</Button></Link>
          </div>

          <div className="space-y-3">
            {invoices.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between rounded-xl border border-secondary-200 bg-white p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">{inv.description}</p>
                    <p className="text-sm text-secondary-500">{inv.id} &bull; {inv.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium text-secondary-900">${inv.amount.toLocaleString()}</p>
                    <Badge variant={inv.status === "Paid" ? "success" : "warning"}>{inv.status}</Badge>
                  </div>
                  <button className="rounded-lg border border-secondary-200 p-2 text-secondary-500 hover:bg-secondary-50">
                    <Download className="h-4 w-4" />
                  </button>
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
