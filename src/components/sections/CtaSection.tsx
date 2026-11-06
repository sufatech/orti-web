"use client";

import Image from "next/image";
import * as m from "framer-motion/m";
import { LazyMotion, domAnimation } from "framer-motion";
import { StoreLinks } from "@/components/ui/StoreLinks";
import { useI18n } from "@/i18n/I18nContext";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function CtaSection() {
  const { t } = useI18n();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="download"
        className="border-t border-black/[0.06] bg-surface py-12 lg:py-16"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <m.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, ease: EASE_OUT }}
            className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-black/[0.08] bg-background p-6 text-center shadow-2xs sm:p-8 md:flex-row md:text-left"
          >
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <Image
                src="/app_icon.png"
                alt="Orti"
                width={64}
                height={64}
                unoptimized
                priority
                className="size-16 shrink-0 rounded-2xl bg-primary shadow-md shadow-primary/20 ring-1 ring-black/10"
              />
              <div>
                <h2 className="text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-3xl">
                  {t.cta.title}
                </h2>
                <p className="mt-1 max-w-lg text-pretty text-sm leading-relaxed text-text-muted sm:text-base">
                  {t.cta.subtitle}
                </p>
              </div>
            </div>

            <StoreLinks
              appStoreLabel={t.hero.appStore}
              googlePlayLabel={t.hero.googlePlay}
              tone="light"
              className="shrink-0 justify-center"
            />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
