import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText, Download, ArrowRight, ChevronRight,
  BookOpen, Zap, TrendingUp, Shield, Wrench, BarChart3, Search, Pin, Folder
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
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                Resources / Guides
              </span>
            </div>

            <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-[1.05] mb-8 text-balance">
              <span className="text-[var(--color-green-500)]">Guides</span>
              <br className="hidden sm:block" />
              <span className="text-[var(--color-navy-950)]">& Whitepapers.</span>
            </h1>
            <p className="max-w-xl text-base font-medium leading-relaxed text-[var(--color-gray-600)] md:text-lg">
              In-depth frameworks, playbooks, and research for operations leaders in oilfield services. Built from real deployments — not theory.
            </p>

            {/* Stats strip */}
            <div className="mt-12 flex flex-wrap gap-6 border-t border-[var(--color-gray-200)] pt-8">
              {[
                { value: "5+", label: "In-depth guides" },
                { value: "Free", label: "No gate fees — ever" },
                { value: "Updated", label: "Quarterly" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-3 rounded-2xl bg-[var(--color-gray-50)] px-5 py-3 border border-[var(--color-gray-100)]">
                  <span
                    className="text-3xl font-black text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
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
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)] rounded-sm" />
                    <span className="text-xs font-bold tracking-widest text-[var(--color-gray-500)] uppercase">
                      Featured
                    </span>
                  </div>

                  <Link
                    href={("fileUrl" in featured && featured.fileUrl) ? (featured.fileUrl as string) : "/contact"}
                    className="group block overflow-hidden rounded-[24px] border border-[var(--color-gray-200)] bg-white p-8 md:p-10 shadow-lg shadow-[var(--color-navy-900)]/5 transition-all hover:shadow-xl hover:border-[var(--color-green-400)] hover:-translate-y-1 relative"
                  >
                    <div className="absolute right-[-10%] top-[-10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_60%)] opacity-[0.03] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.06]" />
                    <div className="relative z-10">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3 bg-[var(--color-gray-50)] rounded-full pl-2 pr-4 py-1.5 border border-[var(--color-gray-200)] shadow-sm transition-colors group-hover:border-[var(--color-green-200)]">
                          <div className="flex size-6 items-center justify-center rounded-full bg-white border border-[var(--color-gray-200)] shadow-sm">
                            <BookOpen className="size-3 text-[var(--color-green-600)]" />
                          </div>
                          <span className="text-xs font-bold tracking-widest text-[var(--color-navy-800)] uppercase">
                            {featured.type}
                          </span>
                          {"pages" in featured && (featured.pages as number) > 0 && (
                            <span className="text-xs text-[var(--color-gray-500)] ml-2 border-l border-[var(--color-gray-300)] pl-3 font-medium">
                              {String(featured.pages)} pages
                            </span>
                          )}
                        </div>
                        {"stat" in featured && (
                          <span className="shrink-0 rounded-full border border-[var(--color-green-200)] bg-[var(--color-green-50)] px-3 py-1.5 text-xs font-bold tracking-widest text-[var(--color-green-700)] uppercase">
                            {String(featured.stat)}
                          </span>
                        )}
                      </div>

                      <h2
                        className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-[var(--color-navy-950)] md:text-3xl text-balance transition-colors group-hover:text-[var(--color-green-700)]"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        {featured.title}
                      </h2>
                      <p className="mb-8 text-base font-medium leading-relaxed text-[var(--color-gray-600)] max-w-2xl">
                        {featured.description}
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-navy-950)] px-6 py-3.5 text-sm font-bold tracking-widest text-white transition-all shadow-sm group-hover:bg-[var(--color-green-500)] group-hover:text-[var(--color-navy-950)] group-hover:shadow-md group-hover:-translate-y-0.5 uppercase">
                        <Download className="size-4" />
                        Download Free
                      </div>
                    </div>
                  </Link>
                </div>

                {/* All Guides */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)] rounded-sm" />
                    <span className="text-xs font-bold tracking-widest text-[var(--color-gray-500)] uppercase">
                      All Guides
                    </span>
                  </div>

                  <div className="grid gap-4">
                    {rest.map((g) => {
                      const Icon = g.icon;
                      const topicStyle = TOPIC_COLORS[g.topic as string] ?? "bg-[var(--color-gray-100)] text-[var(--color-gray-700)] border-[var(--color-gray-200)]";
                      return (
                        <Link
                          key={g.title}
                          href={(g.fileUrl as string | null) ?? "/contact"}
                          className="group flex flex-col sm:flex-row sm:items-stretch gap-0 rounded-[24px] border border-[var(--color-gray-200)] bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[var(--color-navy-900)]/5 hover:-translate-y-1 hover:border-[var(--color-green-400)] overflow-hidden"
                        >
                          <div className="flex-1 p-6 md:p-8">
                            <div className="mb-4 flex flex-wrap items-center gap-2">
                              <span className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase ${topicStyle}`}>
                                {g.topic}
                              </span>
                              <span className="text-[10px] font-bold tracking-widest text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-500)] transition-colors uppercase">
                                {g.type} · {(g.pages as number) > 0 ? `${g.pages} pages` : ""}
                              </span>
                              {"stat" in g && g.stat && (
                                <span className="text-[10px] font-bold tracking-widest text-[var(--color-green-600)] group-hover:text-[var(--color-green-600)] transition-colors ml-auto sm:ml-2 uppercase bg-[var(--color-green-50)] px-2 py-0.5 rounded-full border border-[var(--color-green-100)]">
                                  {String(g.stat)}
                                </span>
                              )}
                            </div>
                            <h3 className="mb-2 text-xl font-bold tracking-tight text-[var(--color-navy-950)] transition-colors leading-tight group-hover:text-[var(--color-green-700)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                              {g.title}
                            </h3>
                            <p className="text-sm font-medium leading-relaxed text-[var(--color-gray-500)] transition-colors line-clamp-2 sm:line-clamp-none">
                              {g.description}
                            </p>
                          </div>
                          
                          <div className="flex sm:flex-col items-center justify-center gap-3 p-6 bg-transparent transition-colors w-full sm:w-24 shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[var(--color-gray-50)] flex items-center justify-center border border-[var(--color-gray-200)] group-hover:border-[var(--color-green-200)] group-hover:bg-[var(--color-green-50)] transition-colors duration-300">
                              <Download className="size-5 text-[var(--color-gray-400)] group-hover:text-[var(--color-green-600)] transition-transform group-hover:-translate-y-0.5" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-[var(--color-gray-500)] group-hover:text-[var(--color-green-700)] sm:hidden uppercase">Download</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Inline CTA band */}
                <div className="rounded-3xl border border-[var(--color-gray-200)] bg-[var(--color-green-50)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)] mb-1">
                      Don't see what you need?
                    </p>
                    <h3
                      className="text-xl font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Request a Custom Assessment
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--color-gray-600)]">
                      Our team builds tailored revenue and operations analyses for oilfield services companies.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group/cta shrink-0 inline-flex items-center gap-3 rounded-xl bg-[var(--color-navy-950)] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Get in Touch
                    <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 space-y-6">

                {/* CTA card */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-xl shadow-[var(--color-navy-900)]/5 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_70%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gray-50)] flex items-center justify-center border border-[var(--color-gray-200)] mb-6 shadow-sm">
                      <Zap className="size-5 text-[var(--color-green-600)]" />
                    </div>
                    <h3
                      className="mb-2 text-2xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-tight"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      See OpsFlo Live
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

                {/* Recent Guides */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    <Pin className="size-4 fill-[var(--color-green-500)] text-[var(--color-green-500)]" />
                    Recent Guides
                  </h3>
                  <div className="flex flex-col gap-5">
                    {rest.slice(0, 3).map((guide) => {
                      const Icon = guide.icon || FileText;
                      return (
                        <div key={guide.title} className="group flex items-center gap-4 cursor-pointer">
                          <div className="relative size-12 shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] shadow-sm group-hover:bg-[var(--color-green-50)] group-hover:border-[var(--color-green-200)] transition-colors">
                            <Icon className="size-5 text-[var(--color-navy-950)] group-hover:text-[var(--color-green-600)] transition-colors" />
                          </div>
                          <div>
                            <h4 className="line-clamp-2 text-sm font-bold leading-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-green-700)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                              {guide.title}
                            </h4>
                            <p className="mt-1 text-xs font-medium text-[var(--color-gray-500)] uppercase tracking-wider">
                              {guide.topic}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Topics */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    <Folder className="size-4 text-[var(--color-green-500)]" />
                    Topics
                  </h3>
                  <ul className="flex flex-col space-y-1">
                    {Object.keys(TOPIC_COLORS).map((topic) => {
                      const style = TOPIC_COLORS[topic];
                      return (
                        <li key={topic}>
                          <Link
                            href={`/resources/guides?topic=${topic}`}
                            className="group/link flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`rounded-sm border px-1.5 py-0.5 text-xs font-bold ${style}`}>
                                {topic}
                              </span>
                            </div>
                            <ChevronRight className="size-4 text-[var(--color-gray-300)] transition-transform group-hover/link:translate-x-1 group-hover/link:text-[var(--color-green-500)]" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Blog cross-link */}
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
                      Our Blog
                    </h4>
                    <p className="mb-6 text-sm font-medium text-[var(--color-gray-500)] leading-relaxed">
                      Tactical insights and news on field operations and revenue recovery.
                    </p>
                    <Link
                      href="/blog"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[var(--color-navy-800)] transition-colors hover:text-[var(--color-green-700)] uppercase"
                    >
                      Read the Blog
                      <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
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
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-800)] bg-[var(--color-navy-900)] px-4 py-1.5 mb-6 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Take Action
                  </span>
                </div>
                <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-[1.05] mb-8 text-balance">
                  <span className="text-[var(--color-green-500)]">Ready to Go</span>
                  <br className="hidden sm:block" />
                  <span className="text-white">Beyond the Guide?</span>
                </h2>
                <p className="mt-6 text-base font-medium leading-relaxed text-[var(--color-gray-400)]">
                  A 15-minute OpsFlo diagnostic applies these frameworks directly to your operations — and shows you the exact revenue and efficiency gap in your current workflow.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-[380px]">
                <Link
                  href="/contact"
                  className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-6 py-5 text-sm font-bold tracking-widest text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)] uppercase"
                >
                  <span>Book a 15-Min Diagnostic</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/resources/webinars"
                  className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold tracking-widest text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-navy-900)] uppercase"
                >
                  <span>View Webinars</span>
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
