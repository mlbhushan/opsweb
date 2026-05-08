import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp, Users, Target } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
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

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-start border-t border-[var(--color-gray-200)] pt-20">
              {/* Left Side: Big Number */}
              <div className="relative flex flex-col items-start gap-0 lg:border-r border-[var(--color-gray-200)] lg:pr-20 pb-12 lg:pb-0">
                <div className="hidden lg:inline-flex mb-8 items-center rounded-full border border-[var(--color-navy-800)]/20 px-4 py-2">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] mr-3"></span>
                  <span className="text-sm font-semibold tracking-widest text-[var(--color-navy-950)] uppercase">Who Are We?</span>
                </div>
                
                <div className="relative inline-block">
                  <span 
                    className="text-[var(--color-navy-950)] leading-[0.8] tracking-tighter"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif", fontSize: "250px", fontWeight: 600 }}
                  >
                    2M+
                  </span>
                  <div className="absolute right-0 bottom-[-8px] flex gap-2">
                    <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                      FIELD TICKETS
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                      PROCESSED
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="relative size-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                        <Image
                          src={`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=100&q=80&sig=${i}`}
                          alt={`Operator ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-[11px] font-bold leading-snug tracking-wide text-[var(--color-navy-950)] uppercase">
                    TRUSTED BY HUNDREDS OF <br />
                    <span className="opacity-70">SKILLED OPERATORS</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Text & Image */}
              <div className="lg:pl-20 flex flex-col pt-8 lg:pt-4">
                <div className="mb-10 text-lg leading-relaxed text-[var(--color-gray-600)]">
                  <p>
                    {hero.body} Our founders spent years managing field operations across Western Canada. They saw the same pattern everywhere: operators used 3 to 5 disconnected tools, lost revenue to missed field tickets, and dealt with billing cycles measured in weeks instead of hours.
                  </p>
                </div>
                
                <div className="relative aspect-[21/10] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="OpsFlo field operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
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
        <section className="bg-[var(--color-navy-950)] text-white py-20 md:py-32 relative overflow-hidden">
          {/* Subtle grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50"></div>
          
          {/* Glow effect */}
          <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] bg-[var(--color-green-500)]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <Container className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-green-600)]/30 px-4 py-2">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] mr-3"></span>
                  <span className="text-sm font-semibold tracking-widest text-[var(--color-green-50)] uppercase">Strategic Pillars</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-white">
                  Our <span className="text-[var(--color-green-500)]">Core Beliefs</span>
                </h2>
              </div>
              <div className="max-w-md pb-2">
                <p className="text-lg md:text-xl font-light text-[var(--color-gray-300)] leading-relaxed">
                  We are driven by principles forged in the field, not the boardroom. Zero compromises. Zero excuses. Just a relentless focus on protecting your revenue and empowering your crew.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {[
                {
                  id: "01",
                  title: "Execution Over Aspiration",
                  description: "Promises don't haul fluid or service wells. Execution does. We trade empty corporate speak for relentless reliability. When your crew needs our system to work, it works. No excuses."
                },
                {
                  id: "02",
                  title: "Built for the Frontlines",
                  description: "We respect the gritty reality of the oilfield. If software can't survive dead zones, harsh environments, and grueling shifts, it doesn't belong in your operators' hands. We build tools for the dirt, not the desk."
                },
                {
                  id: "03",
                  title: "Defending Your Margins",
                  description: "Every drop of sweat your team expends should translate to a paid invoice. We build systems that catch missed tickets, eliminate leakage, and ensure you never leave hard-earned revenue on the table."
                },
                {
                  id: "04",
                  title: "Guided by the Field",
                  description: "Our roadmap isn't written in a boardroom. It's built alongside the people wearing hard hats. We listen to your dispatchers and your drivers, adapting our software to solve the exact bottlenecks holding your business back."
                }
              ].map((value, idx) => (
                <div key={idx} className="group relative flex flex-col pt-8 border-t-2 border-[var(--color-navy-800)] hover:border-[var(--color-green-500)] transition-colors duration-500 cursor-default">
                  <div 
                    className="text-5xl md:text-6xl tracking-tighter text-[var(--color-navy-800)] group-hover:text-[var(--color-green-500)] transition-colors duration-500 mb-6 leading-none"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif", fontWeight: 700 }}
                  >
                    {value.id}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold uppercase tracking-tight mb-4 text-white group-hover:text-[var(--color-green-400)] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-gray-400)] font-light leading-relaxed group-hover:text-[var(--color-gray-200)] transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50"></div>
          
          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="mb-8 inline-flex items-center rounded-full border border-[var(--color-navy-200)] px-4 py-2 bg-white">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] mr-3"></span>
                  <span className="text-sm font-semibold tracking-widest text-[var(--color-navy-900)] uppercase">Origin Story</span>
                </div>
                
                <h2 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-[var(--color-navy-950)]">
                  BORN IN THE <span className="text-[var(--color-green-500)]">DIRT.</span><br />
                  BUILT FOR SCALE.
                </h2>

                <div className="space-y-6 text-lg md:text-xl font-light text-[var(--color-gray-600)] leading-relaxed mb-12">
                  <p className="font-medium text-[var(--color-navy-900)]">
                    Generic software breaks when it hits the oilfield. We know, because we lived it.
                  </p>
                  <p>
                    We built OpsFlo because we were tired of offline dead zones, complex jobs forced into spreadsheets, and 30-day delays on invoicing. Today, we turn field chaos into a reliable engine for scale and profit.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-6xl tracking-tighter text-[var(--color-navy-950)]" style={{ fontFamily: "'TASA Orbiter', sans-serif", fontWeight: 700 }}>500</span>
                      <span className="text-4xl font-bold text-[var(--color-green-500)]">+</span>
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                      Active Fleets Powered
                    </p>
                  </div>
                  
                  <div className="hidden sm:block w-px h-16 bg-[var(--color-gray-200)]"></div>
                  
                  <div>
                    <Link href="/platform" className="inline-flex items-center justify-center bg-[var(--color-navy-950)] text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm transition-all hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] group">
                      Explore Platform
                      <ArrowRight className="size-4 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Content - Editorial Bento Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 md:gap-6">
                  {/* Stat Card 1 - Dark */}
                  <div className="aspect-square bg-[var(--color-navy-950)] p-6 md:p-8 flex flex-col justify-between border-2 border-[var(--color-navy-950)] group hover:border-[var(--color-green-500)] transition-colors shadow-[8px_8px_0px_0px_var(--color-green-500)]">
                    <div className="flex justify-end">
                      <Shield className="size-6 text-[var(--color-green-500)] opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h3 className="text-5xl md:text-6xl tracking-tighter text-white mb-2" style={{ fontFamily: "'TASA Orbiter', sans-serif", fontWeight: 700 }}>
                        99.9<span className="text-3xl ml-1 text-[var(--color-green-500)]">%</span>
                      </h3>
                      <p className="text-xs font-bold text-[var(--color-gray-400)] uppercase tracking-widest leading-snug">
                        System Uptime<br/>Reliability
                      </p>
                    </div>
                  </div>
                  
                  {/* Image 1 - Tall */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-[var(--color-gray-100)] border-2 border-[var(--color-navy-950)] group">
                    <Image 
                      src="/images/services/services-1.jpg" 
                      alt="OpsFlo Software in the field" 
                      fill 
                      className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 to-transparent mix-blend-multiply"></div>
                  </div>
                </div>

                {/* Column 2 - Staggered */}
                <div className="flex flex-col gap-4 md:gap-6 pt-12 md:pt-24">
                  {/* Image 2 - Tall */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-[var(--color-gray-100)] border-2 border-[var(--color-navy-950)] group">
                    <Image 
                      src="/images/services/services-2.jpg" 
                      alt="Field Operation" 
                      fill 
                      className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 to-transparent mix-blend-multiply"></div>
                  </div>

                  {/* Stat Card 2 - Highlight */}
                  <div className="aspect-square bg-[var(--color-green-500)] p-6 md:p-8 flex flex-col justify-between border-2 border-[var(--color-navy-950)] group hover:bg-[var(--color-green-400)] transition-colors shadow-[8px_8px_0px_0px_var(--color-navy-950)]">
                    <div className="flex justify-end">
                      <Target className="size-6 text-[var(--color-navy-950)] opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h3 className="text-5xl md:text-6xl tracking-tighter text-[var(--color-navy-950)] mb-2" style={{ fontFamily: "'TASA Orbiter', sans-serif", fontWeight: 700 }}>
                        &lt;4<span className="text-3xl ml-1">hr</span>
                      </h3>
                      <p className="text-xs font-bold text-[var(--color-navy-900)] uppercase tracking-widest leading-snug">
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
                  <div className="flex items-center gap-4 mb-8">
                    <span className="h-4 w-4 bg-[var(--color-green-500)] block"></span>
                    <h3 className="text-xs font-bold text-[var(--color-gray-400)] uppercase tracking-widest m-0">
                      Operator Validation
                    </h3>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance uppercase">
                    Built for the <span className="text-[var(--color-green-500)]">field.</span><br />Proven in the <span className="text-[var(--color-green-500)]">dirt.</span>
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
                <div className="mb-8 inline-flex items-center rounded-full border border-[var(--color-navy-200)] px-4 py-2 bg-white shadow-sm">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] mr-3"></span>
                  <span className="text-sm font-semibold tracking-widest text-[var(--color-navy-900)] uppercase">The Next Step</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-navy-950)] leading-[0.9] tracking-tighter text-balance">
                  Stop guessing. <br className="hidden md:block"/>
                  <span className="text-[var(--color-green-500)]">Start building.</span>
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
