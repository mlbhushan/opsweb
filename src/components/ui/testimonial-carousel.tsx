"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Revenue leakage used to be an accepted cost of doing business. With OpsFlo, we capture every billable item before the crew even leaves the site. It completely transformed our cash flow.",
    initials: "BH",
    name: "Bradford Hayes",
    role: "VP of Field Operations, Energy Infrastructure",
    rating: 5,
  },
  {
    quote: "Finally, a platform built by people who understand the reality of field work. The disconnect between our field crews and the back office has completely vanished.",
    initials: "GC",
    name: "Garrett Caldwell",
    role: "Director of Turnarounds & Outages",
    rating: 4,
  },
  {
    quote: "The transition from paper tickets to OpsFlo was incredibly smooth. Our technicians actually enjoy using the software, which is a first for our company.",
    initials: "RS",
    name: "Rebecca Sterling",
    role: "Senior Completions Superintendent",
    rating: 5,
  },
  {
    quote: "We used to lose days compiling field data for invoicing. Now, data flows in real-time, completely eliminating our end-of-month bottleneck.",
    initials: "VM",
    name: "Vance Masterson",
    role: "Chief Operations Officer, Midstream Services",
    rating: 5,
  },
  {
    quote: "Our billing dispute rate dropped by ninety percent in the first quarter of using OpsFlo. Having photographic proof attached to every field ticket makes client conversations straightforward and factual.",
    initials: "TC",
    name: "Trenton Cole",
    role: "VP of Finance & Commercial Operations",
    rating: 4,
  },
  {
    quote: "Before OpsFlo, keeping track of our heavy equipment and crew assignments was a daily puzzle. Now we have total visibility into asset utilization across five states.",
    initials: "MB",
    name: "Morgan Blakely",
    role: "Director of Heavy Equipment Fleet",
    rating: 5,
  },
  {
    quote: "The offline capabilities are exactly what we needed. Our crews work in extremely remote areas, and OpsFlo syncs perfectly the moment they hit a cellular signal.",
    initials: "CR",
    name: "Clayton Riggs",
    role: "Lead Superintendent, Pipeline Division",
    rating: 5,
  },
  {
    quote: "Compliance reporting used to be a nightmare of digging through paper forms. We are now passing audits effortlessly because every safety check is digitally recorded and timestamped.",
    initials: "JV",
    name: "Joanna Vance",
    role: "Corporate HSE Director",
    rating: 4,
  }
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-play every 5s
  }, [nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  const handlePrev = () => {
    prevSlide();
    resetTimer();
  };

  return (
    <div className="flex flex-col w-full h-full min-w-0">
      {/* Viewport */}
      <div className="group relative overflow-hidden w-full flex-grow bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_-10px_rgba(34,197,94,0.15)] transition-all duration-700 ease-out">
        {/* Ambient interior glow */}
        <div className="absolute -inset-24 bg-gradient-to-tr from-[var(--color-green-500)]/10 to-[var(--color-navy-400)]/10 group-hover:from-[var(--color-green-500)]/20 group-hover:to-[var(--color-navy-400)]/15 blur-3xl transition-colors duration-700 pointer-events-none" />
        
        <div 
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-full h-full shrink-0 flex flex-col p-6 md:p-8">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`size-5 fill-current ${star <= t.rating ? "text-amber-400" : "text-white/10"}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg md:text-xl font-medium text-white leading-relaxed mb-6 whitespace-normal break-words">
                &quot;{t.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-base border border-white/20 shrink-0 shadow-inner">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-base text-white tracking-tight truncate">{t.name}</p>
                  <p className="text-sm text-[var(--color-gray-400)] font-medium mt-1 truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-center relative mt-auto pt-8">
        {/* Centered Markers */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                resetTimer();
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                activeIndex === idx 
                  ? "w-12 bg-gradient-to-r from-[var(--color-green-400)]/80 to-[var(--color-green-600)]/80 backdrop-blur-md border border-[var(--color-green-300)]/50 shadow-[0_0_15px_rgba(34,197,94,0.4),inset_0_1px_2px_rgba(255,255,255,0.6)]" 
                  : "w-4 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:w-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
              }`}
            />
          ))}
        </div>
        
        {/* Right Aligned Arrows */}
        <div className="flex items-center gap-3 absolute right-0">
          <button 
            onClick={handlePrev}
            className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm hover:shadow-md hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button 
            onClick={handleNext}
            className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm hover:shadow-md hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
