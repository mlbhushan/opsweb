import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { PLATFORM_OVERVIEW } from "@/lib/content/platform/overview";
import {
  ArrowRight, ChevronRight, Database, Workflow, Brain,
  Wifi, WifiOff, BarChart3, Shield, Zap, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Platform",
  description:
    "The operating system for field operations. One system that connects data, standardizes workflows, and delivers AI-powered decisions.",
  path: "/platform",
});

const layerIcons = [Database, Workflow, Brain];

const MODULE_GROUPS = [
  {
    label: "Core Capabilities",
    color: "bg-[var(--color-navy-950)]",
    items: [
      { title: "Field Execution Engine", href: "/platform/field-execution", tag: "Core" },
      { title: "Inspection & Checklists", href: "/platform/inspections", tag: "Core" },
      { title: "Work Order Automation", href: "/platform/work-orders", tag: "Core" },
      { title: "Scheduling & Dispatch", href: "/platform/scheduling", tag: "Core" },
      { title: "Predictive Maintenance", href: "/platform/predictive-maintenance", tag: "Core" },
    ],
  },
  {
    label: "Revenue Operations",
    color: "bg-[var(--color-green-500)]",
    items: [
      { title: "Field Ticketing", href: "/platform/field-ticketing", tag: "Revenue" },
      { title: "Invoicing & Billing", href: "/platform/invoicing", tag: "Revenue" },
      { title: "Inventory & Parts", href: "/platform/inventory", tag: "Revenue" },
    ],
  },
  {
    label: "Intelligence",
    color: "bg-[var(--color-navy-700)]",
    items: [
      { title: "AI Decision Engine", href: "/platform/ai", tag: "AI" },
      { title: "Analytics & Reporting", href: "/platform/analytics", tag: "AI" },
      { title: "Asset Intelligence", href: "/platform/asset-intelligence", tag: "AI" },
    ],
  },
  {
    label: "Compliance & Safety",
    color: "bg-red-400",
    items: [
      { title: "Safety Management", href: "/platform/safety", tag: "Safety" },
      { title: "Compliance & Audit", href: "/platform/compliance", tag: "Safety" },
      { title: "Carbon & Climate", href: "/platform/carbon", tag: "Safety" },
    ],
  },
  {
    label: "Field Infrastructure",
    color: "bg-[var(--color-gray-600)]",
    items: [
      { title: "Offline-First Architecture", href: "/platform/offline", tag: "Infra" },
      { title: "Mobile App", href: "/platform/mobile", tag: "Infra" },
    ],
  },
];

export default function PlatformPage() {
  const { hero, layers, offline } = PLATFORM_OVERVIEW;

  return (
    <>
      <SiteHeader />
      <PageBanner title="Platform" />
      <main className="flex-1 bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[var(--color-green-500)]/8 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />

          <Container className="relative z-10 py-20 md:py-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              <div className="lg:col-span-6">
                <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-navy-800)]/15 px-4 py-2 bg-white shadow-[var(--shadow-xs)]">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-900)] uppercase">
                    {hero.eyebrow}
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-tighter text-[var(--color-navy-950)] mb-6"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">One System.</span>
                  <br />
                  Complete Control.
                </h1>

                <p className="text-base md:text-lg text-[var(--color-gray-600)] leading-relaxed font-light mb-10 max-w-xl">
                  {hero.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-between bg-[var(--color-navy-950)] text-white px-7 py-4 font-semibold uppercase tracking-wider text-sm transition-all hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Get a Revenue Diagnostic
                    <ArrowRight className="size-4 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/platform/all-modules"
                    className="group inline-flex items-center justify-center border-2 border-[var(--color-gray-200)] text-[var(--color-navy-950)] px-7 py-4 font-semibold uppercase tracking-wider text-sm transition-all hover:border-[var(--color-navy-950)]"
                  >
                    View All Modules
                  </Link>
                </div>
              </div>

              {/* Right: Bento stats */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-[var(--color-navy-950)] border-2 border-[var(--color-navy-950)] p-8 flex flex-col justify-end shadow-[8px_8px_0px_0px_var(--color-green-500)]">
                  <div
                    className="text-5xl font-black tracking-tighter text-[var(--color-green-500)] leading-none mb-2"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    2M+
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)]">
                    Field Tickets Processed
                  </p>
                </div>
                <div className="bg-[var(--color-green-500)] border-2 border-[var(--color-navy-950)] p-6 flex flex-col justify-end">
                  <div
                    className="text-4xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none mb-1"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    &lt;4hr
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    Avg. Billing Cycle
                  </p>
                </div>
                <div className="bg-[var(--color-gray-50)] border-2 border-[var(--color-navy-950)] p-6 flex flex-col justify-end">
                  <div
                    className="text-4xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none mb-1"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    99.9%
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    System Uptime
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* MAIN CONTENT + SIDEBAR */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              {/* MAIN COLUMN */}
              <div className="lg:col-span-8 space-y-16">

                {/* Three-Layer Architecture */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="h-4 w-4 bg-[var(--color-green-500)] block shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Architecture
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <h2
                    className="text-3xl md:text-5xl font-black uppercase leading-[0.92] tracking-tighter mb-10"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    <span className="text-[var(--color-green-500)]">Three Layers.</span>{" "}
                    <span className="text-[var(--color-navy-950)]">One System.</span>
                  </h2>

                  <div className="grid md:grid-cols-3 gap-0 border-t-2 border-l-2 border-[var(--color-navy-950)]">
                    {layers.map((layer, i) => {
                      const Icon = layerIcons[i];
                      return (
                        <div
                          key={layer.id}
                          className="group p-8 border-r-2 border-b-2 border-[var(--color-navy-950)] hover:bg-[var(--color-navy-950)] transition-colors duration-300 cursor-default"
                        >
                          <div
                            className="text-5xl font-black tracking-tighter text-[var(--color-gray-200)] group-hover:text-[var(--color-green-500)] transition-colors duration-300 mb-4 leading-none"
                            style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                          >
                            0{i + 1}
                          </div>
                          <div className="mb-3 inline-flex items-center justify-center size-10 bg-[var(--color-green-50)] group-hover:bg-[var(--color-green-500)]/20 transition-colors rounded">
                            <Icon className="size-5 text-[var(--color-green-600)]" />
                          </div>
                          <h3 className="text-base font-bold uppercase tracking-wide text-[var(--color-navy-900)] group-hover:text-white transition-colors mb-1">
                            {layer.title}
                          </h3>
                          <p className="text-xs font-semibold text-[var(--color-green-600)] group-hover:text-[var(--color-green-400)] transition-colors mb-3 uppercase tracking-wide">
                            {layer.subtitle}
                          </p>
                          <p className="text-sm text-[var(--color-gray-600)] group-hover:text-[var(--color-gray-300)] transition-colors font-light leading-relaxed">
                            {layer.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Module Map */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="h-4 w-4 bg-[var(--color-navy-950)] block shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Platform Modules
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                  </div>

                  <h2
                    className="text-3xl md:text-5xl font-black uppercase leading-[0.92] tracking-tighter mb-10"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    <span className="text-[var(--color-navy-950)]">Everything</span>{" "}
                    <span className="text-[var(--color-green-500)]">Connected.</span>
                  </h2>

                  <div className="space-y-6">
                    {MODULE_GROUPS.map((group) => (
                      <div key={group.label}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`h-2.5 w-2.5 rounded-full ${group.color}`} />
                          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                            {group.label}
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-0 border-t border-l border-[var(--color-gray-200)]">
                          {group.items.map((mod) => (
                            <Link
                              key={mod.href}
                              href={mod.href}
                              className="group flex items-center justify-between px-5 py-4 border-r border-b border-[var(--color-gray-200)] hover:bg-[var(--color-navy-950)] transition-colors duration-200"
                            >
                              <span className="text-sm font-medium text-[var(--color-navy-900)] group-hover:text-white transition-colors">
                                {mod.title}
                              </span>
                              <ArrowRight className="size-3.5 text-[var(--color-gray-300)] group-hover:text-[var(--color-green-500)] group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/platform/all-modules"
                      className="group inline-flex items-center gap-3 font-bold uppercase tracking-wider text-sm text-[var(--color-navy-950)] hover:text-[var(--color-green-600)] transition-colors"
                    >
                      View All Modules
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Offline Callout */}
                <div className="relative overflow-hidden bg-[var(--color-navy-950)] border-2 border-[var(--color-navy-950)] shadow-[8px_8px_0px_0px_var(--color-green-500)]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                  <div className="relative z-10 grid md:grid-cols-2 gap-0">
                    <div className="p-10 md:p-14 border-r-2 border-[var(--color-navy-800)]">
                      <div className="mb-6 flex items-center gap-4">
                        <WifiOff className="size-8 text-[var(--color-gray-500)]" />
                        <span className="text-xs font-bold text-[var(--color-gray-500)] uppercase tracking-widest">Dead Zone Ready</span>
                      </div>
                      <h3
                        className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-tight mb-4"
                        style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                      >
                        <span className="text-[var(--color-green-500)]">Offline.</span> Always On.
                      </h3>
                      <p className="text-sm text-[var(--color-gray-400)] leading-relaxed font-light">
                        {offline.body}
                      </p>
                    </div>
                    <div className="p-10 md:p-14 flex flex-col justify-between">
                      <div className="space-y-4 mb-8">
                        {[
                          "Full functionality with zero connectivity",
                          "Automatic sync when signal returns",
                          "No data loss in dead zones",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <CheckCircle2 className="size-4 text-[var(--color-green-500)] shrink-0" />
                            <span className="text-sm text-[var(--color-gray-300)] font-light">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/platform/offline"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-green-500)] uppercase tracking-wide hover:text-[var(--color-green-400)] transition-colors"
                      >
                        Learn About Offline Mode
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* SIDEBAR */}
              <aside className="lg:col-span-4 space-y-8">

                {/* Primary CTA */}
                <div className="bg-[var(--color-navy-950)] p-8 border-2 border-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-green-500)]">
                  <Zap className="size-8 text-[var(--color-green-500)] mb-4" />
                  <h3
                    className="text-2xl font-black uppercase tracking-tighter text-white leading-tight mb-2"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    See the Platform in Action
                  </h3>
                  <p className="text-sm text-[var(--color-gray-400)] leading-relaxed font-light mb-6">
                    Live walkthrough tailored to your ops. No generic demos.
                  </p>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between w-full bg-[var(--color-green-500)] text-[var(--color-navy-950)] px-5 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[var(--color-green-400)] transition-colors"
                  >
                    Get a Revenue Diagnostic
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group mt-2 flex items-center justify-between w-full border border-[var(--color-navy-700)] text-[var(--color-gray-300)] px-5 py-3 font-semibold text-sm uppercase tracking-wider hover:text-white hover:border-[var(--color-gray-400)] transition-colors"
                  >
                    Talk to Sales
                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Key Stats */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8 shadow-[var(--shadow-sm)]">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="size-5 text-[var(--color-green-500)]" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                      Platform Impact
                    </h3>
                  </div>
                  <div className="space-y-0 divide-y divide-[var(--color-gray-100)]">
                    {[
                      { value: "500+", label: "Active Fleets Powered" },
                      { value: "2M+", label: "Field Tickets Processed" },
                      { value: "45→4hr", label: "Billing Cycle Reduction" },
                      { value: "3-8%", label: "Revenue Leakage Eliminated" },
                    ].map((s, i) => (
                      <div key={i} className="py-5 first:pt-0 last:pb-0">
                        <div
                          className="text-3xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none mb-1"
                          style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                        >
                          {s.value}
                        </div>
                        <p className="text-xs font-medium text-[var(--color-gray-500)] uppercase tracking-wide">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module Quick Links */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8 shadow-[var(--shadow-sm)]">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="size-5 text-[var(--color-navy-900)]" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                      Quick Links
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {[
                      { title: "Field Ticketing", href: "/platform/field-ticketing" },
                      { title: "Invoicing & Billing", href: "/platform/invoicing" },
                      { title: "AI Decision Engine", href: "/platform/ai" },
                      { title: "Safety Management", href: "/platform/safety" },
                      { title: "Mobile App", href: "/platform/mobile" },
                      { title: "Offline Architecture", href: "/platform/offline" },
                    ].map((m) => (
                      <li key={m.href}>
                        <Link
                          href={m.href}
                          className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[var(--color-gray-600)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)] transition-all"
                        >
                          <span>{m.title}</span>
                          <ChevronRight className="size-3.5 text-[var(--color-gray-300)] group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[var(--color-gray-100)]">
                    <Link
                      href="/platform/all-modules"
                      className="group flex items-center justify-between w-full text-sm font-bold text-[var(--color-navy-900)] uppercase tracking-wide hover:text-[var(--color-green-600)] transition-colors"
                    >
                      All Modules
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-[var(--color-green-50)] border-l-4 border-[var(--color-green-500)] p-8">
                  <blockquote>
                    <p className="text-sm italic text-[var(--color-gray-700)] leading-relaxed mb-4 font-light">
                      &ldquo;OpsFlo replaced three separate systems and we still paid less. The ROI in the first 90 days was undeniable.&rdquo;
                    </p>
                    <footer>
                      <div className="text-xs font-bold uppercase tracking-wide text-[var(--color-navy-900)]">VP of Operations</div>
                      <div className="text-xs text-[var(--color-gray-500)]">Energy Services Company, Alberta</div>
                    </footer>
                  </blockquote>
                </div>

              </aside>
            </div>
          </Container>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-[var(--color-gray-50)] border-t border-[var(--color-gray-200)] py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-200)] px-4 py-2 bg-white shadow-sm">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-900)] uppercase">The Next Step</span>
                </div>
                <h2
                  className="text-4xl md:text-6xl font-black uppercase leading-[0.92] tracking-tighter"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">Stop Guessing.</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Start Building.</span>
                </h2>
                <p className="mt-6 text-lg text-[var(--color-gray-600)] font-light leading-relaxed max-w-2xl">
                  OpsFlo is the single source of truth for oilfield operators. Stop losing revenue to disconnected field data.
                </p>
              </div>
              <div className="w-full lg:w-[380px] flex flex-col gap-3 lg:border-l-2 border-[var(--color-navy-900)] lg:pl-12">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between w-full bg-[var(--color-navy-950)] text-white px-6 py-5 font-bold uppercase tracking-wide text-sm hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-colors duration-300"
                >
                  <span>Get a Revenue Diagnostic</span>
                  <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-between w-full bg-white border-2 border-[var(--color-navy-200)] text-[var(--color-navy-950)] px-6 py-5 font-bold uppercase tracking-wide text-sm hover:border-[var(--color-navy-950)] transition-all duration-300"
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
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
