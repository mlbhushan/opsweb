import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Analytics & Reporting",
  description:
    "Real-time operational visibility across every crew, asset, and job  -  no spreadsheets required.",
  path: "/platform/analytics",
});

const data: ModulePageData = {
  bannerTitle: "Analytics & Reporting",
  eyebrow: "Platform / Analytics & Reporting",
  headline: "**See Everything**. Guess Nothing.",
  body: "Real-time dashboards and automated reports give operations leaders, finance teams, and executives a shared view of what\u2019s happening in the field  -  updated as work is completed, not days later.",

  problem: {
    headline: "You Can't Manage What You **Can't See**",
    points: [
      "Field data lives in spreadsheets, texts, and whiteboards  -  never in one place at the same time.",
      "Weekly reports are already stale by the time they reach leadership.",
      "Supervisors spend hours compiling updates instead of managing operations.",
      "Finance can\u2019t reconcile jobs completed versus jobs billed without manual cross-referencing.",
    ],
  },
  howItWorks: {
    headline: "How **Analytics & Reporting** Works",
    steps: [
      {
        title: "Automatic Data Collection",
        description:
          "Every field action  -  job completion, inspection result, ticket submission  -  is captured automatically. No manual entry required.",
      },
      {
        title: "Live Dashboards",
        description:
          "Role-specific dashboards update in real time. Ops sees crew status. Finance sees billing pipeline. Execs see KPIs.",
      },
      {
        title: "Scheduled & Ad-Hoc Reports",
        description:
          "Automated reports delivered on schedule, plus drill-down capability for any metric, any time frame, any crew.",
      },
    ],
  },
  capabilities: [
    "Real-time operational dashboards",
    "Customizable KPI tracking",
    "Automated scheduled reports (daily, weekly, monthly)",
    "Revenue pipeline visibility",
    "Crew utilization analytics",
    "Asset uptime & performance metrics",
    "Inspection completion & follow-through rates",
    "Export to PDF, CSV, and Excel",
  ],
  differentiator: {
    headline: "**Field-Generated Data**. Not Re-Keyed Data.",
    body: "Unlike BI tools bolted onto legacy systems, OpsFlo analytics are built on data captured at the point of work  -  which means they\u2019re accurate, timely, and complete.",
  },
  heroImage: "/images/platform/analytics_hero.png",
  problemImage: "/images/platform/analytics_problem.png",
  solutionImage: "/images/platform/analytics_solution.png",
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

export default function AnalyticsPage() {
  return <ModulePage data={data} />;
}
