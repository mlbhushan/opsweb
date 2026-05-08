import type { Metadata } from "next";
import { SITE } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
}: SeoInput): Metadata {
  const url = `${SITE.url}${path}`;
  const image = ogImage ?? SITE.ogImage;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/seo/favicon-192.png`,
    sameAs: [SITE.social.linkedin, SITE.social.twitter],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}
