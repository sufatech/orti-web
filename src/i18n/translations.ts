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
      subtitle:
        "Ev arkadaşlarınızla, tatil grubunuzla veya ailenizle bütçenizi yönetin. Uygulamayı indirin, kim kime ne kadar borçlu derdine son verin.",
      appStore: "App Store'dan İndir",
      googlePlay: "Google Play'den İndir",
      cards: {
        receivable: "Alacağınız",
        groupName: "Kapadokya Tatili",
        partners: "4 Üye",
        settlement: "Hesaplaşma",
        settled: "Tamamlandı",
      },
    },
    story: {
      demoNote: "Örnek veriler",
      stepLabel: "Adım {n} / 4",
      steps: [
        {
          title: "Harcamayı ekle",
          description:
            "Ne ödediysen yaz, grubu seç. Ödeyen sensin; kaç kişi arasında bölüneceğini işaretle.",
        },
        {
          title: "İstediğin gibi böl",
          description:
            "Eşit, yüzde ya da tam tutar. Orti herkesin payını anında hesaplar.",
        },
        {
          title: "Kim kime ne kadar, tek bakışta",
          description:
            "Grubun hesabı canlı kalır: kimden alacaklısın, kime borçlusun.",
        },
        {
          title: "Öde, kaydet, kapat",
          description:
            "Ödemeyi kaydettiğin anda borç kapanır. Hesaplaşma mesajlarına gerek kalmaz.",
        },
      ],
      chips: {
        bill: "Akşam yemeği",
        billAmount: "₺2.180,00",
        shareAmount: "₺545,00",
        people: ["Sen", "Mehmet", "Zeynep", "Ece"],
        owedLabel: "Mehmet sana borçlu",
        owedAmount: "₺1.600,00",
        oweLabel: "Zeynep'e borcun",
        oweAmount: "₺416,67",
        settledLabel: "Ödeme kaydedildi",
        settledAmount: "₺1.600,00",
      },
      screens: {
        add: "Orti'de harcama ekleme ekranı",
        debts: "Orti'de grup bakiyeleri ekranı",
        settle: "Orti'de ödeme kaydetme ekranı",
        firstRun: "Orti başlangıç ve grup oluşturma ekranı",
        simplify: "Orti borç sadeleştirme ekranı",
        plans: "Orti Pro plan ve dışa aktarma ekranı",
      },
    },
    simplify: {
      title: "Gereksiz transferleri ele",
      description:
        "Ali Can'a, Can da Deniz'e borçluysa iki ödeme gerekmez: Ali doğrudan Deniz'e öder. Orti bunu grubun tamamı için kendi hesaplar.",
      before: "Önce: 2 ödeme",
      after: "Sonra: 1 ödeme",
      people: { a: "Ali", b: "Can", c: "Deniz" },
      amount: "₺300",
    },
    plans: {
      title: "Ücretsiz başla, gerekirse Pro'ya geç",
      free: {
        name: "Ücretsiz",
        items: [
          "Sahibi olduğun 3 gruba kadar",
          "Harcama ekleme; eşit, yüzde veya tam tutar bölme",
          "Bakiye takibi ve hesaplaşma",
        ],
      },
      pro: {
        name: "Orti Pro",
        items: [
          "Sınırsız grup",
          "PDF harcama raporu",
          "Grup verisini ZIP olarak dışa aktarma",
          "Yedekten içe aktarma",
        ],
      },
    },
    stats: {
      stat1Val: "3 Bölüşüm Modu",
      stat1Label: "Eşit, Yüzde veya Tam Tutar",
      stat2Val: "Tek Transfer",
      stat2Label: "Otomatik Borç Sadeleştirme",
      stat3Val: "%0 Komisyon",
      stat3Label: "Tamamen Şeffaf & Ücretsiz",
      stat4Val: "PDF & ZIP",
      stat4Label: "Raporlama ve Yedekleme",
    },
    deepDive: {
      quickAdd: {
        title: "Kiminle Paylaşıyorsan Saniyeler İçinde Ekle",
        description:
          "Grubu seç, tutarı gir ve kategoriyi işaretle. Eşit, yüzde ya da tam tutar seçenekleriyle kimin ne kadar ödeyeceği anında netleşsin.",
        card1Title: "Kapadokya Tatili",
        card1Val: "₺2.180,00",
        card2Title: "Bölüşüm · Eşit (4 kişi)",
        card2Val: "₺545,00 / kişi",
      },
      groups: {
        title: "Grup Bakiyeleri Her An Canlı",
        description:
          "Ev arkadaşları, tatil ekibi veya aile bütçesi... Kimin sana ne kadar borçlu olduğunu ve kime ödeme yapman gerektiğini tek ekrandan şeffafça takip et.",
        card1Title: "Mehmet sana borçlu",
        card1Val: "₺1.600,00",
        card2Title: "Zeynep'e borcun",
        card2Val: "₺416,67",
      },
      settle: {
        title: "Karmaşık Borç Ağlarını Tek Ödemede Kapat",
        description:
          "Gruptaki herkesin birbirine farklı borçları mı var? Orti gereksiz ara transferleri eler; ödemeyi kaydettiğin anda tüm bakiyeler güncellenir.",
        card1Title: "Ödeme kaydedildi",
        card1Val: "₺1.600,00",
        card2Title: "Kalan transfer",
        card2Val: "0 borç",
      },
      goals: {
        title: "Saniyeler İçinde Başla, Dilediğinde Dışa Aktar",
        description:
          "Ücretsiz olarak 3 gruba kadar hemen oluştur, arkadaşlarını bağlantı ile davet et. Orti Pro ile sınırsız grup aç, PDF harcama raporu ve ZIP yedeği al.",
        card1Title: "Ücretsiz Başlangıç",
        card1Val: "3 aktif grup",
        card2Title: "Orti Pro",
        card2Val: "PDF & ZIP Yedek",
      },
    },
    features: {
      badge: "Neden Orti Kullanmalısınız?",
      subtitle:
        "Ortak harcamaları konuşmadan, tablolarla uğraşmadan şeffaf ve adil biçimde yönetmek için tasarlandı.",
      items: [
        {
          title: "Esnek Bölüşüm Seçenekleri",
          description:
            "Harcamaları eşit, yüzde (%) veya tam tutar olarak bölün; yalnızca ilgili kişileri harcamaya dahil edin.",
        },
        {
          title: "Otomatik Borç Sadeleştirme",
          description:
            "Zincirleme borçları tek transfere indirgeyen algoritma ile grup içi para trafiğini en aza indirin.",
        },
        {
          title: "Grup Notları ve Hedef Takibi",
          description:
            "Grup içinde ortak bütçe ilerlemesini, işlem geçmişini ve önemli notları tek ekranda tutun.",
        },
        {
          title: "Tek Dokunuşla Hesaplaşma",
          description:
            "Yapılan ödemeyi kaydedin; grup bakiyesi ve alacak-verecek listesi anında güncellensin.",
        },
        {
          title: "PDF Rapor ve ZIP Yedekleme",
          description:
            "Tatil veya dönem sonunda tüm harcamaları PDF raporu ya da taşınabilir ZIP arşivi olarak dışa aktarın.",
        },
        {
          title: "Misafir Üye ve Kolay Davet",
          description:
            "Uygulamayı henüz indirmemiş arkadaşlarınızı bile gruba ekleyin veya davet bağlantısıyla anında dahil edin.",
        },
      ],
    },
    howItWorks: {
      title: "Sadece 3 Adımda Her Şey Çözülür",
      subtitle:
        "Orti'yi kullanmaya başlamak ve arkadaşlarınızla hesaplaşmak işte bu kadar basit.",
      steps: [
        {
          step: "01",
          title: "Grup Oluşturun",
          description:
            "Arkadaşlarınızı, ev arkadaşlarınızı veya ailenizi davet edin, ortak bütçenizi anında başlatın.",
        },
        {
          step: "02",
          title: "Harcamaları Ekleyin",
          description:
            "Kim ne ödediyse uygulamaya girin; eşit, yüzde veya tam tutarla saniyeler içinde bölünsün.",
        },
        {
          step: "03",
          title: "Tek Tuşla Hesaplaşın",
          description:
            "Akıllı algoritma gereksiz transferleri eler ve kimin kime en sade şekilde ödeyeceğini gösterir.",
        },
      ],
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.",
      items: [
        {
          question: "Orti tamamen ücretsiz mi?",
          answer:
            "Evet, Orti'nin tüm temel özellikleri (sahibi olduğunuz 3 gruba kadar grup oluşturma, harcama ekleme, borç sadeleştirme ve bakiye takibi) ücretsizdir. Sınırsız grup, PDF rapor, dışa aktarma ve yedekten içe aktarma Orti Pro ile gelir.",
        },
        {
          question: "Gruptaki harcamaları eşit olmayan oranlarda bölebilir miyim?",
          answer:
            "Kesinlikle. Harcamaları eşit bölmenin yanı sıra yüzde (%), tam tutar veya yalnızca seçili grup üyelerini dahil ederek dilediğiniz gibi özelleştirebilirsiniz.",
        },
        {
          question: "Borç sadeleştirme (Debt Simplification) nasıl çalışır?",
          answer:
            "Ali Can'a, Can da Deniz'e borçluysa iki ayrı transfer yerine Ali doğrudan Deniz'e ödeme yapar. Orti gruptaki tüm bakiyeleri analiz ederek en az sayıda transferle hesaplaşma planını çıkarır.",
        },
        {
          question: "Arkadaşım Orti kullanmıyorsa yine de harcama ekleyebilir miyim?",
          answer:
            "Evet. Arkadaşınızı gruba doğrudan üye olarak ekleyebilir, onun adına harcama ve borç kayıtlarını yönetebilir ve dilediğinizde davet bağlantısı gönderebilirsiniz.",
        },
        {
          question: "Grup verilerini dışa aktarabilir veya yedekleyebilir miyim?",
          answer:
            "Orti Pro ile grup harcamalarınızı detaylı PDF raporu olarak alabilir, tüm grup verisini ZIP olarak dışa aktarabilir ve yedekten geri yükleyebilirsiniz.",
        },
        {
          question: "Verilerim ve finansal kayıtlarım güvende mi?",
          answer:
            "Kesinlikle. Tüm verileriniz şifreli bağlantı (TLS) ve güvenli altyapı standartları ile korunur; üçüncü taraflarla asla paylaşılmaz.",
        },
      ],
    },
    cta: {
      title: "Hemen İndirin, Hesapları Kolayca Bölüşün",
      subtitle:
        "Orti ile ortak harcamalarınızı şeffaf ve stressiz hale getirin. iOS ve Android için ücretsiz indirin.",
    },
    footer: {
      tagline:
        "Ev arkadaşlarınızla, tatil grubunuzla veya ailenizle ortak harcamalarınızı kolayca takip edin, adil bir şekilde bölüşün.",
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
      successDesc:
        "Bize ulaştığınız için teşekkür ederiz. Ekibimiz mesajınızı inceleyip en kısa sürede geri dönüş yapacaktır.",
      newMsgBtn: "Yeni Mesaj Gönder",
    },
    privacyPage: {
      badge: "Veri Güvenliği & KVKK",
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: Ekim 2026",
    },
    termsPage: {
      badge: "Hizmet Şartları",
      title: "Kullanım Koşulları",
      lastUpdated: "Son Güncelleme: Ekim 2026",
    },
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
      subtitle:
        "Manage shared budgets with roommates, travel buddies, or family. Download Orti and put an end to who-owes-whom headaches.",
      appStore: "Download on App Store",
      googlePlay: "Download on Google Play",
      cards: {
        receivable: "You are owed",
        groupName: "Lisbon Trip",
        partners: "4 Members",
        settlement: "Settlement",
        settled: "Completed",
      },
    },
    story: {
      demoNote: "Sample data",
      stepLabel: "Step {n} of 4",
      steps: [
        {
          title: "Add the expense",
          description:
            "Enter what you paid and pick the group. You are the payer; choose who shares the cost.",
        },
        {
          title: "Split it your way",
          description:
            "Equally, by percentage or by exact amount. Orti works out everyone's share instantly.",
        },
        {
          title: "See who owes whom at a glance",
          description:
            "The group's balance stays live: who owes you and who you owe.",
        },
        {
          title: "Pay, record, done",
          description:
            "The moment you record the payment, the debt is closed. No more chasing in chat.",
        },
      ],
      chips: {
        bill: "Dinner",
        billAmount: "$218.00",
        shareAmount: "$54.50",
        people: ["You", "Liam", "Sofia", "Noah"],
        owedLabel: "Liam owes you",
        owedAmount: "$160.00",
        oweLabel: "You owe Sofia",
        oweAmount: "$41.67",
        settledLabel: "Payment recorded",
        settledAmount: "$160.00",
      },
      screens: {
        add: "Orti add expense screen",
        debts: "Orti group balances screen",
        settle: "Orti record payment screen",
        firstRun: "Orti first-run and group setup screen",
        simplify: "Orti debt simplification screen",
        plans: "Orti Pro plans and export screen",
      },
    },
    simplify: {
      title: "Cut the pointless transfers",
      description:
        "If Ali owes Can and Can owes Deniz, you do not need two payments: Ali pays Deniz directly. Orti works this out for the whole group.",
      before: "Before: 2 payments",
      after: "After: 1 payment",
      people: { a: "Ali", b: "Can", c: "Deniz" },
      amount: "$30",
    },
    plans: {
      title: "Start free, go Pro when you need it",
      free: {
        name: "Free",
        items: [
          "Up to 3 groups you own",
          "Add expenses; split equally, by percentage or by exact amount",
          "Balance tracking and settling up",
        ],
      },
      pro: {
        name: "Orti Pro",
        items: [
          "Unlimited groups",
          "PDF expense report",
          "Export group data as ZIP",
          "Import from a backup",
        ],
      },
    },
    stats: {
      stat1Val: "3 Split Modes",
      stat1Label: "Equal, Percentage or Exact",
      stat2Val: "1 Transfer",
      stat2Label: "Automatic Debt Simplification",
      stat3Val: "0% Fees",
      stat3Label: "Transparent & Free to Start",
      stat4Val: "PDF & ZIP",
      stat4Label: "Reports and Full Backups",
    },
    deepDive: {
      quickAdd: {
        title: "Add Shared Expenses in Seconds",
        description:
          "Pick the group, enter the amount, and choose a category. Split equally, by percentage, or by exact amount so everyone's share is clear right away.",
        card1Title: "Lisbon Trip",
        card1Val: "$218.00",
        card2Title: "Split · Equal (4 people)",
        card2Val: "$54.50 / person",
      },
      groups: {
        title: "Live Group Balances at a Glance",
        description:
          "Roommates, holiday crew, or family household... See who owes you and who you need to pay from one transparent group screen.",
        card1Title: "Liam owes you",
        card1Val: "$160.00",
        card2Title: "You owe Sofia",
        card2Val: "$41.67",
      },
      settle: {
        title: "Close Complex Debt Loops in One Tap",
        description:
          "Multiple people owing each other? Orti eliminates middleman transfers, and recording a payment updates the entire group's balance immediately.",
        card1Title: "Payment recorded",
        card1Val: "$160.00",
        card2Title: "Remaining transfers",
        card2Val: "0 debts",
      },
      goals: {
        title: "Start Free in Seconds, Export Anytime",
        description:
          "Create up to 3 groups for free and invite friends with a link. Upgrade to Orti Pro for unlimited groups, PDF expense reports, and portable ZIP backups.",
        card1Title: "Free Starter",
        card1Val: "3 active groups",
        card2Title: "Orti Pro",
        card2Val: "PDF & ZIP Backup",
      },
    },
    features: {
      badge: "Why Choose Orti?",
      subtitle:
        "Built to keep shared finances transparent and fair without spreadsheets or awkward reminders.",
      items: [
        {
          title: "Flexible Split Modes",
          description:
            "Divide costs equally, by percentage (%), or by exact amount while including only the members involved.",
        },
        {
          title: "Smart Debt Simplification",
          description:
            "Eliminate circular payments automatically so the whole group settles up with the fewest transfers.",
        },
        {
          title: "Group Progress & Notes",
          description:
            "Keep group spending totals, transaction history, and shared notes organized in one place.",
        },
        {
          title: "One-Tap Settle Up",
          description:
            "Record a payment in two taps and watch everyone's balances update immediately.",
        },
        {
          title: "PDF Reports & ZIP Backups",
          description:
            "Export clean PDF expense summaries or full portable ZIP archives at the end of a trip or month.",
        },
        {
          title: "Guest Members & Instant Invites",
          description:
            "Track shares for friends before they even install the app, or invite them straight into the group via link.",
        },
      ],
    },
    howItWorks: {
      title: "Simple & Clear in Just 3 Steps",
      subtitle:
        "Getting started with Orti and settling expenses with friends is that simple.",
      steps: [
        {
          step: "01",
          title: "Create a Group",
          description:
            "Invite your friends, roommates, or travel buddies and start your shared budget instantly.",
        },
        {
          step: "02",
          title: "Add Expenses",
          description:
            "Log who paid what and split equally, by percentage, or by exact amount in seconds.",
        },
        {
          step: "03",
          title: "Settle with One Tap",
          description:
            "The smart algorithm eliminates circular debts and shows the simplest way to settle balances.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to all your common questions about Orti.",
      items: [
        {
          question: "Is Orti completely free?",
          answer:
            "Yes, the core features of Orti (up to 3 groups you own, expense splitting, debt simplification, and balance tracking) are free. Unlimited groups, PDF reports, export and import from a backup come with Orti Pro.",
        },
        {
          question: "Can I split expenses unequally?",
          answer:
            "Absolutely. You can split bills equally, by exact amounts, percentages (%), or select specific group members for each expense.",
        },
        {
          question: "How does the Debt Simplification algorithm work?",
          answer:
            "If Ali owes Can and Can owes Deniz, Ali pays Deniz directly instead of making two separate transfers. Orti resolves the whole group's balances into the minimum number of payments.",
        },
        {
          question: "Can I add someone who doesn't have the app yet?",
          answer:
            "Yes. You can add anyone to the group, track their expenses and balances right away, and share an invite link whenever they are ready to join.",
        },
        {
          question: "Can I export or back up my group data?",
          answer:
            "With Orti Pro, you can generate formatted PDF expense reports, export complete group data as a ZIP archive, and restore from a backup anytime.",
        },
        {
          question: "Is my personal and financial data secure?",
          answer:
            "Yes, all data is protected with encrypted TLS connections and strict security standards. Your data is never sold to third parties.",
        },
      ],
    },
    cta: {
      title: "Download Now & Split Bills with Ease",
      subtitle:
        "Make shared finances transparent and stress-free. Download for free on iOS and Android.",
    },
    footer: {
      tagline:
        "Track shared expenses with roommates, travel buddies, or family and split fairly.",
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
      successDesc:
        "Thank you for reaching out. Our team will review your message and get back to you shortly.",
      newMsgBtn: "Send Another Message",
    },
    privacyPage: {
      badge: "Data Security & Privacy",
      title: "Privacy Policy",
      lastUpdated: "Last Updated: October 2026",
    },
    termsPage: {
      badge: "Terms of Service",
      title: "Terms of Service",
      lastUpdated: "Last Updated: October 2026",
    },
  },
} as const;
