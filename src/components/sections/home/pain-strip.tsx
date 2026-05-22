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
      "flex flex-col gap-3 py-6 md:py-0 md:px-8",
      !isLast && "border-b md:border-b-0 md:border-r border-gray-200"
    )}>
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="font-mono text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--color-navy-950)]"
      >
        {display}
      </span>
      <div className="flex flex-col gap-1.5">
        <span className="text-[15px] font-bold text-[var(--color-green-600)] uppercase tracking-wide leading-tight">
          {label}
        </span>
        <span className="text-[14px] font-medium text-gray-500 leading-relaxed text-balance">
          {description}
        </span>
      </div>
    </div>
  );
}

export function PainStrip() {
  return (
    <section className="bg-white py-16 md:py-20 relative overflow-hidden z-10 border-y border-gray-100">
      {/* Swiss Style Minimal Moving Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] bg-[var(--color-green-100)] opacity-50 rounded-full blur-[100px] mix-blend-multiply"
          animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[10%] w-[500px] h-[500px] bg-[var(--color-navy-100)] opacity-40 rounded-full blur-[100px] mix-blend-multiply"
          animate={{ x: [0, 40, -30, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-12 xl:gap-16">
          
          {/* Title Area */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 max-w-sm"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] shadow-[0_0_8px_var(--color-green-400)] animate-pulse" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-600)] uppercase m-0">
                {painStrip.eyebrow}
              </h2>
            </div>
            <p className="text-2xl md:text-3xl text-[var(--color-navy-950)] font-semibold leading-[1.2] tracking-tight">
              What happens when the field disconnects from the office?
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full xl:flex-1 grid grid-cols-1 md:grid-cols-3 -mx-8"
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
