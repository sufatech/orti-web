"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/I18nContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isSubpage = pathname !== "/";
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const heroHeight = hero ? hero.offsetHeight : 700;
      setIsScrolled(window.scrollY > 20);
      setIsPastHero(window.scrollY >= heroHeight - 70);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  // Light theme navbar (white bg, dark text) only on subpages OR when scrolled past the purple hero
  const isLightTheme = isSubpage || isPastHero;

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
      document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isLightTheme
          ? "bg-white/95 backdrop-blur-md border-black/10 shadow-sm py-3 text-text-main"
          : isScrolled
          ? "bg-primary/85 backdrop-blur-md border-white/10 shadow-sm py-3 text-white"
          : "bg-transparent border-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/app_icon.png" alt="Orti" width={36} height={36} className="rounded-xl shadow-sm" />
          <span className="text-xl font-bold tracking-tight">
            Orti
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors text-sm font-medium ${
                isLightTheme
                  ? pathname === link.href
                    ? "text-primary font-bold"
                    : "text-text-muted hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              isLightTheme
                ? "border-black/10 text-text-main hover:bg-slate-100 hover:border-primary/30"
                : "border-white/30 text-white hover:bg-white/10 hover:border-white"
            }`}
            title="Dili Değiştir / Change Language"
          >
            <Globe size={14} />
            <span className="uppercase">{locale}</span>
          </button>

          <Button 
            variant={isLightTheme ? "primary" : "outline"} 
            className={isLightTheme ? "" : "border-white text-white hover:bg-white/10"} 
            size="sm" 
            onClick={handleDownloadClick}
          >
            {t.nav.download}
          </Button>
        </div>

        {/* Mobile Toggle & Language */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${
              isLightTheme ? "border-black/10 text-text-main" : "border-white/30 text-white"
            }`}
          >
            <Globe size={13} />
            <span className="uppercase">{locale}</span>
          </button>

          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className={`md:hidden border-b overflow-hidden shadow-xl ${
              isLightTheme
                ? "border-black/5 bg-white/95 backdrop-blur-xl text-text-main"
                : "border-white/10 bg-primary/95 backdrop-blur-xl text-white"
            }`}
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium border-b pb-2 ${
                    isLightTheme
                      ? "border-black/5 text-text-main hover:text-primary"
                      : "border-white/10 text-white hover:text-white/80"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button 
                  variant={isLightTheme ? "primary" : "outline"} 
                  className={isLightTheme ? "w-full" : "w-full border-white text-white hover:bg-white/10"} 
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
