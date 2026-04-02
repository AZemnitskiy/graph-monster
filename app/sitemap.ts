import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://graph.monster/group-explorer",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://graph.monster/topograph",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
