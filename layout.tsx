import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://setco.cc"),
  title: {
    default: "SETCO Saudi Arabia | Technology Distribution & E-Commerce",
    template: "%s | SETCO Saudi Arabia",
  },
  description:
    "SETCO helps technology brands enter and grow in Saudi Arabia through smart device distribution, retail development, e-commerce and after-sales support.",
  keywords: [
    "technology distributor Saudi Arabia",
    "smart device distribution Saudi Arabia",
    "consumer electronics distributor KSA",
    "HTC Saudi Arabia partner",
    "electronics trading company Jeddah",
    "e-commerce distribution Saudi Arabia",
    "technology market entry Saudi Arabia",
    "after-sales support Saudi Arabia",
  ],
  authors: [{ name: "SETCO" }],
  creator: "SETCO",
  publisher: "SETCO",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: "/",
    siteName: "SETCO",
    title: "SETCO Saudi Arabia | Technology Distribution & E-Commerce",
    description:
      "Distribution, retail development, e-commerce and after-sales support for technology brands in Saudi Arabia.",
    images: [{ url: "/hero-building.jpg", width: 1368, height: 1824, alt: "SETCO Saudi Arabia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SETCO Saudi Arabia | Technology Distribution & E-Commerce",
    description: "A Saudi distribution and market-development partner for global technology brands.",
    images: ["/hero-building.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://setco.cc/#organization",
        name: "SETCO",
        alternateName: "Smart Economy for Trade and Import",
        url: "https://setco.cc/",
        logo: "https://setco.cc/setco-logo.png",
        email: "Support@setco.cc",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jeddah",
          addressCountry: "SA",
        },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
        knowsAbout: [
          "Smart device distribution",
          "Consumer electronics",
          "Retail channel development",
          "E-commerce",
          "After-sales support",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://setco.cc/#website",
        url: "https://setco.cc/",
        name: "SETCO",
        publisher: { "@id": "https://setco.cc/#organization" },
        inLanguage: ["en", "ar"],
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
