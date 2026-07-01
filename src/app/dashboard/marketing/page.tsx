"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/ui/StatsCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Megaphone, TrendingUp, Users, Star, Eye, Plus } from "lucide-react";

const campaigns = [
  { id: 1, name: "Summer Smile Special", type: "Promotional", status: "Active", reach: 12500, conversions: 48, roi: "320%" },
  { id: 2, name: "New Patient Welcome", type: "Email", status: "Active", reach: 3200, conversions: 28, roi: "180%" },
  { id: 3, name: "Referral Program Q3", type: "Referral", status: "Scheduled", reach: 0, conversions: 0, roi: "-" },
  { id: 4, name: "Teeth Whitening Blast", type: "Social Media", status: "Draft", reach: 0, conversions: 0, roi: "-" },
];

export default function MarketingPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Marketing</h1>
          <p className="text-secondary-500">SEO, campaigns, patient testimonials, and more.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> New Campaign</Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Website Traffic" value="12,450" icon={Eye} trend={{ value: 18, isUp: true }} variant="primary" />
        <StatsCard title="New Leads" value="156" icon={Users} trend={{ value: 12, isUp: true }} variant="success" />
        <StatsCard title="Conversion Rate" value="4.8%" icon={TrendingUp} trend={{ value: 2, isUp: true }} variant="default" />
        <StatsCard title="Online Reviews" value="4.9" icon={Star} trend={{ value: 3, isUp: true }} variant="default" />
      </div>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-secondary-900">Active Campaigns</h2>
        <div className="space-y-4">
          {campaigns.map((camp) => (
            <div key={camp.id} className="flex items-center justify-between rounded-lg border border-secondary-100 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-secondary-900">{camp.name}</p>
                  <p className="text-sm text-secondary-500">{camp.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-secondary-500">Reach</p>
                  <p className="font-medium text-secondary-900">{camp.reach.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-secondary-500">Conversions</p>
                  <p className="font-medium text-secondary-900">{camp.conversions}</p>
                </div>
                {camp.roi !== "-" && (
                  <div className="text-right">
                    <p className="text-sm text-secondary-500">ROI</p>
                    <p className="font-medium text-green-700">{camp.roi}</p>
                  </div>
                )}
                <Badge variant={
                  camp.status === "Active" ? "success" :
                  camp.status === "Scheduled" ? "info" : "default"
                }>{camp.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
}
