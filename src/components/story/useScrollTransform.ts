import { useTransform, type MotionValue } from "framer-motion";

/**
 * useTransform for scroll progress, with the keyframes padded to cover 0..1.
 * Scroll-timeline acceleration runs on the compositor as a Web Animation; a
 * Web Animation whose first/last offset is not 0/1 interpolates from/to the
 * element's base value there, which would undo the hold. Padding keeps the
 * value flat outside the authored range.
 */
export function useScrollTransform<T extends number | string>(
  progress: MotionValue<number>,
  input: number[],
  output: T[],
) {
  const i = [...input];
  const o = [...output];
  if (i[0] > 0) {
    i.unshift(0);
    o.unshift(o[0]);
  }
  if (i[i.length - 1] < 1) {
    i.push(1);
    o.push(o[o.length - 1]);
  }
  return useTransform(progress, i, o);
}
