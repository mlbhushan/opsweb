import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText, Download, ArrowRight, ChevronRight,
  BookOpen, Zap, TrendingUp, Shield, Wrench, BarChart3,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { sanityFetch } from "@/sanity/lib/fetch";
import { GUIDES_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = buildMetadata({
  title: "Whitepapers & Guides",
  description:
    "In-depth guides, whitepapers, and playbooks for oilfield operations leaders. Revenue capture, predictive maintenance, HSE compliance, and more.",
  path: "/resources/guides",
});

const STATIC_GUIDES = [
  {
    title: "The Complete Guide to Digital Field Ticketing",
    description:
      "How top oilfield service companies are replacing paper tickets, eliminating revenue leakage, and billing 85% faster. Includes a 90-day rollout framework.",
    type: "Whitepaper",
    pages: 24,
    icon: FileText,
    featured: true,
    topic: "Revenue",
    stat: "85% faster billing",
  },
  {
    title: "Predictive Maintenance Playbook for Energy Assets",
    description:
      "A step-by-step framework for implementing condition-based maintenance that prevents 90% of unplanned downtime using your existing operational data.",
    type: "Playbook",
    pages: 18,
    icon: Wrench,
    featured: false,
    topic: "Maintenance",
    stat: "60% downtime reduction",
  },
  {
    title: "HSE Compliance Automation: From Reactive to Proactive",
    description:
      "How to build an always-audit-ready safety program with digital inspections, automated corrective actions, and real-time compliance dashboards.",
    type: "Guide",
    pages: 16,
    icon: Shield,
    featured: false,
    topic: "Compliance",
    stat: "100% inspection capture",
  },
  {
    title: "Oilfield Scheduling Optimization: A Data-Driven Approach",
    description:
      "Reduce crew idle time by 40% and improve job completion rates with intelligent scheduling, real-time dispatch, and predictive crew utilization.",
    type: "Whitepaper",
    pages: 20,
    icon: BarChart3,
    featured: false,
    topic: "Operations",
    stat: "40% idle time reduction",
  },
  {
    title: "Revenue Recovery: Closing the Gaps in Your Billing Pipeline",
    description:
      "Identify where revenue leaks happen between field execution and invoicing — and a proven framework to capture every dollar earned.",
    type: "Guide",
    pages: 14,
    icon: TrendingUp,
    featured: false,
    topic: "Revenue",
    stat: "5-15% revenue recovered",
  },
];

const SIDEBAR_LINKS = [
  { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
  { label: "Prevent Unplanned Downtime", href: "/solutions/prevent-downtime" },
  { label: "Ensure Inspection Follow-Through", href: "/solutions/inspection-execution" },
  { label: "Accelerate Billing Cycles", href: "/solutions/faster-billing" },
];

const TOPIC_COLORS: Record<string, string> = {
  Revenue: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Maintenance: "bg-blue-50 text-blue-700 border-blue-200",
  Compliance: "bg-amber-50 text-amber-700 border-amber-200",
  Operations: "bg-purple-50 text-purple-700 border-purple-200",
};

type SanityGuide = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  type: string;
  pageCount: number | null;
  fileUrl: string | null;
  featured: boolean;
};

export default async function GuidesPage() {
  const sanityGuides = await sanityFetch<SanityGuide[]>({
    query: GUIDES_QUERY,
    tags: ["guide"],
  });

  const guides =
    sanityGuides.length > 0
      ? sanityGuides.map((g) => ({
          title: g.title,
          description: g.description,
          type: g.type,
          pages: g.pageCount || 0,
          icon: FileText,
          featured: g.featured,
          topic: "Operations",
          stat: "",
          fileUrl: g.fileUrl,
        }))
      : STATIC_GUIDES.map((g) => ({ ...g, fileUrl: null }));

  const featured = guides.find((g) => g.featured) ?? guides[0];
  const rest = guides.filter((g) => g !== featured);

  return (
    <>
      <SiteHeader />
      <PageBanner title="Guides & Whitepapers" />

      <main className="flex-1 bg-white">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-[360px] w-[360px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[var(--color-green-500)]/10 blur-[80px]" />

          <Container className="relative z-10 py-16 md:py-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-800)]/15 bg-white px-4 py-2 shadow-[var(--shadow-xs)]">
              <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                Resources / Guides
              </span>
            </div>

            <h1
              className="mb-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl"
              style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
            >
              <span className="text-[var(--color-green-500)]">Guides</span>
              <br />
              <span className="text-[var(--color-navy-950)]">& Whitepapers.</span>
            </h1>
            <p className="max-w-xl text-base font-light leading-relaxed text-[var(--color-gray-600)] md:text-lg">
              In-depth frameworks, playbooks, and research for operations leaders in oilfield services. Built from real deployments — not theory.
            </p>

            {/* Stats strip */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-[var(--color-gray-200)] pt-8">
              {[
                { value: "5+", label: "In-depth guides" },
                { value: "Free", label: "No gate fees — ever" },
                { value: "Updated", label: "Quarterly" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span
                    className="text-3xl font-black text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR ── */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              {/* ── MAIN ── */}
              <div className="lg:col-span-8 space-y-8">

                {/* Featured Guide */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Featured
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <Link
                    href={("fileUrl" in featured && featured.fileUrl) ? (featured.fileUrl as string) : "/contact"}
                    className="group block border-2 border-[var(--color-navy-950)] bg-[var(--color-navy-950)] p-8 md:p-10 transition-colors hover:bg-[var(--color-navy-900)] shadow-[6px_6px_0px_0px_var(--color-green-500)]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="size-6 text-[var(--color-green-500)]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-500)]">
                          {featured.type}
                        </span>
                        {"pages" in featured && (featured.pages as number) > 0 && (
                          <span className="text-xs text-[var(--color-gray-400)]">
                            {String(featured.pages)} pages
                          </span>
                        )}
                      </div>
                      <span className="shrink-0 rounded-sm bg-[var(--color-green-500)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                        {"stat" in featured ? String(featured.stat) : ""}
                      </span>
                    </div>

                    <h2
                      className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="mb-6 text-sm font-light leading-relaxed text-[var(--color-gray-400)]">
                      {featured.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-[var(--color-green-500)] px-5 py-3 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] transition-colors group-hover:bg-[var(--color-green-400)]">
                      <Download className="size-4" />
                      Download Free
                    </div>
                  </Link>
                </div>

                {/* All Guides */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      All Guides
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <div className="grid gap-0 border-t-2 border-l-2 border-[var(--color-navy-950)]">
                    {rest.map((g) => {
                      const Icon = g.icon;
                      const topicStyle = TOPIC_COLORS[g.topic as string] ?? "bg-gray-50 text-gray-700 border-gray-200";
                      return (
                        <Link
                          key={g.title}
                          href={(g.fileUrl as string | null) ?? "/contact"}
                          className="group flex items-start gap-6 border-r-2 border-b-2 border-[var(--color-navy-950)] bg-white p-7 transition-colors hover:bg-[var(--color-navy-950)]"
                        >
                          <div className="shrink-0 flex size-12 items-center justify-center border-2 border-[var(--color-gray-200)] group-hover:border-[var(--color-navy-700)] transition-colors">
                            <Icon className="size-5 text-[var(--color-green-600)] group-hover:text-[var(--color-green-400)] transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span className={`border rounded-sm px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${topicStyle}`}>
                                {g.topic}
                              </span>
                              <span className="text-xs font-semibold text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-500)] transition-colors">
                                {g.type} · {(g.pages as number) > 0 ? `${g.pages} pages` : ""}
                              </span>
                              {"stat" in g && g.stat && (
                                <span className="text-xs font-bold text-[var(--color-green-600)] group-hover:text-[var(--color-green-400)] transition-colors">
                                  {String(g.stat)}
                                </span>
                              )}
                            </div>
                            <h3 className="mb-2 text-base font-bold uppercase tracking-tight text-[var(--color-navy-950)] group-hover:text-white transition-colors leading-tight" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                              {g.title}
                            </h3>
                            <p className="text-sm font-light leading-relaxed text-[var(--color-gray-500)] group-hover:text-[var(--color-gray-300)] transition-colors">
                              {g.description}
                            </p>
                          </div>
                          <Download className="mt-1 size-4 shrink-0 text-[var(--color-gray-300)] group-hover:text-[var(--color-green-400)] transition-colors" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Inline CTA band */}
                <div className="border border-[var(--color-gray-200)] bg-[var(--color-green-50)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)] mb-1">
                      Don't see what you need?
                    </p>
                    <h3
                      className="text-xl font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      Request a Custom Assessment
                    </h3>
                    <p className="mt-1 text-sm font-light text-[var(--color-gray-600)]">
                      Our team builds tailored revenue and operations analyses for oilfield services companies.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group shrink-0 inline-flex items-center gap-3 bg-[var(--color-navy-950)] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Get in Touch
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 space-y-8">

                {/* CTA card */}
                <div className="bg-[var(--color-navy-950)] p-8 border-2 border-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-green-500)]">
                  <Zap className="mb-4 size-8 text-[var(--color-green-500)]" />
                  <h3
                    className="mb-2 text-2xl font-black uppercase tracking-tighter text-white leading-tight"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    See OpsFlo Live
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-[var(--color-gray-400)]">
                    Guides are a start. A 15-minute diagnostic of your operation shows exactly where you are losing revenue today.
                  </p>
                  <Link
                    href="/contact"
                    className="group mb-2 flex w-full items-center justify-between bg-[var(--color-green-500)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                  >
                    Book a Demo
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/roi-calculator"
                    className="group flex w-full items-center justify-between border border-[var(--color-navy-700)] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-gray-300)] transition-colors hover:border-[var(--color-gray-400)] hover:text-white"
                  >
                    Try ROI Calculator
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Related solutions */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8">
                  <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    Relevant Solutions
                  </p>
                  <ul className="space-y-1">
                    {SIDEBAR_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)]" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="size-3.5 text-[var(--color-gray-300)] transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Webinars cross-link */}
                <div className="bg-[var(--color-green-50)] border border-[var(--color-green-200)] p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)]">
                    Prefer to Watch?
                  </p>
                  <h4
                    className="mb-3 text-lg font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    On-Demand Webinars
                  </h4>
                  <p className="mb-4 text-sm font-light text-[var(--color-gray-600)]">
                    Expert sessions on field operations, predictive maintenance, revenue recovery, and compliance.
                  </p>
                  <Link
                    href="/resources/webinars"
                    className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] underline underline-offset-4 transition-colors hover:text-[var(--color-navy-700)]"
                  >
                    View All Webinars
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Pull quote */}
                <div className="border-l-4 border-[var(--color-green-500)] bg-white border border-l-4 p-8">
                  <blockquote>
                    <p className="mb-4 text-sm font-light italic leading-relaxed text-[var(--color-gray-700)]">
                      &ldquo;The Revenue Recovery guide alone identified $800K in billing gaps we didn&apos;t know existed. We actioned it in 60 days.&rdquo;
                    </p>
                    <footer>
                      <div className="text-xs font-bold uppercase tracking-wide text-[var(--color-navy-900)]">
                        VP of Finance
                      </div>
                      <div className="text-xs text-[var(--color-gray-500)]">
                        Oilfield Services, AB
                      </div>
                    </footer>
                  </blockquote>
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
                  <span className="text-[var(--color-green-500)]">Ready to Go</span>
                  <br />
                  <span className="text-white">Beyond the Guide?</span>
                </h2>
                <p className="mt-5 text-base font-light leading-relaxed text-[var(--color-gray-400)]">
                  A 15-minute OpsFlo diagnostic applies these frameworks directly to your operations — and shows you the exact revenue and efficiency gap in your current workflow.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-auto">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between bg-[var(--color-green-500)] px-7 py-5 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                >
                  <span>Book a 15-Min Diagnostic</span>
                  <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href="/resources/webinars"
                  className="group flex items-center justify-between border border-[var(--color-navy-700)] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-gray-300)] transition-colors hover:border-[var(--color-gray-500)] hover:text-white"
                >
                  <span>View Webinars</span>
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