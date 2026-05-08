import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

const BLOG_POSTS = [
  {
    title: "Transforming Supply Chains for the Future",
    date: "Feb 24, 2024",
    author: "Admin",
    excerpt: "Discover how automation is revitalizing supply chain logistics on a global scale.",
    image: "/images/blog/blog-01.jpg",
    href: "#"
  },
  {
    title: "Pioneering Sustainable Practices in Industry",
    date: "Feb 24, 2024",
    author: "Admin",
    excerpt: "Explore our latest initiatives towards a greener and more efficient industrial landscape.",
    image: "/images/blog/blog-02.jpg",
    href: "#"
  },
  {
    title: "Integrating AI into Daily Operations",
    date: "Feb 20, 2024",
    author: "Admin",
    excerpt: "A deep dive into how artificial intelligence is changing the way we manage production lines.",
    image: "/images/blog/blog-03.jpg",
    href: "#"
  }
];

export function BlogGrid() {
  return (
    <section id="blog" className="bg-[#fafaf8] py-24 pb-32">
      <div className="container-x max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[56px] lg:text-[72px] font-semibold leading-[1.05] text-[var(--brand-navy)] tracking-tight">
            Our Latest Blog & _ <br />
            <span className="inline-flex items-center gap-4 mt-2">
              <span className="text-[48px] lg:text-[60px] transition-transform hover:-rotate-12 cursor-default">📰</span>
              News
            </span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((p) => (
            <a key={p.title} href={p.href} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden drop-shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill 
                  sizes="(min-width: 1024px) 400px, 100vw" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col flex-1 p-8 lg:p-10">
                <div className="flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-500 uppercase">
                  <span>By {p.author}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--brand-lime)]"></span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-5 font-sans text-2xl font-bold leading-tight text-[var(--brand-navy)] transition-colors group-hover:text-[var(--brand-lime)]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-500 font-medium line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[13px] font-bold uppercase tracking-wider text-[var(--brand-navy)]">
                    Read More
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fafaf8] text-[var(--brand-navy)] transition-colors group-hover:bg-[var(--brand-lime)]">
                    <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
