import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "AI Decision Engine",
  description:
    "Prescriptive operational intelligence that turns field data into decisions  -  predict failures, optimize crews, and protect revenue.",
  path: "/platform/ai",
});

const data: ModulePageData = {
  bannerTitle: "AI Decision Engine",
  eyebrow: "Platform / AI Decision Engine",
  headline: "**Intelligence** That Works in the Field",
  body: "The AI Decision Engine transforms raw operational data into prescriptive actions  -  predicting equipment failures, recommending crew allocations, and surfacing revenue at risk before it\u2019s lost.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Decisions Based on **Gut Feel** Cost Millions",
    points: [
      "Maintenance decisions are reactive  -  you fix what breaks instead of preventing the break.",
      "Crew dispatch relies on supervisor intuition, not workload data or proximity.",
      "Revenue-impacting patterns  -  like chronic under-billing or recurring job delays  -  are invisible until quarter-end.",
      "By the time you see the trend in a report, the damage is already done.",
    ],
  },
  howItWorks: {
    headline: "How the **AI Decision Engine** Works",
    steps: [
      {
        title: "Continuous Data Ingestion",
        description:
          "Every field event  -  inspections, tickets, sensor readings, job completions  -  feeds the engine in real time.",
      },
      {
        title: "Pattern Recognition & Prediction",
        description:
          "Machine learning models identify failure precursors, billing anomalies, and scheduling inefficiencies across your operations.",
      },
      {
        title: "Prescriptive Actions",
        description:
          "The engine doesn\u2019t just alert  -  it recommends specific actions: which asset to service, which crew to reassign, which ticket to flag.",
      },
    ],
  },
  capabilities: [
    "Predictive failure scoring for critical assets",
    "Crew optimization recommendations",
    "Revenue leakage anomaly detection",
    "Inspection follow-through prediction",
    "Automated priority escalation",
    "Natural-language operational summaries",
    "Configurable confidence thresholds",
    "Continuous model improvement from feedback loops",
  ],
  differentiator: {
    headline: "AI Tied to **Outcomes**, Not Buzzwords",
    body: "Every prediction is linked to a dollar figure or a safety metric. No abstract dashboards  -  just actionable intelligence your supervisors can act on immediately, even offline.",
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

export default function AIPage() {
  return <ModulePage data={data} />;
}
