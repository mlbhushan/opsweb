import { ArrowRightIcon } from "@/components/icons";

const PRICING_TIERS = [
  {
    name: "Basic",
    price: "$100",
    unit: "/ Per Project",
    description: "Perfect for small repairs and starter projects.",
    features: [
      "Site inspection",
      "Standard reporting",
      "Technician support",
      "Ideal for small facilities"
    ],
    highlighted: false,
    buttonStyle: "bg-[var(--brand-navy)] text-white hover:bg-gray-800",
    iconStyle: "bg-white text-[var(--brand-navy)]",
    textColor: "text-[var(--brand-navy)]",
    descColor: "text-gray-500",
    unitColor: "text-gray-400"
  },
  {
    name: "Professional",
    price: "$120",
    unit: "/ Per Project",
    description: "Ideal for medium-size renovations and upgrades.",
    features: [
      "Everything in Basic",
      "Detailed engineering report",
      "Performance testing",
      "Recommended for mid-size projects"
    ],
    highlighted: true,
    buttonStyle: "bg-white text-[var(--brand-navy)] hover:bg-gray-100",
    iconStyle: "bg-[var(--brand-navy)] text-white",
    textColor: "text-white",
    descColor: "text-white/80",
    unitColor: "text-white/80"
  },
  {
    name: "Enterprise",
    price: "$133",
    unit: "/ Per Project",
    description: "Comprehensive renovation or new build support.",
    features: [
      "Full field evaluation",
      "On-site expert team",
      "Advanced engineering analysis",
      "Perfect for large industrial operations"
    ],
    highlighted: false,
    buttonStyle: "bg-[var(--brand-lime)] text-white hover:bg-[#7ab85a]",
    iconStyle: "bg-white text-[var(--brand-navy)]",
    textColor: "text-[var(--brand-navy)]",
    descColor: "text-gray-500",
    unitColor: "text-gray-400"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#fafaf8] py-24 pb-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[56px] lg:text-[72px] font-semibold leading-[1.05] text-[var(--brand-navy)] tracking-tight">
            Flexible Pricing _ <br />
            <span className="inline-flex items-center gap-4 mt-2">
              <span className="text-[48px] lg:text-[60px] -rotate-12 transition-transform hover:rotate-12 cursor-default">🛠️</span>
              Plan Rates
            </span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto drop-shadow-2xl bg-white rounded-[2.5rem]">
          {PRICING_TIERS.map((t, idx) => {
            const h = t.highlighted;
            return (
              <div
                key={t.name}
                className={[
                  "relative flex flex-col p-10 lg:p-14 transition-transform duration-500",
                  h ? "bg-[var(--brand-lime)] scale-100 lg:scale-[1.03] z-10 rounded-[2.5rem] shadow-2xl" : "bg-transparent z-0",
                  idx === 0 ? "md:rounded-l-[2.5rem]" : "",
                  idx === 2 ? "md:rounded-r-[2.5rem]" : ""
                ].join(" ")}
              >
                {h && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--brand-navy)] shadow-md">
                    Featured
                  </span>
                )}
                
                <h3 className={["font-sans text-[22px] font-semibold tracking-tight", t.textColor].join(" ")}>
                  {t.name}
                </h3>
                <p className={["mt-3 text-[13px] leading-relaxed min-h-[40px] font-medium", t.descColor].join(" ")}>
                  {t.description}
                </p>
                
                <div className="mt-8 flex items-baseline gap-1">
                  <span className={["font-display text-5xl lg:text-[56px] font-semibold tracking-tight -ml-1", t.textColor].join(" ")}>
                    {t.price}
                  </span>
                  <span className={["text-[11px] font-bold uppercase tracking-wider", t.unitColor].join(" ")}>
                    {t.unit}
                  </span>
                </div>

                <ul className="mt-10 space-y-5 mb-14 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[13px] font-semibold">
                      <span className={h ? "text-white" : "text-[var(--brand-lime)]"}>
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className={t.textColor}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "group mt-auto inline-flex h-14 w-max items-center justify-between gap-4 rounded-full pl-6 pr-2 text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm",
                    t.buttonStyle
                  ].join(" ")}
                >
                  Request a Quote
                  <div className={["flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform group-hover:translate-x-1", t.iconStyle].join(" ")}>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
