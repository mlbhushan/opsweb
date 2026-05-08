"use client";

import { motion } from "framer-motion";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function CoreWorkflow() {
  const { coreWorkflow } = HOME;

  // Split headline for dual color
  // "Zero Data Loss. Maximum Velocity." -> "Zero Data Loss." and "Maximum Velocity."
  const firstPeriodIndex = coreWorkflow.headline.indexOf(".");
  const firstPart = firstPeriodIndex !== -1 
    ? coreWorkflow.headline.substring(0, firstPeriodIndex + 1)
    : coreWorkflow.headline;
  const secondPart = firstPeriodIndex !== -1 
    ? coreWorkflow.headline.substring(firstPeriodIndex + 1).trim()
    : "";

  return (
    <section className="section bg-[var(--color-navy-900)] text-white relative overflow-hidden py-16 md:py-24">
      {/* Subtle background grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-green-500)]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-green-500)]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Corner Brackets for structural tech aesthetic */}
      <div className="absolute left-6 top-6 w-8 h-8 border-l border-t border-[var(--color-green-500)]/20 pointer-events-none hidden md:block" />
      <div className="absolute right-6 top-6 w-8 h-8 border-r border-t border-[var(--color-green-500)]/20 pointer-events-none hidden md:block" />
      <div className="absolute left-6 bottom-6 w-8 h-8 border-l border-b border-[var(--color-green-500)]/20 pointer-events-none hidden md:block" />
      <div className="absolute right-6 bottom-6 w-8 h-8 border-r border-b border-[var(--color-green-500)]/20 pointer-events-none hidden md:block" />

      {/* Vertical subtle scanning line across the background */}
      <motion.div 
        className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-green-500)]/10 to-transparent pointer-events-none hidden lg:block"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-green-500)]/30 bg-[var(--color-green-500)]/10 px-3 py-1 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] shadow-[0_0_8px_var(--color-green-500)]" />
                  <span className="text-xs font-semibold tracking-wider text-[var(--color-green-400)] uppercase">
                    {coreWorkflow.eyebrow}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                  {firstPart}
                  {secondPart && (
                    <>
                      <br />
                      <span className="text-[var(--color-green-500)]">
                        {secondPart}
                      </span>
                    </>
                  )}
                </h2>
              </motion.div>
            </div>
            
            <motion.div 
              className="max-w-sm pb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-base md:text-lg font-light text-[var(--color-gray-300)] leading-relaxed">
                OpsFlo creates a single source of truth across your entire operation, eliminating the manual handoffs that lead to lost revenue.
              </p>
            </motion.div>
          </div>

          {/* Horizontal Steps Timeline */}
          <div className="relative mt-4">
            {/* Horizontal Connector Line (Desktop) */}
            <div className="absolute left-6 right-6 top-[24px] h-px bg-white/10 hidden lg:block overflow-hidden">
              {/* Energy pulse across the timeline */}
              <motion.div 
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[var(--color-green-500)]/50 to-transparent"
                animate={{ left: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {coreWorkflow.steps.map((step, index) => (
                <motion.div 
                  key={step.number} 
                  variants={fadeUp}
                  className="group relative flex flex-row lg:flex-col items-start gap-5 lg:gap-6"
                >
                  {/* Node / Number Box */}
                  <div className="flex shrink-0 relative">
                    <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[var(--color-navy-900)] text-[var(--color-green-400)] font-mono text-lg font-light transition-all duration-300 group-hover:border-[var(--color-green-500)] group-hover:text-[var(--color-navy-950)] group-hover:bg-[var(--color-green-500)] relative z-10">
                      {step.number}
                    </div>
                    {/* Vertical Connector Line (Mobile/Tablet) */}
                    {index !== coreWorkflow.steps.length - 1 && (
                      <div className="absolute left-[23px] top-12 bottom-[-2rem] w-px bg-white/10 lg:hidden overflow-hidden">
                        <motion.div 
                          className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-[var(--color-green-500)]/50 to-transparent"
                          animate={{ top: ["-20%", "120%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col pt-1 lg:pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                        {step.label}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-[var(--color-green-500)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <p className="text-[var(--color-gray-400)] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
