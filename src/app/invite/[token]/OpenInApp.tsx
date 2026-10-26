"use client";

import type { ReactNode } from "react";

/**
 * Primary "Open in Orti" button. The href is the universal link (same URL path),
 * which the OS hands to the app when it is installed and verified. A tap from
 * inside the page itself does not trigger a universal link on iOS, so the click
 * also tries the custom scheme; if the app is missing nothing visible happens
 * and the store buttons below remain the next step.
 */
export function OpenInApp({
  href,
  schemeHref,
  children,
  className,
}: {
  href: string;
  schemeHref: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        window.location.href = schemeHref;
      }}
    >
      {children}
    </a>
  );
}
