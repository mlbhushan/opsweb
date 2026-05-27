import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, TrendingUp, Shield, Zap, BarChart3, Quote, Briefcase, Calculator, Tag, Search, Pin, Folder } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CASE_STUDIES_QUERY } from "@/sanity/lib/queries";
import { CASE_STUDIES } from "@/lib/content/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "See how oilfield service companies use OpsFlo to recover 5-15% of lost revenue, prevent downtime, and achieve 100% compliance. Real results, real operations.",
  path: "/case-studies",
});

const INDUSTRY_COLORS: Record<string, string> = {
  "Oilfield Services": "bg-amber-50 text-amber-700 border-amber-200",
  "Equipment Rental": "bg-blue-50 text-blue-700 border-blue-200",
  "Pipeline & Infrastructure": "bg-purple-50 text-purple-700 border-purple-200",
  "Fluid Hauling": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Well Services": "bg-rose-50 text-rose-700 border-rose-200",
};

const SIDEBAR_LINKS = [
  { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage", icon: TrendingUp },
  { label: "Prevent Unplanned Downtime", href: "/solutions/prevent-downtime", icon: Zap },
  { label: "Ensure Inspection Compliance", href: "/solutions/inspection-execution", icon: Shield },
  { label: "Accelerate Billing Cycles", href: "/solutions/faster-billing", icon: BarChart3 },
];

const AGGREGATE_STATS = [
  { value: "$1.2M+", label: "Average annual revenue recovered" },
  { value: "60%", label: "Reduction in unplanned downtime" },
  { value: "100%", label: "Inspection compliance achieved" },
  { value: "85%", label: "Faster audit preparation" },
];

type SanityCaseStudy = {
  _id: string;
  company: string;
  slug: string;
  industry: string;
  headline: string;
  image: string | null;
  metrics: { value: string; label: string }[];
};

export default async function CaseStudiesPage() {
  const sanityData = await sanityFetch<SanityCaseStudy[]>({
    query: CASE_STUDIES_QUERY,
    tags: ["caseStudy"],
  });

  const studies =
    sanityData.length > 0
      ? sanityData.map((cs) => ({
          slug: cs.slug,
          company: cs.company,
          industry: cs.industry,
          headline: cs.headline,
          image: cs.image || "/images/hero/placeholder.jpg",
          metrics: cs.metrics || [],
          quote: undefined as { text: string; author: string; role: string } | undefined,
        }))
      : CASE_STUDIES.map((cs) => ({
          slug: cs.slug,
          company: cs.company,
          industry: cs.industry,
          headline: cs.headline,
          image: cs.image,
          metrics: cs.metrics,
          quote: cs.quote,
        }));

  const featured = studies[0];
  const rest = studies.slice(1);

  return (
    <>
      <SiteHeader />
      <PageBanner title="Case Studies" />

      <main className="flex-1 bg-white">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[var(--color-green-500)]/8 blur-[100px]" />

          <Container className="relative z-10 py-16 md:py-24">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-5 py-2 shadow-sm">
              <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                Customer Stories
              </span>
            </div>

            <h1
              className="mb-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl text-balance"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              <span className="text-[var(--color-green-500)]">Results</span>
              <br />
              <span className="text-[var(--color-navy-950)]">That Prove It.</span>
            </h1>
            <p className="max-w-xl text-base font-medium leading-relaxed text-[var(--color-gray-600)] md:text-lg">
              Real oilfield operations. Real numbers. See how companies like yours recovered revenue, eliminated downtime, and achieved compliance with OpsFlo.
            </p>

            {/* Aggregate stats strip */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {AGGREGATE_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-[var(--color-gray-200)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-green-400)]"
                >
                  <div
                    className="text-2xl font-black text-[var(--color-navy-950)] md:text-3xl"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs font-semibold leading-snug text-[var(--color-gray-500)] uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── MAIN + SIDEBAR ── */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              {/* ── MAIN CONTENT ── */}
              <div className="lg:col-span-8 space-y-10">

                {/* Featured Case Study */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)] rounded-sm" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Featured Story
                    </span>
                  </div>

                  <Link
                    href={`/case-studies/${featured.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-[var(--color-gray-200)] bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-green-400)]"
                  >
                    <div className="relative aspect-[16/7] overflow-hidden">
                      <Image
                        src={featured.image}
                        alt={featured.company}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/80 via-[var(--color-navy-950)]/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 md:p-8">
                        <span className={`inline-block border rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide ${INDUSTRY_COLORS[featured.industry] ?? "bg-gray-50 text-gray-700 border-gray-200"}`}>
                          {featured.industry}
                        </span>
                        <h2
                          className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl"
                          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                          {featured.company}
                        </h2>
                        <p className="mt-2 text-sm font-medium text-[var(--color-gray-300)]">
                          {featured.headline}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {featured.metrics.map((m, i) => (
                          <div
                            key={m.label}
                            className="rounded-2xl border border-[var(--color-gray-100)] bg-[var(--color-gray-50)] p-4 text-center transition-colors group-hover:border-[var(--color-green-200)] group-hover:bg-[var(--color-green-50)]"
                          >
                            <div className="text-2xl font-black uppercase tracking-tighter text-[var(--color-navy-950)] group-hover:text-[var(--color-green-600)] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                              {m.value}
                            </div>
                            <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-navy-950)] px-8 py-4 text-sm font-bold tracking-widest text-white transition-all shadow-sm group-hover:bg-[var(--color-green-500)] group-hover:text-[var(--color-navy-950)] group-hover:shadow-md group-hover:-translate-y-0.5 uppercase">
                        Read Case Study
                        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Other Case Studies */}
                {rest.length > 0 && (
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="h-6 w-1 block bg-[var(--color-navy-950)] rounded-full" />
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                        More Success Stories
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {rest.map((study) => (
                        <article
                          key={study.slug}
                          className="group flex flex-col overflow-hidden rounded-[24px] border border-[var(--color-gray-200)] bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[var(--color-navy-900)]/5 hover:-translate-y-1 hover:border-[var(--color-green-400)]"
                        >
                          <Link href={`/case-studies/${study.slug}`} className="flex flex-col h-full">
                            {/* Image */}
                            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden border-b border-[var(--color-gray-100)]">
                              <Image
                                src={study.image}
                                alt={study.company}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                              />
                              <div className="absolute top-4 right-4 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-black uppercase tracking-widest text-[var(--color-navy-950)] shadow-sm" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                                {study.company}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6 md:p-8">
                              <h3
                                className="mb-3 text-2xl font-bold leading-tight tracking-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-green-700)]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                              >
                                {study.company}
                              </h3>
                              <p className="mb-6 flex-1 text-sm font-medium leading-relaxed text-[var(--color-gray-600)]">
                                {study.headline}
                              </p>

                              <div className="mt-auto">
                                <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)]">
                                  <Tag className="size-3.5" />
                                  {study.industry}
                                </div>
                                
                                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[var(--color-gray-100)] pt-6">
                                  {[
                                    { value: study.metrics[0].value, label: study.metrics[0].label },
                                    { value: study.metrics[1].value, label: study.metrics[1].label },
                                  ].map((m) => (
                                    <div key={m.label} className="rounded-2xl bg-white border border-[var(--color-gray-200)] shadow-sm p-3 text-center group-hover:border-[var(--color-green-200)] group-hover:shadow-md transition-all duration-300">
                                      <div className="text-lg font-black uppercase tracking-tight text-[var(--color-navy-950)] group-hover:text-[var(--color-green-600)] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                                        {m.value}
                                      </div>
                                      <div className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                                        {m.label}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 space-y-6">

                {/* Search */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <form className="relative" action="/case-studies">
                    <input
                      name="q"
                      type="text"
                      placeholder="Search case studies..."
                      className="w-full rounded-xl border border-[var(--color-gray-200)] bg-[var(--color-gray-50)] py-4 pl-5 pr-14 text-sm font-medium focus:border-[var(--color-green-400)] focus:bg-white focus:outline-none transition-all shadow-sm focus:ring-4 focus:ring-[var(--color-green-500)]/10"
                    />
                    <button
                      type="submit"
                      className="absolute bottom-1.5 right-1.5 top-1.5 flex w-12 items-center justify-center rounded-lg bg-[var(--color-navy-950)] text-white transition-all shadow-sm hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                    >
                      <Search className="size-5" />
                    </button>
                  </form>
                </div>

                {/* CTA card */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-xl shadow-[var(--color-navy-900)]/5 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_70%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3" />
                  <div className="relative z-10">
                    <h3
                      className="mb-2 text-2xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-tight"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Calculate Your Revenue Gap
                    </h3>
                    <p className="mb-8 text-sm font-medium leading-relaxed text-[var(--color-gray-600)]">
                      See how much revenue your operation is leaving unbilled every month.
                    </p>
                    <Link
                      href="/roi-calculator"
                      className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-navy-950)] px-5 py-4 text-sm font-bold tracking-wider text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] uppercase"
                    >
                      Try ROI Calculator
                      <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Recent Case Studies */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    <Pin className="size-4 fill-[var(--color-green-500)] text-[var(--color-green-500)]" />
                    Recent Stories
                  </h3>
                  <div className="flex flex-col gap-5">
                    {rest.slice(0, 3).map((study) => (
                      <Link
                        key={study.slug}
                        href={`/case-studies/${study.slug}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-[var(--color-gray-200)] shadow-sm">
                          <Image
                            src={study.image}
                            alt={study.company}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="line-clamp-2 text-sm font-bold leading-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-green-700)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                            {study.company}
                          </h4>
                          <p className="mt-1 text-xs font-medium text-[var(--color-gray-500)]">
                            {study.industry}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    <Folder className="size-4 text-[var(--color-green-500)]" />
                    Industries
                  </h3>
                  <ul className="flex flex-col space-y-1">
                    {["Oilfield Services", "Equipment Rental", "Midstream Pipeline"].map((ind) => {
                      const style = INDUSTRY_COLORS[ind] ?? "bg-[var(--color-gray-50)] text-[var(--color-gray-700)] border-[var(--color-gray-200)]";
                      return (
                        <li key={ind}>
                          <Link
                            href={`/case-studies?industry=${ind}`}
                            className="group/link flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`rounded-sm border px-1.5 py-0.5 text-xs font-bold ${style}`}>
                                {ind}
                              </span>
                            </div>
                            <ChevronRight className="size-4 text-[var(--color-gray-300)] transition-transform group-hover/link:translate-x-1 group-hover/link:text-[var(--color-green-500)]" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Webinars cross-link */}
                <div className="rounded-[24px] bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] p-8 relative overflow-hidden hover:border-[var(--color-green-300)] transition-colors duration-500 group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--color-gray-200)] group-hover:bg-[var(--color-green-500)] transition-colors duration-500" />
                  <div className="pl-2">
                    <p className="mb-2 text-xs font-bold tracking-widest text-[var(--color-green-600)] uppercase">
                      Go deeper
                    </p>
                    <h4
                      className="mb-3 text-lg font-bold tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Webinars & Events
                    </h4>
                    <p className="mb-6 text-sm font-medium text-[var(--color-gray-500)] leading-relaxed">
                      Watch how operators put these success stories into action.
                    </p>
                    <Link
                      href="/resources/webinars"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[var(--color-navy-800)] transition-colors hover:text-[var(--color-green-700)] uppercase"
                    >
                      View Webinars
                      <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </aside>
            </div>
          </Container>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="relative overflow-hidden border-t border-[var(--color-gray-200)] bg-white py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2
                  className="text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-6xl text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">Ready for Your Own</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Success Story?</span>
                </h2>
                <p className="mt-6 text-lg font-medium leading-relaxed text-[var(--color-gray-600)]">
                  Start a 30-day pilot. See results with your crews, your data, and your actual workflows before committing long-term.
                </p>
              </div>
              <div className="flex w-full flex-col gap-4 lg:w-[380px]">
                <Link
                  href="/contact"
                  className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-6 py-5 text-sm font-bold tracking-widest text-[var(--color-navy-950)] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)] uppercase"
                >
                  <span>Start 30-Day Pilot</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/roi-calculator"
                  className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-gray-200)] bg-white px-6 py-5 text-sm font-bold tracking-widest text-[var(--color-navy-950)] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-gray-50)] hover:border-[var(--color-gray-300)] uppercase"
                >
                  <span>Calculate Potential ROI</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta2:translate-x-1" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
