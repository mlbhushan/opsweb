import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { BarChart3, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "For Executives & C-Suite",
  description:
    "Strategic operational visibility, ROI clarity, and competitive advantage — the executive view of OpsFlo.",
  path: "/solutions/executive",
});

const data: SolutionPageData = {
  bannerTitle: "Executive",
  category: "role",
  eyebrow: "Solutions / By Role",

  headlineGreen: "Run Operations.",
  headlineNavy: "Optimize Automatically.",

  tagline:
    "As a leader, you need confidence that operations are executing efficiently, revenue is being captured, and your competitive position is strengthening. OpsFlo delivers strategic visibility and measurable ROI — not just another software line item.",

  stats: [
    { value: "10-15%", label: "Revenue recovery" },
    { value: "60%", label: "Downtime reduction" },
    { value: "<6 mo", label: "Typical payback period" },
    { value: "Real-time", label: "Operational intelligence" },
  ],

  problem: {
    label: "The Leadership Gap",
    headline: "You Cannot **Optimize** What You Cannot See",
    body: "Strategic decisions about operations, capacity, and growth are being made with incomplete data. You see financial results 30-60 days after the operational reality. Your competitive edge is being eroded by inefficiency you cannot quantify. And the cost of inaction — in lost revenue, unplanned downtime, and compliance risk — compounds every quarter.",
    bullets: [
      "Financial reporting lags operational reality by 30-60 days",
      "Revenue leakage of 5-15% undetected until year-end reconciliation",
      "Downtime costs tracked in maintenance — not connected to revenue impact",
      "Compliance and audit risk grows as documentation gaps accumulate",
    ],
  },

  solution: {
    label: "How OpsFlo Serves Leadership",
    headline: "**Visibility**. Intelligence. ROI.",
    steps: [
      {
        icon: BarChart3,
        title: "Executive Dashboard",
        description:
          "Real-time KPIs across operations, revenue, safety, and compliance — updated as work happens, not when reports are manually compiled.",
      },
      {
        icon: TrendingUp,
        title: "Quantified Impact",
        description:
          "Every OpsFlo metric ties to a financial outcome: revenue recovered, costs avoided, efficiency gained. No vanity metrics — only business outcomes.",
      },
      {
        icon: Shield,
        title: "Strategic Decision Support",
        description:
          "AI-powered trend analysis and predictive insights help you allocate resources, plan capacity, and identify growth opportunities before competitors do.",
      },
    ],
  },

  outcomes: {
    headline: "**Executive** Outcomes",
    items: [
      "Complete operational visibility in real time — no report wait",
      "Measurable ROI with typical payback under 6 months",
      "Revenue leakage eliminated — 10-15% recovery in year one",
      "Competitive differentiation through operational excellence",
      "Audit and compliance readiness without extra overhead",
      "Data-driven growth decisions with predictive operational intelligence",
    ],
  },

  sidebar: {
    ctaHeadline: "Executive Briefing",
    ctaBody:
      "30-minute strategic overview for leadership teams. We'll model your current revenue at risk and projected ROI from Day 1.",
    primaryCta: { label: "Book an Exec Briefing", href: "/contact" },
    secondaryCta: { label: "View ROI Calculator", href: "/roi-calculator" },
    relatedLinks: [
      { label: "Operations Manager Role", href: "/solutions/operations-manager" },
      { label: "Finance & Billing Role", href: "/solutions/finance" },
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Analytics & Reporting", href: "/platform/analytics" },
      { label: "AI Decision Engine", href: "/platform/ai" },
    ],
    quote: {
      text: "I can now see operational performance and financial impact on the same screen. We made a major fleet decision in a day that used to take a quarter.",
      name: "CEO",
      role: "Oilfield Services Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "See the ROI.",
    headlineNavy: "In 30 Minutes.",
    body: "Bring your current operational metrics. We'll model the exact revenue recovery and cost savings you can expect from OpsFlo in Year 1.",
    primaryCta: { label: "Book an Executive Briefing", href: "/contact" },
    secondaryCta: { label: "Try ROI Calculator", href: "/roi-calculator" },
  },
};

export default function ExecutivePage() {
  return <SolutionPage data={data} />;
}
