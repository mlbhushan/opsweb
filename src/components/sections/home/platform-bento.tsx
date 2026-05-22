"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

/* ─── Animated Illustrations ─────────────────────────────────────────── */

function PlanIllustration() {
  return (
    <div className="w-full h-full relative flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-700 ease-out">
      <div className="w-full max-w-[240px] h-[120px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
         {/* Subtle Grid */}
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-green-400) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
         
         <div className="absolute left-6 top-5 right-6 bottom-5 flex flex-col justify-between">
           <motion.div className="h-2.5 bg-white/20 rounded-full w-[80%]" 
             initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewportOnce} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "left" }} />
           
           <motion.div className="h-2.5 bg-[var(--color-green-400)] rounded-full w-[60%] ml-[15%] shadow-[0_0_12px_var(--color-green-400)]" 
             initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "left" }} />
           
           <motion.div className="h-2.5 bg-white/20 rounded-full w-[40%] ml-[45%]" 
             initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "left" }} />

           <motion.div className="h-2.5 bg-[var(--color-green-400)]/40 rounded-full w-[30%] ml-[65%]" 
             initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "left" }} />
         </div>
      </div>
    </div>
  );
}

function ExecuteIllustration() {
  return (
    <div className="w-full h-full relative flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-700 ease-out">
      <div className="w-full max-w-[240px] h-[120px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
         <div className="absolute left-6 top-5 right-6 flex flex-col gap-4">
            {/* Task 1 */}
            <div className="flex items-center gap-4">
              <motion.div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0"
                initial={{ backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.3)" }}
                whileInView={{ backgroundColor: "var(--color-green-400)", borderColor: "var(--color-green-400)" }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <motion.svg viewBox="0 0 24 24" className="w-3 h-3 text-[var(--color-navy-950)]" fill="none" stroke="currentColor" strokeWidth={4}
                  initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={viewportOnce} transition={{ duration: 0.3, delay: 0.7 }}
                ><path d="M20 6L9 17l-5-5" /></motion.svg>
              </motion.div>
              <div className="h-2 bg-white/20 rounded-full flex-1" />
            </div>
            
            {/* Task 2 */}
            <div className="flex items-center gap-4">
              <motion.div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0"
                initial={{ backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.3)" }}
                whileInView={{ backgroundColor: "var(--color-green-400)", borderColor: "var(--color-green-400)" }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <motion.svg viewBox="0 0 24 24" className="w-3 h-3 text-[var(--color-navy-950)]" fill="none" stroke="currentColor" strokeWidth={4}
                  initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={viewportOnce} transition={{ duration: 0.3, delay: 1.4 }}
                ><path d="M20 6L9 17l-5-5" /></motion.svg>
              </motion.div>
              <div className="h-2 bg-white/20 rounded-full w-[70%]" />
            </div>

            {/* Task 3 */}
            <div className="flex items-center gap-4 opacity-40">
              <div className="w-5 h-5 rounded-full border-2 border-white/30 shrink-0" />
              <div className="h-2 bg-white/20 rounded-full w-[40%]" />
            </div>
         </div>
      </div>
    </div>
  );
}

function ReportIllustration() {
  return (
    <div className="w-full h-full relative flex items-end justify-center group-hover:-translate-y-2 transition-transform duration-700 ease-out px-8 pb-4">
      <div className="w-full max-w-[240px] h-[100px] flex items-end gap-2.5 relative">
         <div className="absolute inset-0 border-b border-white/10" />
         {[40, 55, 35, 80, 100].map((height, i) => (
           <motion.div 
             key={i} 
             className={cn(
               "flex-1 rounded-t-md w-full relative z-10",
               i === 4 ? "bg-[var(--color-green-400)] shadow-[0_0_15px_var(--color-green-400)]" : "bg-white/20"
             )}
             initial={{ height: 0 }}
             whileInView={{ height: `${height}%` }}
             viewport={viewportOnce}
             transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
           >
             {i === 4 && (
               <motion.div 
                 className="w-full h-full bg-white/30 rounded-t-md"
                 animate={{ opacity: [0, 0.5, 0] }}
                 transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
               />
             )}
           </motion.div>
         ))}
      </div>
    </div>
  );
}

/* ─── Workflow Column Data ─────────────────────────────────────────── */

const WORKFLOW_COLUMNS = [
  {
    number: "01",
    title: "Plan & Route",
    items: [
      "Allocate field resources dynamically",
      "Create complex Job Orders instantly",
      "Dispatch crews based on proximity"
    ],
    Illustration: PlanIllustration,
    bgImage: "/images/workflow/planning.png",
  },
  {
    number: "02",
    title: "Execute Work",
    items: [
      "Capture mobile field tickets offline",
      "Track job progress in real-time",
      "Enforce mandatory compliance checks"
    ],
    Illustration: ExecuteIllustration,
    bgImage: "/images/workflow/execute.png",
  },
  {
    number: "03",
    title: "Bill & Report",
    items: [
      "Auto-generate accurate invoices",
      "Eliminate manual revenue leakage",
      "Surface predictive asset health"
    ],
    Illustration: ReportIllustration,
    bgImage: "/images/workflow/report.png",
  },
];

/* ─── Component ────────────────────────────────────────────────────── */

export function PlatformBento() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-navy-200)] to-transparent" />
      
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--color-green-500)]" />
              <span className="text-[12px] font-mono font-bold tracking-widest text-[var(--color-green-500)] uppercase">
                End-to-End Execution
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-[var(--color-navy-950)] leading-[1.05]">
              Unified workflow. <br className="hidden md:block" />
              <span className="text-[var(--color-navy-500)]">From field to finance.</span>
            </h2>
          </div>

          <div className="max-w-md pb-2">
            <div className="h-px w-12 bg-[var(--color-navy-200)] mb-6 hidden lg:block" />
            <p className="text-[16px] md:text-[17px] text-[var(--color-navy-600)] leading-relaxed font-normal text-balance">
              OpsFlo eliminates the chaos between field capture and back-office billing. One unified workflow that ensures every job is tracked, validated, and instantly invoiced.
            </p>
          </div>
        </motion.div>

        {/* Modern AI-Style Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {WORKFLOW_COLUMNS.map((col) => {
            const Illustration = col.Illustration;
            return (
              <motion.div
                key={col.title}
                variants={fadeUp}
                className="flex flex-col bg-[var(--color-navy-950)] border border-[var(--color-navy-800)] hover:border-[var(--color-green-500)] hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] hover:-translate-y-1 transition-all duration-500 rounded-[24px] overflow-hidden group relative"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[24px]">
                  <Image 
                    src={col.bgImage} 
                    alt={col.title} 
                    fill 
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out" 
                  />
                  {/* Gradient Fade - Fades image at the bottom where animated elements are */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-950)]/10 via-[var(--color-navy-950)]/60 to-[var(--color-navy-950)]" />
                </div>

                {/* Ambient Internal Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-green-500)]/10 rounded-full blur-[80px] group-hover:bg-[var(--color-green-500)]/20 transition-colors duration-500 pointer-events-none z-10" />

                {/* Text Area (Top) */}
                <div className="p-8 pb-4 relative z-20 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[13px] tracking-wider font-bold text-[var(--color-green-400)] bg-[var(--color-green-400)]/10 px-2.5 py-1 rounded-md">{col.number}</span>
                    <h3 className="text-[22px] font-bold text-white leading-tight">
                      {col.title}
                    </h3>
                  </div>
                  
                  {/* Checklist Items */}
                  <ul className="flex flex-col gap-3.5">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] text-white/70 leading-snug group-hover:text-white/90 transition-colors"
                      >
                        <Check className="w-4 h-4 text-[var(--color-green-400)] shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration Area (Bottom, integrated) */}
                <div className="mt-8 h-40 relative z-10">
                  <Illustration />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
