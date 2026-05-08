import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, TrendingUp, Shield, Zap, BarChart3, Quote } from "lucide-react";
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-800)]/15 bg-white px-4 py-2 shadow-[var(--shadow-xs)]">
              <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                Customer Stories
              </span>
            </div>

            <h1
              className="mb-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl"
              style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
            >
              <span className="text-[var(--color-green-500)]">Results</span>
              <br />
              <span className="text-[var(--color-navy-950)]">That Prove It.</span>
            </h1>
            <p className="max-w-xl text-base font-light leading-relaxed text-[var(--color-gray-600)] md:text-lg">
              Real oilfield operations. Real numbers. See how companies like yours recovered revenue, eliminated downtime, and achieved compliance with OpsFlo.
            </p>

            {/* Aggregate stats strip */}
            <div className="mt-10 grid grid-cols-2 gap-0 border-2 border-[var(--color-navy-950)] sm:grid-cols-4">
              {AGGREGATE_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-5 ${i < AGGREGATE_STATS.length - 1 ? "border-r border-[var(--color-navy-950)]" : ""}`}
                >
                  <div
                    className="text-2xl font-black text-[var(--color-navy-950)] md:text-3xl"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium leading-snug text-[var(--color-gray-500)]">
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
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Featured Story
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <Link
                    href={`/case-studies/${featured.slug}`}
                    className="group block overflow-hidden border-2 border-[var(--color-navy-950)] bg-white transition-shadow shadow-[6px_6px_0px_0px_var(--color-green-500)] hover:shadow-[8px_8px_0px_0px_var(--color-green-500)]"
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
                          style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                        >
                          {featured.company}
                        </h2>
                        <p className="mt-2 text-sm font-light text-[var(--color-gray-300)]">
                          {featured.headline}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-0 border border-[var(--color-gray-200)]">
                        {featured.metrics.map((m, i) => (
                          <div
                            key={m.label}
                            className={`p-4 text-center ${i < featured.metrics.length - 1 ? "border-r border-[var(--color-gray-200)]" : ""}`}
                          >
                            <div
                              className="text-2xl font-black text-[var(--color-navy-950)]"
                              style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                            >
                              {m.value}
                            </div>
                            <div className="mt-1 text-xs font-medium text-[var(--color-gray-500)]">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      {featured.quote && (
                        <div className="mt-6 border-l-4 border-[var(--color-green-500)] pl-5">
                          <Quote className="mb-2 size-5 text-[var(--color-green-500)]" />
                          <p className="text-sm font-light italic leading-relaxed text-[var(--color-gray-600)]">
                            &ldquo;{featured.quote.text}&rdquo;
                          </p>
                          <div className="mt-3">
                            <div className="text-xs font-bold uppercase tracking-wide text-[var(--color-navy-900)]">
                              {featured.quote.author}
                            </div>
                            <div className="text-xs text-[var(--color-gray-500)]">
                              {featured.quote.role}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] underline underline-offset-4 transition-colors group-hover:text-[var(--color-navy-700)]">
                        Read Full Story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Other Case Studies */}
                {rest.length > 0 && (
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                        More Stories
                      </span>
                      <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                    </div>

                    <div className="grid gap-0 border-t-2 border-l-2 border-[var(--color-navy-950)]">
                      {rest.map((cs) => (
                        <Link
                          key={cs.slug}
                          href={`/case-studies/${cs.slug}`}
                          className="group flex items-start gap-0 border-r-2 border-b-2 border-[var(--color-navy-950)] bg-white transition-colors hover:bg-[var(--color-navy-950)] overflow-hidden"
                        >
                          {/* Image */}
                          <div className="relative hidden h-full w-40 shrink-0 sm:block">
                            <Image
                              src={cs.image}
                              alt={cs.company}
                              fill
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-6 md:p-7">
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <span className={`border rounded-sm px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${INDUSTRY_COLORS[cs.industry] ?? "bg-gray-50 text-gray-700 border-gray-200"}`}>
                                {cs.industry}
                              </span>
                            </div>
                            <h3
                              className="mb-2 text-lg font-black uppercase leading-tight tracking-tight text-[var(--color-navy-950)] group-hover:text-white transition-colors"
                              style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                            >
                              {cs.company}
                            </h3>
                            <p className="mb-4 text-sm font-light leading-relaxed text-[var(--color-gray-500)] group-hover:text-[var(--color-gray-300)] transition-colors">
                              {cs.headline}
                            </p>
                            <div className="flex flex-wrap gap-4">
                              {cs.metrics.slice(0, 3).map((m) => (
                                <div key={m.label}>
                                  <div className="text-xl font-black text-[var(--color-navy-950)] group-hover:text-[var(--color-green-400)] transition-colors" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                                    {m.value}
                                  </div>
                                  <div className="text-xs font-medium text-[var(--color-gray-500)] group-hover:text-[var(--color-gray-400)] transition-colors">
                                    {m.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-center p-6">
                            <ArrowRight className="size-5 text-[var(--color-gray-300)] group-hover:text-[var(--color-green-400)] transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom inline CTA */}
                <div className="border border-[var(--color-gray-200)] bg-[var(--color-green-50)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)] mb-1">
                      Want results like these?
                    </p>
                    <h3
                      className="text-xl font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      Get a 15-Min Revenue Diagnostic
                    </h3>
                    <p className="mt-1 text-sm font-light text-[var(--color-gray-600)]">
                      We apply these frameworks directly to your operation and show you the exact gap.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group shrink-0 inline-flex items-center gap-3 bg-[var(--color-navy-950)] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Book a Demo
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 space-y-8">

                {/* CTA card */}
                <div className="bg-[var(--color-navy-950)] p-8 border-2 border-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-green-500)]">
                  <TrendingUp className="mb-4 size-8 text-[var(--color-green-500)]" />
                  <h3
                    className="mb-2 text-2xl font-black uppercase tracking-tighter text-white leading-tight"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    Calculate Your ROI
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-[var(--color-gray-400)]">
                    Enter your crew size and monthly jobs — see your exact revenue recovery potential in 60 seconds.
                  </p>
                  <Link
                    href="/roi-calculator"
                    className="group mb-2 flex w-full items-center justify-between bg-[var(--color-green-500)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                  >
                    Try ROI Calculator
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group flex w-full items-center justify-between border border-[var(--color-navy-700)] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-gray-300)] transition-colors hover:border-[var(--color-gray-400)] hover:text-white"
                  >
                    Book a Demo
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Solutions links */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8">
                  <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    These Stories Address
                  </p>
                  <ul className="space-y-1">
                    {SIDEBAR_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between px-4 py-3 text-sm font-medium text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="size-4 text-[var(--color-green-500)]" />
                              <span>{link.label}</span>
                            </div>
                            <ChevronRight className="size-3.5 text-[var(--color-gray-300)] transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Aggregate proof */}
                <div className="bg-[var(--color-navy-50)] border border-[var(--color-navy-100)] p-8">
                  <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-700)]">
                    Across All Customers
                  </p>
                  <div className="space-y-4">
                    {[
                      { value: "8%→1%", label: "Revenue leakage reduction" },
                      { value: "45d→4hr", label: "Billing cycle time" },
                      { value: "3wks→½day", label: "Audit preparation time" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between border-b border-[var(--color-navy-100)] pb-4 last:border-0 last:pb-0">
                        <span className="text-xs font-medium text-[var(--color-gray-500)]">{s.label}</span>
                        <span className="text-sm font-black text-[var(--color-navy-950)]" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guides cross-link */}
                <div className="bg-[var(--color-green-50)] border border-[var(--color-green-200)] p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)]">
                    Want the playbook?
                  </p>
                  <h4
                    className="mb-3 text-lg font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    Guides & Whitepapers
                  </h4>
                  <p className="mb-4 text-sm font-light text-[var(--color-gray-600)]">
                    In-depth frameworks behind these results — download free.
                  </p>
                  <Link
                    href="/resources/guides"
                    className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] underline underline-offset-4 transition-colors hover:text-[var(--color-navy-700)]"
                  >
                    View All Guides
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="relative overflow-hidden border-t border-[var(--color-gray-200)] bg-[var(--color-navy-950)] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2
                  className="text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-5xl"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">Your Operation.</span>
                  <br />
                  <span className="text-white">Your Numbers Next.</span>
                </h2>
                <p className="mt-5 text-base font-light leading-relaxed text-[var(--color-gray-400)]">
                  A 15-minute diagnostic applies these exact frameworks to your operation — and quantifies the revenue, downtime, and compliance gap in your current workflow.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-auto">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between bg-[var(--color-green-500)] px-7 py-5 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                >
                  <span>Get a Revenue Diagnostic</span>
                  <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href="/roi-calculator"
                  className="group flex items-center justify-between border border-[var(--color-navy-700)] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-gray-300)] transition-colors hover:border-[var(--color-gray-500)] hover:text-white"
                >
                  <span>Calculate ROI First</span>
                  <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
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