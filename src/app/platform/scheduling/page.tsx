import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Scheduling & Dispatch",
  description:
    "Optimized crew scheduling and dispatch  -  assign the right crew to the right job based on skills, location, and availability.",
  path: "/platform/scheduling",
});

const data: ModulePageData = {
  bannerTitle: "Scheduling & Dispatch",
  eyebrow: "Platform / Scheduling & Dispatch",
  headline: "**Right Crew**. Right Job. Right Time.",
  body: "Scheduling & Dispatch replaces whiteboards and phone calls with intelligent crew assignment  -  factoring in skills, certifications, proximity, and workload to get the right crew on the right job every time.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Manual Dispatch **Wastes Hours** Every Day",
    points: [
      "Dispatch decisions are made by phone and whiteboard  -  with no visibility into who is available or where they are.",
      "Skills and certifications are not checked at dispatch time, leading to unqualified crews arriving on-site.",
      "Schedule changes cascade through text messages, creating confusion and missed jobs.",
      "Drive time between sites is not optimized, burning fuel and billable hours on windshield time.",
    ],
  },
  howItWorks: {
    headline: "How **Scheduling & Dispatch** Works",
    steps: [
      {
        title: "Intelligent Assignment",
        description:
          "Jobs are matched to crews based on skills, certifications, proximity, equipment needs, and current workload  -  automatically.",
      },
      {
        title: "Real-Time Schedule Management",
        description:
          "Drag-and-drop scheduling with instant mobile notifications. Schedule changes reach crews immediately  -  no phone tag.",
      },
      {
        title: "Route & Workload Optimization",
        description:
          "Multi-job routing minimizes drive time. Workload balancing prevents crew burnout and maximizes utilization.",
      },
    ],
  },
  capabilities: [
    "Skill and certification-based crew matching",
    "Drag-and-drop visual scheduling board",
    "GPS-based proximity assignment",
    "Real-time mobile schedule notifications",
    "Multi-job route optimization",
    "Crew workload balancing",
    "Customer-requested scheduling preferences",
    "Integration with field execution & work orders",
  ],
  differentiator: {
    headline: "**Dispatch** That Knows Your Field Reality",
    body: "Generic scheduling tools do not understand multi-day oilfield jobs, equipment dependencies, or the fact that your best crew might be 3 hours from the nearest cell tower. OpsFlo does.",
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

export default function SchedulingPage() {
  return <ModulePage data={data} />;
}
