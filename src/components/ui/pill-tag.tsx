import { cn } from "@/lib/utils";

type PillTagProps = {
  children: React.ReactNode;
  variant?: "lime" | "navy" | "muted";
  className?: string;
};

export function PillTag({
  children,
  variant = "lime",
  className,
}: PillTagProps) {
  const variants = {
    lime: "bg-[var(--color-green-100)] text-[var(--color-green-700)]",
    navy: "bg-[var(--color-navy-100)] text-[var(--color-navy-900)]",
    muted: "bg-[var(--color-gray-100)] text-[var(--color-text-muted)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
