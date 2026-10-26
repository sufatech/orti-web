"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import * as m from "framer-motion/m";
import { LazyMotion, domAnimation, useScroll } from "framer-motion";
import {
  ArrowRightLeft,
  CheckCircle2,
  FileArchive,
  Receipt,
  Sparkles,
  Users,
} from "lucide-react";
import {
  IPhone,
  StoryChip,
  getScreenSrc,
  type ScreenKey,
} from "@/components/story/PhoneFrame";
import { useScrollTransform } from "@/components/story/useScrollTransform";
import { useI18n } from "@/i18n/I18nContext";
import type { Locale } from "@/i18n/translations";

interface ChipSpec {
  label: string;
  value: string;
  tone?: "default" | "positive" | "negative";
  icon?: ReactNode;
  position: string;
  fromX: number;
}

interface DeepDiveItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  screen: ScreenKey;
  screenAlt: string;
  statusBarTone: "light" | "dim";
  surface: "surface" | "background";
  chips: readonly [ChipSpec, ChipSpec];
}

function DeepDiveRow({
  item,
  index,
  locale,
}: {
  item: DeepDiveItem;
  index: number;
  locale: Locale;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 0.88", "end 0.25"],
  });

  const isEven = index % 2 === 0;
  const phoneY = useScrollTransform(scrollYProgress, [0, 0.45, 1], [28, 0, -14]);
  const phoneScale = useScrollTransform(scrollYProgress, [0, 0.45], [0.96, 1]);
  const textY = useScrollTransform(scrollYProgress, [0, 0.4], [20, 0]);
  const textOpacity = useScrollTransform(scrollYProgress, [0, 0.32], [0, 1]);

  const chip1X = useScrollTransform(scrollYProgress, [0.1, 0.48], [item.chips[0].fromX, 0]);
  const chip1Opacity = useScrollTransform(scrollYProgress, [0.1, 0.42], [0, 1]);
  const chip2X = useScrollTransform(scrollYProgress, [0.18, 0.54], [item.chips[1].fromX, 0]);
  const chip2Opacity = useScrollTransform(scrollYProgress, [0.18, 0.48], [0, 1]);

  return (
    <div
      ref={rowRef}
      className={`overflow-hidden border-t border-black/[0.05] py-24 lg:py-32 ${
        item.surface === "surface" ? "bg-surface" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex flex-col items-center gap-12 lg:gap-20 ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Copy column */}
          <m.div
            style={{ opacity: textOpacity, y: textY }}
            className="z-10 flex-1 text-center lg:text-left motion-reduce:opacity-100! motion-reduce:transform-none!"
          >
            <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-primary-container text-primary ring-1 ring-primary/15">
              {item.icon}
            </div>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
              {item.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg lg:mx-0">
              {item.description}
            </p>
          </m.div>

          {/* Shared iPhone + unified StoryChips */}
          <div className="relative flex flex-1 justify-center w-full">
            <m.div
              style={{ y: phoneY, scale: phoneScale }}
              className="relative w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[300px] motion-reduce:transform-none!"
            >
              <IPhone className="w-full" statusBarTone={item.statusBarTone}>
                <Image
                  src={getScreenSrc(item.screen, locale)}
                  alt={item.screenAlt}
                  width={1206}
                  height={2622}
                  unoptimized
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover select-none"
                />
              </IPhone>

              <m.div
                style={{ opacity: chip1Opacity, x: chip1X }}
                className={`absolute z-30 ${item.chips[0].position} motion-reduce:opacity-100! motion-reduce:transform-none!`}
              >
                <StoryChip
                  label={item.chips[0].label}
                  value={item.chips[0].value}
                  tone={item.chips[0].tone}
                  icon={item.chips[0].icon}
                />
              </m.div>

              <m.div
                style={{ opacity: chip2Opacity, x: chip2X }}
                className={`absolute z-30 ${item.chips[1].position} motion-reduce:opacity-100! motion-reduce:transform-none!`}
              >
                <StoryChip
                  label={item.chips[1].label}
                  value={item.chips[1].value}
                  tone={item.chips[1].tone}
                  icon={item.chips[1].icon}
                />
              </m.div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureDeepDive() {
  const { t, locale } = useI18n();
  const s = t.story.screens;

  const items: readonly DeepDiveItem[] = [
    {
      id: "quick-add",
      title: t.deepDive.quickAdd.title,
      description: t.deepDive.quickAdd.description,
      icon: <Receipt size={26} aria-hidden="true" />,
      screen: "add-expense",
      screenAlt: s.add,
      statusBarTone: "light",
      surface: "surface",
      chips: [
        {
          label: t.deepDive.quickAdd.card1Title,
          value: t.deepDive.quickAdd.card1Val,
          icon: <Receipt size={16} className="shrink-0 text-primary" aria-hidden="true" />,
          position: "top-[20%] -left-3 sm:-left-10 lg:-left-20",
          fromX: 24,
        },
        {
          label: t.deepDive.quickAdd.card2Title,
          value: t.deepDive.quickAdd.card2Val,
          tone: "positive",
          position: "bottom-[22%] -right-3 sm:-right-10 lg:-right-20",
          fromX: -24,
        },
      ],
    },
    {
      id: "groups",
      title: t.deepDive.groups.title,
      description: t.deepDive.groups.description,
      icon: <Users size={26} aria-hidden="true" />,
      screen: "group-debts",
      screenAlt: s.debts,
      statusBarTone: "light",
      surface: "background",
      chips: [
        {
          label: t.deepDive.groups.card1Title,
          value: t.deepDive.groups.card1Val,
          tone: "positive",
          position: "top-[24%] -right-3 sm:-right-10 lg:-right-20",
          fromX: -24,
        },
        {
          label: t.deepDive.groups.card2Title,
          value: t.deepDive.groups.card2Val,
          tone: "negative",
          position: "bottom-[24%] -left-3 sm:-left-10 lg:-left-20",
          fromX: 24,
        },
      ],
    },
    {
      id: "settle",
      title: t.deepDive.settle.title,
      description: t.deepDive.settle.description,
      icon: <ArrowRightLeft size={26} aria-hidden="true" />,
      screen: "debt-simplify",
      screenAlt: s.simplify,
      statusBarTone: "light",
      surface: "surface",
      chips: [
        {
          label: t.deepDive.settle.card1Title,
          value: t.deepDive.settle.card1Val,
          tone: "positive",
          icon: <CheckCircle2 size={16} className="shrink-0 text-[#047857]" aria-hidden="true" />,
          position: "top-[26%] -left-3 sm:-left-10 lg:-left-20",
          fromX: 24,
        },
        {
          label: t.deepDive.settle.card2Title,
          value: t.deepDive.settle.card2Val,
          position: "bottom-[20%] -right-3 sm:-right-10 lg:-right-20",
          fromX: -24,
        },
      ],
    },
    {
      id: "first-run-plans",
      title: t.deepDive.goals.title,
      description: t.deepDive.goals.description,
      icon: <Sparkles size={26} aria-hidden="true" />,
      screen: "plans",
      screenAlt: s.plans,
      statusBarTone: "dim",
      surface: "background",
      chips: [
        {
          label: t.deepDive.goals.card1Title,
          value: t.deepDive.goals.card1Val,
          position: "top-[22%] -right-3 sm:-right-10 lg:-right-20",
          fromX: -24,
        },
        {
          label: t.deepDive.goals.card2Title,
          value: t.deepDive.goals.card2Val,
          icon: <FileArchive size={16} className="shrink-0 text-primary" aria-hidden="true" />,
          position: "bottom-[22%] -left-3 sm:-left-10 lg:-left-20",
          fromX: 24,
        },
      ],
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full">
        {items.map((item, index) => (
          <DeepDiveRow key={item.id} item={item} index={index} locale={locale} />
        ))}
      </section>
    </LazyMotion>
  );
}
