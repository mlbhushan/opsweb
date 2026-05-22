/**
 * Central navigation definition consumed by SiteHeader (mega-menu) and SiteFooter.
 * Every href here MUST have a corresponding route (real page or stub).
 */

export type NavLink = { label: string; href: string; description?: string };
export type NavColumn = { heading: string; links: NavLink[] };
export type NavGroup = {
  label: string;
  href?: string; // direct link (e.g. Pricing)
  columns?: NavColumn[];
};

export const NAV: NavGroup[] = [
  {
    label: "Platform",
    columns: [
      {
        heading: "Core Capabilities",
        links: [
          { label: "Field Execution Engine", href: "/platform/field-execution", description: "Ensure every job gets completed" },
          { label: "Inspection & Checklists", href: "/platform/inspections", description: "Structured field data capture" },
          { label: "Work Order Automation", href: "/platform/work-orders", description: "Automated task assignment" },
          { label: "Scheduling & Dispatch", href: "/platform/scheduling", description: "Optimized crew deployment" },
          { label: "Predictive Maintenance", href: "/platform/predictive-maintenance", description: "Prevent failures before they happen" },
        ],
      },
      {
        heading: "Operations Intelligence",
        links: [
          { label: "AI Decision Engine", href: "/platform/ai", description: "Prescriptive operational insights" },
          { label: "Analytics & Reporting", href: "/platform/analytics", description: "Real-time operational visibility" },
          { label: "Asset Intelligence", href: "/platform/asset-intelligence", description: "Complete asset lifecycle view" },
        ],
      },
      {
        heading: "Revenue Operations",
        links: [
          { label: "Field Ticketing", href: "/platform/field-ticketing", description: "Digital capture at the wellsite" },
          { label: "Invoicing & Billing", href: "/platform/invoicing", description: "Accelerate revenue recognition" },
          { label: "Inventory & Parts", href: "/platform/inventory", description: "Track every component" },
        ],
      },
      {
        heading: "Compliance & Safety",
        links: [
          { label: "Safety Management", href: "/platform/safety", description: "Zero-incident operations" },
          { label: "Compliance & Audit", href: "/platform/compliance", description: "Audit-ready documentation" },
          { label: "Carbon & Climate", href: "/platform/carbon", description: "Emissions tracking & reporting" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        heading: "By Pain Point",
        links: [
          { label: "Stop Revenue Leakage", href: "/solutions/revenue-leakage" },
          { label: "Prevent Unplanned Downtime", href: "/solutions/prevent-downtime" },
          { label: "Ensure Inspection Follow-Through", href: "/solutions/inspection-execution" },
          { label: "Accelerate Billing Cycles", href: "/solutions/faster-billing" },
        ],
      },
      {
        heading: "By Role",
        links: [
          { label: "Operations Manager", href: "/solutions/operations-manager" },
          { label: "Field Supervisor", href: "/solutions/field-supervisor" },
          { label: "Finance & Billing", href: "/solutions/finance" },
          { label: "Executive / C-Suite", href: "/solutions/executive" },
          { label: "HSE Manager", href: "/solutions/hse" },
        ],
      },
      {
        heading: "By Industry",
        links: [
          { label: "Oilfield Services", href: "/solutions/oilfield-services" },
          { label: "Equipment Rental", href: "/solutions/equipment-rental" },
          { label: "Fluid Hauling", href: "/solutions/fluid-hauling" },
          { label: "Well Services", href: "/solutions/well-services" },
          { label: "Pipeline & Infrastructure", href: "/solutions/pipeline" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Whitepapers & Guides", href: "/resources/guides" },
          { label: "Webinars", href: "/resources/webinars" },
        ],
      },
      {
        heading: "Evaluate",
        links: [
          { label: "ROI Calculator", href: "/roi-calculator" },
          { label: "Integrations", href: "/integrations" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        heading: "About",
        links: [
          { label: "About OpsFlo", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Partners", href: "/partners" },
          { label: "Contact", href: "/contact" },
          { label: "Security & Compliance", href: "/security" },
        ],
      },
    ],
  },
];

/** Flat list of all hrefs in the nav - used by route-check script */
export function getAllNavHrefs(): string[] {
  const hrefs: string[] = [];
  for (const group of NAV) {
    if (group.href) hrefs.push(group.href);
    if (group.columns) {
      for (const col of group.columns) {
        for (const link of col.links) {
          hrefs.push(link.href);
        }
      }
    }
  }
  return hrefs;
}

/** Footer-specific grouping */
export const FOOTER_NAV = {
  platform: [
    { label: "Platform Overview", href: "/platform" },
    { label: "Field Execution", href: "/platform/field-execution" },
    { label: "Inspections", href: "/platform/inspections" },
    { label: "Field Ticketing", href: "/platform/field-ticketing" },
    { label: "AI Decision Engine", href: "/platform/ai" },
    { label: "Predictive Maintenance", href: "/platform/predictive-maintenance" },
  ],
  solutions: [
    { label: "Oilfield Services", href: "/solutions/oilfield-services" },
    { label: "Revenue Leakage", href: "/solutions/revenue-leakage" },
    { label: "Faster Billing", href: "/solutions/faster-billing" },
    { label: "Prevent Downtime", href: "/solutions/prevent-downtime" },
    { label: "Operations Manager", href: "/solutions/operations-manager" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "ROI Calculator", href: "/roi-calculator" },
    { label: "Integrations", href: "/integrations" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
    { label: "Security", href: "/security" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "SLA", href: "/legal/sla" },
  ],
};
