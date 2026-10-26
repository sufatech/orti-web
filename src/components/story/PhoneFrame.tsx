import { useId, type ReactNode } from "react";
import Image from "next/image";
import type { Locale } from "@/i18n/translations";
import { cn } from "@/lib/utils";

export type ScreenKey =
  | "add-expense"
  | "group-debts"
  | "settle-up"
  | "debt-simplify"
  | "plans";

/**
 * Showcase screen captures live at `/images/screens/<screen>-<locale>.webp`
 * (1206x2622, current app UI with the iOS status bar baked in at the top).
 */
export function getScreenSrc(screen: ScreenKey, locale: Locale): string {
  return `/images/screens/${screen}-${locale}.webp`;
}

export const storyChipClass =
  "rounded-2xl bg-white/95 backdrop-blur-md px-3 py-2 lg:px-3.5 lg:py-2.5 text-slate-900 shadow-[0_14px_32px_-8px_rgba(15,8,34,0.24)] ring-1 ring-black/[0.06] tabular-nums";

export function StoryChip({
  label,
  value,
  tone = "default",
  icon,
  className,
}: {
  label: string;
  value: string;
  tone?: "default" | "positive" | "negative";
  icon?: ReactNode;
  className?: string;
}) {
  const valueTone =
    tone === "positive"
      ? "text-[#047857]"
      : tone === "negative"
        ? "text-[#B91C1C]"
        : "text-slate-900";

  return (
    <div className={cn(storyChipClass, icon ? "flex items-center gap-2.5" : "", className)}>
      {icon}
      <div className="min-w-0">
        <p className="truncate text-[11px] font-medium leading-tight text-slate-500 sm:text-xs">
          {label}
        </p>
        <p className={cn("mt-0.5 text-xs font-bold leading-tight tabular-nums sm:text-sm", valueTone)}>
          {value}
        </p>
      </div>
    </div>
  );
}

export interface IPhoneProps {
  children: ReactNode;
  className?: string;
  /**
   * Optional official bezel overlay (e.g. `/images/device/iphone-16-pro.png` from
   * Apple Design Resources). When provided, overlays the PNG instead of the drawn
   * SVG chassis while keeping the 1206x2622 screen slot aligned.
   */
  bezelSrc?: string;
  /**
   * Optional status bar tone hint retained for caller compatibility. Real
   * captures in `/images/screens/` already include the iOS status bar at the top,
   * so the frame only overlays the Dynamic Island hardware cutout.
   */
  statusBarTone?: "light" | "dim" | "transparent";
}

/**
 * Shared iPhone 16 Pro component (Natural Titanium).
 * Screen slot preserves the exact 1206x2622 aspect ratio (90.269% x 96.468% of
 * the 1336x2718 body coordinate space) with concentric corner radii and Dynamic
 * Island hardware cutout. Real screen captures already contain the iOS status bar.
 */
export function IPhone({
  children,
  className,
  bezelSrc,
}: IPhoneProps) {
  const uid = useId().replace(/:/g, "");
  const bodyGradId = `ti-body-${uid}`;
  const edgeGradId = `ti-edge-${uid}`;
  const btnGradId = `ti-btn-${uid}`;
  const innerRimId = `ti-rim-${uid}`;

  return (
    <div
      className={cn(
        "relative aspect-[1336/2718] select-none drop-shadow-[0_28px_52px_rgba(15,8,34,0.34)] drop-shadow-[0_8px_18px_rgba(15,8,34,0.18)]",
        className,
      )}
    >
      {!bezelSrc && (
        <svg
          viewBox="0 0 1336 2718"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id={bodyGradId} x1="0" y1="0" x2="1336" y2="2718" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DFDBD2" />
              <stop offset="18%" stopColor="#B8B3A8" />
              <stop offset="46%" stopColor="#8C877E" />
              <stop offset="72%" stopColor="#66625B" />
              <stop offset="90%" stopColor="#A5A096" />
              <stop offset="100%" stopColor="#D4CFC6" />
            </linearGradient>
            <linearGradient id={edgeGradId} x1="60" y1="0" x2="1276" y2="2718" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#B7B2A8" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#56524C" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#EDE9E0" stopOpacity="0.88" />
            </linearGradient>
            <linearGradient id={btnGradId} x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#E5E1D8" />
              <stop offset="50%" stopColor="#8A857C" />
              <stop offset="100%" stopColor="#C7C2B8" />
            </linearGradient>
            <linearGradient id={innerRimId} x1="0" y1="0" x2="1336" y2="2718" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.24" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.18" />
            </linearGradient>
          </defs>

          {/* Left side buttons: Action, Volume Up, Volume Down */}
          <rect x="2" y="492" width="10" height="96" rx="4.5" fill={`url(#${btnGradId})`} />
          <rect x="2" y="652" width="10" height="178" rx="4.5" fill={`url(#${btnGradId})`} />
          <rect x="2" y="872" width="10" height="178" rx="4.5" fill={`url(#${btnGradId})`} />

          {/* Right side buttons: Power/Side button + recessed Camera Control */}
          <rect x="1324" y="714" width="10" height="272" rx="4.5" fill={`url(#${btnGradId})`} />
          <rect x="1325" y="1644" width="7" height="206" rx="3" fill="#7C776F" />

          {/* Outer Natural Titanium chassis */}
          <rect x="10" y="0" width="1316" height="2718" rx="241" fill={`url(#${bodyGradId})`} />

          {/* Satin antenna bands */}
          <rect x="10" y="252" width="18" height="14" fill="#6E6A63" opacity="0.7" />
          <rect x="1308" y="252" width="18" height="14" fill="#6E6A63" opacity="0.7" />
          <rect x="10" y="2452" width="18" height="14" fill="#6E6A63" opacity="0.7" />
          <rect x="1308" y="2452" width="18" height="14" fill="#6E6A63" opacity="0.7" />

          {/* Specular chamfered titanium rim */}
          <rect
            x="13.5"
            y="3.5"
            width="1309"
            height="2711"
            rx="237.5"
            stroke={`url(#${edgeGradId})`}
            strokeWidth="4.5"
          />

          {/* Inner black glass bezel */}
          <rect
            x="28"
            y="18"
            width="1280"
            height="2682"
            rx="223"
            fill="#07070A"
            stroke={`url(#${innerRimId})`}
            strokeWidth="2.5"
          />

          {/* Top earpiece speaker micro-slit */}
          <rect x="594" y="27" width="148" height="6.5" rx="3.25" fill="#181820" />
        </svg>
      )}

      {/* Active screen slot: exact 1206x2622 ratio */}
      <div className="absolute left-[4.865%] top-[1.766%] h-[96.468%] w-[90.269%] overflow-hidden rounded-[15.42%/7.09%] bg-white ring-1 ring-black/15">
        {children}

        {/* Dynamic Island hardware cutout (captures already include the iOS status bar) */}
        <svg
          viewBox="0 0 1206 142"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 w-full"
        >
          <rect x="417" y="34" width="372" height="104" rx="52" fill="#050507" />
          <circle cx="486" cy="86" r="14" fill="#0C0C12" />
          <circle cx="731" cy="86" r="21" fill="#0D0D15" stroke="#1D1D2B" strokeWidth="2.5" />
          <circle cx="725" cy="80" r="6" fill="#2E548E" opacity="0.8" />
          <circle cx="736" cy="91" r="3.5" fill="#5B82BD" opacity="0.45" />
        </svg>

        {/* Subtle optical glass sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_36%)]"
        />

        {/* iOS Home Indicator */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[0.85%] left-1/2 z-20 h-[0.38%] w-[35%] -translate-x-1/2 rounded-full bg-black/80"
        />
      </div>

      {/* Optional official Apple Design Resources PNG bezel overlay */}
      {bezelSrc ? (
        <Image
          src={bezelSrc}
          alt=""
          width={1336}
          height={2718}
          unoptimized
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 h-full w-full object-contain"
        />
      ) : null}
    </div>
  );
}

export const PhoneFrame = IPhone;
