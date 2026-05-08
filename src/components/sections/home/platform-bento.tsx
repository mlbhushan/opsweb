"use client";

import { motion } from "framer-motion";
import { Check, Monitor, Building2, Smartphone, Tablet, Construction, BarChart4 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

/* ─── Workflow Column Data ─────────────────────────────────────────── */

const WORKFLOW_COLUMNS = [
  {
    number: "1.",
    title: "Plan",
    items: [
      "Plan projects",
      "Create Job Orders",
      "Dispatch crews"
    ],
    Illustration: () => (
      <div className="relative w-full h-[180px] flex items-center justify-center mb-10">
        <div className="absolute right-[20%] top-[15%] text-[var(--color-gray-300)]">
          <Building2 size={80} strokeWidth={1} />
        </div>
        <div className="absolute left-[20%] bottom-[10%] text-[var(--color-navy-900)]">
          <Monitor size={110} strokeWidth={1} className="bg-white" />
          <div className="absolute inset-0 flex items-center justify-center pb-4">
            <span className="text-[10px] font-bold tracking-[0.2em]">opsflo</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "2.",
    title: "Execute",
    items: [
      "Complete Tickets",
      "Update progress",
      "Complete Safety Forms"
    ],
    Illustration: () => (
      <div className="relative w-full h-[180px] flex items-center justify-center mb-10">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 text-[var(--color-green-500)]">
          <Construction size={60} strokeWidth={1} />
        </div>
        <div className="absolute left-[25%] bottom-[15%] text-[var(--color-navy-900)] z-10">
          <Smartphone size={70} strokeWidth={1} className="bg-white" />
          <div className="absolute inset-0 flex items-center justify-center pb-2">
            <span className="text-[7px] font-bold tracking-[0.2em] rotate-90">opsflo</span>
          </div>
        </div>
        <div className="absolute right-[25%] bottom-[5%] text-[var(--color-navy-900)]">
          <Tablet size={100} strokeWidth={1} className="bg-white" />
          <div className="absolute inset-0 flex items-center justify-center pb-2">
            <span className="text-[9px] font-bold tracking-[0.2em]">opsflo</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "3.",
    title: "Report",
    items: [
      "Report on revenue",
      "Track progress",
      "Gain insights"
    ],
    Illustration: () => (
      <div className="relative w-full h-[180px] flex items-center justify-center mb-10">
        <div className="absolute left-[20%] top-[15%] text-[var(--color-gray-300)]">
          <BarChart4 size={80} strokeWidth={1} />
        </div>
        <div className="absolute right-[20%] bottom-[10%] text-[var(--color-navy-900)]">
          <Monitor size={110} strokeWidth={1} className="bg-white" />
          <div className="absolute inset-0 flex items-center justify-center pb-4">
            <span className="text-[10px] font-bold tracking-[0.2em]">opsflo</span>
          </div>
        </div>
      </div>
    ),
  },
];

/* ─── Component ────────────────────────────────────────────────────── */

export function PlatformBento() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-24 text-center flex flex-col items-center"
        >
          {/* Eyebrow */}
          <span className="text-[13px] font-semibold tracking-[0.2em] text-[var(--color-green-500)] uppercase mb-5">
            WORKFLOWS
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)] leading-[1.1] max-w-4xl mb-6">
            Streamline your operations from field to finance
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-[var(--color-gray-500)] leading-relaxed max-w-3xl font-normal">
            OpsFlo is so much more than a simple field ticketing software, it will optimize your entire workflow from start to finish, ensuring you never miss another billing opportunity.
          </p>
        </motion.div>

        {/* 3-Column Workflow Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24 px-4 md:px-0"
        >
          {WORKFLOW_COLUMNS.map((col) => {
            const Illustration = col.Illustration;
            return (
              <motion.div
                key={col.title}
                variants={fadeUp}
                className="flex flex-col group"
              >
                {/* Minimal Swiss Illustration */}
                <Illustration />

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[var(--color-navy-950)] mb-6 flex items-baseline gap-2">
                  <span className="text-[var(--color-green-500)] font-bold">{col.number}</span>
                  {col.title}
                </h3>

                {/* Checklist Items */}
                <ul className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-base text-[var(--color-gray-600)]"
                    >
                      <Check className="w-5 h-5 text-[var(--color-green-500)] shrink-0" strokeWidth={3} />
                      <span className="font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
