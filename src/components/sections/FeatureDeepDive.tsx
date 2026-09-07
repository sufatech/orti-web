"use client";

import { motion } from "framer-motion";
import { Scan, HandCoins, Target, Users, Receipt, ArrowRightLeft, Trophy, UserPlus } from "lucide-react";
import Image from "next/image";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { useI18n } from "@/i18n/I18nContext";

export function FeatureDeepDive() {
  const { t } = useI18n();

  const deepDiveFeatures = [
    {
      id: "quick-add",
      title: t.deepDive.quickAdd.title,
      description: t.deepDive.quickAdd.description,
      icon: <Scan size={32} />,
      theme: "light",
      image: "/images/mockups/device-5.png",
      floatingCards: [
        {
          icon: <Receipt size={20} />,
          iconColor: "text-primary",
          iconBg: "bg-primary/10",
          title: t.deepDive.quickAdd.card1Title,
          value: "₺1,450.00",
          position: "top-10 -left-6 lg:-left-14",
          delay: 0.2,
        },
        {
          icon: <Scan size={20} />,
          iconColor: "text-primary",
          iconBg: "bg-primary/10",
          title: t.deepDive.quickAdd.card2Title,
          value: t.deepDive.quickAdd.card2Val,
          position: "bottom-24 -right-4 lg:-right-10",
          delay: 0.6,
        }
      ]
    },
    {
      id: "settle",
      title: t.deepDive.settle.title,
      description: t.deepDive.settle.description,
      icon: <HandCoins size={32} />,
      theme: "dark",
      image: "/images/mockups/device-3.png",
      floatingCards: [
        {
          icon: <ArrowRightLeft size={20} />,
          iconColor: "text-emerald-600",
          iconBg: "bg-emerald-50",
          title: t.deepDive.settle.card1Title,
          value: "₺800.00",
          position: "top-20 -right-4 lg:-right-12",
          delay: 0.3,
        }
      ]
    },
    {
      id: "goals",
      title: t.deepDive.goals.title,
      description: t.deepDive.goals.description,
      icon: <Target size={32} />,
      theme: "light",
      image: "/images/mockups/device-7.png",
      floatingCards: [
        {
          icon: <Trophy size={20} />,
          iconColor: "text-primary",
          iconBg: "bg-primary/10",
          title: t.deepDive.goals.card1Title,
          value: t.deepDive.goals.card1Val,
          position: "bottom-12 sm:bottom-16 -left-6 lg:-left-12",
          delay: 0.4,
        }
      ]
    },
    {
      id: "groups",
      title: t.deepDive.groups.title,
      description: t.deepDive.groups.description,
      icon: <Users size={32} />,
      theme: "dark",
      image: "/images/mockups/device-2.png",
      floatingCards: [
        {
          icon: <Users size={20} />,
          iconColor: "text-primary",
          iconBg: "bg-primary/10",
          title: t.deepDive.groups.card1Title,
          value: t.deepDive.groups.card1Val,
          position: "top-1/4 -left-6 lg:-left-12",
          delay: 0.2,
        },
        {
          icon: <UserPlus size={20} />,
          iconColor: "text-primary",
          iconBg: "bg-primary/10",
          title: t.deepDive.groups.card2Title,
          value: t.deepDive.groups.card2Val,
          position: "bottom-20 -right-6 lg:-right-14",
          delay: 0.7,
        }
      ]
    },
  ];

  return (
    <section className="relative w-full">
      {deepDiveFeatures.map((feature, index) => {
        const isDark = feature.theme === "dark";
        const isEven = index % 2 === 0;

        return (
          <div
            key={feature.id}
            className={`py-24 lg:py-32 overflow-hidden ${
              isDark ? "bg-primary text-white" : "bg-white text-text-main"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 space-y-6 text-center lg:text-left z-10"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      isDark ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {feature.title}
                  </h3>
                  <p
                    className={`text-lg md:text-xl leading-relaxed ${
                      isDark ? "text-white/80" : "text-text-muted"
                    }`}
                  >
                    {feature.description}
                  </p>
                </motion.div>

                {/* Mockup/Image with Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="flex-1 w-full flex justify-center relative"
                >
                  <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[460px]">
                    {feature.floatingCards?.map((card, i) => (
                      <FloatingCard 
                        key={i} 
                        className={card.position} 
                        delay={card.delay}
                        yOffset={12}
                        duration={4 + i}
                      >
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor} shrink-0`}>
                          {card.icon}
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                            {card.title}
                          </p>
                          <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                            {card.value}
                          </p>
                        </div>
                      </FloatingCard>
                    ))}

                    <Image 
                      src={feature.image}
                      alt={feature.title}
                      width={1030}
                      height={2108}
                      unoptimized
                      priority={index === 0}
                      className="w-full h-auto drop-shadow-2xl relative z-0"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
