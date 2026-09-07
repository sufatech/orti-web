"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            {t.faq.title}
          </h2>
          <p className="text-lg text-text-muted">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-black/5 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-lg text-text-main pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="text-text-muted" size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
