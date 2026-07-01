"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { FileText, Eye, Download, Upload, Pill, FileImage } from "lucide-react";
import Link from "next/link";

const records = [
  { id: 1, name: "Dental X-rays - Full Series", date: "Jun 15, 2026", type: "X-Ray", size: "2.4 MB" },
  { id: 2, name: "Treatment Plan - Implant", date: "May 20, 2026", type: "Treatment Plan", size: "1.1 MB" },
  { id: 3, name: "Lab Report - Crown Fabrication", date: "May 10, 2026", type: "Lab Report", size: "0.8 MB" },
  { id: 4, name: "Prescription - Amoxicillin", date: "Apr 22, 2026", type: "Prescription", size: "0.3 MB" },
  { id: 5, name: "Invoice - Teeth Whitening", date: "Mar 22, 2026", type: "Invoice", size: "0.5 MB" },
  { id: 6, name: "Intraoral Photos - Before Treatment", date: "Mar 15, 2026", type: "Photo", size: "4.2 MB" },
];

export default function PatientRecordsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-secondary-50 min-h-screen pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">My Records</h1>
              <p className="text-secondary-500">Access your X-rays, reports, prescriptions, and more.</p>
            </div>
            <Button variant="outline"><Upload className="h-4 w-4" /> Upload Records</Button>
          </div>

          <div className="grid gap-4">
            {records.map((record) => (
              <div key={record.id} className="flex items-center justify-between rounded-xl border border-secondary-200 bg-white p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    {record.type === "X-Ray" || record.type === "Photo" ? <FileImage className="h-5 w-5" /> :
                     record.type === "Prescription" ? <Pill className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">{record.name}</p>
                    <p className="text-sm text-secondary-500">{record.date} &bull; {record.type} &bull; {record.size}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-lg border border-secondary-200 p-2 text-secondary-500 hover:bg-secondary-50"><Eye className="h-4 w-4" /></button>
                  <button className="rounded-lg border border-secondary-200 p-2 text-secondary-500 hover:bg-secondary-50"><Download className="h-4 w-4" /></button>
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
