export type Locale = "tr" | "en";

export const translations = {
  tr: {
    nav: {
      features: "Özellikler",
      howItWorks: "Nasıl Çalışır",
      faq: "SSS",
      contact: "İletişim",
      download: "Uygulamayı İndir",
    },
    hero: {
      badge: "Beta Sürümü Yayında!",
      titlePart1: "Ortak",
      titlePart2: "Harcamaları",
      titlePart3: "Adilce Bölüş",
      subtitle: "Ev arkadaşlarınızla, tatil grubunuzla veya ailenizle bütçenizi yönetin. Uygulamayı indirin, kim kime ne kadar borçlu derdine son verin.",
      appStore: "App Store'dan İndir",
      googlePlay: "Google Play'den İndir",
      cards: {
        receivable: "Alacağınız",
        groupName: "İtalya Turu",
        partners: "4 Ortak",
        settlement: "Hesaplaşma",
        settled: "Tamamlandı",
      }
    },
    stats: {
      stat1Val: "30+",
      stat1Label: "Global Para Birimi",
      stat2Val: "Canlı Kur",
      stat2Label: "Otomatik FX Dönüşümü",
      stat3Val: "%0 Komisyon",
      stat3Label: "Tamamen Şeffaf & Ücretsiz",
      stat4Val: "256-bit",
      stat4Label: "Güvenli Şifreli Altyapı",
    },
    deepDive: {
      quickAdd: {
        title: "Hızlı Fiş Ekleme",
        description: "Hesapları tek tek girmekle uğraşmayın. Fişinizin fotoğrafını uygulamaya kaydedin, toplam tutarı arkadaşlarınız arasında kolayca paylaştırın.",
        card1Title: "Market Alışverişi",
        card2Title: "Fiş Tarandı",
        card2Val: "Başarılı",
      },
      settle: {
        title: "Karmaşık Hesaplara Son",
        description: "Gruptaki herkesin birbirine farklı borçları mı var? Orti'nin akıllı algoritması, kimin kime ne kadar ödemesi gerektiğini en aza indirger ve size en sade çözümü sunar.",
        card1Title: "Can'a Ödeme",
      },
      goals: {
        title: "Birlikte Biriktirin",
        description: "Gelecek tatiliniz veya ev eşyanız için ortak birikim hedefleri belirleyin. Grubunuzla birlikte hedefe doğru ilerleyişi anlık olarak takip edin.",
        card1Title: "Roma & Floransa Turu",
        card1Val: "%78 Tamamlandı",
      },
      groups: {
        title: "Grup & Arkadaş Yönetimi",
        description: "Ev arkadaşları, ofis tayfası veya seyahat grubu... Sınırsız grup oluşturun, herkesin bütçesini tek bir ekrandan, şeffaf bir şekilde yönetin.",
        card1Title: "Ev Arkadaşları",
        card1Val: "3 Aktif Üye",
        card2Title: "Yeni Davet",
        card2Val: "Kabul Edildi",
      },
    },
    features: {
      badge: "Neden Orti Kullanmalısınız?",
      subtitle: "Finansal ilişkilerinizi şeffaf ve düzenli hale getirmek için ihtiyacınız olan tüm özellikler cebinizde.",
      items: [
        {
          title: "Yapay Zeka ile Fiş Tarama",
          description: "Harcamaları tek tek girmekle uğraşmayın. Fişinizin fotoğrafını çekin, Orti saniyeler içinde okuyup harcamayı oluştursun.",
        },
        {
          title: "Ortak Hedefler Belirleyin",
          description: "Gelecek tatiliniz veya ev eşyanız için grubunuzla ortak birikim hedefleri belirleyin, ilerlemeyi birlikte takip edin.",
        },
        {
          title: "Detaylı Notlar & Etiketler",
          description: "Harcamalarınıza detaylı notlar ekleyin, fotoğraflar ve özel etiketlerle hiçbir ayrıntıyı unutmayın.",
        },
        {
          title: "Hızlı Borç Hesaplama",
          description: "Karmaşık hesaplamalara son. Algoritmamız kimin kime ne kadar ödemesi gerektiğini matematiksel olarak en aza indirger.",
        },
        {
          title: "Çoklu Dil Desteği",
          description: "Uluslararası arkadaş gruplarınız için Türkçe, İngilizce ve daha fazla dil desteği ile sınırları tamamen kaldırın.",
        },
        {
          title: "Güvenli Veri Altyapısı",
          description: "Tüm finansal verileriniz uçtan uca şifrelenir ve banka standartlarında güvende tutulur.",
        },
      ]
    },
    howItWorks: {
      title: "Sadece 3 Adımda Her Şey Çözülür",
      subtitle: "Orti'yi kullanmaya başlamak ve arkadaşlarınızla hesaplaşmak işte bu kadar basit.",
      steps: [
        {
          step: "01",
          title: "Grup Oluşturun",
          description: "Arkadaşlarınızı, ev arkadaşlarınızı veya ailenizi davet edin, ortak bütçenizi anında başlatın.",
        },
        {
          step: "02",
          title: "Harcamaları Ekleyin",
          description: "Kim ne ödediyse uygulamaya girin veya fiş fotoğrafını çekin; harcamalar saniyeler içinde bölünsün.",
        },
        {
          step: "03",
          title: "Tek Tuşla Hesaplaşın",
          description: "Akıllı algoritma gereksiz transferleri eler ve kimin kime en sade şekilde ödeyeceğini gösterir.",
        },
      ]
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.",
      items: [
        {
          question: "Orti tamamen ücretsiz mi?",
          answer: "Evet, Orti'nin tüm temel özellikleri (sınırsız grup oluşturma, harcama ekleme, borç sadeleştirme ve bakiye takibi) tamamen ücretsizdir.",
        },
        {
          question: "Hangi ülkelerde geçerli? Farklı para birimleri kullanabilir miyim?",
          answer: "Orti tüm dünyada kullanılabilir. Yurt dışı seyahatleriniz ve uluslararası gruplarınız için 100'den fazla para birimini destekler ve anlık döviz kurları ile otomatik dönüştürme sağlar.",
        },
        {
          question: "Gruptaki harcamaları eşit olmayan oranlarda bölebilir miyim?",
          answer: "Kesinlikle. Harcamaları eşit bölmenin yanı sıra yüzde (%), tam tutar, pay/hisse veya belirli kişileri dahil edip çıkararak dilediğiniz gibi özelleştirebilirsiniz.",
        },
        {
          question: "Yapay zeka ile fiş tarama nasıl çalışır?",
          answer: "Restoran, market veya benzinlik fişinizin fotoğrafını çektiğinizde Orti'nin yapay zeka OCR motoru toplam tutarı, tarihi ve kalemleri otomatik olarak okur ve saniyeler içinde harcama kartına dönüştürür.",
        },
        {
          question: "Verilerim ve finansal kayıtlarım güvende mi?",
          answer: "Kesinlikle. Tüm finansal verileriniz uçtan uca 256-bit SSL şifreleme ve banka standartlarında güvenlik protokolleri ile korunur. Verileriniz asla üçüncü taraflarla paylaşılmaz.",
        },
        {
          question: "Arkadaşım Orti kullanmıyorsa yine de harcama ekleyebilir miyim?",
          answer: "Evet. Arkadaşınızı gruba doğrudan 'misafir üye' olarak ekleyebilir, onun adına harcama ve borç kayıtlarını şeffaf şekilde yönetebilirsiniz.",
        },
        {
          question: "Borç sadeleştirme (Debt Simplification) algoritması nedir?",
          answer: "Çok kişilik gruplarda herkesin birbirine borçlu olduğu karmaşık durumları Orti matematiksel graf algoritmalarıyla analiz eder ve toplam borçları en az sayıda para transferiyle sıfırlayacak en sade ödeme planını oluşturur.",
        },
      ]
    },
    cta: {
      title: "Hemen İndirin, Hesapları Kolayca Bölüşün",
      subtitle: "Orti ile finansal ilişkilerinizi şeffaf ve stressiz hale getirin. iOS ve Android için ücretsiz indirin.",
    },
    footer: {
      tagline: "Ev arkadaşlarınızla, tatil grubunuzla veya ailenizle ortak harcamalarınızı kolayca takip edin, adil bir şekilde bölüşün.",
      app: "Uygulama",
      legal: "Yasal",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      contact: "İletişim",
      copyright: "Orti Mobil Uygulaması. Tüm hakları saklıdır.",
    },
    contactPage: {
      badge: "İletişim & Destek",
      title: "Bizimle İletişime Geçin",
      desc: "Orti hakkında sorularınız, önerileriniz veya hata bildirimleriniz için bize dilediğiniz an yazabilirsiniz.",
      emailTitle: "E-Posta",
      emailSub: "En geç 24 saat içinde yanıtlanır",
      faqCalloutTitle: "Sıkça Sorulan Sorular",
      faqCalloutSub: "Cevabınızı hemen bulmak için SSS rehberimize göz atabilirsiniz.",
      faqLink: "SSS Bölümüne Git →",
      formTitle: "Mesaj Gönderin",
      nameLabel: "Ad Soyad *",
      namePlaceholder: "Adınız ve Soyadınız",
      emailLabel: "E-Posta *",
      emailPlaceholder: "ornek@domain.com",
      subjectLabel: "Konu / Kategori *",
      subjectPlaceholder: "Bir konu seçin...",
      subjectOptions: {
        support: "Genel Destek & Soru",
        bug: "Hata Bildirimi (Bug)",
        feature: "Özellik / İyileştirme Önerisi",
        partnership: "İş Birliği & Ortaklık",
        other: "Diğer",
      },
      messageLabel: "Mesajınız *",
      messagePlaceholder: "Mesajınızı buraya yazın...",
      submitBtn: "Mesajı Gönder",
      successTitle: "Mesajınız Alındı!",
      successDesc: "Bize ulaştığınız için teşekkür ederiz. Ekibimiz mesajınızı inceleyip en kısa sürede geri dönüş yapacaktır.",
      newMsgBtn: "Yeni Mesaj Gönder",
    },
    privacyPage: {
      badge: "Veri Güvenliği & KVKK",
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 7 Eylül 2026",
    },
    termsPage: {
      badge: "Hizmet Şartları",
      title: "Kullanım Koşulları",
      lastUpdated: "Son Güncelleme: 7 Eylül 2026",
    }
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      faq: "FAQ",
      contact: "Contact",
      download: "Download App",
    },
    hero: {
      badge: "Beta Version Live!",
      titlePart1: "Split",
      titlePart2: "Shared Expenses",
      titlePart3: "Fairly & Effortlessly",
      subtitle: "Manage shared budgets with roommates, travel buddies, or family. Download Orti and put an end to who-owes-whom headaches.",
      appStore: "Download on App Store",
      googlePlay: "Download on Google Play",
      cards: {
        receivable: "You are owed",
        groupName: "Italy Tour",
        partners: "4 Members",
        settlement: "Settlement",
        settled: "Completed",
      }
    },
    stats: {
      stat1Val: "30+",
      stat1Label: "Global Currencies",
      stat2Val: "Live FX",
      stat2Label: "Real-time Currency Sync",
      stat3Val: "0% Fees",
      stat3Label: "Transparent & Free to Use",
      stat4Val: "256-bit",
      stat4Label: "Encrypted Security",
    },
    deepDive: {
      quickAdd: {
        title: "Fast Receipt Scanner",
        description: "No more typing expenses manually. Snap a receipt photo and instantly split totals among your group with AI precision.",
        card1Title: "Grocery Shopping",
        card2Title: "Receipt Scanned",
        card2Val: "Success",
      },
      settle: {
        title: "No More Complex Math",
        description: "Multiple people owing different amounts? Orti's smart algorithm simplifies debts into the minimum number of payments.",
        card1Title: "Payment to Can",
      },
      goals: {
        title: "Save Together for Goals",
        description: "Set shared savings goals for vacations or apartment upgrades. Track group progress together in real time.",
        card1Title: "Rome & Florence Trip",
        card1Val: "78% Completed",
      },
      groups: {
        title: "Group & Friend Management",
        description: "Roommates, office crew, or travel groups... Create unlimited groups and manage everyone's balance transparently in one place.",
        card1Title: "Roommates",
        card1Val: "3 Active Members",
        card2Title: "New Invite",
        card2Val: "Accepted",
      },
    },
    features: {
      badge: "Why Choose Orti?",
      subtitle: "All the features you need to make financial relationships transparent and effortless in your pocket.",
      items: [
        {
          title: "AI Receipt Scanning",
          description: "Don't bother entering receipts one by one. Take a photo and Orti reads and generates the expense in seconds.",
        },
        {
          title: "Shared Savings Goals",
          description: "Set mutual savings targets for vacations or home essentials and track group progress together.",
        },
        {
          title: "Detailed Notes & Tags",
          description: "Add detailed notes, photos, and custom tags to expenses so no detail ever gets forgotten.",
        },
        {
          title: "Smart Debt Simplification",
          description: "Eliminate complex loops. Our algorithm mathematically minimizes the number of transfers needed to settle up.",
        },
        {
          title: "Multi-Currency Support",
          description: "Seamlessly split expenses in 100+ global currencies with live exchange rates for international travels.",
        },
        {
          title: "Bank-Grade Security",
          description: "All your financial records are end-to-end encrypted with 256-bit TLS/SSL and stored securely.",
        },
      ]
    },
    howItWorks: {
      title: "Simple & Clear in Just 3 Steps",
      subtitle: "Getting started with Orti and settling expenses with friends is that simple.",
      steps: [
        {
          step: "01",
          title: "Create a Group",
          description: "Invite your friends, roommates, or travel buddies and start your shared budget instantly.",
        },
        {
          step: "02",
          title: "Add Expenses",
          description: "Log who paid what manually or snap receipt photos with our AI scanner in seconds.",
        },
        {
          step: "03",
          title: "Settle with One Tap",
          description: "The smart algorithm eliminates circular debts and shows the simplest way to settle balances.",
        },
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to all your common questions about Orti.",
      items: [
        {
          question: "Is Orti completely free?",
          answer: "Yes, all core features of Orti (unlimited groups, expense splitting, debt simplification, and balance tracking) are completely free.",
        },
        {
          question: "Can I use Orti internationally with multiple currencies?",
          answer: "Yes! Orti supports 100+ global currencies and automatically converts exchange rates in real time for your trips.",
        },
        {
          question: "Can I split expenses unequally?",
          answer: "Absolutely. You can split bills equally, by exact amounts, percentages (%), shares, or select specific members for each expense.",
        },
        {
          question: "How does AI receipt scanning work?",
          answer: "When you snap a receipt photo, Orti's AI OCR engine automatically extracts items, total amount, and date into an expense card.",
        },
        {
          question: "Is my personal and financial data secure?",
          answer: "Yes, all data is protected with 256-bit SSL encryption and strict security standards. Your data is never sold to third parties.",
        },
        {
          question: "Can I add someone who doesn't have the app yet?",
          answer: "Yes! You can add anyone as a guest member and track their balances on their behalf until they join.",
        },
        {
          question: "What is the Debt Simplification algorithm?",
          answer: "In multi-person groups, Orti calculates graph flow optimization to settle all balances using the minimum possible number of money transfers.",
        },
      ]
    },
    cta: {
      title: "Download Now & Split Bills with Ease",
      subtitle: "Make shared finances transparent and stress-free. Download for free on iOS and Android.",
    },
    footer: {
      tagline: "Track shared expenses with roommates, travel buddies, or family and split fairly.",
      app: "App",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      copyright: "Orti Mobile App. All rights reserved.",
    },
    contactPage: {
      badge: "Contact & Support",
      title: "Get in Touch with Us",
      desc: "Reach out to us for any questions, feature suggestions, or bug reports about Orti.",
      emailTitle: "Email",
      emailSub: "Responded within 24 hours",
      faqCalloutTitle: "Frequently Asked Questions",
      faqCalloutSub: "Check our FAQ guide to find immediate answers.",
      faqLink: "Go to FAQ Section →",
      formTitle: "Send a Message",
      nameLabel: "Full Name *",
      namePlaceholder: "Your full name",
      emailLabel: "Email *",
      emailPlaceholder: "example@domain.com",
      subjectLabel: "Topic / Category *",
      subjectPlaceholder: "Select a topic...",
      subjectOptions: {
        support: "General Support & Inquiry",
        bug: "Bug Report",
        feature: "Feature Request / Feedback",
        partnership: "Partnership & Press",
        other: "Other",
      },
      messageLabel: "Your Message *",
      messagePlaceholder: "Write your message here...",
      submitBtn: "Send Message",
      successTitle: "Message Received!",
      successDesc: "Thank you for reaching out. Our team will review your message and get back to you shortly.",
      newMsgBtn: "Send Another Message",
    },
    privacyPage: {
      badge: "Data Security & Privacy",
      title: "Privacy Policy",
      lastUpdated: "Last Updated: September 7, 2026",
    },
    termsPage: {
      badge: "Terms of Service",
      title: "Terms of Service",
      lastUpdated: "Last Updated: September 7, 2026",
    }
  }
} as const;
