"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/content/blog";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const RECENT_POSTS = BLOG_POSTS.slice(0, 3);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function RecentBlogs() {
  return (
    <section className="bg-[var(--color-gray-50)] py-20 md:py-24 border-t border-[var(--color-gray-200)] relative">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                Latest from the Blog
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Stay sharp.{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--color-green-500)]">Stay ahead.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:max-w-md lg:pb-2 flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <p className="text-[17px] text-[var(--color-gray-600)] leading-relaxed mb-6">
              Actionable insights on field operations, revenue capture, and digital transformation for oilfield service teams.
            </p>
            
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.1em] text-white uppercase hover:text-[var(--color-navy-950)] transition-colors bg-[var(--color-navy-950)] border border-[var(--color-navy-950)] pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[var(--color-green-400)]"
            >
              View All Articles
              <span className="relative overflow-hidden w-8 h-8 flex items-center justify-center bg-white/20 group-hover:bg-white/30 rounded-full transition-colors">
                 <ArrowUpRight className="w-4 h-4 absolute group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-300" />
                 <ArrowUpRight className="w-4 h-4 absolute -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Strict Swiss Grid for Articles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16"
        >
          {RECENT_POSTS.map((post) => (
            <motion.div key={post.slug} variants={fadeUp} className="group flex flex-col h-full relative">
              
              {/* Image container */}
              <Link href={`/blog/${post.slug}`} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-gray-100)] block shrink-0 shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[var(--color-navy-950)]/0 group-hover:bg-[var(--color-navy-950)]/10 transition-colors duration-500" />
                
                {/* Category Tag overlaid on image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              {/* Overlapping Content Card */}
              <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-6 md:p-8 -mt-12 mx-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 transition-all duration-500 relative z-10">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-semibold text-[var(--color-gray-500)] tracking-wide uppercase">
                    {formatDate(post.date)}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block mb-4">
                  <h3 className="text-xl font-bold text-[var(--color-navy-950)] leading-[1.3] group-hover:text-[var(--color-green-600)] transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-[var(--color-gray-600)] text-[14px] leading-relaxed line-clamp-2 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-[var(--color-gray-200)]/60 mt-auto">
                   <div className="flex items-center gap-2 text-[12px] font-medium text-[var(--color-gray-500)]">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gray-50)] group-hover:bg-[var(--color-green-50)] text-[var(--color-navy-950)] group-hover:text-[var(--color-green-600)] transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

