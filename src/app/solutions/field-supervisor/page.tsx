import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { Smartphone, WifiOff, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "For Field Supervisors",
  description:
    "Everything your crew needs to execute perfectly — digital checklists, offline-capable, and real-time job status. No paper, no guesswork.",
  path: "/solutions/field-supervisor",
});

const data: SolutionPageData = {
  bannerTitle: "Field Supervisor",
  category: "role",
  eyebrow: "Solutions / By Role",

  headlineGreen: "Everything Your Crew",
  headlineNavy: "Needs. Even Offline.",

  tagline:
    "Paper forms, connectivity dead zones, and end-of-day data entry are costing your crew hours every week and your company thousands in missed billing. OpsFlo gives field supervisors a mobile-first toolkit that works where cell towers don't.",

  stats: [
    { value: "100%", label: "Offline capable" },
    { value: "Zero", label: "Paper forms" },
    { value: "Same-day", label: "Data synced to billing" },
    { value: "GPS", label: "Verified job completion" },
  ],

  problem: {
    label: "Your Current Reality",
    headline: "Paper Forms Are **Killing** Your Efficiency",
    body: "Your crews arrive at a remote wellsite with no connectivity and a stack of paper forms. By the end of the shift, half the forms are incomplete, some are illegible, and others are left in the truck. Back at the office, billing is waiting on data that won't arrive until Friday's batch.",
    bullets: [
      "Dead zones mean digital tools become unavailable at the worst times",
      "Paper checklists lead to incomplete data and missed billing items",
      "End-of-day data entry is double work that burns out admin staff",
      "No visibility into job progress until crews call in — or don't",
    ],
  },

  solution: {
    label: "How OpsFlo Works in the Field",
    headline: "**Mobile**. **Offline**. Complete.",
    steps: [
      {
        icon: WifiOff,
        title: "Offline-First Architecture",
        description:
          "Full app functionality with zero connectivity. Jobs, checklists, and tickets are captured locally and sync automatically when signal returns.",
      },
      {
        icon: ClipboardCheck,
        title: "Structured Digital Checklists",
        description:
          "Required fields, photo evidence, and GPS stamps ensure nothing is missed. Findings trigger automatic work orders — before the crew leaves the site.",
      },
      {
        icon: Smartphone,
        title: "Built for Gloved Hands",
        description:
          "Large touch targets, high contrast for bright sunlight, and voice input for hands-free data entry. Designed by people who've worked the field.",
      },
    ],
  },

  outcomes: {
    headline: "What **Changes** for Your Crew",
    items: [
      "Full digital capability in areas with no cell coverage",
      "Inspections completed 40% faster with structured checklists",
      "Zero paper forms — every record captured and synced automatically",
      "Customer signatures captured digitally — no disputes on delivery",
      "Job completion visible to dispatch and billing in real time",
      "Findings automatically trigger work orders — no manual follow-up",
    ],
  },

  sidebar: {
    ctaHeadline: "See It in the Field",
    ctaBody:
      "30-day pilot with your crew on your job types. We'll show you what full digital execution looks like on your actual sites.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "See Mobile App", href: "/platform/mobile" },
    relatedLinks: [
      { label: "Operations Manager Role", href: "/solutions/operations-manager" },
      { label: "HSE Manager Role", href: "/solutions/hse" },
      { label: "Inspections & Checklists", href: "/platform/inspections" },
      { label: "Mobile App Module", href: "/platform/mobile" },
      { label: "Offline Architecture", href: "/platform/offline" },
    ],
    quote: {
      text: "Our guys work 60 miles from the nearest tower. With OpsFlo offline mode, they capture everything and it syncs when they hit the highway.",
      name: "Field Supervisor",
      role: "Oilfield Services Company, SK",
    },
  },

  bottomCta: {
    headlineGreen: "Field-Ready.",
    headlineNavy: "Offline-Capable.",
    body: "Give your crew the tools that work where they work — not just in the office. 30-day pilot with real crews on real sites.",
    primaryCta: { label: "Start a Field Pilot", href: "/contact" },
    secondaryCta: { label: "View Mobile App", href: "/platform/mobile" },
  },
};

export default function FieldSupervisorPage() {
  return <SolutionPage data={data} />;
}
