import type { ReactNode } from "react";

/**
 * Phone shell. Aspect ratio is fixed (screenshots are 540x1173) so nothing shifts
 * when images arrive. Children are absolutely stacked screens.
 */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[0.4747] rounded-[2.2rem] bg-[#15101f] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] ${className ?? ""}`}
    >
      <div className="absolute inset-x-[2.8%] inset-y-[1.33%] overflow-hidden rounded-[1.8rem] bg-white">
        {children}
      </div>
    </div>
  );
}
