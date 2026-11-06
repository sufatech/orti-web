"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type ScreenKey =
  | "onboarding"
  | "groups"
  | "add-expense"
  | "group-debts"
  | "group-expenses"
  | "friends"
  | "subscriptions"
  | "activity"
  | "pro";

const DARK_SCREENS = new Set<ScreenKey>(["pro"]);

export function getScreenSrc(
  key: ScreenKey,
  locale: string = "tr",
  _theme: "light" | "dark" = "light"
) {
  const safeLocale = locale === "en" ? "en" : "tr";
  if (DARK_SCREENS.has(key)) {
    return `/images/screens/${key}-${safeLocale}.webp`;
  }
  return `/images/screens/${key}-${safeLocale}.webp`;
}

export const storyChipClass = cn(
  "pointer-events-none select-none inline-flex items-center gap-1.5",
  "rounded-full px-3 py-1 text-[11px] font-semibold tracking-tight",
  "bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-100",
  "border border-zinc-900/10 dark:border-white/15",
  "shadow-[0_10px_28px_-6px_rgba(12,10,29,0.28),0_2px_6px_rgba(12,10,29,0.08)]",
  "backdrop-blur-md whitespace-nowrap"
);

export function StoryChip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn(storyChipClass, className)}>{children}</span>;
}

export interface IPhoneProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Optional Apple Design Resources PNG bezel path (e.g. "/device/iphone-16-pro-max.png").
   * When omitted, the shared device kit's vector iPhone 16 Pro / Pro Max chassis is rendered.
   */
  bezelSrc?: string;
}

/**
 * Shared Device Kit — iPhone 16 Pro / Pro Max (6.3" 1206x2622 & 6.9" 1320x2868 captures):
 * - Canonical geometry: 440 x 956 pt screen inside 462 x 978 pt outer body (7.5 pt Ceramic Shield
 *   black bezel + 3.5 pt Natural Titanium rail = 11 pt total edge).
 * - Concentric corner radii: screen R55 (12.5% of screen width), bezel R62.5, outer chassis R66.
 * - Dynamic Island: 122 x 36 pt pill at 14 pt below screen top with Face ID sensor + TrueDepth lens.
 * - Side buttons: Action + Volume Up/Down on left; Power + recessed Camera Control on right.
 * - Never draws a fake status bar, clock, battery, signal, or home indicator over the capture.
 */
export function IPhone({
  children,
  className,
  bezelSrc,
}: IPhoneProps) {
  return (
    <div
      className={cn(
        "relative select-none aspect-[462/978]",
        "drop-shadow-[0_34px_68px_rgba(18,12,38,0.34)] dark:drop-shadow-[0_38px_76px_rgba(0,0,0,0.68)]",
        className
      )}
    >
      {/* 1. Screen Viewport (exact 440x956 slot inside 462x978 body: left 2.381%, top 1.1247%, R55) */}
      <div
        className="absolute overflow-hidden bg-zinc-950 z-10"
        style={{
          left: "2.381%",
          right: "2.381%",
          top: "1.1247%",
          bottom: "1.1247%",
          borderRadius: "12.5% / 5.753%",
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {children}
        </div>
      </div>

      {/* 2. Shared Device Kit Vector Chassis + Dynamic Island (templates/device/iphone.svg) */}
      <svg
        viewBox="-4 0 470 978"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full z-20 overflow-visible"
      >
        <defs>
          <linearGradient
            id="orti-iphone-ti-rail"
            x1="0"
            y1="0"
            x2="462"
            y2="978"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="var(--device-ti-light, rgb(229, 225, 216))" />
            <stop offset="18%" stopColor="var(--device-ti-mid, rgb(154, 149, 141))" />
            <stop offset="48%" stopColor="var(--device-ti-dark, rgb(67, 64, 59))" />
            <stop offset="78%" stopColor="var(--device-ti-mid, rgb(154, 149, 141))" />
            <stop offset="100%" stopColor="var(--device-ti-deep, rgb(38, 36, 32))" />
          </linearGradient>

          <linearGradient
            id="orti-iphone-ti-chamfer"
            x1="0"
            y1="0"
            x2="462"
            y2="978"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgb(245, 242, 235)" stopOpacity="0.72" />
            <stop offset="35%" stopColor="rgb(154, 149, 141)" stopOpacity="0.2" />
            <stop offset="70%" stopColor="rgb(67, 64, 59)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="rgb(245, 242, 235)" stopOpacity="0.38" />
          </linearGradient>

          <linearGradient id="orti-iphone-btn-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(229, 225, 216)" />
            <stop offset="50%" stopColor="rgb(154, 149, 141)" />
            <stop offset="100%" stopColor="rgb(38, 36, 32)" />
          </linearGradient>
        </defs>

        {/* Left Hardware Buttons: Action (y=178), Volume Up (y=236), Volume Down (y=314) */}
        <g>
          <rect x="-2.5" y="178" width="3.5" height="34" rx="1.75" fill="url(#orti-iphone-btn-v)" />
          <rect x="-2.5" y="236" width="3.5" height="64" rx="1.75" fill="url(#orti-iphone-btn-v)" />
          <rect x="-2.5" y="314" width="3.5" height="64" rx="1.75" fill="url(#orti-iphone-btn-v)" />
        </g>

        {/* Right Hardware Buttons: Power/Side (y=254) + recessed Camera Control switch (y=588) */}
        <g>
          <rect x="461" y="254" width="3.5" height="96" rx="1.75" fill="url(#orti-iphone-btn-v)" />
          <rect
            x="460.5"
            y="588"
            width="2.2"
            height="68"
            rx="1.1"
            fill="rgb(67, 64, 59)"
            stroke="rgb(229, 225, 216)"
            strokeOpacity="0.35"
            strokeWidth="0.6"
          />
        </g>

        {/* Outer Natural Titanium Rail (462x978 R66 minus 455x971 R62.5 inner bezel) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 66 0 H 396 A 66 66 0 0 1 462 66 V 912 A 66 66 0 0 1 396 978 H 66 A 66 66 0 0 1 0 912 V 66 A 66 66 0 0 1 66 0 Z M 66 3.5 H 396 A 62.5 62.5 0 0 1 458.5 66 V 912 A 62.5 62.5 0 0 1 396 974.5 H 66 A 62.5 62.5 0 0 1 3.5 912 V 66 A 62.5 62.5 0 0 1 66 3.5 Z"
          fill="url(#orti-iphone-ti-rail)"
        />

        {/* Antenna insulator bands on the 3.5pt titanium rail */}
        <g fill="rgba(20, 20, 22, 0.55)">
          <rect x="0" y="84" width="3.5" height="2.5" />
          <rect x="458.5" y="84" width="3.5" height="2.5" />
          <rect x="0" y="891.5" width="3.5" height="2.5" />
          <rect x="458.5" y="891.5" width="3.5" height="2.5" />
          <rect x="84" y="0" width="2.5" height="3.5" />
          <rect x="375.5" y="974.5" width="2.5" height="3.5" />
        </g>

        {/* Outer specular chamfer stroke */}
        <rect
          x="0.75"
          y="0.75"
          width="460.5"
          height="976.5"
          rx="65.25"
          ry="65.25"
          stroke="url(#orti-iphone-ti-chamfer)"
          strokeWidth="1.5"
        />

        {/* Ceramic Shield inner black bezel (455x971 R62.5 minus exact 440x956 R55 screen slot) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 66 3.5 H 396 A 62.5 62.5 0 0 1 458.5 66 V 912 A 62.5 62.5 0 0 1 396 974.5 H 66 A 62.5 62.5 0 0 1 3.5 912 V 66 A 62.5 62.5 0 0 1 66 3.5 Z M 66 11 H 396 A 55 55 0 0 1 451 66 V 912 A 55 55 0 0 1 396 967 H 66 A 55 55 0 0 1 11 912 V 66 A 55 55 0 0 1 66 11 Z"
          fill="rgb(5, 5, 7)"
        />

        {/* Top ear speaker micro-slit */}
        <rect x="205" y="6.8" width="52" height="2.4" rx="1.2" fill="rgba(255, 255, 255, 0.08)" />

        {/* Inner screen lip hairline */}
        <rect
          x="10.5"
          y="10.5"
          width="441"
          height="957"
          rx="55.5"
          ry="55.5"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
        />

        {/* Dynamic Island (122x36pt at 14pt below screen top -> x=170, y=25, R18) */}
        <g>
          <rect x="170" y="25" width="122" height="36" rx="18" ry="18" fill="rgb(0, 0, 0)" />
          <rect
            x="170.5"
            y="25.5"
            width="121"
            height="35"
            rx="17.5"
            ry="17.5"
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="0.75"
          />
          {/* Face ID sensor */}
          <circle cx="196" cy="43" r="5" fill="rgb(10, 10, 15)" />
          <circle cx="196" cy="43" r="3.2" fill="rgb(20, 20, 29)" />
          {/* TrueDepth front camera sapphire lens */}
          <circle
            cx="272"
            cy="43"
            r="6.8"
            fill="rgb(13, 19, 34)"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="0.6"
          />
          <circle cx="272" cy="43" r="4.4" fill="rgb(22, 36, 71)" />
          <circle cx="272" cy="43" r="2.3" fill="rgb(6, 9, 17)" />
          <circle cx="270.4" cy="41.4" r="1.15" fill="rgb(125, 162, 255)" fillOpacity="0.78" />
          <circle cx="273.6" cy="44.5" r="0.65" fill="rgb(125, 162, 255)" fillOpacity="0.4" />
        </g>
      </svg>

      {/* Optional official Apple Design Resources PNG bezel overlay */}
      {bezelSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bezelSrc}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-fill z-30"
        />
      )}
    </div>
  );
}

export const PhoneFrame = IPhone;
