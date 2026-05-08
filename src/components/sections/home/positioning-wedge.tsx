"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function PositioningWedge() {
  const { positioningWedge } = HOME;
  
  // Split headline for dual-tone effect assuming "Execution Layer" is the key phrase
  const headlineParts = positioningWedge.headline.split("Execution Layer");
  const hasSplit = headlineParts.length > 1;

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0F1C] overflow-hidden">
      {/* Moving Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft dark grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)"/>
        </svg>
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[40vw] max-w-[600px] h-[40vw] max-h-[600px] rounded-full bg-[var(--color-green-600)] blur-[120px] opacity-[0.08] mix-blend-screen"
          animate={{ 
            x: [0, 50, -30, 0], 
            y: [0, 40, 60, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[35vw] max-w-[500px] h-[35vw] max-h-[500px] rounded-full bg-blue-600 blur-[120px] opacity-[0.06] mix-blend-screen"
          animate={{ 
            x: [0, -40, 20, 0], 
            y: [0, -50, -20, 0],
            scale: [1, 0.95, 1.05, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Header Side */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[12px] font-mono font-bold tracking-widest text-[var(--color-green-400)] uppercase mb-6 border-l-2 border-[var(--color-green-500)] pl-4">
              {positioningWedge.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.05] mb-8">
              {hasSplit ? (
                <>
                  {headlineParts[0]}<br />
                  <span className="text-[var(--color-green-400)]">Execution Layer</span>
                  {headlineParts[1]}
                </>
              ) : (
                positioningWedge.headline
              )}
            </h2>
            <div className="h-px w-12 bg-[var(--color-green-500)] mb-8" />
            <p className="text-[17px] leading-relaxed text-[var(--color-navy-300)] max-w-md">
              While other systems focus on scheduling or finance, OpsFlo is the only layer explicitly designed to guarantee work gets completed, validated, and billed in the field.
            </p>
          </motion.div>

          {/* Layer Stack Side */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Visual connector line in the background */}
            <div className="absolute left-[24px] top-8 bottom-8 w-[2px] bg-[var(--color-navy-800)] z-0 hidden md:block" />
            
            <div className="space-y-4">
              {positioningWedge.layers.map((layer) => (
                <motion.div
                  key={layer.system}
                  variants={fadeUp}
                  className={cn(
                    "relative flex items-start md:items-center gap-5 md:gap-6 rounded-2xl p-6 transition-all duration-500 z-10 border overflow-hidden group backdrop-blur-sm",
                    layer.highlight
                      ? "bg-[var(--color-navy-900)] border-[var(--color-green-500)/40] shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)]"
                      : "bg-[var(--color-navy-950)/80] border-[var(--color-navy-800)] hover:bg-[var(--color-navy-900)/60] hover:border-[var(--color-navy-700)]"
                  )}
                >
                  {/* Subtle highlight gradient inside the highlighted card */}
                  {layer.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-green-500)/10] to-transparent pointer-events-none" />
                  )}

                  {/* Icon / System Identifier */}
                  <div
                    className={cn(
                      "flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full text-[14px] font-mono font-bold tracking-wider relative z-10 shadow-lg overflow-hidden",
                      layer.highlight
                        ? "bg-white text-[var(--color-navy-950)] shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]"
                        : "bg-[var(--color-navy-800)] text-[var(--color-navy-300)] border border-[var(--color-navy-700)] group-hover:bg-[var(--color-navy-700)] group-hover:text-white transition-colors"
                    )}
                  >
                    {layer.highlight ? (
                      <div className="relative w-8 h-8 -translate-y-0.5">
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
                  
                  {/* Content */}
                  <div className="flex-1 relative z-10 pt-1 md:pt-0">
                    <div className="flex items-center gap-3 mb-2">
                      <p
                        className={cn(
                          "text-[18px] font-bold tracking-tight",
                          layer.highlight
                            ? "text-white"
                            : "text-[var(--color-navy-100)]"
                        )}
                      >
                        {layer.role}
                      </p>
                      {layer.highlight && (
                        <span className="hidden sm:inline-flex items-center rounded-full bg-[var(--color-green-400)/10] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--color-green-400)] border border-[var(--color-green-400)/30]">
                          The Missing Link
                        </span>
                      )}
                    </div>
                    <p className={cn(
                      "text-[15px] leading-relaxed",
                      layer.highlight ? "text-[var(--color-navy-200)]" : "text-[var(--color-navy-400)] group-hover:text-[var(--color-navy-300)] transition-colors"
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
