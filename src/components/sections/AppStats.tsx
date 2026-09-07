"use client";

import { Globe, TrendingUp, Sparkles, Lock } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function AppStats() {
  const { t } = useI18n();

  const stats = [
    {
      value: t.stats.stat1Val,
      label: t.stats.stat1Label,
      icon: <Globe size={18} className="text-primary" />,
    },
    {
      value: t.stats.stat2Val,
      label: t.stats.stat2Label,
      icon: <TrendingUp size={18} className="text-primary" />,
    },
    {
      value: t.stats.stat3Val,
      label: t.stats.stat3Label,
      icon: <Sparkles size={18} className="text-primary" />,
    },
    {
      value: t.stats.stat4Val,
      label: t.stats.stat4Label,
      icon: <Lock size={18} className="text-primary" />,
    },
  ];

  return (
    <section className="bg-white border-y border-black/[0.06] py-6 relative z-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-primary/[0.08] text-primary flex items-center justify-center shrink-0 border border-primary/10">
                {stat.icon}
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-normal leading-tight truncate">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
