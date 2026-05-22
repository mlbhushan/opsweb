import type { Metadata } from "next";
import Link from "next/link";
import {
  PlayCircle, Clock, Calendar, ArrowRight,
  ChevronRight, Zap, Users, Radio,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { sanityFetch } from "@/sanity/lib/fetch";
import { WEBINARS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = buildMetadata({
  title: "Webinars",
  description:
    "On-demand webinars covering field operations, predictive maintenance, revenue optimization, and compliance for oilfield services leaders.",
  path: "/resources/webinars",
});

const STATIC_WEBINARS = [
  {
    title: "From Paper to Platform: Digitizing Field Operations in 90 Days",
    description:
      "A step-by-step walkthrough of how one midstream operator eliminated paper tickets and cut billing time by 85%. Includes implementation checklist.",
    duration: "45 min",
    date: "May 2025",
    tag: "On-Demand",
    topic: "Operations",
    speakers: "2 speakers",
    featured: true,
    stat: "85% billing time cut",
  },
  {
    title: "Predictive Maintenance: Turning Sensor Data Into Preventive Action",
    description:
      "How predictive models reduce unplanned downtime by flagging equipment failures 2-3 weeks before they happen — with your existing operational data.",
    duration: "35 min",
    date: "April 2025",
    tag: "On-Demand",
    topic: "Maintenance",
    speakers: "3 speakers",
    featured: false,
    stat: "60% downtime reduction",
  },
  {
    title: "HSE Compliance Without the Chaos: Digital Safety Workflows",
    description:
      "How structured digital inspection workflows keep field teams audit-ready every single day — without adding administrative burden.",
    duration: "40 min",
    date: "March 2025",
    tag: "On-Demand",
    topic: "Compliance",
    speakers: "2 speakers",
    featured: false,
    stat: "1-click audit packages",
  },
  {
    title: "Revenue Leakage: The $2M Problem You Can Fix This Quarter",
    description:
      "Quantify how missed tickets, unbilled hours, and pricing errors drain revenue from your operations — and a practical recovery plan for Q2.",
    duration: "50 min",
    date: "February 2025",
    tag: "On-Demand",
    topic: "Revenue",
    speakers: "2 speakers",
    featured: false,
    stat: "5-15% revenue recovered",
  },
  {
    title: "Field Supervisor Masterclass: Leading Digital Crews",
    description:
      "How to successfully lead a field crew through digital transformation — without losing compliance, productivity, or crew buy-in.",
    duration: "30 min",
    date: "January 2025",
    tag: "On-Demand",
    topic: "Leadership",
    speakers: "1 speaker",
    featured: false,
    stat: "Crew adoption roadmap",
  },
];

const UPCOMING = [
  {
    title: "AI in the Field: What Predictive Maintenance Actually Looks Like",
    date: "June 12, 2025",
    time: "10:00 AM MT",
    tag: "Upcoming",
    topic: "AI & Maintenance",
  },
  {
    title: "CFO Roundtable: Closing the Revenue Gap in Field Operations",
    date: "June 26, 2025",
    time: "1:00 PM MT",
    tag: "Upcoming",
    topic: "Revenue",
  },
];

const SIDEBAR_LINKS = [
  { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
  { label: "Prevent Unplanned Downtime", href: "/solutions/prevent-downtime" },
  { label: "Accelerate Billing Cycles", href: "/solutions/faster-billing" },
  { label: "HSE Manager Solutions", href: "/solutions/hse" },
];

const TOPIC_COLORS: Record<string, string> = {
  Operations: "bg-blue-50 text-blue-700 border-blue-200",
  Maintenance: "bg-purple-50 text-purple-700 border-purple-200",
  Compliance: "bg-amber-50 text-amber-700 border-amber-200",
  Revenue: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Leadership: "bg-rose-50 text-rose-700 border-rose-200",
  "AI & Maintenance": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

type SanityWebinar = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  date: string;
  tag: string;
  videoUrl: string | null;
};

export default async function WebinarsPage() {
  const sanityWebinars = await sanityFetch<SanityWebinar[]>({
    query: WEBINARS_QUERY,
    tags: ["webinar"],
  });

  const webinars =
    sanityWebinars.length > 0
      ? sanityWebinars.map((w) => ({
          title: w.title,
          description: w.description,
          duration: w.duration || "",
          date: w.date,
          tag: w.tag,
          videoUrl: w.videoUrl,
          topic: "Operations",
          speakers: "",
          featured: false,
          stat: "",
        }))
      : STATIC_WEBINARS.map((w) => ({ ...w, videoUrl: null }));

  const featured = webinars.find((w) => w.featured) ?? webinars[0];
  const rest = webinars.filter((w) => w !== featured);

  return (
    <>
      <SiteHeader />
      <PageBanner title="Webinars" />

      <main className="flex-1 bg-white">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute left-0 bottom-0 h-[360px] w-[360px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[var(--color-navy-900)]/6 blur-[80px]" />

          <Container className="relative z-10 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-5 py-2 shadow-sm">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    Resources / Webinars
                  </span>
                </div>

                <h1
                  className="mb-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">Expert</span>
                  <br />
                  <span className="text-[var(--color-navy-950)]">Sessions.</span>
                </h1>
                <p className="max-w-xl text-base font-medium leading-relaxed text-[var(--color-gray-600)] md:text-lg">
                  On-demand and live sessions from oilfield operations practitioners. Real deployments, real numbers, no slides-only theory.
                </p>

                <div className="mt-12 flex flex-wrap gap-6 border-t border-[var(--color-gray-200)] pt-8">
                  {[
                    { value: "5+", label: "On-demand sessions" },
                    { value: "Free", label: "Always free" },
                    { value: "2/mo", label: "New sessions" },
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
              </div>

              {/* Upcoming bento */}
              <div className="lg:col-span-5 space-y-0 rounded-3xl border border-[var(--color-gray-200)] bg-white shadow-sm overflow-hidden">
                <div className="bg-[var(--color-navy-50)] border-b border-[var(--color-navy-100)] px-6 py-5 flex items-center gap-3">
                  <Radio className="size-4 text-[var(--color-green-600)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)]">
                    Upcoming Live Sessions
                  </span>
                </div>
                {UPCOMING.map((u, i) => (
                  <div
                    key={u.title}
                    className={`p-6 border-b border-[var(--color-gray-100)] transition-colors hover:bg-[var(--color-gray-50)] ${i === UPCOMING.length - 1 ? "border-b-0" : ""}`}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${TOPIC_COLORS[u.topic] ?? "bg-[var(--color-gray-100)] text-[var(--color-gray-700)] border-[var(--color-gray-200)]"}`}>
                        {u.topic}
                      </span>
                    </div>
                    <h4 className="mb-3 text-sm font-black uppercase tracking-tight leading-tight text-[var(--color-navy-950)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                      {u.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-[var(--color-gray-400)]" />{u.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-[var(--color-gray-400)]" />{u.time}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="group/btn mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)] transition-colors hover:text-[var(--color-green-600)]"
                    >
                      Register Free <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR ── */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              {/* ── MAIN ── */}
              <div className="lg:col-span-8 space-y-8">

                {/* Featured Webinar */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)] rounded-sm" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Most Watched
                    </span>
                  </div>

                  <Link
                    href={(featured as { videoUrl?: string | null }).videoUrl ?? "/contact"}
                    className="group block overflow-hidden rounded-3xl border border-[var(--color-navy-800)] bg-[var(--color-navy-950)] p-8 md:p-10 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 relative"
                  >
                    <div className="absolute right-[-10%] top-[-10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_60%)] opacity-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-20" />
                    <div className="relative z-10">
                      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3 bg-[var(--color-navy-900)] rounded-full pl-2 pr-4 py-1.5 border border-[var(--color-navy-700)] shadow-sm">
                          <div className="flex size-6 items-center justify-center rounded-full bg-[var(--color-navy-800)]">
                            <PlayCircle className="size-3 text-[var(--color-green-500)]" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-500)]">
                            {featured.tag}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-[var(--color-gray-400)] ml-2 border-l border-[var(--color-navy-700)] pl-3">
                            <Clock className="size-3.5" /> {featured.duration}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-[var(--color-gray-400)] border-l border-[var(--color-navy-700)] pl-3">
                            <Users className="size-3.5" /> {(featured as { speakers?: string }).speakers}
                          </span>
                        </div>
                        {(featured as { stat?: string }).stat && (
                          <span className="shrink-0 rounded-full border border-[var(--color-green-400)] bg-[var(--color-green-500)]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-green-400)]">
                            {(featured as { stat?: string }).stat}
                          </span>
                        )}
                      </div>

                      <h2
                        className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl text-balance"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        {featured.title}
                      </h2>
                      <p className="mb-8 text-sm font-medium leading-relaxed text-[var(--color-gray-400)] max-w-2xl">
                        {featured.description}
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-green-500)] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)] transition-all shadow-sm group-hover:bg-[var(--color-green-400)] group-hover:shadow-md group-hover:-translate-y-0.5">
                        <PlayCircle className="size-5" />
                        Watch Now — Free
                      </div>
                    </div>
                  </Link>
                </div>

                {/* All Webinars */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)] rounded-sm" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      All Sessions
                    </span>
                  </div>

                  <div className="grid gap-4">
                    {rest.map((w) => {
                      const topicStyle = TOPIC_COLORS[(w as { topic?: string }).topic ?? ""] ?? "bg-[var(--color-gray-100)] text-[var(--color-gray-700)] border-[var(--color-gray-200)]";
                      return (
                        <Link
                          key={w.title}
                          href={(w as { videoUrl?: string | null }).videoUrl ?? "/contact"}
                          className="group flex flex-col sm:flex-row sm:items-stretch gap-0 rounded-3xl border border-[var(--color-gray-200)] bg-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-green-400)] overflow-hidden"
                        >
                          <div className="flex-1 p-6 md:p-8">
                            <div className="mb-4 flex flex-wrap items-center gap-2">
                              <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${topicStyle}`}>
                                {(w as { topic?: string }).topic}
                              </span>
                              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-500)] transition-colors">
                                <Clock className="size-3.5" /> {w.duration}
                              </span>
                              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-500)] transition-colors">
                                <Calendar className="size-3.5" /> {w.date}
                              </span>
                              {(w as { stat?: string }).stat && (
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-green-600)] group-hover:text-[var(--color-green-500)] transition-colors ml-auto sm:ml-2">
                                  {(w as { stat?: string }).stat}
                                </span>
                              )}
                            </div>
                            <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-[var(--color-navy-950)] transition-colors leading-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                              {w.title}
                            </h3>
                            <p className="text-sm font-medium leading-relaxed text-[var(--color-gray-500)] transition-colors line-clamp-2 sm:line-clamp-none">
                              {w.description}
                            </p>
                          </div>
                          
                          <div className="flex sm:flex-col items-center justify-center gap-3 p-6 bg-[var(--color-gray-50)] transition-colors group-hover:bg-[var(--color-green-50)] border-t sm:border-t-0 sm:border-l border-[var(--color-gray-100)] w-full sm:w-24 shrink-0">
                            <PlayCircle className="size-8 text-[var(--color-gray-400)] group-hover:text-[var(--color-green-600)] transition-colors sm:block" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)] group-hover:text-[var(--color-green-700)] sm:hidden">Watch</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Inline CTA — Live session */}
                <div className="rounded-3xl border border-[var(--color-navy-100)] bg-[var(--color-navy-50)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-700)] mb-1">
                      Want it Live?
                    </p>
                    <h3
                      className="text-xl font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Book a Personalized Demo
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--color-gray-600)]">
                      15 minutes, your operation, your pain points — not a canned webinar.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group/cta shrink-0 inline-flex items-center gap-3 rounded-xl bg-[var(--color-navy-950)] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Book a Demo
                    <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 space-y-6">

                {/* CTA card */}
                <div className="rounded-3xl bg-[var(--color-navy-950)] p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute right-[-10%] top-[-10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_60%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <Zap className="mb-4 size-8 text-[var(--color-green-500)]" />
                    <h3
                      className="mb-2 text-2xl font-black uppercase tracking-tighter text-white leading-tight"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      See It For Your Operation
                    </h3>
                    <p className="mb-6 text-sm font-medium leading-relaxed text-[var(--color-gray-400)]">
                      Webinars show the concept. A live diagnostic shows your specific revenue gap and the fix — in 15 minutes.
                    </p>
                    <Link
                      href="/contact"
                      className="group/cta mb-3 flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-navy-950)] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)]"
                    >
                      Book a Demo
                      <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                    <Link
                      href="/roi-calculator"
                      className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-gray-300)] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-gray-400)] hover:text-white"
                    >
                      Try ROI Calculator
                      <ChevronRight className="size-4 transition-transform group-hover/cta2:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Related solutions */}
                <div className="rounded-3xl bg-white border border-[var(--color-gray-200)] p-8 shadow-sm">
                  <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    Relevant Solutions
                  </p>
                  <ul className="space-y-2">
                    {SIDEBAR_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)]" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="size-4 text-[var(--color-gray-300)] transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Guides cross-link */}
                <div className="rounded-3xl bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--color-green-500)]" />
                  <div className="pl-2">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)]">
                      Prefer to Read?
                    </p>
                    <h4
                      className="mb-3 text-lg font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Guides & Whitepapers
                    </h4>
                    <p className="mb-4 text-sm font-medium text-[var(--color-gray-600)]">
                      In-depth playbooks on field digitization, revenue recovery, predictive maintenance, and compliance.
                    </p>
                    <Link
                      href="/resources/guides"
                      className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] underline underline-offset-4 transition-colors hover:text-[var(--color-navy-700)]"
                    >
                      View All Guides
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Pull quote */}
                <div className="rounded-3xl border border-[var(--color-gray-200)] bg-[var(--color-navy-50)] p-8 relative shadow-sm">
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[var(--color-green-500)] shadow-sm">
                      <PlayCircle className="size-5 text-[var(--color-navy-950)]" />
                    </div>
                  </div>
                  <blockquote>
                    <p className="mb-6 text-sm font-medium italic leading-relaxed text-[var(--color-gray-700)]">
                      &ldquo;We watched the Revenue Leakage webinar as a finance team. By end of day, we had a project scoped to recover $600K in unbilled work.&rdquo;
                    </p>
                    <footer className="border-t border-[var(--color-navy-100)] pt-4">
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                        Director of Finance
                      </div>
                      <div className="text-xs font-medium text-[var(--color-gray-500)] mt-0.5">
                        Pipeline Services, BC
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
                  className="text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-5xl text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">Don&apos;t Watch.</span>
                  <br />
                  <span className="text-white">Do It.</span>
                </h2>
                <p className="mt-6 text-base font-medium leading-relaxed text-[var(--color-gray-400)]">
                  The fastest path from today&apos;s operational gaps to measurable results is a personalized 15-minute diagnostic — not another webinar.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-[380px]">
                <Link
                  href="/contact"
                  className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-6 py-5 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)]"
                >
                  <span>Book a 15-Min Diagnostic</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/resources/guides"
                  className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-gray-500)] hover:bg-[var(--color-navy-900)]"
                >
                  <span>Browse Guides</span>
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