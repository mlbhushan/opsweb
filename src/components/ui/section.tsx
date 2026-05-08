import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.ComponentPropsWithRef<"section"> & {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  dark?: boolean;
  tight?: boolean;
  containerClassName?: string;
};

export function Section({
  eyebrow,
  heading,
  intro,
  dark,
  tight,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        tight ? "section-tight" : "section",
        dark && "bg-navy-deep-gradient text-white",
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>
        {(eyebrow || heading || intro) && (
          <div className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {heading && <h2 className="heading-lg">{heading}</h2>}
            {intro && (
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
