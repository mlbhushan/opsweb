import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { FileText, TrendingDown, Receipt } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "For Finance & Billing Teams",
  description:
    "From field ticket to invoice in hours, not weeks. Eliminate billing delays, revenue leakage, and dispute-prone invoices.",
  path: "/solutions/finance",
});

const data: SolutionPageData = {
  bannerTitle: "Finance & Billing",
  category: "role",
  eyebrow: "Solutions / By Role",

  headlineGreen: "Field Ticket to Invoice.",
  headlineNavy: "In Hours, Not Weeks.",

  tagline:
    "Billing delays, incomplete records, and manual re-keying aren't just operational problems — they're a cash flow crisis. OpsFlo gives finance and billing teams the complete, validated, digital data they need to invoice accurately and immediately.",

  stats: [
    { value: "45 days", label: "Industry avg. billing cycle" },
    { value: "<4 hrs", label: "With OpsFlo" },
    { value: "68%", label: "Fewer invoice disputes" },
    { value: "3x", label: "Billing staff productivity gain" },
  ],

  problem: {
    label: "Your Current Reality",
    headline: "Billing Is **Broken** Before It Reaches You",
    body: "By the time field tickets reach your desk, the damage is already done: incomplete forms, missing signatures, illegible quantities, and rates that don't match the current contract. You spend more time chasing corrections than generating invoices — and every day of delay is cash that isn't in the bank.",
    bullets: [
      "Incomplete tickets require calls back to the field — delaying billing by days",
      "Rate card mismatches discovered at invoicing — not at the point of capture",
      "Manual re-keying from paper tickets takes hours and introduces errors",
      "Invoice disputes take weeks to resolve without photo and signature evidence",
    ],
  },

  solution: {
    label: "How OpsFlo Works for Finance",
    headline: "Complete Data. **Instant Invoicing**.",
    steps: [
      {
        icon: FileText,
        title: "Validated Data from the Field",
        description:
          "Every ticket arrives digitally with required fields, correct rates, customer signatures, and photo evidence. No chasing, no re-keying, no guessing.",
      },
      {
        icon: TrendingDown,
        title: "Automated Rate Card Matching",
        description:
          "Contract rates are applied automatically at ticket creation. Discrepancies are flagged in the field — before they become billing disputes weeks later.",
      },
      {
        icon: Receipt,
        title: "Accounting System Integration",
        description:
          "Approved tickets flow directly to QuickBooks, Sage, or your ERP. One-click invoice generation with zero duplicate data entry.",
      },
    ],
  },

  outcomes: {
    headline: "What **Changes** for Finance",
    items: [
      "Billing cycle reduced from 45+ days to same-day",
      "68% fewer invoice disputes with photo and signature evidence",
      "Billing staff productivity up 3x — no manual re-keying",
      "DSO reduced by 60% — cash in the bank faster",
      "Complete audit trail for every invoice and approval",
      "Revenue leakage eliminated — every hour and material captured",
    ],
  },

  sidebar: {
    ctaHeadline: "See Your Billing Gap",
    ctaBody:
      "15-minute revenue diagnostic to quantify how much your current billing cycle is costing you in delayed cash flow.",
    primaryCta: { label: "Get a Billing Assessment", href: "/contact" },
    secondaryCta: { label: "View Invoicing Module", href: "/platform/invoicing" },
    relatedLinks: [
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Accelerate Billing Cycles", href: "/solutions/faster-billing" },
      { label: "Executive View", href: "/solutions/executive" },
      { label: "Field Ticketing Module", href: "/platform/field-ticketing" },
      { label: "Invoicing & Billing Module", href: "/platform/invoicing" },
    ],
    quote: {
      text: "We cut our DSO from 58 days to 21 days. Finance stopped chasing field data and started closing the month on time.",
      name: "Director of Finance",
      role: "Oilfield Services Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Close the Gap.",
    headlineNavy: "Invoice Today.",
    body: "Stop waiting for field data that should have arrived yesterday. Get the complete, validated billing records you need to invoice on day one.",
    primaryCta: { label: "Get a Billing Assessment", href: "/contact" },
    secondaryCta: { label: "View Invoicing Module", href: "/platform/invoicing" },
  },
};

export default function FinancePage() {
  return <SolutionPage data={data} />;
}
