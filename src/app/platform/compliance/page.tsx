import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Compliance & Audit",
  description:
    "Audit-ready documentation for every inspection, maintenance action, and safety event  -  generated automatically from field operations.",
  path: "/platform/compliance",
});

const data: ModulePageData = {
  bannerTitle: "Compliance & Audit",
  eyebrow: "Platform / Compliance & Audit",
  headline: "**Audit-Ready**. Always.",
  body: "Compliance & Audit captures every inspection result, corrective action, and safety event with timestamps, photos, and e-signatures  -  creating an unbroken chain of documentation that satisfies regulators without burdening field crews.",

  problem: {
    headline: "Compliance Gaps **Hide** Until Auditors Find Them",
    points: [
      "Paper inspection records are incomplete, illegible, or lost entirely  -  discovered only during an audit.",
      "Corrective actions from inspections are assigned verbally and never documented as resolved.",
      "Regulatory requirements change, but your forms and checklists do not update to match.",
      "Preparing for audits pulls supervisors and admin staff off productive work for days.",
    ],
  },
  howItWorks: {
    headline: "How **Compliance & Audit** Works",
    steps: [
      {
        title: "Structured Data Capture",
        description:
          "Digital checklists enforce required fields, photos, and signatures. Incomplete inspections cannot be submitted.",
      },
      {
        title: "Automated Audit Trail",
        description:
          "Every action is timestamped and linked: inspection to finding to corrective action to resolution. Nothing is lost.",
      },
      {
        title: "One-Click Audit Packages",
        description:
          "Generate complete compliance packages for any time period, asset, or regulation  -  with all supporting evidence attached.",
      },
    ],
  },
  capabilities: [
    "Digital inspection logs with photo & e-signature evidence",
    "Automated corrective action tracking",
    "Regulatory checklist templates (OSHA, OGP, provincial)",
    "Compliance gap alerts and overdue notifications",
    "One-click audit package generation",
    "Expiry tracking for certifications & permits",
    "Role-based access to compliance records",
    "Historical compliance trend reporting",
  ],
  differentiator: {
    headline: "Compliance as a **Byproduct** of Operations",
    body: "When crews use OpsFlo to do their actual work, compliance documentation is generated automatically. No duplicate data entry. No after-the-fact paperwork. Compliance just happens.",
  },
  heroImage: "/images/platform/compliance_hero.png",
  problemImage: "/images/platform/compliance_problem.png",
  solutionImage: "/images/platform/compliance_solution.png",
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

export default function CompliancePage() {
  return <ModulePage data={data} />;
}
