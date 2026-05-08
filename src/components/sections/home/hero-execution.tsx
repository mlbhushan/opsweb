"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HOME } from "@/lib/content/home";
import { Container } from "@/components/ui/container";
import { heroStagger, fadeUp } from "@/lib/animations";

const { hero } = HOME;

export function HeroExecution() {
  return (
    <section className="relative overflow-hidden gradient-mesh-hero">
      {/* Subtle decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(157,212,127,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-[10%] right-[15%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(8,65,130,0.04)_0%,transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="flex flex-col items-center pt-32 pb-20 text-center md:pt-40 md:pb-28 lg:pt-48 lg:pb-32"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            {hero.eyebrow}
          </motion.p>

          {/* Headline  -  Display font, massive, precise */}
          <motion.h1
            variants={fadeUp}
            className="heading-hero mx-auto max-w-[900px]"
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="body-lg mx-auto mt-6 max-w-[560px] text-[var(--color-text-secondary)]"
          >
            {hero.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href={hero.primaryCTA.href} className="btn-pill-lime">
              {hero.primaryCTA.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={hero.secondaryCTA.href} className="btn-pill-navy">
              {hero.secondaryCTA.label}
            </Link>
          </motion.div>

          {/* Logo strip */}
          <motion.div variants={fadeUp} className="mt-16 w-full">
            <p className="mb-6 text-sm font-medium text-[var(--color-text-muted)]">
              Integrates with the tools your teams already use
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {hero.logos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-7 w-auto object-contain opacity-30 grayscale transition-all duration-300 hover:opacity-60 hover:grayscale-0 md:h-9"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
