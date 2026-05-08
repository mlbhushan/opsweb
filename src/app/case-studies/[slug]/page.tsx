import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CTARow } from "@/components/ui/cta-row";
import { Stat } from "@/components/ui/stat";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CASE_STUDY_QUERY, CASE_STUDY_SLUGS_QUERY } from "@/sanity/lib/queries";
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/content/case-studies";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const sanityResult = await sanityFetch<{ slug: string }[]>({
    query: CASE_STUDY_SLUGS_QUERY,
    tags: ["caseStudy"],
  });
  if (sanityResult.length > 0) return sanityResult.map((p) => ({ slug: p.slug }));
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sanityCs = await sanityFetch<{ company: string; headline: string } | null>({
    query: CASE_STUDY_QUERY, params: { slug }, tags: ["caseStudy"],
  });
  if (sanityCs) return buildMetadata({ title: `${sanityCs.company} Case Study`, description: sanityCs.headline, path: `/case-studies/${slug}` });
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({ title: `${cs.company} Case Study`, description: cs.headline, path: `/case-studies/${slug}` });
}

type SanityCaseStudy = {
  _id: string; company: string; slug: string; industry: string; companySize: string;
  headline: string; image: string | null; metrics: { value: string; label: string }[];
  challenge: string; solution: string; results: string;
  quote: { text: string; author: string; role: string } | null;
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const sanityCs = await sanityFetch<SanityCaseStudy | null>({
    query: CASE_STUDY_QUERY, params: { slug }, tags: ["caseStudy"],
  });

  const cs = sanityCs
    ? {
        company: sanityCs.company, industry: sanityCs.industry, companySize: sanityCs.companySize || "",
        headline: sanityCs.headline, image: sanityCs.image || "/images/hero/placeholder.jpg",
        metrics: sanityCs.metrics || [], challenge: sanityCs.challenge, solution: sanityCs.solution,
        results: sanityCs.results, quote: sanityCs.quote,
      }
    : getCaseStudy(slug);

  if (!cs) notFound();

  return (
    <>
      <SiteHeader />
      <PageBanner title={cs.company} />
      <main className="flex-1">
        <section className="section gradient-mesh-navy text-center">
          <Container className="max-w-3xl">
            <Link href="/case-studies" className="btn-ghost-arrow mb-6 inline-flex text-sm">
              <ArrowLeft className="h-4 w-4" />All Case Studies
            </Link>
            <p className="text-xs font-semibold text-[var(--brand-lime)]">{cs.industry} &middot; {cs.companySize}</p>
            <h1 className="heading-lg mx-auto mt-2 max-w-2xl">{cs.headline}</h1>
          </Container>
        </section>

        <section className="section-tight bg-[var(--brand-navy-deep)]">
          <Container>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {cs.metrics.map((m) => (<Stat key={m.label} value={m.value} label={m.label} />))}
            </div>
          </Container>
        </section>

        <section className="section-tight">
          <Container className="max-w-3xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={cs.image} alt={cs.company} fill className="object-cover" />
            </div>
          </Container>
        </section>

        <section className="section">
          <Container className="max-w-2xl">
            <h2 className="heading-md">The Challenge</h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">{cs.challenge}</p>
          </Container>
        </section>

        <section className="section bg-[var(--surface-muted)]">
          <Container className="max-w-2xl">
            <h2 className="heading-md">The Solution</h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">{cs.solution}</p>
          </Container>
        </section>

        <section className="section">
          <Container className="max-w-2xl">
            <h2 className="heading-md">The Results</h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">{cs.results}</p>
          </Container>
        </section>

        {cs.quote && (
          <section className="section-tight bg-[var(--brand-navy-deep)] text-center">
            <Container className="max-w-2xl">
              <blockquote className="text-lg font-medium italic text-white/90">&ldquo;{cs.quote.text}&rdquo;</blockquote>
              <p className="mt-4 text-sm text-white/60">{cs.quote.author}, {cs.quote.role}</p>
            </Container>
          </section>
        )}

        <section className="section text-center">
          <Container>
            <h2 className="heading-md">Get Similar Results</h2>
            <CTARow primary={{ label: "See How OpsFlo Ensures Execution", href: "/contact" }} secondary={{ label: "Calculate Your ROI", href: "/roi-calculator" }} className="mt-8 justify-center" />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}