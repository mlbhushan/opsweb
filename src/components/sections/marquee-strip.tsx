export function MarqueeStrip() {
  const items = Array(10).fill(["REFINING", "PIPELINE"]).flat();
  return (
    <section className="marquee border-y border-[var(--brand-navy)]/10 bg-white py-12 lg:py-16">
      <div className="marquee-track items-center gap-8 whitespace-nowrap lg:gap-12">
        {items.map((word, i) => {
          const isRefining = word === "REFINING";
          return (
             <span key={i} className="flex items-center gap-8 lg:gap-12">
               <span 
                 className={`font-semibold tracking-tighter ${
                   isRefining 
                     ? "font-sans text-[64px] sm:text-[84px] lg:text-[110px] text-[var(--brand-navy)] uppercase block -mt-1 lg:-mt-2" 
                     : "font-display text-[64px] sm:text-[84px] lg:text-[110px] text-[var(--brand-lime)] uppercase italic -ml-2"
                 }`}
               >
                 {word}
               </span>
               <svg viewBox="0 0 100 100" className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-[var(--brand-navy)] opacity-30" fill="currentColor">
                  {/* Decorative Asterisk Star */}
                  <path d="M50 0 C48 30 30 48 0 50 C30 52 48 70 50 100 C52 70 70 52 100 50 C70 48 52 30 50 0 Z" />
               </svg>
             </span>
          );
        })}
      </div>
    </section>
  );
}
