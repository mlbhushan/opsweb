import { cn } from "@/lib/utils";

type StatProps = {
  value: string;
  label: string;
  className?: string;
};

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="stat-number">
        {value}
      </p>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{label}</p>
    </div>
  );
}
