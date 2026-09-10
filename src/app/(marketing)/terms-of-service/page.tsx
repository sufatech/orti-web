"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nContext";

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
        {locale === "tr" ? (
          <div className="space-y-12 text-text-muted leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                1. Koşulların Kabulü
              </h2>
              <p>
                Orti mobil uygulamasını indirerek, yükleyerek veya kullanarak işbu Kullanım Koşulları&apos;nı ve Gizlilik Politikası&apos;nı 
                kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız lütfen uygulamayı kullanmayınız.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                2. Hizmetin Niteliği
              </h2>
              <p>
                Orti, kullanıcıların arkadaşları ve aileleriyle ortak harcamalarını kaydetmelerine, borç/alacak bakiyelerini takip etmelerine 
                ve hesaplaşma planları oluşturmalarına yardımcı olan bir finansal takip ve bütçe yönetim aracıdır. 
                Orti bir banka veya doğrudan ödeme kuruluşu değildir; uygulama içinde fiili para transferi yapılmaz.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                3. Kullanıcı Yükümlülükleri
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kullanıcılar hesap bilgilerinin ve şifrelerinin güvenliğinden kendileri sorumludur.</li>
                <li>Uygulama üzerinden yanıltıcı, yasa dışı veya üçüncü tarafların haklarını ihlal edici içerik ve harcama kaydı girilemez.</li>
                <li>Sistemin işleyişini aksatacak, güvenlik açıklarını suistimal edecek faaliyetlerde bulunulamaz.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                4. Değişiklikler ve İletişim
              </h2>
              <p>
                Orti, işbu kullanım koşullarını dilediği zaman güncelleme hakkını saklı tutar. 
                Önemli değişiklikler uygulama içerisinden veya e-posta yoluyla kullanıcılara duyurulur.
              </p>
              <p>
                Her türlü soru ve geri bildiriminiz için <Link href="/contact" className="text-primary font-semibold hover:underline">İletişim sayfamızdan</Link> bize ulaşabilirsiniz.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-12 text-text-muted leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using the Orti mobile application, you agree to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree, please do not use the application.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                2. Nature of Service
              </h2>
              <p>
                Orti is an expense sharing, tracking, and debt simplification utility designed to assist users in tracking group budgets. 
                Orti is not a banking institution or money transmitter; no actual financial transfers occur inside the app.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                3. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users are solely responsible for maintaining the confidentiality of their login credentials.</li>
                <li>You agree not to post unlawful, infringing, or fraudulent financial entries.</li>
                <li>Attempting to compromise the security or integrity of Orti services is strictly prohibited.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                4. Modifications & Inquiries
              </h2>
              <p>
                We reserve the right to revise these Terms of Service at any time. Notice of significant updates will be provided in-app or via email.
              </p>
              <p>
                For feedback or legal notices, visit our <Link href="/contact" className="text-primary font-semibold hover:underline">Contact page</Link>.
              </p>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}
