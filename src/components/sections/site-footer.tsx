"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAV } from "@/lib/content/nav";
import { SITE } from "@/lib/site";
import { Mail, Phone } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy-950)] text-white font-sans border-t border-[var(--color-green-500)] selection:bg-[var(--color-green-500)] selection:text-[var(--color-navy-950)]">
      {/* Container wrapper for border-box layout */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-6 md:py-8">
        
        {/* Constructivist/Swiss Grid Container */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-0 border border-white/10 relative z-10">
          
          {/* Left Block: Brand Manifesto (Col-span 5) */}
          <div className="xl:col-span-5 border-b xl:border-b-0 xl:border-r border-white/10 p-5 md:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden bg-[var(--color-navy-950)]">
             <div className="relative z-10">
               <Link href="/" className="block">
                 <Image 
                   src="/OpsFloLogo.png" 
                   alt="OpsFlo" 
                   width={140} 
                   height={40} 
                   className="h-8 md:h-10 lg:h-12 w-auto brightness-0 invert" 
                 />
               </Link>
             </div>

             <div className="relative z-10 mt-auto pt-16">
               <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight leading-[1.1] mb-3 text-balance text-white/90">
                 The Absolute<br/>Standard for<br/>
                 <span className="text-[var(--color-green-500)]">Execution.</span>
               </h2>
               <p className="text-white/60 font-medium max-w-sm text-sm leading-relaxed">
                 {SITE.description}
               </p>
             </div>
             
             <div className="mt-8 relative z-10">
               <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-green-500)] mb-1.5 font-semibold">Direct Line</p>
               <a 
                 href="tel:+18005550199" 
                 className="text-lg md:text-xl font-medium tracking-tight text-white/90 hover:text-[var(--color-green-500)] transition-colors inline-flex items-center gap-2 group/tel"
               >
                 <Phone className="size-4 text-[var(--color-green-500)] group-hover/tel:rotate-12 transition-transform" />
                 +1 (800) 555-0199
               </a>
             </div>
          </div>
          
          {/* Right Block: Links & Interactive (Col-span 7) */}
          <div className="xl:col-span-7 flex flex-col bg-[var(--color-navy-950)]">
            
            {/* Top Half: Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 flex-1">
              
              {/* Platform */}
              <div className="p-5 md:p-6 border-r border-b md:border-b-0 border-white/10 hover:bg-white/[0.02] transition-colors">
                 <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-green-500)] mb-4">Platform</h3>
                 <ul className="space-y-2">
                   {FOOTER_NAV.platform.map(l => (
                     <li key={l.href}>
                       <Link href={l.href} className="font-medium text-sm text-white/60 hover:text-white transition-colors block w-full">
                         {l.label}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>

              {/* Solutions */}
              <div className="p-5 md:p-6 border-b md:border-r md:border-b-0 border-white/10 hover:bg-white/[0.02] transition-colors">
                 <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-green-500)] mb-4">Solutions</h3>
                 <ul className="space-y-2">
                   {FOOTER_NAV.solutions.map(l => (
                     <li key={l.href}>
                       <Link href={l.href} className="font-medium text-sm text-white/60 hover:text-white transition-colors block w-full">
                         {l.label}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>

              {/* Resources */}
              <div className="p-5 md:p-6 border-r border-white/10 hover:bg-white/[0.02] transition-colors">
                 <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-green-500)] mb-4">Resources</h3>
                 <ul className="space-y-2">
                   {FOOTER_NAV.resources.map(l => (
                     <li key={l.href}>
                       <Link href={l.href} className="font-medium text-sm text-white/60 hover:text-white transition-colors block w-full">
                         {l.label}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>

              {/* Company */}
              <div className="p-5 md:p-6 hover:bg-white/[0.02] transition-colors">
                 <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-green-500)] mb-4">Company</h3>
                 <ul className="space-y-2">
                   {FOOTER_NAV.company.map(l => (
                     <li key={l.href}>
                       <Link href={l.href} className="font-medium text-sm text-white/60 hover:text-white transition-colors block w-full">
                         {l.label}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>

            </div>
            
            {/* Bottom Half: Newsletter & Socials */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
               
               {/* Newsletter */}
               <div className="p-5 md:p-6 lg:p-8 border-b md:border-r md:border-b-0 border-white/10 flex flex-col justify-center hover:bg-white/[0.02] transition-colors">
                 <h3 className="text-lg font-semibold tracking-tight text-white mb-2 uppercase">Intelligence Brief</h3>
                 <p className="text-sm text-white/50 mb-4 font-medium leading-relaxed max-w-sm">
                   Join elite operators receiving tactical insights on field execution and margin protection.
                 </p>
                 <form className="flex w-full flex-col sm:flex-row group" onSubmit={e => e.preventDefault()}>
                   <input 
                     type="email" 
                     placeholder="ENTER WORK EMAIL" 
                     className="bg-transparent border border-white/20 sm:border-r-0 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-white w-full focus:outline-none focus:border-[var(--color-green-500)] transition-colors placeholder:text-white/30" 
                     required
                   />
                   <button 
                     type="submit"
                     className="mt-3 sm:mt-0 bg-[var(--color-green-500)] text-[var(--color-navy-950)] hover:brightness-110 px-5 py-2.5 sm:py-0 font-semibold uppercase tracking-widest text-xs border border-[var(--color-green-500)] transition-colors flex items-center justify-center whitespace-nowrap"
                   >
                     Submit
                   </button>
                 </form>
               </div>
               
               {/* Socials */}
               <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center hover:bg-white/[0.02] transition-colors">
                 <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Communicate</h3>
                 <div className="grid grid-cols-4 gap-3">
                   <a 
                     href={SITE.social.twitter} 
                     aria-label="X (Twitter)" 
                     className="aspect-square border border-white/15 flex items-center justify-center text-white/60 hover:bg-[var(--color-green-500)] hover:border-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-all group"
                   >
                     <XIcon className="size-5 group-hover:scale-110 transition-transform" />
                   </a>
                   <a 
                     href="https://wa.me/18005550199" 
                     aria-label="WhatsApp" 
                     className="aspect-square border border-white/15 flex items-center justify-center text-white/60 hover:bg-[var(--color-green-500)] hover:border-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-all group"
                   >
                     <WhatsAppIcon className="size-5 group-hover:scale-110 transition-transform" />
                   </a>
                   <a 
                     href={SITE.social.linkedin} 
                     aria-label="LinkedIn" 
                     className="aspect-square border border-white/15 flex items-center justify-center text-white/60 hover:bg-[var(--color-green-500)] hover:border-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-all group"
                   >
                     <LinkedinIcon className="size-5 group-hover:scale-110 transition-transform" />
                   </a>
                   <a 
                     href="mailto:contact@opsflo.com" 
                     aria-label="Email" 
                     className="aspect-square border border-white/15 flex items-center justify-center text-white/60 hover:bg-[var(--color-green-500)] hover:border-[var(--color-green-500)] hover:text-[var(--color-navy-950)] transition-all group"
                   >
                     <Mail className="size-5 group-hover:scale-110 transition-transform" />
                   </a>
                 </div>
               </div>

            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-medium uppercase tracking-[0.1em] text-white/40">
          <p>© {new Date().getFullYear()} OPSFLO. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4 md:mt-0">
            {FOOTER_NAV.legal.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
