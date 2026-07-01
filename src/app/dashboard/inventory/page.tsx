"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/ui/StatsCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Package, AlertTriangle, Plus, Search } from "lucide-react";

const items = [
  { id: 1, name: "Composite Resin - A2", category: "Material", quantity: 15, min: 10, unit: "syringes", expiry: "Dec 2026", status: "OK" },
  { id: 2, name: "Dental Implants - Straumann", category: "Implant", quantity: 5, min: 5, unit: "units", expiry: "N/A", status: "Low" },
  { id: 3, name: "Lidocaine 2%", category: "Medicine", quantity: 25, min: 20, unit: "cartridges", expiry: "Aug 2026", status: "OK" },
  { id: 4, name: "Alginate Impression", category: "Material", quantity: 3, min: 10, unit: "boxes", expiry: "Oct 2026", status: "Critical" },
  { id: 5, name: "Surgical Gloves - Size 7.5", category: "Consumable", quantity: 200, min: 100, unit: "pairs", expiry: "N/A", status: "OK" },
  { id: 6, name: "Invisalign Aligners", category: "Aligner", quantity: 8, min: 5, unit: "sets", expiry: "N/A", status: "OK" },
  { id: 7, name: "Crowns - Zirconia", category: "Material", quantity: 4, min: 5, unit: "units", expiry: "N/A", status: "Low" },
  { id: 8, name: "Sterilization Pouches", category: "Consumable", quantity: 2, min: 10, unit: "boxes", expiry: "N/A", status: "Critical" },
];

export default function InventoryPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Inventory</h1>
          <p className="text-secondary-500">Track materials, instruments, implants, and consumables.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Add Item</Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Items" value="847" icon={Package} variant="primary" />
        <StatsCard title="Low Stock Items" value="2" icon={AlertTriangle} variant="warning" />
        <StatsCard title="Critical Items" value="2" icon={AlertTriangle} variant="danger" />
        <StatsCard title="Expiring Soon" value="3" icon={Package} variant="default" />
      </div>

      <div className="mb-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
          <input type="text" placeholder="Search inventory..." className="w-full rounded-lg border border-secondary-300 py-2.5 pl-10 pr-4 text-sm" />
        </div>
      </div>

      <div className="rounded-xl border border-secondary-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-secondary-200">
              {["Item", "Category", "Quantity", "Min Level", "Expiry", "Status", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase text-secondary-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                <td className="px-4 py-3 text-sm font-medium text-secondary-900">{item.name}</td>
                <td className="px-4 py-3">
                  <Badge variant={
                    item.category === "Material" ? "default" :
                    item.category === "Implant" ? "info" :
                    item.category === "Medicine" ? "warning" : "purple"
                  } size="sm">{item.category}</Badge>
                </td>
                <td className="px-4 py-3 text-sm text-secondary-700">{item.quantity} {item.unit}</td>
                <td className="px-4 py-3 text-sm text-secondary-700">{item.min}</td>
                <td className="px-4 py-3 text-sm text-secondary-700">{item.expiry}</td>
                <td className="px-4 py-3">
                  <Badge variant={
                    item.status === "OK" ? "success" :
                    item.status === "Low" ? "warning" : "danger"
                  }>{item.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <button className="text-sm text-primary-600 hover:underline">Reorder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
