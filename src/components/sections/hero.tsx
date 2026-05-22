"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HERO_LINES = [
  { prefix: "Every field operation gets", highlight: "completed, validated, and billed.", suffix: "" },
  { prefix: "", highlight: "No revenue leaks", suffix: "between the field and the invoice." },
  { prefix: "Every crew, every job, every day is", highlight: "fully accounted", suffix: "for." },
  { prefix: "", highlight: "Complete visibility", suffix: "from dispatch to final billing." },
  { prefix: "Field execution", highlight: "matches what was promised", suffix: "to the client." },
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
  
  const prefixWords = currentLine.prefix.split(" ").filter(Boolean);
  const highlightWords = currentLine.highlight.split(" ").filter(Boolean);
  const suffixWords = currentLine.suffix.split(" ").filter(Boolean);

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
          className="[font-family:var(--font-jakarta)] text-[36px] md:text-[48px] lg:text-[62px] font-extrabold leading-[1.15] tracking-tight h-[3.5em] overflow-hidden text-center w-full text-white cursor-default flex flex-col justify-end pb-[0.3em]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="block text-white"
            >
              {prefixWords.map((word, i) => (
                <React.Fragment key={`prefix-${index}-${i}`}>
                  <motion.span
                    initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline-block relative text-white"
                  >
                    <span className="relative z-10">{word}</span>
                  </motion.span>
                  {" "}
                </React.Fragment>
              ))}

              <motion.span
                className="relative inline text-white"
                initial={{ backgroundSize: "0% 0.35em" }}
                animate={{ backgroundSize: "100% 0.35em" }}
                exit={{ backgroundSize: "0% 0.35em" }}
                transition={{ 
                  duration: 0.6, 
                  delay: prefixWords.length * 0.06 + 0.2, 
                  ease: "easeOut" 
                }}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 10' preserveAspectRatio='xMinYMid slice'%3E%3Cpath d='M0,5 Q50,2 100,5 C150,8 200,3 250,5 C300,7 350,4 400,5 C450,6 500,3 550,5 C600,7 650,4 700,5 C750,6 800,3 850,5 C900,7 950,4 1000,5 C1050,6 1100,3 1150,5 C1200,7 1250,4 1300,5 C1350,6 1400,3 1450,5 C1500,7 1550,4 1600,5 C1650,6 1700,3 1750,5 C1800,7 1850,4 1900,5 C1950,6 2000,3 2050,5' fill='none' stroke='%236bbf54' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left bottom',
                  WebkitBoxDecorationBreak: 'clone',
                  boxDecorationBreak: 'clone',
                  paddingBottom: '0.15em'
                }}
              >
                {highlightWords.map((word, i) => (
                  <React.Fragment key={`highlight-${index}-${i}`}>
                    <motion.span
                      initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
                      transition={{
                        duration: 0.35,
                        delay: (prefixWords.length + i) * 0.06,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="inline-block relative font-normal"
                    >
                      <span className="relative z-10">{word}</span>
                    </motion.span>
                    {i < highlightWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </motion.span>
              {" "}

              {suffixWords.map((word, i) => (
                <React.Fragment key={`suffix-${index}-${i}`}>
                  <motion.span
                    initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
                    transition={{
                      duration: 0.35,
                      delay: (prefixWords.length + highlightWords.length + i) * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline-block relative text-white"
                  >
                    <span className="relative z-10">{word}</span>
                  </motion.span>
                  {i < suffixWords.length - 1 && " "}
                </React.Fragment>
              ))}
            </motion.div>
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
