"use client";

import Link from "next/link";
import { Mail, MessageCircle, Globe } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, setLocale, t } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === "tr" ? "en" : "tr");
  };

  return (
    <footer className="bg-primary border-t border-white/10 text-white pt-16 pb-12 relative z-10 overflow-hidden">
      {/* Subtle glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-5 hover:opacity-85 transition-opacity text-white" aria-label="Orti">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="text-white/75 max-w-sm mb-6 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLanguage} 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all text-xs font-semibold border border-white/15"
                title="Dili Değiştir / Switch Language"
              >
                <Globe size={14} />
                <span className="uppercase">{locale === "tr" ? "English" : "Türkçe"}</span>
              </button>
              <a 
                href={`mailto:${siteConfig.supportEmail}`} 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all border border-white/15"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a 
                href="/contact" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all border border-white/15"
                aria-label="Contact"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.footer.app}</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/#features" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.features}
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/#download" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.download}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.footer.legal}</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col justify-center items-center gap-4">
          <p className="text-white/60 text-xs sm:text-sm text-center">
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
