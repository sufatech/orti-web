import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms", "tr");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
