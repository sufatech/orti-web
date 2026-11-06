/** Parses "1000", "1000.5", "1.000,50" or "1,000.50" into whole cents; null when not a positive amount. */
export function parseAmountToCents(input: string): number | null {
  const s = input.replace(/[^\d.,]/g, "");
  if (!s) return null;
  const lastComma = s.lastIndexOf(",");
  const lastDot = s.lastIndexOf(".");
  const sep = Math.max(lastComma, lastDot);
  let intPart = s;
  let frac = "";
  if (sep >= 0) {
    const after = s.slice(sep + 1);
    // a separator followed by exactly 3 digits and no other separator is a thousands mark
    const isThousands = after.length === 3 && s.split(/[.,]/).length === 2 && sep > 0;
    if (!isThousands) {
      intPart = s.slice(0, sep);
      frac = after;
    }
  }
  intPart = intPart.replace(/[.,]/g, "");
  if (frac.length > 2) return null;
  const cents = Number(intPart || "0") * 100 + Number(frac.padEnd(2, "0") || "0");
  return Number.isSafeInteger(cents) && cents > 0 ? cents : null;
}

/** Equal split in cents; leftover cents go one each to the first people, so shares always sum to the total. */
export function splitEqual(totalCents: number, people: number): number[] {
  const base = Math.floor(totalCents / people);
  const rem = totalCents - base * people;
  return Array.from({ length: people }, (_, i) => base + (i < rem ? 1 : 0));
}

/** The first person carries `percent` of the total; everyone else splits the rest equally. */
export function splitFirstPercent(totalCents: number, people: number, percent: number): number[] {
  const p = Math.min(100, Math.max(0, percent));
  const first = Math.round((totalCents * p) / 100);
  if (people === 1) return [totalCents];
  return [first, ...splitEqual(totalCents - first, people - 1)];
}
