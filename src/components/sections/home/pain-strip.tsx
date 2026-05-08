"use client";

import { motion } from "framer-motion";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { useCountUp } from "@/hooks/use-count-up";
import { viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const { painStrip } = HOME;

function StatItem({
  value,
  label,
  description,
  isLast,
}: {
  value: string;
  label: string;
  description: string;
  isLast: boolean;
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
    decimals: value.includes(".") ? 1 : 0,
  });

  return (
    <div className={cn(
      "flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 md:p-4 w-full bg-[var(--color-bg-primary)] group hover:bg-[var(--color-green-50)] transition-colors duration-200",
      !isLast && "border-b-2 sm:border-b-0 sm:border-r-2 border-[var(--color-navy-950)]"
    )}>
      <div className="flex-shrink-0 bg-[var(--color-green-450)] border-2 border-[var(--color-navy-950)] px-2.5 py-1 shadow-[2px_2px_0_0_var(--color-navy-950)] group-hover:shadow-[1px_1px_0_0_var(--color-navy-950)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-all duration-200">
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          className="font-mono text-lg md:text-xl font-black text-[var(--color-navy-950)] tracking-tighter"
        >
          {display}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-[var(--color-navy-950)] uppercase tracking-tight leading-tight">
          {label}
        </span>
        <span className="text-xs font-medium text-[var(--color-navy-700)] leading-tight mt-0.5 text-balance">
          {description}
        </span>
      </div>
    </div>
  );
}

export function PainStrip() {
  return (
    <section className="bg-white py-6 md:py-8 border-y-2 border-[var(--color-navy-950)] relative overflow-hidden z-10">
      {/* Brutalist Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(var(--color-navy-950)_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <Container>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-6 relative">
          
          {/* Eyebrow / Title Badge */}
          <motion.div
            initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="flex-shrink-0 bg-[var(--color-navy-950)] text-white px-4 py-2 border-2 border-[var(--color-navy-950)] shadow-[4px_4px_0_0_var(--color-green-500)] rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
          >
            <p className="font-mono text-xs md:text-sm font-black tracking-widest uppercase m-0">
              {painStrip.eyebrow}
            </p>
          </motion.div>

          {/* Stats Container */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full xl:w-auto flex-1 max-w-5xl border-2 border-[var(--color-navy-950)] shadow-[4px_4px_0_0_var(--color-navy-950)] flex flex-col sm:flex-row bg-white relative z-10"
          >
            {painStrip.items.map((item, index) => (
              <StatItem
                key={item.label}
                value={item.value}
                label={item.label}
                description={item.description}
                isLast={index === painStrip.items.length - 1}
              />
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
