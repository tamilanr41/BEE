"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Users,
  ClipboardList,
  DollarSign,
  Package,
  UserCog,
  BarChart3,
  Bot,
  FileText,
  Megaphone,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
} from "lucide-react";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard", icon: Home },
  { label: "Appointments", href: "/dashboard/appointments", icon: Calendar },
  { label: "Patients", href: "/dashboard/patients", icon: Users },
  { label: "Treatments", href: "/dashboard/treatments", icon: ClipboardList },
  { label: "Billing", href: "/dashboard/billing", icon: DollarSign },
  { label: "Inventory", href: "/dashboard/inventory", icon: Package },
  { label: "Staff", href: "/dashboard/staff", icon: UserCog },
  { label: "AI Assistant", href: "/dashboard/ai-assistant", icon: Bot },
  { label: "Documents", href: "/dashboard/documents", icon: FileText },
  { label: "Marketing", href: "/dashboard/marketing", icon: Megaphone },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex h-screen overflow-hidden bg-secondary-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-secondary-200 bg-white transition-all duration-300 lg:static",
          collapsed ? "w-20" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className={cn("flex items-center border-b border-secondary-200 px-4", collapsed ? "justify-center py-4" : "justify-between py-3")}>
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
              S
            </div>
            {!collapsed && (
              <span className="text-lg font-bold text-secondary-900">SmileCare</span>
            )}
          </Link>
          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="rounded-lg p-1.5 text-secondary-400 hover:bg-secondary-100 hidden lg:block"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
          {collapsed && (
            <button
              onClick={() => setCollapsed(false)}
              className="rounded-lg p-1.5 text-secondary-400 hover:bg-secondary-100 hidden lg:block mt-4"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      collapsed && "justify-center px-2",
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900"
                    )}
                    title={collapsed ? link.label : undefined}
                  >
                    <link.icon className="h-5 w-5 shrink-0" />
                    {!collapsed && <span>{link.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User */}
        <div className={cn("border-t border-secondary-200 p-3", collapsed && "text-center")}>
          <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
              {session?.user?.name?.charAt(0) || "U"}
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-secondary-900 truncate">
                  {session?.user?.name}
                </p>
                <p className="text-xs text-secondary-500 truncate">
                  {session?.user?.role}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() => signOut()}
            className={cn(
              "mt-2 flex items-center gap-2 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors w-full",
              collapsed ? "justify-center p-2" : "px-3 py-2"
            )}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && "Sign Out"}
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-secondary-200 bg-white px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-1.5 text-secondary-600 hover:bg-secondary-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
              <input
                type="text"
                placeholder="Search patients, appointments..."
                className="w-80 rounded-lg border border-secondary-300 bg-secondary-50 py-2 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 text-secondary-600 hover:bg-secondary-100">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-secondary-600 hover:bg-secondary-100"
            >
              <Home className="h-4 w-4" /> Website
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
