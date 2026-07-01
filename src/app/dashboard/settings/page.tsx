"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { Save, Shield, Bell, Palette, Link } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Settings</h1>
        <p className="text-secondary-500">Manage clinic settings, permissions, and preferences.</p>
      </div>

      <Tabs
        tabs={[
          { id: "general", label: "General", icon: <Palette className="h-4 w-4" /> },
          { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
          { id: "security", label: "Security", icon: <Shield className="h-4 w-4" /> },
          { id: "integrations", label: "Integrations", icon: <Link className="h-4 w-4" /> },
        ]}
      >
        {(activeTab) => (
          <Card>
            {activeTab === "general" && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-secondary-900">Clinic Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Clinic Name" defaultValue="SmileCare Dental" />
                  <Input label="Phone" defaultValue="(123) 456-7890" />
                  <div className="sm:col-span-2">
                    <Input label="Address" defaultValue="123 Dental Street, Suite 100, New York, NY 10001" />
                  </div>
                  <Input label="Email" defaultValue="info@smilecaredental.com" />
                  <Select label="Timezone" value="America/New_York" options={[{ value: "America/New_York", label: "Eastern Time" }, { value: "America/Chicago", label: "Central Time" }, { value: "America/Denver", label: "Mountain Time" }, { value: "America/Los_Angeles", label: "Pacific Time" }]} />
                </div>
                <Button><Save className="h-4 w-4" /> Save Changes</Button>
              </div>
            )}
            {activeTab === "notifications" && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-secondary-900">Notification Preferences</h2>
                {["Appointment Reminders", "Follow-up Alerts", "Billing Notifications", "Patient Review Requests", "Low Stock Alerts", "Staff Schedule Changes"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-lg border border-secondary-100 p-3">
                    <span className="text-sm text-secondary-700">{item}</span>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="h-6 w-11 rounded-full bg-secondary-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-primary-600 peer-checked:after:translate-x-full" />
                    </label>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "security" && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-secondary-900">Security Settings</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border border-secondary-100 p-3">
                    <div><p className="font-medium text-secondary-900">Two-Factor Authentication</p><p className="text-sm text-secondary-500">Add an extra layer of security</p></div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-secondary-100 p-3">
                    <div><p className="font-medium text-secondary-900">Password</p><p className="text-sm text-secondary-500">Last changed 3 months ago</p></div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-secondary-100 p-3">
                    <div><p className="font-medium text-secondary-900">Audit Logs</p><p className="text-sm text-secondary-500">Track all user activities</p></div>
                    <Button variant="outline" size="sm">View Logs</Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-secondary-100 p-3">
                    <div><p className="font-medium text-secondary-900">Data Retention</p><p className="text-sm text-secondary-500">Auto-delete records after 7 years</p></div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "integrations" && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-secondary-900">Integrations</h2>
                {[
                  { name: "Google Business Profile", desc: "Sync reviews and manage listings", status: "Connected" },
                  { name: "Stripe Payments", desc: "Online payment processing", status: "Connected" },
                  { name: "Twilio SMS/WhatsApp", desc: "Automated patient messaging", status: "Connected" },
                  { name: "LiveKit Video", desc: "Tele-dentistry consultations", status: "Not Connected" },
                  { name: "OpenAI", desc: "AI-powered dental assistant", status: "Connected" },
                  { name: "Zocdoc", desc: "Patient booking platform", status: "Not Connected" },
                ].map((int) => (
                  <div key={int.name} className="flex items-center justify-between rounded-lg border border-secondary-100 p-3">
                    <div>
                      <p className="font-medium text-secondary-900">{int.name}</p>
                      <p className="text-sm text-secondary-500">{int.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${int.status === "Connected" ? "bg-green-500" : "bg-secondary-300"}`} />
                      <span className="text-sm text-secondary-500">{int.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}
      </Tabs>
    </DashboardLayout>
  );
}
