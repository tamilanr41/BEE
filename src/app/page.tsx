export const dynamic = "force-dynamic";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { LivePlatformPreview } from "@/components/home/LivePlatformPreview";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { DentistProfiles } from "@/components/home/DentistProfiles";
import { PatientJourney } from "@/components/home/PatientJourney";
import { AiWorkspace } from "@/components/home/AiWorkspace";
import { AnalyticsPreview } from "@/components/home/AnalyticsPreview";
import { PatientReviews } from "@/components/home/PatientReviews";
import { Gallery } from "@/components/home/Gallery";
import { InsuranceSection } from "@/components/home/InsuranceSection";
import { LocationSection } from "@/components/home/LocationSection";
import { CTASection } from "@/components/home/CTASection";
import { LiveChat } from "@/components/home/LiveChat";
import { BackgroundFX, SectionDivider } from "@/components/home/BackgroundFX";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative">
          <Hero />
        </section>
        <section className="relative">
          <BackgroundFX sectionIndex={0} />
          <TrustBar />
        </section>
        <section className="relative">
          <LivePlatformPreview />
        </section>
        <SectionDivider />
        <section className="relative">
          <BackgroundFX sectionIndex={1} />
          <ServicesOverview />
        </section>
        <section className="relative">
          <BackgroundFX sectionIndex={2} />
          <DentistProfiles />
        </section>
        <section className="relative">
          <BackgroundFX sectionIndex={3} />
          <PatientJourney />
        </section>
        <section className="relative">
          <AiWorkspace />
        </section>
        <section className="relative">
          <BackgroundFX sectionIndex={4} />
          <AnalyticsPreview />
        </section>
        <section className="relative">
          <PatientReviews />
        </section>
        <section className="relative">
          <Gallery />
        </section>
        <section className="relative">
          <InsuranceSection />
        </section>
        <section className="relative">
          <LocationSection />
        </section>
        <section className="relative">
          <CTASection />
        </section>
      </main>
      <Footer />
      <LiveChat />
    </>
  );
}
