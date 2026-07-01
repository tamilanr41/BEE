import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";

const services = [
  { label: "General Dentistry", href: "/services/general-dentistry" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Orthodontics", href: "/services/orthodontics" },
  { label: "Root Canal Treatment", href: "/services/root-canal" },
  { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
  { label: "Emergency Dentistry", href: "/emergency" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Dentists", href: "/dentists" },
  { label: "AI Platform", href: "/ai-features" },
  { label: "Patient Portal", href: "/patient-portal" },
  { label: "Patient Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book Appointment", href: "/booking" },
  { label: "FAQ", href: "/faq" },
];

const socials = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-lg font-bold text-white shadow-md">
                S
              </div>
              <span className="text-xl font-bold font-display text-white">SmileCare Dental</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Experience the future of dentistry with AI-powered precision care. 
              Our state-of-the-art clinic combines advanced technology with compassionate treatment.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/40 transition-all hover:border-primary/30 hover:text-primary hover:bg-white/10"
                  aria-label={s.name}
                >
                  <span className="text-xs font-bold">{s.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm transition-colors hover:text-primary">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">
                  123 Smile Avenue, Suite 200<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+1234567890" className="text-sm transition-colors hover:text-primary">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@smilecaredental.com" className="text-sm transition-colors hover:text-primary">
                  info@smilecaredental.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm">
                  <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
                  <p>Sunday: Emergency only</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/5 p-3">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-xs text-white/60">AI-powered platform — secure & HIPAA compliant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} SmileCare Dental. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-primary">Terms of Service</Link>
            <Link href="/accessibility" className="transition-colors hover:text-primary">Accessibility</Link>
            <Link href="/hipaa" className="transition-colors hover:text-primary">HIPAA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
