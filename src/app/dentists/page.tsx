import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LiveChat } from "@/components/home/LiveChat";
import { Star, Award, Globe, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const dentists = [
  {
    name: "Dr. Sarah Johnson",
    title: "Lead Cosmetic Dentist",
    qualifications: ["DDS, University of Michigan", "AACD Accredited", "Laser Dentistry Certified"],
    experience: 15,
    specializations: ["Cosmetic Dentistry", "Smile Makeovers", "Veneers", "Teeth Whitening"],
    languages: ["English", "Spanish"],
    memberships: ["American Dental Association", "American Academy of Cosmetic Dentistry", "International Association for Orthodontics"],
    awards: ["Top Cosmetic Dentist 2024", "Patients' Choice Award 2023", "Best Smile Design NYC"],
    consultationAvailable: true,
    bio: "Dr. Sarah Johnson is a leading cosmetic dentist with over 15 years of experience in aesthetic dentistry. She combines artistic vision with AI-powered technology to create stunning, natural-looking smiles. Her gentle approach and attention to detail have earned her recognition as one of the top cosmetic dentists in the region.",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    title: "Implant & Restorative Specialist",
    qualifications: ["DDS, Columbia University", "Board Certified in Oral Surgery", "Implant Fellowship"],
    experience: 12,
    specializations: ["Dental Implants", "Bone Grafting", "Full Arch Reconstruction", "Oral Surgery"],
    languages: ["English", "Mandarin", "Cantonese"],
    memberships: ["American Academy of Implant Dentistry", "International Congress of Oral Implantologists", "American Dental Association"],
    awards: ["Top Implant Dentist 2024", "AAID Fellowship Award"],
    consultationAvailable: true,
    bio: "Dr. Michael Chen specializes in dental implantology and restorative dentistry. Using AI-guided 3D planning and computer-assisted surgery, he achieves exceptional precision in implant placement. His commitment to continuing education ensures his patients benefit from the latest advances in implant technology.",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Orthodontic Specialist",
    qualifications: ["DDS, NYU College of Dentistry", "Orthodontic Specialty Certificate", "Invisalign Platinum Provider"],
    experience: 10,
    specializations: ["Braces", "Invisalign", "Pediatric Orthodontics", "Early Intervention"],
    languages: ["English", "Portuguese", "Spanish"],
    memberships: ["American Association of Orthodontists", "American Dental Association", "World Federation of Orthodontists"],
    awards: ["Rising Star in Orthodontics", "Invisalign Top 1% Provider"],
    consultationAvailable: true,
    bio: "Dr. Emily Rodriguez is passionate about creating beautiful, healthy smiles through orthodontic treatment. She leverages AI-powered treatment planning to optimize tooth movement and reduce treatment time. Her warm, patient-centered approach makes her especially popular with teens and young adults.",
    rating: 4.9,
    reviews: 115,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. James Williams",
    title: "Periodontist & Implant Surgeon",
    qualifications: ["DDS, Harvard School of Dental Medicine", "Periodontics Specialty", "Implant Surgery Fellowship"],
    experience: 18,
    specializations: ["Gum Treatment", "Periodontal Surgery", "Dental Implants", "Bone Regeneration"],
    languages: ["English"],
    memberships: ["American Academy of Periodontology", "American Dental Association", "Academy of Osseointegration"],
    awards: ["AAP Outstanding Clinician Award", "Patients' Choice Lifetime Achievement"],
    consultationAvailable: true,
    bio: "Dr. James Williams brings 18 years of expertise in periodontics and implant surgery. His advanced training in regenerative techniques and AI-assisted diagnostics allows him to treat even the most complex gum and bone conditions. He is dedicated to preserving natural teeth through comprehensive periodontal care.",
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Lisa Park",
    title: "Pediatric Dentist",
    qualifications: ["DDS, UCLA School of Dentistry", "Pediatric Specialty Certificate", "Sedation Dentistry Certified"],
    experience: 8,
    specializations: ["Pediatric Dentistry", "Sedation Dentistry", "Early Orthodontics", "Special Needs Care"],
    languages: ["English", "Korean"],
    memberships: ["American Academy of Pediatric Dentistry", "American Dental Association", "Society of Pediatric Sedation Dentistry"],
    awards: ["Best Pediatric Dentist 2024", "Community Service Award"],
    consultationAvailable: true,
    bio: "Dr. Lisa Park creates a fun, welcoming environment where children feel safe and excited about dental care. She uses AI-powered educational tools to teach kids about oral health in engaging ways. Her gentle, patient approach has made her a favorite among children and parents alike.",
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Robert Kim",
    title: "Endodontist",
    qualifications: ["DDS, University of Pennsylvania", "Endodontic Specialty Certificate", "Microsurgery Certified"],
    experience: 14,
    specializations: ["Root Canal Treatment", "Endodontic Surgery", "Trauma Management", "Microscopic Dentistry"],
    languages: ["English", "Korean"],
    memberships: ["American Association of Endodontists", "American Dental Association", "International Association of Dental Traumatology"],
    awards: ["AAE Distinguished Service Award", "Clinical Excellence in Endodontics"],
    consultationAvailable: true,
    bio: "Dr. Robert Kim specializes in root canal treatment and endodontic surgery. Using AI-assisted diagnosis and dental operating microscopes, he achieves exceptional precision in treating even the most complex root canal cases. His goal is always to save natural teeth whenever possible.",
    rating: 4.8,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop",
  },
];

export default function DentistsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-slate-50/50">
        {/* Premium Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-16 text-center text-white md:py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary-400/5 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-300 backdrop-blur-md mb-4">
              ✨ Medical Board
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl leading-tight">
              Our Dentists
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Meet our team of board-certified specialists dedicated to providing exceptional,
              AI-powered dental care.
            </p>
          </div>
        </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8">
            {dentists.map((dentist) => (
              <div
                key={dentist.name}
                className="rounded-xl border border-secondary-200 bg-white p-6 transition-shadow hover:shadow-lg md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[200px_1fr] lg:gap-8">
                  <div className="text-center md:text-left">
                    <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full md:mx-0 border-2 border-primary-100 shadow-md">
                      <Image
                        src={dentist.image}
                        alt={dentist.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-1 md:justify-start">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{dentist.rating}</span>
                      <span className="text-xs text-secondary-500">({dentist.reviews} reviews)</span>
                    </div>
                    <Link href={`/booking?dentist=${encodeURIComponent(dentist.name)}`}>
                      <Button size="sm" fullWidth>
                        <Calendar className="h-4 w-4" /> Book
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-secondary-900">{dentist.name}</h2>
                    <p className="text-primary-600 font-medium">{dentist.title}</p>
                    <div className="my-2 flex flex-wrap gap-1.5">
                      {dentist.specializations.map((s) => (
                        <Badge key={s} variant="info" size="sm">{s}</Badge>
                      ))}
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-secondary-600">{dentist.bio}</p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary-500">
                          Qualifications
                        </h4>
                        <ul className="space-y-1">
                          {dentist.qualifications.map((q) => (
                            <li key={q} className="flex items-start gap-1.5 text-xs text-secondary-600">
                              <Award className="mt-0.5 h-3 w-3 shrink-0 text-primary-500" />
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary-500">
                          Languages
                        </h4>
                        <ul className="space-y-1">
                          {dentist.languages.map((l) => (
                            <li key={l} className="flex items-center gap-1.5 text-xs text-secondary-600">
                              <Globe className="h-3 w-3 text-primary-500" />
                              {l}
                            </li>
                          ))}
                        </ul>
                        <h4 className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-secondary-500">
                          Memberships
                        </h4>
                        <ul className="space-y-1">
                          {dentist.memberships.map((m) => (
                            <li key={m} className="text-xs text-secondary-600">{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {dentist.awards.length > 0 && (
                      <div className="mt-4 rounded-lg bg-primary-50 p-3">
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-700">
                          Awards & Recognition
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {dentist.awards.map((a) => (
                            <span key={a} className="inline-flex items-center gap-1 rounded-md bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                              <Award className="h-3 w-3" /> {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <LiveChat />
    </>
  );
}
