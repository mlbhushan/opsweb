"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  ArrowRight,
  Globe,
  TrendingUp,
  Heart,
  BookOpen,
  Calendar,
  HardHat,
  ChevronRight
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type Opening = {
  title: string;
  location: string;
  department: string;
};

const PERKS = [
  {
    icon: Globe,
    title: "Remote-First Flexibility",
    desc: "Work from anywhere in North America. We care about your output, not your office hours.",
  },
  {
    icon: TrendingUp,
    title: "Meaningful Equity",
    desc: "We want you to act like an owner, so we make you one. Competitive stock options for all.",
  },
  {
    icon: Heart,
    title: "Comprehensive Health",
    desc: "Premium medical, dental, and vision coverage for you and your dependents.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "A generous $2,000 annual stipend for conferences, courses, books, and professional growth.",
  },
  {
    icon: Calendar,
    title: "Unlimited PTO",
    desc: "Flexible time off policy. Take the time you need to recharge and bring your best self to work.",
  },
  {
    icon: HardHat,
    title: "Real Field Exposure",
    desc: "Travel to customer sites. See the software you build in action on actual well pads.",
  },
];

export function CareersContent({ openings }: { openings: Opening[] }) {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#f8f9fa] border-b border-gray-100">
        {/* Soft geometric background elements */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-green-100)] opacity-40 blur-[100px] mix-blend-multiply pointer-events-none"
          animate={{ x: [0, -50, 20, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50 opacity-50 blur-[100px] mix-blend-multiply pointer-events-none"
          animate={{ x: [0, 40, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <Container className="relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-sm mb-8">
              <span className="h-2 w-2 rounded-full bg-[var(--color-green-500)] shadow-[0_0_8px_var(--color-green-400)] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-navy-900)]">
                We are hiring
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--color-navy-950)] leading-[1.05] mb-6 font-display">
              Build the OS for <br className="hidden md:block" />
              <span className="text-[var(--color-gray-400)]">Oilfield Services.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-gray-600)] leading-relaxed max-w-2xl mx-auto font-medium">
              We are solving the hardest operational problems in the energy sector. Join a team of builders making software that moves iron and closes tickets.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Perks / Why OpsFlo */}
      <section className="py-24 md:py-32 relative bg-white border-b border-gray-100">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase mb-3">
              How We Work
            </h3>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)] mb-6">
              Benefits built for your best work.
            </h2>
            <p className="text-base text-[var(--color-gray-600)] leading-relaxed">
              We believe that exceptional engineering requires exceptional support. Our culture is built on trust, autonomy, and giving you the tools to do the best work of your career.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {PERKS.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  variants={fadeUp}
                  className="group relative p-8 bg-white border border-gray-100 rounded-[24px] shadow-[0_4px_20px_rgba(8,65,130,0.02)] hover:shadow-[0_8px_30px_rgba(8,65,130,0.06)] hover:border-gray-200 transition-all duration-300"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gray-50 text-[var(--color-navy-900)] group-hover:bg-[var(--color-navy-950)] group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-navy-950)] mb-3">
                    {perk.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-500">
                    {perk.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-24 md:py-32 bg-[#fafaf8]">
        <Container className="max-w-4xl">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase mb-3">
                Open Roles
              </h3>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)]">
                Current Opportunities
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-4 md:mt-0 font-medium">
              {openings.length} open position{openings.length === 1 ? '' : 's'}
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {openings.map((job) => (
              <motion.div key={job.title} variants={fadeUp}>
                <Link
                  href={`/careers/apply?role=${encodeURIComponent(job.title)}`}
                  className="group flex items-center justify-between p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[var(--color-green-450)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="h-12 w-12 hidden md:flex shrink-0 items-center justify-center rounded-xl bg-gray-50 text-[var(--color-navy-900)] group-hover:bg-[var(--color-green-50)] group-hover:text-[var(--color-green-700)] transition-colors">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-gray-400)] mb-2">
                        <span>{job.department}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-navy-950)] group-hover:text-[var(--color-green-700)] transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="hidden md:block text-sm font-bold text-[var(--color-green-700)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      View Role
                    </span>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-[var(--color-green-500)] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* General Application CTA */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto bg-[var(--color-navy-950)] rounded-[32px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden">
            {/* Dark background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-green-500)]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Don't see your perfect role?
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
                We are always looking for exceptional talent. If you believe you can make a significant impact at OpsFlo, send us your resume and tell us how you'd make our platform better.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/careers/apply"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[var(--color-navy-950)] font-bold text-sm transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit General Application
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-sm backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Learn About Our Mission
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
