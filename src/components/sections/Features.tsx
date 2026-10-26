"use client";

import {
  ArrowRightLeft,
  CheckCircle2,
  FileArchive,
  ReceiptText,
  SlidersHorizontal,
  UserPlus,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useI18n } from "@/i18n/I18nContext";

export function Features() {
  const { t } = useI18n();

  const featureIcons = [
    <SlidersHorizontal key="split" size={26} className="text-primary" aria-hidden="true" />,
    <ArrowRightLeft key="simplify" size={26} className="text-primary" aria-hidden="true" />,
    <ReceiptText key="notes" size={26} className="text-primary" aria-hidden="true" />,
    <CheckCircle2 key="settle" size={26} className="text-primary" aria-hidden="true" />,
    <FileArchive key="export" size={26} className="text-primary" aria-hidden="true" />,
    <UserPlus key="invite" size={26} className="text-primary" aria-hidden="true" />,
  ];

  return (
    <section id="features" className="relative z-10 border-t border-black/[0.05] bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
            {t.features.badge.split("Orti")[0]}
            <span className="text-primary">Orti</span>
            {t.features.badge.split("Orti")[1] || ""}
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, index) => {
            const icon = featureIcons[index] || featureIcons[0];
            return (
              <Card
                key={feature.title}
                hoverEffect
                className="group rounded-3xl border border-black/[0.06] bg-background/60 p-7 shadow-sm transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/25 motion-reduce:opacity-100! motion-reduce:transform-none!"
              >
                <div className="mb-5 w-fit rounded-2xl border border-primary/15 bg-primary-container p-3.5 text-primary transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105">
                  {icon}
                </div>
                <h3 className="mb-2.5 text-xl font-bold tracking-tight text-text-main">
                  {feature.title}
                </h3>
                <p className="text-pretty leading-relaxed text-text-muted">
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
