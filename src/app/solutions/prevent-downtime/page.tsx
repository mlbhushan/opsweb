import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionPage, type SolutionPageData } from "@/components/templates/solution-page";
import { Activity, BrainCircuit, Wrench } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Prevent Unplanned Downtime",
  description:
    "Predict equipment failures before they happen. Reduce unplanned downtime by up to 60% with data-driven predictive maintenance from OpsFlo.",
  path: "/solutions/prevent-downtime",
});

const data: SolutionPageData = {
  bannerTitle: "Prevent Downtime",
  category: "pain",
  eyebrow: "Solutions / By Pain Point",

  headlineGreen: "Prevent Downtime",
  headlineNavy: "Before It Happens.",

  tagline:
    "Unplanned equipment failures cost oilfield operators millions in emergency repairs, idle crews, and customer penalties. OpsFlo turns your operational data into failure predictions — so you fix on your schedule, not the equipment's.",

  stats: [
    { value: "$4.2M", label: "Avg. annual downtime cost" },
    { value: "3-10x", label: "Emergency vs. planned repair cost" },
    { value: "60%", label: "Downtime reduction with OpsFlo" },
    { value: "Weeks", label: "Advance failure warning time" },
  ],

  problem: {
    label: "The Problem",
    headline: "Reactive Maintenance Costs More Than You Think",
    body: "When equipment fails unexpectedly, the cost is not just the repair. It's the emergency mobilization, the idle crews waiting for parts, the jobs delayed downstream, and the customer who questions your reliability. Calendar-based maintenance doesn't solve this — it over-services healthy equipment while missing the assets that are actually degrading.",
    bullets: [
      "Emergency repair costs run 3-10x more than planned maintenance",
      "Idle crew time during breakdowns accumulates into millions annually",
      "Calendar-based maintenance misses condition-based degradation signals",
      "Reactive culture creates compounding downstream delays and penalties",
    ],
  },

  solution: {
    label: "How OpsFlo Prevents It",
    headline: "Data. Prediction. Action.",
    steps: [
      {
        icon: Activity,
        title: "Continuous Condition Monitoring",
        description:
          "Inspection data, work order history, run-hours, and sensor feeds build a real-time health profile for every critical asset in your fleet.",
      },
      {
        icon: BrainCircuit,
        title: "Predictive Failure Scoring",
        description:
          "Machine learning models identify degradation patterns and assign failure risk scores — flagging at-risk assets weeks before breakdown occurs.",
      },
      {
        icon: Wrench,
        title: "Prescriptive Maintenance Actions",
        description:
          "Recommended repairs are automatically scheduled based on predicted failure timing, crew availability, and parts inventory. No guesswork.",
      },
    ],
  },

  outcomes: {
    headline: "What Changes After OpsFlo",
    items: [
      "Unplanned downtime reduced by up to 60%",
      "Maintenance costs shifted from emergency to planned",
      "Asset lifespan extended through condition-based servicing",
      "Fewer customer penalties from equipment-related delays",
      "Maintenance backlog prioritized by actual risk — not calendar dates",
      "Real-time fleet health visibility for operations leadership",
    ],
  },

  sidebar: {
    ctaHeadline: "See Predictive AI in Action",
    ctaBody:
      "Live walkthrough of OpsFlo's predictive maintenance engine with your asset types and failure patterns.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "View AI Module", href: "/platform/ai" },
    relatedLinks: [
      { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
      { label: "Ensure Inspection Follow-Through", href: "/solutions/inspection-execution" },
      { label: "Predictive Maintenance Module", href: "/platform/predictive-maintenance" },
      { label: "Asset Intelligence Module", href: "/platform/asset-intelligence" },
      { label: "AI Decision Engine", href: "/platform/ai" },
    ],
    quote: {
      text: "We went from reacting to failures to predicting them 3 weeks out. Our emergency maintenance spend dropped by 55% in the first year.",
      name: "Director of Maintenance",
      role: "Oilfield Services Operator, BC",
    },
  },

  bottomCta: {
    headlineGreen: "Predict Failures.",
    headlineNavy: "Stop Paying for Them.",
    body: "Every unplanned failure is a choice you can avoid. See how OpsFlo turns your operational data into advance warnings — before the breakdown.",
    primaryCta: { label: "See Predictive Maintenance", href: "/contact" },
    secondaryCta: { label: "Explore the Platform", href: "/platform" },
  },
};

export default function PreventDowntimePage() {
  return <SolutionPage data={data} />;
}
