"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useCountUp(target: number, durationMs = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target, durationMs]);

  return { value, ref };
}

export function WhyChooseStats() {
  return (
    <section className="bg-white py-24 pb-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[200px_1fr] lg:gap-24 xl:gap-32">
        {/* Left Sidebar (Wireframe + Stats) */}
        <div className="flex flex-col gap-12 lg:gap-16 pt-8">
          {/* Wireframe Tower */}
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-28 w-28 text-gray-300 opacity-60">
             <path d="M50 10v60M30 70h40M45 40l-15-5 5-25M55 40l15-5-5-25M35 10h30M25 90l10-20M65 70l10 20M35 40H20M65 40h15" />
             <path d="M40 70c0 9 20 9 20 0M45 78v12M55 78v12" />
          </svg>

          <div className="flex flex-col gap-10">
            <StatCard target={25} suffix="+" label="Years of Experience" />
            <StatCard target={15} suffix="K" label="Completed Projects" />
            <StatCard target={99} suffix="%" label="Safety Compliance" />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col pt-8">
          {/* Pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-[#fafaf8] pr-5 py-1 mb-8 w-max shadow-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--brand-lime)] mt-px ml-1 border border-gray-100 shadow-sm">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-navy)]">Why Choose Us</span>
          </div>

          <h2 className="font-display text-[40px] font-semibold leading-[1.1] text-[var(--brand-navy)] sm:text-[48px] lg:text-[52px] tracking-tight">
            Your Trusted Source for <br />
            High-Performance <span className="script-accent text-[52px] lg:text-[64px] font-normal leading-[0.8] text-[var(--brand-lime)] relative -top-1 ml-1" style={{ paddingLeft: '0' }}>Energy Services</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-14">
            <div className="space-y-3">
              <h4 className="font-sans text-base font-semibold text-[var(--brand-navy)]">Powering Energy Safely</h4>
              <p className="text-[13px] leading-relaxed text-gray-500 font-medium">We deliver reliable and sustainable energy solutions across the oil and gas sector.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-sans text-base font-semibold text-[var(--brand-navy)]">Optimized Refining Solutions</h4>
              <p className="text-[13px] leading-relaxed text-gray-500 font-medium">We refine crude oil into high-quality fuels and petrochemicals.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-sans text-base font-semibold text-[var(--brand-navy)]">Fueling the Future</h4>
              <p className="text-[13px] leading-relaxed text-gray-500 font-medium">Energy that moves the world: efficient, safe, and reliable.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-sans text-base font-semibold text-[var(--brand-navy)]">Digital Oilfield Solutions</h4>
              <p className="text-[13px] leading-relaxed text-gray-500 font-medium">We implement IoT sensors, predictive analytics, and AI to optimize drilling, monitoring, and maintenance.</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="mt-14 overflow-hidden rounded-[40px] bg-gray-100 shadow-2xl relative h-[400px] w-full">
            <Image
              src="/images/hero/refinery-tower.jpg"
              alt="Refinery Operations"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div>
      <div className="font-display text-[52px] font-semibold leading-none text-[var(--brand-navy)]">
        <span ref={ref}>{value}</span>
        {suffix}
      </div>
      <div className="mt-3 text-[13px] font-semibold text-gray-500">{label}</div>
    </div>
  );
}
