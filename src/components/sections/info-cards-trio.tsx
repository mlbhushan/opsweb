import { ClockIcon, MapPinIcon, PhoneIcon, ArrowRightIcon } from "@/components/icons";

export function InfoCardsTrio() {
  return (
    <section className="bg-white pb-24">
      <div className="container-x grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Support Hours Card */}
        <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[var(--brand-navy-deep)] p-10 text-white transition-all hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-xl font-semibold text-white">Support Hours</h3>
              <ClockIcon className="h-6 w-6 text-white" fill="none" strokeWidth={1.5} />
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-semibold tracking-wider text-white">
                <span>Mon - Fri</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-semibold tracking-wider text-white">
                <span>Sat - Sun</span>
                <span>8:00 - 16:00</span>
              </div>
              <div className="flex items-center justify-between pt-2 text-xs font-semibold tracking-wider text-white">
                <span>Emergency Support</span>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="#" className="inline-flex h-12 w-full items-center justify-between gap-4 rounded-full bg-[var(--brand-lime)] pl-6 pr-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-navy)] transition hover:bg-white">
              24/7 Emergency Response
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--brand-navy)]">
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Global Footprint Card */}
        <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#fafaf8] p-10 text-[var(--brand-navy)] transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="font-sans text-xl font-semibold">Global Footprint</h3>
            <MapPinIcon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            Our facilities and operations span key oil & gas regions, including:
          </p>
          
          <ul className="mt-6 space-y-4 text-sm font-medium text-[var(--brand-navy)]">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full ring-2 ring-[var(--brand-lime)] ring-offset-2 ring-offset-transparent bg-[var(--brand-lime)]" />
              North America (Houston, Calgary)
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full ring-2 ring-[var(--brand-lime)] ring-offset-2 ring-offset-transparent bg-[var(--brand-lime)]" />
              Middle East (Dubai, Abu Dhabi)
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full ring-2 ring-[var(--brand-lime)] ring-offset-2 ring-offset-transparent bg-[var(--brand-lime)]" />
              West Africa (Lagos, Accra)
            </li>
          </ul>
        </div>

        {/* Request Consultation Card */}
        <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[var(--brand-lime)] p-10 text-[var(--brand-navy)] transition-all hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-xl font-semibold">Request Consultation</h3>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            
            <p className="mt-6 text-sm leading-relaxed text-[var(--brand-navy)]/80">
              Reach out to our expert team for project consultations, technical support, or emergency assistance. We're here to ensure your operations run smoothly.
            </p>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--brand-navy)]/20">
              <PhoneIcon className="h-5 w-5 fill-none" stroke="currentColor" strokeWidth={1.5} />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[var(--brand-navy)]/60">Emergency Contact:</span>
              <span className="block text-lg font-bold">(888) 4567890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
