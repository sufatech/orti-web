"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import * as m from "framer-motion/m";
import { LazyMotion, domAnimation, useScroll } from "framer-motion";
import { useScrollTransform } from "./useScrollTransform";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { StoreLinks } from "@/components/ui/StoreLinks";
import { Fill, Layer } from "./Layer";
import { PhoneFrame } from "./PhoneFrame";

/*
 * Scroll story: add expense -> split -> who owes whom -> settle.
 * One sticky stage inside a tall section; scroll progress p (0..1) drives
 * opacity/transform of the layers. Windows are authored once here.
 */
const W = {
  hero: [0, 0, 0.06, 0.14],
  steps: [
    [0.1, 0.2, 0.34, 0.38],
    [0.38, 0.42, 0.54, 0.58],
    [0.58, 0.62, 0.74, 0.78],
    [0.78, 0.82, 1, 1],
  ],
  screenAdd: [0, 0, 0.56, 0.62],
  screenDebts: [0.56, 0.62, 0.78, 0.84],
  screenSettle: [0.78, 0.84, 1, 1],
  bill: [0.38, 0.43, 0.46, 0.52],
  shares: [0.46, 0.54, 0.56, 0.62],
  owed: [0.64, 0.7, 0.76, 0.82],
  owe: [0.67, 0.73, 0.76, 0.82],
  settled: [0.84, 0.9, 1, 1],
} as const satisfies Record<string, readonly number[] | readonly (readonly number[])[]>;

type R = [number, number, number, number];
const r = (x: readonly number[]) => x as unknown as R;

const DESKTOP = "(min-width: 1024px)";
function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(DESKTOP);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(DESKTOP).matches,
    () => false,
  );
}

// Chip positions: outside the phone on small screens (narrow gutters), overlapping it from lg up.
const leftSide = "right-full mr-1.5 lg:right-auto lg:mr-0 lg:-left-[44%]";
const rightSide = "left-full ml-1.5 lg:left-auto lg:ml-0 lg:-right-[44%]";

const chip =
  "absolute w-max max-w-[5.5rem] rounded-2xl bg-white px-2.5 py-2 lg:max-w-none lg:px-3 text-slate-900 shadow-[0_12px_28px_rgba(0,0,0,0.22)] will-change-transform";

export function ScrollStory() {
  const { t, locale } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const phoneRotate = useScrollTransform(p, [0, 0.2], [-7, 0]);
  const desktop = useIsDesktop();
  // On phones the caption area is short, so the phone also rises as the story starts.
  const phoneY = useScrollTransform(p, [0, 0.2], desktop ? ["14%", "0%"] : ["14%", "-14%"]);
  const phoneScale = useScrollTransform(p, [0, 0.2], desktop ? [0.96, 1] : [0.96, 1]);

  const s = t.story;
  const img = (name: string) => `/images/story/${name}-${locale}.webp`;
  const imgProps = { width: 540, height: 1173, unoptimized: true } as const;
  const screenCls = "absolute inset-0 h-full w-full object-cover select-none";

  return (
    <LazyMotion features={domAnimation}>
    <section
      id="hero"
      ref={ref}
      className="relative h-[420svh] bg-[radial-gradient(ellipse_at_top_right,_#7D2AE8_0%,_#630ED4_50%,_#4905A3_100%)] text-white motion-reduce:h-auto"
    >
      <span id="how-it-works" aria-hidden="true" className="absolute top-[64svh] motion-reduce:top-[40rem]" />
      <div className="sticky top-0 h-svh overflow-hidden motion-reduce:static motion-reduce:h-auto motion-reduce:overflow-visible">
        <div className="mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] gap-x-12 px-6 pt-20 lg:grid-cols-12 lg:grid-rows-1 lg:pt-0 motion-reduce:block motion-reduce:max-w-3xl motion-reduce:py-28">
          {/* Text cell: hero copy and the four captions share one grid cell */}
          <div className="relative z-10 grid content-start lg:col-span-5 lg:content-center motion-reduce:gap-20">
            <Layer
              progress={p}
              range={r(W.hero)}
              startVisible
              from={{ y: 0 }}
              to={{ y: -28 }}
              className="[grid-area:1/1] motion-reduce:[grid-area:auto] motion-reduce:opacity-100! motion-reduce:transform-none! motion-reduce:pointer-events-auto!"
            >
              <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {t.hero.titlePart1} {t.hero.titlePart2}{" "}
                <span className="text-white/90">{t.hero.titlePart3}</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg lg:text-xl">
                {t.hero.subtitle}
              </p>
              <StoreLinks
                appStoreLabel={t.hero.appStore}
                googlePlayLabel={t.hero.googlePlay}
                className="mt-6 sm:mt-8"
                buttonClassName="h-12 px-6 text-sm sm:h-14 sm:px-8 sm:text-lg"
              />
            </Layer>

            {s.steps.map((step, i) => (
              <Layer
                key={step.title}
                progress={p}
                range={r(W.steps[i])}
                from={{ y: 24 }}
                to={{ y: -24 }}
                holdEnd={i === s.steps.length - 1}
                className="[grid-area:1/1] motion-reduce:[grid-area:auto] motion-reduce:opacity-100! motion-reduce:transform-none! motion-reduce:pointer-events-auto!"
              >
                <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                  {step.description}
                </p>
                {i === s.steps.length - 1 ? (
                  <StoreLinks
                    appStoreLabel={t.hero.appStore}
                    googlePlayLabel={t.hero.googlePlay}
                    className="mt-6"
                    buttonClassName="h-12 px-6 text-sm sm:text-base"
                  />
                ) : null}
                {/* Static (reduced motion) mode: each step carries its own screen */}
                <div className="mt-8 hidden motion-reduce:block">
                  <PhoneFrame className="w-56">
                    <Image
                      {...imgProps}
                      src={img(["quick_add", "quick_add", "group_debts", "settle_up"][i])}
                      alt={[s.screens.add, s.screens.add, s.screens.debts, s.screens.settle][i]}
                      loading="lazy"
                      className={screenCls}
                    />
                  </PhoneFrame>
                </div>
              </Layer>
            ))}
          </div>

          {/* Phone cell */}
          <div className="relative flex min-h-0 items-center justify-center lg:col-span-7 motion-reduce:hidden">
            <m.div
              style={{ rotate: phoneRotate, y: phoneY, scale: phoneScale }}
              className="relative h-[92%] will-change-transform lg:h-[80%]"
            >
              <PhoneFrame className="h-full">
                <Layer progress={p} range={r(W.screenAdd)} startVisible className="absolute inset-0">
                  <Image {...imgProps} src={img("quick_add")} alt={s.screens.add} priority fetchPriority="high" className={screenCls} />
                </Layer>
                <Layer progress={p} range={r(W.screenDebts)} className="absolute inset-0">
                  <Image {...imgProps} src={img("group_debts")} alt={s.screens.debts} loading="lazy" className={screenCls} />
                </Layer>
                <Layer progress={p} range={r(W.screenSettle)} holdEnd className="absolute inset-0">
                  <Image {...imgProps} src={img("settle_up")} alt={s.screens.settle} loading="lazy" className={screenCls} />
                </Layer>
              </PhoneFrame>

              {/* Split: the bill breaks into four equal shares */}
              <Layer progress={p} range={r(W.bill)} from={{ scale: 0.94 }} to={{ scale: 0.9 }} className={`${chip} left-1/2 top-[46%] -translate-x-1/2`}>
                <p className="text-xs font-medium text-slate-500">{s.chips.bill}</p>
                <p className="text-base font-bold">{s.chips.billAmount}</p>
              </Layer>
              {s.chips.people.map((name, i) => {
                const left = i % 2 === 0;
                return (
                  <Layer
                    key={name}
                    progress={p}
                    range={r(W.shares)}
                    from={{ x: left ? 70 : -70, scale: 0.92 }}
                    to={{ y: -12 }}
                    className={`${chip} ${left ? leftSide : rightSide} ${i < 2 ? "top-[24%]" : "top-[58%]"}`}
                  >
                    <p className="text-xs font-medium text-slate-500">{name}</p>
                    <p className="text-sm font-bold">{s.chips.shareAmount}</p>
                  </Layer>
                );
              })}

              {/* Balances */}
              <Layer progress={p} range={r(W.owed)} from={{ x: -40 }} to={{ y: -12 }} className={`${chip} ${rightSide} top-[30%]`}>
                <p className="text-xs font-medium text-slate-500">{s.chips.owedLabel}</p>
                <p className="text-sm font-bold text-[#047857]">{s.chips.owedAmount}</p>
              </Layer>
              <Layer progress={p} range={r(W.owe)} from={{ x: 40 }} to={{ y: -12 }} className={`${chip} ${leftSide} top-[54%]`}>
                <p className="text-xs font-medium text-slate-500">{s.chips.oweLabel}</p>
                <p className="text-sm font-bold text-[#B91C1C]">{s.chips.oweAmount}</p>
              </Layer>

              {/* Settled */}
              <Layer progress={p} range={r(W.settled)} from={{ scale: 0.9, y: 16 }} holdEnd className={`${chip} ${leftSide} top-[70%] flex items-center gap-2`}>
                <CheckCircle2 size={20} className="hidden shrink-0 text-[#047857] lg:block" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-500">{s.chips.settledLabel}</p>
                  <p className="text-sm font-bold">{s.chips.settledAmount}</p>
                </div>
              </Layer>
            </m.div>
          </div>
        </div>

        {/* Step indicator + demo note */}
        <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-2 motion-reduce:hidden" aria-hidden="true">
          <div className="flex gap-2">
            {[
              [0.12, 0.38],
              [0.38, 0.58],
              [0.58, 0.78],
              [0.78, 1],
            ].map(([a, b]) => (
              <div key={a} className="h-1 w-9 overflow-hidden rounded-full bg-white/25">
                <Fill progress={p} start={a} end={b} />
              </div>
            ))}
          </div>
          <p className="text-xs text-white/70">{s.demoNote}</p>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
