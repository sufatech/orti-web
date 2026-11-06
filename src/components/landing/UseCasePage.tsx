import Image from "next/image";
import Link from "next/link";
import { IPhone } from "@/components/story/PhoneFrame";
import { StoreLinks } from "@/components/ui/StoreLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { landing, type LandingId } from "@/content/landing";
import { guidesMeta } from "@/content/guides-meta";
import { translations, type Locale } from "@/i18n/translations";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function UseCasePage({ id, locale }: { id: LandingId; locale: Locale }) {
  const c = landing[id][locale];
  const hero = translations[locale].hero;
  const guide = guidesMeta[c.guideId as keyof typeof guidesMeta][locale];
  const homePath = locale === "en" ? "/en" : "/";
  const homeName = locale === "en" ? "Home" : "Ana sayfa";
  const others = (Object.keys(landing) as LandingId[]).filter((o) => o !== id);
  const screenSrc = (screen: string) => `/images/screens/${screen}-${locale}.webp`;

  return (
    <main className="flex-grow bg-background">
      <JsonLd
        data={[
          faqJsonLd(c.faq),
          breadcrumbJsonLd([
            { name: homeName, path: homePath },
            { name: c.breadcrumb, path: c.path },
          ]),
        ]}
      />

      <section className="overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-primary">{c.eyebrow}</p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-text-main sm:text-6xl">{c.h1}</h1>
            <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-text-muted lg:text-xl">{c.lead}</p>
            <StoreLinks appStoreLabel={hero.appStore} googlePlayLabel={hero.googlePlay} tone="light" className="mt-7" />
          </div>
          <div className="mx-auto w-full max-w-[260px] lg:col-span-5 lg:max-w-[300px]">
            <IPhone className="w-full">
              <Image unoptimized src={screenSrc(c.steps[0].screen)} alt={c.steps[0].alt} width={1206} height={2622} className="h-full w-full select-none object-cover" />
            </IPhone>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-4xl">{c.stepsTitle}</h2>
          <ol className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {c.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-full max-w-[200px]">
                        <IPhone className="w-full">
                    <Image unoptimized src={screenSrc(step.screen)} alt={step.alt} width={1206} height={2622} loading="lazy" className="h-full w-full select-none object-cover" />
                  </IPhone>
                </div>
                <p className="mt-6 text-sm font-bold tabular-nums text-primary">0{i + 1}</p>
                <h3 className="mt-1 text-xl font-extrabold tracking-[-0.02em] text-text-main">{step.title}</h3>
                <p className="mt-2 max-w-sm text-pretty text-base leading-relaxed text-text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-black/[0.06] py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-3xl">{c.goodTitle}</h2>
          <ul className="mt-6 space-y-3">
            {c.good.map((g) => (
              <li key={g} className="rounded-2xl border border-black/[0.08] bg-surface px-5 py-4 text-base leading-relaxed text-text-main">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-3xl">{c.faqTitle}</h2>
          <div className="mt-6 divide-y divide-black/[0.08] rounded-2xl border border-black/[0.08] bg-background">
            {c.faq.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-text-main [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-primary transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-pretty text-base leading-relaxed text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-2 text-base">
            <Link href={guide.path} className="font-semibold text-primary hover:underline">
              {locale === "en" ? "Guide: " : "Rehber: "}
              {guide.title}
            </Link>
            {others.map((o) => (
              <Link key={o} href={landing[o][locale].path} className="font-semibold text-primary hover:underline">
                {landing[o][locale].breadcrumb}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] py-12 lg:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-3xl">{c.ctaTitle}</h2>
          <p className="text-pretty text-base text-text-muted">{c.ctaBody}</p>
          <StoreLinks appStoreLabel={hero.appStore} googlePlayLabel={hero.googlePlay} tone="light" className="justify-center" />
        </div>
      </section>
    </main>
  );
}
