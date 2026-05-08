import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { FileText, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Stop Revenue Leakage",
  description:
    "Capture every billable event. Eliminate the 5-15% revenue leakage that plagues oilfield services companies. Field ticket to invoice in hours.",
  path: "/solutions/revenue-leakage",
});

const data: SolutionPageData = {
  bannerTitle: "Revenue Leakage",
  category: "pain",
  eyebrow: "Solutions / By Pain Point",

  headlineGreen: "Stop Losing",
  headlineNavy: "Billable Revenue.",

  tagline:
    "Most oilfield services companies lose 5 to 15% of annual revenue to work that was completed but never billed. OpsFlo ensures every job, every material, and every hour is captured, validated, and invoiced — automatically.",

  stats: [
    { value: "5-15%", label: "Avg. industry revenue leakage" },
    { value: "$2.4M", label: "Avg. annual loss, mid-size operator" },
    { value: "72%", label: "Leakage caused by paper tickets" },
    { value: "<1%", label: "Leakage rate with OpsFlo" },
  ],

  problem: {
    label: "The Problem",
    headline: "Where Your Revenue Disappears",
    body: "Revenue leakage doesn't happen in one place — it happens at every handoff. Field crews forget to record materials used. Handwritten tickets are illegible or lost in transit. Jobs are completed but never ticketed. Rate card changes aren't applied. By the time billing discovers the gap, the window to invoice has closed.",
    bullets: [
      "Paper tickets lost between wellsite and office — unrecoverable revenue",
      "Incomplete job records mean disputed invoices and delayed payment",
      "Rate card mismatches go undetected until the customer pushes back",
      "Billing staff re-keying data manually introduces errors and delays",
    ],
  },

  solution: {
    label: "How OpsFlo Fixes It",
    headline: "Capture. Validate. Invoice.",
    steps: [
      {
        icon: FileText,
        title: "Digital Capture at Source",
        description:
          "Every job, material, and hour is captured digitally at the point of work — before memory fades and paper gets lost. Offline-capable for remote sites.",
      },
      {
        icon: ShieldCheck,
        title: "Automated Validation",
        description:
          "Tickets are validated against rate cards and contracts in real time. Missing charges are flagged before submission. No manual lookups required.",
      },
      {
        icon: TrendingUp,
        title: "Direct-to-Invoice",
        description:
          "Approved tickets flow directly into your accounting system. Revenue is recognized within hours, not weeks. Zero duplicate data entry.",
      },
    ],
  },

  outcomes: {
    headline: "What Changes After OpsFlo",
    items: [
      "Revenue leakage reduced from 5-8% to under 1%",
      "Billing cycle cut from 45+ days to under 4 hours",
      "Zero lost field tickets — every job captured digitally",
      "Fewer invoice disputes with photo evidence and e-signatures",
      "Cash flow improvement of 30-40% from faster billing",
      "Billing staff productivity up 3x — no re-keying of data",
    ],
  },

  sidebar: {
    ctaHeadline: "See Your Revenue at Risk",
    ctaBody:
      "15-minute diagnostic of your current field-to-billing workflow. We'll quantify exactly how much you're leaving on the table.",
    primaryCta: { label: "Get Revenue Diagnostic", href: "/contact" },
    secondaryCta: { label: "Talk to Sales", href: "/contact" },
    relatedLinks: [
      { label: "Prevent Unplanned Downtime", href: "/solutions/prevent-downtime" },
      { label: "Accelerate Billing Cycles", href: "/solutions/faster-billing" },
      { label: "Ensure Inspection Follow-Through", href: "/solutions/inspection-execution" },
      { label: "Field Ticketing Module", href: "/platform/field-ticketing" },
      { label: "Invoicing & Billing Module", href: "/platform/invoicing" },
    ],
    quote: {
      text: "We recovered $1.4M in the first year just by digitizing field tickets. Work that was done but never billed.",
      name: "VP of Finance",
      role: "Oilfield Services Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Stop the Leak.",
    headlineNavy: "Capture Every Dollar.",
    body: "Every day you wait is revenue you cannot recover. Book a 15-minute diagnostic and see exactly where your billing gaps are.",
    primaryCta: { label: "Get a Revenue Diagnostic", href: "/contact" },
    secondaryCta: { label: "View Platform", href: "/platform" },
  },
};

export default function RevenueLeakagePage() {
  return <SolutionPage data={data} />;
}
