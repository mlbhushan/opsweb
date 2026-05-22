import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { ChatWidget } from "@/components/chat";
import { SITE } from "@/lib/site";

/* Cabinet Grotesk — loaded via FontShare CDN link in <head> */

const geist = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | The Execution Layer for Oilfield Operations`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/seo/favicon-192.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        {/* Cabinet Grotesk — all weights (variable font, 100-900) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1,2,3,4,5,6,7,8&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisProvider>{children}</LenisProvider>
        <ChatWidget />
      </body>
    </html>
  );
}
