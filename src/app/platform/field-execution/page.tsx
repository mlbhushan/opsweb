import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Field Execution Engine",
  description: "Ensure every assigned job reaches completion. No dropped tasks, no lost revenue.",
  path: "/platform/field-execution",
});

const data: ModulePageData = {
  bannerTitle: "Field Execution",
  eyebrow: "Platform / Field Execution",
  headline: "Every Job Assigned. Every Job **Completed**.",
  body: "The Field Execution Engine tracks every task from assignment to completion, ensuring nothing slips through the cracks.",
  heroImage: "/images/platform/execution_hero.png",
  problemImage: "/images/platform/execution_problem.png",
  solutionImage: "/images/platform/execution_solution.png",
  problem: {
    headline: "The Cost of **Dropped Tasks**",
    points: [
      "Jobs assigned verbally get forgotten, leading to missed revenue and customer complaints.",
      "Supervisors have no real-time visibility into what's actually happening in the field.",
      "By the time a missed job is discovered, the customer has already called to complain.",
      "Paper-based tracking means you only know what failed after it's too late to fix.",
    ],
  },
  howItWorks: {
    headline: "How the **Field Execution Engine** Works",
    steps: [
      {
        title: "Assign & Dispatch",
        description: "Jobs are digitally assigned to crews with all context: location, equipment, procedures, and deadlines.",
      },
      {
        title: "Track & Validate",
        description: "Real-time progress tracking with photo/signature validation. GPS confirms crew was on-site.",
      },
      {
        title: "Escalate & Complete",
        description: "Overdue tasks auto-escalate. Nothing falls through the cracks. Every job reaches verified completion.",
      },
    ],
  },
  capabilities: [
    "Digital job assignment with full context",
    "Real-time status tracking",
    "GPS verification of on-site presence",
    "Photo & signature validation",
    "Automatic escalation rules",
    "Offline-capable mobile execution",
    "Configurable completion criteria",
    "Integration with scheduling & dispatch",
  ],
  differentiator: {
    headline: "Built for **Offline**. Built for **Oilfield**.",
    body: "Unlike generic task management tools, the Field Execution Engine works fully offline and handles the complex multi-day, multi-crew job structures unique to oilfield operations.",
  },
};

export default function FieldExecutionPage() {
  return <ModulePage data={data} />;
}
