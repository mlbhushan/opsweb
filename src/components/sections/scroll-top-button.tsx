"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function ScrollTopButton() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? h.scrollTop / total : 0;
      setProgress(p);
      setShow(h.scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = 22;
  const c = 2 * Math.PI * r;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-navy)] text-[var(--brand-lime)] shadow-xl transition-all",
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4",
      ].join(" ")}
    >
      <svg className="absolute inset-0 -rotate-90 w-full h-full" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r={r} stroke="currentColor" strokeOpacity="0.2" strokeWidth="2.5" fill="none" />
        <circle
          cx="25"
          cy="25"
          r={r}
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
          strokeLinecap="round"
        />
      </svg>
      <ArrowRightIcon className="relative h-5 w-5 -rotate-90" strokeWidth={2.5} />
    </button>
  );
}
