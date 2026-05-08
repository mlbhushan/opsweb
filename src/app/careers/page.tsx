import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CTARow } from "@/components/ui/cta-row";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CAREERS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the team building the operating system for oilfield services. View open positions at OpsFlo.",
  path: "/careers",
});

const PERKS = [
  { title: "Remote-First", desc: "Work from anywhere in North America." },
  { title: "Competitive Equity", desc: "Meaningful stock options for every team member." },
  { title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage." },
  { title: "Learning Budget", desc: "$2,000/year for conferences, courses, and books." },
  { title: "Flexible PTO", desc: "Take the time you need to recharge." },
  { title: "Field Exposure", desc: "Visit customer sites and see your software in action." },
];

const STATIC_OPENINGS = [
  { title: "Senior Full-Stack Engineer", location: "Remote (US/Canada)", department: "Engineering" },
  { title: "Product Manager - Field Ops", location: "Calgary, AB / Remote", department: "Product" },
  { title: "Customer Success Manager", location: "Houston, TX", department: "Customer Success" },
  { title: "Solutions Engineer", location: "Remote (US/Canada)", department: "Sales" },
];

type SanityCareer = {
  _id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
};

export default async function CareersPage() {
  const sanityCareers = await sanityFetch<SanityCareer[]>({
    query: CAREERS_QUERY,
    tags: ["careerOpening"],
  });

  const openings = sanityCareers.length > 0
    ? sanityCareers.map((c) => ({ title: c.title, location: c.location, department: c.department }))
    : STATIC_OPENINGS;

  return (
    <>
      <SiteHeader />
      <PageBanner title="Careers" />
      <main className="flex-1">
        <section className="section gradient-mesh-hero text-center">
          <Container>
            <p className="eyebrow mb-4">Careers</p>
            <h1 className="heading-xl mx-auto max-w-3xl">Build the OS for Oilfield Services</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
              We are solving the hardest operational problems in the energy sector. Come build software that moves iron and closes tickets.
            </p>
          </Container>
        </section>

        <section className="section">
          <Container className="max-w-5xl">
            <h2 className="heading-md mb-10 text-center">Why OpsFlo?</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PERKS.map((p) => (
                <div key={p.title} className="surface-card">
                  <h3 className="text-base font-semibold text-[var(--color-navy-900)]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section bg-[var(--color-bg-secondary)]">
          <Container className="max-w-3xl">
            <h2 className="heading-md mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job) => (
                <Link key={job.title} href="/contact" className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                      <Briefcase className="h-3.5 w-3.5" />{job.department}
                    </div>
                    <h3 className="mt-1 font-semibold text-[var(--color-navy-900)]">{job.title}</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                      <MapPin className="h-3.5 w-3.5" />{job.location}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[var(--color-navy-900)]" />
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="section text-center">
          <Container>
            <h2 className="heading-md">Don&apos;t See Your Role?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-muted)]">
              We are always looking for exceptional people. Send us your resume and tell us how you would make OpsFlo better.
            </p>
            <CTARow primary={{ label: "Send Your Resume", href: "/contact" }} secondary={{ label: "About OpsFlo", href: "/about" }} className="mt-8 justify-center" />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}