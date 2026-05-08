export const SITE = {
  name: "OpsFlo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ops-flo.com",
  description:
    "The execution layer for oilfield operations. Ensuring every inspection, maintenance task, and field job is completed, validated, and converted to revenue.",
  ogImage: "/seo/og-default.png",
  primaryCTAs: {
    demo: "See How OpsFlo Ensures Execution",
    revenue: "Get a Revenue Diagnostic",
    pilot: "Start a Pilot",
    roi: "Calculate Your ROI",
  },
  social: {
    linkedin: "https://linkedin.com/company/opsflo",
    twitter: "https://twitter.com/opsflo",
  },
  contact: {
    email: "hello@ops-flo.com",
    phone: "+1 (800) 555-0199",
  },
  appUrl: "https://qa.ops-flo.com/Login.aspx",
} as const;
