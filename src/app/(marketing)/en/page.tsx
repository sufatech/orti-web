import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Home from "../page";

export const metadata: Metadata = pageMetadata("home", "en");

export default Home;
