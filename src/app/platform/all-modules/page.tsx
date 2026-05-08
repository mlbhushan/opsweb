import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import {
  Wrench, ClipboardCheck, FileText, CalendarClock, Activity,
  BrainCircuit, BarChart3, HardDrive, TicketCheck, Receipt,
  Package, ShieldCheck, Scale, Leaf, WifiOff, Smartphone,
  ArrowRight, ChevronRight, Zap, Shield,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "All Platform Modules",
  description:
    "Explore every module in the OpsFlo platform. From field execution and inspections to AI-powered decision making and revenue operations.",
  path: "/platform/all-modules",
});

const modules = [
  {
    category: "Core Capabilities",
    accent: "bg-[var(--color-navy-950)]",
    description: "The foundation of your field operations. Capture, assign, and close every job with zero slippage.",
    items: [
      { icon: Wrench, title: "Field Execution Engine", href: "/platform/field-execution", description: "Ensure every assigned job reaches verified completion." },
      { icon: ClipboardCheck, title: "Inspection & Checklists", href: "/platform/inspections", description: "Structured field data capture with required fields and photo evidence." },
      { icon: FileText, title: "Work Order Automation", href: "/platform/work-orders", description: "From finding to fix, automatically generated and tracked." },
      { icon: CalendarClock, title: "Scheduling & Dispatch", href: "/platform/scheduling", description: "Right crew, right job, right time. Skill and proximity based." },
      { icon: Activity, title: "Predictive Maintenance", href: "/platform/predictive-maintenance", description: "Prevent failures before they happen with data-driven predictions." },
    ],
  },
  {
    category: "Revenue Operations",
    accent: "bg-[var(--color-green-500)]",
    description: "Turn completed field work into recognized revenue in hours, not weeks. No re-keying. No gaps.",
    items: [
      { icon: TicketCheck, title: "Field Ticketing", href: "/platform/field-ticketing", description: "Digital capture at the point of work. No paper, no gaps." },
      { icon: Receipt, title: "Invoicing & Billing", href: "/platform/invoicing", description: "Field ticket to invoice in hours, not weeks." },
      { icon: Package, title: "Inventory & Parts", href: "/platform/inventory", description: "Track every component across warehouses, trucks, and sites." },
    ],
  },
  {
    category: "Operations Intelligence",
    accent: "bg-[var(--color-navy-700)]",
    description: "Prescriptive actions from real-time data. Every prediction tied to a dollar figure or safety metric.",
    items: [
      { icon: BrainCircuit, title: "AI Decision Engine", href: "/platform/ai", description: "Prescriptive actions from real-time operational data." },
      { icon: BarChart3, title: "Analytics & Reporting", href: "/platform/analytics", description: "Live dashboards and automated reports for every role." },
      { icon: HardDrive, title: "Asset Intelligence", href: "/platform/asset-intelligence", description: "Complete asset lifecycle view with condition scoring." },
    ],
  },
  {
    category: "Compliance & Safety",
    accent: "bg-red-400",
    description: "Audit-ready documentation generated as a byproduct of normal operations. Zero extra admin.",
    items: [
      { icon: ShieldCheck, title: "Safety Management", href: "/platform/safety", description: "Digital JSAs, incident reporting, and corrective action tracking." },
      { icon: Scale, title: "Compliance & Audit", href: "/platform/compliance", description: "Audit-ready documentation generated as a byproduct of operations." },
      { icon: Leaf, title: "Carbon & Climate", href: "/platform/carbon", description: "Automated emissions tracking tied to jobs and assets." },
    ],
  },
  {
    category: "Field Infrastructure",
    accent: "bg-[var(--color-gray-500)]",
    description: "Built for dead zones, gloved hands, and 12-hour shifts. The technology disappears so crews can focus.",
    items: [
      { icon: WifiOff, title: "Offline-First Architecture", href: "/platform/offline", description: "Full functionality with zero connectivity dependency." },
      { icon: Smartphone, title: "Mobile App", href: "/platform/mobile", description: "Native iOS and Android. Designed for gloved hands and bright sunlight." },
    ],
  },
];

export default function AllModulesPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="All Modules" />
      <main className="flex-1 bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[var(--color-green-500)]/8 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />

          <Container className="relative z-10 py-20 md:py-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-navy-800)]/15 px-4 py-2 bg-white shadow-[var(--shadow-xs)]">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-900)] uppercase">Platform</span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-tighter text-[var(--color-navy-950)] mb-6"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">One System.</span>
                  <br />
                  Complete Execution.
                </h1>

                <p className="text-base md:text-lg text-[var(--color-gray-600)] leading-relaxed font-light mb-10 max-w-xl">
                  Every module in the OpsFlo platform. Purpose-built for oilfield operations, from field execution to revenue recognition. 16 modules. Zero gaps.
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
                    href="/platform"
                    className="group inline-flex items-center justify-center border-2 border-[var(--color-gray-200)] text-[var(--color-navy-950)] px-7 py-4 font-semibold uppercase tracking-wider text-sm transition-all hover:border-[var(--color-navy-950)]"
                  >
                    Platform Overview
                  </Link>
                </div>
              </div>

              {/* Module count bento */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { value: "16", label: "Platform Modules", dark: true },
                  { value: "5", label: "Module Categories", dark: false },
                  { value: "1", label: "Unified System", dark: false },
                  { value: "0", label: "Data Gaps", dark: true },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`p-6 border-2 border-[var(--color-navy-950)] flex flex-col justify-end ${
                      s.dark ? "bg-[var(--color-navy-950)]" : i === 1 ? "bg-[var(--color-green-500)]" : "bg-[var(--color-gray-50)]"
                    }`}
                  >
                    <div
                      className={`text-4xl font-black tracking-tighter leading-none mb-1 ${
                        s.dark ? "text-[var(--color-green-500)]" : "text-[var(--color-navy-950)]"
                      }`}
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <p className={`text-xs font-bold uppercase tracking-widest ${s.dark ? "text-[var(--color-gray-400)]" : "text-[var(--color-navy-900)]"}`}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* MAIN CONTENT + SIDEBAR */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

              {/* MODULE GROUPS */}
              <div className="lg:col-span-8 space-y-16">
                {modules.map((group) => (
                  <div key={group.category}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`h-4 w-4 block shrink-0 ${group.accent}`} />
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                        {group.category}
                      </span>
                      <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-[var(--color-gray-500)] font-light leading-relaxed">
                        {group.description}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-0 border-t-2 border-l-2 border-[var(--color-navy-950)]">
                      {group.items.map((mod) => {
                        const Icon = mod.icon;
                        return (
                          <Link
                            key={mod.href}
                            href={mod.href}
                            className="group p-8 border-r-2 border-b-2 border-[var(--color-navy-950)] hover:bg-[var(--color-navy-950)] transition-colors duration-300 flex flex-col"
                          >
                            <div className="mb-4 inline-flex items-center justify-center size-10 bg-[var(--color-green-50)] group-hover:bg-[var(--color-green-500)]/20 transition-colors rounded">
                              <Icon className="size-5 text-[var(--color-green-600)]" />
                            </div>
                            <h3 className="text-base font-bold uppercase tracking-wide text-[var(--color-navy-900)] group-hover:text-white transition-colors mb-2">
                              {mod.title}
                            </h3>
                            <p className="text-sm text-[var(--color-gray-500)] group-hover:text-[var(--color-gray-300)] transition-colors font-light leading-relaxed mb-4 flex-1">
                              {mod.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-green-600)] group-hover:text-[var(--color-green-400)] uppercase tracking-wide transition-colors">
                              Learn More
                              <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* SIDEBAR */}
              <aside className="lg:col-span-4 space-y-8">

                {/* CTA */}
                <div className="bg-[var(--color-navy-950)] p-8 border-2 border-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-green-500)]">
                  <Zap className="size-8 text-[var(--color-green-500)] mb-4" />
                  <h3
                    className="text-2xl font-black uppercase tracking-tighter text-white leading-tight mb-2"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    See It in Action
                  </h3>
                  <p className="text-sm text-[var(--color-gray-400)] leading-relaxed font-light mb-6">
                    Live walkthrough of the modules relevant to your operations.
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

                {/* By Category Quick Nav */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8 shadow-[var(--shadow-sm)]">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="size-5 text-[var(--color-navy-900)]" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                      Jump to Category
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {modules.map((group) => (
                      <li key={group.category}>
                        <a
                          href={`#${group.category.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                          className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[var(--color-gray-600)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)] transition-all"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`h-2 w-2 rounded-full ${group.accent}`} />
                            <span>{group.category}</span>
                          </div>
                          <ChevronRight className="size-3.5 text-[var(--color-gray-300)] group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-[var(--color-green-50)] border-l-4 border-[var(--color-green-500)] p-8">
                  <blockquote>
                    <p className="text-sm italic text-[var(--color-gray-700)] leading-relaxed mb-4 font-light">
                      &ldquo;We replaced 5 tools with one. Our dispatchers stopped managing spreadsheets and started managing operations.&rdquo;
                    </p>
                    <footer>
                      <div className="text-xs font-bold uppercase tracking-wide text-[var(--color-navy-900)]">Director of Field Operations</div>
                      <div className="text-xs text-[var(--color-gray-500)]">Well Services Company, BC</div>
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
                  <span className="text-xs font-bold tracking-widest text-[var(--color-navy-900)] uppercase">Ready to Start</span>
                </div>
                <h2
                  className="text-4xl md:text-6xl font-black uppercase leading-[0.92] tracking-tighter"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">16 Modules.</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Zero Gaps.</span>
                </h2>
                <p className="mt-6 text-lg text-[var(--color-gray-600)] font-light leading-relaxed max-w-2xl">
                  Every module works together as one unified system. No integration nightmares. No data silos. Just execution.
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
                  href="/platform"
                  className="group flex items-center justify-between w-full bg-white border-2 border-[var(--color-navy-200)] text-[var(--color-navy-950)] px-6 py-5 font-bold uppercase tracking-wide text-sm hover:border-[var(--color-navy-950)] transition-all duration-300"
                >
                  <span>Platform Overview</span>
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
