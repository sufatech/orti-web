import type { Metadata } from "next";
import { headers } from "next/headers";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, pageMetadata, softwareApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ThreeSteps } from "@/components/sections/ThreeSteps";
import { DebtSimplify } from "@/components/sections/DebtSimplify";
import { SplitCalculator } from "@/components/sections/SplitCalculator";
import { Showcase } from "@/components/sections/Showcase";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = pageMetadata("home", "tr");

export default async function Home() {
  // Read request headers so Next.js applies the per-request CSP nonce from proxy.ts
  await headers();

  return (
    <main className="flex-grow">
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(), softwareApplicationJsonLd()]} />
      <Hero />
      <ThreeSteps />
      <DebtSimplify />
      <SplitCalculator />
      <Showcase />
      <FeatureGrid />
      <Plans />
      <FAQ />
      <CtaSection />
    </main>
  );
}
