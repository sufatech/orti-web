import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("delete-account", "tr");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
