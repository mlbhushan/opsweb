import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type BentoCardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

export function BentoCard({
  icon: Icon,
  title,
  description,
  className,
  children,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "surface-card relative overflow-hidden",
        className
      )}
    >
      {Icon && (
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-green-50)] text-[var(--color-green-600)]">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="text-base font-semibold text-[var(--color-navy-900)]">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {description}
      </p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
