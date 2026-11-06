"use client";

import Image from "next/image";
import * as m from "framer-motion/m";
import { LazyMotion, domAnimation } from "framer-motion";
import { Check, Target } from "lucide-react";
import { PhoneFrame, getScreenSrc } from "@/components/story/PhoneFrame";
import { useI18n } from "@/i18n/I18nContext";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-2.5 text-[15px] font-medium text-text-main">
          <Check size={18} strokeWidth={3} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Copy({ eyebrow, title, description, bullets }: { eyebrow: string; title: string; description: string; bullets: readonly string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-text-muted sm:text-[17px]">{description}</p>
      <Bullets items={bullets} />
    </div>
  );
}

const rise = {
  initial: { opacity: 1, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.4, ease: EASE_OUT },
} as const;

export function Showcase() {
  const { t, locale } = useI18n();
  const r = t.showcase.receipt;
  const g = t.showcase.guests;
  const w = t.showcase.wallet;

  return (
    <LazyMotion features={domAnimation}>
      <section id="showcase" className="border-t border-black/[0.06] bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-16 px-5 sm:px-6 lg:space-y-24">
          {/* Receipt scan: a drawn receipt, the scan line runs once per loop and rests when motion is reduced */}
          <m.div {...rise} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Copy eyebrow={r.eyebrow} title={r.title} description={r.description} bullets={r.bullets} />
            <div role="img" aria-label={r.mock.label} className="mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-3xl border border-black/[0.08] bg-surface p-6 shadow-[0_20px_50px_-20px_rgba(42,10,94,0.25)]">
                <div aria-hidden="true">
                  <p className="text-center text-sm font-extrabold tracking-wide text-text-main">{r.mock.merchant}</p>
                  <p className="mt-0.5 text-center text-xs text-text-muted">{r.mock.date}</p>
                  <div className="my-4 space-y-2">
                    {[78, 64, 90, 52].map((wd, i) => (
                      <div key={i} className="h-2 rounded-full bg-black/[0.07]" style={{ width: `${wd}%` }} />
                    ))}
                  </div>
                  <div className="flex items-end justify-between border-t border-dashed border-black/20 pt-3">
                    <span className="text-sm font-semibold text-text-muted">{r.mock.totalLabel}</span>
                    <span className="text-3xl font-extrabold tracking-[-0.03em] tabular-nums text-text-main">{r.mock.total}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-container px-3 py-1 text-xs font-bold text-primary">
                      <Check size={13} strokeWidth={3} />
                      {r.mock.detected}: {r.mock.category}
                    </span>
                  </div>
                  <span className="scan-line pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-primary shadow-[0_0_18px_4px_rgba(99,14,212,0.45)] motion-reduce:hidden" />
                </div>
              </div>
            </div>
          </m.div>

          {/* Guests: the real group balances screen */}
          <m.div {...rise} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="order-2 mx-auto w-full max-w-[300px] lg:order-1">
              <PhoneFrame className="h-[520px]">
                <Image
                  src={getScreenSrc("group-debts", locale)}
                  alt={g.phoneAlt}
                  width={1206}
                  height={2622}
                  sizes="(min-width: 1024px) 260px, 240px"
                  className="h-full w-full select-none object-cover"
                />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2">
              <Copy eyebrow={g.eyebrow} title={g.title} description={g.description} bullets={g.bullets} />
            </div>
          </m.div>

          {/* Wallet and goals */}
          <m.div {...rise} className="rounded-3xl border border-black/[0.08] bg-surface p-6 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <Copy eyebrow={w.eyebrow} title={w.title} description={w.description} bullets={w.bullets} />
              <div aria-hidden="true" className="mx-auto flex size-40 items-center justify-center rounded-full bg-primary-container text-primary sm:size-52">
                <Target size={72} strokeWidth={1.5} />
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
