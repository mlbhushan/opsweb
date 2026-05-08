"use client";

import { motion } from "framer-motion";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { useCountUp } from "@/hooks/use-count-up";
import { viewportOnce } from "@/lib/animations";

const { outcomes } = HOME;

function OutcomeItem({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  const numericMatch = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  const prefix = numericMatch?.[1] || "";
  const num = parseFloat(numericMatch?.[2] || "0");
  const suffix = numericMatch?.[3] || "";

  const { ref, display } = useCountUp({
    end: num,
    prefix,
    suffix,
    duration: 1800,
  });

  return (
    <div className="px-5 py-6 md:px-6 md:py-8 flex flex-col justify-start bg-white hover:bg-[var(--color-bg-navy-tint)] transition-colors duration-300 h-full">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="font-mono text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--color-navy-950)] leading-none mb-3"
      >
        {display}
      </span>
      <h3 className="text-[13px] font-bold text-[var(--color-navy-950)] uppercase tracking-wider mb-1.5">
        {label}
      </h3>
      <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed text-balance">
        {description}
      </p>
    </div>
  );
}

export function OutcomesGrid() {
  return (
    <section className="bg-white py-8 md:py-12 border-t border-[var(--color-gray-200)]">
      <Container>
        <div className="border border-[var(--color-gray-200)] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1px] bg-[var(--color-gray-200)]">
            
            {/* Header Area (Left) */}
            <div className="lg:col-span-4 bg-[var(--color-navy-950)] p-6 md:p-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5 }}
              >
                <div className="w-8 h-[3px] bg-[var(--color-green-500)] mb-5" />
                <p className="text-[11px] font-mono font-bold tracking-widest text-[var(--color-green-400)] uppercase mb-2">
                  {outcomes.eyebrow}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight text-balance">
                  {outcomes.headline}
                </h2>
              </motion.div>
            </div>

            {/* Stats Area (Right) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[var(--color-gray-200)]">
              {outcomes.items.map((item) => (
                <OutcomeItem
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  description={item.description}
                />
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
