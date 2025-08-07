import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://supxdevs.com",
      lastModified: "2025-08-08",
      priority: 1.0
    },
  ];
}