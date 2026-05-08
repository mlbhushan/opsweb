import { cn } from "@/lib/utils";

type MetricTileProps = {
  value: string;
  label: string;
  description?: string;
  className?: string;
};

export function MetricTile({
  value,
  label,
  description,
  className,
}: MetricTileProps) {
  return (
    <div
      className={cn(
        "surface-card flex flex-col items-start gap-2",
        className
      )}
    >
      <span className="text-3xl font-bold text-[var(--color-navy-900)]">
        {value}
      </span>
      <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
        {label}
      </span>
      {description && (
        <span className="text-xs leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </span>
      )}
    </div>
  );
}
