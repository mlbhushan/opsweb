"use client";

import { motion } from "framer-motion";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { useCountUp } from "@/hooks/use-count-up";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const { outcomes } = HOME;

const BG_IMAGES = [
  "/images/outcomes/outcome_revenue_1779433767770.png", // Revenue
  "/images/outcomes/outcome_downtime_1779433781944.png", // Tech/Machinery
  "/images/outcomes/outcome_actions_1779433799086.png", // Data/Action
  "/images/outcomes/outcome_billing_1779433811974.png"  // Speed/Flow
];

function OutcomeItem({
  value,
  label,
  description,
  index,
}: {
  value: string;
  label: string;
  description: string;
  index: number;
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
    <motion.div
      variants={fadeUp}
      className="px-6 py-8 flex flex-col justify-start bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full relative overflow-hidden group border border-gray-100"
    >
      {/* Background Image & Overlays */}
      <img 
        src={BG_IMAGES[index % BG_IMAGES.length]} 
        alt={label} 
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-700 opacity-60 grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/40 z-0 group-hover:from-white/90 transition-colors duration-500" />
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[var(--color-green-500)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      {/* Content */}
      <div className="relative z-10 mb-4">
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          className="font-mono text-4xl lg:text-5xl font-black tracking-tighter text-[var(--color-navy-950)] leading-none block group-hover:text-[var(--color-green-700)] transition-colors duration-300"
        >
          {display}
        </span>
      </div>
      <div className="relative z-10">
        <h3 className="text-[14px] font-bold text-[var(--color-navy-950)] uppercase tracking-wider mb-2">
          {label}
        </h3>
        <p className="text-[14px] font-medium text-[var(--color-gray-600)] leading-relaxed text-balance">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function OutcomesGrid() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 relative overflow-hidden z-10 border-t border-[var(--color-navy-100)]">
      {/* Swiss Style Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
        {/* Soft grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-light-outcomes" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60V0H60" fill="none" stroke="#0f172a" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light-outcomes)" />
        </svg>

        {/* Ambient Glows */}
        <motion.div
          className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-[var(--color-green-300)] rounded-full blur-[120px] opacity-20 mix-blend-multiply"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Header Area (Left) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_40px_rgba(8,65,130,0.04)] h-full flex flex-col justify-center relative overflow-hidden group border border-gray-100"
            >
              {/* Image Background for Header */}
              <img 
                src="/images/outcomes/outcome_header_1779433839368.png" 
                alt="Modern Office" 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-multiply scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/80 to-white/40 z-0" />
              
              {/* Subtle accent blob inside header card */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-green-100)] rounded-full blur-3xl opacity-50 mix-blend-multiply" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span className="h-2 w-2 rounded-full bg-[var(--color-green-500)] shadow-[0_0_8px_var(--color-green-400)] animate-pulse" />
                <p className="text-[12px] font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase">
                  {outcomes.eyebrow}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-navy-950)] leading-[1.1] text-balance relative z-10">
                {outcomes.headline}
              </h2>
            </motion.div>
          </div>

          {/* Stats Area (Right) */}
          <motion.div 
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {outcomes.items.map((item, index) => (
              <OutcomeItem
                key={item.label}
                value={item.value}
                label={item.label}
                description={item.description}
                index={index}
              />
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
