"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Wrench,
  Network,
  ChevronRight,
  ArrowRight,
  Globe2,
  Zap,
  Activity,
  Layers
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const PARTNER_TYPES = [
  {
    icon: Code,
    title: "Technology Partners",
    description: "Integrate your product with OpsFlo to reach thousands of oilfield service companies. Gain access to our robust APIs, secure sandbox environments, and exclusive co-marketing opportunities.",
    cta: "Become a Tech Partner",
  },
  {
    icon: Wrench,
    title: "Implementation Partners",
    description: "Join our network of certified experts. Help mutual customers deploy, configure, and optimize the OpsFlo platform to streamline their unique operational workflows.",
    cta: "Apply as Implementer",
  },
  {
    icon: Network,
    title: "Channel Partners",
    description: "Resell and distribute the industry's leading operational software. Benefit from highly competitive margins, comprehensive sales enablement, and dedicated partner success managers.",
    cta: "Join Channel Program",
  },
];

export function PartnersContent() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#f8f9fa] border-b border-gray-100">
        {/* Soft geometric background elements */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-navy-100)] opacity-40 blur-[100px] mix-blend-multiply pointer-events-none"
          animate={{ x: [0, -40, 20, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--color-green-100)] opacity-50 blur-[100px] mix-blend-multiply pointer-events-none"
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
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
                OpsFlo Partner Network
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--color-navy-950)] leading-[1.05] mb-6 font-display">
              Grow together with <br className="hidden md:block" />
              <span className="text-[var(--color-green-700)]">industry leaders.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-gray-600)] leading-relaxed max-w-2xl mx-auto font-medium">
              Join the ecosystem powering the next generation of oilfield operations. Partner with OpsFlo to unlock new revenue streams and deliver unparalleled value.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Ecosystem Impact Bento Grid */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-100 overflow-hidden">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mb-16 md:mb-20 text-center md:text-left"
          >
            <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase mb-3">
              Scale & Impact
            </h3>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)] max-w-2xl">
              An ecosystem built for <br className="hidden md:block" />
              <span className="text-[var(--color-gray-400)]">exponential scale.</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Bento Box 1 - Large */}
            <motion.div variants={fadeUp} className="md:col-span-8 rounded-[24px] p-8 relative overflow-hidden group">
              {/* Image Background */}
              <img src="https://res.cloudinary.com/dmghhstx4/image/upload/v1779803667/pexels-tomfisk-10396412_vtvhx9.jpg" alt="Industrial Technology" className="absolute inset-0 w-full h-full object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-950)] via-[var(--color-navy-900)]/90 to-transparent z-0" />
              <div className="absolute inset-0 bg-[var(--color-navy-950)]/40 z-0" />
              
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-8 border border-white/20">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                    140+
                  </h3>
                  <p className="text-base font-medium text-gray-300 max-w-sm leading-relaxed">
                    Certified technology integrations currently active across North America.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 2 - Small Dark */}
            <motion.div variants={fadeUp} className="md:col-span-4 rounded-[24px] p-8 relative overflow-hidden text-white group">
              <img src="https://res.cloudinary.com/dmghhstx4/image/upload/v1779799679/pexels-alice1-7080938_hxy3us.jpg" alt="Speed and Connectivity" className="absolute inset-0 w-full h-full object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[var(--color-green-900)]/80 z-0 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)] to-transparent opacity-90 z-0" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-8 backdrop-blur-md border border-white/20">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
                    3x
                  </h3>
                  <p className="text-base font-medium text-gray-300 leading-relaxed">
                    Faster deployment timelines when utilizing certified partners.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 3 - Medium */}
            <motion.div variants={fadeUp} className="md:col-span-5 rounded-[24px] p-8 relative overflow-hidden group">
               <img src="https://res.cloudinary.com/dmghhstx4/image/upload/v1779803667/pexels-tomfisk-10396412_vtvhx9.jpg" alt="Data Analytics" className="absolute inset-0 w-full h-full object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-700" />
               <div className="absolute inset-0 bg-white/90 z-0 backdrop-blur-sm" />
               <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent z-0" />

               <div className="relative z-10">
                 <div className="h-12 w-12 rounded-xl bg-[var(--color-navy-50)] flex items-center justify-center text-[var(--color-navy-900)] mb-8 shadow-sm">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-navy-950)] mb-3 tracking-tight">
                    $2B+
                  </h3>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">
                    In operational transactions processed seamlessly through partner APIs.
                  </p>
               </div>
            </motion.div>

            {/* Bento Box 4 - Medium Wide */}
            <motion.div variants={fadeUp} className="md:col-span-7 rounded-[24px] p-8 relative overflow-hidden group">
               <img src="https://res.cloudinary.com/dmghhstx4/image/upload/v1779799679/pexels-alice1-7080938_hxy3us.jpg" alt="Integration APIs" className="absolute inset-0 w-full h-full object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-700" />
               <div className="absolute inset-0 bg-[var(--color-navy-950)]/80 z-0 mix-blend-multiply" />
               <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-navy-950)] to-[var(--color-navy-900)]/90 z-0" />

               <div className="relative z-10 text-white">
                 <div className="h-12 w-12 rounded-xl bg-blue-500/20 shadow-sm flex items-center justify-center text-blue-300 mb-8 backdrop-blur-md border border-blue-400/30">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    Unified Data Layer
                  </h3>
                  <p className="text-sm md:text-base font-medium text-gray-300 max-w-md leading-relaxed">
                    Partners leverage a single source of truth, eliminating data silos between field execution, accounting, and logistics.
                  </p>
               </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Partner Programs */}
      <section className="py-24 md:py-32 relative bg-white">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase mb-3">
              Partner Programs
            </h3>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)] mb-6">
              Choose your partnership path.
            </h2>
            <p className="text-base text-[var(--color-gray-600)] leading-relaxed">
              Whether you are building integrated technology, deploying software in the field, or expanding your sales portfolio, we have a structured program designed for your success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {PARTNER_TYPES.map((pt) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={pt.title}
                  variants={fadeUp}
                  className="group relative flex flex-col p-8 md:p-10 bg-[#f8f9fa] rounded-[32px] hover:bg-white hover:shadow-[0_12px_40px_rgba(8,65,130,0.06)] hover:ring-1 hover:ring-gray-200 transition-all duration-500"
                >
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow-sm text-[var(--color-navy-900)] group-hover:bg-[var(--color-green-500)] group-hover:text-white transition-colors duration-500 mb-8">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--color-navy-950)] mb-4">
                    {pt.title}
                  </h3>
                  
                  <p className="text-[15px] leading-relaxed text-gray-500 flex-1 mb-10">
                    {pt.description}
                  </p>
                  
                  <Link
                    href="/partners/apply"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-navy-950)] group-hover:text-[var(--color-green-700)] transition-colors w-max"
                  >
                    {pt.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Edge-to-Edge Premium Dark CTA */}
      <section className="relative overflow-hidden bg-[var(--color-navy-950)] py-24 md:py-32">
        {/* Dynamic Dark Mode Background Effects */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-green-500)] opacity-20 blur-[120px] mix-blend-screen pointer-events-none"
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 opacity-20 blur-[120px] mix-blend-screen pointer-events-none"
          animate={{ x: [0, -50, 40, 0], y: [0, 60, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-8">
              <span className="h-2 w-2 rounded-full bg-[var(--color-green-400)] shadow-[0_0_8px_var(--color-green-400)] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                Partnerships Open
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold tracking-tight text-white leading-[1.05] mb-8 font-display">
              Ready to redefine <br />
              field operations?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 font-medium max-w-2xl mx-auto">
              Connect with our dedicated partnerships team to discover how we can build, sell, and grow together in the energy sector.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/partners/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[var(--color-green-500)] text-[var(--color-navy-950)] font-bold text-sm transition-all hover:bg-[var(--color-green-400)] hover:shadow-[0_0_20px_rgba(var(--color-green-500-rgb),0.3)] hover:-translate-y-0.5"
              >
                Submit Application
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/integrations"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/30"
              >
                Explore Integrations
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
