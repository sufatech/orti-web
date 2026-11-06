"use client";

import { useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import * as m from "framer-motion/m";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useI18n();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = t.faq.items.slice(0, 5);

  return (
    <LazyMotion features={domAnimation}>
      <section id="faq" className="border-t border-black/[0.06] bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-balance text-2xl font-extrabold tracking-[-0.03em] text-text-main sm:text-4xl">
              {t.faq.title}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-pretty text-sm leading-relaxed text-text-muted sm:text-base">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-black/[0.08] bg-surface shadow-2xs transition-colors duration-150 hover:border-primary/25"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-3.5 text-left rounded-2xl focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-sm font-bold text-text-main sm:text-base">
                        {faq.question}
                      </span>
                      <m.span
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: EASE_OUT }}
                        className="shrink-0 text-text-muted"
                        aria-hidden="true"
                      >
                        <ChevronDown size={18} />
                      </m.span>
                    </button>
                  </h3>

                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: EASE_OUT }}
                      className="px-5 pb-4 text-pretty text-sm leading-relaxed tabular-nums text-text-muted sm:text-base"
                    >
                      {faq.answer}
                    </m.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
