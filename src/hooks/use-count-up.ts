"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseCountUpOptions {
  /** Target number to count up to */
  end: number;
  /** Duration in milliseconds (default: 1500) */
  duration?: number;
  /** Start value (default: 0) */
  start?: number;
  /** Whether to include decimals */
  decimals?: number;
  /** Prefix string (e.g., "$") */
  prefix?: string;
  /** Suffix string (e.g., "%", "+") */
  suffix?: string;
}

/**
 * Hook that animates a number counting up when the element enters the viewport.
 * Uses IntersectionObserver for scroll-triggered activation.
 */
export function useCountUp({
  end,
  duration = 1500,
  start = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
}: UseCountUpOptions) {
  const [value, setValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [end, duration, start, decimals, hasAnimated]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animate, hasAnimated]);

  const display = `${prefix}${decimals > 0 ? value.toFixed(decimals) : value}${suffix}`;

  return { ref, value, display };
}
