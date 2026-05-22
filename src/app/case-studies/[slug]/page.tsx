import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Quote } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
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
      <main className="flex-1 bg-white">
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)] py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10 max-w-4xl text-center">
            <Link href="/case-studies" className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-200)] bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <ArrowLeft className="h-4 w-4" />All Customer Stories
            </Link>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-green-600)]">{cs.industry} &middot; {cs.companySize}</p>
            <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-6xl text-balance text-[var(--color-navy-950)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              {cs.headline}
            </h1>
          </Container>
        </section>

        <section className="py-12 bg-[var(--color-navy-50)]">
          <Container>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-3xl border border-[var(--color-navy-100)] bg-white p-6 shadow-sm transition-all text-center hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-green-400)]"
                >
                  <div
                    className="text-2xl font-black text-[var(--color-navy-950)] md:text-4xl"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {m.value}
                  </div>
                  <div className="mt-2 text-[10px] sm:text-xs font-bold leading-snug text-[var(--color-gray-500)] uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container className="max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-sm border border-[var(--color-gray-200)]">
              <Image src={cs.image} alt={cs.company} fill className="object-cover" />
            </div>
          </Container>
        </section>

        <section className="py-10">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[var(--color-navy-950)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>The Challenge</h2>
            <div className="mt-4 prose prose-lg prose-slate max-w-none text-base font-medium leading-relaxed text-[var(--color-gray-600)] selection:bg-[var(--color-green-500)] selection:text-white" dangerouslySetInnerHTML={{ __html: `<p>${cs.challenge}</p>` }} />
          </Container>
        </section>

        <section className="py-10 bg-[var(--color-gray-50)]">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[var(--color-navy-950)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>The Solution</h2>
            <div className="mt-4 prose prose-lg prose-slate max-w-none text-base font-medium leading-relaxed text-[var(--color-gray-600)] selection:bg-[var(--color-green-500)] selection:text-white" dangerouslySetInnerHTML={{ __html: `<p>${cs.solution}</p>` }} />
          </Container>
        </section>

        <section className="py-10">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[var(--color-navy-950)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>The Results</h2>
            <div className="mt-4 prose prose-lg prose-slate max-w-none text-base font-medium leading-relaxed text-[var(--color-gray-600)] selection:bg-[var(--color-green-500)] selection:text-white" dangerouslySetInnerHTML={{ __html: `<p>${cs.results}</p>` }} />
          </Container>
        </section>

        {cs.quote && (
          <section className="py-16 bg-[var(--color-navy-950)] text-center relative overflow-hidden">
            <div className="absolute right-[-10%] top-[-10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_60%)] opacity-10 pointer-events-none" />
            <Container className="max-w-3xl relative z-10">
              <Quote className="mx-auto mb-6 size-10 text-[var(--color-green-500)] opacity-80" />
              <blockquote className="text-xl md:text-2xl font-medium italic text-white leading-relaxed text-balance">&ldquo;{cs.quote.text}&rdquo;</blockquote>
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-green-500)]">{cs.quote.author}</p>
                <p className="mt-1 text-xs text-white/60">{cs.quote.role}</p>
              </div>
            </Container>
          </section>
        )}

        <section className="py-24 text-center">
          <Container>
            <h2 className="text-4xl font-black uppercase tracking-tight text-[var(--color-navy-950)] text-balance" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Get Similar Results</h2>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[var(--color-navy-950)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] w-full sm:w-auto">
                See How OpsFlo Ensures Execution
              </Link>
              <Link href="/roi-calculator" className="inline-flex items-center justify-center rounded-xl border border-[var(--color-gray-200)] bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-green-400)] hover:text-[var(--color-green-700)] w-full sm:w-auto">
                Calculate Your ROI
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}