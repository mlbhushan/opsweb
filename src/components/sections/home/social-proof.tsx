"use client";

import { Container } from "@/components/ui/container";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export function SocialProof() {
  return (
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
  );
}
