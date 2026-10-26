"use client";

import { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import * as m from "framer-motion/m";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id="faq" className="border-t border-black/[0.05] bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
              {t.faq.title}
            </h2>
            <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-3xl border border-black/[0.06] bg-background/60 shadow-sm transition-[border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/20"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between px-6 py-5 text-left rounded-3xl focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="pr-4 text-base font-bold text-text-main sm:text-lg">
                      {faq.question}
                    </span>
                    <m.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="shrink-0 text-text-muted"
                      aria-hidden="true"
                    >
                      <ChevronDown size={20} />
                    </m.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="px-6 pb-6 text-pretty leading-relaxed tabular-nums text-text-muted">
                          {faq.answer}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
