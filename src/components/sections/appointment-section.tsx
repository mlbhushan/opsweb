"use client";

import Image from "next/image";
import { useState } from "react";

export function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[var(--brand-lime)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Image Full Bleed on Mobile, or container constrained? It looks edge-to-edge or very large. Let's use a solid block. */}
        <div className="relative h-[400px] lg:h-auto min-h-[600px] w-full">
          <Image
            src="/images/appointment/flame.jpg"
            alt="Refinery flame stack colored in warm tones"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {/* subtle overlay to match original warmth/contrast if needed */}
          <div className="absolute inset-0 bg-[var(--brand-navy)]/10 mix-blend-multiply" />
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-16 container-x lg:pr-10 lg:pl-20 xl:pl-32 max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 mb-6 shadow-sm w-max backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">Make an Appointment</span>
          </div>

          <h2 className="font-display text-[48px] font-semibold leading-[1.1] text-white sm:text-[56px] lg:text-[72px] tracking-tight">
            Book <span className="script-accent text-[64px] lg:text-[84px] font-normal leading-[0.8] text-white align-middle relative -top-2" style={{ paddingLeft: '0' }}>Appointment</span>
          </h2>

          <form
            className="mt-12 flex flex-col gap-6"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-white px-5 py-4 text-sm text-[var(--brand-navy)] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-white px-5 py-4 text-sm text-[var(--brand-navy)] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full bg-white px-5 py-4 text-sm text-[var(--brand-navy)] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
              />
              <div className="relative">
                <select
                  name="service"
                  className="w-full appearance-none bg-white px-5 py-4 text-sm text-gray-400 outline-none focus:ring-2 focus:ring-white/50"
                  defaultValue=""
                >
                  <option value="" disabled>Select Service ⌄</option>
                  <option value="Refining">Refining & Processing</option>
                  <option value="Pipelines">Pipelines & Logistics</option>
                  <option value="Offshore">Offshore Operations</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-gray-400">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Type Your Message"
              className="w-full resize-none bg-white px-5 py-5 text-sm text-[var(--brand-navy)] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
            />

            <div className="mt-4 flex items-center justify-between">
              <button 
                type="submit" 
                className="h-14 bg-black px-10 text-sm font-bold text-white transition-opacity hover:opacity-80"
              >
                {submitted ? "Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
