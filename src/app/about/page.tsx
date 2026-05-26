import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, Zap, TrendingUp, Users, Target } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { CoreBeliefs } from "@/components/sections/core-beliefs";
import { WhoAreWe } from "@/components/sections/about/who-are-we";
import { Container } from "@/components/ui/container";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { CTARow } from "@/components/ui/cta-row";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { ABOUT } from "@/lib/content/about";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "OpsFlo was born from the frustration of running oilfield operations with tools built for desk workers.",
  path: "/about",
});

export default function AboutPage() {
  const { hero, values, investors } = ABOUT;

  return (
    <>
      <SiteHeader />
      <PageBanner title="About Us" />
      <main className="flex-1 bg-white">
        {/* Mission / Sub-Hero Area */}
        <section className="py-20 md:py-28 overflow-hidden">
          <Container>
            <div className="mx-auto max-w-4xl text-center mb-20 md:mb-28">
              <ScrollRevealText 
                text={hero.headline.charAt(0) + hero.headline.slice(1).toLowerCase()}
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              />
            </div>

            <WhoAreWe 
              bodyText={
                <>
                  {hero.body} Our founders spent years managing field operations across the United States. They saw the same pattern everywhere: operators used 3 to 5 disconnected tools, lost revenue to missed field tickets, and dealt with billing cycles measured in weeks instead of hours.
                </>
              } 
            />
          </Container>
        </section>

        {/* Services Marquee */}
        <div className="w-full overflow-hidden flex py-6 border-b border-gray-100 bg-white relative">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-marquee {
              animation: marquee 80s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
            .animate-spin-custom {
              animation: spin-slow 12s linear infinite;
            }
          `}</style>
          
          <div className="animate-marquee items-center">
            {[
              "Oilfield Services",
              "Equipment Rental",
              "Fluid Hauling",
              "Well Services",
              "Pipeline & Infrastructure",
              "Field Ticketing",
              "Predictive Maintenance",
              "Work Order Automation",
              "Oilfield Services",
              "Equipment Rental",
              "Fluid Hauling",
              "Well Services",
              "Pipeline & Infrastructure",
              "Field Ticketing",
              "Predictive Maintenance",
              "Work Order Automation"
            ].map((service, index) => (
              <div key={index} className="flex items-center">
                <h2 className="text-[6vw] font-medium text-[var(--color-navy-950)] leading-[0.8] tracking-tighter uppercase whitespace-nowrap opacity-90 select-none px-6 md:px-12">
                  {service}
                </h2>
                <div className="text-[var(--color-green-500)] flex-shrink-0 flex items-center justify-center">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-custom">
                    <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Beliefs / Values Section */}
        <CoreBeliefs />

        {/* Story Section */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50"></div>
          
          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-4 py-1.5 mb-8 shadow-sm self-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-[var(--color-navy-900)] uppercase">Origin Story</span>
                </div>
                
                <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-[1.1] text-balance">
                  Born in the dirt.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-green-500)] to-[var(--color-green-700)]">Built for scale.</span>
                </h2>

                <div className="space-y-6 text-lg md:text-xl font-light text-[var(--color-navy-800)] leading-relaxed mb-12">
                  <p className="font-medium text-[var(--color-navy-950)]">
                    Generic software breaks when it hits the oilfield. We know, because we lived it.
                  </p>
                  <p>
                    We built OpsFlo because we were tired of offline dead zones, complex jobs forced into spreadsheets, and 30-day delays on invoicing. Today, we turn field chaos into a reliable engine for scale and profit.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-6 md:gap-5 sm:items-center">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-6xl tracking-tighter text-[var(--color-navy-950)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700 }}>500</span>
                      <span className="text-4xl font-bold text-[var(--color-green-500)]">+</span>
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-600)]">
                      Active Fleets Powered
                    </p>
                  </div>
                  
                  <div className="hidden sm:block w-px h-16 bg-[var(--color-gray-300)]"></div>
                  
                  <div>
                    <Link 
                      href="/platform" 
                      className="group inline-flex items-center text-left gap-3 text-sm font-bold tracking-[0.1em] text-white uppercase hover:text-[var(--color-navy-950)] transition-colors bg-[var(--color-navy-950)] border border-[var(--color-navy-950)] pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[var(--color-green-400)]"
                    >
                      <span className="whitespace-nowrap">Explore Platform</span>
                      <span className="relative overflow-hidden w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white/20 group-hover:bg-white/30 rounded-full transition-colors">
                        <ArrowUpRight className="w-4 h-4 absolute group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-transform duration-300" />
                        <ArrowUpRight className="w-4 h-4 absolute -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Content - Editorial Bento Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 md:gap-6">
                  {/* Stat Card 1 - Dark */}
                  <div className="aspect-square bg-[var(--color-navy-950)] p-6 md:p-8 flex flex-col justify-between rounded-[16px] group hover:bg-[var(--color-navy-900)] transition-colors shadow-lg">
                    <div className="flex justify-end">
                      <Shield className="size-6 text-[var(--color-green-500)] opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
                        99.9<span className="text-3xl ml-1 text-[var(--color-green-500)]">%</span>
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-gray-400)] uppercase tracking-wider leading-snug">
                        System Uptime<br/>Reliability
                      </p>
                    </div>
                  </div>
                  
                  {/* Image 1 - Landscape */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-[var(--color-gray-100)] rounded-[16px] group shadow-lg">
                    <Image 
                      src="https://res.cloudinary.com/dmghhstx4/image/upload/v1779803660/pexels-sergey-sergeev-2153675005-32845698_zwiz1s.jpg" 
                      alt="OpsFlo Software in the field" 
                      fill 
                      className="object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 to-transparent mix-blend-multiply"></div>
                  </div>
                </div>

                {/* Column 2 - Staggered */}
                <div className="flex flex-col gap-4 md:gap-6 pt-12 md:pt-24">
                  {/* Image 2 - Landscape */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-[var(--color-gray-100)] rounded-[16px] group shadow-lg">
                    <Image 
                      src="https://res.cloudinary.com/dmghhstx4/image/upload/v1779799691/pexels-janzakelj-16862261_di1bfo.jpg" 
                      alt="Field Operation" 
                      fill 
                      className="object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 to-transparent mix-blend-multiply"></div>
                  </div>

                  {/* Stat Card 2 - Highlight */}
                  <div className="aspect-square bg-[var(--color-green-500)] p-6 md:p-8 flex flex-col justify-between rounded-[16px] group hover:bg-[var(--color-green-400)] transition-colors shadow-lg">
                    <div className="flex justify-end">
                      <Target className="size-6 text-[var(--color-navy-950)] opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-navy-950)] mb-2">
                        &lt;4<span className="text-3xl ml-1">hr</span>
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-navy-900)] uppercase tracking-wider leading-snug">
                        Average Billing<br/>Cycle Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Operator Validation Section - Swiss Style Carousel */}
        <section className="py-24 md:py-32 bg-[var(--color-navy-950)] relative border-t border-[var(--color-navy-900)] overflow-hidden">
          <Container>
            {/* Swiss Style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              
              {/* Left Column: Title and Context */}
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-[var(--color-navy-900)] px-4 py-1.5 mb-8 shadow-sm self-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                      Operator Validation
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                    Built for the field.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-green-400)] to-[var(--color-green-600)] drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">Proven in<br />the dirt.</span>
                  </h2>
                </div>
                
                <div className="hidden md:block mt-16 pt-8 border-t-2 border-[var(--color-navy-800)] max-w-xs">
                  <p className="text-sm text-[var(--color-gray-400)] leading-relaxed font-medium">
                    OpsFlo is trusted by industrial operators who demand absolute precision, financial accountability, and seamless field execution.
                  </p>
                </div>
              </div>

              {/* Right Column: Carousel */}
              <div className="md:col-span-8 flex flex-col min-w-0">
                <TestimonialCarousel />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA - Editorial Magazine Style */}
        <section className="bg-[var(--color-gray-50)] py-32 border-t border-[var(--color-navy-200)] relative overflow-hidden">
          {/* Background UI Elements */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-[0.03] text-[var(--color-navy-900)]">
            <svg className="w-full h-full min-w-[1200px]" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="industrial-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#industrial-grid)" />
              <circle cx="80%" cy="50%" r="300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" />
              <circle cx="80%" cy="50%" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="20%" cy="20%" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
          </div>
          
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
              
              {/* Left Side: Editorial Typography */}
              <div className="max-w-3xl">
                {/* Section Marker */}
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-4 py-1.5 mb-8 shadow-sm self-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-[var(--color-navy-900)] uppercase">The Next Step</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-[1.1] text-balance">
                  Stop guessing. <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-green-500)] to-[var(--color-green-700)]">Start building.</span>
                </h2>
                
                <p className="mt-8 text-xl md:text-2xl text-[var(--color-gray-600)] font-medium leading-snug max-w-2xl">
                  OpsFlo is the single source of truth for industrial operators. Stop losing revenue to disconnected field data and turn your operations into a unified, high-margin engine.
                </p>
              </div>

              {/* Right Side: High Contrast Buttons */}
              <div className="w-full lg:w-[420px] flex flex-col gap-4 lg:border-l-2 border-[var(--color-navy-900)] lg:pl-12 relative z-20">
                <Link 
                  href="/contact" 
                  className="group flex items-center justify-between w-full bg-[var(--color-navy-950)] text-white p-6 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-colors duration-300"
                >
                  <span className="text-lg font-bold tracking-tight">Get a Revenue Diagnostic</span>
                  <ArrowRight className="size-6 shrink-0 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link 
                  href="/careers" 
                  className="group flex items-center justify-between w-full bg-white border-2 border-[var(--color-navy-200)] text-[var(--color-navy-950)] p-6 hover:border-[var(--color-navy-950)] transition-all duration-300"
                >
                  <span className="text-lg font-bold tracking-tight">View Open Roles</span>
                  <ArrowRight className="size-6 shrink-0 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
