"use client";

import { useI18n } from "@/i18n/I18nContext";
import PrivacyPolicyTr from "@/content/privacy-policy.mdx";
import PrivacyPolicyEn from "@/content/privacy-policy-en.mdx";

export default function PrivacyPolicyPage() {
  const { locale, t } = useI18n();

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {t.privacyPage.badge}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-4">
            {t.privacyPage.title}
          </h1>
          <p className="text-text-muted text-sm">
            {t.privacyPage.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none text-text-muted leading-relaxed">
          {locale === "tr" ? <PrivacyPolicyTr /> : <PrivacyPolicyEn />}
        </div>
      </div>
    </div>
  );
}
