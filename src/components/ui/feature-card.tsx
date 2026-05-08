import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("surface-card group", className)}>
      {Icon && (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-green-50)] text-[var(--color-green-600)] transition group-hover:bg-[var(--color-green-100)]">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--color-navy-900)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {description}
      </p>
    </div>
  );
}
