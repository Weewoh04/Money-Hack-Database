import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { hacks } from "@/data/hacks";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-05-04");

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/hacks", priority: 0.95 },
  { path: "/categories", priority: 0.8 },
  { path: "/blog", priority: 0.85 },
  { path: "/spreadsheets", priority: 0.85 },
  { path: "/resources", priority: 0.8 },
  { path: "/about", priority: 0.5 },
  { path: "/disclosure", priority: 0.35 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
    ...hacks.map((hack) => ({
      url: absoluteUrl(`/hacks/${hack.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
