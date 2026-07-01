"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MapPin, Clock, Car, Train, Phone } from "lucide-react";

export function LocationSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-3.5 w-3.5" /> Visit Us
              </span>
              <h2 className="mt-6 font-display text-display-2 text-foreground">
                Conveniently Located in the Heart of the City
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Easy access with ample parking, close to public transit, and 
                wheelchair-accessible entrances.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">123 Smile Avenue, Suite 200<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-50">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">Mon–Sat: 9:00 AM – 6:00 PM<br />Sun: Emergency only</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Car className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Parking</p>
                    <p className="text-sm text-muted-foreground">Free valet parking available · 2-min walk from Grand Central</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Train className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Public Transit</p>
                    <p className="text-sm text-muted-foreground">Steps from Grand Central Station (4/5/6, S, 7 trains)</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-lg font-display font-semibold text-foreground">SmileCare Dental</p>
                  <p className="text-sm text-muted-foreground">123 Smile Avenue, New York, NY 10001</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Open in Google Maps <MapPin className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
