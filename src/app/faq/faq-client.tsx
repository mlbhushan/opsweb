"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown, ChevronRight, ArrowRight,
  Zap, Shield, Settings, DollarSign, HeadphonesIcon, HelpCircle, MessageCircle, FileText,
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
  isActive,
  onClick,
}: {
  item: { id: string; question: string; answer: string };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`group rounded-[24px] border transition-all duration-300 ${isActive ? 'border-[var(--color-green-400)] bg-white shadow-lg shadow-[var(--color-navy-900)]/5' : 'border-[var(--color-gray-200)] bg-white shadow-sm hover:border-[var(--color-green-300)] hover:shadow-md'}`}>
      <button
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 p-6 md:p-8 text-left"
        aria-expanded={isActive}
      >
        <div className="flex-1">
          <h3
            className={`text-lg md:text-xl font-bold tracking-tight leading-snug transition-colors ${isActive ? 'text-[var(--color-green-700)]' : 'text-[var(--color-navy-950)] group-hover:text-[var(--color-green-600)]'}`}
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            {item.question}
          </h3>
        </div>
        <div className={`shrink-0 rounded-full p-2 border transition-all duration-300 ${isActive ? 'rotate-180 bg-[var(--color-navy-950)] border-[var(--color-navy-950)] text-white shadow-md' : 'bg-[var(--color-gray-50)] border-[var(--color-gray-200)] text-[var(--color-gray-400)] group-hover:bg-[var(--color-navy-50)] group-hover:border-[var(--color-navy-200)] group-hover:text-[var(--color-navy-600)]'}`}>
          <ChevronDown className="size-5" />
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-base md:text-lg font-medium leading-relaxed text-[var(--color-gray-600)]">
            <div className="border-t border-[var(--color-gray-100)] pt-6">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQClient() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[var(--color-gray-200)] bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <Container className="relative z-10 py-16 md:py-24">
          <h1
            className="mb-6 text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-7xl text-balance"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            <span className="text-[var(--color-navy-950)]">Answers to</span>
            <br />
            <span className="text-[var(--color-green-500)]">Your Questions.</span>
          </h1>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-[var(--color-gray-600)] md:text-xl">
            Everything you need to know about OpsFlo&apos;s implementation, pricing, security, and ROI. Can&apos;t find what you&apos;re looking for? Reach out to our team.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {FAQ_SECTIONS.map((section) => {
              const Icon = section.icon;
              const isSelected = activeCategory === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveCategory(section.id);
                    setActiveIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-[16px] border px-4 py-3 text-xs md:text-sm font-bold tracking-widest transition-all duration-300 ${
                    isSelected
                      ? "border-[var(--color-green-500)] bg-[var(--color-green-50)] text-[var(--color-green-700)] shadow-sm"
                      : "border-[var(--color-gray-200)] bg-white text-[var(--color-gray-500)] hover:border-[var(--color-green-300)] hover:shadow-md hover:-translate-y-0.5 hover:text-[var(--color-navy-950)]"
                  } uppercase`}
                >
                  <Icon className="size-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── FAQ BODY ── */}
      <section className="py-16 md:py-24 bg-[var(--color-gray-50)]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-8 space-y-6">
              {FAQ_SECTIONS.filter((s) => s.id === activeCategory).map((section) => (
                <div key={section.id} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {section.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isActive={activeIndex === item.id}
                      onClick={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              ))}
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-[24px] bg-[var(--color-navy-950)] p-8 shadow-xl relative overflow-hidden group border border-[var(--color-navy-700)]">
                <div className="absolute right-0 top-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_70%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="relative z-10">
                  <MessageCircle className="mb-4 size-8 text-[var(--color-green-500)]" />
                  <h3
                    className="mb-2 text-2xl font-bold tracking-tighter text-white leading-tight"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    Need More Help?
                  </h3>
                  <p className="mb-6 text-sm font-medium leading-relaxed text-[var(--color-gray-400)]">
                    Our team is ready to answer any specific questions about how OpsFlo fits your operation.
                  </p>
                  <Link
                    href="/contact"
                    className="group/cta mb-3 flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-5 py-4 text-sm font-bold tracking-wider text-[var(--color-navy-950)] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)] uppercase"
                  >
                    Contact Sales
                    <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                  <a
                    href="mailto:support@opsflo.com"
                    className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] px-5 py-4 text-sm font-bold tracking-wider text-[var(--color-gray-300)] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-gray-400)] hover:text-white uppercase"
                  >
                    Email Support
                    <ChevronRight className="size-4 transition-transform group-hover/cta2:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                  Additional Resources
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "Case Studies", path: "/case-studies", icon: FileText },
                    { label: "ROI Calculator", path: "/roi-calculator", icon: Shield },
                    { label: "Solutions by Role", path: "/solutions/operations", icon: Settings },
                  ].map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.path}>
                        <Link
                          href={link.path}
                          className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-[var(--color-navy-950)] transition-all duration-300 shadow-sm border border-[var(--color-gray-200)] bg-white hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-green-400)]"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="size-4 text-[var(--color-green-500)]" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="size-4 text-[var(--color-gray-300)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-green-500)]" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
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
                <span className="text-white">Ready to Get</span>
                <br className="hidden sm:block" />
                <span className="text-[var(--color-green-500)]">Started?</span>
              </h2>
              <p className="mt-6 text-base font-medium leading-relaxed text-[var(--color-gray-400)]">
                Our team is ready to answer any questions about how OpsFlo fits your specific operation. Book a demo today.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-[380px]">
              <Link
                href="/contact"
                className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-6 py-5 text-sm font-bold tracking-widest text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)] uppercase"
              >
                <span>Book a Demo</span>
                <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
              </Link>
              <Link
                href="/roi-calculator"
                className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold tracking-widest text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-navy-900)] uppercase"
              >
                <span>Calculate Potential ROI</span>
                <ArrowRight className="size-5 transition-transform group-hover/cta2:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
