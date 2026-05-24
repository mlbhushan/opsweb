import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

// ─── renderTitle helper ──────────────────────────────────────────────────────
/**
 * Renders a heading with brand-green highlights.
 * Words wrapped in **word** are rendered in green; rest defaults to navy.
 * Falls back to highlighting the last 1-2 words if no markers present.
 */
const renderTitle = (text: string) => {
  const baseColor = "text-[var(--color-navy-950)]";
  const greenColor = "text-[var(--color-green-500)]";

  if (text.includes("**")) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <span key={i} className={greenColor}>{part.slice(2, -2)}</span>;
          }
          return <span key={i} className={baseColor}>{part}</span>;
        })}
      </>
    );
  }

  // Fallback: highlight last 1-2 words
  const words = text.split(" ");
  if (words.length <= 1) return <span className={baseColor}>{text}</span>;
  const highlightCount = words.length >= 4 ? 2 : 1;
  const prefix = words.slice(0, words.length - highlightCount).join(" ");
  const highlight = words.slice(words.length - highlightCount).join(" ");
  return (
    <>
      <span className={baseColor}>{prefix}</span>{" "}
      <span className={greenColor}>{highlight}</span>
    </>
  );
};

// ─── Types ────────────────────────────────────────────────────────────────────

export type SolutionCategory = "pain" | "role" | "industry";

export type SolutionPageData = {
  // Meta
  bannerTitle: string;
  category: SolutionCategory;
  eyebrow: string;

  // Hero
  headlineGreen: string;    // first part (green)
  headlineNavy: string;     // second part (navy)
  tagline: string;

  // Stats bar (4 items)
  stats: { value: string; label: string }[];

  // Problem framing
  problem: {
    label: string;         // e.g. "The Problem"
    headline: string;
    body: string;
    bullets?: string[];
  };

  // Solution / How it works (3 steps)
  solution: {
    label: string;         // e.g. "How OpsFlo Helps"
    headline: string;
    steps: { icon?: LucideIcon; title: string; description: string }[];
  };

  // Outcomes checklist
  outcomes: {
    headline: string;
    items: string[];
  };

  // Sidebar
  sidebar: {
    ctaHeadline: string;
    ctaBody: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    relatedLinks: { label: string; href: string }[];
    quote?: { text: string; name: string; role: string };
  };

  // Bottom CTA band
  bottomCta: {
    headlineGreen: string;
    headlineNavy: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
};

// ─── Category labels & colors ─────────────────────────────────────────────────

const CATEGORY_META: Record<
  SolutionCategory,
  { label: string; sidebarGroup: string }
> = {
  pain: {
    label: "By Pain Point",
    sidebarGroup: "More Pain Solutions",
  },
  role: {
    label: "By Role",
    sidebarGroup: "Other Roles",
  },
  industry: {
    label: "By Industry",
    sidebarGroup: "Other Industries",
  },
};

// ─── Template ─────────────────────────────────────────────────────────────────

export function SolutionPage({ data }: { data: SolutionPageData }) {
  const catMeta = CATEGORY_META[data.category];

  return (
    <>
      <SiteHeader />
      <PageBanner title={data.bannerTitle} />

      <main className="flex-1 bg-white">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
          {/* Grid texture */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
          {/* Green glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--color-green-500)]/8 blur-[100px]" />

          <Container className="relative z-10 py-20 md:py-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Text */}
              <div className="lg:col-span-7">
                {/* Eyebrow pill */}
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                    {data.eyebrow}
                  </span>
                </div>

                {/* Dual-tone heading */}
                <h1
                  className="text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight text-[var(--color-navy-950)] leading-[1.05] mb-6 text-balance"
                >
                  <span className="text-[var(--color-green-500)]">{data.headlineGreen}</span>
                  <br className="hidden sm:block" />
                  <span>{data.headlineNavy}</span>
                </h1>

                <p className="mb-10 max-w-xl text-base md:text-lg font-medium leading-relaxed text-[var(--color-gray-600)]">
                  {data.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={data.sidebar.primaryCta.href}
                    className="group/btn inline-flex items-center justify-center bg-[var(--color-navy-950)] px-8 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    {data.sidebar.primaryCta.label}
                    <ArrowRight className="ml-3 size-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <Link
                    href="/platform"
                    className="group/btn inline-flex items-center justify-center border border-[var(--color-gray-200)] bg-white px-8 py-5 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)] transition-all duration-300 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]"
                  >
                    View Platform
                  </Link>
                </div>
              </div>

              {/* Bento stats */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {data.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col justify-end rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                      i === 0
                        ? "bg-[var(--color-navy-950)]"
                        : i === 1
                        ? "bg-[var(--color-green-500)]"
                        : i === 2
                        ? "bg-[var(--color-gray-50)] border border-[var(--color-gray-200)]"
                        : "bg-white border border-[var(--color-gray-200)]"
                    }`}
                  >
                    <div
                      className={`mb-2 font-black leading-none tracking-tighter text-4xl ${
                        i === 0
                          ? "text-[var(--color-green-500)]"
                          : "text-[var(--color-navy-950)]"
                      }`}
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest ${
                        i === 0 ? "text-[var(--color-gray-400)]" : "text-[var(--color-navy-800)]"
                      }`}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR ────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              {/* ── MAIN ── */}
              <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">

                {/* Problem */}
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                      {data.problem.label}
                    </span>
                  </div>

                  <h2
                    className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-[1.05] mb-6 text-balance"
                  >
                    {renderTitle(data.problem.headline)}
                  </h2>

                  <p className="text-lg leading-relaxed text-[var(--color-gray-600)] font-medium border-l-4 border-red-500/20 pl-6">
                    {data.problem.body}
                  </p>

                  {data.problem.bullets && data.problem.bullets.length > 0 && (
                    <ul className="mt-8 space-y-4">
                      {data.problem.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-4 text-base text-[var(--color-gray-700)] font-medium"
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400 shadow-sm" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* How it works */}
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                      {data.solution.label}
                    </span>
                  </div>

                  <h2
                    className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-[1.05] mb-10 text-balance"
                  >
                    {renderTitle(data.solution.headline)}
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-6">
                    {data.solution.steps.map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={step.title}
                          className="group rounded-3xl border border-[var(--color-gray-200)] bg-white p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-[var(--color-green-400)]"
                        >
                          <div className="mb-6 flex items-center gap-4">
                            <span
                              className="text-3xl font-black text-[var(--color-gray-200)] group-hover:text-[var(--color-green-500)] transition-colors leading-none"
                              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {Icon && (
                              <Icon className="size-6 text-[var(--color-navy-950)]" />
                            )}
                          </div>
                          <h3 className="mb-3 text-base font-bold uppercase tracking-wide text-[var(--color-navy-950)]">
                            {step.title}
                          </h3>
                          <p className="text-sm font-medium leading-relaxed text-[var(--color-gray-600)]">
                            {step.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                      Outcomes
                    </span>
                  </div>

                  <h2
                    className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-[1.05] mb-8 text-balance"
                  >
                    {renderTitle(data.outcomes.headline)}
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.outcomes.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-[var(--color-gray-200)] bg-white p-6 shadow-sm hover:shadow-md hover:border-[var(--color-green-400)] transition-all"
                      >
                        <CheckCircle2 className="size-6 shrink-0 text-[var(--color-green-500)]" />
                        <span className="text-sm font-semibold text-[var(--color-navy-900)] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6">

                {/* Related links */}
                <div className="rounded-3xl bg-white border border-[var(--color-gray-200)] p-8 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                      {catMeta.sidebarGroup}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {data.sidebar.relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)]" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="size-4 text-[var(--color-gray-300)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-navy-900)]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions nav quick link */}
                <div className="rounded-3xl bg-white border border-[var(--color-gray-200)] p-8 shadow-sm">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                    Explore All Solutions
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/solutions/revenue-leakage"
                      className="group flex items-center gap-3 text-sm font-semibold text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-4 text-[var(--color-green-500)] transition-transform group-hover:translate-x-1" />
                      Stop Revenue Leakage
                    </Link>
                    <Link
                      href="/solutions/prevent-downtime"
                      className="group flex items-center gap-3 text-sm font-semibold text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-4 text-[var(--color-green-500)] transition-transform group-hover:translate-x-1" />
                      Prevent Unplanned Downtime
                    </Link>
                    <Link
                      href="/solutions/faster-billing"
                      className="group flex items-center gap-3 text-sm font-semibold text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-4 text-[var(--color-green-500)] transition-transform group-hover:translate-x-1" />
                      Accelerate Billing Cycles
                    </Link>
                    <Link
                      href="/solutions/oilfield-services"
                      className="group flex items-center gap-3 text-sm font-semibold text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-4 text-[var(--color-green-500)] transition-transform group-hover:translate-x-1" />
                      Oilfield Services
                    </Link>
                  </div>
                </div>

                {/* CTA card - Sticky */}
                <div className="lg:sticky lg:top-[25vh] rounded-3xl bg-[var(--color-navy-950)] p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute right-[-10%] top-[-10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_60%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <Zap className="mb-4 size-8 text-[var(--color-green-500)]" />
                    <h3
                      className="mb-2 text-2xl font-black uppercase tracking-tighter text-white leading-tight"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {data.sidebar.ctaHeadline}
                    </h3>
                    <p className="mb-8 text-sm font-medium leading-relaxed text-[var(--color-gray-300)]">
                      {data.sidebar.ctaBody}
                    </p>
                    <Link
                      href={data.sidebar.primaryCta.href}
                      className="group/cta mb-3 flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-navy-950)] transition-all hover:bg-[var(--color-green-400)] shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      {data.sidebar.primaryCta.label}
                      <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                    <Link
                      href={data.sidebar.secondaryCta.href}
                      className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[var(--color-gray-400)] hover:bg-[var(--color-navy-900)] shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      {data.sidebar.secondaryCta.label}
                      <ChevronRight className="size-4 transition-transform group-hover/cta2:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </aside>
            </div>
          </Container>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-[var(--color-gray-200)] bg-[var(--color-gray-50)] py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">

              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                    Ready to Start
                  </span>
                </div>
                <h2
                  className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-[1.05] mb-8 text-balance"
                >
                  <span className="text-[var(--color-green-500)]">{data.bottomCta.headlineGreen}</span>
                  <br className="hidden sm:block" />
                  <span className="text-[var(--color-navy-950)]">{data.bottomCta.headlineNavy}</span>
                </h2>
                <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[var(--color-gray-600)]">
                  {data.bottomCta.body}
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 lg:w-[380px] lg:pl-12">
                <Link
                  href={data.bottomCta.primaryCta.href}
                  className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                >
                  <span>{data.bottomCta.primaryCta.label}</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href={data.bottomCta.secondaryCta.href}
                  className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-gray-200)] bg-white px-6 py-5 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]"
                >
                  <span>{data.bottomCta.secondaryCta.label}</span>
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
