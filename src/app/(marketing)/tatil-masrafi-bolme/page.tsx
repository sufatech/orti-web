import type { Metadata } from "next";
import { UseCasePage } from "@/components/landing/UseCasePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("landing-trip", "tr");

export default function Page() {
  return <UseCasePage id="trip" locale="tr" />;
}
