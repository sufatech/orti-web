"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nContext";

export default function DeleteAccountPage() {
  const { locale } = useI18n();

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Orti
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-4">
            {locale === "tr" ? "Hesap Silme Talebi" : "Account Deletion Request"}
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none text-text-muted leading-relaxed">
          {locale === "tr" ? (
            <>
              <p>Orti hesabınızı ve tüm kişisel verilerinizi kalıcı olarak silmek istiyorsanız aşağıdaki adımlardan birini izleyebilirsiniz:</p>
              
              <h3 className="font-bold text-text-main mt-6 mb-2">1. Uygulama İçinden Silme (Önerilen)</h3>
              <p>Eğer Orti uygulamasına erişiminiz varsa, doğrudan uygulama içinden silebilirsiniz:</p>
              <ul>
                <li>Uygulamayı açın ve giriş yapın.</li>
                <li>Menüden <strong>Ayarlar</strong> bölümüne gidin.</li>
                <li><strong>Hesabı Sil</strong> butonuna dokunun ve onaylayın.</li>
              </ul>
              
              <h3 className="font-bold text-text-main mt-6 mb-2">2. E-Posta Yoluyla Silme (Uygulamaya erişemiyorsanız)</h3>
              <p>Uygulamaya erişiminiz yoksa, kayıtlı e-posta adresinizden bize yazarak silme talebinde bulunabilirsiniz:</p>
              <ul>
                <li><strong>Alıcı:</strong> <a href="mailto:hello@orti.app" className="text-primary hover:underline">hello@orti.app</a></li>
                <li><strong>Konu:</strong> Hesap Silme Talebi</li>
                <li>E-postayı mutlaka Orti&apos;ye kayıtlı olduğunuz adresten gönderin. Ekibimiz kimliğinizi doğruladıktan sonra işlemi gerçekleştirecektir.</li>
              </ul>

              <h3 className="font-bold text-text-main mt-6 mb-2">Verilerin Silinme Süreci</h3>
              <p>
                Hesap silme işlemi başlatıldığında hesabınız hemen devre dışı bırakılır. 30 günlük bekleme süresinin ardından tüm kişisel verileriniz, yüklediğiniz fişler ve oturum bilgileriniz kalıcı olarak silinir. 
                Grup harcamalarınızın tutarları diğer üyelerin bakiyelerinin bozulmaması için sistemde isimsiz (&ldquo;Silinmiş kullanıcı&rdquo;) olarak kalır.
              </p>
              <p>
                Süreç ve verilerinizin nasıl işlendiği ile ilgili ayrıntılı bilgi için <Link href="/privacy-policy#7-saklama-süreleri-ve-hesap-silme" className="text-primary hover:underline">Gizlilik Politikamızın 7. Bölümünü</Link> inceleyebilirsiniz.
              </p>
            </>
          ) : (
            <>
              <p>If you wish to permanently delete your Orti account and all personal data, you can follow one of the steps below:</p>
              
              <h3 className="font-bold text-text-main mt-6 mb-2">1. Deletion from within the App (Recommended)</h3>
              <p>If you have access to the Orti app, you can delete it directly from within the app:</p>
              <ul>
                <li>Open the app and log in.</li>
                <li>Go to <strong>Settings</strong> from the menu.</li>
                <li>Tap the <strong>Delete Account</strong> button and confirm.</li>
              </ul>
              
              <h3 className="font-bold text-text-main mt-6 mb-2">2. Deletion via Email (If you cannot access the app)</h3>
              <p>If you do not have access to the app, you can request deletion by writing to us from your registered email address:</p>
              <ul>
                <li><strong>To:</strong> <a href="mailto:hello@orti.app" className="text-primary hover:underline">hello@orti.app</a></li>
                <li><strong>Subject:</strong> Account Deletion Request</li>
                <li>Make sure to send the email from the address registered with Orti. Our team will process the request after verifying your identity.</li>
              </ul>

              <h3 className="font-bold text-text-main mt-6 mb-2">Data Deletion Process</h3>
              <p>
                When the account deletion process is initiated, your account is immediately deactivated. After a 30-day waiting period, all your personal data, uploaded receipts, and session information are permanently deleted. 
                Your group expense amounts will remain anonymously (&ldquo;Deleted user&rdquo;) in the system so that the balances of other members are not disrupted.
              </p>
              <p>
                For detailed information on the process and how your data is handled, you can review <Link href="/terms-of-service" className="text-primary hover:underline">Section 7 of our Privacy Policy</Link>.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
