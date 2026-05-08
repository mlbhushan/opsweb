import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

type ComingSoonPageProps = {
  title: string;
  section?: string;
  backHref?: string;
  backLabel?: string;
};

export function ComingSoonPage({
  title,
  section,
  backHref = "/",
  backLabel = "Back to Home",
}: ComingSoonPageProps) {
  return (
    <main className="relative section flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        className="object-cover opacity-[0.04]"
        aria-hidden="true"
      />
      <Container className="relative z-10 text-center">
        <p className="eyebrow mb-4 justify-center">
          {section ?? "Coming Soon"}
        </p>
        <h1 className="heading-lg mx-auto max-w-2xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--text-muted)]">
          We&apos;re building this page. Check back soon or reach out to our
          team for more information.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact" className="btn-pill-lime text-sm">
            Talk to Us
          </Link>
          <Link
            href={backHref}
            className="btn-ghost-arrow text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>
      </Container>
    </main>
  );
}
