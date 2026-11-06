import { NextRequest, NextResponse } from "next/server";
import { goDestination } from "@/lib/go";

export const dynamic = "force-dynamic";

/** Bio link: App Store on iOS, Play on Android, home page with both buttons on desktop. */
export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const target = goDestination(request.headers.get("user-agent"), { c: params.get("c"), s: params.get("s") });
  const response = NextResponse.redirect(target, 302);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("X-Robots-Tag", "noindex");
  return response;
}
