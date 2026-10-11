"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nContext";
import { siteConfig } from "@/config/site";
import { Mail, Smartphone } from "lucide-react";

export default function DeleteAccountPage() {
  const { locale } = useI18n();
  const isTr = locale === "tr";

  const subject = isTr ? "Hesap Silme Talebi" : "Account Deletion Request";
  const body = isTr
    ? "Merhaba,\n\nOrti hesabımın ve hesabıma bağlı kişisel verilerimin silinmesini talep ediyorum.\n\nNot: Bu e-posta, Orti'ye kayıtlı e-posta adresimden gönderilmiştir."
    : "Hello,\n\nI request the deletion of my Orti account and the personal data linked to it.\n\nNote: This email is sent from the email address registered with Orti.";
  const mailtoHref = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {siteConfig.name}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-4">
            {isTr ? "Hesap ve Veri Silme" : "Account & Data Deletion"}
          </h1>
          <p className="text-text-muted text-sm">
            {isTr
              ? "Orti hesabınızı ve kişisel verilerinizi silmek için aşağıdaki yöntemlerden birini kullanabilirsiniz."
              : "You can use one of the methods below to delete your Orti account and personal data."}
          </p>
        </div>

        <div className="space-y-8">
          {/* Method 1: In-app */}
          <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
              <Smartphone size={18} className="text-primary shrink-0" />
              {isTr ? "1. Uygulama İçinden (En Hızlı Yöntem)" : "1. From Inside the App (Fastest)"}
            </h3>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-text-main font-medium pl-1">
              <li>{isTr ? "Orti uygulamasını açın ve giriş yapın." : "Open the Orti app and sign in."}</li>
              <li>{isTr ? "Ayarlar ekranına gidin." : "Go to Settings."}</li>
              <li>{isTr ? "En alttaki 'Hesabımı Sil' seçeneğine dokunup onaylayın." : "Tap 'Delete Account' at the bottom and confirm."}</li>
            </ol>
          </div>

          {/* Method 2: Email */}
          <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
              <Mail size={18} className="text-primary shrink-0" />
              {isTr ? "2. E-posta ile (Uygulamaya erişemiyorsanız)" : "2. By Email (If you cannot access the app)"}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {isTr
                ? `Orti'ye kayıtlı e-posta adresinizden ${siteConfig.supportEmail} adresine bir e-posta gönderin. Kimliğinizi doğrulamak için ek bilgi isteyebiliriz. Talebinizi en geç 30 gün içinde yanıtlarız.`
                : `Send an email to ${siteConfig.supportEmail} from the email address registered with Orti. We may ask for additional information to verify your identity. We respond to requests within 30 days.`}
            </p>
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:opacity-90 text-white text-sm font-semibold transition-all shadow-sm"
            >
              <Mail size={16} />
              {isTr ? "Silme Talebi E-postası Oluştur" : "Compose Deletion Request Email"}
            </a>
          </div>

          <div className="text-xs text-text-muted pt-4 border-t border-black/10">
            <p className="leading-relaxed">
              {isTr
                ? "Hangi verilerin silindiği ve hangilerinin yasal yükümlülükler veya diğer üyelerin kayıtlarının bütünlüğü için tutulduğu hakkında ayrıntılı bilgi için "
                : "For details on which data is deleted and which is retained for legal obligations or to preserve other members' records, see our "}
              <Link href="/privacy-policy" className="text-primary font-semibold hover:underline">
                {isTr ? "Gizlilik Politikası" : "Privacy Policy"}
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
