"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Shield, Zap, TrendingUp, Compass, Hexagon, Anchor, Hammer, Power, ArrowUpRight } from "lucide-react";

const ExecutionVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6 relative">
    <div className="relative w-24 h-24 flex items-center justify-center">
      <motion.svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-navy-800)" strokeWidth="8" />
        <motion.circle
          cx="50" cy="50" r="46" fill="none" stroke="var(--color-green-500)" strokeWidth="8" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.svg>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="w-12 h-12 bg-[var(--color-green-500)] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
      >
        <Zap className="w-6 h-6 text-white" fill="white" />
      </motion.div>
    </div>
  </div>
);

const FrontlinesVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6 relative">
    <div className="relative flex items-center justify-center w-full max-w-[160px] h-24">
      {/* Harsh environment waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-[2px] bg-[var(--color-navy-800)] rounded-full"
          style={{ top: `${20 + i * 15}%` }}
          initial={{ scaleX: 0.2, opacity: 0.3 }}
          whileInView={{ scaleX: Math.random() * 0.5 + 0.5, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
        />
      ))}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="z-10 bg-[var(--color-navy-900)] border-2 border-[var(--color-navy-700)] shadow-2xl p-4 rounded-xl flex items-center gap-3 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-green-500)]/10 to-transparent" />
        <Shield className="w-8 h-8 text-[var(--color-green-500)]" />
        <div className="flex flex-col gap-1.5">
          <div className="w-12 h-1.5 bg-[var(--color-navy-700)] rounded-full" />
          <div className="w-8 h-1.5 bg-[var(--color-green-600)] rounded-full" />
        </div>
      </motion.div>
    </div>
  </div>
);

const MarginsVisual = () => (
  <div className="w-full h-full flex items-end justify-center p-6 relative gap-2">
    {[30, 50, 40, 80, 100].map((height, i) => (
      <motion.div
        key={i}
        className={`w-5 md:w-6 rounded-t-md relative overflow-hidden ${i === 4 ? 'bg-[var(--color-green-500)] shadow-[0_-5px_20px_rgba(34,197,94,0.3)]' : 'bg-[var(--color-navy-800)]'}`}
        initial={{ height: 0 }}
        whileInView={{ height: `${height}%` }}
        transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
      >
        {i === 4 && (
          <motion.div 
            className="absolute inset-0 bg-white/20"
            animate={{ y: ["100%", "-100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>
    ))}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring" }}
      className="absolute top-8 right-12 bg-[var(--color-navy-900)] border border-[var(--color-green-500)] rounded-lg p-2 flex items-center gap-2 shadow-lg"
    >
      <TrendingUp className="w-4 h-4 text-[var(--color-green-500)]" />
      <span className="text-xs font-bold text-white tracking-widest">+100%</span>
    </motion.div>
  </div>
);

const FieldGuidedVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6 relative">
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Connecting nodes */}
      {[0, 72, 144, 216, 288].map((rot, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-1 flex items-center"
          style={{ rotate: `${rot}deg` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <motion.div 
            className="w-1/2 h-[1px] bg-[var(--color-navy-700)] origin-right"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          />
          <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
             className={`w-3 h-3 rounded-full absolute left-0 ${i === 0 ? 'bg-[var(--color-green-500)] shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-[var(--color-navy-600)]'}`}
           />
        </motion.div>
      ))}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="w-9 h-9 bg-[var(--color-navy-950)] border-2 border-[var(--color-green-500)] rounded-xl flex items-center justify-center z-10 rotate-45 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
      >
        <Compass className="w-4 h-4 text-[var(--color-green-500)] -rotate-45" />
      </motion.div>
    </div>
  </div>
);

// Map definitions to components
const valuesData = [
  {
    title: "Execution Over Aspiration",
    description: "Promises don't haul fluid or service wells. Execution does. We trade empty corporate speak for relentless reliability. When your crew needs our system to work, it works. No excuses.",
    visual: <ExecutionVisual />
  },
  {
    title: "Built for the Frontlines",
    description: "We respect the gritty reality of the oilfield. If software can't survive dead zones, harsh environments, and grueling shifts, it doesn't belong in your operators' hands. We build tools for the dirt, not the desk.",
    visual: <FrontlinesVisual />
  },
  {
    title: "Defending Your Margins",
    description: "Every drop of sweat your team expends should translate to a paid invoice. We build systems that catch missed tickets, eliminate leakage, and ensure you never leave hard-earned revenue on the table.",
    visual: <MarginsVisual />
  },
  {
    title: "Guided by the Field",
    description: "Our roadmap isn't written in a boardroom. It's built alongside the people wearing hard hats. We listen to your dispatchers and your drivers, adapting our software to solve the exact bottlenecks holding your business back.",
    visual: <FieldGuidedVisual />
  }
];

export function CoreBeliefs() {
  return (
    <section className="bg-[var(--color-navy-950)] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Refined subtle background textures */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>
        
        {/* Animated Glows */}
        <motion.div 
          className="absolute right-0 top-0 h-[800px] w-[800px] bg-gradient-to-bl from-[var(--color-green-500)]/20 to-transparent blur-[120px] rounded-full mix-blend-screen"
          animate={{
            x: ["33%", "25%", "33%"],
            y: ["-33%", "-20%", "-33%"],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute left-0 bottom-0 h-[600px] w-[600px] bg-gradient-to-tr from-[var(--color-navy-800)]/60 to-transparent blur-[100px] rounded-full mix-blend-screen"
          animate={{
            x: ["-50%", "-40%", "-50%"],
            y: ["33%", "20%", "33%"],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => {
          // Deterministic values for hydration safety
          const w = Math.abs(Math.sin(i * 12.5)) * 4 + 1;
          const h = Math.abs(Math.cos(i * 8.3)) * 4 + 1;
          const l = Math.abs(Math.sin(i * 3.1)) * 100;
          const t = Math.abs(Math.cos(i * 7.4)) * 100;
          const yMax = -100 - (Math.abs(Math.sin(i * 4.2)) * 100);
          const xMax = (Math.cos(i * 5.5) * 50);
          const dur = Math.abs(Math.sin(i * 2.2)) * 10 + 10;
          const del = Math.abs(Math.cos(i * 9.1)) * 10;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[var(--color-green-500)]"
              style={{
                width: w + "px",
                height: h + "px",
                left: l + "%",
                top: t + "%",
              }}
              animate={{
                y: [0, yMax],
                x: [0, xMax],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: dur,
                repeat: Infinity,
                delay: del,
                ease: "linear",
              }}
            />
          );
        })}
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}
              className="inline-flex items-center gap-3 rounded-full border border-slate-700/50 bg-[var(--color-navy-900)]/50 backdrop-blur-sm px-4 py-1.5 mb-8 shadow-sm self-start"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">Strategic Pillars</span>
            </motion.div>
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] text-balance"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-green-400)] to-[var(--color-green-600)] drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">Core Beliefs</span>
            </motion.h2>
          </div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}
            className="max-w-md pb-2"
          >
            <p className="text-lg md:text-xl font-light text-[var(--color-gray-300)] leading-relaxed">
              We are driven by principles forged in the field, not the boardroom. Zero compromises. Zero excuses. Just a relentless focus on protecting your revenue and empowering your crew.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {valuesData.map((value, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="group relative flex flex-col bg-[#0f1b2d] border border-[var(--color-navy-800)] hover:border-[var(--color-green-500)] hover:shadow-[0_8px_30px_-5px_rgba(34,197,94,0.15)] transition-all duration-500 rounded-2xl overflow-hidden"
            >
              {/* Modern Visual Demo Area */}
              <div className="h-32 bg-[#0b1423] relative flex items-center justify-center border-b border-[var(--color-navy-800)] overflow-hidden">
                {/* Subtle background matrix */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-green-500)_1px,_transparent_1px)] bg-[size:16px_16px]" />
                {value.visual}
              </div>

              {/* Text Area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[var(--color-green-400)] transition-colors duration-300 leading-tight">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm md:text-sm lg:text-[15px] text-[var(--color-gray-400)] font-light leading-relaxed group-hover:text-[var(--color-gray-300)] transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}