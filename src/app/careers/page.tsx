import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CAREERS_QUERY } from "@/sanity/lib/queries";
import { CareersContent } from "./careers-content";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the team building the operating system for oilfield services. View open positions at OpsFlo.",
  path: "/careers",
});

const STATIC_OPENINGS = [
  { title: "Senior Full-Stack Engineer", location: "Remote (India)", department: "Engineering" },
  { title: "Product Manager - Field Ops", location: "Remote (India)", department: "Product" },
  { title: "Customer Success Manager", location: "Remote (India)", department: "Customer Success" },
  { title: "Solutions Engineer", location: "Remote (India)", department: "Sales" },
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
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageBanner title="Careers" />
      <CareersContent openings={openings} />
      <SiteFooter />
    </div>
  );
}