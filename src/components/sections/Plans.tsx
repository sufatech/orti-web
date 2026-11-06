"use client";

import * as m from "framer-motion/m";
import { LazyMotion, domAnimation } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Plans() {
  const { t } = useI18n();
  const p = t.plans;

  return (
    <LazyMotion features={domAnimation}>
      <section id="plans" className="border-t border-black/[0.06] bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <h2 className="mx-auto max-w-2xl text-balance text-center text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-4xl">
            {p.title}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5 lg:items-stretch">
            <m.div
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, ease: EASE_OUT }}
              className="rounded-2xl border border-black/[0.08] bg-background p-6 shadow-2xs lg:col-span-2"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-extrabold text-text-main">{p.free.name}</h3>
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-text-muted ring-1 ring-black/[0.08]">
                  {p.free.badge}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-sm sm:text-base tabular-nums">
                {p.free.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-pretty text-text-muted">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.div>

            <m.div
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, delay: 0.05, ease: EASE_OUT }}
              className="rounded-2xl border border-primary/20 bg-primary-container/45 p-6 shadow-xs lg:col-span-3"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-extrabold text-text-main">{p.pro.name}</h3>
                <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-white">
                  {p.pro.badge}
                </span>
              </div>
              <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2 sm:text-base tabular-nums">
                {p.pro.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-pretty text-text-main">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
