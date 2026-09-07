import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
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
  openGraph: {
    title: "Orti | Ortak Harcama ve Grup Bütçe Yönetimi",
    description: "Ortak harcamalarınızı kolayca takip edin ve adil bir şekilde bölüşün.",
    url: "https://orti.app",
    siteName: "Orti",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-surface text-text-main">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
