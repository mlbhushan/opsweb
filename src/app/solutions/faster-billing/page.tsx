import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { Smartphone, ShieldCheck, Receipt } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Accelerate Billing Cycles",
  description:
    "From 45-day billing cycles to same-day invoicing. Stop waiting weeks to get paid for completed field work.",
  path: "/solutions/faster-billing",
});

const data: SolutionPageData = {
  bannerTitle: "Faster Billing",
  category: "pain",
  eyebrow: "Solutions / By Pain Point",

  headlineGreen: "Jobs Done.",
  headlineNavy: "Invoice in Hours.",

  tagline:
    "Every day between job completion and invoicing costs you money. The average oilfield services company waits 45+ days to invoice work that was completed the same day. OpsFlo collapses the billing cycle from weeks to hours — automatically.",

  stats: [
    { value: "45+ days", label: "Industry avg. billing cycle" },
    { value: "<4 hrs", label: "Billing cycle with OpsFlo" },
    { value: "30-40%", label: "Cash flow improvement" },
    { value: "68%", label: "Fewer invoice disputes" },
  ],

  problem: {
    label: "The Problem",
    headline: "Why Billing Takes **45+ Days**",
    body: "The traditional billing workflow is broken at every step: paper tickets are collected weekly, driven to the office, re-keyed into accounting software, reviewed for errors, approved through email chains, and finally invoiced. Each step adds days. Each handoff introduces errors. And the longer the cycle, the more disputes arise from incomplete or illegible records.",
    bullets: [
      "Paper tickets collected weekly — not daily — delaying the entire cycle",
      "Manual re-keying into accounting software introduces errors and takes hours",
      "Rate card lookups done manually — wrong rates applied and only caught in disputes",
      "Invoice approval chains via email add 5-10 days to every billing cycle",
    ],
  },

  solution: {
    label: "How OpsFlo Fixes It",
    headline: "Capture. **Validate**. **Invoice**.",
    steps: [
      {
        icon: Smartphone,
        title: "Capture Complete Data On-Site",
        description:
          "Digital tickets capture all billable detail at the wellsite: hours, materials, equipment, and customer signatures. Even offline in dead zones.",
      },
      {
        icon: ShieldCheck,
        title: "Validate Against Contracts",
        description:
          "Automated rate card lookup ensures correct pricing. Contract terms are applied automatically. Discrepancies are flagged before submission — not discovered in a dispute.",
      },
      {
        icon: Receipt,
        title: "One-Click Invoice Generation",
        description:
          "Approved tickets generate invoices automatically. Integration with your accounting system means no duplicate entry and no delays.",
      },
    ],
  },

  outcomes: {
    headline: "**Impact** on Your Operations",
    items: [
      "Billing cycle reduced from 45+ days to same-day",
      "Cash flow improvement of 30-40% from faster recognition",
      "68% fewer invoice disputes with photo and e-signature evidence",
      "Billing staff productivity up 3x — no manual re-keying",
      "DSO (Days Sales Outstanding) reduced by 60%",
      "Real-time billing status visibility for finance leadership",
    ],
  },

  sidebar: {
    ctaHeadline: "Calculate Your Billing Gap",
    ctaBody:
      "15-minute session to quantify exactly how much your current billing cycle is costing you in delayed revenue and cash flow.",
    primaryCta: { label: "Get a Billing Assessment", href: "/contact" },
    secondaryCta: { label: "See Field Ticketing", href: "/platform/field-ticketing" },
    relatedLinks: [
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Finance & Billing Role", href: "/solutions/finance" },
      { label: "Field Ticketing Module", href: "/platform/field-ticketing" },
      { label: "Invoicing & Billing Module", href: "/platform/invoicing" },
      { label: "Analytics & Reporting", href: "/platform/analytics" },
    ],
    quote: {
      text: "We went from 40-day billing cycles to billing the same day work is done. Our DSO dropped from 62 days to 18 days in 3 months.",
      name: "CFO",
      role: "Well Services Company, SK",
    },
  },

  bottomCta: {
    headlineGreen: "Same-Day Billing.",
    headlineNavy: "Starting Now.",
    body: "Stop waiting 45 days to recognize revenue you've already earned. See how OpsFlo closes the gap between job completion and cash in the bank.",
    primaryCta: { label: "Get a Billing Assessment", href: "/contact" },
    secondaryCta: { label: "View Invoicing Module", href: "/platform/invoicing" },
  },
};

export default function FasterBillingPage() {
  return <SolutionPage data={data} />;
}
