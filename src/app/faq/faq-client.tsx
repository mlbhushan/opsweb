"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown, ChevronRight, ArrowRight,
  Zap, Shield, Settings, DollarSign, HeadphonesIcon, HelpCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";

const FAQ_SECTIONS = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    items: [
      {
        id: "what-is-opsflo",
        question: "What exactly is OpsFlo?",
        answer:
          "OpsFlo is the execution layer for oilfield operations. It ensures every inspection, maintenance task, and field job is completed, validated, and converted to revenue — with AI that predicts failures before they happen. Unlike FSM tools that just track work, OpsFlo guarantees it gets done and billed.",
      },
      {
        id: "who-is-it-for",
        question: "Who is OpsFlo built for?",
        answer:
          "OpsFlo is purpose-built for oilfield services, equipment rental, fluid hauling, well services, and pipeline & infrastructure companies. It's used by operations managers, field supervisors, finance teams, executives, and HSE managers — each with role-specific views and capabilities.",
      },
      {
        id: "how-different",
        question: "How is OpsFlo different from other field service software?",
        answer:
          "Three things set us apart: (1) Full offline capability — every feature works without cell service. (2) Purpose-built for oilfield realities — complex multi-day jobs, harsh conditions, regulatory compliance. (3) A direct path from field execution to invoicing, not just scheduling and dispatch. Most FSM tools stop at job management. OpsFlo closes the loop to billing.",
      },
      {
        id: "opsflo-vs-cmms",
        question: "Is OpsFlo a CMMS, ERP, or FSM tool?",
        answer:
          "None of the above — and all of the above. OpsFlo is an Operations Execution System: it sits between your planning layer (ERP, CMMS) and your accounting layer (QuickBooks, Sage), ensuring that what was planned actually happens in the field, gets validated, and converts to billable revenue. Think of it as the execution guarantee your other systems lack.",
      },
    ],
  },
  {
    id: "implementation",
    label: "Implementation",
    icon: Settings,
    items: [
      {
        id: "implementation-time",
        question: "How long does implementation take?",
        answer:
          "Most teams are live within 2-4 weeks. We start with a focused pilot — typically 1-2 crews — so you see results quickly without disrupting your full operation. Rollout to additional crews follows once the pilot proves ROI. We've never had an implementation take longer than 90 days.",
      },
      {
        id: "pilot",
        question: "Can we start with a pilot before committing?",
        answer:
          "Yes — and we recommend it. Start with a 30-day pilot using 1-2 crews with zero long-term commitment. Most pilot customers see ROI within the first month from recovered revenue alone. We'll show you the numbers before you sign anything.",
      },
      {
        id: "data-migration",
        question: "Can you migrate data from our current system?",
        answer:
          "Our implementation team handles data migration from spreadsheets, legacy platforms, or competing software. We map your existing workflows, rate cards, asset lists, and customer data — and ensure a smooth transition with zero data loss. If you can export it, we can import it.",
      },
      {
        id: "training",
        question: "What does field crew training look like?",
        answer:
          "Field crew training takes under 30 minutes for most users. The mobile app is designed for simplicity — large touch targets for gloved hands, intuitive flows, and in-app guidance. Most crews are productive on day one. Supervisors and office staff receive separate role-based training that covers their specific workflows.",
      },
      {
        id: "change-management",
        question: "What if our crews resist switching from paper?",
        answer:
          "This is the most common concern — and the one we hear least after go-live. The app is faster than paper for field crews: no re-entering data, no chasing signatures, no lost tickets. We provide a proven change management playbook and can run an internal 'paper vs digital' challenge during your pilot to demonstrate the speed difference directly.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    icon: Zap,
    items: [
      {
        id: "offline",
        question: "Does OpsFlo actually work offline — fully?",
        answer:
          "Yes — offline is a first-class feature, not an afterthought. Every capability works without connectivity: inspections, field tickets, photos, e-signatures, GPS capture, asset lookups, and work order management. Data syncs automatically when signal returns with intelligent conflict resolution. No manual uploads, no lost work, no blocked crews.",
      },
      {
        id: "integrations",
        question: "What systems does OpsFlo integrate with?",
        answer:
          "OpsFlo integrates with: Accounting (QuickBooks, Sage, Xero), ERPs (SAP, Oracle, Microsoft D365), Industry ticketing networks (OpenInvoice, OpenTicket, FieldCap), Communication tools (Slack, Teams), and IoT/SCADA systems for sensor data. We also offer a REST API and webhooks for custom integrations.",
      },
      {
        id: "mobile",
        question: "What devices and operating systems are supported?",
        answer:
          "Native iOS and Android apps designed for field conditions: large touch targets for gloved hands, high-contrast displays for bright sunlight, full offline capability. The web dashboard works on any modern browser. We support the latest two major versions of iOS and Android, plus ruggedized devices from major manufacturers.",
      },
      {
        id: "security",
        question: "What about security and data compliance?",
        answer:
          "OpsFlo is SOC 2 Type II certified with 256-bit encryption at rest and in transit, role-based access controls, single sign-on (SSO) support, and audit logging. We undergo annual penetration testing and offer data residency options for regulated industries. Customer data is never used for model training or shared with third parties.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & ROI",
    icon: DollarSign,
    items: [
      {
        id: "pricing-model",
        question: "How does pricing work?",
        answer:
          "Per-user, per-month pricing that scales with your operation. No hidden fees, no module add-on taxes. Contact our team for a custom quote based on your crew size and requirements. Most customers see full payback within 3-6 months from recovered revenue alone — the platform typically pays for itself before the first annual contract renews.",
      },
      {
        id: "contract",
        question: "Are there long-term contracts?",
        answer:
          "Monthly and annual plans are both available. Annual commitments include a discount. There's no pressure to lock in long-term — start monthly during your pilot, switch to annual once you've seen results. We earn renewals through outcomes, not contracts.",
      },
      {
        id: "roi-expectation",
        question: "What ROI can we realistically expect?",
        answer:
          "Based on customer results: 10-15% revenue recovery from eliminated billing leakage, 50-85% faster invoicing cycles, and up to 60% reduction in unplanned downtime costs. Use our ROI Calculator to get a personalized estimate based on your crew size, ticket volume, and average ticket value. Most customers with 10+ crews see six-figure annual ROI.",
      },
      {
        id: "free-trial",
        question: "Is there a free trial?",
        answer:
          "We offer a structured 30-day pilot rather than a self-serve trial. Field operations are complex — a guided pilot with your actual data, your workflows, and your crews produces a meaningful result. Self-serve trials often mislead because they don't reflect your real operation. Our pilot includes full onboarding support at no risk.",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: HeadphonesIcon,
    items: [
      {
        id: "support-channels",
        question: "What support is available?",
        answer:
          "All plans include email and in-app chat support. Professional plans add priority phone support and a dedicated Customer Success Manager. Enterprise plans include a named CSM, 24/7 critical issue support, executive business reviews, and guaranteed SLAs. Response time for critical issues (platform down) is 15 minutes on Enterprise.",
      },
      {
        id: "uptime",
        question: "What is your uptime guarantee?",
        answer:
          "We guarantee 99.8% monthly uptime with service credits if we fall short. But here's what matters more: our offline-first architecture means your field crews are never blocked by platform availability. Work continues regardless of cloud status — so even in the unlikely event of a backend issue, field operations are unaffected.",
      },
      {
        id: "ongoing-training",
        question: "Do you offer ongoing training as we add crews?",
        answer:
          "Yes — crew onboarding support is included in all plans. New crew members can be trained in under 30 minutes using our in-app guides and video library. For Enterprise customers, we offer on-site training sessions and can integrate OpsFlo into your new-hire onboarding program.",
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance & HSE",
    icon: Shield,
    items: [
      {
        id: "regulatory-compliance",
        question: "Does OpsFlo help with regulatory compliance?",
        answer:
          "Yes — OpsFlo digitizes and automates your entire compliance program: inspection scheduling, checklist completion, finding tracking to resolution, and audit package generation. Audit preparation that used to take weeks now takes minutes. Customers using OpsFlo for HSE compliance have achieved zero regulatory findings on audit.",
      },
      {
        id: "audit-ready",
        question: "How does audit preparation work?",
        answer:
          "OpsFlo maintains a complete, timestamped record of every inspection, finding, and corrective action — organized by regulation, asset, and time period. Audit packages are generated in one click with all supporting evidence attached. You are always audit-ready, not scrambling to compile records when an auditor arrives.",
      },
      {
        id: "incident-reporting",
        question: "Does OpsFlo handle incident reporting?",
        answer:
          "Yes — digital incident reports can be filed from mobile devices immediately after an incident, with photos, GPS coordinates, witness statements, and initial assessment. Reports route automatically to the appropriate supervisor and safety manager. Follow-up actions are tracked to closure with full audit trails.",
      },
    ],
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { id: string; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--color-gray-200)] last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-bold uppercase tracking-tight text-[var(--color-navy-950)]"
          style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
        >
          {item.question}
        </span>
        <ChevronDown
          className={`mt-0.5 size-5 shrink-0 text-[var(--color-gray-400)] transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--color-green-500)]" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm font-light leading-relaxed text-[var(--color-gray-600)]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQClient() {
  const [activeSection, setActiveSection] = useState("general");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <Container className="relative z-10 py-16 md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-800)]/15 bg-white px-4 py-2 shadow-[var(--shadow-xs)]">
            <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
              Frequently Asked Questions
            </span>
          </div>

          <h1
            className="mb-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl"
            style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
          >
            <span className="text-[var(--color-green-500)]">Questions</span>
            <br />
            <span className="text-[var(--color-navy-950)]">Answered.</span>
          </h1>
          <p className="max-w-xl text-base font-light leading-relaxed text-[var(--color-gray-600)] md:text-lg">
            Everything you need to know about OpsFlo — from how we work offline to what ROI to expect.{" "}
            <Link href="/contact" className="font-semibold text-[var(--color-navy-950)] underline underline-offset-4 hover:text-[var(--color-navy-700)]">
              Can&apos;t find your answer? Talk to our team.
            </Link>
          </p>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-[var(--color-gray-200)] pt-8">
            {[
              { value: `${FAQ_SECTIONS.reduce((a, s) => a + s.items.length, 0)}`, label: "questions answered" },
              { value: "30-day", label: "risk-free pilot" },
              { value: "2-4wk", label: "avg. go-live" },
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

      {/* ── FAQ BODY ── */}
      <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

            {/* ── LEFT NAV (Sticky) ── */}
            <nav className="lg:col-span-3">
              <div className="sticky top-24 space-y-1">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)]">
                  Jump to Section
                </p>
                {FAQ_SECTIONS.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`group flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[var(--color-navy-950)] text-white"
                          : "text-[var(--color-gray-600)] hover:bg-[var(--color-gray-100)] hover:text-[var(--color-navy-950)]"
                      }`}
                    >
                      <Icon
                        className={`size-4 shrink-0 ${
                          isActive
                            ? "text-[var(--color-green-400)]"
                            : "text-[var(--color-gray-400)] group-hover:text-[var(--color-navy-700)]"
                        }`}
                      />
                      {section.label}
                      <ChevronRight
                        className={`ml-auto size-3.5 transition-transform ${
                          isActive ? "text-[var(--color-green-400)]" : "text-[var(--color-gray-300)]"
                        }`}
                      />
                    </button>
                  );
                })}

                <div className="mt-8 bg-[var(--color-navy-950)] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-500)] mb-2">
                    Still unsure?
                  </p>
                  <p className="text-sm font-light text-[var(--color-gray-400)] mb-4">
                    Talk to our team. 15 minutes, no pressure, specific to your operation.
                  </p>
                  <Link
                    href="/contact"
                    className="group flex w-full items-center justify-between bg-[var(--color-green-500)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                  >
                    Book a Call
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </nav>

            {/* ── FAQ CONTENT ── */}
            <div className="lg:col-span-9 space-y-16">
              {FAQ_SECTIONS.map((section, sectionIdx) => {
                if (section.id !== activeSection) return null;
                const Icon = section.icon;
                return (
                  <div key={section.id} id={section.id}>
                    <div className="mb-8 flex items-center gap-4 border-b-2 border-[var(--color-navy-950)] pb-5">
                      <div className="flex size-10 items-center justify-center bg-[var(--color-navy-950)]">
                        <Icon className="size-5 text-[var(--color-green-500)]" />
                      </div>
                      <h2
                        className="text-2xl font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                        style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                      >
                        {section.label}
                      </h2>
                      <span className="ml-auto text-xs font-bold text-[var(--color-gray-400)]">
                        {section.items.length} questions
                      </span>
                    </div>

                    <div className="bg-white border border-[var(--color-gray-200)] px-6 md:px-8">
                      {section.items.map((item) => (
                        <AccordionItem
                          key={item.id}
                          item={item}
                          isOpen={!!openItems[item.id]}
                          onToggle={() => toggleItem(item.id)}
                        />
                      ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                      {sectionIdx < FAQ_SECTIONS.length - 1 && (
                        <button
                          onClick={() => setActiveSection(FAQ_SECTIONS[sectionIdx + 1].id)}
                          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[var(--color-gray-400)] transition-colors hover:text-[var(--color-navy-950)]"
                        >
                          Next: {FAQ_SECTIONS[sectionIdx + 1].label}
                          <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Still have questions */}
              <div className="border-2 border-[var(--color-navy-950)] bg-white p-8 shadow-[6px_6px_0px_0px_var(--color-green-500)]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-600)] mb-1">
                      Didn&apos;t find your answer?
                    </p>
                    <h3
                      className="text-2xl font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      Talk to Our Team
                    </h3>
                    <p className="mt-2 text-sm font-light text-[var(--color-gray-600)]">
                      15 minutes, specific to your operation, zero pressure. We&apos;ll answer anything.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 w-full sm:w-auto">
                    <Link
                      href="/contact"
                      className="group flex items-center justify-between bg-[var(--color-navy-950)] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                    >
                      Book a Call{" "}
                      <ArrowRight className="ml-6 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/roi-calculator"
                      className="group flex items-center justify-between border border-[var(--color-gray-200)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-gray-500)] transition-colors hover:border-[var(--color-navy-950)] hover:text-[var(--color-navy-950)]"
                    >
                      Calculate ROI{" "}
                      <ChevronRight className="ml-6 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
                <span className="text-[var(--color-green-500)]">Ready to See</span>
                <br />
                <span className="text-white">OpsFlo in Action?</span>
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-[var(--color-gray-400)]">
                A 30-day pilot with your operation answers every remaining question — with your data, your crews, and your results on the line.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto">
              <Link
                href="/contact"
                className="group flex items-center justify-between bg-[var(--color-green-500)] px-7 py-5 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
              >
                <span>Start a 30-Day Pilot</span>
                <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                href="/case-studies"
                className="group flex items-center justify-between border border-[var(--color-navy-700)] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-gray-300)] transition-colors hover:border-[var(--color-gray-500)] hover:text-white"
              >
                <span>View Customer Stories</span>
                <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
