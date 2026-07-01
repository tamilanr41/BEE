"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { TextArea } from "@/components/ui/TextArea";
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { value: "checkup", label: "General Check-up & Cleaning" },
  { value: "whitening", label: "Teeth Whitening" },
  { value: "implant", label: "Dental Implants" },
  { value: "orthodontics", label: "Orthodontics (Braces/Aligners)" },
  { value: "root-canal", label: "Root Canal Treatment" },
  { value: "cosmetic", label: "Cosmetic Dentistry" },
  { value: "pediatric", label: "Pediatric Dentistry" },
  { value: "gum-treatment", label: "Gum Treatment" },
  { value: "extraction", label: "Wisdom Tooth Extraction" },
  { value: "crown-bridge", label: "Crowns & Bridges" },
  { value: "veneers", label: "Veneers" },
  { value: "dentures", label: "Dentures" },
  { value: "smile-makeover", label: "Smile Makeover" },
  { value: "emergency", label: "Emergency Visit" },
  { value: "consultation", label: "Free Consultation" },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

const dentists = [
  { value: "sarah-johnson", label: "Dr. Sarah Johnson" },
  { value: "michael-chen", label: "Dr. Michael Chen" },
  { value: "emily-rodriguez", label: "Dr. Emily Rodriguez" },
  { value: "james-williams", label: "Dr. James Williams" },
  { value: "lisa-park", label: "Dr. Lisa Park" },
  { value: "robert-kim", label: "Dr. Robert Kim" },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));

  const today = new Date();

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-slate-50/50">
        {/* Premium Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-16 text-center text-white">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary-400/5 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-300 backdrop-blur-md mb-4">
              ✨ Smart Scheduling
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl leading-tight">
              Book Your Appointment
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/70">
              Choose your preferred service, date, and time. Powered by our clinical scheduling engine.
            </p>
          </div>
        </section>

        <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Steps indicator */}
          <div className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-1 sm:gap-2">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium shrink-0",
                  step >= s ? "bg-primary-600 text-white" : "bg-secondary-200 text-secondary-500"
                )}>
                  {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                <span className={cn("text-sm hidden md:inline", step >= s ? "font-medium text-primary-700" : "text-secondary-500")}>
                  {["Service", "Date & Time", "Your Info", "Confirm"][s - 1]}
                </span>
                {s < 4 && <div className={cn("h-0.5 w-4 sm:w-8 shrink-0", step > s ? "bg-primary-600" : "bg-secondary-200")} />}
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-secondary-200 bg-white p-6 md:p-8">
            {/* Step 1: Service */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="mb-6 text-xl font-semibold text-secondary-900">Select a Service</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => setStep(2)}
                      className="rounded-lg border border-secondary-200 p-3 text-left text-sm font-medium text-secondary-700 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="mb-6 text-xl font-semibold text-secondary-900">Choose Date & Time</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Calendar */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <button onClick={prevMonth} className="rounded-lg p-1 hover:bg-secondary-100">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <span className="font-medium">
                        {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
                      </span>
                      <button onClick={nextMonth} className="rounded-lg p-1 hover:bg-secondary-100">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <div key={d} className="py-1 text-xs font-medium text-secondary-500">{d}</div>
                      ))}
                      {Array.from({ length: firstDayOfMonth }, (_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }, (_, i) => {
                        const day = i + 1;
                        const isPast = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day) < today;
                        return (
                          <button
                            key={day}
                            disabled={isPast}
                            onClick={() => setSelectedDate(day)}
                            className={cn(
                              "rounded-lg py-2 text-sm transition-colors",
                              selectedDate === day
                                ? "bg-primary-600 text-white"
                                : isPast
                                  ? "text-secondary-300 cursor-not-allowed"
                                  : "hover:bg-primary-50 hover:text-primary-700"
                            )}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div>
                    <p className="mb-3 text-sm font-medium text-secondary-700">Available Times</p>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "rounded-lg border py-2 text-sm transition-colors",
                            selectedTime === time
                              ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                              : "border-secondary-200 hover:border-primary-300 hover:bg-primary-50"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Select
                        label="Preferred Dentist (Optional)"
                        placeholder="Any available dentist"
                        options={dentists}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Info */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="mb-6 text-xl font-semibold text-secondary-900">Your Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="First Name" required placeholder="John" />
                  <Input label="Last Name" required placeholder="Doe" />
                  <Input label="Email" type="email" required placeholder="john@example.com" />
                  <Input label="Phone" type="tel" required placeholder="(123) 456-7890" />
                  <div className="sm:col-span-2">
                    <Input label="Date of Birth" type="date" />
                  </div>
                  <div className="sm:col-span-2">
                    <Select
                      label="How did you hear about us?"
                      placeholder="Select one"
                      options={[
                        { value: "google", label: "Google Search" },
                        { value: "social", label: "Social Media" },
                        { value: "referral", label: "Friend/Family" },
                        { value: "yelp", label: "Yelp/Reviews" },
                        { value: "walk-in", label: "Walk-in" },
                        { value: "other", label: "Other" },
                      ]}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <TextArea label="Notes (Optional)" placeholder="Any special concerns or requests..." />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div className="animate-fade-in text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-secondary-900">Appointment Confirmed!</h2>
                <p className="mb-6 text-secondary-600">
                  Your appointment has been booked successfully. You will receive a confirmation via email and SMS.
                </p>
                <div className="mx-auto max-w-sm space-y-3 rounded-lg bg-secondary-50 p-4 text-left text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-500">Service</span>
                    <span className="font-medium">General Check-up</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-500">Date</span>
                    <span className="font-medium">
                      {selectedDate ? `${currentMonth.toLocaleString("default", { month: "long" })} ${selectedDate}, ${currentMonth.getFullYear()}` : "Selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-500">Time</span>
                    <span className="font-medium">{selectedTime || "9:00 AM"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-500">Patient</span>
                    <span className="font-medium">John Doe</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step < 4 && (
              <div className="mt-8 flex justify-between border-t border-secondary-200 pt-6">
                {step > 1 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                <Button onClick={() => setStep(step + 1)}>
                  {step === 3 ? "Confirm Booking" : "Continue"}
                </Button>
              </div>
            )}
            {step === 4 && (
              <div className="mt-6">
                <Button fullWidth onClick={() => setStep(1)}>Book Another Appointment</Button>
              </div>
            )}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
