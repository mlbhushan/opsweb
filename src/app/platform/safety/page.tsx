import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Safety Management",
  description:
    "Zero-incident operations start with structured safety workflows  -  hazard identification, JSA management, incident tracking, and corrective action follow-through.",
  path: "/platform/safety",
});

const data: ModulePageData = {
  bannerTitle: "Safety Management",
  eyebrow: "Platform / Safety Management",
  headline: "**Zero Incidents**. Zero Excuses.",
  body: "Safety Management digitizes your entire safety workflow  -  from pre-job hazard assessments and JSAs to incident reporting and corrective action tracking  -  ensuring nothing is overlooked and everything is documented.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Paper-Based Safety Is a **Liability**",
    points: [
      "Pre-job safety meetings happen but findings are not recorded or actioned digitally.",
      "Near-miss reports are discouraged by cumbersome paper processes  -  so hazards go unreported.",
      "Corrective actions from safety incidents are assigned but never tracked to resolution.",
      "When a regulator asks for safety records, gathering them takes days of admin work.",
    ],
  },
  howItWorks: {
    headline: "How **Safety Management** Works",
    steps: [
      {
        title: "Digital Safety Workflows",
        description:
          "Pre-job JSAs, toolbox talks, and hazard assessments are completed on mobile devices with required fields, photos, and sign-offs.",
      },
      {
        title: "Incident & Near-Miss Reporting",
        description:
          "One-tap incident and near-miss reporting from any device. Automatic notification chains ensure the right people know immediately.",
      },
      {
        title: "Corrective Action Tracking",
        description:
          "Every finding generates a tracked corrective action. Auto-escalation ensures nothing is closed without resolution.",
      },
    ],
  },
  capabilities: [
    "Digital JSA and pre-job safety checklists",
    "One-tap near-miss and incident reporting",
    "Photo and GPS evidence capture",
    "Automatic notification and escalation chains",
    "Corrective action assignment and tracking",
    "Safety trend analytics and leading indicators",
    "Regulatory report generation (OSHA, OGP)",
    "Safety meeting documentation and attendance logging",
  ],
  differentiator: {
    headline: "Safety That Field Crews **Actually Use**",
    body: "Complex safety systems get ignored. OpsFlo safety workflows are built into the tools crews already use every day  -  so reporting a near-miss takes 30 seconds, not 30 minutes.",
  },
  problemImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  solutionImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  relatedModules: [
    {
      "title": "Field Execution",
      "href": "/platform/field-execution",
      "description": "Ensure every job is completed"
    },
    {
      "title": "Scheduling & Dispatch",
      "href": "/platform/scheduling",
      "description": "Right crew, right job, right time"
    },
    {
      "title": "Inspections",
      "href": "/platform/inspections",
      "description": "Audit-ready digital forms"
    }
  ],
};

export default function SafetyPage() {
  return <ModulePage data={data} />;
}
