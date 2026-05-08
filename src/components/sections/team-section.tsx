import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Lexis Storm",
    role: "Safety Inspector",
    image: "/images/team/lexis.jpg",
  },
  {
    name: "Donnie Mac",
    role: "Lead Architect",
    image: "/images/team/donnie.jpg",
  },
  {
    name: "Sarah Monroe",
    role: "Project Manager",
    image: "/images/team/sarah.jpg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-24 pb-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-[#fafaf8] px-5 py-1 mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-lime)]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-navy)]">Skilled Engineers</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-lime)]" />
          </div>

          <h2 className="font-display text-[40px] font-semibold leading-[1.1] text-[var(--brand-navy)] sm:text-[48px] lg:text-[52px] tracking-tight">
            Meet Our Skilled <br />
            Engineering <span className="script-accent text-[52px] lg:text-[68px] font-normal leading-[0.8] text-[var(--brand-lime)] align-middle relative -top-1" style={{ paddingLeft: '0' }}>Professionals</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((m) => (
            <article key={m.name} className="group flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#f4f5f4] transition duration-500 hover:shadow-xl">
                <Image 
                  src={m.image} 
                  alt={m.name} 
                  fill 
                  sizes="(min-width: 1024px) 384px, 100vw" 
                  className="object-cover object-bottom transition duration-700 group-hover:scale-105" 
                />
                
                {/* Floating Share Button at bottom right */}
                <div className="absolute -bottom-1 -right-1 h-14 w-14 lg:h-16 lg:w-16 rounded-tl-[1.5rem] bg-white flex items-center justify-center">
                  <button type="button" aria-label="Share profile" className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[var(--brand-navy)] text-white transition-transform hover:scale-110 hover:bg-[var(--brand-lime)] hover:text-[var(--brand-navy)]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 lg:h-5 lg:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-8 flex flex-col px-2">
                <h3 className="font-display text-[22px] font-semibold text-[var(--brand-navy)] transition-colors group-hover:text-[var(--brand-lime)]">{m.name}</h3>
                <p className="mt-1 text-[13px] font-medium text-gray-500">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
