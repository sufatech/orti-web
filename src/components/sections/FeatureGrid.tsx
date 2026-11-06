"use client";

import { Globe, KeyRound, Bell, FileText, WifiOff, Coins } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const ICONS = [Coins, WifiOff, Globe, Bell, FileText, KeyRound] as const;

export function FeatureGrid() {
  const { t } = useI18n();
  const g = t.showcase.grid;
  return (
    <section id="details" className="border-t border-black/[0.06] bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">{g.eyebrow}</p>
        <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-4xl">{g.title}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {g.items.map((it, i) => {
            const Icon = ICONS[i];
            return (
              <li key={it.title} className="rounded-2xl border border-black/[0.08] bg-background p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary-container text-primary">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-extrabold text-text-main">{it.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-text-muted">{it.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
