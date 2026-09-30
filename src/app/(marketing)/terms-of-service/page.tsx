"use client";
import { useI18n } from "@/i18n/I18nContext";
import TermsOfServiceTr from "@/content/terms-of-service.mdx";

export default function TermsPage() {
  const { locale, t } = useI18n();

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {t.termsPage.badge}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-4">
            {t.termsPage.title}
          </h1>
          <p className="text-text-muted text-sm">
            {t.termsPage.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none text-text-muted leading-relaxed">
          {locale === "tr" ? (
            <TermsOfServiceTr />
          ) : (
            <p>English translation is currently not available. Please switch to Turkish.</p>
          )}
        </div>
      </div>
    </div>
  );
}
