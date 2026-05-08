"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HERO_LINES = [
  { prefix: "every field operation gets", highlight: "completed, validated, and billed.", suffix: "" },
  { prefix: "", highlight: "no revenue leaks", suffix: "between the field and the invoice." },
  { prefix: "every crew, every job, every day is", highlight: "fully accounted", suffix: "for." },
  { prefix: "", highlight: "complete visibility", suffix: "from dispatch to final billing." },
  { prefix: "field execution", highlight: "matches what was promised", suffix: "to the client." },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_LINES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const currentLine = HERO_LINES[index];
  
  const buildWords = () => {
    const list: { text: string; isHighlight: boolean; isLastHighlight: boolean }[] = [{ text: "Ensure", isHighlight: false, isLastHighlight: false }];
    
    currentLine.prefix.split(" ").filter(Boolean).forEach(w => list.push({ text: w, isHighlight: false, isLastHighlight: false }));
    
    const hWords = currentLine.highlight.split(" ").filter(Boolean);
    hWords.forEach((w, i) => list.push({ text: w, isHighlight: true, isLastHighlight: i === hWords.length - 1 }));
    
    currentLine.suffix.split(" ").filter(Boolean).forEach(w => list.push({ text: w, isHighlight: false, isLastHighlight: false }));
    return list;
  };
  
  const wordsList = buildWords();

  return (
    <section className="relative isolate h-[100vh] min-h-[600px] w-full overflow-hidden bg-gray-900 flex items-center justify-center">
      {/* Background Video Container */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <video
          src="https://res.cloudinary.com/dmghhstx4/video/upload/v1778235437/one_e352ag.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[var(--brand-navy-deep)]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-[900px] mx-auto pt-[72px]">
        <div
          className="[font-family:var(--font-jakarta)] text-[36px] md:text-[48px] lg:text-[62px] font-extrabold leading-[1.15] tracking-tight h-[3.5em] overflow-hidden text-center w-full text-white cursor-default"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="inline text-white"
            >
              {wordsList.map((item, i) => (
                <motion.span
                  key={`${index}-${i}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block relative px-[0.15em] text-white"
                >
                  <span className={`relative z-10 ${item.isHighlight ? 'font-normal' : ''}`}>{item.text}</span>
                  {item.isHighlight && (
                    <span className="absolute bottom-[0.08em] left-[-1px] h-[0.12em] w-[calc(100%+2px)] bg-[var(--brand-lime)] -z-10" />
                  )}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="mt-5 mb-8 text-[13px] md:text-[14px] leading-[1.7] text-white/70 font-semibold max-w-[520px] uppercase tracking-widest">
          A unified field operations platform built for <span className="whitespace-nowrap">real world</span> oilfield challenges.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact?type=revenue"
            className="inline-flex h-[54px] items-center rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-7 text-[13px] font-bold text-white transition-all hover:bg-white/20"
          >
            Get a Revenue Diagnostic
          </a>
        </div>
      </div>
    </section>
  );
}
