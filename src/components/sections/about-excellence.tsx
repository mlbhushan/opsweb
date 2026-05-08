import Image from "next/image";
import { CheckIcon } from "@/components/icons";

export function AboutExcellence() {
  return (
    <section id="about" className="bg-white py-24 pb-32 overflow-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-16 xl:gap-20">
        
        {/* Left Content */}
        <div className="relative">
          {/* Pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-[#fafaf8] pr-5 py-1 mb-8 shadow-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--brand-lime)] mt-px ml-1 border border-gray-100 shadow-sm">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-navy)]">About Us</span>
          </div>

          <h2 className="font-display text-[42px] leading-[1.05] font-semibold text-[var(--brand-navy)] sm:text-[50px] lg:text-[56px] tracking-tight">
            Driving Excellence in the <br />
            Oil & Gas <span className="script-accent text-[52px] lg:text-[68px] font-normal leading-[0.8] text-[var(--brand-lime)] align-middle relative -top-1 ml-1" style={{ paddingLeft: '0' }}>Industry</span>
          </h2>
          
          <div className="mt-8 mb-12 max-w-lg">
            <div className="float-left mr-4 mt-2 text-[var(--brand-lime)] font-display text-[84px] font-bold leading-[0.7]">
              W
            </div>
            <p className="text-[15px] leading-[1.6] text-gray-600 font-medium">
              e specialize in exploration, drilling, production, transportation, and refining,
              providing end-to-end solutions that meet the highest standards of safety,
              efficiency, and operational excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 lg:gap-10">
            {/* Small tilted image on the left of bullets */}
            <div className="relative h-36 w-44 shrink-0 overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.15)] rotate-[-6deg] border-[6px] border-white z-10 transition-transform hover:rotate-0 duration-500">
              <Image
                src="/images/services/pipelines.jpg" 
                alt="Oil operation"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            
            {/* Bullets */}
            <ul className="space-y-4">
              {[
                "Advanced exploration and reservoir evaluation",
                "Pipeline, logistics, and refining expertise",
                "Optimized production and asset management",
                "Robust health, safety & environmental compliance"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-[13px] font-semibold text-[var(--brand-navy)] leading-snug">
                   <div className="mt-0.5 shrink-0 flex items-center justify-center">
                     <CheckIcon className="h-4 w-4 text-[var(--brand-lime)]" strokeWidth={3.5} />
                   </div>
                   {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Artwork */}
        <div className="relative h-full min-h-[550px] lg:min-h-[640px] w-full mt-10 lg:mt-0 xl:ml-8">
          <div className="absolute right-0 top-0 h-full max-h-[640px] w-[95%] lg:w-[90%] overflow-hidden rounded-t-[40px] rounded-br-[40px] shadow-2xl bg-gray-100">
            <Image
              src="/images/about/equipment.jpg"
              alt="Industrial yellow pipes against blue sky"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          {/* Overlapping small image on the bottom right */}
          <div className="absolute -bottom-8 lg:bottom-4 right-4 lg:-right-4 h-48 w-48 xl:h-64 xl:w-64 overflow-hidden rounded-[24px] lg:rounded-[32px] border-[8px] border-white shadow-2xl bg-gray-100 z-10 transition-transform hover:-translate-y-2 duration-500">
            <Image
               src="/images/services/offshore.jpg" 
               alt="Rig worker"
               fill
               className="object-cover object-center"
               sizes="300px"
            />
          </div>
          
          <div className="absolute -z-10 bottom-24 -left-8 h-64 w-64 rounded-full bg-[var(--brand-lime)]/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
