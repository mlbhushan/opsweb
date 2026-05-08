"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const FEATURES = [
  {
    id: "real-time",
    title: "Command your operations in real-time",
    description:
      "Eliminate blind spots with a centralized command center. Monitor active jobs, track field crews, and assign equipment instantly. Every work order, inspection, and field ticket flows into a single source of truth.",
    linkText: "Learn more about Field Execution",
    linkHref: "/platform/field-execution",
    mockupMain: "/mockups/dashboard.png",
    mockupFloating: "/mockups/tracker.png",
  },
  {
    id: "dispatch",
    title: "Automate dispatching and mobilization",
    description:
      "Deploy the right crew with the right equipment without the chaos. Intelligent scheduling tools and AI-based auto-assignment ensure optimal utilization and prevent costly operational delays before they happen.",
    linkText: "Learn more about Scheduling",
    linkHref: "/platform/scheduling",
    mockupMain: "/mockups/auto-assign.png",
    mockupFloating: null,
  },
  {
    id: "revenue",
    title: "Capture revenue with zero leakage",
    description:
      "Transform field work into verifiable invoices instantly. Our digital ticketing system ensures every billable hour, part, and service is documented and converted to cash with total accuracy.",
    linkText: "Learn more about Field Ticketing",
    linkHref: "/platform/field-ticketing",
    mockupMain: "/mockups/field-service.png",
    mockupFloating: null,
  },
  {
    id: "profitability",
    title: "Gain absolute visibility into job profitability",
    description:
      "Track financial performance dynamically as jobs progress. Use our built-in AI assistant to identify margin erosion early and make data-driven decisions that protect your bottom line.",
    linkText: "Learn more about Analytics",
    linkHref: "/platform/analytics",
    mockupMain: "/mockups/analytics.png",
    mockupFloating: null,
  },
];

export function AllInOnePlatform() {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-t border-[var(--color-gray-200)]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50"></div>

      <div className="container-x relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-navy-200)] px-4 py-2 bg-white shadow-sm">
            <span className="flex size-2 rounded-full bg-[var(--color-green-500)] mr-3"></span>
            <span className="text-sm font-semibold tracking-widest text-[var(--color-navy-900)] uppercase">
              What is OpsFlo
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)] mb-6 text-balance">
            The definitive field operations{" "}
            <span className="text-[var(--color-green-600)]">execution engine</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-navy-700)] leading-relaxed">
            OpsFlo is the industrial-grade operating system designed to manage every aspect of your field service projects, from field ticketing and dispatching to deep operational intelligence and automated revenue capture.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Accordion / Tab List (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <div className="border-l-2 border-[var(--color-gray-200)] relative">
              {FEATURES.map((feature) => {
                const isActive = activeFeature === feature.id;
                
                return (
                  <div key={feature.id} className="relative group">
                    {/* Active Line Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFeatureIndicator"
                        className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[var(--color-green-500)] z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <button
                      onClick={() => setActiveFeature(feature.id)}
                      className={cn(
                        "w-full text-left pl-6 md:pl-8 py-6 transition-all duration-300",
                        isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
                      )}
                    >
                      <h3 className={cn(
                        "text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300",
                        isActive ? "text-[var(--color-navy-950)]" : "text-[var(--color-navy-800)]"
                      )}>
                        {feature.title}
                      </h3>
                      
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-5">
                              <p className="text-[16px] leading-relaxed text-[var(--color-navy-700)]">
                                {feature.description}
                              </p>
                              <Link
                                href={feature.linkHref}
                                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-green-600)] hover:text-[var(--color-navy-950)] transition-colors"
                              >
                                {feature.linkText}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mockup Display (Right) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[350px] md:min-h-[450px] z-10">
            
            {/* Animated Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bg-${activeFeature}`}
                  initial={{ opacity: 0, rotate: -45, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="absolute w-[120%] h-[120%] rounded-full border border-[var(--color-green-500)]/20" />
                  <div className="absolute w-[80%] h-[80%] rounded-full border border-[var(--color-navy-500)]/15 border-dashed" />
                  
                  {/* Target marks */}
                  <div className="absolute w-4 h-4 border-t-2 border-l-2 border-[var(--color-green-500)]/60 top-[10%] left-[10%]" />
                  <div className="absolute w-4 h-4 border-t-2 border-r-2 border-[var(--color-green-500)]/60 top-[10%] right-[10%]" />
                  <div className="absolute w-4 h-4 border-b-2 border-l-2 border-[var(--color-green-500)]/60 bottom-[10%] left-[10%]" />
                  <div className="absolute w-4 h-4 border-b-2 border-r-2 border-[var(--color-green-500)]/60 bottom-[10%] right-[10%]" />
                </motion.div>
              </AnimatePresence>
              
              {/* Subtle continuous rotation */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-[var(--color-gray-200)]/80 -z-20 hidden md:block"
              />
            </div>
            <div className="w-full relative aspect-[16/10] bg-white rounded-xl border border-[var(--color-gray-200)] shadow-2xl overflow-hidden group">
              
              {/* Fake Browser/App Header */}
              <div className="h-10 border-b border-[var(--color-gray-100)] bg-[var(--color-gray-50)] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto h-5 w-48 bg-white border border-[var(--color-gray-200)] rounded flex items-center px-2">
                  <div className="w-3 h-3 text-[var(--color-gray-400)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <span className="ml-2 text-[9px] text-[var(--color-gray-400)] font-mono">opsflo.com/app/jobs</span>
                </div>
              </div>

              {/* Mockup Image Container */}
              <div className="relative w-full h-[calc(100%-40px)] bg-[var(--color-gray-100)] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center text-[var(--color-gray-400)]"
                  >
                    {(() => {
                      const feature = FEATURES.find(f => f.id === activeFeature);
                      return feature?.mockupMain ? (
                        <Image
                          src={feature.mockupMain}
                          alt={`${feature.title} interface`}
                          fill
                          className="object-cover object-top"
                          quality={95}
                        />
                      ) : null;
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Floating Element Mockup */}
            <AnimatePresence mode="wait">
              {FEATURES.find(f => f.id === activeFeature)?.mockupFloating && (
                <motion.div
                  key={`floating-${activeFeature}`}
                  initial={{ opacity: 0, y: 30, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-2/3 max-w-[320px] aspect-[4/3] bg-white rounded-lg border border-[var(--color-gray-200)] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden z-20"
                >
                  <div className="h-8 border-b border-[var(--color-gray-100)] bg-white flex items-center px-3 justify-between">
                    <span className="text-[10px] font-semibold text-[var(--color-navy-900)]">Quick Action</span>
                    <div className="w-3 h-3 text-[var(--color-gray-400)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </div>
                  </div>
                  <div className="relative w-full h-[calc(100%-32px)] bg-[var(--color-gray-50)] flex items-center justify-center overflow-hidden">
                    {(() => {
                      const feature = FEATURES.find(f => f.id === activeFeature);
                      return feature?.mockupFloating ? (
                        <Image
                          src={feature.mockupFloating}
                          alt={`${feature.title} modal`}
                          fill
                          className="object-cover object-top"
                          quality={95}
                        />
                      ) : null;
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
