import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/landing/GuidePage";
import { guidesMeta, guideIds } from "@/content/guides-meta";
import { guideBySlug } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideIds.map((id) => ({ slug: guidesMeta[id].en.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = guideBySlug("en", (await params).slug);
  return guide ? pageMetadata(`guide-${guide.id}`, "en") : {};
}

export default async function Page({ params }: Props) {
  const guide = guideBySlug("en", (await params).slug);
  if (!guide) notFound();
  return <GuidePage guide={guide} locale="en" />;
}
