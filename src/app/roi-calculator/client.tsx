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
    <div className="rounded-[20px] border border-[var(--color-gray-200)] bg-white p-3 md:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-navy-900)]/5 hover:border-[var(--color-green-400)]">
      <div className="mb-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
        <div>
          <div
            className="text-sm font-extrabold tracking-tight text-[var(--color-navy-950)] leading-none"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            {label}
          </div>
          <div className="mt-1.5 text-xs font-medium text-[var(--color-gray-600)] leading-none">
            {hint}
          </div>
        </div>
        <div
          className="shrink-0 rounded-full bg-[var(--color-navy-950)] px-3 py-1.5 text-sm md:text-base font-bold tracking-widest text-[var(--color-green-400)] shadow-sm"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {format(value)}
        </div>
      </div>
      <div className="relative mt-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[var(--color-gray-200)] [&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--color-green-500)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:scale-110 hover:[&::-webkit-slider-thumb]:bg-[var(--color-green-400)]"
        />
        <div className="mt-2 flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--color-gray-400)]">
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
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)] bg-white py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[var(--color-green-500)]/5 blur-[100px]" />
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-5 py-2 shadow-sm">
                  <span className="flex size-2 shrink-0 rounded-full bg-[var(--color-green-500)] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    Interactive ROI Calculator
                  </span>
                </div>

                <h1
                  className="mb-6 text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-7xl text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-navy-950)]">Calculate Your</span>
                  <br />
                  <span className="text-[var(--color-green-500)]">Revenue at Risk.</span>
                </h1>
                <p className="max-w-xl text-lg font-medium leading-relaxed text-[var(--color-gray-600)] md:text-xl">
                  Enter your operational data below. In 60 seconds, see exactly how much revenue you&apos;re leaving on the table — and what OpsFlo can recover for your business.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-0 rounded-[24px] border border-[var(--color-gray-200)] bg-white shadow-lg shadow-[var(--color-navy-900)]/5 overflow-hidden divide-x divide-[var(--color-gray-200)]">
                  {[
                    { value: "5-15%", label: "Revenue Recovered" },
                    { value: "85%", label: "Faster Billing" },
                    { value: "3-6mo", label: "Avg. Payback" },
                  ].map((s, i) => (
                    <div key={s.label} className="p-4 md:p-6 text-center bg-white transition-colors hover:bg-[var(--color-gray-50)] group">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--color-navy-950)] group-hover:text-[var(--color-green-600)] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        {s.value}
                      </div>
                      <div className="mt-2 text-[10px] md:text-xs font-bold tracking-widest text-[var(--color-gray-500)] uppercase">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-square md:aspect-video lg:aspect-square w-full overflow-hidden rounded-[24px] border border-[var(--color-gray-200)] shadow-xl shadow-[var(--color-navy-900)]/10">
                <Image
                  src="/images/hero/refinery-tower.jpg"
                  alt="Oilfield operations facility"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
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
                  <span className="h-4 w-4 shrink-0 block rounded-sm bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                    Your Operation
                  </span>
                </div>

                <div className="grid gap-2 md:gap-3">
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
                <div className="mt-10 rounded-[24px] border border-[var(--color-gray-200)] bg-white p-6 md:p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <p className="mb-6 text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)] border-b border-[var(--color-gray-100)] pb-4">
                    How We Calculate This
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2 text-sm font-medium text-[var(--color-gray-600)]">
                    <div className="space-y-1">
                      <div className="font-bold text-[var(--color-navy-950)] flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[var(--color-green-500)]" /> Revenue at risk
                      </div>
                      <div className="pl-3.5 text-[var(--color-gray-500)] text-xs">Annual revenue × missed ticket %</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-[var(--color-navy-950)] flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[var(--color-green-500)]" /> Recovery
                      </div>
                      <div className="pl-3.5 text-[var(--color-gray-500)] text-xs">Revenue at risk × 90% (average)</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-[var(--color-navy-950)] flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[var(--color-green-500)]" /> Billing cycle
                      </div>
                      <div className="pl-3.5 text-[var(--color-gray-500)] text-xs">Reduced 85% with digital tracking</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-[var(--color-navy-950)] flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[var(--color-green-500)]" /> ROI
                      </div>
                      <div className="pl-3.5 text-[var(--color-gray-500)] text-xs">Recovery ÷ estimated platform cost</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Preview Column (Sticky) */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-4 w-4 shrink-0 block rounded-sm bg-[var(--color-green-500)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                    Live Preview
                  </span>
                </div>

                <div className="rounded-[24px] border border-[var(--color-navy-700)] bg-[var(--color-navy-950)] shadow-xl overflow-hidden flex flex-col transition-all relative group">
                  <div className="absolute right-0 top-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_70%)] opacity-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-20 translate-x-1/3 -translate-y-1/3" />
                  <div className="p-6 md:p-8 space-y-6 relative z-10">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1.5">
                        Annual Revenue At Risk
                      </div>
                      <div className="text-4xl lg:text-5xl font-extrabold text-rose-500 tracking-tighter" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        {fmt(results.revenueAtRisk)}
                      </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-[var(--color-navy-800)] to-transparent" />

                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1.5">
                        Projected Recovery
                      </div>
                      <div className="text-4xl lg:text-5xl font-extrabold text-[var(--color-green-400)] tracking-tighter drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        {fmt(results.recoveredRevenue)}
                      </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-[var(--color-navy-800)] to-transparent" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1.5">
                          New Billing Cycle
                        </div>
                        <div className="text-2xl font-extrabold text-white tracking-tighter" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                          {results.billingReduction} Days
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1.5">
                          Payback Period
                        </div>
                        <div className="text-2xl font-extrabold text-white tracking-tighter" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                          {results.paybackMonths} {results.paybackMonths === 1 ? "Mo" : "Mos"}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-1.5">
                        Projected ROI
                      </div>
                      <div className="text-3xl font-extrabold text-[var(--color-green-400)] tracking-tighter" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        {results.roi}%
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/contact?crews=${crews}&jobs=${monthlyJobs}&ticket=${avgTicket}`}
                    className="group/btn relative z-10 flex items-center justify-between bg-[var(--color-green-500)] px-6 py-4 text-sm font-bold tracking-widest text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)] uppercase"
                  >
                    <span>Get Your Real Number</span>
                    <ArrowRight className="size-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
              
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
                  <span className="text-white">The Number</span>
                  <br className="hidden sm:block" />
                  <span className="text-[var(--color-green-500)]">Is Bigger Than You Think.</span>
                </h2>
                <p className="mt-6 text-base font-medium leading-relaxed text-[var(--color-gray-400)]">
                  This calculator uses conservative industry averages. A personalized diagnostic with your actual data almost always reveals a larger gap. Let us show you the real number.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-[380px]">
                <Link
                  href="/contact"
                  className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-6 py-5 text-sm font-bold tracking-widest text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)] uppercase"
                >
                  <span>Get Your Real Number</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/case-studies"
                  className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold tracking-widest text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-navy-900)] uppercase"
                >
                  <span>See Customer Proof</span>
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
