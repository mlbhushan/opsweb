import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { Package, CalendarClock, Receipt } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Equipment Rental",
  description:
    "Maximize utilization and minimize revenue leakage in equipment rental operations. Rental lifecycle management, maintenance scheduling, and automated billing.",
  path: "/solutions/equipment-rental",
});

const data: SolutionPageData = {
  bannerTitle: "Equipment Rental",
  category: "industry",
  eyebrow: "Solutions / By Industry",

  headlineGreen: "Maximize Utilization.",
  headlineNavy: "Minimize Leakage.",

  tagline:
    "Equipment sitting idle is lost revenue. Equipment out but not billed is worse. OpsFlo tracks every asset through its entire rental lifecycle — from dispatch to return to invoice — ensuring nothing falls through the cracks.",

  stats: [
    { value: "100%", label: "Asset utilization visibility" },
    { value: "Zero", label: "Unbilled rental days" },
    { value: "Same-day", label: "Invoice generation" },
    { value: "Real-time", label: "Fleet location tracking" },
  ],

  problem: {
    label: "The Industry Problem",
    headline: "Revenue Leaks at Every Handoff",
    body: "Equipment rental operations have multiple points where revenue disappears: assets deployed but not activated in billing, rental periods extended but not captured, maintenance costs not billed back to the customer, and returns processed without finalizing the invoice. Each gap seems small — collectively, they add up to millions.",
    bullets: [
      "Equipment deployed but not activated in the billing system for days",
      "Rental period extensions verbally agreed — but not recorded in contracts",
      "Damage and consumables used on-site not billed back to customers",
      "Return processing delays mean assets idle without closure on the invoice",
    ],
  },

  solution: {
    label: "The OpsFlo Approach",
    headline: "Rent. Track. Maintain. Bill.",
    steps: [
      {
        icon: Package,
        title: "Asset Dispatch & Tracking",
        description:
          "Every piece of equipment is tracked from yard to site and back. GPS location, deployment status, and billing activation happen simultaneously.",
      },
      {
        icon: CalendarClock,
        title: "Rental Lifecycle Management",
        description:
          "Deployment, extensions, maintenance windows, and returns are tracked in one place. Billing runs automatically based on verified deployment periods.",
      },
      {
        icon: Receipt,
        title: "Automatic Billing at Return",
        description:
          "When equipment returns, the rental invoice is generated automatically — with all extension periods, damage charges, and consumables applied.",
      },
    ],
  },

  outcomes: {
    headline: "Outcomes for Equipment Rental Companies",
    items: [
      "Zero unbilled rental days — every deployment day captured and invoiced",
      "Maintenance costs automatically billed back where contractually applicable",
      "Asset utilization visibility enables better fleet size decisions",
      "Rental period disputes eliminated with GPS and timestamp evidence",
      "Invoice generation at return — not days or weeks later",
      "Maintenance scheduling prevents rental-period breakdowns",
    ],
  },

  sidebar: {
    ctaHeadline: "See Fleet ROI",
    ctaBody:
      "15-minute session to estimate how much revenue your current rental tracking gaps are costing you annually.",
    primaryCta: { label: "Get Revenue Diagnostic", href: "/contact" },
    secondaryCta: { label: "View Asset Module", href: "/platform/asset-intelligence" },
    relatedLinks: [
      { label: "Oilfield Services Industry", href: "/solutions/oilfield-services" },
      { label: "Well Services Industry", href: "/solutions/well-services" },
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Asset Intelligence Module", href: "/platform/asset-intelligence" },
      { label: "Inventory & Parts Module", href: "/platform/inventory" },
    ],
    quote: {
      text: "We had equipment out on sites for weeks that wasn't showing up in our billing system. OpsFlo found $400K in unbilled days in the first month.",
      name: "Operations Director",
      role: "Equipment Rental Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Every Asset.",
    headlineNavy: "Every Dollar.",
    body: "Stop letting deployed equipment slip through billing gaps. Track every asset from dispatch to invoice with OpsFlo.",
    primaryCta: { label: "Get Revenue Diagnostic", href: "/contact" },
    secondaryCta: { label: "View Platform", href: "/platform" },
  },
};

export default function EquipmentRentalPage() {
  return <SolutionPage data={data} />;
}
