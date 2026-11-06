"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as m from "framer-motion/m";
import { AnimatePresence, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { PhoneFrame, getScreenSrc, type ScreenKey } from "@/components/story/PhoneFrame";
import { StoreLinks } from "@/components/ui/StoreLinks";
import { useI18n } from "@/i18n/I18nContext";

/** add -> split -> settle; the settle beat holds longest so the ₺0 lands and is read. */
const PHASES = [
  { screen: "add-expense", ms: 1700 },
  { screen: "add-expense", ms: 1900 },
  { screen: "group-debts", ms: 3400 },
] as const satisfies readonly { screen: ScreenKey; ms: number }[];
const SETTLED = PHASES.length - 1;
const COUNT_MS = 1100;
const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

/** Counts `from` -> 0 while `run` is true; returns the shown value. Settled state when motion is reduced. */
function useCountDown(from: number, run: boolean, reduced: boolean | null): number {
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    if (!run || reduced) return;
    const start = performance.now() + 250;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / COUNT_MS));
      setProgress(t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf.current);
      setProgress(0);
    };
  }, [from, run, reduced]);
  if (!run) return from;
  if (reduced) return 0;
  return from * (1 - progress);
}

export function Hero() {
  const { t, locale } = useI18n();
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<number>(SETTLED);

  // Server render and reduced motion show the settled state; with motion the loop starts at "add".
  const started = useRef(false);
  useEffect(() => {
    if (reduced) return;
    const delay = started.current ? PHASES[phase].ms : 400;
    const id = window.setTimeout(() => {
      started.current = true;
      setPhase((p) => (started.current && p === SETTLED && delay === 400 ? 0 : (p + 1) % PHASES.length));
    }, delay);
    return () => window.clearTimeout(id);
  }, [phase, reduced]);

  const active = reduced ? SETTLED : phase;
  const d = t.hero.demo;
  const s = t.story.screens;
  const settled = active === SETTLED;
  const owed = useCountDown(d.owedTotal, settled, reduced);
  const money = new Intl.NumberFormat(d.numberLocale, {
    style: "currency",
    currency: d.currency,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: owed > 0 && owed < 1000 && d.owedTotal % 1 !== 0 ? 2 : 0,
  }).format(Math.max(0, owed));
  const landed = settled && owed <= 0.5;

  return (
    <LazyMotion features={domAnimation}>
      <section id="hero" className="relative overflow-hidden bg-background pt-20 pb-10 lg:flex lg:h-svh lg:max-h-[920px] lg:items-center lg:pt-16 lg:pb-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-6">
          {/* Promise */}
          <div className="relative z-10 lg:col-span-7">
            <p className="text-sm font-semibold text-primary">{t.hero.eyebrow}</p>
            <h1 className="mt-3 text-[2.9rem] font-extrabold leading-[0.95] tracking-[-0.045em] text-text-main sm:text-7xl lg:text-[5.4rem] xl:text-[6.1rem]">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block text-primary">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-[17px] leading-relaxed text-text-muted lg:text-xl">{t.hero.subtitle}</p>
            <StoreLinks
              appStoreLabel={t.hero.appStore}
              googlePlayLabel={t.hero.googlePlay}
              tone="light"
              className="mt-7"
              buttonClassName="px-5 text-sm lg:px-6 lg:text-base"
            />
          </div>

          {/* The product, untouched, with one card performing the moment beside it */}
          <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,14,212,0.18),transparent)] lg:size-[620px]"
            />
            <div className="relative flex justify-end pr-2 lg:justify-center lg:pr-0">
              <PhoneFrame className="h-[400px] sm:h-[460px] lg:h-[600px]">
                {(["add-expense", "group-debts"] as const).map((key) => (
                  <m.div
                    key={key}
                    initial={false}
                    animate={{ opacity: PHASES[active].screen === key ? 1 : 0, scale: PHASES[active].screen === key ? 1 : 1.03 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={getScreenSrc(key, locale)}
                      alt={key === "add-expense" ? s.add : s.debts}
                      width={1206}
                      height={2622}
                      unoptimized
                      priority
                      className="h-full w-full select-none object-cover"
                    />
                  </m.div>
                ))}
              </PhoneFrame>
            </div>

            {/* The one card: sits on the phone's left edge, never over the app's content */}
            <m.div
              layout
              transition={{ layout: { duration: 0.5, ease: EASE_IN_OUT } }}
              className="absolute bottom-6 left-0 z-20 w-[min(290px,78%)] rounded-[28px] border border-black/[0.06] bg-white p-5 shadow-[0_2px_4px_rgba(42,10,94,0.06),0_18px_40px_-12px_rgba(42,10,94,0.28)] lg:bottom-16 lg:-left-6 lg:w-[310px]"
              aria-live="polite"
            >
              <div className="flex items-center justify-between text-[13px] font-semibold text-text-muted">
                <span>{d.groupName}</span>
                <span className="tabular-nums">{d.groupMeta.split("·")[0].trim()}</span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {active === 0 && (
                  <m.div key="add" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE_OUT }} className="mt-3">
                    <p className="text-[15px] font-semibold text-text-main">{d.expenseTitle}</p>
                    <m.p
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 26, delay: 0.08 }}
                      className="origin-left text-[2.6rem] font-extrabold leading-none tracking-[-0.04em] text-text-main tabular-nums"
                    >
                      {d.expenseAmount}
                    </m.p>
                    <p className="mt-2 text-[13px] font-medium text-text-muted">{d.paidBy}</p>
                  </m.div>
                )}

                {active === 1 && (
                  <m.div key="split" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE_OUT }} className="mt-3">
                    <p className="text-[15px] font-semibold text-text-main">{d.phaseLabels[1]}</p>
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {d.members.map((mb, i) => (
                        <m.div
                          key={mb.name}
                          initial={{ opacity: 0, y: 12, scale: 0.85 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 420, damping: 28, delay: 0.06 + i * 0.06 }}
                          className="flex flex-col items-center gap-1"
                        >
                          <span
                            aria-hidden="true"
                            className={`flex size-10 items-center justify-center rounded-full text-sm font-extrabold ${i === 0 ? "bg-primary text-white" : "bg-primary-container text-primary"}`}
                          >
                            {Array.from(mb.name)[0]}
                          </span>
                          <span className="text-[13px] font-bold tabular-nums text-text-main">{d.shareEach}</span>
                        </m.div>
                      ))}
                    </div>
                  </m.div>
                )}

                {active === 2 && (
                  <m.div key="settle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE_OUT }} className="mt-3">
                    <p className="text-[15px] font-semibold text-text-main">{landed ? d.settledBadge : d.owedLabel}</p>
                    <div className="flex items-center justify-between">
                      <p className={`text-[2.6rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums transition-colors duration-300 ${landed ? "text-primary" : "text-text-main"}`}>
                        {money}
                      </p>
                      <AnimatePresence>
                        {landed && (
                          <m.span
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 420, damping: 22 }}
                            className="flex size-11 items-center justify-center rounded-full bg-primary text-white"
                            aria-hidden="true"
                          >
                            <Check size={24} strokeWidth={3} />
                          </m.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <p className="mt-2 text-[13px] font-medium text-text-muted">{landed ? d.groupMeta : d.phaseLabels[2]}</p>
                  </m.div>
                )}
              </AnimatePresence>

              {/* progress: three beats */}
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {PHASES.map((_, i) => (
                  <span key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-black/[0.07]">
                    <m.span
                      className="block h-full rounded-full bg-primary"
                      initial={false}
                      animate={{ width: i < active || (i === active && reduced) ? "100%" : i === active ? ["0%", "100%"] : "0%" }}
                      transition={i === active && !reduced ? { duration: PHASES[i].ms / 1000, ease: "linear" } : { duration: 0.2 }}
                    />
                  </span>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
