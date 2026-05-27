import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Inspections & Checklists",
  description: "Structured field data capture with offline support. Ensure every inspection is completed and compliant.",
  path: "/platform/inspections",
});

const data: ModulePageData = {
  bannerTitle: "Inspections",
  eyebrow: "Platform / Inspections",
  headline: "Inspections That Actually **Get Done**",
  body: "Digital checklists and inspection forms that work offline, enforce completion standards, and generate audit-ready documentation.",
  heroImage: "/images/platform/inspections_hero.png",
  problemImage: "/images/platform/inspections_problem.png",
  solutionImage: "/images/platform/inspections_solution.png",
  problem: {
    headline: "Paper Inspections Are a **Liability**",
    points: [
      "Paper checklists get lost, damaged, or filled out from memory hours after the fact.",
      "Incomplete inspections create compliance gaps that are invisible until an audit.",
      "No way to verify an inspection was actually performed at the right time and location.",
      "Critical findings never make it to the people who need to act on them.",
    ],
  },
  howItWorks: {
    headline: "How **Digital Inspections** Work",
    steps: [
      {
        title: "Configure Forms",
        description: "Build inspection templates with required fields, photo capture, measurements, and pass/fail criteria.",
      },
      {
        title: "Execute in Field",
        description: "Crews complete inspections on mobile devices, even offline. GPS and timestamps verify authenticity.",
      },
      {
        title: "Act on Findings",
        description: "Critical findings auto-trigger work orders. Reports are instantly available for compliance teams.",
      },
    ],
  },
  capabilities: [
    "Configurable inspection templates",
    "Offline-first mobile execution",
    "GPS & timestamp verification",
    "Required photo/video capture",
    "Pass/fail scoring & thresholds",
    "Auto-generated work orders from findings",
    "Compliance report generation",
    "Integration with asset registry",
  ],
  differentiator: {
    headline: "From Inspection to **Action** in Seconds",
    body: "Other tools capture data. OpsFlo acts on it. Critical findings automatically generate work orders and escalate to the right people. Nothing sits in a report waiting to be read.",
  },
};

export default function InspectionsPage() {
  return <ModulePage data={data} />;
}
