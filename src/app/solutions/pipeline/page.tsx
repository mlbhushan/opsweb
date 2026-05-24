import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { Activity, Shield, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pipeline & Infrastructure",
  description:
    "Inspection, maintenance, and compliance management for pipeline and infrastructure operators. Built for the regulatory complexity of midstream operations.",
  path: "/solutions/pipeline",
});

const data: SolutionPageData = {
  bannerTitle: "Pipeline & Infrastructure",
  category: "industry",
  eyebrow: "Solutions / By Industry",

  headlineGreen: "Infrastructure Integrity.",
  headlineNavy: "Compliance Guaranteed.",

  tagline:
    "Pipeline and infrastructure operations run under some of the most demanding regulatory requirements in the energy sector. OpsFlo provides the inspection rigor, maintenance tracking, and audit-ready documentation that midstream operators need — without the administrative burden.",

  stats: [
    { value: "100%", label: "Inspection completion rate" },
    { value: "Real-time", label: "Integrity monitoring" },
    { value: "1-click", label: "Regulatory package generation" },
    { value: "Zero", label: "Compliance gaps" },
  ],

  problem: {
    label: "The Industry Challenge",
    headline: "Regulatory Complexity Demands **Rigorous Systems**",
    body: "Pipeline operators face inspection intervals, regulatory filing deadlines, and incident response requirements that generic field service tools cannot handle. Paper-based inspection records, siloed maintenance systems, and manual compliance assembly create risk — both operational and regulatory — that compounds over time.",
    bullets: [
      "Inspection intervals mandated by regulation — missed intervals create liability",
      "Corrosion, pressure anomalies, and integrity findings require tracked remediation",
      "Regulatory filings require complete documented evidence — not field notes",
      "Incident response documentation must be real-time — not reconstructed after",
    ],
  },

  solution: {
    label: "The OpsFlo Approach",
    headline: "Inspect. **Monitor**. Document.",
    steps: [
      {
        icon: Activity,
        title: "Structured Integrity Inspections",
        description:
          "Regulatory-compliant inspection templates with required fields, GPS stamps, and photo evidence. Every finding triggers an automatic remediation workflow.",
      },
      {
        icon: Shield,
        title: "Compliance Documentation",
        description:
          "Audit packages generated automatically from structured field data. Every inspection, finding, and remediation is linked, searchable, and ready for regulators.",
      },
      {
        icon: MapPin,
        title: "Geographic Asset Management",
        description:
          "Map-based asset registry tracks every line segment, valve, and monitoring point with maintenance history, inspection due dates, and integrity status.",
      },
    ],
  },

  outcomes: {
    headline: "Outcomes for **Pipeline Operators**",
    items: [
      "100% inspection completion with automated scheduling and reminders",
      "Zero regulatory filing gaps — compliance documentation always current",
      "Integrity findings tracked from detection to verified remediation",
      "Incident response documented in real time — not reconstructed",
      "Audit preparation reduced from weeks to hours",
      "Asset lifecycle extended through condition-based maintenance intervals",
    ],
  },

  sidebar: {
    ctaHeadline: "Pipeline Operations Demo",
    ctaBody:
      "See OpsFlo's integrity inspection and compliance documentation capabilities applied to your specific pipeline type and regulatory jurisdiction.",
    primaryCta: { label: "Book a Demo", href: "/contact?industry=pipeline" },
    secondaryCta: { label: "View Compliance Module", href: "/platform/compliance" },
    relatedLinks: [
      { label: "Oilfield Services Industry", href: "/solutions/oilfield-services" },
      { label: "Well Services Industry", href: "/solutions/well-services" },
      { label: "HSE Manager Role", href: "/solutions/hse" },
      { label: "Compliance & Audit Module", href: "/platform/compliance" },
      { label: "Inspections & Checklists", href: "/platform/inspections" },
    ],
    quote: {
      text: "Our regulator asked for a 5-year inspection history with remediation evidence. We exported it in 20 minutes. They were expecting weeks of data assembly.",
      name: "VP of Integrity Management",
      role: "Midstream Pipeline Operator, BC",
    },
  },

  bottomCta: {
    headlineGreen: "Integrity First.",
    headlineNavy: "Compliance Always.",
    body: "Pipeline operations require documentation rigor that generic tools cannot deliver. See how OpsFlo handles regulatory complexity from the ground up.",
    primaryCta: { label: "Book a Pipeline Demo", href: "/contact?industry=pipeline" },
    secondaryCta: { label: "View Compliance Module", href: "/platform/compliance" },
  },
};

export default function PipelinePage() {
  return <SolutionPage data={data} />;
}
