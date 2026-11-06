"use client";

import { useEffect, useState } from "react";
import * as m from "framer-motion/m";
import { LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import { CheckCircle2, Receipt } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function ThreeSteps() {
  const { t } = useI18n();
  const reducedMotion = useReducedMotion();
  const [tick, setTick] = useState<number>(1);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }
    const interval = window.setInterval(() => {
      setTick((prev) => (prev + 1) % 2);
    }, 2200);
    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const s = t.threeSteps;
  const members = t.hero.demo.members;
  const isFinal = reducedMotion ? true : tick === 1;

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="how-it-works"
        className="border-t border-black/[0.06] bg-surface py-14 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                {s.eyebrow}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-3xl lg:text-4xl">
                {s.title}
              </h2>
            </div>
            <p className="text-sm text-text-muted sm:text-base">{s.subtitle}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Card 1: Ekle (receipt -> amount fills) */}
            <m.article
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, ease: EASE_OUT }}
              className="flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-background p-5 shadow-2xs"
            >
              {/* Micro-animation stage */}
              <div className="mb-4 flex h-28 flex-col justify-center rounded-xl border border-black/[0.06] bg-surface p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-container text-primary">
                      <Receipt size={16} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-text-main">
                        {s.add.receiptLabel}
                      </p>
                      <p className="truncate text-[11px] text-text-muted">
                        {s.add.groupTag} · {s.add.categoryTag}
                      </p>
                    </div>
                  </div>

                  <m.div
                    initial={false}
                    animate={{
                      scale: isFinal ? 1 : 0.94,
                      opacity: isFinal ? 1 : 0.72,
                    }}
                    transition={{ duration: 0.28, ease: EASE_OUT }}
                    className="rounded-lg bg-primary-container/80 px-2.5 py-1 text-sm font-extrabold tabular-nums text-primary"
                  >
                    {isFinal ? s.add.amount : s.add.amountDraft}
                  </m.div>
                </div>

                {/* Progress fill bar */}
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06]">
                  <m.div
                    initial={false}
                    animate={{ scaleX: isFinal ? 1 : 0.35 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="h-full w-full origin-left rounded-full bg-primary"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold tabular-nums text-primary">
                    {s.add.step}
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-text-main">
                    {s.add.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {s.add.line}
                </p>
              </div>
            </m.article>

            {/* Card 2: Böl (split chips) */}
            <m.article
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, delay: 0.05, ease: EASE_OUT }}
              className="flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-background p-5 shadow-2xs"
            >
              {/* Micro-animation stage */}
              <div className="mb-4 flex h-28 flex-col justify-between rounded-xl border border-black/[0.06] bg-surface p-3">
                <div className="flex items-center justify-between">
                  <div className="inline-flex gap-1 rounded-lg bg-background p-0.5 text-[11px] font-bold">
                    {s.split.modes.map((mode, idx) => (
                      <span
                        key={mode}
                        className={`rounded-md px-2 py-0.5 ${
                          idx === 0
                            ? "bg-primary text-white"
                            : "text-text-muted"
                        }`}
                      >
                        {mode}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold tabular-nums text-text-muted">
                    {s.split.perPersonLabel}:{" "}
                    <strong className="text-primary">{s.split.shareAmount}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {members.map((member, idx) => (
                    <m.div
                      key={member.name}
                      initial={false}
                      animate={{
                        y: isFinal ? 0 : 4,
                        scale: isFinal ? 1 : 0.94,
                        opacity: isFinal ? 1 : 0.75,
                      }}
                      transition={{
                        duration: 0.26,
                        delay: !reducedMotion ? idx * 0.045 : 0,
                        ease: EASE_OUT,
                      }}
                      className="flex flex-col items-center rounded-lg border border-black/[0.06] bg-background py-1.5 px-1"
                    >
                      <span className="text-[10px] font-bold text-text-main truncate max-w-full">
                        {member.name}
                      </span>
                      <span className="text-[10px] font-extrabold tabular-nums text-primary">
                        {s.split.shareAmount}
                      </span>
                    </m.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold tabular-nums text-primary">
                    {s.split.step}
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-text-main">
                    {s.split.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {s.split.line}
                </p>
              </div>
            </m.article>

            {/* Card 3: Kapat (balance ticks to ₺0 with check) */}
            <m.article
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, delay: 0.1, ease: EASE_OUT }}
              className="flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-background p-5 shadow-2xs"
            >
              {/* Micro-animation stage */}
              <div className="mb-4 flex h-28 flex-col justify-center rounded-xl border border-black/[0.06] bg-surface p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold transition-colors duration-200 ${
                        isFinal
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-primary-container text-primary"
                      }`}
                    >
                      M
                    </span>
                    <div>
                      <p className="text-xs font-bold text-text-main">{s.settle.fromTo}</p>
                      <p className="text-[11px] font-medium text-text-muted">
                        {s.add.groupTag}
                      </p>
                    </div>
                  </div>

                  <m.div
                    key={isFinal ? "zero" : "owed"}
                    initial={false}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-extrabold tabular-nums ${
                      isFinal
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                        : "bg-amber-50 text-amber-800 ring-1 ring-amber-600/20"
                    }`}
                  >
                    {isFinal ? (
                      <>
                        <CheckCircle2 size={13} className="text-emerald-600" aria-hidden="true" />
                        <span>{s.settle.afterAmount}</span>
                        <span className="ml-0.5 text-[10px] font-bold">
                          · {s.settle.settledTag}
                        </span>
                      </>
                    ) : (
                      <span>{s.settle.beforeAmount}</span>
                    )}
                  </m.div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold tabular-nums text-primary">
                    {s.settle.step}
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-text-main">
                    {s.settle.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {s.settle.line}
                </p>
              </div>
            </m.article>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
