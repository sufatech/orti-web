import type { MetadataRoute } from "next";
import { publicPages } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const page of publicPages) {
    const tr = absoluteUrl(page.meta.tr.path);
    const alternates = page.meta.en
      ? { languages: { tr, en: absoluteUrl(page.meta.en.path), "x-default": tr } }
      : undefined;
    for (const loc of ["tr", "en"] as const) {
      const meta = page.meta[loc];
      if (!meta) continue;
      entries.push({ url: absoluteUrl(meta.path), changeFrequency: page.changeFrequency, priority: page.priority, alternates });
    }
  }
  return entries;
}
