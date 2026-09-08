"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { CheckCircle2, TrendingUp, Users } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#7D2AE8_0%,_#630ED4_50%,_#4905A3_100%)]">
      {/* Background glowing blobs for dark theme */}
      <div className="absolute top-1/4 -left-1/4 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[150px] -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6"
            >
              {t.hero.badge}
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {t.hero.titlePart1} {t.hero.titlePart2} <br className="hidden lg:block" />
              <span className="text-white/90">{t.hero.titlePart3}</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 bg-white text-primary hover:bg-white/90 whitespace-nowrap shadow-lg shadow-black/10" 
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.appStore}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 border-white text-white hover:bg-white/10 whitespace-nowrap"
              >
                {t.hero.googlePlay}
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Mockup Preview */}
          <div className="lg:col-span-7 relative mx-auto w-full flex items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
            <div className="relative w-full aspect-square max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] flex items-center justify-center">
              
              {/* Left Phone - Foreground, Tilted Left */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="absolute z-20 w-[60%] -translate-x-[10%] translate-y-[10%] pointer-events-none"
              >
                <Image 
                  src="/images/mockups/device_gruplar_tilted.png" 
                  alt="Orti Gruplar ve Harcamalar Ekranı" 
                  width={1444} 
                  height={2350} 
                  unoptimized
                  priority
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] select-none pointer-events-none"
                />
              </motion.div>

              {/* Right Phone - Background, Tilted Right */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
                className="absolute z-10 w-[55%] translate-x-[20%] -translate-y-[10%] pointer-events-none"
              >
                <Image 
                  src="/images/mockups/device_cuzdan_tilted.png" 
                  alt="Orti Cüzdan ve Bakiye Ekranı" 
                  width={1444} 
                  height={2350} 
                  unoptimized
                  priority
                  className="w-full h-auto drop-shadow-2xl select-none pointer-events-none"
                />
              </motion.div>

              {/* Floating Cards */}
              {/* Top-Left: Alacak */}
              <FloatingCard 
                className="top-[15%] left-[0%] sm:left-[5%] z-30" 
                delay={0.5} 
                yOffset={8}
                duration={4.2}
              >
                <div className="w-10 h-10 rounded-full bg-[#E6F7F1] flex items-center justify-center text-[#047857] shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{t.hero.cards.receivable}</p>
                  <p className="text-sm font-bold text-[#047857]">₺19,233.32</p>
                </div>
              </FloatingCard>

              {/* Right: Grup Bilgisi */}
              <FloatingCard 
                className="top-[45%] right-[-5%] sm:right-[0%] z-30" 
                delay={0.7} 
                yOffset={10} 
                duration={5}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{t.hero.cards.groupName}</p>
                  <p className="text-sm font-bold text-slate-900">{t.hero.cards.partners}</p>
                </div>
              </FloatingCard>

              {/* Bottom-Center: Hesaplaşma Tamamlandı */}
              <FloatingCard 
                className="bottom-[8%] left-[40%] sm:left-[45%] z-30" 
                delay={0.9} 
                yOffset={8} 
                duration={4.6}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{t.hero.cards.settlement}</p>
                  <p className="text-sm font-bold text-slate-900">{t.hero.cards.settled}</p>
                </div>
              </FloatingCard>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
