import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Work Order Automation",
  description:
    "Automate work order creation, assignment, and tracking  -  from inspection findings to completed, billed jobs.",
  path: "/platform/work-orders",
});

const data: ModulePageData = {
  bannerTitle: "Work Order Automation",
  eyebrow: "Platform / Work Order Automation",
  headline: "From Finding to **Fix**  -  Automatically.",
  body: "Work Order Automation turns inspection findings, maintenance alerts, and customer requests into structured, tracked work orders that flow through assignment, execution, and billing without manual intervention.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Manual Work Orders Mean **Missed Work**",
    points: [
      "Inspection findings that should trigger work orders are emailed, texted, or forgotten  -  creating a gap between detection and resolution.",
      "Work orders created on paper lack the context crews need: asset history, parts required, procedures to follow.",
      "Tracking open work orders requires manual status checks, which supervisors do not have time for.",
      "Completed work orders pile up on desks for days before they are entered into billing systems.",
    ],
  },
  howItWorks: {
    headline: "How **Work Order Automation** Works",
    steps: [
      {
        title: "Automatic Generation",
        description:
          "Inspection findings, predictive maintenance alerts, and customer requests automatically generate structured work orders with full context.",
      },
      {
        title: "Smart Assignment & Tracking",
        description:
          "Work orders are assigned based on priority, crew skills, and availability. Real-time status tracking shows exactly where every job stands.",
      },
      {
        title: "Completion & Billing Flow",
        description:
          "Completed work orders automatically flow to field ticketing and invoicing  -  closing the loop from finding to revenue.",
      },
    ],
  },
  capabilities: [
    "Auto-generation from inspections and maintenance alerts",
    "Structured work order templates by job type",
    "Priority-based assignment with SLA tracking",
    "Parts and materials pre-staging",
    "Real-time status tracking and escalation",
    "Photo and signature completion validation",
    "Direct flow to field ticketing and billing",
    "Work order analytics and backlog management",
  ],
  differentiator: {
    headline: "Work Orders That **Close the Loop**",
    body: "In most systems, a work order is a record. In OpsFlo, it is an execution guarantee  -  automatically generated, intelligently assigned, tracked to completion, and billed on close.",
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

export default function WorkOrdersPage() {
  return <ModulePage data={data} />;
}
