import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Predictive Maintenance",
  description:
    "Prevent equipment failures before they happen. Data-driven maintenance scheduling that reduces unplanned downtime by up to 60%.",
  path: "/platform/predictive-maintenance",
});

const data: ModulePageData = {
  bannerTitle: "Predictive Maintenance",
  eyebrow: "Platform / Predictive Maintenance",
  headline: "**Prevent Failures**. Do Not Just React to Them.",
  body: "Predictive Maintenance analyzes inspection data, service history, and operational patterns to forecast equipment failures  -  so you can schedule repairs on your terms, not on the asset's terms.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Reactive Maintenance Is the **Most Expensive Kind**",
    points: [
      "Unplanned equipment failures cost 3-10x more than planned maintenance  -  in emergency repairs, lost production, and customer penalties.",
      "Calendar-based maintenance over-services healthy equipment and misses degradation patterns on others.",
      "Critical failure data is trapped in inspection forms nobody reviews until something breaks.",
      "When an asset fails in the field, the ripple effect delays every downstream job.",
    ],
  },
  howItWorks: {
    headline: "How **Predictive Maintenance** Works",
    steps: [
      {
        title: "Data Aggregation",
        description:
          "Inspection results, work order history, run-hours, and sensor data are aggregated into a unified asset health profile.",
      },
      {
        title: "Failure Prediction",
        description:
          "Machine learning models identify degradation patterns and predict failure windows  -  weeks before the breakdown occurs.",
      },
      {
        title: "Prescriptive Scheduling",
        description:
          "Recommended maintenance actions are scheduled automatically based on predicted failure timing and crew availability.",
      },
    ],
  },
  capabilities: [
    "Asset health scoring from multi-source data",
    "Failure prediction with confidence intervals",
    "Automated maintenance work order generation",
    "Integration with scheduling & dispatch",
    "Historical failure pattern analysis",
    "Cost-of-failure vs. cost-of-prevention modeling",
    "Maintenance backlog prioritization",
    "API integration with IoT sensors and SCADA",
  ],
  differentiator: {
    headline: "**Predictions** Built on Your Operational Data",
    body: "Most predictive maintenance tools require expensive sensor deployments. OpsFlo builds predictions from the inspection and work order data your crews already capture  -  delivering value from day one.",
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

export default function PredictiveMaintenancePage() {
  return <ModulePage data={data} />;
}
