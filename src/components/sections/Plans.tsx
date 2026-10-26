"use client";

import { motion as m } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
};

export function Plans() {
  const { t } = useI18n();
  const p = t.plans;

  return (
    <section id="plans" className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
          {p.title}
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-5 lg:items-stretch">
          <m.div {...reveal} className="rounded-3xl border border-black/10 bg-surface p-8 lg:col-span-2">
            <h3 className="text-xl font-bold text-text-main">{p.free.name}</h3>
            <ul className="mt-6 space-y-4">
              {p.free.items.map((item) => (
                <li key={item} className="flex gap-3 text-text-muted">
                  <Check size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            className="rounded-3xl bg-primary p-8 text-white shadow-[0_24px_50px_-20px_rgba(99,14,212,0.6)] lg:col-span-3"
          >
            <h3 className="text-xl font-bold">{p.pro.name}</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {p.pro.items.map((item) => (
                <li key={item} className="flex gap-3 text-white/90">
                  <Check size={20} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
