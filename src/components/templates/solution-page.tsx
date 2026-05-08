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
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-800)]/15 bg-white px-4 py-2 shadow-[var(--shadow-xs)]">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    {data.eyebrow}
                  </span>
                </div>

                {/* Dual-tone heading */}
                <h1
                  className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-tighter"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">{data.headlineGreen}</span>
                  <br />
                  <span className="text-[var(--color-navy-950)]">{data.headlineNavy}</span>
                </h1>

                <p className="mb-10 max-w-xl text-base md:text-lg font-light leading-relaxed text-[var(--color-gray-600)]">
                  {data.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={data.sidebar.primaryCta.href}
                    className="group inline-flex items-center justify-between bg-[var(--color-navy-950)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    {data.sidebar.primaryCta.label}
                    <ArrowRight className="ml-3 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/platform"
                    className="group inline-flex items-center justify-center border-2 border-[var(--color-gray-200)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-navy-950)] transition-all hover:border-[var(--color-navy-950)]"
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
                    className={`flex flex-col justify-end border-2 border-[var(--color-navy-950)] p-6 ${
                      i === 0
                        ? "bg-[var(--color-navy-950)]"
                        : i === 1
                        ? "bg-[var(--color-green-500)]"
                        : i === 2
                        ? "bg-[var(--color-gray-50)]"
                        : "bg-white"
                    }`}
                  >
                    <div
                      className={`mb-1 font-black leading-none tracking-tighter text-4xl ${
                        i === 0
                          ? "text-[var(--color-green-500)]"
                          : "text-[var(--color-navy-950)]"
                      }`}
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
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
              <div className="lg:col-span-8 space-y-20">

                {/* Problem */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-red-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      {data.problem.label}
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <h2
                    className="mb-6 text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    {data.problem.headline}
                  </h2>

                  <p className="text-base leading-relaxed text-[var(--color-gray-600)] font-light border-l-4 border-[var(--color-gray-200)] pl-6">
                    {data.problem.body}
                  </p>

                  {data.problem.bullets && data.problem.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {data.problem.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-[var(--color-gray-600)] font-light"
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* How it works */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      {data.solution.label}
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <h2
                    className="mb-10 text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    {data.solution.headline}
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-0 border-t-2 border-l-2 border-[var(--color-navy-950)]">
                    {data.solution.steps.map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={step.title}
                          className="group border-r-2 border-b-2 border-[var(--color-navy-950)] p-8 transition-colors duration-300 hover:bg-[var(--color-navy-950)]"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <span
                              className="text-3xl font-black text-[var(--color-gray-200)] group-hover:text-[var(--color-navy-800)] transition-colors leading-none"
                              style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {Icon && (
                              <Icon className="size-5 text-[var(--color-green-600)] group-hover:text-[var(--color-green-400)] transition-colors" />
                            )}
                          </div>
                          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-900)] group-hover:text-white transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm font-light leading-relaxed text-[var(--color-gray-500)] group-hover:text-[var(--color-gray-300)] transition-colors">
                            {step.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Outcomes
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <h2
                    className="mb-8 text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    {data.outcomes.headline}
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.outcomes.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 border border-[var(--color-gray-200)] bg-white p-5 hover:border-[var(--color-green-400)] transition-colors"
                      >
                        <CheckCircle2 className="size-5 shrink-0 text-[var(--color-green-500)] mt-0.5" />
                        <span className="text-sm font-medium text-[var(--color-navy-900)] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
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
                    {data.sidebar.ctaHeadline}
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-[var(--color-gray-400)]">
                    {data.sidebar.ctaBody}
                  </p>
                  <Link
                    href={data.sidebar.primaryCta.href}
                    className="group mb-2 flex w-full items-center justify-between bg-[var(--color-green-500)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                  >
                    {data.sidebar.primaryCta.label}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={data.sidebar.secondaryCta.href}
                    className="group flex w-full items-center justify-between border border-[var(--color-navy-700)] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-gray-300)] transition-colors hover:border-[var(--color-gray-400)] hover:text-white"
                  >
                    {data.sidebar.secondaryCta.label}
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Related links */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8 shadow-[var(--shadow-sm)]">
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

                {/* Quote */}
                {data.sidebar.quote && (
                  <div className="border-l-4 border-[var(--color-green-500)] bg-[var(--color-green-50)] p-8">
                    <blockquote>
                      <p className="mb-4 text-sm font-light italic leading-relaxed text-[var(--color-gray-700)]">
                        &ldquo;{data.sidebar.quote.text}&rdquo;
                      </p>
                      <footer>
                        <div className="text-xs font-bold uppercase tracking-wide text-[var(--color-navy-900)]">
                          {data.sidebar.quote.name}
                        </div>
                        <div className="text-xs text-[var(--color-gray-500)]">
                          {data.sidebar.quote.role}
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                )}

                {/* Solutions nav quick link */}
                <div className="bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] p-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                    Explore All Solutions
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/solutions/revenue-leakage"
                      className="group flex items-center gap-2 text-sm font-medium text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-3.5 text-[var(--color-green-500)]" />
                      Stop Revenue Leakage
                    </Link>
                    <Link
                      href="/solutions/prevent-downtime"
                      className="group flex items-center gap-2 text-sm font-medium text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-3.5 text-[var(--color-green-500)]" />
                      Prevent Unplanned Downtime
                    </Link>
                    <Link
                      href="/solutions/faster-billing"
                      className="group flex items-center gap-2 text-sm font-medium text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-3.5 text-[var(--color-green-500)]" />
                      Accelerate Billing Cycles
                    </Link>
                    <Link
                      href="/solutions/oilfield-services"
                      className="group flex items-center gap-2 text-sm font-medium text-[var(--color-gray-600)] hover:text-[var(--color-navy-900)] transition-colors"
                    >
                      <ChevronRight className="size-3.5 text-[var(--color-green-500)]" />
                      Oilfield Services
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
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-200)] bg-white px-4 py-2 shadow-sm">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    Ready to Start
                  </span>
                </div>
                <h2
                  className="text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-6xl"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">{data.bottomCta.headlineGreen}</span>
                  <br />
                  <span className="text-[var(--color-navy-950)]">{data.bottomCta.headlineNavy}</span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-gray-600)]">
                  {data.bottomCta.body}
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 lg:w-[380px] lg:border-l-2 lg:border-[var(--color-navy-900)] lg:pl-12">
                <Link
                  href={data.bottomCta.primaryCta.href}
                  className="group flex w-full items-center justify-between bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                >
                  <span>{data.bottomCta.primaryCta.label}</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href={data.bottomCta.secondaryCta.href}
                  className="group flex w-full items-center justify-between border-2 border-[var(--color-navy-200)] bg-white px-6 py-5 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] transition-all duration-300 hover:border-[var(--color-navy-950)]"
                >
                  <span>{data.bottomCta.secondaryCta.label}</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
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
