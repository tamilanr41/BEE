import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { symptoms, painSeverity, hasSwelling, hasInjury, medicalConditions } = await req.json();

    // Simulate AI triage logic
    let urgency: "LOW" | "MEDIUM" | "HIGH" | "EMERGENCY" = "LOW";
    let recommendedTiming = "Routine appointment within 2 weeks";

    if (painSeverity >= 8 || hasSwelling || hasInjury) {
      urgency = "HIGH";
      recommendedTiming = "Same-day appointment within 4 hours";
    } else if (painSeverity >= 5) {
      urgency = "MEDIUM";
      recommendedTiming = "Appointment within 24-48 hours";
    }

    if (hasSwelling && painSeverity >= 7) {
      urgency = "EMERGENCY";
      recommendedTiming = "Immediate care - contact clinic now";
    }

    return NextResponse.json({
      urgency,
      suggestedAction: urgency === "EMERGENCY" || urgency === "HIGH"
        ? "Contact clinic immediately for priority scheduling"
        : "Book a regular consultation",
      recommendedTiming,
      notes: `Patient reports pain level ${painSeverity}/10${hasSwelling ? " with swelling" : ""}${hasInjury ? " due to injury" : ""}`,
      disclaimer: "This is an AI-assisted triage and not a medical diagnosis.",
    });
  } catch (error) {
    return NextResponse.json({ error: "Triage service error" }, { status: 500 });
  }
}
