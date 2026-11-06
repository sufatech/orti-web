import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { headers } from "next/headers";
import { I18nProvider } from "@/i18n/I18nContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#630ED4",
};

export const metadata: Metadata = {
  title: "Orti | Ortak Harcama ve Grup Bütçe Yönetimi",
  description: "Orti ile ev arkadaşlarınızla, tatil grubunuzla veya ailenizle ortak harcamalarınızı kolayca takip edin ve adil bir şekilde bölüşün.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://orti.app"),
  // Smart banner only when the numeric App Store id is configured.
  ...(siteConfig.appleAppId ? { other: { "apple-itunes-app": `app-id=${siteConfig.appleAppId}` } } : {}),
  openGraph: {
    title: "Orti | Ortak Harcama ve Grup Bütçe Yönetimi",
    description: "Ortak harcamalarınızı kolayca takip edin ve adil bir şekilde bölüşün.",
    url: "https://orti.app",
    siteName: "Orti",
    locale: "tr_TR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const forced = h.get("x-locale");
  const forcedLocale = forced === "en" || forced === "tr" ? forced : undefined;
  return (
    <html lang={forcedLocale ?? "tr"} className={`${plusJakartaSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-surface text-text-main">
        <I18nProvider forcedLocale={forcedLocale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
