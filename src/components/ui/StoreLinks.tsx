import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-[transform,background-color,border-color,color] duration-150 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";

/** Real store links as anchors (no JS needed). */
export function StoreLinks({
  appStoreLabel,
  googlePlayLabel,
  tone = "light",
  className,
  buttonClassName,
}: {
  appStoreLabel: string;
  googlePlayLabel: string;
  tone?: "light" | "dark";
  className?: string;
  buttonClassName?: string;
}) {
  const isLight = tone === "light";

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5 sm:gap-3", className)}>
      <a
        href={siteConfig.links.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          base,
          isLight
            ? "bg-primary text-white shadow-[0_10px_24px_-6px_rgba(99,14,212,0.42)] hover:bg-primary-deep focus-visible:outline-primary"
            : "bg-white text-primary shadow-lg shadow-black/10 hover:bg-white/90 focus-visible:outline-white",
          buttonClassName,
        )}
      >
        {appStoreLabel}
      </a>
      <a
        href={siteConfig.links.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          base,
          isLight
            ? "border border-black/15 bg-surface text-text-main shadow-xs hover:border-primary/35 hover:text-primary focus-visible:outline-primary"
            : "border border-white/75 text-white hover:bg-white/10 focus-visible:outline-white",
          buttonClassName,
        )}
      >
        {googlePlayLabel}
      </a>
    </div>
  );
}
