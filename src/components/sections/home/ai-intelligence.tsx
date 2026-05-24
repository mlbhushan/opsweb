"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { ArrowRight, ArrowUpRight, Activity, DollarSign, Waypoints } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

// Custom visual components for each AI capability
const FailurePredictionVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6 relative">
    <div className="relative w-full max-w-[200px] h-24 border-b-2 border-l-2 border-[var(--color-navy-200)]">
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <motion.path
          d="M0 80 Q 40 80, 80 50 T 160 20 L 200 10"
          fill="none"
          stroke="var(--color-navy-300)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Anomaly blip */}
        <motion.circle
          cx="160" cy="20" r="6"
          fill="var(--color-green-500)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.5, 1], opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </motion.svg>
      {/* Alert badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute top-[-10px] right-[-20px] bg-white shadow-md border border-[var(--color-green-200)] rounded-md px-2.5 py-1.5 flex items-center gap-1.5 z-10"
      >
        <Activity className="w-3.5 h-3.5 text-[var(--color-green-600)]" />
        <span className="text-[10px] font-bold text-[var(--color-green-700)] uppercase tracking-wider">Anomaly detected</span>
      </motion.div>
    </div>
  </div>
);

const RevenueRiskVisual = () => (
  <div className="w-full h-full flex items-center justify-center gap-3 p-6 relative">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className={`w-20 rounded-lg border flex flex-col p-2.5 gap-2.5 ${i === 1 ? 'bg-white border-[var(--color-green-500)] shadow-lg z-10 scale-110' : 'bg-white/60 border-[var(--color-navy-200)] opacity-60'}`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: i === 1 ? 1 : 0.6 }}
        transition={{ delay: i * 0.15, duration: 0.5 }}
      >
        <div className="h-2 w-1/2 bg-[var(--color-navy-200)] rounded-full" />
        <div className="h-1.5 w-3/4 bg-[var(--color-navy-100)] rounded-full" />
        <div className="h-1.5 w-full bg-[var(--color-navy-100)] rounded-full" />
        <div className="mt-auto pt-2.5 border-t border-[var(--color-navy-50)] flex justify-between items-center">
          <div className="h-2 w-1/3 bg-[var(--color-navy-200)] rounded-full" />
          {i === 1 && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="w-5 h-5 rounded-full bg-[var(--color-green-100)] flex items-center justify-center"
            >
              <DollarSign className="w-3 h-3 text-[var(--color-green-600)]" strokeWidth={3} />
            </motion.div>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

const NextActionVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6 relative">
    <div className="flex items-center">
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-[var(--color-navy-200)] bg-white flex items-center justify-center z-10"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1 }}
      >
        <div className="w-2 h-2 rounded-full bg-[var(--color-navy-300)]" />
      </motion.div>
      <motion.div
        className="h-0.5 w-10 bg-[var(--color-navy-200)] -mx-1"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.3 }} style={{ originX: 0 }}
      />
      <motion.div
        className="w-16 h-16 rounded-full border-2 border-[var(--color-green-500)] bg-[var(--color-green-50)] flex items-center justify-center z-20 shadow-lg relative"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }}
      >
        <Waypoints className="w-7 h-7 text-[var(--color-green-600)]" />
        <motion.div
          className="absolute -inset-3 border-2 border-[var(--color-green-300)] rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      <motion.div
        className="h-0.5 w-10 bg-dashed border-t-2 border-dashed border-[var(--color-navy-200)] -mx-1"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
      />
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-[var(--color-navy-200)] bg-white/50 flex items-center justify-center z-10"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.0 }}
      >
      </motion.div>
    </div>
  </div>
);

function CapabilityCard({
  title,
  description,
  index
}: {
  title: string,
  description: string,
  index: number
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col bg-white border border-[var(--color-navy-200)] hover:border-[var(--color-green-500)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 rounded-2xl overflow-hidden group"
    >
      {/* Visual Demo Area */}
      <div className="h-56 bg-slate-50 relative flex items-center justify-center border-b border-[var(--color-navy-100)] overflow-hidden">
        {/* Subtle background pattern in demo area */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_var(--color-navy-900)_1px,_transparent_1px)] bg-[size:12px_12px]" />

        {index === 0 && <FailurePredictionVisual />}
        {index === 1 && <RevenueRiskVisual />}
        {index === 2 && <NextActionVisual />}
      </div>

      {/* Text Area */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-[var(--color-navy-400)]">0{index + 1}</span>
          <h3 className="text-[20px] font-bold text-[var(--color-navy-950)] leading-tight group-hover:text-[var(--color-green-600)] transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-[15px] text-[var(--color-navy-600)] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function AiIntelligence() {
  const { ai } = HOME;

  // Safely split the headline if it contains a comma for the dual-tone effect
  const headlineParts = ai.headline.split(", ");
  const hasComma = headlineParts.length > 1;

  return (
    <section className="relative py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
      {/* Moving Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="#0f172a" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light)" />
        </svg>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-[5%] right-[5%] w-[40vw] max-w-[600px] h-[40vw] max-h-[600px] rounded-full bg-gradient-to-br from-[var(--color-green-200)] to-blue-200 blur-[120px] opacity-40 mix-blend-multiply"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 30, 50, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[5%] w-[35vw] max-w-[500px] h-[35vw] max-h-[500px] rounded-full bg-gradient-to-tr from-slate-300 to-[var(--color-green-100)] blur-[120px] opacity-50 mix-blend-multiply"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, -40, -10, 0],
            scale: [1, 0.95, 1.05, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                {ai.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              {hasComma ? (
                <>
                  {headlineParts[0]},<br className="hidden md:block" />
                  <span className="text-[var(--color-green-500)]">{headlineParts.slice(1).join(", ")}</span>
                </>
              ) : (
                ai.headline
              )}
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:max-w-md lg:pb-2 flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <Link
              href="/platform/ai"
              className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.1em] text-white uppercase hover:text-[var(--color-navy-950)] transition-colors bg-[var(--color-navy-950)] border border-[var(--color-navy-950)] pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[var(--color-green-400)]"
            >
              See AI in Action
              <span className="relative overflow-hidden w-8 h-8 flex items-center justify-center bg-white/20 group-hover:bg-white/30 rounded-full transition-colors">
                 <ArrowUpRight className="w-4 h-4 absolute group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-300" />
                 <ArrowUpRight className="w-4 h-4 absolute -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ai.capabilities.map((cap, i) => (
            <CapabilityCard
              key={cap.title}
              title={cap.title}
              description={cap.description}
              index={i}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
