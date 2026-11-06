import type { Metadata } from "next";
import type { Locale } from "@/i18n/translations";
import { siteConfig } from "@/config/site";
import { pageById } from "@/lib/pages";

export function absoluteUrl(path: string): string {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

/** Title, description, canonical, hreflang and social tags for a registered page. */
export function pageMetadata(id: string, locale: Locale): Metadata {
  const page = pageById(id);
  const own = page.meta[locale] ?? page.meta.tr;
  const languages: Record<string, string> = {};
  if (page.meta.en) {
    languages.tr = absoluteUrl(page.meta.tr.path);
    languages.en = absoluteUrl(page.meta.en.path);
    languages["x-default"] = languages.tr;
  }
  return {
    title: { absolute: own.title },
    description: own.description,
    alternates: { canonical: absoluteUrl(own.path), ...(page.meta.en ? { languages } : {}) },
    openGraph: {
      title: own.title,
      description: own.description,
      url: absoluteUrl(own.path),
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "website",
      images: [absoluteUrl("/opengraph-image.png")],
    },
    twitter: { card: "summary_large_image", title: own.title, description: own.description, images: [absoluteUrl("/opengraph-image.png")] },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/app_icon.png`,
    email: siteConfig.supportEmail,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["tr", "en"],
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    operatingSystem: "iOS, Android",
    applicationCategory: "FinanceApplication",
    url: siteConfig.url,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function articleJsonLd(a: { title: string; description: string; path: string; datePublished: string; locale: Locale }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    inLanguage: a.locale,
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    mainEntityOfPage: absoluteUrl(a.path),
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, logo: { "@type": "ImageObject", url: `${siteConfig.url}/app_icon.png` } },
  };
}
