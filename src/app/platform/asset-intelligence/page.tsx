import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Asset Intelligence",
  description:
    "Complete asset lifecycle visibility  -  from deployment to retirement. Know the condition, location, and history of every piece of equipment.",
  path: "/platform/asset-intelligence",
});

const data: ModulePageData = {
  bannerTitle: "Asset Intelligence",
  eyebrow: "Platform / Asset Intelligence",
  headline: "Know Every Asset. Predict Every Failure.",
  body: "Asset Intelligence gives you a complete, real-time view of every piece of equipment  -  its condition, service history, location, and predicted failure window  -  so you can act before downtime hits.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Blind Spots Kill Equipment Uptime",
    points: [
      "Asset histories live in filing cabinets and personal notebooks  -  inaccessible to the people making maintenance decisions.",
      "Nobody knows which assets are approaching failure until they have already failed.",
      "Equipment moves between job sites with no centralized tracking of condition or location.",
      "Warranty expirations and certification renewals slip through the cracks, creating compliance exposure.",
    ],
  },
  howItWorks: {
    headline: "How Asset Intelligence Works",
    steps: [
      {
        title: "Centralized Asset Registry",
        description:
          "Every asset is catalogued with specifications, service history, certifications, and real-time location  -  accessible from any device.",
      },
      {
        title: "Condition Monitoring & Alerts",
        description:
          "Inspection data, sensor feeds, and maintenance logs build a living condition score. Degradation triggers automatic alerts.",
      },
      {
        title: "Lifecycle Optimization",
        description:
          "Data-driven recommendations on when to service, refurbish, or retire each asset  -  maximizing utilization while minimizing risk.",
      },
    ],
  },
  capabilities: [
    "Complete asset registry with digital profiles",
    "Real-time location tracking",
    "Service history & maintenance log",
    "Condition scoring from inspection data",
    "Certification & warranty tracking",
    "Predictive failure windows",
    "Utilization rate analytics",
    "QR/barcode scanning for field identification",
  ],
  differentiator: {
    headline: "Intelligence, Not Just Inventory",
    body: "Most asset management is a glorified spreadsheet. Asset Intelligence connects inspection data, work orders, and sensor feeds to build a living picture of each asset's health and predicted lifespan.",
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

export default function AssetIntelligencePage() {
  return <ModulePage data={data} />;
}
