import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { MapPin, FileText, TrendingUp } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Fluid Hauling",
  description:
    "Every load tracked. Every drop billed. Digital BOLs, route verification, and automated invoicing for fluid hauling operations.",
  path: "/solutions/fluid-hauling",
});

const data: SolutionPageData = {
  bannerTitle: "Fluid Hauling",
  category: "industry",
  eyebrow: "Solutions / By Industry",

  headlineGreen: "Every Load Tracked.",
  headlineNavy: "Every Drop Billed.",

  tagline:
    "Fluid hauling operations run on volume, speed, and accuracy — but paper BOLs, manual volume tracking, and delayed billing eat into margins every single day. OpsFlo digitizes the entire hauling workflow from dispatch to invoice.",

  stats: [
    { value: "100%", label: "Loads captured digitally" },
    { value: "Same-day", label: "Invoice generation" },
    { value: "Zero", label: "Lost BOLs" },
    { value: "GPS", label: "Route and delivery verification" },
  ],

  problem: {
    label: "The Industry Problem",
    headline: "Paper BOLs Are **Costing You** Loads of Revenue",
    body: "Every paper BOL that gets lost, smudged, or delayed is revenue left on the table. Drivers make multiple trips per day across remote locations — and paper records cannot keep up. Volume discrepancies create disputes. Missing BOLs delay billing by weeks. And without GPS verification, you cannot prove the load was delivered at all.",
    bullets: [
      "Lost BOLs between wellsite and office — unrecoverable volume revenue",
      "Volume discrepancies impossible to resolve without GPS and timestamp data",
      "Manual re-entry of load data from paper takes hours and introduces errors",
      "Billing delays of 30+ days compress cash flow for operations running on margin",
    ],
  },

  solution: {
    label: "The OpsFlo Approach",
    headline: "**Digital**. Verified. **Immediate**.",
    steps: [
      {
        icon: FileText,
        title: "Digital BOLs & Load Tracking",
        description:
          "Drivers capture load data digitally — volumes, GPS coordinates, timestamps, and photos — at pickup and delivery. No paper required. Works offline.",
      },
      {
        icon: MapPin,
        title: "Route Verification & Optimization",
        description:
          "GPS tracking verifies routes and delivery locations. Multi-stop routing optimizes driver efficiency. Every delivery timestamped and geotagged.",
      },
      {
        icon: TrendingUp,
        title: "Automated Volume Billing",
        description:
          "Verified load data flows directly to invoicing with correct rates applied. Same-day billing instead of weeks-long delays. Zero re-keying.",
      },
    ],
  },

  outcomes: {
    headline: "Outcomes for **Fluid Hauling** Companies",
    items: [
      "Zero lost BOLs — every load captured digitally with GPS verification",
      "Same-day invoicing from verified load data",
      "Volume disputes eliminated with GPS, photo, and timestamp evidence",
      "Driver efficiency improved with optimized multi-stop routing",
      "Complete audit trail for environmental regulatory compliance",
      "Billing cycle reduced from 30+ days to same-day",
    ],
  },

  sidebar: {
    ctaHeadline: "Calculate Your BOL Gap",
    ctaBody:
      "15-minute session to quantify how many loads per month slip through paper-based BOL tracking and how much revenue that represents.",
    primaryCta: { label: "Get Revenue Diagnostic", href: "/contact" },
    secondaryCta: { label: "View Field Ticketing", href: "/platform/field-ticketing" },
    relatedLinks: [
      { label: "Oilfield Services Industry", href: "/solutions/oilfield-services" },
      { label: "Well Services Industry", href: "/solutions/well-services" },
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Field Ticketing Module", href: "/platform/field-ticketing" },
      { label: "Offline Architecture", href: "/platform/offline" },
    ],
    quote: {
      text: "Paper BOLs were our biggest problem — lost, illegible, or contested at billing. We went to zero paper and billing disputes dropped by 70% in 60 days.",
      name: "Director of Operations",
      role: "Fluid Hauling Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Go Paperless.",
    headlineNavy: "Bill Immediately.",
    body: "Stop losing revenue to paper BOLs and 30-day billing cycles. Every load captured, verified, and invoiced the same day — starting with your next truck.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "View Field Ticketing", href: "/platform/field-ticketing" },
  },
};

export default function FluidHaulingPage() {
  return <SolutionPage data={data} />;
}
