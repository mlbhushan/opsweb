"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Users, FileText } from "lucide-react";

interface WhoAreWeProps {
  bodyText: React.ReactNode;
}

export function WhoAreWe({ bodyText }: WhoAreWeProps) {
  return (
    <div className="pt-20 border-t border-[var(--color-gray-200)] relative">
      <motion.div 
        className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Left Column: Story & Image */}
        <div className="lg:col-span-7 flex flex-col h-full justify-between gap-10">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-gray-200)] bg-white px-4 py-1.5 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-[var(--color-navy-950)] uppercase">Who Are We?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-[1.1] mb-6">
              Built by operators, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-green-500)] to-[var(--color-green-700)]">for the frontlines.</span>
            </h2>
            
            <div className="text-lg leading-relaxed text-[var(--color-gray-600)] max-w-2xl">
              <p>{bodyText}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-navy-900)]/10 mt-auto">
            <Image
              src="/images/about/field_operator_main_wide.png"
              alt="OpsFlo field operations"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/40 to-transparent mix-blend-multiply" />
          </motion.div>
        </div>

        {/* Right Column: Premium Stats & Trust */}
        <div className="lg:col-span-5 flex flex-col h-full justify-between gap-6">
          <motion.div 
            variants={fadeUp}
            className="bg-white rounded-[24px] p-8 md:p-10 border border-[var(--color-gray-200)] shadow-xl shadow-[var(--color-navy-900)]/5 relative overflow-hidden group hover:border-[var(--color-green-500)] transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-10">
              <FileText className="w-32 h-32 text-[var(--color-green-500)]" />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-bold text-[var(--color-green-600)] uppercase tracking-wider mb-2">Scale of Operations</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-6xl md:text-7xl font-extrabold tracking-tighter text-[var(--color-navy-950)]">2M</span>
                <span className="text-4xl font-bold text-[var(--color-green-500)]">+</span>
              </div>
              <p className="text-lg font-medium text-[var(--color-navy-800)]">Field Tickets Processed</p>
              <p className="text-sm text-[var(--color-gray-500)] mt-2 leading-relaxed">Millions of data points securely managed and transformed into actionable insights.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="bg-[var(--color-gray-50)] rounded-[24px] p-8 border border-[var(--color-gray-200)] flex flex-col gap-6 shadow-sm group hover:border-[var(--color-green-500)] transition-colors duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-[var(--color-gray-200)] group-hover:border-[var(--color-green-300)] transition-colors duration-500">
                <Users className="w-6 h-6 text-[var(--color-navy-700)] group-hover:text-[var(--color-green-600)] transition-colors duration-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--color-navy-950)]">Trusted by Operators</h4>
                <p className="text-sm text-[var(--color-gray-500)]">Hundreds of skilled professionals</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-gray-200)]">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[var(--color-gray-50)] bg-[var(--color-gray-200)] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:z-10">
                    <Image
                      src={`/images/about/operator_avatar_${i}.png`}
                      alt={`Operator ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-[var(--color-navy-600)]">
                Join the frontline revolution
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
