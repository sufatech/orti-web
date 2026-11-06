"use client";

import { useEffect, useState } from "react";
import * as m from "framer-motion/m";
import { AnimatePresence, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function DebtSimplify() {
  const { t } = useI18n();
  const reducedMotion = useReducedMotion();
  const [simplified, setSimplified] = useState<boolean>(true);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);

  useEffect(() => {
    if (reducedMotion || userInteracted) {
      return;
    }
    const interval = window.setInterval(() => {
      setSimplified((prev) => !prev);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [reducedMotion, userInteracted]);

  const isAfter = reducedMotion && !userInteracted ? true : simplified;
  const s = t.simplify;

  const handleSelect = (next: boolean) => {
    setUserInteracted(true);
    setSimplified(next);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="features"
        className="border-t border-black/[0.06] bg-background py-14 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary-container/70 px-3 py-1 text-xs font-bold text-primary">
              <Sparkles size={13} aria-hidden="true" />
              <span>{s.eyebrow}</span>
            </div>
            <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-4xl">
              {s.title}
            </h2>
            <p className="mx-auto mt-2.5 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-[17px]">
              {s.description}
            </p>
          </div>

          {/* Interactive Highlight Stage Card */}
          <div className="mt-8 rounded-3xl border border-black/[0.08] bg-surface p-5 shadow-[0_20px_50px_-20px_rgba(17,24,39,0.10)] sm:p-8">
            {/* Top Bar: Segmented Toggle + Animated 2 -> 1 Counter */}
            <div className="flex flex-col items-center justify-between gap-4 border-b border-black/[0.06] pb-5 sm:flex-row">
              <div
                role="group"
                aria-label={s.title}
                className="inline-flex rounded-2xl border border-black/[0.08] bg-background p-1"
              >
                <button
                  type="button"
                  aria-pressed={!isAfter}
                  onClick={() => handleSelect(false)}
                  className={`min-h-11 rounded-xl px-4 text-xs font-bold tabular-nums transition-colors sm:px-5 sm:text-sm ${
                    !isAfter
                      ? "bg-surface text-text-main shadow-xs ring-1 ring-black/[0.08]"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {s.before}
                </button>
                <button
                  type="button"
                  aria-pressed={isAfter}
                  onClick={() => handleSelect(true)}
                  className={`min-h-11 rounded-xl px-4 text-xs font-bold tabular-nums transition-colors sm:px-5 sm:text-sm ${
                    isAfter
                      ? "bg-primary text-white shadow-sm"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {s.after}
                </button>
              </div>

              {/* Animated Counter 2 -> 1 */}
              <div className="flex items-center gap-3">
                {isAfter && (
                  <span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-600/20 sm:inline-flex">
                    <CheckCircle2 size={13} aria-hidden="true" />
                    {s.savedBadge}
                  </span>
                )}
                <div className="inline-flex items-baseline gap-1.5 rounded-2xl border border-primary/15 bg-primary-container/60 px-4 py-2 tabular-nums">
                  <AnimatePresence mode="wait" initial={false}>
                    <m.span
                      key={isAfter ? "1" : "2"}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: EASE_OUT }}
                      className="text-2xl font-extrabold leading-none text-primary sm:text-3xl"
                    >
                      {isAfter ? "1" : "2"}
                    </m.span>
                  </AnimatePresence>
                  <span className="text-xs font-bold text-primary/90 sm:text-sm">
                    {isAfter ? s.counterUnit : s.counterUnitPlural}
                  </span>
                </div>
              </div>
            </div>

            {/* A -> C -> D Chain Stage */}
            <div className="relative mx-auto mt-8 h-36 max-w-2xl sm:h-40">
              {/* Node A (Ali) */}
              <div className="absolute left-[10%] top-4 flex w-20 -translate-x-1/2 flex-col items-center gap-2 sm:left-[12%]">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary-container text-lg font-extrabold text-primary ring-2 ring-primary/20 sm:size-16 sm:text-xl">
                  A
                </div>
                <span className="text-xs font-bold text-text-main sm:text-sm">
                  {s.people.a}
                </span>
              </div>

              {/* Node C (Can - middleman) */}
              <m.div
                initial={false}
                animate={{
                  opacity: isAfter ? 0.35 : 1,
                  y: isAfter ? 18 : 0,
                  scale: isAfter ? 0.9 : 1,
                }}
                transition={{ duration: 0.32, ease: EASE_OUT }}
                className="absolute left-1/2 top-4 flex w-28 -translate-x-1/2 flex-col items-center gap-2"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-surface text-lg font-extrabold text-text-muted ring-2 ring-black/15 sm:size-16 sm:text-xl">
                  C
                </div>
                <span className="text-xs font-bold text-text-main sm:text-sm">
                  {s.people.b}
                </span>
                {isAfter && (
                  <span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[10px] font-bold tabular-nums text-text-muted">
                    {s.bypassedLabel}
                  </span>
                )}
              </m.div>

              {/* Node D (Deniz) */}
              <div className="absolute left-[90%] top-4 flex w-20 -translate-x-1/2 flex-col items-center gap-2 sm:left-[88%]">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white shadow-md shadow-primary/25 sm:size-16 sm:text-xl">
                  D
                </div>
                <span className="text-xs font-bold text-text-main sm:text-sm">
                  {s.people.c}
                </span>
              </div>

              {/* BEFORE: 2 transfer arrows (A -> C and C -> D) */}
              <m.div
                initial={false}
                animate={{
                  opacity: isAfter ? 0 : 1,
                  scale: isAfter ? 0.96 : 1,
                }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
                aria-hidden={isAfter}
                className="pointer-events-none absolute inset-0"
              >
                {/* Arrow A -> C */}
                <div className="absolute left-[18%] top-11 flex w-[25%] -translate-y-1/2 items-center sm:left-[20%] sm:top-12 sm:w-[23%]">
                  <div className="h-1 flex-1 rounded-full bg-text-muted/45" />
                  <ArrowRight size={18} className="-ml-1 shrink-0 text-text-muted" aria-hidden="true" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-black/10 bg-background px-2.5 py-0.5 text-[11px] font-bold tabular-nums text-text-main">
                    {s.amount}
                  </span>
                </div>

                {/* Arrow C -> D */}
                <div className="absolute left-[57%] top-11 flex w-[25%] -translate-y-1/2 items-center sm:left-[57%] sm:top-12 sm:w-[23%]">
                  <div className="h-1 flex-1 rounded-full bg-text-muted/45" />
                  <ArrowRight size={18} className="-ml-1 shrink-0 text-text-muted" aria-hidden="true" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-black/10 bg-background px-2.5 py-0.5 text-[11px] font-bold tabular-nums text-text-main">
                    {s.amount}
                  </span>
                </div>
              </m.div>

              {/* AFTER: 1 direct transfer arrow (A -> D) */}
              <m.div
                initial={false}
                animate={{
                  opacity: isAfter ? 1 : 0,
                  y: isAfter ? 0 : -6,
                }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                aria-hidden={!isAfter}
                className="pointer-events-none absolute left-[18%] right-[18%] top-11 flex -translate-y-1/2 items-center sm:left-[20%] sm:right-[20%] sm:top-12"
              >
                <m.div
                  initial={false}
                  animate={{ scaleX: isAfter ? 1 : 0.2 }}
                  transition={{ duration: 0.32, ease: EASE_OUT }}
                  className="h-1.5 flex-1 origin-left rounded-full bg-primary"
                />
                <ArrowRight size={22} className="-ml-1.5 shrink-0 text-primary" aria-hidden="true" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-xs font-extrabold tabular-nums text-white shadow-md shadow-primary/30">
                  {s.people.a} → {s.people.c} · {s.amount}
                </span>
              </m.div>
            </div>

            {/* Bottom Summary Pill */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tabular-nums text-text-muted">
              {isAfter ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-container/70 px-3.5 py-1.5 font-bold text-primary">
                  <CheckCircle2 size={14} aria-hidden="true" />
                  {s.directLabel}: {s.people.a} → {s.people.c} ({s.amount})
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-3.5 py-1.5 text-text-muted ring-1 ring-black/[0.06]">
                  {s.chainLabel}: {s.people.a} → {s.people.b} ({s.amount}) + {s.people.b} → {s.people.c} ({s.amount})
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
