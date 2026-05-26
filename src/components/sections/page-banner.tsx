"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────
   Image look-up table  -  maps path prefixes → background images
   Longer / more-specific prefixes take priority over shorter ones.
───────────────────────────────────────────────────────────────── */
const BANNER_IMAGE_URL = "https://res.cloudinary.com/dmghhstx4/image/upload/v1779799694/pexels-tomfisk-10396410_ykon4g.jpg";

const BANNER_IMAGES: { prefix: string; image: string }[] = [
  { prefix: "/about", image: BANNER_IMAGE_URL },
  { prefix: "/solutions", image: BANNER_IMAGE_URL },
  { prefix: "/platform", image: BANNER_IMAGE_URL },
  { prefix: "/blog", image: BANNER_IMAGE_URL },
  { prefix: "/news", image: BANNER_IMAGE_URL },
  { prefix: "/careers", image: BANNER_IMAGE_URL },
  { prefix: "/contact", image: BANNER_IMAGE_URL },
  { prefix: "/integrations", image: BANNER_IMAGE_URL },
  { prefix: "/partners", image: BANNER_IMAGE_URL },
  { prefix: "/case-studies", image: BANNER_IMAGE_URL },
  { prefix: "/resources", image: BANNER_IMAGE_URL },
  { prefix: "/roi-calculator", image: BANNER_IMAGE_URL },
  { prefix: "/security", image: BANNER_IMAGE_URL },
  { prefix: "/faq", image: BANNER_IMAGE_URL },
  { prefix: "/legal", image: BANNER_IMAGE_URL },
];

const BANNER_IMAGE_DEFAULT = BANNER_IMAGE_URL;

function resolveBannerImage(pathname: string): string {
  // Find longest matching prefix (most specific wins)
  let best: { prefix: string; image: string } | null = null;
  for (const entry of BANNER_IMAGES) {
    if (
      pathname === entry.prefix ||
      pathname.startsWith(entry.prefix + "/")
    ) {
      if (!best || entry.prefix.length > best.prefix.length) {
        best = entry;
      }
    }
  }
  return best ? best.image : BANNER_IMAGE_DEFAULT;
}

/* ─────────────────────────────────────────────────────────────────
   Segment → human-readable label mapping
───────────────────────────────────────────────────────────────── */
const SEGMENT_LABELS: Record<string, string> = {
  about: "About Us",
  blog: "Blog",
  careers: "Careers",
  contact: "Contact",
  faq: "FAQ",
  integrations: "Integrations",
  login: "Login",
  news: "News",
  partners: "Partners",
  platform: "Platform",
  "roi-calculator": "ROI Calculator",
  security: "Security",
  solutions: "Solutions",
  "case-studies": "Case Studies",
  resources: "Resources",
  legal: "Legal",
  guides: "Guides",
  webinars: "Webinars",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  sla: "SLA",
  // Platform modules
  ai: "AI Intelligence",
  "all-modules": "All Modules",
  analytics: "Analytics",
  "asset-intelligence": "Asset Intelligence",
  carbon: "Carbon Management",
  compliance: "Compliance",
  "field-execution": "Field Execution",
  "field-ticketing": "Field Ticketing",
  inspections: "Inspections",
  inventory: "Inventory",
  invoicing: "Invoicing",
  mobile: "Mobile",
  offline: "Offline Mode",
  "predictive-maintenance": "Predictive Maintenance",
  safety: "Safety",
  scheduling: "Scheduling",
  "work-orders": "Work Orders",
  // Solutions
  "equipment-rental": "Equipment Rental",
  executive: "Executive",
  "faster-billing": "Faster Billing",
  "field-supervisor": "Field Supervisor",
  finance: "Finance",
  "fluid-hauling": "Fluid Hauling",
  hse: "HSE",
  "inspection-execution": "Inspection Execution",
  "oilfield-services": "Oilfield Services",
  "operations-manager": "Operations Manager",
  pipeline: "Pipeline",
  "prevent-downtime": "Prevent Downtime",
  "revenue-leakage": "Revenue Leakage",
  "well-services": "Well Services",
};

function slugToLabel(slug: string): string {
  return (
    SEGMENT_LABELS[slug] ??
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

/* ─────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────── */
type PageBannerProps = {
  /** The large heading shown in the banner. */
  title: string;
  /** Optional background image override. Auto-detected from path when omitted. */
  backgroundImage?: string;
  className?: string;
};

export function PageBanner({ title, backgroundImage, className }: PageBannerProps) {
  const pathname = usePathname();

  const image = backgroundImage ?? resolveBannerImage(pathname);

  // Auto-build breadcrumbs from the current path
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, i) => {
      const href = "/" + segments.slice(0, i + 1).join("/");
      const isLast = i === segments.length - 1;
      return { label: slugToLabel(seg), href: isLast ? undefined : href };
    }),
  ];

  return (
    <section
      className={cn("relative w-full overflow-hidden h-[260px] md:h-[310px]", className)}
      aria-label="Page header"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_65%]"
      />

      {/* Left → center dark gradient overlay (matches reference) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032044]/95 via-[#032044]/72 to-[#032044]/25" />
      {/* Subtle top/bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />

      {/* Content layer  -  offset down by the fixed navbar height */}
      <div
        className="relative h-full flex flex-col px-6 md:px-10 lg:px-16 max-w-[1280px] mx-auto w-full"
        style={{ paddingTop: "var(--navbar-height, 72px)" }}
      >
        {/* Page title  -  vertically fills remaining space */}
        <div className="flex-1 flex items-center">
          <h1
            className="text-white font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-heading)", // Cabinet Grotesk
              fontSize: "clamp(26px, 3.5vw, 52px)",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Breadcrumb tab  -  stiched to bottom border matching reference */}
        <div className="mt-auto relative z-10 self-start">
          <nav aria-label="Breadcrumb">
            <div className="relative inline-flex items-center gap-2.5 bg-white px-4 py-3 rounded-t-[12px]">
              {/* Left swooping curve */}
              <div 
                className="absolute bottom-0 -left-3 h-3 w-3 bg-transparent pointer-events-none"
                style={{ borderBottomRightRadius: "6px", boxShadow: "6px 6px 0 0 white" }}
                aria-hidden="true" 
              />
              {/* Right swooping curve */}
              <div 
                className="absolute bottom-0 -right-3 h-3 w-3 bg-transparent pointer-events-none"
                style={{ borderBottomLeftRadius: "6px", boxShadow: "-6px 6px 0 0 white" }}
                aria-hidden="true" 
              />

              <ol className="flex items-center gap-2 shrink-0">
                {breadcrumbs.map((crumb, i) => (
                  <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                    {i > 0 && (
                      <span
                        className="" style={{ fontSize: "12px", fontWeight: 600, color: "#200043", fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        aria-hidden="true"
                      >
                        /
                      </span>
                    )}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="uppercase tracking-[0.08em] transition-colors hover:text-[var(--color-green-450)]" style={{ fontSize: "12px", fontWeight: 600, color: "#200043", fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className="uppercase tracking-[0.08em]" style={{ fontSize: "12px", fontWeight: 600, color: "#200043", fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        aria-current="page"
                      >
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
