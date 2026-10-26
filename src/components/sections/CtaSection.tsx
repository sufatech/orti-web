"use client";

import * as m from "framer-motion/m";
import { LazyMotion, domAnimation } from "framer-motion";
import { StoreLinks } from "@/components/ui/StoreLinks";
import { useI18n } from "@/i18n/I18nContext";

export function CtaSection() {
  const { t } = useI18n();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative bg-primary">
        {/* Designed atmospheric bridge from the light FAQ surface back into the deep violet brand world */}
        <div
          aria-hidden="true"
          className="h-24 w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#EDE5FF_32%,#8B5CF6_68%,#630ED4_100%)] sm:h-36"
        />

        <section
          id="download"
          className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#7D2AE8_0%,_#630ED4_55%,_#4905A3_100%)] py-24 text-white lg:py-32"
        >
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-8 motion-reduce:opacity-100! motion-reduce:transform-none!"
            >
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {t.cta.title}
              </h2>

              <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                {t.cta.subtitle}
              </p>

              <StoreLinks
                appStoreLabel={t.hero.appStore}
                googlePlayLabel={t.hero.googlePlay}
                className="items-center justify-center pt-2"
                buttonClassName="h-14 px-8 text-base sm:text-lg"
              />
            </m.div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}
