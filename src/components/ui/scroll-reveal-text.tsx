"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  /** 0–1 page scroll range over which the whole text reveals. Defaults to [0, 0.12] */
  scrollRange?: [number, number];
}

/** Pre-compute cumulative char offsets for each word, immutably */
function getWordOffsets(words: string[]): number[] {
  return words.reduce<{ offsets: number[]; total: number }>(
    ({ offsets, total }, word) => ({
      offsets: [...offsets, total],
      total: total + word.length,
    }),
    { offsets: [], total: 0 }
  ).offsets;
}

export const ScrollRevealText = ({
  text,
  className,
  scrollRange = [0, 0.07],
}: ScrollRevealTextProps) => {
  const { scrollYProgress } = useScroll();

  const words = text.split(" ");
  const totalChars = text.replace(/ /g, "").length;
  const wordOffsets = getWordOffsets(words);

  return (
    <h2 className={cn("flex flex-wrap justify-center", className)}>
      {words.map((word, wi) => {
        const wordStartChar = wordOffsets[wi];

        return (
          <span key={wi} className="inline-flex whitespace-pre">
            {word.split("").map((char, ci) => {
              const charIndex = wordStartChar + ci;
              const start =
                scrollRange[0] +
                (charIndex / totalChars) * (scrollRange[1] - scrollRange[0]);
              const end =
                scrollRange[0] +
                ((charIndex + 1) / totalChars) *
                  (scrollRange[1] - scrollRange[0]);

              return (
                <Char key={ci} progress={scrollYProgress} range={[start, end]}>
                  {char}
                </Char>
              );
            })}
            {wi < words.length - 1 && (
              <span className="inline-block w-[0.25em]">&nbsp;</span>
            )}
          </span>
        );
      })}
    </h2>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span className="text-[var(--color-gray-300)]">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-[var(--color-navy-950)]"
      >
        {children}
      </motion.span>
    </span>
  );
};
