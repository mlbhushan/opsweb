"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            {/* Minimalist Top Indicator */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 rounded-full bg-slate-300"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                Ready to Execute
              </span>
              <span className="h-[2px] w-12 rounded-full bg-slate-300"></span>
            </div>

            {/* Headline with Dual-Color Swiss Treatment */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05]">
              {/* @ts-ignore */}
              {finalCTA.headlineStart}{" "}
              {/* @ts-ignore */}
              <span className="text-blue-600 font-semibold">{finalCTA.headlineHighlight}</span>{" "}
              {/* @ts-ignore */}
              {finalCTA.headlineEnd}
            </h2>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              {finalCTA.body}
            </p>

            {/* Swiss Style Buttons - Clean, Structured */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href={finalCTA.primaryCTA.href}
                className="group relative inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 px-6 font-semibold text-white transition-all duration-300 hover:bg-blue-600 shadow-xl shadow-slate-900/10 hover:shadow-blue-600/20"
              >
                <span className="relative z-10 text-sm tracking-wide">{finalCTA.primaryCTA.label}</span>
                <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href={finalCTA.secondaryCTA.href}
                className="group inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/50 backdrop-blur-md px-6 font-semibold text-slate-900 transition-all duration-300 hover:border-slate-400 hover:bg-white hover:shadow-sm"
              >
                <span className="text-sm tracking-wide">{finalCTA.secondaryCTA.label}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
