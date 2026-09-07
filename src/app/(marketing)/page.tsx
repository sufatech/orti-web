import { Hero } from "@/components/sections/Hero";
import { AppStats } from "@/components/sections/AppStats";
import { FeatureDeepDive } from "@/components/sections/FeatureDeepDive";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <AppStats />
      <FeatureDeepDive />
      <Features />
      <HowItWorks />
      <FAQ />
      <CtaSection />
    </main>
  );
}
