import type { MetadataRoute } from "next";
import type { Locale } from "@/i18n/translations";
import { guideIds, guidesMeta as guides } from "@/content/guides-meta";
import { landing, landingIds } from "@/content/landing";

export type LocalizedMeta = { path: string; title: string; description: string };

export type PublicPage = {
  id: string;
  /** Both locales, or only `tr` for a page that exists once. */
  meta: { tr: LocalizedMeta } & Partial<Record<"en", LocalizedMeta>>;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const home: PublicPage = {
  id: "home",
  meta: {
    tr: {
      path: "/",
      title: "Orti: Ortak Gider ve Hesap Bölüşme Uygulaması",
      description: "Ev arkadaşı faturası, tatil masrafı, arkadaş grubu hesabı. Kim ödedi, kim kime borçlu tek ekranda. iOS ve Android, ücretsiz başla.",
    },
    en: {
      path: "/en",
      title: "Orti: Split Expenses and Bills With Friends",
      description: "Flatmate bills, trip costs, friend group tabs. See who paid and who owes whom on one screen. iOS and Android, free to start.",
    },
  },
  priority: 1,
  changeFrequency: "weekly",
};

const legalPair = (id: string, tr: Omit<LocalizedMeta, "title" | "description"> & { title: string; description: string }, en: LocalizedMeta): PublicPage => ({
  id,
  meta: { tr, en },
  priority: 0.3,
  changeFrequency: "yearly",
});

const staticPages: PublicPage[] = [
  legalPair(
    "contact",
    { path: "/iletisim", title: "İletişim ve Destek | Orti", description: "Orti hakkında soru, geri bildirim ya da destek talebin mi var? Bize yaz, en kısa sürede dönelim." },
    { path: "/contact", title: "Contact and Support | Orti", description: "Questions, feedback or a support request about Orti? Write to us and we will get back to you as soon as we can." },
  ),
  legalPair(
    "privacy",
    { path: "/gizlilik-politikasi", title: "Gizlilik Politikası | Orti", description: "Orti'nin hangi verileri nasıl işlediği, nerede sakladığı ve haklarının neler olduğu. Orti para göndermez, ödeme bilgisi tutmaz." },
    { path: "/privacy-policy", title: "Privacy Policy | Orti", description: "What data Orti processes, where it is stored and what rights you have. Orti never sends money and holds no payment credentials." },
  ),
  legalPair(
    "terms",
    { path: "/kullanim-kosullari", title: "Kullanım Koşulları | Orti", description: "Orti uygulamasını ve web sitesini kullanırken geçerli olan koşullar." },
    { path: "/terms-of-service", title: "Terms of Service | Orti", description: "The terms that apply when you use the Orti app and website." },
  ),
  {
    id: "delete-account",
    meta: {
      tr: {
        path: "/delete-account",
        title: "Hesap Silme | Delete Account | Orti",
        description: "Orti hesabını ve verilerini nasıl sildirirsin. How to delete your Orti account and data.",
      },
    },
    priority: 0.2,
    changeFrequency: "yearly",
  },
];

const landingPages: PublicPage[] = landingIds.map((id) => ({
  id: `landing-${id}`,
  meta: {
    tr: { path: landing[id].tr.path, title: landing[id].tr.metaTitle, description: landing[id].tr.metaDescription },
    en: { path: landing[id].en.path, title: landing[id].en.metaTitle, description: landing[id].en.metaDescription },
  },
  priority: 0.8,
  changeFrequency: "monthly",
}));

const guidePages: PublicPage[] = guideIds.map((id) => ({
  id: `guide-${id}`,
  meta: {
    tr: { path: guides[id].tr.path, title: guides[id].tr.metaTitle, description: guides[id].tr.metaDescription },
    en: { path: guides[id].en.path, title: guides[id].en.metaTitle, description: guides[id].en.metaDescription },
  },
  priority: 0.6,
  changeFrequency: "monthly",
}));

export const publicPages: PublicPage[] = [home, ...landingPages, ...guidePages, ...staticPages];

/** Locale a path is written in, or undefined when the visitor's saved choice applies. */
export function localeForPath(pathname: string): Locale | undefined {
  for (const page of publicPages) {
    for (const loc of ["tr", "en"] as const) {
      const m = page.meta[loc];
      if (m && page.meta.en && m.path !== "/" && m.path === pathname) return loc;
    }
  }
  return undefined;
}

export function pageById(id: string): PublicPage {
  const page = publicPages.find((p) => p.id === id);
  if (!page) throw new Error(`Unknown page ${id}`);
  return page;
}
