import { siteConfig } from "@/config/site";

export type GoTarget = "ios" | "android" | "desktop";

export function detectPlatform(userAgent: string | null | undefined): GoTarget {
  const ua = userAgent ?? "";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "desktop";
}

/** Campaign tags go into store URLs; keep them to a safe, short alphabet. */
export function cleanTag(value: string | null | undefined, fallback: string): string {
  const v = (value ?? "").trim().toLowerCase();
  return /^[a-z0-9_-]{1,40}$/.test(v) ? v : fallback;
}

/** Where `/go` sends a visitor. `c` = campaign, `s` = source (default `bio`). */
export function goDestination(userAgent: string | null | undefined, params: { c?: string | null; s?: string | null }): string {
  const campaign = cleanTag(params.c, "bio");
  const source = cleanTag(params.s, "bio");
  switch (detectPlatform(userAgent)) {
    case "ios":
      return `${siteConfig.links.appStore}?ct=${campaign}`;
    case "android": {
      const referrer = encodeURIComponent(`utm_source=${source}&utm_campaign=${campaign}`);
      return `${siteConfig.links.googlePlay}&referrer=${referrer}`;
    }
    default:
      return `${siteConfig.url}/#download`;
  }
}
