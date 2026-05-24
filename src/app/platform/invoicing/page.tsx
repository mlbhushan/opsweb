import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Invoicing & Billing",
  description:
    "Turn completed field tickets into invoices within hours  -  not weeks. Automated rate-card application, approval workflows, and accounting sync.",
  path: "/platform/invoicing",
});

const data: ModulePageData = {
  bannerTitle: "Invoicing & Billing",
  eyebrow: "Platform / Invoicing & Billing",
  headline: "From Completed Job to **Invoice** in Hours",
  body: "Invoicing & Billing eliminates the weeks-long gap between job completion and revenue recognition. Approved field tickets flow directly to invoices with correct rates, line items, and supporting documentation.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Slow Billing Is **Silent Revenue Destruction**",
    points: [
      "The average oilfield service company takes 30-45 days to invoice a completed job  -  that is 30-45 days of unbilled revenue.",
      "Manual re-keying from field tickets to invoices introduces errors, disputes, and write-offs.",
      "Rate card changes are not applied consistently, leaving money on every ticket.",
      "Invoice disputes consume admin hours and damage customer relationships.",
    ],
  },
  howItWorks: {
    headline: "How **Invoicing & Billing** Works",
    steps: [
      {
        title: "Automated Rate Application",
        description:
          "Approved field tickets are automatically matched to customer rate cards. Correct pricing is applied to every line item  -  no manual lookup.",
      },
      {
        title: "One-Click Invoice Generation",
        description:
          "Complete invoices are generated with all supporting documentation: photos, signatures, GPS data, and timestamps.",
      },
      {
        title: "Direct Accounting Sync",
        description:
          "Invoices sync to QuickBooks, Sage, or your ERP in real time. Revenue is recognized immediately.",
      },
    ],
  },
  capabilities: [
    "Automated rate-card matching per customer",
    "One-click invoice generation from field tickets",
    "Supporting documentation attachment (photos, e-sigs)",
    "Multi-level approval workflows",
    "QuickBooks, Sage, and ERP integration",
    "Invoice dispute tracking and resolution",
    "Revenue recognition and aging reports",
    "Batch invoicing for high-volume operations",
  ],
  differentiator: {
    headline: "**Billing** Powered by Field Data, Not Admin Data Entry",
    body: "When the invoice is generated from the same data the crew captured in the field, there is nothing to re-key, nothing to dispute, and nothing to lose. That is why OpsFlo customers see billing cycles drop from weeks to hours.",
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

export default function InvoicingPage() {
  return <ModulePage data={data} />;
}
