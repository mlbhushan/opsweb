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
                <div className="mb-8 inline-flex items-center gap-2 self-start rounded-full border-2 border-[var(--color-navy-950)] px-4 py-2 bg-white shadow-[4px_4px_0px_0px_var(--color-green-500)]">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    {data.eyebrow}
                  </span>
                </div>

                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-balance"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center bg-[var(--color-navy-950)] text-white px-8 py-5 font-bold uppercase tracking-widest text-sm transition-all border-2 border-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-green-500)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--color-green-500)]"
                  >
                    Start a Pilot
                    <ArrowRight className="size-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/roi-calculator"
                    className="group inline-flex items-center justify-center bg-white text-[var(--color-navy-950)] px-8 py-5 font-bold uppercase tracking-widest text-sm transition-all border-2 border-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-navy-950)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--color-navy-950)]"
                  >
                    Calculate ROI
                  </Link>
                </div>
              </div>

              {/* Right: Hero image */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden border-4 border-[var(--color-navy-950)] shadow-[12px_12px_0px_0px_var(--color-green-500)] bg-[var(--color-navy-950)] group">
                  <Image
                    src={defaultHeroImage}
                    alt={data.headline}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[var(--color-navy-950)]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR GRID ── */}
        <section className="py-20 md:py-32 bg-white relative">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

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
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    {renderDualColor(data.problem.headline)}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="space-y-0 border-l-4 border-[var(--color-navy-950)] pl-6 md:pl-8">
                      {data.problem.points.map((point, i) => (
                        <div
                          key={i}
                          className="group relative py-6 border-b border-[var(--color-gray-200)] last:border-0"
                        >
                          <div className="absolute left-[-38px] md:left-[-46px] top-1/2 -translate-y-1/2 size-4 bg-white border-4 border-red-500 group-hover:bg-red-500 transition-colors" />
                          <p className="text-lg text-[var(--color-navy-800)] leading-relaxed font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="relative aspect-square md:aspect-[3/4] overflow-hidden border-2 border-[var(--color-navy-950)] shadow-[8px_8px_0px_0px_var(--color-navy-950)] group">
                      <Image 
                        src={defaultProblemImage}
                        alt="The Problem"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* HOW IT WORKS Section */}
                <div className="bg-[var(--color-navy-950)] text-white p-8 md:p-12 border-2 border-[var(--color-navy-950)] shadow-[12px_12px_0px_0px_var(--color-green-500)] relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--color-green-500)]/10 blur-[60px] rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                      <Target className="size-6 text-[var(--color-green-500)] shrink-0" />
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-gray-300)]">
                        The Solution
                      </h3>
                      <div className="h-px flex-1 bg-[var(--color-gray-700)]" />
                    </div>

                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-16 text-balance"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      {renderDualColor(data.howItWorks.headline, true)}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="space-y-10">
                        {data.howItWorks.steps.map((step, i) => (
                          <div key={step.title} className="group relative pl-12">
                            <div
                              className="absolute left-0 top-0 text-5xl font-black tracking-tighter text-[var(--color-navy-800)] group-hover:text-[var(--color-green-500)] transition-colors duration-300 leading-none"
                              style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                            >
                              {i + 1}
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3 pt-1">
                              {step.title}
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-gray-400)] font-medium">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="relative h-full min-h-[300px] border-2 border-[var(--color-navy-800)] bg-[var(--color-navy-900)] overflow-hidden group">
                        <Image 
                          src={defaultSolutionImage}
                          alt="The Solution"
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
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
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    {renderDualColor("Built for Operators")}
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="group flex items-start gap-4 p-6 border-2 border-[var(--color-navy-950)] bg-[var(--color-gray-50)] hover:bg-[var(--color-green-500)] hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0px_0px_var(--color-navy-950)]"
                      >
                        <CheckCircle2 className="size-6 shrink-0 text-[var(--color-navy-950)]" />
                        <span className="text-lg text-[var(--color-navy-950)] font-bold uppercase tracking-tight leading-tight">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIFFERENTIATOR Banner */}
                {data.differentiator && (
                  <div className="bg-[var(--color-gray-100)] border-2 border-[var(--color-navy-950)] p-10 md:p-14 shadow-[8px_8px_0px_0px_var(--color-green-500)]">
                    <div className="mb-6 inline-flex items-center gap-3">
                      <Shield className="size-5 text-[var(--color-navy-950)]" />
                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                        The OpsFlo Advantage
                      </span>
                    </div>
                    <h3
                      className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[var(--color-navy-950)] mb-6 text-balance"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      {renderDualColor(data.differentiator.headline)}
                    </h3>
                    <p className="text-xl text-[var(--color-gray-700)] font-medium leading-relaxed max-w-2xl">
                      {data.differentiator.body}
                    </p>
                  </div>
                )}

              </div>

              {/* ── SIDEBAR COLUMN ── */}
              <aside className="lg:col-span-4 space-y-10">

                {/* CTA Card - Primary */}
                <div className="bg-[var(--color-navy-950)] p-8 border-2 border-[var(--color-navy-950)] shadow-[8px_8px_0px_0px_var(--color-green-500)] relative overflow-hidden">
                  <div className="absolute right-[-20px] top-[-20px] text-[var(--color-green-500)]/20">
                    <Zap className="size-32" />
                  </div>
                  <div className="relative z-10 mb-8">
                    <h3
                      className="text-3xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      See It <br/><span className="text-[var(--color-green-500)]">in Action</span>
                    </h3>
                    <p className="text-base text-[var(--color-gray-300)] leading-relaxed font-medium">
                      Get a live walkthrough tailored to your operations. No generic demos.
                    </p>
                  </div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="group flex items-center justify-between w-full bg-[var(--color-green-500)] text-[var(--color-navy-950)] px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all hover:bg-[var(--color-green-400)] border-2 border-transparent hover:border-[var(--color-navy-950)]"
                    >
                      Get a Diagnostic
                      <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="group flex items-center justify-between w-full bg-transparent border-2 border-[var(--color-gray-500)] text-white px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all hover:border-white hover:bg-white hover:text-[var(--color-navy-950)]"
                    >
                      Talk to Sales
                      <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Key Stats sidebar card */}
                <div className="bg-white border-2 border-[var(--color-navy-950)] p-8 shadow-[8px_8px_0px_0px_var(--color-gray-200)]">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[var(--color-navy-950)]">
                    <BarChart3 className="size-6 text-[var(--color-green-500)]" />
                    <h3 className="text-base font-black uppercase tracking-widest text-[var(--color-navy-950)]">
                      Why It Matters
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {defaultStats.map((s, i) => (
                      <div key={i} className="group">
                        <div
                          className="text-4xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none mb-2 group-hover:text-[var(--color-green-500)] transition-colors"
                          style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                        >
                          {s.value}
                        </div>
                        <p className="text-sm font-bold text-[var(--color-gray-600)] uppercase tracking-tight leading-snug">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Modules Sidebar */}
                <div className="bg-white border-2 border-[var(--color-navy-950)] p-8 shadow-[8px_8px_0px_0px_var(--color-gray-200)]">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[var(--color-navy-950)]">
                    <Shield className="size-6 text-[var(--color-navy-950)]" />
                    <h3 className="text-base font-black uppercase tracking-widest text-[var(--color-navy-950)]">
                      Platform Modules
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {ALL_MODULES.map((mod) => {
                      const isCurrent =
                        mod.title === data.bannerTitle ||
                        mod.href.includes(data.eyebrow.split(" / ")[1]?.toLowerCase().replace(/\s+/g, "-") ?? "__");
                      return (
                        <li key={mod.href}>
                          <Link
                            href={mod.href}
                            className={`group flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 border-2 ${
                              isCurrent
                                ? "bg-[var(--color-navy-950)] border-[var(--color-navy-950)] text-[var(--color-green-500)] shadow-[4px_4px_0px_0px_var(--color-green-500)]"
                                : "bg-white border-transparent text-[var(--color-navy-800)] hover:border-[var(--color-navy-950)] hover:shadow-[4px_4px_0px_0px_var(--color-green-500)]"
                            }`}
                          >
                            <span>{mod.title}</span>
                            <ChevronRight
                              className={`size-4 transition-transform group-hover:translate-x-1 ${
                                isCurrent ? "text-[var(--color-green-500)]" : "text-[var(--color-navy-950)]"
                              }`}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-8 pt-6 border-t-2 border-[var(--color-navy-950)]">
                    <Link
                      href="/platform/all-modules"
                      className="group flex items-center justify-between w-full text-base font-black text-[var(--color-navy-950)] uppercase tracking-widest hover:text-[var(--color-green-600)] transition-colors"
                    >
                      All Modules
                      <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Testimonial stub */}
                <div className="bg-[var(--color-gray-50)] border-2 border-[var(--color-navy-950)] p-8 shadow-[8px_8px_0px_0px_var(--color-navy-950)]">
                  <div className="mb-6">
                    <span className="text-[var(--color-green-500)] text-6xl leading-none font-serif">&ldquo;</span>
                  </div>
                  <blockquote className="mt-[-30px]">
                    <p className="text-lg font-bold text-[var(--color-navy-900)] leading-snug mb-6 uppercase tracking-tight">
                      OpsFlo cut our billing cycle from 45 days to under 4 hours. That is not a typo. We stopped leaving money on the table.
                    </p>
                    <footer className="flex items-center gap-4">
                      <div className="size-12 bg-[var(--color-navy-950)] rounded-full flex items-center justify-center text-white font-bold">
                        FO
                      </div>
                      <div>
                        <div className="text-sm font-black uppercase tracking-wider text-[var(--color-navy-950)]">Field Ops VP</div>
                        <div className="text-xs font-bold text-[var(--color-gray-500)] uppercase">Mid-size Oilfield Services</div>
                      </div>
                    </footer>
                  </blockquote>
                </div>

              </aside>
            </div>
          </Container>
        </section>

        {/* ── BOTTOM CTA BAND (Editorial Swiss, Light Mode) ── */}
        <section className="bg-white text-[var(--color-navy-950)] py-24 md:py-32 relative overflow-hidden border-t-[12px] border-[var(--color-navy-950)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
              <div className="max-w-4xl">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-[var(--color-navy-950)] px-5 py-2 shadow-[4px_4px_0px_0px_var(--color-navy-950)] bg-white">
                  <span className="flex size-3 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-sm font-black tracking-widest text-[var(--color-navy-950)] uppercase">Ready to Start</span>
                </div>
                <h2
                  className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-balance"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">Stop Guessing.</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Start Building.</span>
                </h2>
                <p className="mt-8 text-xl text-[var(--color-gray-600)] font-medium leading-relaxed max-w-2xl">
                  OpsFlo is the single source of truth for industrial operators. Stop losing revenue to disconnected field data.
                </p>
              </div>

              <div className="w-full lg:w-[400px] flex flex-col gap-4 relative z-20">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between w-full bg-[var(--color-green-500)] text-[var(--color-navy-950)] border-2 border-[var(--color-navy-950)] px-8 py-6 font-black uppercase tracking-widest text-base hover:bg-[var(--color-green-400)] transition-all duration-300 shadow-[8px_8px_0px_0px_var(--color-navy-950)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-navy-950)]"
                >
                  <span>Get a Diagnostic</span>
                  <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-between w-full bg-white border-2 border-[var(--color-navy-950)] text-[var(--color-navy-950)] px-8 py-6 font-black uppercase tracking-widest text-base hover:bg-[var(--color-navy-950)] hover:text-white transition-all duration-300 shadow-[8px_8px_0px_0px_var(--color-green-500)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-green-500)]"
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
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
