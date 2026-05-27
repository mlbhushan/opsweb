import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CTARow } from "@/components/ui/cta-row";
import { sanityFetch } from "@/sanity/lib/fetch";
import { INTEGRATIONS_QUERY } from "@/sanity/lib/queries";
import { INTEGRATIONS, type Integration } from "@/lib/content/integrations";

export const metadata: Metadata = buildMetadata({
  title: "Integrations",
  description:
    "Connect OpsFlo with your accounting, ERP, ticketing, and communication tools for seamless field operations and data flow.",
  path: "/integrations",
});

type SanityIntegration = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  logo: string | null;
  url: string | null;
};

export default async function IntegrationsPage() {
  const sanityIntegrations = await sanityFetch<SanityIntegration[]>({
    query: INTEGRATIONS_QUERY,
    tags: ["integration"],
  });

  // Local list is the single source of truth — Sanity cannot add extra cards
  const finalIntegrations: Integration[] = [...INTEGRATIONS];

  return (
    <>
      <SiteHeader />
      <PageBanner title="Integrations" />
      <main className="flex-1 bg-[var(--color-bg-primary)] relative overflow-hidden">
        {/* Subtle moving background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center z-0">
          <div className="absolute top-[5%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-[var(--color-green-400)] opacity-5 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute top-[40%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-navy-500)] opacity-5 blur-[120px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-[10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-[var(--color-green-500)] opacity-[0.03] blur-[100px] animate-[pulse_10s_ease-in-out_infinite]" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-16 md:py-24 lg:py-32 border-b border-[var(--color-gray-200)] bg-transparent">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="max-w-xl mx-auto text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-5 py-2 shadow-sm">
                  <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    Seamless Connectivity
                  </span>
                </div>
                <h1 
                  className="mb-6 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">Integrate with</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">other systems.</span>
                </h1>
                <p className="text-lg md:text-xl font-medium text-[var(--color-gray-600)] mb-8 leading-relaxed">
                  OpsFlo integrates with other software systems, eliminating the need for data entry from one platform to another.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <CTARow primary={{ label: "Get a demo", href: "/contact" }} />
                </div>
              </div>

              {/* Right Content - Orbit Animation */}
              <div className="relative flex items-center justify-center min-h-[350px] sm:min-h-[450px] lg:min-h-[500px]">
                {/* Glow behind center */}
                <div className="absolute w-48 h-48 bg-[var(--color-green-400)] rounded-full blur-[80px] opacity-20" />
                
                {/* Central Logo */}
                <div className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-xl border border-[var(--color-border)] flex items-center justify-center p-4">
                  <Image src="/OpsFloIcon.png" alt="OpsFlo" width={64} height={64} className="object-contain w-full h-full" priority />
                </div>

                {/* Orbit 1 (Inner) */}
                <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px]">
                  <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                    <div className="absolute inset-0 rounded-full border border-[var(--color-border)] border-dashed opacity-60" />
                    {finalIntegrations.filter(i => i.logo).slice(0, 3).map((item, i) => {
                      const angle = i * (360 / 3);
                      return (
                        <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                          <div className="absolute top-0 left-1/2 -ml-5 -mt-5 w-10 h-10">
                            <div className="w-full h-full" style={{ transform: `rotate(-${angle}deg)` }}>
                              <div className="w-full h-full animate-[spin_25s_linear_infinite_reverse] bg-white rounded-full shadow-md border border-[var(--color-border)] flex items-center justify-center p-2 hover:scale-110 transition-transform">
                                <Image src={item.logo!} alt={item.name} width={24} height={24} className="object-contain" unoptimized />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Orbit 2 (Outer) */}
                <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                  <div className="absolute inset-0 animate-[spin_40s_linear_infinite_reverse]">
                    <div className="absolute inset-0 rounded-full border border-[var(--color-border)] opacity-60" />
                    {finalIntegrations.filter(i => i.logo).slice(3, 8).map((item, i) => {
                      const angle = i * (360 / 5);
                      return (
                        <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                          <div className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12">
                            <div className="w-full h-full" style={{ transform: `rotate(-${angle}deg)` }}>
                              <div className="w-full h-full animate-[spin_40s_linear_infinite] bg-white rounded-full shadow-lg border border-[var(--color-border)] flex items-center justify-center p-2.5 hover:scale-110 transition-transform">
                                <Image src={item.logo!} alt={item.name} width={32} height={32} className="object-contain" unoptimized />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Orbit 3 (Outermost, purely decorative) */}
                <div className="absolute w-[400px] h-[400px] sm:w-[540px] sm:h-[540px]">
                  <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                    <div className="absolute inset-0 rounded-full border border-[var(--color-border)] opacity-40 border-dashed" />
                    {[0, 1, 2].map((i) => {
                      const angle = i * (360 / 3) + 45;
                      return (
                        <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                          <div className="absolute top-0 left-1/2 -ml-1.5 -mt-1.5 w-3 h-3 bg-[var(--color-green-300)] rounded-full" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative z-10 py-16 md:py-24 bg-[var(--color-gray-50)]">
          <Container>
            {/* Header Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto px-4">
              <h2 
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[var(--color-navy-950)] mb-6 leading-tight"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                <span className="text-[var(--color-navy-950)]">Explore</span>{" "}
                <span className="text-[var(--color-green-500)]">all integrations</span>
              </h2>
              <p className="text-base md:text-lg font-medium text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
                Use this list to see if your software is on the list or to research potential partners for future use.
              </p>
            </div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
              {finalIntegrations.map((item) => (
                <div 
                  key={item.name} 
                  className="bg-white border border-[var(--color-gray-200)] rounded-3xl p-8 flex flex-col items-start text-left hover:border-[var(--color-green-400)] shadow-sm hover:shadow-md transition-all duration-300 group relative z-10 hover:-translate-y-1"
                >
                  <div className="mb-8 h-12 w-full flex items-center justify-start">
                    {item.logo ? (
                      <Image 
                        src={item.logo} 
                        alt={item.name} 
                        width={140}
                        height={48}
                        className="object-contain h-full w-auto max-w-[140px] opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" 
                        unoptimized 
                      />
                    ) : (
                      <span className="text-lg font-black uppercase tracking-tight text-[var(--color-navy-950)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{item.name}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[var(--color-navy-950)] mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-gray-500)] leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </Container>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="relative overflow-hidden border-t border-[var(--color-gray-200)] bg-[var(--color-navy-950)] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-800)] bg-[var(--color-navy-900)] px-4 py-1.5 mb-6 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Take Action
                  </span>
                </div>
                <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-[1.05] mb-8 text-balance">
                  <span className="text-white">Unify Your</span>
                  <br className="hidden sm:block" />
                  <span className="text-[var(--color-green-500)]">Tech Stack.</span>
                </h2>
                <p className="mt-6 text-base font-medium leading-relaxed text-[var(--color-gray-400)]">
                  Stop jumping between tools. See how OpsFlo integrates with your existing software to eliminate double data entry and create a single source of truth for your field operations.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-[380px]">
                <Link
                  href="/contact"
                  className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-6 py-5 text-sm font-bold tracking-widest text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)] uppercase"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/case-studies"
                  className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold tracking-widest text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-navy-900)] uppercase"
                >
                  <span>See Case Studies</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta2:translate-x-1" />
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
