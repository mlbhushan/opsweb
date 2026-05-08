import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { Layers, Users, FileText } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Well Services",
  description:
    "Purpose-built operations management for well services — completions, workovers, and interventions tracked from dispatch to invoice.",
  path: "/solutions/well-services",
});

const data: SolutionPageData = {
  bannerTitle: "Well Services",
  category: "industry",
  eyebrow: "Solutions / By Industry",

  headlineGreen: "Complex Wells.",
  headlineNavy: "Zero Gaps.",

  tagline:
    "Well services operations — completions, workovers, stimulation, interventions — involve complex multi-crew, multi-day jobs with high-value equipment and regulatory documentation requirements. OpsFlo ensures every stage is captured, coordinated, and billed.",

  stats: [
    { value: "100%", label: "Job stage capture" },
    { value: "Real-time", label: "Multi-crew coordination" },
    { value: "Zero", label: "Missed billing items" },
    { value: "Complete", label: "Regulatory documentation" },
  ],

  problem: {
    label: "The Industry Problem",
    headline: "Complex Jobs Need More Than Spreadsheets",
    body: "Well service jobs span multiple days, multiple crews, and dozens of equipment configurations. Tracking progress, materials, and time across these operations with spreadsheets and paper leads to missed billing items, coordination failures, and compliance gaps. The more complex the job, the more revenue slips through.",
    bullets: [
      "Multi-stage job handoffs between crews lose critical billing information",
      "Equipment on-site for a 72-hour job tracked on whiteboards, not systems",
      "Regulatory paperwork assembled after the job — from incomplete field notes",
      "Customer invoices missing high-value items discovered only at dispute",
    ],
  },

  solution: {
    label: "The OpsFlo Approach",
    headline: "Stage by Stage. Crew by Crew.",
    steps: [
      {
        icon: Layers,
        title: "Structured Job Staging",
        description:
          "Break complex jobs into tracked stages with specific milestones, equipment requirements, and crew assignments for each phase. Nothing moves without documentation.",
      },
      {
        icon: Users,
        title: "Multi-Crew Coordination",
        description:
          "Real-time visibility across all crews on a job. Handoffs are documented, equipment movements are tracked, and progress is visible to everyone simultaneously.",
      },
      {
        icon: FileText,
        title: "Complete Revenue Capture",
        description:
          "Every stage, every material, every hour is captured digitally and flows to billing — ensuring zero missed items on high-value, multi-day jobs.",
      },
    ],
  },

  outcomes: {
    headline: "Outcomes for Well Services Companies",
    items: [
      "Complete revenue capture on complex multi-stage jobs",
      "Real-time coordination across crews and equipment fleets",
      "Regulatory documentation generated automatically from field data",
      "Equipment utilization optimized across concurrent job sites",
      "Faster billing with zero re-keying from digital field tickets",
      "Job completion verified with GPS, photos, and customer signatures",
    ],
  },

  sidebar: {
    ctaHeadline: "Well Services Pilot",
    ctaBody:
      "30-day pilot on your actual well service jobs. We'll capture every stage, every crew, and every billable item — and show you what you've been missing.",
    primaryCta: { label: "Start a Pilot", href: "/contact?industry=well-services" },
    secondaryCta: { label: "View Field Execution", href: "/platform/field-execution" },
    relatedLinks: [
      { label: "Oilfield Services Industry", href: "/solutions/oilfield-services" },
      { label: "Pipeline & Infrastructure", href: "/solutions/pipeline" },
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Field Execution Engine", href: "/platform/field-execution" },
      { label: "Inspections & Checklists", href: "/platform/inspections" },
    ],
    quote: {
      text: "We're running 6-crew completions with OpsFlo. Every stage documented, every crew coordinated, every item billed. It's the only system that handles our job complexity.",
      name: "Operations Director",
      role: "Well Services Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Every Stage.",
    headlineNavy: "Every Dollar.",
    body: "Complex well service jobs require complex job management. See how OpsFlo handles multi-crew, multi-stage operations from dispatch to invoice.",
    primaryCta: { label: "Start a Well Services Pilot", href: "/contact?industry=well-services" },
    secondaryCta: { label: "View Platform", href: "/platform" },
  },
};

export default function WellServicesPage() {
  return <SolutionPage data={data} />;
}
