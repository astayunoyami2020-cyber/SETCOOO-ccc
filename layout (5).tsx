import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Device Distribution & HTC Partnership",
  description:
    "Explore SETCO smart device distribution, Saudi retail channel development, warehousing and after-sales support for HTC products.",
  keywords: [
    "HTC distributor Saudi Arabia",
    "smartphone distribution KSA",
    "electronics wholesale Saudi Arabia",
    "technology retail channels Jeddah",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Smart Device Distribution & HTC Partnership | SETCO",
    description: "SETCO develops distribution, retail access and after-sales support for HTC in Saudi Arabia.",
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
