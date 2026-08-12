import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SETCO",
  description:
    "Contact SETCO in Jeddah for technology distribution, Saudi market development, retail, e-commerce and partnership enquiries.",
  keywords: [
    "contact technology distributor Saudi Arabia",
    "SETCO Jeddah",
    "Saudi market distribution partner",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact SETCO Saudi Arabia",
    description: "Discuss distribution, retail, e-commerce or a technology partnership with SETCO.",
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
