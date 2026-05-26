import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Carbon & Climate",
  description:
    "Track, report, and reduce operational emissions across your fleet, equipment, and field operations.",
  path: "/platform/carbon",
});

const data: ModulePageData = {
  bannerTitle: "Carbon & Climate",
  eyebrow: "Platform / Carbon & Climate",
  headline: "**Track Emissions**. Prove Compliance. Reduce Impact.",
  body: "Carbon & Climate gives oilfield operators a clear, auditable view of operational emissions  -  from fleet fuel consumption to equipment runtime  -  tied to the jobs and assets that generate them.",

  problem: {
    headline: "**Emissions Reporting** Should Not Require a Consulting Firm",
    points: [
      "Operators and service companies face growing regulatory pressure to quantify and report emissions  -  often without the tools to do it.",
      "Emissions data is scattered across fleet logs, fuel receipts, and equipment run-hours that nobody consolidates.",
      "Manual reporting is time-consuming, error-prone, and always out of date by the time it is submitted.",
      "Customers increasingly require ESG data from vendors  -  and you cannot provide what you cannot measure.",
    ],
  },
  howItWorks: {
    headline: "How **Carbon & Climate** Works",
    steps: [
      {
        title: "Automatic Emissions Capture",
        description:
          "Fuel usage, equipment runtime, and fleet mileage are captured from existing operational data  -  no extra data entry for field crews.",
      },
      {
        title: "Emissions Calculation Engine",
        description:
          "Industry-standard emission factors convert operational data into CO2e metrics, broken down by asset, crew, job, or customer.",
      },
      {
        title: "Reporting & Reduction Planning",
        description:
          "Generate audit-ready reports for regulators and customers. Identify high-emission operations and model reduction scenarios.",
      },
    ],
  },
  capabilities: [
    "Automated emissions tracking from operational data",
    "Scope 1 and Scope 2 emissions calculation",
    "Per-job and per-asset carbon attribution",
    "Regulatory reporting templates (EPA, provincial)",
    "Customer ESG data exports",
    "Fleet fuel efficiency analytics",
    "Emissions trend tracking and benchmarking",
    "Reduction scenario modeling",
  ],
  differentiator: {
    headline: "**Built Into Operations**. Not Bolted On.",
    body: "Carbon tracking that works because it pulls from the same data your crews already capture  -  job logs, equipment hours, fuel receipts  -  without adding a single extra step to the field workflow.",
  },
  heroImage: "/images/platform/carbon_hero.png",
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

export default function CarbonPage() {
  return <ModulePage data={data} />;
}
