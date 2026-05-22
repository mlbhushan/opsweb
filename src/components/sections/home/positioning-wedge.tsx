"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function PositioningWedge() {
  const { positioningWedge } = HOME;

  return (
    <section className="relative py-20 md:py-24 bg-[var(--color-navy-950)] overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dark-wedge" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark-wedge)" />
        </svg>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-green-500)]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-navy-700)]/20 blur-[100px] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text & Positioning */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-green-500)]/30 bg-[var(--color-green-500)]/10 px-4 py-2 mb-8 self-start shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-green-400)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-green-500)]"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-[var(--color-green-400)] uppercase">
                {positioningWedge.eyebrow}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              The Missing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-green-400)] to-[var(--color-green-600)] drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                Execution Layer
              </span>
            </h2>
            
            <p className="text-[17px] leading-relaxed text-[var(--color-navy-200)] max-w-md">
              ERPs handle finance. CRMs handle sales. But who handles the actual work? <strong className="text-white font-semibold">OpsFlo is the missing connective tissue</strong> that guarantees complex field operations are executed flawlessly and billed instantly.
            </p>
          </motion.div>

          {/* Right Column: Animated Layer Stack */}
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* The Animated Connecting Track (Centered Behind Cards) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[var(--color-navy-800)] z-0 overflow-hidden">
              <motion.div 
                className="w-full h-32 bg-gradient-to-b from-transparent via-[var(--color-green-400)] to-transparent"
                animate={{
                  y: ["-100%", "400%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <div className="space-y-3 relative z-10">
              {positioningWedge.layers.map((layer) => (
                <motion.div
                  key={layer.system}
                  variants={fadeUp}
                  className={cn(
                    "relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-5 rounded-[16px] p-4 transition-all duration-500 group overflow-hidden",
                    layer.highlight
                      ? "bg-[var(--color-navy-900)] border border-[var(--color-green-500)]/50 shadow-[0_10px_40px_-10px_rgba(34,197,94,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_rgba(34,197,94,0.4)] cursor-default"
                      : "bg-[var(--color-navy-900)]/90 border border-[var(--color-navy-800)] backdrop-blur-md"
                  )}
                >
                  {/* Internal Glow for OpsFlo */}
                  {layer.highlight && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[var(--color-green-500)]/5 to-transparent pointer-events-none"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}

                  {/* Animated Execution Data Particles (Only for OpsFlo) */}
                  {layer.highlight && (
                    <div className="absolute right-0 top-0 bottom-0 w-32 overflow-hidden pointer-events-none opacity-40">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className="absolute w-6 h-1.5 rounded-full bg-[var(--color-green-400)] blur-[1px]"
                          initial={{ x: 100, y: 10 + i * 15, opacity: 0 }}
                          animate={{ x: -150, opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Icon Block */}
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] text-[13px] font-mono font-bold tracking-wider relative z-10 transition-transform duration-500",
                      layer.highlight
                        ? "bg-white text-[var(--color-navy-950)] shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110"
                        : "bg-[var(--color-navy-950)] text-[var(--color-navy-400)] border border-[var(--color-navy-800)] group-hover:border-[var(--color-navy-600)]"
                    )}
                  >
                    {layer.highlight ? (
                      <div className="relative w-8 h-8">
                        <Image
                          src="/OpsFloIcon.png"
                          alt="OpsFlo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    ) : (
                      layer.system
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 relative z-10 flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-1">
                      <p
                        className={cn(
                          "text-[17px] sm:text-[18px] font-bold tracking-tight leading-tight",
                          layer.highlight ? "text-white" : "text-[var(--color-navy-100)]"
                        )}
                      >
                        {layer.role}
                      </p>
                      {layer.highlight && (
                        <span className="inline-flex items-center rounded-md bg-[var(--color-green-400)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-green-400)] border border-[var(--color-green-400)]/20 shadow-sm leading-none self-center sm:self-auto">
                          OpsFlo
                        </span>
                      )}
                    </div>
                    <p className={cn(
                      "text-[14.5px] sm:text-[15px] leading-snug",
                      layer.highlight ? "text-[var(--color-green-50)]" : "text-[var(--color-navy-300)]"
                    )}>
                      {layer.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
