"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { useRef } from "react";
import { BLOG_POSTS } from "@/lib/content/blog";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const RECENT_POSTS = BLOG_POSTS.slice(0, 3);

const CATEGORY_COLORS: Record<string, string> = {
  Revenue: "bg-[var(--color-green-100)] text-[var(--color-green-700)]",
  Maintenance: "bg-[var(--color-navy-100)] text-[var(--color-navy-700)]",
  "Digital Transformation": "bg-amber-50 text-amber-700",
  Safety: "bg-red-50 text-red-700",
  "Industry News": "bg-slate-100 text-slate-600",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function RecentBlogs() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for floating blobs
  const blobY1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const blobX1 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const [featured, ...rest] = RECENT_POSTS;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--color-gray-50)] py-16 md:py-24 border-t border-[var(--color-gray-200)]"
    >
      {/* Swiss-style subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #084182 1px, transparent 1px), linear-gradient(to bottom, #084182 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* Fade the grid at edges */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[var(--color-gray-50)] via-transparent to-[var(--color-gray-50)]" />

      {/* Moving ambient blobs */}
      <motion.div
        style={{ y: blobY1, x: blobX1 }}
        className="absolute top-[-80px] right-[-120px] w-[480px] h-[480px] rounded-full bg-[var(--color-green-200)]/50 blur-[120px] pointer-events-none z-0 mix-blend-multiply"
      />
      <motion.div
        style={{ y: blobY2 }}
        className="absolute bottom-[-60px] left-[-100px] w-[420px] h-[420px] rounded-full bg-[var(--color-navy-100)]/60 blur-[100px] pointer-events-none z-0 mix-blend-multiply"
      />
      <motion.div
        style={{ y: blobY1 }}
        className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-amber-100/40 blur-[90px] pointer-events-none z-0 mix-blend-multiply"
      />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-2xl">
            {/* Swiss eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[var(--color-green-500)]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-gray-600)] uppercase font-[var(--font-heading)]">
                Field Intelligence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-[1.08]">
              Stay sharp.{" "}
              <span className="text-[var(--color-green-500)]">
                Stay ahead.
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-gray-600)] leading-relaxed max-w-xl">
              Actionable insights on field operations, revenue capture, and digital transformation for oilfield service teams.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy-950)] transition-colors hover:text-[var(--color-green-600)] pb-1 border-b-2 border-[var(--color-navy-950)] hover:border-[var(--color-green-600)] whitespace-nowrap self-start md:self-auto"
          >
            Read all articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Card Grid: 1 featured (large) + 2 secondary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
        >
          {/* Featured Card */}
          {featured && (
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <Link
                href={`/blog/${featured.slug}`}
                className="group relative flex flex-col h-full bg-white rounded-2xl border border-[var(--color-gray-200)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-72 overflow-hidden bg-[var(--color-gray-100)]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/40 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <span
                    className={`absolute top-4 left-4 text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full ${
                      CATEGORY_COLORS[featured.category] ??
                      "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {featured.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[13px] text-[var(--color-gray-500)] font-medium">
                      {formatDate(featured.date)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-gray-300)]" />
                    <span className="flex items-center gap-1.5 text-[13px] text-[var(--color-gray-500)]">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-navy-950)] leading-snug mb-3 group-hover:text-[var(--color-green-600)] transition-colors duration-300">
                    {featured.title}
                  </h3>
                  <p className="text-[var(--color-gray-600)] text-sm md:text-base leading-relaxed line-clamp-3 flex-1">
                    {featured.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-navy-900)] group-hover:text-[var(--color-green-600)] transition-colors duration-300">
                    Read article
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Secondary Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rest.map((post) => (
              <motion.div key={post.slug} variants={fadeUp} className="flex-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col sm:flex-row lg:flex-col xl:flex-row h-full bg-white rounded-2xl border border-[var(--color-gray-200)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-400 hover:-translate-y-0.5"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-44 lg:w-full xl:w-40 h-44 sm:h-auto lg:h-44 xl:h-auto shrink-0 overflow-hidden bg-[var(--color-gray-100)]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-[var(--color-navy-950)]/10" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-5 flex-1">
                    <span
                      className={`mb-3 self-start text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full ${
                        CATEGORY_COLORS[post.category] ??
                        "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {post.category}
                    </span>

                    <h3 className="text-[15px] md:text-base font-bold text-[var(--color-navy-950)] leading-snug mb-2 group-hover:text-[var(--color-green-600)] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[var(--color-gray-500)] text-[13px] leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[12px] text-[var(--color-gray-400)]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <span className="flex items-center gap-1 text-[12px] font-semibold text-[var(--color-navy-900)] group-hover:text-[var(--color-green-600)] transition-colors duration-300">
                        Read
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Swiss rule bottom */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-14 h-[2px] w-full origin-left bg-gradient-to-r from-[var(--color-green-500)]/60 via-[var(--color-gray-200)] to-transparent"
        />
      </Container>
    </section>
  );
}
