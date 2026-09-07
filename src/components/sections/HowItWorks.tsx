"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { UserPlus, Receipt, HandCoins } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function HowItWorks() {
  const { t } = useI18n();

  const stepIcons = [
    {
      icon: <UserPlus size={28} className="text-white" />,
      color: "from-primary to-secondary",
    },
    {
      icon: <Receipt size={28} className="text-white" />,
      color: "from-secondary to-purple-500",
    },
    {
      icon: <HandCoins size={28} className="text-white" />,
      color: "from-purple-600 to-primary",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow for this section */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-text-muted">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-purple-400 -translate-y-1/2 opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {t.howItWorks.steps.map((step, index) => {
              const iconConfig = stepIcons[index] || stepIcons[0];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="text-center h-full pt-12 pb-8 px-6 bg-white/90 backdrop-blur-md hover:border-primary/20 border-black/5 shadow-sm">
                    <div
                      className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br ${iconConfig.color} flex items-center justify-center shadow-lg shadow-primary/20 rotate-3`}
                    >
                      {iconConfig.icon}
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-text-main mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-muted">{step.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
