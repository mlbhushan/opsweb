"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { useRef, useEffect, useState } from "react";

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've reached the end, scroll back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by one card width approximately
          scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-[var(--color-gray-50)] py-20 md:py-24 border-t border-[var(--color-gray-200)] relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-4 py-1.5 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)]" />
              <span className="text-xs font-semibold tracking-wider text-[var(--color-navy-950)] uppercase">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-[1.1]">
              Field proven.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-navy-500)] to-[var(--color-navy-800)]">Revenue driven.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:max-w-sm lg:pb-2 flex flex-col md:flex-row lg:flex-col justify-between md:items-end lg:items-start gap-6"
          >
            <p className="text-[17px] text-[var(--color-gray-600)] leading-relaxed">
              See how industry leaders use OpsFlo to eliminate revenue leakage, reduce downtime, and enforce field compliance.
            </p>
            
            {/* Carousel Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scroll("left")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[var(--color-gray-200)] text-[var(--color-navy-950)] shadow-sm hover:shadow-md hover:border-[var(--color-navy-300)] transition-all"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[var(--color-gray-200)] text-[var(--color-navy-950)] shadow-sm hover:shadow-md hover:border-[var(--color-navy-300)] transition-all"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel bounded by Container margins */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {CASE_STUDIES.map((study) => (
            <motion.div 
              key={study.slug} 
              variants={fadeUp} 
              className="w-[320px] sm:w-[360px] md:w-[400px] shrink-0 flex-none snap-start group flex flex-col h-auto bg-white rounded-2xl border border-[var(--color-gray-200)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative"
            >
              {/* Image Header */}
              <div className="relative w-full h-48 sm:h-56 shrink-0 overflow-hidden border-b border-[var(--color-gray-100)] bg-[var(--color-gray-100)] block">
                <Image
                  src={study.image}
                  alt={study.company}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 32vw"
                />
                <div className="absolute inset-0 bg-[var(--color-navy-950)]/0 group-hover:bg-[var(--color-navy-950)]/10 transition-colors duration-500" />
                
                {/* Industry Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[13px] font-bold text-[var(--color-navy-600)] tracking-wide">
                    {study.company}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-[22px] font-bold text-[var(--color-navy-950)] leading-snug mb-6 group-hover:text-[var(--color-green-600)] transition-colors duration-300 line-clamp-3">
                  {study.headline}
                </h3>

                {/* Metric and CTA in same row */}
                <div className="mt-auto pt-6 border-t border-[var(--color-gray-100)] flex items-center justify-between gap-4">
                  {study.metrics[0] ? (
                    <div className="flex-1">
                      <div className="text-3xl font-extrabold text-[var(--color-navy-950)] mb-1 tracking-tight">
                        {study.metrics[0].value}
                      </div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-gray-500)] leading-snug">
                        {study.metrics[0].label}
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}

                  <Link 
                    href={`/case-studies/${study.slug}`} 
                    className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wider text-[var(--color-navy-950)] uppercase hover:text-[var(--color-green-600)] transition-colors shrink-0"
                  >
                    Read Story
                    <span className="relative w-8 h-8 flex items-center justify-center bg-[var(--color-gray-100)] group-hover:bg-[var(--color-green-100)] rounded-full transition-colors overflow-hidden">
                      <ArrowUpRight className="w-4 h-4 absolute group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-300" />
                      <ArrowUpRight className="w-4 h-4 absolute -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Spacer to prevent the last card from cutting off abruptly */}
          <div className="w-4 md:w-8 shrink-0 flex-none" aria-hidden="true" />
        </motion.div>
      </Container>
    </section>
  );
}
