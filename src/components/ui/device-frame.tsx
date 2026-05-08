import { cn } from "@/lib/utils";

type DeviceFrameProps = {
  children: React.ReactNode;
  variant?: "laptop" | "phone";
  className?: string;
};

export function DeviceFrame({
  children,
  variant = "laptop",
  className,
}: DeviceFrameProps) {
  if (variant === "phone") {
    return (
      <div
        className={cn(
          "relative mx-auto w-[280px] rounded-[2.5rem] border-[6px] border-[var(--color-navy-900)] bg-[var(--color-navy-900)] p-2 shadow-2xl",
          className
        )}
      >
        <div className="overflow-hidden rounded-[2rem] bg-white">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {/* Laptop screen */}
      <div className="rounded-t-xl border-[6px] border-b-0 border-[var(--color-navy-900)] bg-[var(--color-navy-900)] p-1">
        <div className="overflow-hidden rounded-t-lg bg-white">{children}</div>
      </div>
      {/* Laptop base */}
      <div className="relative mx-auto h-4 w-[110%] max-w-full rounded-b-xl bg-gradient-to-b from-[#2a2a3a] to-[#1a1a2a]">
        <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b bg-[#3a3a4a]" />
      </div>
    </div>
  );
}
