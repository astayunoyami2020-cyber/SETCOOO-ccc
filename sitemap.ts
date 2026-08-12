import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://setco.cc/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://setco.cc/services", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://setco.cc/contact", lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
