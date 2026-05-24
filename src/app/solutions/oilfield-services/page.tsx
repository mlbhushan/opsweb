import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { WifiOff, Wrench, Thermometer } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Oilfield Services",
  description:
    "Purpose-built operations platform for oilfield services. Offline-first, complex job structures, harsh-condition ready.",
  path: "/solutions/oilfield-services",
});

const data: SolutionPageData = {
  bannerTitle: "Oilfield Services",
  category: "industry",
  eyebrow: "Solutions / By Industry",

  headlineGreen: "Built for Oil & Gas.",
  headlineNavy: "Not Retrofitted for It.",

  tagline:
    "Generic field service software was built for HVAC technicians and plumbers. OpsFlo was built for the realities of oilfield operations — remote sites, complex jobs, harsh conditions, and offline environments where a connectivity drop cannot stop your crew.",

  stats: [
    { value: "100%", label: "Offline capable" },
    { value: "Zero", label: "Connectivity dependency" },
    { value: "2M+", label: "Field tickets processed" },
    { value: "<4 hrs", label: "Avg. billing cycle" },
  ],

  problem: {
    label: "Why Generic Tools Fail",
    headline: "Generic Tools **Break** in the Field",
    body: "Horizontal FSM platforms and ERP systems are engineered for connected, controlled environments. Oilfield operations are none of those things. Dead zones, extreme temperatures, complex multi-stage jobs, and custom rate structures all break tools that weren't designed with this environment in mind.",
    bullets: [
      "Connectivity-dependent tools become useless 60 miles from the nearest tower",
      "Generic job structures can't handle complex frac, wireline, or pump-down workflows",
      "Rate card complexity (standby, call-out, weather) overwhelms FSM platforms",
      "Regulatory documentation requirements for oil and gas aren't a standard feature",
    ],
  },

  solution: {
    label: "Purpose-Built Capabilities",
    headline: "**Engineered** for the Patch.",
    steps: [
      {
        icon: WifiOff,
        title: "Offline-First Architecture",
        description:
          "Full app functionality with zero connectivity dependency. Everything syncs automatically when signal returns. Not a workaround — an architectural decision.",
      },
      {
        icon: Wrench,
        title: "Complex Job Structures",
        description:
          "Multi-stage jobs, multi-crew coordination, high-value equipment tracking, and custom billing structures built specifically for well servicing, wireline, and frac operations.",
      },
      {
        icon: Thermometer,
        title: "Harsh-Condition Ready",
        description:
          "Large touch targets, high-contrast displays for bright sunlight, voice input for gloved hands, and rugged device compatibility. Designed for the field, not the boardroom.",
      },
    ],
  },

  outcomes: {
    headline: "What Oilfield Operators **See**",
    items: [
      "100% data capture with zero connectivity dependency",
      "Complex multi-stage job tracking across multiple crews",
      "Revenue leakage eliminated — every billable item captured",
      "Billing cycle reduced from 45+ days to under 4 hours",
      "Regulatory documentation generated automatically from normal workflows",
      "Asset health monitoring across harsh-environment equipment fleets",
    ],
  },

  sidebar: {
    ctaHeadline: "Start an Oilfield Pilot",
    ctaBody:
      "30-day pilot with 1-2 field crews on your actual jobs. No long-term commitment until you see results on your operations.",
    primaryCta: { label: "Book a Demo", href: "/contact?industry=oilfield" },
    secondaryCta: { label: "View Platform", href: "/platform" },
    relatedLinks: [
      { label: "Well Services Industry", href: "/solutions/well-services" },
      { label: "Pipeline & Infrastructure", href: "/solutions/pipeline" },
      { label: "Fluid Hauling Industry", href: "/solutions/fluid-hauling" },
      { label: "Offline-First Architecture", href: "/platform/offline" },
      { label: "Field Execution Engine", href: "/platform/field-execution" },
    ],
    quote: {
      text: "We tried three FSM platforms before OpsFlo. The others all broke the moment we lost signal. OpsFlo was built for that from day one.",
      name: "VP of Operations",
      role: "Oilfield Services Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Built for the Patch.",
    headlineNavy: "Proven in the Field.",
    body: "Stop forcing generic tools to work in oilfield environments. Start with a 30-day pilot on your actual jobs, your crews, and your sites.",
    primaryCta: { label: "Start an Oilfield Pilot", href: "/contact?industry=oilfield" },
    secondaryCta: { label: "View Platform", href: "/platform" },
  },
};

export default function OilfieldServicesPage() {
  return <SolutionPage data={data} />;
}
