"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";

function fmt(n: number) {
  return n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(1)}M`
    : n >= 1_000
      ? `$${(n / 1_000).toFixed(0)}K`
      : `$${n.toLocaleString()}`;
}

function SliderInput({
  label,
  hint,
  min,
  max,
  step = 1,
  value,
  onChange,
  format,
}: {
  label: string;
  hint: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div className="border-2 border-[var(--color-navy-950)] bg-white p-3 md:p-4 shadow-[4px_4px_0px_0px_var(--color-navy-950)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--color-green-500)]">
      <div className="mb-2 md:mb-3 flex flex-wrap sm:flex-nowrap items-start justify-between gap-2">
        <div>
          <div
            className="text-sm font-black uppercase tracking-tight text-[var(--color-navy-950)] leading-none"
            style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
          >
            {label}
          </div>
          <div className="mt-1.5 text-xs font-medium text-[var(--color-gray-600)] leading-none">
            {hint}
          </div>
        </div>
        <div
          className="shrink-0 rounded-none border-2 border-[var(--color-navy-950)] bg-[var(--color-green-400)] px-2 py-1 text-xs md:text-sm font-black text-[var(--color-navy-950)] shadow-[2px_2px_0px_0px_var(--color-navy-950)]"
          style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
        >
          {format(value)}
        </div>
      </div>
      <div className="relative mt-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:border-2 [&::-webkit-slider-runnable-track]:border-[var(--color-navy-950)] [&::-webkit-slider-runnable-track]:bg-[var(--color-gray-100)] [&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-navy-950)] [&::-webkit-slider-thumb]:bg-[var(--color-green-500)] [&::-webkit-slider-thumb]:transition-colors hover:[&::-webkit-slider-thumb]:bg-[var(--color-green-400)]"
        />
        <div className="mt-1 flex justify-between text-[10px] md:text-xs font-bold uppercase text-[var(--color-navy-950)]">
          <span>{format(min)}</span>
          <span>{format(max)}</span>
        </div>
      </div>
    </div>
  );
}



export default function ROICalculatorClient() {
  const [crews, setCrews] = useState(10);
  const [monthlyJobs, setMonthlyJobs] = useState(200);
  const [avgTicket, setAvgTicket] = useState(2500);
  const [billingDays, setBillingDays] = useState(30);
  const [missedPct, setMissedPct] = useState(8);

  const results = useMemo(() => {
    const annualRevenue = monthlyJobs * avgTicket * 12;
    const revenueAtRisk = annualRevenue * (missedPct / 100);
    const billingReduction = Math.max(1, Math.round(billingDays * 0.15));
    const recoveredRevenue = revenueAtRisk * 0.9;
    const annualCost = crews * 150 * 12;
    const roi = annualCost > 0 ? Math.round((recoveredRevenue / annualCost) * 100) : 0;
    const paybackMonths =
      recoveredRevenue > 0
        ? Math.max(1, Math.round((annualCost / recoveredRevenue) * 12))
        : 0;
    return {
      annualRevenue,
      revenueAtRisk,
      billingReduction,
      recoveredRevenue,
      roi,
      paybackMonths,
    };
  }, [crews, monthlyJobs, avgTicket, billingDays, missedPct]);

  return (
    <>
      <SiteHeader />
      <PageBanner title="ROI Calculator" />

      <main className="flex-1 bg-white">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b-2 border-[var(--color-navy-950)] bg-white py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 border-2 border-[var(--color-navy-950)] bg-[var(--color-green-400)] px-4 py-2 shadow-[4px_4px_0px_0px_var(--color-navy-950)]">
                  <span className="flex size-2 shrink-0 bg-[var(--color-navy-950)]" />
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--color-navy-950)]">
                    Interactive ROI Calculator
                  </span>
                </div>

                <h1
                  className="mb-6 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">Calculate Your</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Revenue at Risk.</span>
                </h1>
                <p className="max-w-xl text-lg font-medium leading-relaxed text-[var(--color-gray-600)] md:text-xl">
                  Enter your operational data below. In 60 seconds, see exactly how much revenue you&apos;re leaving on the table — and what OpsFlo can recover for your business.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-0 border-2 border-[var(--color-navy-950)] bg-white shadow-[6px_6px_0px_0px_var(--color-green-500)]">
                  {[
                    { value: "5-15%", label: "Revenue Recovered" },
                    { value: "85%", label: "Faster Billing" },
                    { value: "3-6mo", label: "Avg. Payback" },
                  ].map((s, i) => (
                    <div key={s.label} className={`p-4 text-center ${i < 2 ? "border-r-2 border-[var(--color-navy-950)]" : ""}`}>
                      <div className="text-xl font-black text-[var(--color-navy-950)]" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-widest text-[var(--color-gray-600)]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-square md:aspect-video lg:aspect-square w-full overflow-hidden border-2 border-[var(--color-navy-950)] shadow-[8px_8px_0px_0px_var(--color-green-500)]">
                <Image
                  src="/images/hero/refinery-tower.jpg"
                  alt="Oilfield operations facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ── CALCULATOR ── */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]">
          <Container className="max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                  
              {/* Sliders Column */}
              <div className="space-y-6">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-4 w-4 shrink-0 block border-2 border-[var(--color-navy-950)] bg-[var(--color-green-400)]" />
                  <span className="text-base font-black uppercase tracking-widest text-[var(--color-navy-950)]">
                    Your Operation
                  </span>
                  <div className="h-px flex-1 bg-[var(--color-navy-950)]/20" />
                </div>

                <div className="grid gap-3 md:gap-4">
                  <SliderInput
                    label="Field Crews"
                    hint="Total number of active field crews"
                    min={1}
                    max={100}
                    value={crews}
                    onChange={setCrews}
                    format={(v) => `${v} crews`}
                  />
                  <SliderInput
                    label="Monthly Jobs / Tickets"
                    hint="Average field tickets or jobs per month"
                    min={10}
                    max={2000}
                    step={10}
                    value={monthlyJobs}
                    onChange={setMonthlyJobs}
                    format={(v) => `${v}`}
                  />
                  <SliderInput
                    label="Average Ticket Value"
                    hint="Average value per field ticket or job"
                    min={100}
                    max={25000}
                    step={100}
                    value={avgTicket}
                    onChange={setAvgTicket}
                    format={(v) => `$${v.toLocaleString()}`}
                  />
                  <SliderInput
                    label="Current Billing Cycle"
                    hint="Days from job completion to invoice sent"
                    min={1}
                    max={90}
                    value={billingDays}
                    onChange={setBillingDays}
                    format={(v) => `${v} days`}
                  />
                  <SliderInput
                    label="Missed/Incomplete Tickets"
                    hint="% of jobs not properly billed or documented"
                    min={1}
                    max={25}
                    value={missedPct}
                    onChange={setMissedPct}
                    format={(v) => `${v}%`}
                  />
                </div>
                
                {/* How we calculate */}
                <div className="mt-8 border-2 border-[var(--color-navy-950)] bg-white p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--color-navy-950)]">
                  <p className="mb-6 text-sm font-black uppercase tracking-widest text-[var(--color-navy-950)] border-b-2 border-[var(--color-navy-950)] pb-4">
                    How We Calculate This
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 text-sm font-medium text-[var(--color-gray-600)]">
                    <div>
                      <span className="font-black text-[var(--color-navy-950)]">Revenue at risk</span> = annual revenue × missed ticket %
                    </div>
                    <div>
                      <span className="font-black text-[var(--color-navy-950)]">Recovery</span> = revenue at risk × 90% (average)
                    </div>
                    <div>
                      <span className="font-black text-[var(--color-navy-950)]">Billing cycle</span> = reduced 85% with digital tracking
                    </div>
                    <div>
                      <span className="font-black text-[var(--color-navy-950)]">ROI</span> = recovery ÷ estimated platform cost
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Preview Column (Sticky) */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)]" />
                  <span className="text-base font-black uppercase tracking-widest text-[var(--color-navy-950)]">
                    Live Preview
                  </span>
                  <div className="h-px flex-1 bg-[var(--color-navy-950)]/20" />
                </div>

                <div className="border-2 border-[var(--color-navy-950)] bg-[var(--color-navy-950)] shadow-[8px_8px_0px_0px_var(--color-green-500)] flex flex-col transition-all">
                  <div className="p-6 md:p-8 space-y-8">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1">
                        Annual Revenue At Risk
                      </div>
                      <div className="text-5xl font-black text-red-500 tracking-tighter" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                        {fmt(results.revenueAtRisk)}
                      </div>
                    </div>

                    <div className="h-0.5 w-full bg-[var(--color-navy-800)]" />

                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1">
                        Projected Recovery
                      </div>
                      <div className="text-5xl font-black text-[var(--color-green-400)] tracking-tighter" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                        {fmt(results.recoveredRevenue)}
                      </div>
                    </div>

                    <div className="h-0.5 w-full bg-[var(--color-navy-800)]" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1">
                          New Billing Cycle
                        </div>
                        <div className="text-3xl font-black text-white tracking-tighter" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                          {results.billingReduction} Days
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1">
                          Payback Period
                        </div>
                        <div className="text-3xl font-black text-white tracking-tighter" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                          {results.paybackMonths} {results.paybackMonths === 1 ? "Mo" : "Mos"}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1">
                        Projected ROI
                      </div>
                      <div className="text-3xl font-black text-[var(--color-green-400)] tracking-tighter" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                        {results.roi}%
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/contact?crews=${crews}&jobs=${monthlyJobs}&ticket=${avgTicket}`}
                    className="group flex items-center justify-between bg-[var(--color-green-500)] px-6 py-6 text-sm font-black uppercase tracking-wide text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)] border-t-2 border-[var(--color-navy-950)]"
                  >
                    <span>Get Your Real Number</span>
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
            </div>
          </Container>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="relative overflow-hidden border-t-2 border-[var(--color-navy-950)] bg-white py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2
                  className="text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-6xl"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">The Number</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Is Bigger Than You Think.</span>
                </h2>
                <p className="mt-6 text-lg font-medium leading-relaxed text-[var(--color-gray-600)]">
                  This calculator uses conservative industry averages. A personalized diagnostic with your actual data almost always reveals a larger gap. Let us show you the real number.
                </p>
              </div>
              <div className="flex w-full flex-col gap-4 lg:w-auto">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between border-2 border-[var(--color-navy-950)] bg-[var(--color-green-500)] px-8 py-5 text-sm font-black uppercase tracking-widest text-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-navy-950)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-[var(--color-green-400)] hover:shadow-[8px_8px_0px_0px_var(--color-navy-950)]"
                >
                  <span>Get Your Real Number</span>
                  <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href="/case-studies"
                  className="group flex items-center justify-between border-2 border-[var(--color-navy-950)] bg-white px-8 py-5 text-sm font-black uppercase tracking-widest text-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-green-500)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-[var(--color-gray-50)] hover:shadow-[8px_8px_0px_0px_var(--color-green-500)]"
                >
                  <span>See Customer Proof</span>
                  <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
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
