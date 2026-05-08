import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoCloudProps = {
  logos: { name: string; src: string }[];
  heading?: string;
  className?: string;
};

export function LogoCloud({ logos, heading, className }: LogoCloudProps) {
  return (
    <div className={cn("text-center", className)}>
      {heading && (
        <p className="mb-8 text-sm font-medium text-[var(--color-text-muted)]">
          {heading}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:gap-12">
        {logos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={120}
            height={40}
            className="h-8 w-auto object-contain md:h-10"
          />
        ))}
      </div>
    </div>
  );
}
