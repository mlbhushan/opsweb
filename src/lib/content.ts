// Real content extracted from https://renvo.themeht.com/oil-and-gas/

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  kicker: "Safety. Reliability. Excellence.",
  headlinePre: "Comprehensive Solutions for the",
  rotatingWords: ["Oil & Gas", "Energy Sector", "Petrochem", "Refining"],
  body: "Advanced solutions for safe, efficient, and sustainable oil & gas operations, from exploration and drilling to production, transportation, and refining.",
  searchPlaceholder: "What service are you looking for?",
  serviceOptions: [
    "Refining & Processing",
    "Oilfield Services",
    "Pipelines & Logistics",
    "Petrochemicals",
    "Offshore Drilling",
  ],
  rating: { score: "4.8", label: "Trusted Industry Rating" },
  experience: { value: "25+", label: "Years of Excellence" },
};

export const MISSION =
  "Our mission is simple: to deliver safe, reliable, and innovative Oil & Gas solutions, driven by integrity.";

export const INFO_CARDS = [
  {
    title: "Support Hours",
    lines: [
      "Mon – Fri  9:00 – 18:00",
      "Sat – Sun  8:00 – 16:00",
      "Emergency Support Available 24/7",
    ],
    badge: "24/7 Emergency Response",
    variant: "navy" as const,
  },
  {
    title: "Global Footprint",
    lines: [
      "Our facilities and field teams operate across 30+ countries.",
      "Local expertise, global standards.",
    ],
    badge: "30+ Countries Served",
    variant: "cream" as const,
  },
  {
    title: "Request Consultation",
    lines: [
      "Talk to a specialist about your next project.",
      "Free assessment within 24 hours.",
    ],
    badge: "Book a Specialist",
    variant: "lime" as const,
  },
];

export const ABOUT = {
  kicker: "About Us",
  headline: "Driving Excellence in the Oil & Gas Industry",
  body: "We specialize in exploration, drilling, production, transportation, and refining, providing a complete portfolio of services backed by decades of operational expertise.",
  features: [
    "Certified safety standards across every site and crew",
    "Sustainable, low-emission operations from rig to refinery",
    "End-to-end project delivery with measurable results",
  ],
  badgeLabel: "Trusted by 500+ operators worldwide",
  primary: { label: "Discover More", href: "#services" },
};

export const SERVICES = [
  {
    title: "Refining & Processing",
    description:
      "Converting crude oil into high-quality petroleum products with industry-leading efficiency and yield.",
    image: "/images/services/refining.jpg",
    href: "#",
  },
  {
    title: "Oilfield Services",
    description:
      "Comprehensive upstream support, from drilling and completion to well intervention and abandonment.",
    image: "/images/services/oilfield.jpg",
    href: "#",
  },
  {
    title: "Pipelines & Logistics",
    description:
      "Safe, monitored transportation of oil, gas, and refined products across continents.",
    image: "/images/services/pipelines.jpg",
    href: "#",
  },
  {
    title: "Petrochemicals",
    description:
      "Producing the building blocks for plastics, fertilizers, and advanced materials at scale.",
    image: "/images/services/petrochemicals.jpg",
    href: "#",
  },
  {
    title: "Offshore Operations",
    description:
      "Engineering, drilling, and production services for the most demanding offshore environments.",
    image: "/images/services/offshore.jpg",
    href: "#",
  },
];

export const MARQUEE_WORDS = [
  "Refining",
  "Pipelines",
  "Petrochemicals",
  "Offshore",
  "Reservoirs",
  "Drilling",
];

export const WHY_CHOOSE = {
  kicker: "Why Choose Us",
  headline: "Your Trusted Source for High-Performance Energy Services",
  body: "We deliver reliable and sustainable energy solutions that keep operations running and the world moving forward.",
  card: {
    title: "Powering Energy Safely",
    body: "From rig to refinery, every project is engineered around uptime, safety, and environmental responsibility.",
  },
};

export const STATS = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "K", label: "Completed Projects" },
  { value: 99, suffix: "%", label: "Safety Compliance" },
];

export const TEAM = [
  { name: "Bronson Jones", role: "General Laborer", image: "/images/team/team01.jpg" },
  { name: "Lexis Storm", role: "Safety Inspector", image: "/images/team/team02.jpg" },
  { name: "Donnie Mac", role: "Lead Architect", image: "/images/team/team03.jpg" },
  { name: "Marvel Dane", role: "Field Engineer", image: "/images/team/team04.jpg" },
  { name: "Kara Voss", role: "Operations Manager", image: "/images/team/team05.jpg" },
];

export const APPOINTMENT = {
  kicker: "Make an Appointment",
  headline: "Book Appointment",
  serviceOptions: [
    "Refining & Processing",
    "Oilfield Services",
    "Pipelines & Logistics",
    "Petrochemicals",
    "Offshore Operations",
  ],
};

export const PRICING = {
  kicker: "Flexible Pricing",
  headline: "Plan Rates",
  tiers: [
    {
      name: "Basic",
      description: "Perfect for small repairs and starter projects.",
      price: "$100",
      unit: "/ Per Project",
      features: [
        "Site inspection",
        "Standard reporting",
        "Technician support",
        "Ideal for small jobs",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Best for growing operators and recurring engagements.",
      price: "$250",
      unit: "/ Per Project",
      features: [
        "Dedicated project manager",
        "Priority technician dispatch",
        "Compliance documentation",
        "Quarterly performance review",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Tailored programs for large-scale operations.",
      price: "$500",
      unit: "/ Per Project",
      features: [
        "Custom SLAs",
        "On-site dedicated team",
        "Full HSE program management",
        "24/7 monitoring & response",
      ],
      highlighted: false,
    },
  ],
};

export const TESTIMONIALS = [
  {
    name: "Annistar May",
    role: "Engineer",
    quote:
      "Excellent workmanship and attention to detail. The team delivered our project on time and exceeded our expectations in every measurable way.",
    rating: 5,
  },
  {
    name: "Marcus Reid",
    role: "Operations Lead",
    quote:
      "Their refining engineering team helped us boost yield by 12% in the first quarter alone. Genuinely best-in-class operators.",
    rating: 5,
  },
  {
    name: "Priya Anand",
    role: "Safety Director",
    quote:
      "Zero recordable incidents across two complex offshore turnarounds. That speaks louder than any sales pitch.",
    rating: 5,
  },
  {
    name: "Tomás Vega",
    role: "Procurement Manager",
    quote:
      "Transparent pricing, predictable delivery, and a team that actually picks up the phone. Renewed our contract for another three years.",
    rating: 5,
  },
];

export const BLOG = {
  kicker: "Latest Articles",
  headline: "News, Ideas & Updates from the Energy World",
  posts: [
    {
      date: "December 3, 2025",
      title: "Digital Innovation in Construction & Industry",
      excerpt:
        "How operators are using digital twins and predictive maintenance to squeeze more uptime out of aging assets.",
      image: "/images/blog/post-01.jpg",
      href: "#",
    },
    {
      date: "December 1, 2025",
      title: "AI-Driven Quality Control for Manufacturing",
      excerpt:
        "Vision systems and machine learning are catching defects upstream, before they reach the customer.",
      image: "/images/blog/post-02.jpg",
      href: "#",
    },
    {
      date: "November 28, 2025",
      title: "The Future of Sustainable Oilfield Operations",
      excerpt:
        "From electrified rigs to methane-capture programs, here's what real-world decarbonization looks like.",
      image: "/images/blog/post-03.jpg",
      href: "#",
    },
  ],
};

export const FOOTER = {
  about:
    "We deliver global oil & gas services for the world's most critical operations and infrastructure projects.",
  hours: ["Mon – Fri  9:00 – 18:00", "Sat – Sun  8:00 – 16:00"],
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Our Team", href: "#team" },
    { label: "News", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    address: "5th Street, 21st Floor, New York, USA",
    phone: "+1 (813) 398-6692",
    email: "info@opsflo.example.com",
  },
};

export const TOP_BAR = {
  schedule: "Monday – Friday  10:00 to 18:00",
  address: "5th Street, 21st Floor, New York, USA",
  email: "info@opsflo.example.com",
};
