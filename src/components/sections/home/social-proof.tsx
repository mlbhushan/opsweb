"use client";

import { Container } from "@/components/ui/container";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export function SocialProof() {
  return (
    <section className="py-20 md:py-24 bg-[var(--color-navy-950)] relative overflow-hidden">
      <Container>
        {/* Modern Grid */}
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

            <div className="hidden md:block mt-16 pt-8 border-t border-[var(--color-navy-800)] max-w-xs relative">
              {/* Subtle accent glow */}
              <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-[var(--color-green-500)] to-transparent -translate-y-px" />
              <p className="text-[15px] text-[var(--color-navy-300)] leading-relaxed font-light">
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
  );
}
