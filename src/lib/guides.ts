import type { ComponentType } from "react";
import type { Locale } from "@/i18n/translations";
import { guideIds, guidesMeta, type GuideId, type GuideMeta } from "@/content/guides-meta";
import TripTr from "@/content/guides/tatile-cikmadan-once.mdx";
import TripEn from "@/content/guides/before-a-group-trip.mdx";
import FlatTr from "@/content/guides/ev-arkadasi-fatura-duzeni.mdx";
import FlatEn from "@/content/guides/flatmate-bills-rules.mdx";

export type Guide = GuideMeta & { Body: ComponentType };

const bodies: Record<GuideId, Record<Locale, ComponentType>> = {
  trip: { tr: TripTr, en: TripEn },
  flatmates: { tr: FlatTr, en: FlatEn },
};

export function getGuide(id: GuideId, locale: Locale): Guide {
  return { ...guidesMeta[id][locale], Body: bodies[id][locale] };
}

export function guideBySlug(locale: Locale, slug: string): Guide | undefined {
  const id = guideIds.find((g) => guidesMeta[g][locale].slug === slug);
  return id ? getGuide(id, locale) : undefined;
}
