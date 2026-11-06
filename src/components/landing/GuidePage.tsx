import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { StoreLinks } from "@/components/ui/StoreLinks";
import { landing } from "@/content/landing";
import type { Guide } from "@/lib/guides";
import { translations, type Locale } from "@/i18n/translations";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function GuidePage({ guide, locale }: { guide: Guide; locale: Locale }) {
  const hero = translations[locale].hero;
  const useCase = guide.id === "trip" ? landing.trip[locale] : landing.flatmates[locale];
  const homeName = locale === "en" ? "Home" : "Ana sayfa";
  const guidesName = locale === "en" ? "Guides" : "Rehber";
  return (
    <main className="flex-grow bg-surface pt-28 pb-16">
      <JsonLd
        data={[
          articleJsonLd({ title: guide.title, description: guide.metaDescription, path: guide.path, datePublished: guide.datePublished, locale }),
          breadcrumbJsonLd([
            { name: homeName, path: locale === "en" ? "/en" : "/" },
            { name: guidesName, path: guide.path },
            { name: guide.title, path: guide.path },
          ]),
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <p className="text-sm font-semibold text-primary">{guidesName}</p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-text-main sm:text-5xl">{guide.title}</h1>
        <p className="mt-3 text-sm text-text-muted">
          <time dateTime={guide.datePublished}>{guide.datePublished}</time>
        </p>
        <div className="prose prose-neutral mt-8 max-w-none text-text-muted prose-headings:text-text-main prose-a:text-primary">
          <guide.Body />
        </div>
        <div className="mt-12 rounded-3xl border border-black/[0.08] bg-background p-6">
          <p className="text-lg font-extrabold text-text-main">{useCase.ctaTitle}</p>
          <p className="mt-1 text-text-muted">{useCase.ctaBody}</p>
          <StoreLinks appStoreLabel={hero.appStore} googlePlayLabel={hero.googlePlay} tone="light" className="mt-5" />
          <Link href={useCase.path} className="mt-4 inline-block font-semibold text-primary hover:underline">
            {useCase.breadcrumb}
          </Link>
        </div>
      </article>
    </main>
  );
}
