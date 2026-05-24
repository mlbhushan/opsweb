"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { useRef } from "react";

export function FinalCTA() {
  const { finalCTA } = HOME;
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative section overflow-hidden bg-slate-50 py-12 sm:py-16 border-t border-slate-200"
    >
      {/* Swiss Style Grid Background - Subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        />
        {/* Subtle radial gradient to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)]" />
      </div>

      {/* Moving Subtle Ambient Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply"
      />

      {/* Unique Watermark Logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-end z-0">
        <div className="relative w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] translate-x-[20%] md:translate-x-[30%] opacity-[0.03] grayscale">
          <Image src="/OpsFloIcon.png" alt="" fill className="object-contain animate-[spin_90s_linear_infinite]" />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto w-full">
          {/* Header Layout */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 md:mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="max-w-2xl text-left"
            >
              {/* Minimalist Top Indicator */}
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  Ready to Execute
                </span>
              </div>

              {/* Headline with Dual-Color Swiss Treatment */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                {/* @ts-ignore */}
                {finalCTA.headlineStart}{" "}
                <br className="hidden md:block" />
                <span className="text-[var(--color-green-500)]">{finalCTA.headlineHighlight}</span>{" "}
                {/* @ts-ignore */}
                {finalCTA.headlineEnd}
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="lg:max-w-md lg:pb-2 flex flex-col items-start lg:items-end text-left lg:text-right"
            >
              <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                {finalCTA.body}
              </p>

              {/* Swiss Style Buttons - Clean, Structured */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href={finalCTA.primaryCTA.href}
                  className="group inline-flex items-center text-left justify-between gap-3 text-sm font-bold tracking-[0.1em] text-white uppercase hover:text-[var(--color-navy-950)] transition-colors bg-[var(--color-navy-950)] border border-[var(--color-navy-950)] pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[var(--color-green-400)]"
                >
                  <span className="leading-snug">{finalCTA.primaryCTA.label}</span>
                  <span className="relative shrink-0 overflow-hidden w-8 h-8 flex items-center justify-center bg-white/20 group-hover:bg-white/30 rounded-full transition-colors">
                    <ArrowUpRight className="w-4 h-4 absolute group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-300" />
                    <ArrowUpRight className="w-4 h-4 absolute -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  href={finalCTA.secondaryCTA.href}
                  className="group inline-flex items-center text-left justify-between gap-3 text-sm font-bold tracking-[0.1em] text-white uppercase hover:text-[var(--color-navy-950)] transition-colors bg-[var(--color-navy-950)] border border-[var(--color-navy-950)] pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[var(--color-green-400)]"
                >
                  <span className="leading-snug">{finalCTA.secondaryCTA.label}</span>
                  <span className="relative shrink-0 overflow-hidden w-8 h-8 flex items-center justify-center bg-white/20 group-hover:bg-white/30 rounded-full transition-colors">
                    <ArrowUpRight className="w-4 h-4 absolute group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-300" />
                    <ArrowUpRight className="w-4 h-4 absolute -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
