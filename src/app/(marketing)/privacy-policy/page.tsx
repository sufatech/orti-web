"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nContext";
import { siteConfig } from "@/config/site";

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
        {locale === "tr" ? (
          <div className="space-y-12 text-text-muted leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                1. Giriş ve Kapsam
              </h2>
              <p>
                Orti (&quot;Uygulama&quot;, &quot;Biz&quot;), kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına en üst düzeyde önem vermektedir. 
                İşbu Gizlilik Politikası, Orti mobil uygulamasını ve ilişkili web hizmetlerini kullandığınızda kişisel verilerinizin nasıl toplandığını, 
                işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                2. Toplanan Veriler
              </h2>
              <p>Uygulamayı kullanırken aşağıdaki veri kategorileri işlenebilir:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hesap Bilgileri:</strong> Ad, soyad, e-posta adresi, profil fotoğrafı ve telefon numarası.</li>
                <li><strong>Grup ve Finansal Kayıtlar:</strong> Oluşturduğunuz gruplar, eklenen harcama tutarları, açıklamalar, kategoriler, borç/alacak bakiyeleri ve para birimi tercihleri.</li>
                <li><strong>Fiş ve Görsel Verileri:</strong> Akıllı fiş tarama özelliği için yüklediğiniz fatura ve makbuz fotoğrafları.</li>
                <li><strong>Cihaz ve Kullanım Verileri:</strong> Cihaz modeli, işletim sistemi sürümü ve anonim performans verileri.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                3. Veri Güvenliği ve Şifreleme
              </h2>
              <p>
                Finansal ve kişisel verileriniz veri aktarımı sırasında 256-bit TLS/SSL şifreleme protokolleri ile, 
                sunucularımızda ise sektör standardı AES-256 şifreleme ile korunmaktadır. 
                Verileriniz hiçbir koşulda üçüncü taraf reklam veya pazarlama şirketlerine satılmaz, kiralanmaz veya devredilmez.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                4. Haklarınız ve İletişim
              </h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca; kişisel verilerinize erişme, düzeltilmesini talep etme 
                veya silinmesini isteme hakkına sahipsiniz. Hesabınızı ve tüm verilerinizi dilediğiniz an uygulama içindeki <em>Ayarlar &gt; Hesabı Sil</em> adımından kalıcı olarak silebilirsiniz.
              </p>
              <p>
                Sorularınız için <Link href="/contact" className="text-primary font-semibold hover:underline">İletişim sayfamızdan</Link> veya <a href={`mailto:${siteConfig.supportEmail}`} className="text-primary font-semibold hover:underline">{siteConfig.supportEmail}</a> adresinden bize dilediğiniz zaman ulaşabilirsiniz.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-12 text-text-muted leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                1. Introduction & Scope
              </h2>
              <p>
                Orti (&quot;App&quot;, &quot;We&quot;, &quot;Us&quot;) is committed to protecting your privacy and personal data. 
                This Privacy Policy explains how your personal data is collected, processed, stored, and protected when you use the Orti mobile application and related web services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                2. Data Collected
              </h2>
              <p>The following categories of data may be processed while using the app:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, profile picture, and phone number.</li>
                <li><strong>Group & Financial Records:</strong> Created groups, expense amounts, descriptions, categories, balances, and currency preferences.</li>
                <li><strong>Receipt & Image Data:</strong> Photos of invoices or receipts uploaded for the smart receipt scanner.</li>
                <li><strong>Device & Usage Metrics:</strong> Device model, OS version, performance telemetry, and anonymous usage analytics.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                3. Security & Encryption
              </h2>
              <p>
                Your financial and personal data is encrypted in transit using 256-bit TLS/SSL and encrypted at rest with industry-standard AES-256 protocols. 
                We never sell, rent, or distribute your data to third-party advertisers or data brokers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-text-main">
                4. Your Rights & Contact
              </h2>
              <p>
                Under GDPR and applicable data protection regulations, you have the right to access, rectify, erase, or export your personal data at any time. 
                You can permanently delete your account and all associated data inside the app under <em>Settings &gt; Delete Account</em>.
              </p>
              <p>
                For any privacy inquiries, contact us via our <Link href="/contact" className="text-primary font-semibold hover:underline">Contact page</Link> or by emailing <a href={`mailto:${siteConfig.supportEmail}`} className="text-primary font-semibold hover:underline">{siteConfig.supportEmail}</a>.
              </p>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}
