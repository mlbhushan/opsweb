"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { HOME } from "@/lib/content/home";
import { viewportOnce, staggerContainer, fadeUp } from "@/lib/animations";

const { services } = HOME;

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  tag: string;
  image?: string;
}

interface Category {
  id: string;
  label: string;
  color: string;
  services: ServiceItem[];
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col bg-[var(--color-navy-900)] border border-[var(--color-navy-800)] hover:border-[var(--color-green-500)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-w-[300px] w-[300px] md:min-w-[340px] md:w-[340px] snap-start overflow-hidden rounded-2xl shadow-lg"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Image Header */}
      {service.image && (
        <div className="relative w-full h-48 overflow-hidden border-b border-[var(--color-navy-800)]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Extremely subtle gradient just for the number contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)]/40 via-transparent to-transparent opacity-80" />
        </div>
      )}

      {/* Card number overlapping image */}
      <div className="absolute top-4 left-4 bg-[var(--color-navy-900)]/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[var(--color-navy-800)] shadow-sm">
        <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--color-green-400)] uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 pb-4">
        <h3 className="text-[18px] font-bold text-white leading-snug mb-3 group-hover:text-[var(--color-green-400)] transition-colors">
          {service.title}
        </h3>
        <p className="text-[14.5px] text-[var(--color-navy-200)] leading-relaxed flex-1">
          {service.description}
        </p>
      </div>

      {/* Card footer */}
      <Link
        href={service.href}
        className="flex items-center gap-2 px-6 pb-6 text-[13px] font-bold tracking-wide text-[var(--color-green-400)] uppercase hover:text-white transition-colors group/link"
      >
        Learn more
        <ArrowUpRight
          className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          strokeWidth={2.5}
        />
      </Link>
    </motion.div>
  );
}

export function ServicesCarousel() {
  const allServicesCategory = useMemo(() => {
    const allItems = services.categories.flatMap(c => c.services);
    return {
      id: "all",
      label: "All",
      color: "#0f172a",
      services: allItems
    };
  }, []);

  const categories = useMemo(() => [allServicesCategory, ...services.categories], [allServicesCategory]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const currentCategory = categories.find((c) => c.id === activeCategory) ?? categories[0];

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 360; // Card width + gap

    if (dir === "right") {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
    }

    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      scroll("right");
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [scroll, isHovered]);

  return (
    <section className="relative bg-[var(--color-navy-950)] py-16 md:py-20 border-t border-[var(--color-navy-900)] text-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-navy-800)] opacity-20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-green-900)] opacity-10 blur-[120px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-dark)" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-[var(--color-navy-900)] px-4 py-1.5 mb-6 shadow-sm self-start">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                {services.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Every Tool Your <br className="hidden md:block" />
              <span className="text-[var(--color-green-400)]">Operation Needs</span>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:max-w-md lg:pb-2 flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <p className="text-[17px] text-[var(--color-navy-200)] leading-relaxed mb-6">
              {services.subheadline}
            </p>
            <Link
              href={services.cta.href}
              className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.1em] text-[var(--color-navy-950)] uppercase hover:text-[var(--color-navy-950)] transition-colors bg-white border border-white pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[var(--color-green-400)] hover:border-[var(--color-green-400)]"
            >
              {services.cta.label}
              <span className="relative shrink-0 overflow-hidden w-8 h-8 flex items-center justify-center bg-[var(--color-gray-100)] group-hover:bg-white/30 rounded-full transition-colors">
                 <ArrowUpRight className="w-4 h-4 absolute group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-300" />
                 <ArrowUpRight className="w-4 h-4 absolute -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Categories & Navigation Row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* Tabs */}
          <div className="flex flex-wrap items-stretch gap-2">
            {categories.map((cat, i) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 text-[12px] font-bold tracking-wider uppercase transition-all duration-300 rounded-lg border ${isActive
                      ? "bg-[var(--color-green-400)] text-[var(--color-navy-950)] border-[var(--color-green-400)] shadow-md"
                      : "bg-[var(--color-navy-900)] text-[var(--color-navy-300)] border-[var(--color-navy-700)] hover:bg-[var(--color-navy-800)] hover:text-white"
                    }`}
                >
                  <span className={`font-mono text-[10px] mr-2 opacity-60 ${isActive ? "text-[var(--color-navy-800)]" : "text-[var(--color-green-400)]"}`}>
                    {String(i).padStart(2, "0")}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Scroll Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm hover:shadow-md hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm hover:shadow-md hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Carousel track area */}
        <div
          className="relative -mx-4 px-4 md:mx-0 md:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth pt-4 -mt-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {currentCategory.services.map((service, index) => (
                <ServiceCard key={`${service.href}-${index}`} service={service} index={index} />
              ))}

              {/* "Explore All" Terminal Card */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center justify-center bg-[var(--color-navy-900)] border border-[var(--color-navy-800)] min-w-[240px] w-[240px] md:min-w-[260px] md:w-[260px] snap-start p-8 text-center group cursor-pointer hover:border-[var(--color-green-400)] transition-colors duration-300 rounded-2xl shadow-lg hover:-translate-y-1"
              >
                <Link href={services.cta.href} className="flex flex-col items-center justify-center gap-4 w-full h-full">
                  <div className="w-14 h-14 rounded-full border border-[var(--color-navy-700)] bg-[var(--color-navy-800)] flex items-center justify-center group-hover:border-[var(--color-green-400)] group-hover:bg-[var(--color-green-400)] transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-6 h-6 text-[var(--color-green-400)] group-hover:text-[var(--color-navy-950)]" strokeWidth={2.5} />
                  </div>
                  <p className="text-[15.5px] font-bold text-white leading-snug">
                    Explore All<br />
                    <span className="text-[var(--color-green-400)]">{currentCategory.label} Modules</span>
                  </p>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Fade edge for smooth scroll illusion on desktop */}
          <div className="hidden md:block absolute top-0 right-0 bottom-8 w-24 pointer-events-none bg-gradient-to-l from-[var(--color-navy-950)] to-transparent z-10" />
        </div>

        {/* Bottom Pagination Dots */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`h-2.5 rounded-full transition-all duration-300 ${cat.id === activeCategory
                  ? "bg-[var(--color-green-400)] w-8"
                  : "bg-[var(--color-navy-700)] w-2.5 hover:bg-[var(--color-navy-500)]"
                }`}
              aria-label={`Switch to ${cat.label}`}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
