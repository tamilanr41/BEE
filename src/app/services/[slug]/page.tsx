import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import { ServiceTemplate } from "@/components/services/ServiceTemplate";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const data = servicesData[params.slug];
  if (!data) notFound();

  return (
    <ServiceTemplate
      title={data.title}
      description={data.description}
      overview={data.overview}
      benefits={data.benefits}
      procedureSteps={data.procedureSteps}
      estimatedDuration={data.estimatedDuration}
      recoveryGuidance={data.recoveryGuidance}
      faqs={data.faqs}
      priceRange={data.priceRange}
    />
  );
}
