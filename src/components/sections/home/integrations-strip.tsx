"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { HOME } from "@/lib/content/home";
import { INTEGRATIONS } from "@/lib/content/integrations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IntegrationsStrip() {
  const { integrationsStrip } = HOME;
  
  // Use all integrations that have a logo
  const validIntegrations = INTEGRATIONS.filter(i => i.logo);
  
  // Split into two rows for dense Swiss aesthetic
  const midPoint = Math.ceil(validIntegrations.length / 2);
  const row1 = validIntegrations.slice(0, midPoint);
  const row2 = validIntegrations.slice(midPoint);

  // Triplicate arrays to create a seamless infinite loop with framer motion
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 md:py-16 border-y border-slate-200">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333333%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}} />
      
      {/* Swiss Style Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            {/* Minimalist Top Indicator */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-slate-300"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                Integration Ecosystem
              </span>
            </div>
            {/* Enhanced Dual Color Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Plug into your <br className="hidden md:block" />
              <span className="text-[var(--color-green-500)]">existing tech stack</span>
            </h2>
          </div>
          
          <Link 
            href="/integrations" 
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-[var(--color-green-500)] pb-1 border-b-2 border-slate-900 hover:border-[var(--color-green-500)] whitespace-nowrap self-start md:self-auto"
          >
            Explore all integrations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>

      {/* Marquee Area */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-8">
        {/* Left/Right Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 md:w-56 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 md:w-56 bg-gradient-to-l from-slate-50 to-transparent" />

        {/* Row 1 (Moves Left) */}
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20 animate-marquee-left hover:[animation-play-state:paused]">
            {marqueeRow1.map((item, idx) => (
              <div 
                key={`r1-${item.name}-${idx}`} 
                className="flex flex-col items-center justify-center w-20 md:w-28 gap-3 shrink-0 group cursor-default"
              >
                <div className="flex items-center justify-center h-8 md:h-10 w-full opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={80}
                    height={32}
                    className="h-full w-auto object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                </div>
                <span className="text-[11px] md:text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-700 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Moves Right) */}
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20 animate-marquee-right hover:[animation-play-state:paused]">
            {marqueeRow2.map((item, idx) => (
              <div 
                key={`r2-${item.name}-${idx}`} 
                className="flex flex-col items-center justify-center w-20 md:w-28 gap-3 shrink-0 group cursor-default"
              >
                <div className="flex items-center justify-center h-8 md:h-10 w-full opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={80}
                    height={32}
                    className="h-full w-auto object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                </div>
                <span className="text-[11px] md:text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-700 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
