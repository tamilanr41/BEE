"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FileText, Download, Eye, Upload, FileImage, FileSpreadsheet } from "lucide-react";

const documents = [
  { id: 1, name: "Patient X-ray - Jessica Martinez", type: "X-Ray", date: "Jul 12, 2026", size: "2.4 MB", status: "Final" },
  { id: 2, name: "Treatment Plan - Robert Kim", type: "Document", date: "Jul 10, 2026", size: "1.1 MB", status: "Draft" },
  { id: 3, name: "Lab Report - Crown Fabrication", type: "Lab Report", date: "Jul 8, 2026", size: "0.8 MB", status: "Final" },
  { id: 4, name: "Referral Letter - David Thompson", type: "Referral", date: "Jul 5, 2026", size: "0.3 MB", status: "Final" },
  { id: 5, name: "CBCT Scan - Full Mouth", type: "CBCT", date: "Jun 28, 2026", size: "45.2 MB", status: "Final" },
  { id: 6, name: "Insurance Claim Form", type: "Form", date: "Jun 25, 2026", size: "0.5 MB", status: "Pending" },
];

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Document Management</h1>
          <p className="text-secondary-500">Store and manage X-rays, photos, treatment plans, and lab reports.</p>
        </div>
        <Button><Upload className="h-4 w-4" /> Upload Document</Button>
      </div>

      <div className="rounded-xl border border-secondary-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-secondary-200">
              {["Name", "Type", "Date", "Size", "Status", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase text-secondary-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      {doc.type === "X-Ray" || doc.type === "CBCT" ? <FileImage className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                    </div>
                    <span className="font-medium text-secondary-900">{doc.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={doc.type === "X-Ray" || doc.type === "CBCT" ? "info" : doc.type === "Lab Report" ? "purple" : "default"} size="sm">{doc.type}</Badge>
                </td>
                <td className="px-4 py-3 text-sm text-secondary-700">{doc.date}</td>
                <td className="px-4 py-3 text-sm text-secondary-700">{doc.size}</td>
                <td className="px-4 py-3">
                  <Badge variant={doc.status === "Final" ? "success" : doc.status === "Draft" ? "warning" : "default"} size="sm">{doc.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="rounded-lg border border-secondary-200 p-1.5 text-secondary-400 hover:bg-secondary-50"><Eye className="h-3.5 w-3.5" /></button>
                    <button className="rounded-lg border border-secondary-200 p-1.5 text-secondary-400 hover:bg-secondary-50"><Download className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
