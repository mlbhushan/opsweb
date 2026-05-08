export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const BLOG_CATEGORIES = [
  "Revenue",
  "Maintenance",
  "Digital Transformation",
  "Safety",
  "Industry News",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "field-operations-revenue-leakage",
    title: "5 Signs Your Field Operations Are Leaking Revenue",
    category: "Revenue",
    author: "OpsFlo Team",
    date: "2026-04-28",
    readTime: "6 min read",
    excerpt:
      "Most oilfield service companies lose 5-15% of billable revenue to incomplete field data. Here are the warning signs  -  and how to fix them.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Revenue leakage is the silent killer of oilfield service profitability. Unlike equipment failure or safety incidents, it does not announce itself with alarms or shutdowns. It hides in the gap between work completed and work billed  -  invisible until you look for it.",
      "The industry average is staggering: 5-15% of billable revenue is never invoiced. For a mid-size oilfield service company doing $20M in annual revenue, that is $1-3M left on the table every year.",
      "## Sign 1: Your Billing Cycle Exceeds 14 Days\n\nIf it takes more than two weeks to go from completed job to sent invoice, revenue is slipping through. Every day of delay increases the chance that line items are forgotten, rates are misapplied, and customers dispute charges they have already forgotten about.",
      "## Sign 2: Field Tickets Arrive Incomplete\n\nWhen your billing team regularly has to call the field to get missing information  -  materials used, hours worked, equipment deployed  -  you are losing both time and revenue. Incomplete tickets mean incomplete invoices.",
      "## Sign 3: You Cannot Reconcile Jobs to Invoices\n\nIf matching completed jobs to sent invoices requires a spreadsheet exercise, some jobs are falling through the cracks entirely. Every unmatched job is potential unbilled revenue.",
      "## Sign 4: Invoice Disputes Are Increasing\n\nDisputes are not just a customer relations problem  -  they are a data quality problem. When field data is incomplete or captured days after the work, discrepancies are inevitable. Each dispute costs admin hours and often ends in write-offs.",
      "## Sign 5: You Rely on Paper Field Tickets\n\nPaper is the root cause of most revenue leakage. Paper tickets get lost, smudged, delayed, and misread. Digital capture at the point of work eliminates these failure modes entirely.",
      "## The Fix: Digital Capture at Source\n\nThe solution is not better spreadsheets or faster data entry. It is capturing complete, validated data at the point of work  -  before memory fades, paper gets lost, and revenue disappears. That is exactly what OpsFlo's field ticketing and invoicing modules are designed to do.",
    ],
  },
  {
    slug: "predictive-vs-preventive-maintenance",
    title: "Predictive vs. Preventive Maintenance: The ROI Case for Oil & Gas",
    category: "Maintenance",
    author: "OpsFlo Team",
    date: "2026-04-14",
    readTime: "8 min read",
    excerpt:
      "Calendar-based maintenance over-services healthy equipment and misses the assets actually degrading. Here is why predictive wins on ROI.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    body: [
      "For decades, the oil and gas industry has relied on preventive maintenance  -  time-based or usage-based schedules that service equipment at fixed intervals regardless of actual condition. It is better than reactive maintenance, but it is far from optimal.",
      "Predictive maintenance represents the next evolution: using operational data to forecast when equipment will actually fail, and scheduling service precisely when it is needed  -  not before, not after.",
      "## The Problem with Calendar-Based Maintenance\n\nPreventive maintenance follows a simple logic: service equipment every X hours or every Y months. The problem is that equipment does not degrade on a calendar. Two identical pumps in different operating conditions will have vastly different failure timelines.",
      "## The Economics of Prediction\n\nThe math is compelling. Unplanned failures cost 3-10x more than planned maintenance when you factor in emergency mobilization, idle crew time, lost production, and customer penalties. Predictive maintenance captures most of this savings while also reducing the over-servicing waste of calendar-based approaches.",
      "## What Data Do You Need?\n\nThe common misconception is that predictive maintenance requires expensive IoT sensor deployments. While sensors add value, you can build effective prediction models from data you already have: inspection results, work order history, run-hours, and failure records.",
      "## Getting Started\n\nThe transition from preventive to predictive does not have to be a big-bang implementation. Start with your most critical and most expensive assets. Build condition profiles from your existing inspection data. Let the models learn from your operational history. The ROI will justify expansion to the rest of your fleet.",
    ],
  },
  {
    slug: "paper-to-digital-field-tickets",
    title: "Digital Tickets vs. Paper: The Business Case for Going Digital",
    category: "Digital Transformation",
    author: "OpsFlo Team",
    date: "2026-03-30",
    readTime: "5 min read",
    excerpt:
      "The true cost of paper field tickets goes far beyond printing. Here is the business case for digital field ticketing.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Paper field tickets have been the backbone of oilfield operations for generations. They are familiar, they do not require batteries, and they work in any environment. But their hidden costs are enormous  -  and the gap between paper-based and digital-first operations is widening every year.",
      "## The Hidden Costs of Paper\n\nThe obvious costs of paper are the printing, storage, and manual data entry. But those are the smallest items on the bill. The real costs are the revenue leakage from lost tickets, the billing delays from illegible handwriting, the admin hours spent chasing missing information, and the disputes that arise from incomplete records.",
      "## What Digital Capture Changes\n\nDigital field ticketing captures complete, validated data at the point of work. Required fields ensure nothing is missed. Photos and GPS provide evidence. E-signatures confirm approval. And the data flows directly to billing  -  no re-keying, no delays, no lost tickets.",
      "## The ROI Timeline\n\nMost companies see ROI within 60-90 days of deploying digital field tickets. The revenue recovered from eliminated leakage alone typically exceeds the software cost. Faster billing improves cash flow immediately. And the reduction in admin hours frees your team to focus on growth instead of data entry.",
      "## The Offline Reality\n\nThe most common objection to digital tickets in oilfield is connectivity. If the app does not work offline, it will not work in the field  -  period. That is why OpsFlo was built offline-first. Every feature works without connectivity, and data syncs automatically when signal returns.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
