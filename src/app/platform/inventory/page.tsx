import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Inventory & Parts",
  description:
    "Track every component, consumable, and spare part across warehouses, trucks, and job sites  -  with automatic reorder alerts.",
  path: "/platform/inventory",
});

const data: ModulePageData = {
  bannerTitle: "Inventory & Parts",
  eyebrow: "Platform / Inventory & Parts",
  headline: "Every Part **Tracked**. Every Usage **Billed**.",
  body: "Inventory & Parts gives you real-time visibility into stock levels across warehouses, service trucks, and job sites  -  ensuring crews never wait for parts and every component used is captured on the ticket.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Untracked Parts Are **Unbilled Revenue**",
    points: [
      "Parts used in the field are often recorded hours or days later  -  if they are recorded at all.",
      "Crews carry inventory on trucks with no real-time visibility into what has been consumed.",
      "Stockouts on critical parts delay jobs, extend downtime, and frustrate customers.",
      "Manual inventory counts are infrequent and inaccurate, leading to write-offs and re-orders.",
    ],
  },
  howItWorks: {
    headline: "How **Inventory & Parts** Works",
    steps: [
      {
        title: "Real-Time Stock Tracking",
        description:
          "Inventory levels update automatically as parts are consumed on jobs, transferred between locations, or received from suppliers.",
      },
      {
        title: "Field Consumption Capture",
        description:
          "When a crew uses a part, it is logged against the job and the asset  -  creating both a billing record and a maintenance history entry.",
      },
      {
        title: "Automated Replenishment",
        description:
          "Min/max thresholds trigger automatic reorder alerts. Critical parts are never out of stock when a crew needs them.",
      },
    ],
  },
  capabilities: [
    "Multi-location inventory tracking (warehouse, truck, site)",
    "Barcode / QR scanning for field transactions",
    "Automatic consumption logging tied to jobs",
    "Min/max reorder alerts",
    "Parts-to-ticket linkage for accurate billing",
    "Transfer tracking between locations",
    "Inventory valuation reporting",
    "Supplier and lead-time management",
  ],
  differentiator: {
    headline: "Inventory That **Feeds Billing** Automatically",
    body: "Every part consumed is linked to a job and a ticket. That means accurate billing, complete cost tracking, and no revenue left on the table  -  without asking field crews to do extra paperwork.",
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

export default function InventoryPage() {
  return <ModulePage data={data} />;
}
