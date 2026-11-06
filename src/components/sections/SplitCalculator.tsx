"use client";

import { useId, useState } from "react";
import { Calculator } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { parseAmountToCents, splitEqual, splitFirstPercent } from "@/lib/split";

type Mode = "equal" | "percent";

const field =
  "mt-1.5 block min-h-11 w-full rounded-xl border border-black/[0.12] bg-surface px-3.5 text-base font-semibold tabular-nums text-text-main outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

export function SplitCalculator() {
  const { t } = useI18n();
  const c = t.showcase.split;
  const id = useId();
  const [amount, setAmount] = useState<string>(c.defaultAmount);
  const [people, setPeople] = useState<number>(3);
  const [mode, setMode] = useState<Mode>("equal");
  const [percent, setPercent] = useState<string>("50");

  const cents = parseAmountToCents(amount);
  const pct = Number(percent.replace(",", "."));
  const pctValid = Number.isFinite(pct) && pct >= 0 && pct <= 100;
  const shares =
    cents === null ? null : mode === "equal" ? splitEqual(cents, people) : pctValid ? splitFirstPercent(cents, people, pct) : null;

  const money = new Intl.NumberFormat(c.numberLocale, { style: "currency", currency: c.currency, currencyDisplay: "narrowSymbol" });
  const fmt = (v: number) => money.format(v / 100);

  return (
    <section id="split-calculator" className="border-t border-black/[0.06] bg-surface py-14 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Calculator size={14} aria-hidden="true" />
            {c.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-4xl">{c.title}</h2>
          <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-text-muted sm:text-[17px]">{c.description}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted">{c.note}</p>
        </div>

        <div className="rounded-3xl border border-black/[0.08] bg-background p-5 shadow-[0_20px_50px_-20px_rgba(17,24,39,0.10)] sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${id}-amount`} className="text-sm font-semibold text-text-main">
                {c.amountLabel}
              </label>
              <input
                id={`${id}-amount`}
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                aria-invalid={cents === null}
                aria-describedby={cents === null ? `${id}-err` : undefined}
                className={field}
              />
            </div>
            <div>
              <label htmlFor={`${id}-people`} className="text-sm font-semibold text-text-main">
                {c.peopleLabel}
              </label>
              <select id={`${id}-people`} value={people} onChange={(e) => setPeople(Number(e.target.value))} className={field}>
                {Array.from({ length: 11 }, (_, i) => i + 2).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className="mt-4">
            <legend className="text-sm font-semibold text-text-main">{c.modeLabel}</legend>
            <div className="mt-1.5 inline-flex rounded-2xl border border-black/[0.08] bg-surface p-1">
              {(["equal", "percent"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={mode === k}
                  onClick={() => setMode(k)}
                  className={`min-h-11 rounded-xl px-4 text-sm font-bold transition-colors ${mode === k ? "bg-primary text-white" : "text-text-muted hover:text-text-main"}`}
                >
                  {k === "equal" ? c.modeEqual : c.modePercent}
                </button>
              ))}
            </div>
          </fieldset>

          {mode === "percent" && (
            <div className="mt-4">
              <label htmlFor={`${id}-pct`} className="text-sm font-semibold text-text-main">
                {c.percentLabel}
              </label>
              <input
                id={`${id}-pct`}
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={percent}
                onChange={(e) => setPercent(e.target.value)}
                aria-invalid={!pctValid}
                className={`${field} sm:max-w-32`}
              />
            </div>
          )}

          <div className="mt-5 border-t border-black/[0.06] pt-4" aria-live="polite">
            {shares && cents !== null ? (
              <>
                <ul className="space-y-1.5">
                  {shares.map((v, i) => (
                    <li key={i} className="flex items-center justify-between text-[15px]">
                      <span className="text-text-muted">
                        {c.person} {i + 1}
                      </span>
                      <span className="font-bold tabular-nums text-text-main">{fmt(v)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 flex items-center justify-between border-t border-black/[0.06] pt-3 text-[15px] font-extrabold text-primary">
                  <span>{c.total}</span>
                  <span className="tabular-nums">{fmt(shares.reduce((a, b) => a + b, 0))}</span>
                </p>
              </>
            ) : (
              <p id={`${id}-err`} role="alert" className="text-sm font-semibold text-red-700">
                {c.invalid}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
