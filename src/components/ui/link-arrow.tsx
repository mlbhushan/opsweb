import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type LinkArrowProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkArrow({ href, children, className }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn("btn-ghost-arrow", className)}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
