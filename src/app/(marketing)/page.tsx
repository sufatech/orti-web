import { ScrollStory } from "@/components/story/ScrollStory";
import { DebtSimplify } from "@/components/sections/DebtSimplify";
import { Plans } from "@/components/sections/Plans";
import { FeatureDeepDive } from "@/components/sections/FeatureDeepDive";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="flex-grow">
      <ScrollStory />
      <DebtSimplify />
      <FeatureDeepDive />
      <Features />
      <Plans />
      <FAQ />
      <CtaSection />
    </main>
  );
}
