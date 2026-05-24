"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NAV, type NavGroup } from "@/lib/content/nav";
import { SITE } from "@/lib/site";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PhoneCallIcon } from "@/components/animate-ui/icons/phone-call";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isSolid ? "bg-white border-b border-[var(--color-navy-900)]/5 shadow-sm" : "bg-transparent"
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-8 lg:h-[88px] transition-all duration-500">
          <Link href="/" onClick={handleLogoClick} className="flex shrink-0 items-center gap-2">
            <Image
              src="/OpsFloIcon.png"
              alt=""
              width={40}
              height={40}
              priority
              className={cn(
                "h-9 w-auto lg:h-10 transition-all duration-500",
                !isSolid && "brightness-0 invert"
              )}
            />
            <Image
              src="/OpsFloLogoText.png"
              alt="OpsFlo"
              width={140}
              height={44}
              priority
              className={cn(
                "h-9 w-auto lg:h-11 transition-all duration-500",
                !isSolid && "brightness-0 invert"
              )}
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center lg:flex h-full">
            {NAV.map((group) => {
              // A group is active if the current pathname matches its direct href, 
              // or matches any of the links in its mega menu columns
              const isActive = group.href 
                ? pathname === group.href || pathname.startsWith(group.href + "/")
                : group.columns?.some(col => col.links.some(link => pathname === link.href || pathname.startsWith(link.href + "/")));

              return (
                <div
                  key={group.label}
                  className="h-full flex items-center px-4"
                  onMouseEnter={() =>
                    group.columns ? setActiveMenu(group.label) : setActiveMenu(null)
                  }
                >
                  {group.href ? (
                    <Link
                      href={group.href}
                      className={cn(
                        "flex items-center gap-1 py-2 text-[14px] tracking-wide transition-all duration-300 relative",
                        isSolid
                          ? "text-[var(--color-navy-900)] hover:text-[var(--color-green-600)]"
                          : "text-white hover:text-[var(--color-green-400)]",
                        activeMenu === group.label && (isSolid ? "text-[var(--color-green-600)]" : "text-[var(--color-green-400)]"),
                        isActive ? "font-bold" : "font-medium",
                        isActive && (isSolid ? "text-[var(--color-green-600)]" : "text-[var(--color-green-400)]")
                      )}
                    >
                      {group.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 py-2 text-[14px] tracking-wide transition-all duration-300 relative",
                        isSolid
                          ? "text-[var(--color-navy-900)] hover:text-[var(--color-green-600)]"
                          : "text-white hover:text-[var(--color-green-400)]",
                        activeMenu === group.label && (isSolid ? "text-[var(--color-green-600)]" : "text-[var(--color-green-400)]"),
                        isActive ? "font-bold" : "font-medium",
                        isActive && (isSolid ? "text-[var(--color-green-600)]" : "text-[var(--color-green-400)]")
                      )}
                    >
                      {group.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          activeMenu === group.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <div
              className={cn(
                "hidden xl:flex items-center gap-3 pr-4 border-r transition-colors",
                isSolid ? "border-[var(--color-gray-200)]" : "border-white/20"
              )}
            >
              <div className="flex shrink-0 items-center justify-center text-[var(--brand-lime)]">
                <PhoneCallIcon size={34} animate={true} />
              </div>
              <div className="flex flex-col justify-center">
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider leading-tight transition-colors",
                    isSolid ? "text-[var(--color-navy-900)]/50" : "text-white/60"
                  )}
                >
                  Speak With Us:
                </span>
                <a
                  href="tel:+18133986692"
                  className={cn(
                    "text-[14px] font-semibold leading-tight transition-colors",
                    isSolid ? "text-[var(--color-navy-900)] hover:text-[var(--color-green-600)]" : "text-white hover:text-[var(--color-green-400)]"
                  )}
                >
                  +1 (813) 398-6692
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/18133986692"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className={cn(
                "group flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[var(--radius-sm)] border transition-all",
                isSolid
                  ? "border-[var(--color-gray-200)] bg-transparent text-[var(--color-navy-900)] hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
                  : "border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-[#25D366] hover:text-[#25D366]"
              )}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px] fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.411z" />
              </svg>
            </a>

            <Link href="/contact" className="btn-pill-lime text-sm">
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-navy-900)] text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <MegaMenu group={NAV.find((g) => g.label === activeMenu)!} pathname={pathname} />
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            mobileExpanded={mobileExpanded}
            setMobileExpanded={setMobileExpanded}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function MegaMenu({ group, pathname }: { group: NavGroup; pathname: string }) {
  if (!group.columns || group.columns.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 w-full pointer-events-none flex justify-center px-4">
      <div className="pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white border border-[var(--color-navy-900)]/10 shadow-[0_12px_40px_rgb(0,0,0,0.06)] overflow-hidden rounded-b-xl"
        >
          <div className="px-8 pt-8 pb-10 lg:px-12 lg:pt-10 lg:pb-12 relative">
            <div className="flex flex-wrap gap-x-12 gap-y-10 lg:gap-x-16 relative z-10">
              {group.columns.map((col, idx) => (
                <div key={col.heading} className={cn("min-w-[200px]", idx > 0 && "lg:pl-12 xl:pl-16 lg:border-l lg:border-[var(--color-gray-100)]")}>
                  <div className="mb-6 border-b border-[var(--color-navy-900)]/10 pb-3">
                    <p className="font-bold uppercase tracking-[0.15em] text-[11px] text-[var(--color-navy-900)]">
                      {col.heading}
                    </p>
                  </div>
                  <ul className="space-y-5">
                    {col.links.map((link) => {
                      const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                      return (
                        <li key={link.href}>
                          <Link href={link.href} className="group flex items-start relative">
                            <span className={cn(
                              "mt-1 overflow-hidden transition-all duration-300 ease-out",
                              isActive ? "w-4 text-[var(--color-green-500)]" : "w-0 text-[var(--color-green-500)] group-hover:w-4"
                            )}>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                            <div className="flex-1 transition-transform duration-300 ease-out group-hover:translate-x-1">
                              <span className={cn(
                                "block text-[14px] transition-colors duration-300",
                                isActive 
                                  ? "font-bold text-[var(--color-green-600)]" 
                                  : "font-medium text-[var(--color-navy-800)] group-hover:text-[var(--color-green-600)]"
                              )}>
                                {link.label}
                              </span>
                              {link.description && (
                                <span className={cn(
                                  "block text-[13px] mt-1 transition-colors duration-300",
                                  isActive
                                    ? "text-[var(--color-navy-700)] font-medium"
                                    : "text-[var(--color-gray-500)] group-hover:text-[var(--color-navy-600)]"
                                )}>
                                  {link.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MobileMenu({
  setMobileOpen,
  mobileExpanded,
  setMobileExpanded,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  mobileExpanded: string | null;
  setMobileExpanded: (v: string | null) => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
        onClick={() => setMobileOpen(false)}
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 z-[61] h-full w-full max-w-sm overflow-y-auto bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-gray-100)] p-5">
          <Image
            src="/OpsFloLogo.png"
            alt="OpsFlo"
            width={120}
            height={36}
            className="h-8 w-auto"
          />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-gray-50)] text-[var(--color-navy-900)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="p-5">
          {NAV.map((group) => (
            <div key={group.label} className="border-b border-[var(--color-gray-100)]">
              {group.href ? (
                <Link
                  href={group.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-[15px] font-medium text-[var(--color-navy-900)]"
                >
                  {group.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === group.label ? null : group.label
                      )
                    }
                    className="flex w-full items-center justify-between py-3.5 text-[15px] font-medium text-[var(--color-navy-900)]"
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileExpanded === group.label && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileExpanded === group.label && group.columns && (
                    <div className="pb-3 pl-3">
                      {group.columns.map((col) => (
                        <div key={col.heading} className="mb-3">
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-navy-900)]/60">
                            {col.heading}
                          </p>
                          {col.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1.5 text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-green-600)]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="mt-6">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-pill-lime w-full justify-center text-sm"
            >
              {SITE.primaryCTAs.demo}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={SITE.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-navy-900)]"
            >
              Login →
            </Link>
          </div>
        </nav>
      </motion.aside>
    </>
  );
}
