import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { ClipboardCheck, Bell, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Ensure Inspection Follow-Through",
  description:
    "Every inspection finding resolved. Automated escalation from inspection to corrective action to verified completion — zero items dropped.",
  path: "/solutions/inspection-execution",
});

const data: SolutionPageData = {
  bannerTitle: "Inspection Execution",
  category: "pain",
  eyebrow: "Solutions / By Pain Point",

  headlineGreen: "Every Inspection",
  headlineNavy: "Leads to Action.",

  tagline:
    "Inspections are completed but findings are never followed through. Critical items are assigned in the field and forgotten in the office. OpsFlo closes the loop — from every inspection finding to verified corrective action.",

  stats: [
    { value: "100%", label: "Inspection finding follow-through" },
    { value: "Zero", label: "Missed corrective actions" },
    { value: "1-click", label: "Audit package generation" },
    { value: "Real-time", label: "Compliance visibility" },
  ],

  problem: {
    label: "The Problem",
    headline: "Inspections Completed. Issues Unresolved.",
    body: "The inspection happens. The checklist is signed. But the finding — the cracked fitting, the pressure anomaly, the safety hazard — gets scribbled on a paper form and handed to someone who has no system to track it. Weeks later, the same issue shows up again. Or worse, the auditor finds it first.",
    bullets: [
      "Findings captured on paper with no automated escalation path",
      "Work orders generated manually days after the inspection",
      "No visibility into which corrective actions are open vs. resolved",
      "Auditors find the same recurring issues because nothing was closed out",
    ],
  },

  solution: {
    label: "How OpsFlo Closes the Loop",
    headline: "Inspect. Detect. Resolve.",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Structured Digital Inspections",
        description:
          "Checklists with required fields, photo evidence, and GPS stamps. Findings are captured in a structured format — not free-text notes that get lost.",
      },
      {
        icon: Bell,
        title: "Automatic Work Order Creation",
        description:
          "Every flagged finding triggers an automatic work order. The right crew is assigned, the parts are ordered, and the clock starts — no manual handoff required.",
      },
      {
        icon: CheckCircle2,
        title: "Verified Resolution Tracking",
        description:
          "Corrective actions are tracked from open to closed with photographic verification. Nothing is marked resolved until a field tech confirms it.",
      },
    ],
  },

  outcomes: {
    headline: "What Changes After OpsFlo",
    items: [
      "100% of inspection findings trigger tracked corrective actions",
      "Zero items fall through the cracks between inspection and resolution",
      "Audit packages generated automatically for any time period",
      "Recurring issues eliminated — root causes addressed, not re-inspected",
      "Field supervisors always know which items are open vs. resolved",
      "Regulatory compliance documentation current at all times",
    ],
  },

  sidebar: {
    ctaHeadline: "Start a Pilot in 30 Days",
    ctaBody:
      "Deploy with 1-2 crews, see 100% follow-through on every inspection finding within the first month.",
    primaryCta: { label: "Start a Pilot", href: "/contact" },
    secondaryCta: { label: "Talk to Sales", href: "/contact" },
    relatedLinks: [
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Prevent Unplanned Downtime", href: "/solutions/prevent-downtime" },
      { label: "Inspections & Checklists", href: "/platform/inspections" },
      { label: "Work Order Automation", href: "/platform/work-orders" },
      { label: "Safety Management", href: "/platform/safety" },
    ],
    quote: {
      text: "We had inspection findings sitting unresolved for weeks. With OpsFlo, every finding has a work order before the inspector leaves the site.",
      name: "HSE Manager",
      role: "Oilfield Services Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Close Every Loop.",
    headlineNavy: "Zero Items Dropped.",
    body: "Inspections without follow-through are just documentation. Start a 30-day pilot and prove 100% corrective action completion across your operations.",
    primaryCta: { label: "Start a Pilot", href: "/contact" },
    secondaryCta: { label: "View Inspections Module", href: "/platform/inspections" },
  },
};

export default function InspectionExecutionPage() {
  return <SolutionPage data={data} />;
}
