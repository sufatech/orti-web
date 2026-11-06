import { NextRequest, NextResponse } from "next/server";
import { localeForPath } from "@/lib/pages";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  // Content Security Policy
  // Production: strict nonce + 'strict-dynamic' + upgrade-insecure-requests (no 'unsafe-inline' in script-src).
  // Development: allow Next.js dev server HMR/hydration scripts over local HTTP without nonce/strict-dynamic blocking.
  const scriptSrc = isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval';"
    : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic';`;
  const connectSrc = isDev ? "connect-src 'self' ws: wss:;" : "";
  const upgradeInsecure = isDev ? "" : "upgrade-insecure-requests;";

  const cspHeader = `
    default-src 'self';
    ${scriptSrc}
    ${connectSrc}
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    ${upgradeInsecure}
  `;

  // Clean extra whitespace and newlines
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  const pathname = request.nextUrl.pathname;
  const urlLocale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : localeForPath(pathname);
  if (urlLocale) requestHeaders.set("x-locale", urlLocale);
  else requestHeaders.delete("x-locale");
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - static image and media files
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
