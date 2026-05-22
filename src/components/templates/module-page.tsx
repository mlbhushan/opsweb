import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Zap,
  Shield,
  Target,
  AlertTriangle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type ModulePageData = {
  bannerTitle?: string;
  eyebrow: string;
  headline: string;
  subheadline?: string;
  body: string;
  heroImage?: string;
  problemImage?: string;
  solutionImage?: string;
  accentColor?: string;
  problem: { headline: string; points: string[] };
  howItWorks: { headline: string; steps: { title: string; description: string }[] };
  capabilities: string[];
  differentiator?: { headline: string; body: string };
  stats?: { value: string; label: string }[];
  relatedModules?: { title: string; href: string; description: string }[];
};

const ALL_MODULES = [
  { title: "Field Ticketing", href: "/platform/field-ticketing" },
  { title: "Invoicing & Billing", href: "/platform/invoicing" },
  { title: "Field Execution", href: "/platform/field-execution" },
  { title: "Scheduling & Dispatch", href: "/platform/scheduling" },
  { title: "Inspections & Checklists", href: "/platform/inspections" },
  { title: "Work Order Automation", href: "/platform/work-orders" },
  { title: "Predictive Maintenance", href: "/platform/predictive-maintenance" },
  { title: "AI Decision Engine", href: "/platform/ai" },
  { title: "Analytics & Reporting", href: "/platform/analytics" },
  { title: "Asset Intelligence", href: "/platform/asset-intelligence" },
  { title: "Inventory & Parts", href: "/platform/inventory" },
  { title: "Safety Management", href: "/platform/safety" },
  { title: "Compliance & Audit", href: "/platform/compliance" },
  { title: "Carbon & Climate", href: "/platform/carbon" },
  { title: "Offline-First Architecture", href: "/platform/offline" },
  { title: "Mobile App", href: "/platform/mobile" },
];

const renderDualColor = (text: string, isDark = false) => {
  const words = text.split(" ");
  if (words.length <= 1) return <span className={isDark ? "text-white" : "text-[var(--color-navy-950)]"}>{text}</span>;
  const highlightCount = words.length >= 4 ? 2 : 1;
  const prefix = words.slice(0, words.length - highlightCount).join(" ");
  const highlight = words.slice(words.length - highlightCount).join(" ");
  return (
    <>
      <span className={isDark ? "text-white" : "text-[var(--color-navy-950)]"}>{prefix}</span>{" "}
      <span className="text-[var(--color-green-500)]">{highlight}</span>
    </>
  );
};

export function ModulePage({ data }: { data: ModulePageData }) {
  const defaultStats = data.stats ?? [
    { value: "45→4", label: "Day billing cycle reduced to hours" },
    { value: "3-8%", label: "Revenue leakage eliminated" },
    { value: "99.9%", label: "System uptime reliability" },
  ];

  const defaultProblemImage = data.problemImage ?? "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
  const defaultSolutionImage = data.solutionImage ?? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80";
  const defaultHeroImage = data.heroImage ?? "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80";

  return (
    <>
      <SiteHeader />
      {data.bannerTitle && <PageBanner title={data.bannerTitle} />}
      <main className="flex-1 bg-white">

        {/* ── HERO BAND (Swiss + Brutalism) ── */}
        <section className="relative overflow-hidden border-b-2 border-[var(--color-navy-950)] bg-[var(--color-gray-50)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
          
          <Container className="relative z-10 py-20 md:py-32">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left: Text Block */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="mb-8 inline-flex items-center gap-3 self-start rounded-full border border-[var(--color-navy-200)] px-5 py-2 bg-white shadow-sm">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    {data.eyebrow}
                  </span>
                </div>

                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {renderDualColor(data.headline)}
                </h1>

                {data.subheadline && (
                  <p className="text-xl md:text-2xl font-bold text-[var(--color-navy-800)] mb-6 leading-snug">
                    {data.subheadline}
                  </p>
                )}

                <p className="text-lg md:text-xl text-[var(--color-gray-700)] leading-relaxed font-medium mb-12 max-w-xl">
                  {data.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group/btn inline-flex items-center justify-center bg-[var(--color-navy-950)] text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Start a Pilot
                    <ArrowRight className="size-5 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/roi-calculator"
                    className="group/btn inline-flex items-center justify-center bg-white border border-[var(--color-gray-200)] text-[var(--color-navy-950)] px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]"
                  >
                    Calculate ROI
                  </Link>
                </div>
              </div>

              {/* Right: Hero image */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[var(--color-gray-200)] shadow-xl bg-[var(--color-navy-950)] group">
                  <Image
                    src={defaultHeroImage}
                    alt={data.headline}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--color-navy-950)]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR GRID ── */}
        <section className="py-16 md:py-20 bg-white relative">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              {/* ── MAIN CONTENT COLUMN ── */}
              <div className="lg:col-span-8 space-y-24">

                {/* PROBLEM Section */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <AlertTriangle className="size-6 text-red-500 shrink-0" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                      The Problem
                    </h3>
                    <div className="h-0.5 flex-1 bg-[var(--color-navy-950)]" />
                  </div>

                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-12 text-balance"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {renderDualColor(data.problem.headline)}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="space-y-4">
                      {data.problem.points.map((point, i) => (
                        <div
                          key={i}
                          className="group flex gap-4 p-5 rounded-2xl bg-[var(--color-gray-50)] hover:bg-white border border-transparent hover:border-[var(--color-gray-200)] hover:shadow-sm transition-all duration-300"
                        >
                          <div className="shrink-0 mt-1 size-2 rounded-full bg-red-400 group-hover:bg-red-500 transition-colors" />
                          <p className="text-base text-[var(--color-navy-800)] leading-relaxed font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="relative aspect-square md:aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--color-gray-200)] shadow-sm group">
                      <Image 
                        src={defaultProblemImage}
                        alt="The Problem"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* HOW IT WORKS Section */}
                <div className="bg-[var(--color-navy-950)] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--color-green-500)]/15 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <Target className="size-6 text-[var(--color-green-500)] shrink-0" />
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-gray-300)]">
                        The Solution
                      </h3>
                      <div className="h-px flex-1 bg-[var(--color-gray-700)]" />
                    </div>

                    <h2
                      className="text-4xl md:text-5xl font-black uppercase leading-[1] tracking-tighter mb-12 text-balance"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {renderDualColor(data.howItWorks.headline, true)}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="space-y-8">
                        {data.howItWorks.steps.map((step, i) => (
                          <div key={step.title} className="group flex gap-5">
                            <div className="flex items-center justify-center size-10 shrink-0 rounded-full bg-white/10 text-[var(--color-green-500)] font-bold text-lg group-hover:bg-[var(--color-green-500)] group-hover:text-[var(--color-navy-950)] transition-colors duration-300">
                              {i + 1}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold tracking-wide text-white mb-2">
                                {step.title}
                              </h3>
                              <p className="text-sm leading-relaxed text-[var(--color-gray-400)] font-medium">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="relative h-full min-h-[300px] rounded-2xl bg-[var(--color-navy-900)] overflow-hidden shadow-inner group">
                        <Image 
                          src={defaultSolutionImage}
                          alt="The Solution"
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CAPABILITIES Section */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <Zap className="size-6 text-[var(--color-navy-950)] shrink-0" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                      Key Capabilities
                    </h3>
                    <div className="h-0.5 flex-1 bg-[var(--color-navy-950)]" />
                  </div>

                  <h2
                    className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter mb-12"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {renderDualColor("Built for Operators")}
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[var(--color-gray-200)] hover:border-[var(--color-gray-300)] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                      >
                        <CheckCircle2 className="size-5 shrink-0 mt-0.5 text-[var(--color-green-500)]" />
                        <span className="text-base text-[var(--color-navy-950)] font-semibold leading-tight">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIFFERENTIATOR Banner */}
                {data.differentiator && (
                  <div className="bg-[var(--color-gray-50)] rounded-3xl border border-[var(--color-gray-200)] p-8 md:p-12 shadow-sm">
                    <div className="mb-6 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-[var(--color-gray-200)] shadow-sm">
                      <Shield className="size-4 text-[var(--color-navy-950)]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                        The OpsFlo Advantage
                      </span>
                    </div>
                    <h3
                      className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1] tracking-tighter text-[var(--color-navy-950)] mb-6 text-balance"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {renderDualColor(data.differentiator.headline)}
                    </h3>
                    <p className="text-lg text-[var(--color-gray-600)] font-medium leading-relaxed max-w-2xl">
                      {data.differentiator.body}
                    </p>
                  </div>
                )}

              </div>

              {/* ── SIDEBAR COLUMN ── */}
              <aside className="lg:col-span-4 space-y-10">

                {/* CTA Card - Primary */}
                <div className="bg-[var(--color-navy-950)] rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute right-[-20px] top-[-20px] text-[var(--color-green-500)]/10 group-hover:scale-110 transition-transform duration-700">
                    <Zap className="size-32" />
                  </div>
                  <div className="relative z-10 mb-8">
                    <h3
                      className="text-2xl font-black uppercase tracking-tighter text-white leading-[1] mb-3"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      See It <span className="text-[var(--color-green-500)]">in Action</span>
                    </h3>
                    <p className="text-sm text-[var(--color-gray-300)] leading-relaxed font-medium">
                      Get a live walkthrough tailored to your operations. No generic demos.
                    </p>
                  </div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="group/btn flex items-center justify-between w-full bg-[var(--color-green-500)] text-[var(--color-navy-950)] px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all hover:bg-[var(--color-green-400)] shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      Get a Diagnostic
                      <ArrowRight className="size-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="group/btn flex items-center justify-between w-full bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all hover:bg-white hover:text-[var(--color-navy-950)] shadow-sm hover:-translate-y-0.5"
                    >
                      Talk to Sales
                      <ChevronRight className="size-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Key Stats sidebar card */}
                <div className="bg-white rounded-3xl border border-[var(--color-gray-200)] p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-gray-100)]">
                    <BarChart3 className="size-5 text-[var(--color-green-500)]" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                      Why It Matters
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {defaultStats.map((s, i) => (
                      <div key={i} className="group">
                        <div
                          className="text-3xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none mb-1 group-hover:text-[var(--color-green-500)] transition-colors"
                          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                          {s.value}
                        </div>
                        <p className="text-xs font-semibold text-[var(--color-gray-500)] uppercase tracking-wide leading-snug">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Modules Sidebar */}
                <div className="bg-[var(--color-gray-50)] rounded-3xl border border-[var(--color-gray-200)] p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-gray-200)]">
                    <Shield className="size-5 text-[var(--color-navy-950)]" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                      Platform Modules
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {ALL_MODULES.map((mod) => {
                      const isCurrent =
                        mod.title === data.bannerTitle ||
                        mod.href.includes(data.eyebrow.split(" / ")[1]?.toLowerCase().replace(/\s+/g, "-") ?? "__");
                      return (
                         <li key={mod.href}>
                          <Link
                            href={mod.href}
                            className={`group flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                              isCurrent
                                ? "bg-[var(--color-navy-950)] text-white shadow-md"
                                : "bg-transparent text-[var(--color-gray-600)] hover:bg-white hover:shadow-sm hover:text-[var(--color-navy-950)]"
                            }`}
                          >
                            <span>{mod.title}</span>
                            <ChevronRight
                              className={`size-3.5 transition-transform group-hover:translate-x-0.5 ${
                                isCurrent ? "text-[var(--color-green-500)]" : "text-[var(--color-gray-400)] group-hover:text-[var(--color-navy-950)]"
                              }`}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-[var(--color-gray-200)]">
                    <Link
                      href="/platform/all-modules"
                      className="group flex items-center justify-between w-full text-sm font-black text-[var(--color-navy-950)] uppercase tracking-widest hover:text-[var(--color-green-600)] transition-colors"
                    >
                      All Modules
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Testimonial stub */}
                <div className="bg-white rounded-3xl border border-[var(--color-gray-200)] p-8 shadow-sm relative overflow-hidden group">
                  <div className="absolute -right-4 -top-8 text-[var(--color-gray-100)] text-[120px] leading-none font-serif select-none pointer-events-none group-hover:text-[var(--color-green-50)] transition-colors duration-500">
                    &ldquo;
                  </div>
                  <blockquote className="relative z-10">
                    <p className="text-base font-semibold text-[var(--color-navy-900)] leading-relaxed mb-6">
                      "OpsFlo cut our billing cycle from 45 days to under 4 hours. That is not a typo. We stopped leaving money on the table."
                    </p>
                    <footer className="flex items-center gap-4 pt-4 border-t border-[var(--color-gray-100)]">
                      <div className="size-10 bg-[var(--color-green-100)] rounded-full flex items-center justify-center text-[var(--color-green-600)] font-bold text-sm shrink-0">
                        FO
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy-950)]">Field Ops VP</div>
                        <div className="text-[11px] font-semibold text-[var(--color-gray-500)] uppercase">Mid-size Oilfield Services</div>
                      </div>
                    </footer>
                  </blockquote>
                </div>

              </aside>
            </div>
          </Container>
        </section>

        {/* ── BOTTOM CTA BAND (Editorial Swiss, Light Mode) ── */}
        <section className="bg-[var(--color-gray-50)] text-[var(--color-navy-950)] py-20 md:py-24 relative overflow-hidden border-t border-[var(--color-gray-200)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-3xl">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] px-5 py-2 shadow-sm bg-white">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-950)] uppercase">Ready to Start</span>
                </div>
                <h2
                  className="text-4xl md:text-6xl font-black uppercase leading-[1] tracking-tighter text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">Stop Guessing.</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Start Building.</span>
                </h2>
                <p className="mt-6 text-lg text-[var(--color-gray-600)] font-medium leading-relaxed max-w-2xl">
                  OpsFlo is the single source of truth for industrial operators. Stop losing revenue to disconnected field data.
                </p>
              </div>

              <div className="w-full lg:w-[380px] flex flex-col gap-3 relative z-20">
                <Link
                  href="/contact"
                  className="group/btn flex items-center justify-between w-full bg-[var(--color-navy-950)] text-white px-6 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Get a Diagnostic</span>
                  <ArrowRight className="size-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group/btn flex items-center justify-between w-full bg-white border border-[var(--color-gray-200)] text-[var(--color-navy-950)] px-6 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="size-5 group-hover/btn:translate-x-1 transition-transform" />
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
