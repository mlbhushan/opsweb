import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CTARowProps = {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
};

export function CTARow({ primary, secondary, className }: CTARowProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <Link href={primary.href} className="btn-pill-lime">
        {primary.label}
        <ArrowRight className="h-4 w-4" />
      </Link>
      {secondary && (
        <Link href={secondary.href} className="btn-ghost-arrow">
          {secondary.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
