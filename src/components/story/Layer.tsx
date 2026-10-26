"use client";

import type { ReactNode } from "react";
import * as m from "framer-motion/m";
import { useTransform, type MotionValue } from "framer-motion";
import { useScrollTransform } from "./useScrollTransform";

type Range = [number, number, number, number];

/**
 * A scroll-linked layer: fades in over range[0..1], holds, fades out over range[2..3].
 * Only opacity and transform are animated; values are written straight to the
 * element style (no React re-render per frame).
 */
export function Layer({
  progress,
  range,
  from = { x: 0, y: 0, scale: 1 },
  to = { x: 0, y: 0, scale: 1 },
  holdEnd = false,
  startVisible = false,
  className,
  children,
}: {
  progress: MotionValue<number>;
  range: Range;
  /** transform at the start of the fade-in */
  from?: { x?: number; y?: number; scale?: number };
  /** transform at the end of the fade-out */
  to?: { x?: number; y?: number; scale?: number };
  /** stay visible after fading in (last step) */
  holdEnd?: boolean;
  /** visible at progress 0, only the fade-out uses the range */
  startVisible?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  // Input offsets must stay inside 0..1 and ascending (scroll-timeline acceleration).
  const [a, b, c, d] = range;
  const input = startVisible ? [c, d] : holdEnd ? [a, b] : [a, b, c, d];
  const opacity = useScrollTransform(progress, input, startVisible ? [1, 0] : holdEnd ? [0, 1] : [0, 1, 1, 0]);
  const x = useScrollTransform(progress, input, startVisible ? [0, to.x ?? 0] : holdEnd ? [from.x ?? 0, 0] : [from.x ?? 0, 0, 0, to.x ?? 0]);
  const y = useScrollTransform(progress, input, startVisible ? [0, to.y ?? 0] : holdEnd ? [from.y ?? 0, 0] : [from.y ?? 0, 0, 0, to.y ?? 0]);
  const scale = useScrollTransform(progress, input, startVisible ? [1, to.scale ?? 1] : holdEnd ? [from.scale ?? 1, 1] : [from.scale ?? 1, 1, 1, to.scale ?? 1]);
  const pointerEvents = useTransform(opacity, (v) => (v > 0.5 ? "auto" : "none"));

  return (
    <m.div style={{ opacity, x, y, scale, pointerEvents }} className={className}>
      {children}
    </m.div>
  );
}

/** Fill bar for the step indicator: scaleX 0 -> 1 across [start, end]. */
export function Fill({
  progress,
  start,
  end,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const scaleX = useScrollTransform(progress, [start, end], [0, 1]);
  return <m.div style={{ scaleX }} className="h-full w-full origin-left bg-white" />;
}
