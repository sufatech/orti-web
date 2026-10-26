"use client";

import { useRef } from "react";
import * as m from "framer-motion/m";
import { LazyMotion, domAnimation, useScroll, type MotionValue } from "framer-motion";
import { useScrollTransform } from "@/components/story/useScrollTransform";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { Layer } from "@/components/story/Layer";

function Person({ name, className }: { name: string; className?: string }) {
  return (
    <div className={`absolute top-0 flex w-20 -translate-x-1/2 flex-col items-center gap-2 ${className ?? ""}`}>
      <div
        aria-hidden="true"
        className="flex size-16 items-center justify-center rounded-full bg-primary-container text-2xl font-extrabold text-primary"
      >
        {Array.from(name)[0]}
      </div>
      <span className="text-sm font-semibold text-text-main">{name}</span>
    </div>
  );
}

function Arrow({ className, amount }: { className: string; amount: string }) {
  return (
    <div className={`absolute top-8 flex -translate-y-1/2 items-center ${className}`}>
      <div className="relative h-1 flex-1 rounded-full bg-primary/70" />
      <ArrowRight size={20} className="-ml-1 shrink-0 text-primary" aria-hidden="true" />
      <span className="absolute left-1/2 -top-8 -translate-x-1/2 rounded-full bg-primary-container px-3 py-1 text-xs font-bold text-primary">
        {amount}
      </span>
    </div>
  );
}

function MergedArrow({ progress, amount }: { progress: MotionValue<number>; amount: string }) {
  const scaleX = useScrollTransform(progress, [0.4, 0.7], [0, 1]);
  const head = useScrollTransform(progress, [0.62, 0.7], [0, 1]);
  const tag = useScrollTransform(progress, [0.66, 0.74], [0, 1]);
  return (
    <div className="absolute inset-x-[10%] top-8 flex -translate-y-1/2 items-center px-10 motion-reduce:opacity-100">
      <m.div style={{ scaleX }} className="h-1 flex-1 origin-left rounded-full bg-primary motion-reduce:scale-x-100!" />
      <m.div style={{ opacity: head }} className="-ml-1 shrink-0 motion-reduce:opacity-100!">
        <ArrowRight size={20} className="text-primary" aria-hidden="true" />
      </m.div>
      <m.span
        style={{ opacity: tag }}
        className="absolute left-1/2 -top-8 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white motion-reduce:opacity-100!"
      >
        {amount}
      </m.span>
    </div>
  );
}

export function DebtSimplify() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const s = t.simplify;

  const middleOpacity = useScrollTransform(p, [0.4, 0.6], [1, 0.25]);
  const middleY = useScrollTransform(p, [0.4, 0.6], [0, 24]);

  return (
    <LazyMotion features={domAnimation}>
    <section ref={ref} className="relative h-[260svh] bg-surface motion-reduce:h-auto">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center gap-12 overflow-hidden px-6 motion-reduce:static motion-reduce:h-auto motion-reduce:py-24">
        <div className="max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
            {s.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            {s.description}
          </p>
        </div>

        <div className="relative h-28 w-full max-w-xl">
          <Person name={s.people.a} className="left-[10%]" />
          <m.div style={{ opacity: middleOpacity, y: middleY }} className="absolute inset-0 motion-reduce:opacity-25!">
            <Person name={s.people.b} className="left-1/2" />
          </m.div>
          <Person name={s.people.c} className="left-[90%]" />

          {/* Before: two payments */}
          <Layer progress={p} range={[0, 0, 0.38, 0.5]} startVisible className="absolute inset-0 motion-reduce:hidden">
            <Arrow className="left-[10%] w-[40%] px-10" amount={s.amount} />
            <Arrow className="left-[50%] w-[40%] px-10" amount={s.amount} />
          </Layer>
          {/* After: one payment */}
          <MergedArrow progress={p} amount={s.amount} />
        </div>

        <div className="relative h-8 w-full text-center">
          <Layer progress={p} range={[0, 0, 0.34, 0.46]} startVisible className="absolute inset-0 motion-reduce:hidden">
            <p className="text-lg font-bold text-text-muted">{s.before}</p>
          </Layer>
          <Layer progress={p} range={[0.46, 0.58, 1, 1]} holdEnd className="absolute inset-0 motion-reduce:opacity-100! motion-reduce:transform-none!">
            <p className="text-lg font-bold text-primary">{s.after}</p>
          </Layer>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
