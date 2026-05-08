import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { LayoutDashboard, Zap, Bell } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "For Operations Managers",
  description:
    "Complete visibility and guaranteed execution across every crew, job, and asset — from a single operational view.",
  path: "/solutions/operations-manager",
});

const data: SolutionPageData = {
  bannerTitle: "Operations Manager",
  category: "role",
  eyebrow: "Solutions / By Role",

  headlineGreen: "Complete Visibility.",
  headlineNavy: "Guaranteed Execution.",

  tagline:
    "You need to know that every job is on track, every crew is productive, and nothing is falling through the cracks. OpsFlo gives you a single operational view with automated execution guarantees — built for how field operations actually work.",

  stats: [
    { value: "1", label: "Unified operational view" },
    { value: "100%", label: "Job completion visibility" },
    { value: "Real-time", label: "Crew and asset status" },
    { value: "Zero", label: "Dropped tasks" },
  ],

  problem: {
    label: "Your Current Reality",
    headline: "You Are Managing Blind",
    body: "Your operational picture is assembled from phone calls, text messages, whiteboards, and end-of-day summaries. By the time you know a job was missed, the customer has already called. You spend your day chasing status updates instead of managing operations — because your tools were not built for field reality.",
    bullets: [
      "No real-time view of field crew status or job progress",
      "Exceptions discovered via complaint — not proactive alerts",
      "Manual coordination between dispatch, field, and billing",
      "Data arrives hours or days late, making decisions reactive",
    ],
  },

  solution: {
    label: "How OpsFlo Works for You",
    headline: "See It. Know It. Act on It.",
    steps: [
      {
        icon: LayoutDashboard,
        title: "Single Operational Dashboard",
        description:
          "Every active job, crew location, inspection status, and equipment condition in one view — updated in real time from the field as work happens.",
      },
      {
        icon: Zap,
        title: "Automated Workflow Execution",
        description:
          "Jobs flow automatically from scheduling through execution to billing. Auto-escalation catches overdue tasks before they become problems.",
      },
      {
        icon: Bell,
        title: "Exception-Based Management",
        description:
          "Focus on what needs attention. OpsFlo surfaces exceptions and anomalies — you don't have to go looking for problems anymore.",
      },
    ],
  },

  outcomes: {
    headline: "What Changes for You",
    items: [
      "Real-time visibility into every field operation — no calls required",
      "Automated escalation eliminates dropped tasks and missed jobs",
      "Hours saved daily by eliminating status-chasing calls",
      "Data-driven dispatch decisions replace gut-feel coordination",
      "Complete audit trail for every job, inspection, and exception",
      "Crew productivity visible and measurable for the first time",
    ],
  },

  sidebar: {
    ctaHeadline: "See the Ops Dashboard",
    ctaBody:
      "Live demo of the operations view tailored to your crew size and job types. 30 minutes to see what full visibility looks like.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "View Analytics Module", href: "/platform/analytics" },
    relatedLinks: [
      { label: "Field Supervisor Role", href: "/solutions/field-supervisor" },
      { label: "Executive View", href: "/solutions/executive" },
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Field Execution Engine", href: "/platform/field-execution" },
      { label: "Scheduling & Dispatch", href: "/platform/scheduling" },
    ],
    quote: {
      text: "I used to spend 3 hours every morning figuring out where we stood. Now I open the dashboard and I know in 60 seconds.",
      name: "Operations Manager",
      role: "Oilfield Services Company, AB",
    },
  },

  bottomCta: {
    headlineGreen: "Know Everything.",
    headlineNavy: "Manage Nothing Manually.",
    body: "Real-time operational visibility means you manage by exception, not by chasing. See what complete operational control looks like for your team.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "Explore the Platform", href: "/platform" },
  },
};

export default function OperationsManagerPage() {
  return <SolutionPage data={data} />;
}
