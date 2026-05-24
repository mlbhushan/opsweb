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
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.95, 1] }}
      />
      <motion.line x1="3" y1="12" x2="21" y2="12"
        animate={{ y: [-6, 6, -6, -6, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.075, 0.15, 0.95, 1] }}
        stroke="var(--color-green-400)"
      />
    </svg>
  );
}

function AnimatedDetect() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <motion.path d="M3 12h4l3 -9 5 18 3 -9h3"
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.95, 1] }}
        stroke="var(--color-green-400)"
      />
      <motion.circle cx="12" cy="12" r="9" 
        animate={{ scale: [0.8, 1, 1, 0.8], opacity: [0, 0.2, 0.2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeOut", times: [0, 0.2, 0.95, 1] }}
      />
    </svg>
  );
}

function AnimatedDispatch() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <motion.path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.95, 1] }}
        stroke="var(--color-green-400)"
      />
      <motion.path d="M11 13L2 22"
        animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.05, 0.2, 0.95, 1] }}
      />
    </svg>
  );
}

function AnimatedExecute() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <motion.g
        animate={{ rotate: [0, 360, 360, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.95, 1] }}
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
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }} 
        transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.95, 1] }} stroke="var(--color-green-400)" />
      <motion.line x1="8" y1="12" x2="16" y2="12"
        animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }} 
        transition={{ duration: 8, repeat: Infinity, times: [0, 0.05, 0.15, 0.95, 1] }} stroke="var(--color-green-400)" />
      <motion.line x1="8" y1="16" x2="12" y2="16"
        animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }} 
        transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.2, 0.95, 1] }} stroke="var(--color-green-400)" />
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
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-[var(--color-navy-900)] px-4 py-1.5 mb-6 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                    {coreWorkflow.eyebrow}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                  {firstPart}
                  {secondPart && (
                    <>
                      <br className="hidden md:block" />
                      <span className="text-[var(--color-green-500)]">
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
                    className="group relative flex flex-col items-center gap-5 lg:gap-6 text-center"
                  >
                    {/* Horizontal Connector Line (Desktop) - 32px is the exact center of the 64px box */}
                    {index !== coreWorkflow.steps.length - 1 && (
                      <div className="absolute left-[50%] top-[32px] w-full h-px bg-white/10 hidden lg:block z-0 overflow-hidden">
                        <motion.div
                          className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[var(--color-green-500)] to-transparent"
                          animate={{ left: ["-50%", "150%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                        />
                      </div>
                    )}

                    {/* Vertical Connector Line (Mobile/Tablet) */}
                    {index !== coreWorkflow.steps.length - 1 && (
                      <div className="absolute left-[50%] top-[64px] w-px h-[calc(100%+40px)] bg-white/10 lg:hidden z-0 overflow-hidden -translate-x-1/2">
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
                    <div className="flex flex-col relative z-10 items-center">
                      <div className="relative flex items-center justify-center mb-2">
                        <h3 className="text-[18px] font-semibold text-white tracking-wide group-hover:text-[var(--color-green-400)] transition-colors duration-300">
                          {step.label}
                        </h3>
                      </div>
                      <p className="text-[var(--color-navy-300)] text-[14px] leading-relaxed text-balance">
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
