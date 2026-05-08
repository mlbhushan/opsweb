export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  companySize: string;
  logo?: string;
  headline: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  results: string;
  quote?: { text: string; author: string; role: string };
  image: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "western-energy-services",
    company: "Western Energy Services",
    industry: "Oilfield Services",
    companySize: "250+ field crew",
    headline: "How Western Energy Cut Billing Cycles from 45 Days to 4 Hours",
    metrics: [
      { value: "50%", label: "Faster billing" },
      { value: "$1.2M", label: "Revenue recovered annually" },
      { value: "0", label: "Lost field tickets" },
    ],
    challenge:
      "Western Energy Services was losing an estimated 8% of billable revenue to paper-based field ticketing. Tickets were lost in truck cabs, submitted days late with missing information, and required hours of admin time to re-key into their accounting system. Billing cycles averaged 45 days from job completion to invoice.",
    solution:
      "OpsFlo replaced paper tickets with digital capture at the point of work. Field crews submit tickets with photos, GPS, and e-signatures directly from their mobile devices  -  even offline. Approved tickets flow automatically to QuickBooks with correct rate cards applied.",
    results:
      "Within 90 days, Western Energy eliminated paper tickets entirely. Billing cycles dropped from 45 days to same-day for most jobs. Revenue leakage dropped from 8% to under 1%. The billing team was reassigned from data entry to revenue analysis  -  finding additional optimization opportunities.",
    quote: {
      text: "We knew we were losing revenue to paper tickets, but we did not realize it was over a million dollars a year until OpsFlo showed us the gap.",
      author: "Sarah Chen",
      role: "VP of Finance, Western Energy Services",
    },
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "apex-equipment-rental",
    company: "Apex Equipment Rental",
    industry: "Equipment Rental",
    companySize: "500+ units",
    headline: "Apex Equipment Reduced Unplanned Downtime by 60% with Predictive Maintenance",
    metrics: [
      { value: "60%", label: "Downtime reduction" },
      { value: "35%", label: "Maintenance cost savings" },
      { value: "98%", label: "Fleet availability" },
    ],
    challenge:
      "Apex Equipment Rental managed a fleet of 500+ units across 12 locations. Maintenance was calendar-based, leading to both over-servicing of healthy equipment and unexpected failures of degrading assets. Unplanned downtime was costing $3.5M annually in emergency repairs, lost rental revenue, and customer penalties.",
    solution:
      "OpsFlo aggregated inspection data, work order history, and run-hour data into condition profiles for every asset. Predictive models identified degradation patterns and scheduled maintenance based on actual condition rather than calendar intervals. Critical assets received attention weeks before predicted failure windows.",
    results:
      "Unplanned downtime dropped 60% in the first year. Maintenance costs decreased 35% as over-servicing was eliminated. Fleet availability reached 98%, up from 87%. The maintenance team shifted from firefighting to proactive fleet optimization.",
    quote: {
      text: "We went from constantly reacting to breakdowns to preventing them weeks in advance. The ROI paid for OpsFlo in the first quarter.",
      author: "James Rodriguez",
      role: "Director of Operations, Apex Equipment Rental",
    },
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "northstar-pipeline",
    company: "NorthStar Pipeline Services",
    industry: "Pipeline & Infrastructure",
    companySize: "3,000+ miles managed",
    headline: "NorthStar Achieved 100% Inspection Compliance Across 3,000 Miles of Pipeline",
    metrics: [
      { value: "100%", label: "Inspection compliance" },
      { value: "85%", label: "Faster audit preparation" },
      { value: "Zero", label: "Regulatory findings" },
    ],
    challenge:
      "NorthStar Pipeline Services managed inspection programs across 3,000+ miles of pipeline with dozens of regulatory requirements. Paper-based inspection records made compliance tracking nearly impossible. Audit preparation consumed weeks of staff time. Missed inspections created regulatory exposure that threatened operating permits.",
    solution:
      "OpsFlo digitized NorthStar's entire inspection program  -  structuring checklists by regulation and asset type, automating scheduling, and tracking every finding to resolution. Audit packages are now generated in one click with all supporting evidence attached.",
    results:
      "Inspection compliance reached 100% for the first time in company history. Audit preparation time dropped from 3 weeks to half a day. The most recent regulatory audit resulted in zero findings  -  a first for NorthStar. The compliance team now focuses on proactive integrity management rather than reactive documentation.",
    quote: {
      text: "For the first time in 15 years, our auditors found zero compliance gaps. OpsFlo did not just digitize our inspections  -  it transformed our entire approach to integrity management.",
      author: "Michael Torres",
      role: "HSE Director, NorthStar Pipeline Services",
    },
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug);
}
