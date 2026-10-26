import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center rounded-xl font-semibold whitespace-nowrap transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Real store links as anchors (no JS needed). */
export function StoreLinks({
  appStoreLabel,
  googlePlayLabel,
  className,
  buttonClassName,
}: {
  appStoreLabel: string;
  googlePlayLabel: string;
  className?: string;
  buttonClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <a
        href={siteConfig.links.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, "bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/10", buttonClassName)}
      >
        {appStoreLabel}
      </a>
      <a
        href={siteConfig.links.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, "border border-white text-white hover:bg-white/10", buttonClassName)}
      >
        {googlePlayLabel}
      </a>
    </div>
  );
}
