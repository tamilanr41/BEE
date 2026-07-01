"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Plus, UserCog } from "lucide-react";

const staffMembers = [
  { id: 1, name: "Dr. Sarah Johnson", role: "Cosmetic Dentist", department: "Clinical", status: "Active", todayPatients: 8, rating: 4.9 },
  { id: 2, name: "Dr. Michael Chen", role: "Implant Specialist", department: "Clinical", status: "Active", todayPatients: 6, rating: 4.8 },
  { id: 3, name: "Dr. Emily Rodriguez", role: "Orthodontist", department: "Clinical", status: "On Leave", todayPatients: 0, rating: 4.9 },
  { id: 4, name: "Dr. James Williams", role: "Periodontist", department: "Clinical", status: "Active", todayPatients: 7, rating: 4.7 },
  { id: 5, name: "Lisa Anderson", role: "Dental Hygienist", department: "Hygiene", status: "Active", todayPatients: 5, rating: 4.8 },
  { id: 6, name: "Maria Garcia", role: "Receptionist", department: "Front Desk", status: "Active", todayPatients: 0, rating: 4.6 },
];

export default function StaffPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Staff Management</h1>
          <p className="text-secondary-500">Manage dentist schedules, roles, and performance.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Add Staff</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="rounded-xl border border-secondary-200 bg-white p-5 transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar firstName={staff.name.split(" ")[1]} lastName={staff.name.split(" ")[2] || ""} />
                <div>
                  <h3 className="font-semibold text-secondary-900">{staff.name}</h3>
                  <p className="text-sm text-primary-600">{staff.role}</p>
                </div>
              </div>
              <Badge variant={staff.status === "Active" ? "success" : "warning"}>{staff.status}</Badge>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-secondary-500">Department</span>
                <p className="font-medium text-secondary-700">{staff.department}</p>
              </div>
              <div>
                <span className="text-secondary-500">Today&apos;s Patients</span>
                <p className="font-medium text-secondary-700">{staff.todayPatients}</p>
              </div>
              <div>
                <span className="text-secondary-500">Rating</span>
                <p className="font-medium text-secondary-700">{staff.rating}/5.0</p>
              </div>
              <div>
                <span className="text-secondary-500">Schedule</span>
                <p className="font-medium text-secondary-700">View</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
