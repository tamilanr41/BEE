"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Users, Plus, Calendar } from "lucide-react";
import Link from "next/link";

const familyMembers = [
  { id: 1, name: "John Doe", relation: "Self", dob: "Jan 15, 1990", nextAppointment: "Jul 15, 2026", status: "Active" },
  { id: 2, name: "Sarah Doe", relation: "Spouse", dob: "Mar 22, 1992", nextAppointment: "Aug 10, 2026", status: "Active" },
  { id: 3, name: "Emma Doe", relation: "Daughter", dob: "Jun 5, 2018", nextAppointment: "Jul 20, 2026", status: "Active" },
  { id: 4, name: "Liam Doe", relation: "Son", dob: "Nov 12, 2020", nextAppointment: "Sep 5, 2026", status: "Active" },
];

export default function FamilyPage() {
  return (
    <>
      <Navbar />
      <section className="bg-secondary-50 min-h-screen pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">Family Members</h1>
              <p className="text-secondary-500">Manage dental care for your whole family.</p>
            </div>
            <Button><Plus className="h-4 w-4" /> Add Member</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {familyMembers.map((member) => (
              <div key={member.id} className="rounded-xl border border-secondary-200 bg-white p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar firstName={member.name.split(" ")[0]} lastName={member.name.split(" ")[1]} size="lg" />
                    <div>
                      <h3 className="font-semibold text-secondary-900">{member.name}</h3>
                      <p className="text-sm text-primary-600">{member.relation}</p>
                      <p className="text-xs text-secondary-500">DOB: {member.dob}</p>
                    </div>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary-50 p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span className="text-secondary-600">Next: {member.nextAppointment}</span>
                  </div>
                  <Link href="/booking">
                    <Button size="sm" variant="outline">Book</Button>
                  </Link>
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
