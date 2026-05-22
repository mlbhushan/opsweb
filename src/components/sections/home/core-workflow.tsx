"use client";

import { motion } from "framer-motion";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Custom Animated SVG Icons ---

function AnimatedCapture() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <motion.rect x="3" y="3" width="18" height="18" rx="2" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line x1="3" y1="12" x2="21" y2="12"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        stroke="var(--color-green-400)"
      />
    </svg>
  );
}

function AnimatedDetect() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <motion.path d="M3 12h4l3 -9 5 18 3 -9h3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        stroke="var(--color-green-400)"
      />
      <motion.circle cx="12" cy="12" r="9" 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
    </svg>
  );
}

function AnimatedDispatch() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <motion.path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        initial={{ pathLength: 0, strokeDasharray: "0 1" }}
        animate={{ pathLength: 1, strokeDasharray: "1 0" }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        stroke="var(--color-green-400)"
      />
      <motion.path d="M11 13L2 22"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}

function AnimatedExecute() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '12px 12px' }}
      >
        <circle cx="12" cy="12" r="3" stroke="var(--color-green-400)" />
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </motion.g>
    </svg>
  );
}

function AnimatedInvoice() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <motion.line x1="8" y1="8" x2="16" y2="8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }} stroke="var(--color-green-400)" />
      <motion.line x1="8" y1="12" x2="16" y2="12"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, delay: 0.3 }} stroke="var(--color-green-400)" />
      <motion.line x1="8" y1="16" x2="12" y2="16"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, delay: 0.6 }} stroke="var(--color-green-400)" />
    </svg>
  );
}

const animatedIconsMap = [AnimatedCapture, AnimatedDetect, AnimatedDispatch, AnimatedExecute, AnimatedInvoice];

export function CoreWorkflow() {
  const { coreWorkflow } = HOME;

  // Split headline for dual color
  const firstPeriodIndex = coreWorkflow.headline.indexOf(".");
  const firstPart = firstPeriodIndex !== -1
    ? coreWorkflow.headline.substring(0, firstPeriodIndex + 1)
    : coreWorkflow.headline;
  const secondPart = firstPeriodIndex !== -1
    ? coreWorkflow.headline.substring(firstPeriodIndex + 1).trim()
    : "";

  return (
    <section className="section bg-[var(--color-navy-950)] text-white relative overflow-hidden py-24 md:py-32">
      {/* Swiss Background Subtleties */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft precision grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-swiss" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="#ffffff" strokeWidth="1" />
              <path d="M40 0L40 40" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-swiss)" />
        </svg>

        {/* Ambient Glows */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[var(--color-green-500)] rounded-full blur-[140px] opacity-[0.06] mix-blend-screen"
          animate={{ x: [0, 20, -10, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-16 md:gap-24">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-green-500)] shadow-[0_0_8px_var(--color-green-500)]" />
                  <span className="text-[12px] font-mono font-bold tracking-widest text-[var(--color-green-400)] uppercase">
                    {coreWorkflow.eyebrow}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium tracking-tight text-white leading-[1.05]">
                  {firstPart}
                  {secondPart && (
                    <>
                      <br />
                      <span className="text-[var(--color-green-400)]">
                        {secondPart}
                      </span>
                    </>
                  )}
                </h2>
              </motion.div>
            </div>

            <motion.div
              className="max-w-sm pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="h-px w-12 bg-white/20 mb-6 hidden md:block" />
              <p className="text-[16px] md:text-[17px] text-[var(--color-navy-200)] leading-relaxed font-light text-balance">
                OpsFlo creates a single source of truth across your entire operation, eliminating the manual handoffs that lead to lost revenue.
              </p>
            </motion.div>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 gap-x-6 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {coreWorkflow.steps.map((step, index) => {
                const IconComponent = animatedIconsMap[index % animatedIconsMap.length];
                
                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    className="group relative flex flex-row lg:flex-col items-start gap-5 lg:gap-6"
                  >
                    {/* Horizontal Connector Line (Desktop) - 32px is the exact center of the 64px box */}
                    {index !== coreWorkflow.steps.length - 1 && (
                      <div className="absolute left-[32px] top-[32px] w-[calc(100%+24px)] h-px bg-white/10 hidden lg:block z-0 overflow-hidden">
                        <motion.div
                          className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[var(--color-green-500)] to-transparent"
                          animate={{ left: ["-50%", "150%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                        />
                      </div>
                    )}

                    {/* Vertical Connector Line (Mobile/Tablet) */}
                    {index !== coreWorkflow.steps.length - 1 && (
                      <div className="absolute left-[32px] top-[32px] w-px h-[calc(100%+40px)] bg-white/10 lg:hidden z-0 overflow-hidden">
                        <motion.div
                          className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[var(--color-green-500)] to-transparent"
                          animate={{ top: ["-50%", "150%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                        />
                      </div>
                    )}

                    {/* Swiss Geometric Node Box */}
                    <div className="flex shrink-0 relative z-10">
                      <div className="flex h-16 w-16 items-center justify-center bg-[var(--color-navy-950)] border border-[var(--color-navy-800)] text-[var(--color-navy-300)] transition-all duration-500 group-hover:border-[var(--color-green-500)] group-hover:bg-[var(--color-green-500)/5] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                        <div className="w-7 h-7">
                          <IconComponent />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col pt-1 lg:pt-0 relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-[18px] font-semibold text-white tracking-wide group-hover:text-[var(--color-green-400)] transition-colors duration-300">
                          {step.label}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-[var(--color-green-400)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                      <p className="text-[var(--color-navy-300)] text-[14px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
