"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useI18n } from "@/i18n/I18nContext";

const NAV_PROBE_Y = 56;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverLightSection, setIsOverLightSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isSubpage = pathname !== "/";
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const updateSurface = () => {
      setIsScrolled(window.scrollY > 16);

      if (pathname !== "/") {
        setIsOverLightSection(true);
        return;
      }

      const hero = document.getElementById("hero");
      const download = document.getElementById("download");
      const footer = document.querySelector("footer");

      const heroRect = hero?.getBoundingClientRect();
      const inHero = heroRect ? heroRect.bottom > NAV_PROBE_Y : window.scrollY < 640;

      const downloadRect = download?.getBoundingClientRect();
      const inDownload = downloadRect ? downloadRect.top <= NAV_PROBE_Y : false;

      const footerRect = footer?.getBoundingClientRect();
      const inFooter = footerRect ? footerRect.top <= NAV_PROBE_Y : false;

      setIsOverLightSection(!inHero && !inDownload && !inFooter);
    };

    updateSurface();
    window.addEventListener("scroll", updateSurface, { passive: true });
    window.addEventListener("resize", updateSurface, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateSurface);
      window.removeEventListener("resize", updateSurface);
    };
  }, [pathname]);

  const isLightTheme = isSubpage || isOverLightSection;

  const navLinks = [
    { name: t.nav.features, href: isSubpage ? "/#features" : "#features" },
    { name: t.nav.howItWorks, href: isSubpage ? "/#how-it-works" : "#how-it-works" },
    { name: t.nav.faq, href: isSubpage ? "/#faq" : "#faq" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLocale(locale === "tr" ? "en" : "tr");
  };

  const handleDownloadClick = () => {
    if (isSubpage) {
      router.push("/#download");
    } else {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById("download")
        ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,padding,box-shadow,color] duration-200 motion-reduce:transition-none ${
        isLightTheme
          ? "bg-white/90 backdrop-blur-md border-black/[0.08] shadow-[0_4px_20px_rgba(15,8,34,0.06)] py-3 text-text-main"
          : isScrolled
            ? "bg-primary-deep/90 backdrop-blur-md border-white/15 shadow-[0_8px_24px_rgba(15,8,34,0.22)] py-3 text-white"
            : "bg-primary-deep/65 backdrop-blur-md border-white/10 py-3.5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center rounded-lg hover:opacity-85 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 ${
            isLightTheme
              ? "text-primary focus-visible:outline-primary"
              : "text-white focus-visible:outline-white"
          }`}
          aria-label="Orti"
        >
          <Logo className="h-6 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-md px-1 py-0.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
                isLightTheme
                  ? pathname === link.href
                    ? "text-primary font-bold focus-visible:outline-primary"
                    : "text-text-main/80 hover:text-primary focus-visible:outline-primary"
                  : "text-white/90 hover:text-white focus-visible:outline-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLightTheme
                ? "border-black/15 text-text-main hover:bg-primary-container/60 hover:border-primary/30 focus-visible:outline-primary"
                : "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white focus-visible:outline-white"
            }`}
            title="Dili Değiştir / Change Language"
          >
            <Globe size={14} aria-hidden="true" />
            <span className="uppercase">{locale}</span>
          </button>

          <Button
            variant={isLightTheme ? "primary" : "outline"}
            className={
              isLightTheme
                ? ""
                : "border-white/80 bg-white text-primary hover:bg-white/90 focus-visible:outline-white"
            }
            size="sm"
            onClick={handleDownloadClick}
          >
            {t.nav.download}
          </Button>
        </div>

        {/* Mobile Toggle & Language */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLightTheme
                ? "border-black/15 text-text-main hover:bg-primary-container/60 focus-visible:outline-primary"
                : "border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
            }`}
          >
            <Globe size={13} aria-hidden="true" />
            <span className="uppercase">{locale}</span>
          </button>

          <button
            type="button"
            className={`p-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLightTheme
                ? "text-text-main hover:bg-black/5 focus-visible:outline-primary"
                : "text-white hover:bg-white/10 focus-visible:outline-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-b overflow-hidden shadow-xl ${
              isLightTheme
                ? "border-black/[0.08] bg-white/95 backdrop-blur-xl text-text-main"
                : "border-white/15 bg-primary-deep/95 backdrop-blur-xl text-white"
            }`}
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium border-b pb-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isLightTheme
                      ? "border-black/[0.06] text-text-main hover:text-primary focus-visible:outline-primary"
                      : "border-white/10 text-white hover:text-white/80 focus-visible:outline-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  variant={isLightTheme ? "primary" : "outline"}
                  className={
                    isLightTheme
                      ? "w-full"
                      : "w-full border-white/80 bg-white text-primary hover:bg-white/90"
                  }
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleDownloadClick();
                  }}
                >
                  {t.nav.download}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
