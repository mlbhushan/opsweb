"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lock,
  Server,
  Globe,
  Clock,
  ShieldCheck,
  ChevronRight,
  Database,
  Eye,
  Radio,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const PROTECTIONS = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "All enterprise data is encrypted at rest and in transit using advanced AES-256 cryptographic keys and TLS 1.3 secure protocols, preventing interception.",
  },
  {
    icon: Server,
    title: "99.95% Uptime SLA",
    description: "Our high-availability infrastructure operates across multiple geographically redundant Availability Zones, ensuring system availability under harsh field conditions.",
  },
  {
    icon: Globe,
    title: "Data Residency & Sovereignty",
    description: "Store your operational logs in secure, regional Tier-4 data centers with configurable geographic access restrictions and network isolation.",
  },
  {
    icon: Clock,
    title: "Continuous Automated Backups",
    description: "Guard against operational data loss with automated daily snapshots, 30-day retention logs, and rapid point-in-time workspace restoration.",
  },
];

const SECURITY_FEATURES = [
  {
    icon: UserCheck,
    title: "Role-Based Access Control (RBAC)",
    description: "Configure granular permissions to ensure field crews, operators, and accounting teams only access information necessary for their roles."
  },
  {
    icon: ShieldCheck,
    title: "Single Sign-On & MFA",
    description: "Authenticate using your existing corporate credentials via SAML 2.0 and OpenID Connect, with mandatory Multi-Factor Authentication enforcement."
  },
  {
    icon: Database,
    title: "Tamper-Proof Audit Trails",
    description: "Automatically log all key transactions, user logins, and operational changes in an immutable audit ledger to track data provenance."
  },
  {
    icon: Radio,
    title: "Continuous Vulnerability Scanning",
    description: "Our systems undergo 24/7 automated code analysis, dependency patching, and annual comprehensive third-party penetration testing audits."
  },
  {
    icon: Eye,
    title: "Strict Tenant Isolation",
    description: "OpsFlo enforces logical partition logic at the database layer using PostgreSQL Row-Level Security (RLS) policies to prevent cross-tenant exposure."
  },
  {
    icon: ShieldCheck,
    title: "Data Loss Prevention (DLP)",
    description: "Protect intellectual property and proprietary field tickets with system rules that block unauthorized downloading or exporting of data."
  }
];

export function SecurityContent() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)] border-b border-[var(--color-gray-200)] relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-[var(--color-green-450)]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-navy-950)] uppercase font-mono">
                  Operational Trust
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight text-[var(--color-navy-950)] leading-[1.05]">
                Enterprise protection. <br />
                <span className="text-[var(--color-gray-400)]">Built for the oilfield.</span>
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-5 lg:pt-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.15 }}
            >
              <p className="text-lg text-[var(--color-gray-600)] leading-relaxed font-normal">
                At OpsFlo, security is not an afterthought. We implement robust, military-grade network controls and continuous system audits to guarantee your data stays secure, isolated, and accessible under any field condition.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Protections Section */}
      <section className="py-24 md:py-32 border-b border-[var(--color-gray-200)]">
        <Container>
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[var(--color-gray-200)]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <div className="max-w-2xl">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase mb-3">
                01. Core Infrastructure
              </h3>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)]">
                Core Data Protection Standards
              </h2>
            </div>
            <p className="max-w-md text-base text-[var(--color-gray-600)] mt-4 lg:mt-0 leading-relaxed">
              Industrial operations depend on uninterrupted, secure system access. We embed defense mechanisms directly into every layer of our database and hosting infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {PROTECTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group relative p-8 md:p-10 border border-[var(--color-gray-200)] rounded-2xl transition-all duration-500 hover:border-[var(--color-navy-950)] hover:bg-[var(--color-gray-50)]/40 flex flex-col justify-between min-h-[260px] overflow-hidden"
                >
                  {/* Subtle hover accent block */}
                  <div className="absolute top-0 left-0 w-1.5 h-0 bg-[var(--color-green-450)] group-hover:h-full transition-all duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono font-semibold text-[var(--color-gray-400)]">0{idx + 1}</span>
                      <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[var(--color-navy-50)] border border-[var(--color-navy-100)] text-[var(--color-navy-900)] group-hover:bg-[var(--color-navy-950)] group-hover:text-white transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-[var(--color-navy-950)] mb-3 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[15px] leading-relaxed text-[var(--color-gray-600)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Security Controls Section */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)] border-b border-[var(--color-gray-200)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-24 h-fit"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase mb-3">
                02. Application Controls
              </h3>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)] mb-6 leading-[1.1]">
                Zero-Trust Control Framework
              </h2>
              <p className="text-base text-[var(--color-gray-600)] leading-relaxed mb-10">
                Our application code enforces dynamic privilege validation, cryptographic verification, and strict operational separation at every user touchpoint.
              </p>
              
              <div className="p-8 bg-white border border-[var(--color-gray-200)] rounded-2xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-green-100)]/20 rounded-bl-full -z-0" />
                <h4 className="text-lg font-bold text-[var(--color-navy-950)] mb-2 relative z-10">
                  Request Security Brief
                </h4>
                <p className="text-sm text-[var(--color-gray-500)] leading-relaxed mb-6 relative z-10">
                  Get our comprehensive security architecture documentation containing network configurations and API schemas.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-navy-950)] hover:text-[var(--color-green-700)] transition-colors group/link relative z-10"
                >
                  Download security brief
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="divide-y divide-[var(--color-gray-200)] border-t border-b border-[var(--color-gray-200)]">
                {SECURITY_FEATURES.map((feat, idx) => {
                  const FeatureIcon = feat.icon;
                  return (
                    <motion.div
                      key={feat.title}
                      variants={fadeUp}
                      className="py-8 flex items-start gap-6 group hover:bg-white/40 transition-all duration-300 px-6 -mx-6 rounded-xl"
                    >
                      <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-white border border-[var(--color-gray-200)] text-[var(--color-navy-900)] group-hover:bg-[var(--color-green-450)] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <FeatureIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[var(--color-navy-950)] mb-2 group-hover:text-[var(--color-green-700)] transition-colors duration-300">
                          {feat.title}
                        </h4>
                        <p className="text-sm text-[var(--color-gray-600)] leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Data Architecture Section */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            className="max-w-3xl mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--color-green-700)] uppercase mb-3">
              03. Isolation Logic
            </h3>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-navy-950)] mb-4">
              Multi-Tenant Cloud Isolation
            </h2>
            <p className="text-base text-[var(--color-gray-600)] leading-relaxed">
              We process millions of field entries daily. Our database architecture utilizes advanced hardware separation models and cryptographic boundaries to prevent database crossing.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 border border-[var(--color-gray-200)] rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[var(--color-gray-200)] shadow-sm bg-white"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              {
                color: "bg-[var(--color-green-450)]",
                title: "Logical Isolation",
                description: "Operational tables are governed by PostgreSQL Row-Level Security (RLS) policies, preventing unauthorized queries at the core execution level."
              },
              {
                color: "bg-[var(--color-navy-500)]",
                title: "Custom Decryption Keys",
                description: "Every organization has unique workspace cryptographic keys. Customer payloads are decrypted dynamically and never cached in unified memory."
              },
              {
                color: "bg-[var(--color-navy-950)]",
                title: "Protected Boundaries",
                description: "Our ingress layers utilize enterprise Cloudflare Web Application Firewall (WAF) filtering to mitigate cross-site exploits and DDoS anomalies."
              }
            ].map((box, idx) => (
              <motion.div
                key={box.title}
                variants={fadeUp}
                className="p-8 lg:p-10 flex flex-col justify-between hover:bg-[var(--color-gray-50)]/30 transition-colors duration-300 min-h-[280px]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`h-2.5 w-2.5 rounded-full ${box.color}`} />
                    <span className="text-xs font-mono font-bold text-[var(--color-gray-400)] uppercase">Layer 0{idx + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-navy-950)] mb-4 tracking-tight">
                    {box.title}
                  </h4>
                  <p className="text-sm text-[var(--color-gray-600)] leading-relaxed">
                    {box.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Redesigned Premium Aesthetic CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#f8f9fa] border-t border-gray-100 flex items-center justify-center min-h-[600px]">
        
        {/* Dynamic Background Elements - Increased opacity & multiply for visibility */}
        {/* Large slow-moving gradient blob 1 */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-green-300)] opacity-30 blur-[100px] mix-blend-multiply pointer-events-none"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Large slow-moving gradient blob 2 */}
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[var(--color-navy-200)] opacity-40 blur-[120px] mix-blend-multiply pointer-events-none"
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 90, -100, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Glass Geometry to add tangible modern moving elements */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-32 h-32 rounded-3xl border border-white/60 bg-white/30 backdrop-blur-md shadow-lg pointer-events-none rotate-12"
          animate={{
            y: [0, -30, 0],
            rotate: [12, 25, 12]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-24 h-24 rounded-full border border-white/60 bg-white/30 backdrop-blur-md shadow-lg pointer-events-none"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <Container className="relative z-10 w-full">
          {/* Main Content container - glassmorphism aesthetic */}
          <div className="mx-auto max-w-5xl bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[40px] shadow-[0_8px_32px_rgba(8,65,130,0.04)] p-8 md:p-16 overflow-hidden relative">
            
            {/* Inner subtle glow for the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/40 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Side: Headline and copy */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-sm w-max">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-green-500)] shadow-[0_0_8px_var(--color-green-400)] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-navy-900)]">
                    Schedule Demo
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-[var(--color-navy-950)] leading-[1.05] font-display">
                  Experience our <br />
                  <span className="text-[var(--color-green-700)]">secure platform</span> <br/> in action.
                </h2>
                
                <p className="text-base text-gray-600 font-medium leading-relaxed max-w-sm">
                  Book a personal walkthrough with our systems team to see how OpsFlo configures encryption and custom security rules for your field operations.
                </p>
              </div>

              {/* Right Side: 2 Pathways (Removed Video Demo) */}
              <div className="flex flex-col gap-5">
                {/* Path 1: Live Demo */}
                <Link
                  href="/contact"
                  className="group flex items-center p-5 md:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[var(--color-green-450)] transition-all duration-300"
                >
                  <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-green-50)] text-[var(--color-green-700)] group-hover:bg-[var(--color-green-500)] group-hover:text-white transition-all duration-300 mr-5">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-bold text-[var(--color-navy-950)] mb-1 group-hover:text-[var(--color-green-700)] transition-colors">
                      Book Live Operations Demo
                    </h3>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                      Walk through field forms, custom tickets, and analytics. (15 min)
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-[var(--color-navy-950)] group-hover:translate-x-1 transition-all duration-300" />
                </Link>

                {/* Path 2: Technical Walkthrough */}
                <Link
                  href="/contact"
                  className="group flex items-center p-5 md:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[var(--color-navy-400)] transition-all duration-300"
                >
                  <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-xl bg-blue-50 text-[var(--color-navy-700)] group-hover:bg-[var(--color-navy-600)] group-hover:text-white transition-all duration-300 mr-5">
                    <Server className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-bold text-[var(--color-navy-950)] mb-1 group-hover:text-[var(--color-navy-700)] transition-colors">
                      Technical Security Review
                    </h3>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                      Deep dive into database RLS, regional storage, and APIs.
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-[var(--color-navy-950)] group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
