"use client";

import Image from "next/image";
import { StarIcon } from "@/components/icons";

const TESTIMONIALS_DATA = [
  {
    name: "Annistar May",
    role: "Manager",
    quote: "Exceptional workmanship and attention to detail. The team delivered our project on time and exceeded our expectations in every aspect of the build.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    name: "Markus Dean",
    role: "Supervisor",
    quote: "Professional from start to finish. Their profound understanding of complex systems ensured our facility upgrade was handled with the utmost care and precision.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704c"
  },
  {
    name: "Gatita White",
    role: "Director",
    quote: "A remarkably seamless experience. They communicated clearly at every stage and navigated around unforeseen challenges without missing a single deadline.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704b"
  },
  {
    name: "Steven Grey",
    role: "Engineer",
    quote: "Their technical expertise is unmatched. They revamped our entire pipeline operation, reducing downtime significantly while maintaining impeccable safety standards.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 pb-32">
      <div className="container-x max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[56px] lg:text-[72px] font-semibold leading-[1.05] text-[var(--brand-navy)] tracking-tight">
            Client Feedback _ <br />
            <span className="inline-flex items-center gap-4 mt-2">
              <span className="text-[48px] lg:text-[60px] transition-transform hover:rotate-12 cursor-default">💬</span>
              Testimonials
            </span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div 
              key={idx} 
              className="flex flex-col rounded-3xl border border-gray-100 bg-white p-10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full shrink-0">
                  <Image 
                    src={t.image} 
                    alt={t.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-sans text-xl font-bold tracking-tight text-[var(--brand-navy)]">{t.name}</div>
                  <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase mt-1">{t.role}</div>
                </div>
              </div>
              
              <p className="mt-8 text-[15px] leading-relaxed text-gray-600 font-medium">
                "{t.quote}"
              </p>

              <div className="mt-10 flex items-center gap-1.5 text-[#eab308]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-[18px] w-[18px] fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
