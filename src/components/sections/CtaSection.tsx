"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 whitespace-nowrap">
              {t.hero.appStore}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 border-white text-white hover:bg-white/10 whitespace-nowrap">
              {t.hero.googlePlay}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
