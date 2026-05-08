import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { ClipboardCheck, AlertTriangle, Package } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "For HSE Managers",
  description:
    "Audit-ready safety and compliance documentation — generated automatically from structured field workflows. Zero paper, zero gaps.",
  path: "/solutions/hse",
});

const data: SolutionPageData = {
  bannerTitle: "HSE Manager",
  category: "role",
  eyebrow: "Solutions / By Role",

  headlineGreen: "Audit-Ready.",
  headlineNavy: "Always.",

  tagline:
    "Every inspection completed. Every finding tracked to resolution. Every safety record ready for auditors — automatically generated as a byproduct of normal operations. No all-nighters assembling evidence.",

  stats: [
    { value: "100%", label: "Inspection completion rate" },
    { value: "Zero", label: "Missed corrective actions" },
    { value: "1-click", label: "Audit package generation" },
    { value: "Real-time", label: "Safety KPI visibility" },
  ],

  problem: {
    label: "Your Current Reality",
    headline: "Paper-Based Safety Creates Paper-Based Risk",
    body: "You know the inspections are happening — but you cannot prove it. Paper JSAs are filed and forgotten. Incident reports take days to reach your desk. Corrective actions are assigned in meetings but never tracked to resolution. When the auditor arrives, you are pulling all-nighters assembling evidence that should have been captured digitally from the start.",
    bullets: [
      "Paper safety records cannot be searched, filtered, or audited efficiently",
      "Corrective actions assigned verbally — no system tracks them to completion",
      "Incident reports take 48-72 hours to reach the HSE desk",
      "Compliance gaps only discovered during audits — not proactively managed",
    ],
  },

  solution: {
    label: "How OpsFlo Works for HSE",
    headline: "Digital Safety. Automatic Compliance.",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Digital Safety Workflows",
        description:
          "Pre-job JSAs, hazard assessments, and toolbox talks are completed digitally with required fields, photos, and e-signatures — before work starts.",
      },
      {
        icon: AlertTriangle,
        title: "Incident & Near-Miss Tracking",
        description:
          "One-tap reporting with automatic notification chains. Every incident generates a tracked corrective action with assigned owner and due date.",
      },
      {
        icon: Package,
        title: "Compliance Package Generation",
        description:
          "Generate complete audit packages for any time period, asset, or regulation — with all evidence attached — in one click. No manual assembly.",
      },
    ],
  },

  outcomes: {
    headline: "What Changes for HSE",
    items: [
      "100% digital capture of all safety events and near-misses",
      "Corrective actions tracked to verified resolution — zero dropped items",
      "Audit preparation reduced from days to minutes",
      "Safety trend visibility with leading indicators — not just lagging",
      "Regulatory compliance documentation always current and searchable",
      "Safety culture improvement — crews submit near-misses because it's easy",
    ],
  },

  sidebar: {
    ctaHeadline: "See the HSE Dashboard",
    ctaBody:
      "Live walkthrough of OpsFlo's safety and compliance tools — tailored to your inspection types and regulatory requirements.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "View Safety Module", href: "/platform/safety" },
    relatedLinks: [
      { label: "Field Supervisor Role", href: "/solutions/field-supervisor" },
      { label: "Operations Manager Role", href: "/solutions/operations-manager" },
      { label: "Ensure Inspection Follow-Through", href: "/solutions/inspection-execution" },
      { label: "Safety Management Module", href: "/platform/safety" },
      { label: "Compliance & Audit Module", href: "/platform/compliance" },
    ],
    quote: {
      text: "Our last audit took 2 hours to prepare for instead of 3 days. Every record was digital, searchable, and exactly where the auditor expected it.",
      name: "HSE Manager",
      role: "Pipeline Services Company, BC",
    },
  },

  bottomCta: {
    headlineGreen: "Prove Compliance.",
    headlineNavy: "In One Click.",
    body: "Stop assembling audit packages from paper records and email threads. OpsFlo generates compliance documentation automatically from structured field workflows.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "View Safety Module", href: "/platform/safety" },
  },
};

export default function HSEPage() {
  return <SolutionPage data={data} />;
}
