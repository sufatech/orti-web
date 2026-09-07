"use client";

import { Card } from "@/components/ui/Card";
import { Scan, Target, StickyNote, Globe, Zap, ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function Features() {
  const { t } = useI18n();

  const featureIcons = [
    <Scan key="scan" size={28} className="text-primary" />,
    <Target key="target" size={28} className="text-primary" />,
    <StickyNote key="note" size={28} className="text-primary" />,
    <Zap key="zap" size={28} className="text-primary" />,
    <Globe key="globe" size={28} className="text-primary" />,
    <ShieldCheck key="shield" size={28} className="text-primary" />,
  ];

  return (
    <section id="features" className="py-24 relative z-10 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            {t.features.badge.split("Orti")[0]}
            <span className="text-primary">Orti</span>
            {t.features.badge.split("Orti")[1] || ""}
          </h2>
          <p className="text-lg text-text-muted">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => {
            const icon = featureIcons[index] || featureIcons[0];
            return (
              <Card key={index} hoverEffect className="group bg-white border border-black/5 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="mb-6 p-3.5 rounded-2xl bg-primary/[0.08] text-primary w-fit border border-primary/15 group-hover:scale-105 group-hover:bg-primary/[0.12] transition-all duration-300">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
