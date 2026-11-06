import type { Locale } from "@/i18n/translations";

export type GuideId = "trip" | "flatmates";

export type GuideMeta = {
  id: GuideId;
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
};

const DATE = "2026-11-03";

export const guidesMeta: Record<GuideId, Record<Locale, GuideMeta>> = {
  trip: {
    tr: {
      id: "trip",
      slug: "tatile-cikmadan-once",
      path: "/rehber/tatile-cikmadan-once",
      title: "Tatile çıkmadan önce konuşulacak 5 şey",
      metaTitle: "Tatile Çıkmadan Önce Konuşulacak 5 Şey | Orti",
      metaDescription: "Ortak kasa, kim neyi öder, ortak olmayan harcamalar: tatil hesabı sonradan tartışma olmasın diye yola çıkmadan konuşulacaklar.",
      datePublished: DATE,
    },
    en: {
      id: "trip",
      slug: "before-a-group-trip",
      path: "/en/guides/before-a-group-trip",
      title: "5 things to agree on before a group trip",
      metaTitle: "5 Things to Agree on Before a Group Trip | Orti",
      metaDescription: "A shared pot, who pays for what, what stays personal: what to settle before you leave so the tab is easy to talk about later.",
      datePublished: DATE,
    },
  },
  flatmates: {
    tr: {
      id: "flatmates",
      slug: "ev-arkadasi-fatura-duzeni",
      path: "/rehber/ev-arkadasi-fatura-duzeni",
      title: "Ev arkadaşıyla fatura düzeni: 4 kural",
      metaTitle: "Ev Arkadaşıyla Fatura Düzeni: 4 Kural | Orti",
      metaDescription: "Faturayı kim öder, pay nasıl bölünür, biri evde olmayınca ne olur? Ev arkadaşlarıyla hesabı baştan netleştirmek için dört kural.",
      datePublished: DATE,
    },
    en: {
      id: "flatmates",
      slug: "flatmate-bills-rules",
      path: "/en/guides/flatmate-bills-rules",
      title: "Flatmate bills: 4 simple rules",
      metaTitle: "Flatmate Bills: 4 Simple Rules | Orti",
      metaDescription: "Who pays the bill, how shares are split, what happens when someone is away? Four rules to keep a shared home's tab clear from the start.",
      datePublished: DATE,
    },
  },
};

export const guideIds = Object.keys(guidesMeta) as GuideId[];
