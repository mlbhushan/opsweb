import Image from "next/image";
import { ArrowRightIcon, ShapeNotchIcon } from "@/components/icons";
import { Factory, Leaf, Truck, Droplet } from "lucide-react"; // Using Lucide for the exact icons

const SERVICES_DATA = [
  {
    title: "Production Optimization",
    description: "Maximizing oil and gas output through efficient...",
    image: "/images/services/offshore.jpg",
    icon: <Factory className="h-6 w-6" strokeWidth={1.5} />,
    href: "#",
  },
  {
    title: "Environmental Compliance",
    description: "Ensuring safe operations while meeting all...",
    image: "/images/about/equipment.jpg",
    icon: <Leaf className="h-6 w-6" strokeWidth={1.5} />,
    href: "#",
  },
  {
    title: "Pipeline & Transportation",
    description: "Efficient and safe transport of oil and gas t...",
    image: "/images/services/pipelines.jpg",
    icon: <Truck className="h-6 w-6" strokeWidth={1.5} />,
    href: "#",
  },
  {
    title: "Refining & Processing",
    description: "Converting crude oil into high-quality petroleum...",
    image: "/images/services/refining.jpg",
    icon: <Droplet className="h-6 w-6" strokeWidth={1.5} />,
    href: "#",
  },
];

export function ServicesDark() {
  return (
    <section id="services" className="bg-[var(--brand-navy-deep)] py-28 text-white">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-1 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-lime)]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Oil & Gas Services</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-lime)]" />
          </div>
          
          <h2 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-[44px] lg:text-[52px]">
            Reliable and Efficient <br />
            Oil & Gas <br />
            <span className="script-accent text-[56px] font-normal text-[var(--brand-lime)] lg:text-[72px] leading-tight block mt-2">
              Industry Services
            </span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_DATA.map((s, i) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* Decorative Pagination dots */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="h-2 w-2 rounded-full bg-[var(--brand-lime)] transition-transform hover:scale-125" aria-label="Page 1" />
          <button className="h-2 w-2 rounded-full bg-white/20 transition-transform hover:bg-white hover:scale-125" aria-label="Page 2" />
          <button className="h-2 w-2 rounded-full bg-white/20 transition-transform hover:bg-white hover:scale-125" aria-label="Page 3" />
          <button className="h-2 w-2 rounded-full bg-white/20 transition-transform hover:bg-white hover:scale-125" aria-label="Page 4" />
          <button className="h-2 w-2 rounded-full bg-white/20 transition-transform hover:bg-white hover:scale-125" aria-label="Page 5" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  image,
  icon,
  href,
}: {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white transition-all hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-56 w-full overflow-hidden p-2 pb-0">
        <div className="relative h-full w-full overflow-hidden rounded-t-[1.6rem] rounded-b-lg">
          <Image 
            src={image} 
            alt={title} 
            fill 
            sizes="320px" 
            className="object-cover transition duration-700 group-hover:scale-105" 
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative flex flex-1 flex-col px-8 pb-10 pt-4">
        {/* Floating Icon Box */}
        <div className="absolute -top-10 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-lime)] text-[var(--brand-navy)] shadow-lg ring-4 ring-white z-10 transition-transform group-hover:-translate-y-1">
          {icon}
        </div>
        
        <h3 className="mt-8 font-sans text-[22px] font-semibold leading-tight text-[var(--brand-navy)] transition-colors group-hover:text-[var(--brand-lime)] pr-4">
          {title}
        </h3>
        
        <p className="mt-3 text-[14px] leading-[1.6] text-gray-500 font-medium">
          {description}
        </p>
      </div>

      {/* Bottom Right Notch setup (SVG + Icon) */}
      <a href={href} className="absolute bottom-0 right-0 h-20 w-20 group-hover:bg-[var(--brand-navy)] transition-colors bg-[var(--brand-lime)] text-[var(--brand-navy)] group-hover:text-[var(--brand-lime)] rounded-tl-[2rem] flex items-center justify-center pointer-events-auto z-20">
        <ArrowRightIcon className="h-6 w-6 -rotate-45 transition-transform group-hover:rotate-0" />
      </a>
      
      {/* Small corner smoothing element */}
      <div className="absolute bottom-20 right-0 h-6 w-6 w-[20px] h-[20px]">
        <div className="absolute bottom-0 right-0 w-full h-full bg-white border-none rounded-br-full" />
      </div>
    </div>
  );
}
