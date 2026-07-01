"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Clock,
  ChevronDown,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Services",
    href: "#",
    children: [
      { label: "General Dentistry", href: "/services/general-dentistry" },
      { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      { label: "Teeth Whitening", href: "/services/teeth-whitening" },
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "Orthodontics", href: "/services/orthodontics" },
      { label: "Root Canal", href: "/services/root-canal" },
      { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
      { label: "Gum Treatment", href: "/services/gum-treatment" },
      { label: "Wisdom Tooth Extraction", href: "/services/wisdom-tooth" },
      { label: "Crowns & Bridges", href: "/services/crowns-bridges" },
      { label: "Veneers", href: "/services/veneers" },
      { label: "Dentures", href: "/services/dentures" },
      { label: "Smile Makeovers", href: "/services/smile-makeovers" },
    ],
  },
  { label: "AI Platform", href: "/ai-features" },
  { label: "Our Dentists", href: "/dentists" },
  { label: "Patient Portal", href: "/patient-portal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-black/20 backdrop-blur-sm"
        )}
      >
      {/* Top bar */}
      {!scrolled && (
        <div className="hidden bg-primary/90 backdrop-blur-sm text-white lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
            <div className="flex items-center gap-4">
              <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Phone className="h-3 w-3" /> (123) 456-7890
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <MessageCircle className="h-3 w-3" /> WhatsApp
              </a>
              <span className="flex items-center gap-1.5 text-white/70">
                <Clock className="h-3 w-3" /> Mon-Sat: 9:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/ai-features" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                <Sparkles className="h-3 w-3" /> AI Platform
              </Link>
              {session?.user ? (
                <Link href="/dashboard" className="hover:text-white/80 transition-colors">
                  Dashboard
                </Link>
              ) : (
                <Link href="/auth/login" className="hover:text-white/80 transition-colors">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main nav */}
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300",
          scrolled ? "py-2" : "py-3"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-lg font-bold text-white shadow-md transition-transform group-hover:scale-105">
            S
          </div>
          <div>
            <span className={cn("text-lg font-bold font-display transition-colors", scrolled ? "text-foreground" : "text-white")}>SmileCare</span>
            <span className="text-lg font-bold font-display text-primary"> Dental</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  scrolled ? "text-foreground/80" : "text-white/80"
                )}>
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 pt-2 w-56"
                    >
                      <div className="rounded-xl border border-border bg-white p-1.5 shadow-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-primary-50 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  scrolled ? "text-foreground/80" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/booking">
            <Button size="sm" className="shadow-md shadow-primary/20">
              Book in 60s
            </Button>
          </Link>
          <Link href="/emergency">
            <Button variant="outline" size="sm" className={cn(
              "border transition-all",
              scrolled ? "border-accent text-accent hover:bg-accent hover:text-white" : "border-white/30 text-white hover:bg-white hover:text-primary"
            )}>
              Emergency
            </Button>
          </Link>
          {session?.user && (
            <div className="relative group">
              <button className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-muted transition-colors">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-xs font-medium text-primary">
                  {session.user.name?.charAt(0) || "U"}
                </div>
              </button>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-full z-50 mt-1 w-48 rounded-xl border border-border bg-white p-1.5 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
              >
                <div className="px-3 py-2 text-sm font-medium border-b border-border mb-1">
                  {session.user.name}
                </div>
                <Link href="/dashboard" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-primary-50 hover:text-primary transition-colors">
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </Link>
                <Link href="/dashboard/settings" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-primary-50 hover:text-primary transition-colors">
                  <Settings className="h-4 w-4" /> Settings
                </Link>
                <button onClick={() => signOut()} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-destructive/5 transition-colors">
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </motion.div>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "rounded-lg p-2 transition-colors lg:hidden",
            scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
          )}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-white overflow-hidden lg:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-6 py-2 text-sm text-foreground/70 hover:bg-primary-50 hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-50 hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="border-t border-border pt-3 mt-3 space-y-2">
                <Link href="/booking" onClick={() => setMobileOpen(false)}>
                  <Button fullWidth className="shadow-md">Book in 60s</Button>
                </Link>
                <Link href="/emergency" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" fullWidth className="border-accent text-accent">
                    Emergency Visit
                  </Button>
                </Link>
                <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" /> (123) 456-7890
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
