import type { Metadata } from "next";
import Image from "next/image";
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

  // Merge Sanity data with local authoritative list
  const localMap = new Map(INTEGRATIONS.map(i => [i.name.toLowerCase(), i]));
  const finalIntegrations: Integration[] = [...INTEGRATIONS];

  if (sanityIntegrations && sanityIntegrations.length > 0) {
    sanityIntegrations.forEach((si) => {
      if (!localMap.has(si.name.toLowerCase())) {
        finalIntegrations.push({
          name: si.name,
          category: si.category,
          description: si.description,
          logo: si.logo ?? "",
        });
      }
    });
  }

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
        <section className="relative z-10 py-16 md:py-24 lg:py-32 border-b border-[var(--color-border)] bg-transparent">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="max-w-xl mx-auto text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green-500)] mb-4 inline-block">
                  Seamless Connectivity
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-navy-950)] mb-6">
                  Integrate with <span className="text-[var(--color-green-500)]">other systems</span>
                </h1>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
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

        <section className="relative z-10 py-16 md:py-24 bg-white">
          <Container>
            {/* Header Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy-950)] mb-6">
                Explore <span className="text-[var(--color-green-500)]">all integrations</span>
              </h2>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
                Use this list to see if your software is on the list or to research potential partners for future use.
              </p>
            </div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[1000px] mx-auto">
              {finalIntegrations.map((item) => (
                <div 
                  key={item.name} 
                  className="bg-white border border-[var(--color-border)] rounded-sm p-6 md:p-8 flex flex-col items-center text-center hover:border-[var(--color-green-400)] hover:shadow-md transition-all duration-300 group relative z-10"
                >
                  <div className="mb-5 h-12 w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    {item.logo ? (
                      <Image 
                        src={item.logo} 
                        alt={item.name} 
                        width={100}
                        height={40}
                        className="object-contain max-h-10 w-auto" 
                        unoptimized 
                      />
                    ) : (
                      <span className="text-lg font-bold text-[var(--color-navy-700)]">{item.name}</span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-navy-950)] mb-2 group-hover:text-[var(--color-navy-800)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed flex-1 max-w-[260px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 md:mt-24 max-w-[1200px] mx-auto relative">
              <div className="relative rounded-[2rem] border border-[var(--color-border)] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                
                {/* Moving Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  <div className="absolute -top-[50%] -right-[25%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[var(--color-green-100)] to-transparent opacity-80 blur-[120px] animate-[spin_40s_linear_infinite]" />
                  <div className="absolute -bottom-[50%] -left-[25%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[var(--color-navy-50)] to-transparent opacity-90 blur-[100px] animate-[spin_30s_linear_infinite_reverse]" />
                </div>

                {/* Unique Watermark Logo */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-end z-0">
                  <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px] translate-x-[20%] md:translate-x-[30%] opacity-[0.03] grayscale">
                    <Image src="/OpsFloIcon.png" alt="" fill className="object-contain animate-[spin_90s_linear_infinite]" />
                  </div>
                </div>

                <div className="relative z-10 py-16 md:py-24 px-6 sm:px-12 flex flex-col items-center text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-navy-950)] mb-6 max-w-3xl mx-auto">
                    Unify your <span className="text-[var(--color-green-500)]">tech stack</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
                    Stop jumping between tools. See how OpsFlo integrates with your existing software to eliminate double data entry and create a single source of truth for your field operations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
                    <CTARow 
                      primary={{ label: "Request a Demo", href: "/contact" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}