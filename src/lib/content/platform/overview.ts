export const PLATFORM_OVERVIEW = {
  hero: {
    eyebrow: "Platform",
    headline: "The Operating System for Field Operations",
    body: "One system that connects data, standardizes workflows, and delivers AI-powered decisions from the field to the back office.",
  },
  layers: [
    {
      id: "data",
      title: "Data Layer",
      subtitle: "All asset, job, and field data in one place",
      description:
        "Every inspection result, field ticket, sensor reading, and work order lives in a unified data model. No more siloed spreadsheets.",
      items: ["Asset registry", "Field data capture", "IoT & sensor feeds", "Document management"],
    },
    {
      id: "workflow",
      title: "Workflow Layer",
      subtitle: "Standardized execution that scales",
      description:
        "Configurable workflows ensure every process follows your standards: inspection checklists, work order routing, and invoice generation.",
      items: ["Inspection workflows", "Work order automation", "Approval chains", "Scheduling rules"],
    },
    {
      id: "decision",
      title: "Decision Layer",
      subtitle: "AI predictions and prescriptive actions",
      description:
        "Machine learning models trained on your operational data surface risks, recommend actions, and optimize resource allocation.",
      items: ["Predictive maintenance", "Anomaly detection", "Revenue risk alerts", "Resource optimization"],
    },
  ],
  modules: {
    execute: [
      { title: "Field Execution Engine", href: "/platform/field-execution", description: "Ensure every assigned job reaches completion" },
      { title: "Inspections & Checklists", href: "/platform/inspections", description: "Structured data capture with offline support" },
      { title: "Work Order Automation", href: "/platform/work-orders", description: "Auto-generated, auto-routed, auto-tracked" },
      { title: "Scheduling & Dispatch", href: "/platform/scheduling", description: "Optimized crew deployment in real-time" },
    ],
    manage: [
      { title: "Field Ticketing", href: "/platform/field-ticketing", description: "Digital tickets captured at the wellsite" },
      { title: "Invoicing & Billing", href: "/platform/invoicing", description: "From ticket to invoice in hours, not weeks" },
      { title: "Inventory & Parts", href: "/platform/inventory", description: "Track every component across every job" },
      { title: "Asset Intelligence", href: "/platform/asset-intelligence", description: "Complete lifecycle view of every asset" },
    ],
    optimize: [
      { title: "AI Decision Engine", href: "/platform/ai", description: "Prescriptive insights from operational data" },
      { title: "Predictive Maintenance", href: "/platform/predictive-maintenance", description: "Prevent failures before they happen" },
      { title: "Analytics & Reporting", href: "/platform/analytics", description: "Real-time dashboards for ops decisions" },
    ],
    comply: [
      { title: "Safety Management", href: "/platform/safety", description: "Zero-incident operations at scale" },
      { title: "Compliance & Audit", href: "/platform/compliance", description: "Audit-ready documentation, always" },
      { title: "Carbon & Climate", href: "/platform/carbon", description: "Emissions tracking and reporting" },
    ],
  },
  offline: {
    headline: "Built for Where Cell Towers Don't Reach",
    body: "OpsFlo's mobile app works fully offline. Field crews complete inspections, tickets, and checklists without connectivity. Data syncs automatically when back online. No data loss, no workarounds.",
  },
};
