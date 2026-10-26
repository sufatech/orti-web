"use client";

import { motion } from "framer-motion";
import { StoreLinks } from "@/components/ui/StoreLinks";
import { useI18n } from "@/i18n/I18nContext";

export function CtaSection() {
  const { t } = useI18n();

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {t.cta.title}
          </h2>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed">
            {t.cta.subtitle}
          </p>

          <StoreLinks
            appStoreLabel={t.hero.appStore}
            googlePlayLabel={t.hero.googlePlay}
            className="items-center justify-center pt-4"
            buttonClassName="h-14 px-8 text-base sm:text-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
