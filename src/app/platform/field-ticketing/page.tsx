import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Field Ticketing",
  description: "Digital field tickets captured at the wellsite. From ticket to invoice in hours, not weeks.",
  path: "/platform/field-ticketing",
});

const data: ModulePageData = {
  bannerTitle: "Field Ticketing",
  eyebrow: "Platform / Field Ticketing",
  headline: "From Wellsite to **Invoice** in Hours",
  body: "Digital field tickets captured on-site with all the detail needed for immediate invoicing. No more chasing paper.",
  heroImage: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Paper Tickets = **Lost Revenue**",
    points: [
      "Handwritten field tickets are illegible, incomplete, or lost before they reach billing.",
      "Average billing cycle of 45+ days means cash flow is constantly strained.",
      "Disputes over ticket details delay payment further, costing you time and money.",
      "Revenue leakage from unbilled work averages 3–8% of total revenue.",
    ],
  },
  howItWorks: {
    headline: "How **Digital Field Ticketing** Works",
    steps: [
      {
        title: "Capture at Wellsite",
        description: "Crews fill digital tickets on mobile: equipment used, hours, materials, and customer signatures. Works offline.",
      },
      {
        title: "Auto-Validate",
        description: "Tickets are validated against rate cards and contracts. Missing fields are flagged before submission.",
      },
      {
        title: "Invoice Instantly",
        description: "Approved tickets flow directly to invoicing. No re-keying. No waiting. Revenue recognized in hours.",
      },
    ],
  },
  capabilities: [
    "Mobile ticket capture (offline-ready)",
    "Customer e-signature on-site",
    "Rate card & contract validation",
    "Photo documentation of work",
    "Equipment & material tracking",
    "Automated approval workflows",
    "Direct integration with invoicing",
    "Dispute resolution with audit trail",
  ],
  differentiator: {
    headline: "**Zero Revenue** Left on the Table",
    body: "OpsFlo's Field Ticketing module captures every billable event at the point of work. No more lost tickets, no more disputed charges, no more 45-day billing cycles.",
  },
};

export default function FieldTicketingPage() {
  return <ModulePage data={data} />;
}
