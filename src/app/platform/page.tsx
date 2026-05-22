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
                <div className="mb-8 inline-flex items-center gap-3 self-start rounded-full border border-[var(--color-navy-200)] px-5 py-2 bg-white shadow-sm">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    {hero.eyebrow}
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-tighter text-[var(--color-navy-950)] mb-6 text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">One System.</span>
                  <br />
                  Complete Control.
                </h1>

                <p className="text-base md:text-lg text-[var(--color-gray-600)] leading-relaxed font-medium mb-10 max-w-xl">
                  {hero.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group/btn inline-flex items-center justify-center bg-[var(--color-navy-950)] text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Get a Revenue Diagnostic
                    <ArrowRight className="size-5 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/platform/all-modules"
                    className="group/btn inline-flex items-center justify-center bg-white border border-[var(--color-gray-200)] text-[var(--color-navy-950)] px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]"
                  >
                    View All Modules
                  </Link>
                </div>
              </div>

              {/* Right: Bento stats */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-[var(--color-navy-950)] rounded-3xl p-8 flex flex-col justify-end shadow-lg relative overflow-hidden group">
                  <div className="absolute right-[-10%] top-[-10%] w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_50%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <div
                      className="text-5xl font-black tracking-tighter text-[var(--color-green-500)] leading-none mb-2"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      2M+
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)]">
                      Field Tickets Processed
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--color-green-500)] rounded-3xl p-6 flex flex-col justify-end shadow-md">
                  <div
                    className="text-4xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none mb-1"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    &lt;4hr
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                    Avg. Billing Cycle
                  </p>
                </div>
                <div className="bg-white border border-[var(--color-gray-200)] rounded-3xl p-6 flex flex-col justify-end shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="text-4xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none mb-1"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    99.9%
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
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
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    <span className="text-[var(--color-green-500)]">Three Layers.</span>{" "}
                    <span className="text-[var(--color-navy-950)]">One System.</span>
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    {layers.map((layer, i) => {
                      const Icon = layerIcons[i];
                      return (
                        <div
                          key={layer.id}
                          className="group bg-white p-8 rounded-3xl border border-[var(--color-gray-200)] shadow-sm hover:shadow-md hover:border-[var(--color-gray-300)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                          <div
                            className="text-4xl font-black tracking-tighter text-[var(--color-gray-200)] group-hover:text-[var(--color-green-500)] transition-colors duration-300 mb-6 leading-none"
                            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                          >
                            0{i + 1}
                          </div>
                          <div className="mb-4 inline-flex items-center justify-center size-12 bg-[var(--color-gray-50)] group-hover:bg-[var(--color-green-50)] transition-colors rounded-xl border border-[var(--color-gray-100)]">
                            <Icon className="size-6 text-[var(--color-navy-400)] group-hover:text-[var(--color-green-600)] transition-colors" />
                          </div>
                          <h3 className="text-lg font-bold uppercase tracking-wide text-[var(--color-navy-950)] mb-1">
                            {layer.title}
                          </h3>
                          <p className="text-xs font-bold text-[var(--color-green-600)] mb-4 uppercase tracking-wider">
                            {layer.subtitle}
                          </p>
                          <p className="text-sm text-[var(--color-gray-600)] font-medium leading-relaxed">
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
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
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
                        <div className="grid sm:grid-cols-2 gap-4">
                          {group.items.map((mod) => (
                            <Link
                              key={mod.href}
                              href={mod.href}
                              className="group flex items-center justify-between px-5 py-4 rounded-xl border border-[var(--color-gray-200)] bg-white hover:border-[var(--color-gray-300)] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                            >
                              <span className="text-sm font-bold text-[var(--color-navy-900)] group-hover:text-[var(--color-green-600)] transition-colors">
                                {mod.title}
                              </span>
                              <ArrowRight className="size-4 text-[var(--color-gray-300)] group-hover:text-[var(--color-green-600)] group-hover:translate-x-1 transition-all" />
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
                <div className="relative overflow-hidden bg-[var(--color-navy-950)] rounded-3xl shadow-xl">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                  <div className="relative z-10 grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="p-10 md:p-14">
                      <div className="mb-6 flex items-center gap-4">
                        <WifiOff className="size-6 text-[var(--color-green-500)]" />
                        <span className="text-xs font-bold text-[var(--color-gray-300)] uppercase tracking-widest">Dead Zone Ready</span>
                      </div>
                      <h3
                        className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-4"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        <span className="text-[var(--color-green-500)]">Offline.</span> Always On.
                      </h3>
                      <p className="text-sm text-[var(--color-gray-400)] leading-relaxed font-medium">
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
                            <CheckCircle2 className="size-5 text-[var(--color-green-500)] shrink-0" />
                            <span className="text-sm text-[var(--color-gray-300)] font-medium">{item}</span>
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
                <div className="bg-[var(--color-navy-950)] rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute right-[-20px] top-[-20px] text-[var(--color-green-500)]/10 group-hover:scale-110 transition-transform duration-700">
                    <Zap className="size-32" />
                  </div>
                  <div className="relative z-10 mb-8">
                    <h3
                      className="text-2xl font-black uppercase tracking-tighter text-white leading-[1] mb-3"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      See the Platform in Action
                    </h3>
                    <p className="text-sm text-[var(--color-gray-300)] leading-relaxed font-medium">
                      Live walkthrough tailored to your ops. No generic demos.
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

                {/* Key Stats */}
                <div className="bg-white rounded-3xl border border-[var(--color-gray-200)] p-8 shadow-sm">
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
                          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                          {s.value}
                        </div>
                        <p className="text-xs font-semibold text-[var(--color-gray-500)] uppercase tracking-wide">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module Quick Links */}
                <div className="bg-[var(--color-gray-50)] rounded-3xl border border-[var(--color-gray-200)] p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-gray-200)]">
                    <Shield className="size-5 text-[var(--color-navy-900)]" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                      Quick Links
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
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
                          className="group flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300 bg-transparent text-[var(--color-gray-600)] hover:bg-white hover:shadow-sm hover:text-[var(--color-navy-950)]"
                        >
                          <span>{m.title}</span>
                          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5 text-[var(--color-gray-400)] group-hover:text-[var(--color-navy-950)]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-[var(--color-gray-200)]">
                    <Link
                      href="/platform/all-modules"
                      className="group flex items-center justify-between w-full text-sm font-black text-[var(--color-navy-900)] uppercase tracking-widest hover:text-[var(--color-green-600)] transition-colors"
                    >
                      All Modules
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-3xl border border-[var(--color-gray-200)] p-8 shadow-sm relative overflow-hidden group">
                  <div className="absolute -right-4 -top-8 text-[var(--color-gray-100)] text-[120px] leading-none font-serif select-none pointer-events-none group-hover:text-[var(--color-green-50)] transition-colors duration-500">
                    &ldquo;
                  </div>
                  <blockquote className="relative z-10">
                    <p className="text-base font-semibold text-[var(--color-navy-900)] leading-relaxed mb-6">
                      "OpsFlo replaced three separate systems and we still paid less. The ROI in the first 90 days was undeniable."
                    </p>
                    <footer className="flex items-center gap-4 pt-4 border-t border-[var(--color-gray-100)]">
                      <div className="size-10 bg-[var(--color-green-100)] rounded-full flex items-center justify-center text-[var(--color-green-600)] font-bold text-sm shrink-0">
                        VO
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy-950)]">VP of Operations</div>
                        <div className="text-[11px] font-semibold text-[var(--color-gray-500)] uppercase">Energy Services Company, Alberta</div>
                      </div>
                    </footer>
                  </blockquote>
                </div>

              </aside>
            </div>
          </Container>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-white text-[var(--color-navy-950)] py-20 md:py-24 relative overflow-hidden border-t border-[var(--color-gray-200)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-3xl">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] px-5 py-2 shadow-sm bg-white">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-950)] uppercase">The Next Step</span>
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
                  OpsFlo is the single source of truth for oilfield operators. Stop losing revenue to disconnected field data.
                </p>
              </div>
              <div className="w-full lg:w-[380px] flex flex-col gap-3 relative z-20">
                <Link
                  href="/contact"
                  className="group/btn flex items-center justify-between w-full bg-[var(--color-navy-950)] text-white px-6 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Get a Revenue Diagnostic</span>
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
