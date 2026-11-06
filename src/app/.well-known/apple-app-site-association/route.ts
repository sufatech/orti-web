import { NextResponse } from "next/server";
import { appleAppSiteAssociation } from "@/lib/wellknown";

export const dynamic = "force-dynamic";

export function GET() {
  const body = appleAppSiteAssociation();
  if (!body) return new NextResponse(null, { status: 404 });
  return NextResponse.json(body, { headers: { "Cache-Control": "public, max-age=3600" } });
}
