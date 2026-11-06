import type { Locale } from "@/i18n/translations";

export type LandingScreen = "add-expense" | "group-debts" | "settle-up" | "debt-simplify";

export type LandingCopy = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  stepsTitle: string;
  steps: { screen: LandingScreen; title: string; body: string; alt: string }[];
  goodTitle: string;
  good: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  guideId: string;
  breadcrumb: string;
};

export type LandingId = "trip" | "flatmates" | "friends";

export const landingIds: LandingId[] = ["trip", "flatmates", "friends"];

const moneyNote = {
  tr: "Orti para göndermez ve para çekmez. Kim kime ne kadar borçlu olduğunu kaydeder ve hesaplar; ödemeyi sen bankandan ya da elden yaparsın.",
  en: "Orti never sends or collects money. It records and calculates who owes whom; you pay from your bank or in person.",
};

export const landing: Record<LandingId, Record<Locale, LandingCopy>> = {
  trip: {
    tr: {
      path: "/tatil-masrafi-bolme",
      metaTitle: "Tatil Masrafı Bölme: Hesap Dönüşte Hazır | Orti",
      metaDescription:
        "Benzini, oteli, kahvaltıyı kim ödedi? Harcamayı o an Orti'ye gir, dönüşte kim kime ne kadar borçlu tek ekranda gör. iOS ve Android.",
      eyebrow: "Tatil grupları için",
      h1: "Tatil masrafını bölmek için tek yer",
      lead: "Benzini biri aldı, oteli başkası tuttu, kahvaltıyı bir başkası ödedi. Orti ödenenleri kaydeder, tatil bitince kim kime ne kadar borçlu olduğunu hesaplar.",
      stepsTitle: "Tatilde nasıl kullanılır",
      steps: [
        {
          screen: "add-expense",
          title: "Harcamayı o an ekle",
          body: "Tutarı, kimin ödediğini ve kimlerin paylaştığını yaz. Fişi telefonunda tarayabilirsin; tutar dolar, sen kontrol edersin.",
          alt: "Orti harcama ekleme ekranı",
        },
        {
          screen: "group-debts",
          title: "Kim kime ne borçlu gör",
          body: "Grubun bakiyeleri kişi kişi görünür. Dönüş yolunda 47 mesajlık hesap zincirine gerek kalmaz.",
          alt: "Orti grup bakiyeleri ekranı",
        },
        {
          screen: "settle-up",
          title: "Ödedikten sonra kaydet",
          body: "Ödemeyi bankandan ya da elden yaparsın. Sonra Orti'de ödemeyi kaydedersin, satır kapanır.",
          alt: "Orti ödeme kaydetme ekranı",
        },
      ],
      goodTitle: "Tatile uyan ayrıntılar",
      good: [
        "Akşam yemeğine katılmayan biri varsa harcamayı sadece katılanlar arasında böl.",
        "Eşit, yüzdeyle ya da tam tutarla böl. Herkes kendi payını görür.",
        "Yurt dışındaysan grubun para birimini seç, herkes aynı yerden baksın.",
        "Arkadaşın uygulamayı kullanmıyorsa onu misafir olarak ekle, sonra davet linki gönderirsin.",
      ],
      faqTitle: "Sık sorulanlar",
      faq: [
        {
          q: "Tatil masrafını arkadaşlarla nasıl bölerim?",
          a: "Bir grup kur, harcamaları yaptıkça ekle. Her harcamada kimin ödediğini ve kimlerin paylaştığını seçersin, Orti bakiyeleri kendisi günceller.",
        },
        {
          q: "Arkadaşlarım Orti'yi indirmek zorunda mı?",
          a: "Hayır. Onları gruba misafir üye olarak ekleyip harcamaları senin yönetmen mümkün. İstersen sonra davet linki gönderirsin.",
        },
        {
          q: "Orti parayı karşı tarafa gönderiyor mu?",
          a: moneyNote.tr,
        },
        {
          q: "Orti ücretsiz mi?",
          a: "Temel özellikler ücretsiz; sahibi olduğun 3 gruba kadar kullanabilirsin. Sınırsız grup, PDF rapor ve veri dışa aktarma Orti Pro ile gelir.",
        },
      ],
      ctaTitle: "Sıradaki tatil grubunu şimdiden aç",
      ctaBody: "Harcamaları yolda gir, dönüşte hesap hazır olsun.",
      guideId: "trip",
      breadcrumb: "Tatil masrafı bölme",
    },
    en: {
      path: "/en/split-trip-expenses",
      metaTitle: "Split Trip Expenses With Friends | Orti",
      metaDescription:
        "Who paid for the fuel, the hotel, the breakfast? Log each expense in Orti as it happens and see who owes whom when you get home. iOS and Android.",
      eyebrow: "For group trips",
      h1: "One place to split your trip expenses",
      lead: "One of you filled the tank, another booked the hotel, someone else paid for breakfast. Orti records what was paid and works out who owes whom once the trip is over.",
      stepsTitle: "How it works on a trip",
      steps: [
        {
          screen: "add-expense",
          title: "Add the expense when it happens",
          body: "Enter the amount, who paid and who shares it. You can scan a receipt on your phone; the amount fills in and you check it.",
          alt: "Orti add expense screen",
        },
        {
          screen: "group-debts",
          title: "See who owes whom",
          body: "Everyone's balance is listed person by person. No 47-message chat thread on the way home.",
          alt: "Orti group balances screen",
        },
        {
          screen: "settle-up",
          title: "Record it once it is paid",
          body: "You pay from your bank or in person. Then record the payment in Orti and the line closes.",
          alt: "Orti record payment screen",
        },
      ],
      goodTitle: "Details that suit a trip",
      good: [
        "If someone skipped a dinner, split that expense only between the people who were there.",
        "Split equally, by percentage or by exact amount. Everyone sees their own share.",
        "Abroad? Pick the group's currency so everyone looks at the same numbers.",
        "A friend without the app can be added as a guest, and you can send an invite link later.",
      ],
      faqTitle: "Common questions",
      faq: [
        {
          q: "How do I split trip expenses with friends?",
          a: "Create a group and add expenses as they happen. For each one you pick who paid and who shares it, and Orti keeps the balances up to date.",
        },
        {
          q: "Do my friends have to install Orti?",
          a: "No. You can add them to the group as guests and manage the expenses yourself. You can send an invite link later if you want.",
        },
        {
          q: "Does Orti send money to the other person?",
          a: moneyNote.en,
        },
        {
          q: "Is Orti free?",
          a: "The core features are free, for up to 3 groups you own. Unlimited groups, PDF reports and data export come with Orti Pro.",
        },
      ],
      ctaTitle: "Open the group for your next trip now",
      ctaBody: "Add expenses along the way and the tab is ready when you are back.",
      guideId: "trip",
      breadcrumb: "Split trip expenses",
    },
  },
  flatmates: {
    tr: {
      path: "/ev-arkadasi-fatura",
      metaTitle: "Ev Arkadaşıyla Fatura ve Kira Bölme | Orti",
      metaDescription:
        "Elektrik, internet, ortak market: ev grubundaki her harcamayı Orti'ye yaz, kişi başı payı ve kimin kime borçlu olduğunu gör. iOS ve Android.",
      eyebrow: "Ev arkadaşları için",
      h1: "Ev arkadaşıyla fatura hesabı tek grupta",
      lead: "Elektrik faturası ev grubuna düştüğünde kim ödedi, kimin payı ne kadar? Orti ev harcamalarını kaydeder ve her ay aynı yerden bakmanı sağlar.",
      stepsTitle: "Evde nasıl kullanılır",
      steps: [
        {
          screen: "add-expense",
          title: "Faturayı ve marketi ekle",
          body: "Faturayı kim ödediyse onu seç, kimlerin paylaştığını işaretle. Ortak market fişini telefonunda tarayabilirsin.",
          alt: "Orti harcama ekleme ekranı",
        },
        {
          screen: "debt-simplify",
          title: "Karşılıklı borçlar sadeleşsin",
          body: "Ali Can'a, Can Deniz'e borçluysa Orti gruptaki bakiyelere bakıp daha az ödemeyle hesabı kapatacak planı çıkarır.",
          alt: "Orti borç sadeleştirme ekranı",
        },
        {
          screen: "settle-up",
          title: "Ödedikten sonra kaydet",
          body: "Ödemeyi bankandan ya da elden yaparsın, sonra Orti'de kaydedersin. Kim ödedi sorusu kayıtta kalır.",
          alt: "Orti ödeme kaydetme ekranı",
        },
      ],
      goodTitle: "Ev düzenine uyan ayrıntılar",
      good: [
        "Bir ay evde olmayan biri için payı yüzdeyle ya da tutarla ayarla.",
        "Eşit olmayan odalar için herkesin payını farklı tut.",
        "Hazır hatırlatma mesajlarıyla borcu nazikçe hatırlat.",
        "Yeni biri taşınırsa davet linkiyle gruba katılır.",
      ],
      faqTitle: "Sık sorulanlar",
      faq: [
        {
          q: "Ev arkadaşlarıyla faturayı nasıl bölerim?",
          a: "Ev için bir grup aç, faturayı kim ödediyse harcama olarak ekle ve payları seç. Eşit bölebilir, yüzde ya da tam tutar da girebilirsin.",
        },
        {
          q: "Biri evde olmadığı ay payı farklı olabilir mi?",
          a: "Evet. Harcamayı sadece ilgili kişiler arasında böl ya da payları yüzde veya tutarla elle ayarla.",
        },
        {
          q: "Orti kirayı ya da faturayı benim yerime öder mi?",
          a: moneyNote.tr,
        },
        {
          q: "Orti ücretsiz mi?",
          a: "Temel özellikler ücretsiz; sahibi olduğun 3 gruba kadar kullanabilirsin. Sınırsız grup, PDF rapor ve veri dışa aktarma Orti Pro ile gelir.",
        },
      ],
      ctaTitle: "Ev grubunu bugün aç",
      ctaBody: "Bu ayın ilk faturasını ekle, gerisi kayıtta dursun.",
      guideId: "flatmates",
      breadcrumb: "Ev arkadaşı fatura",
    },
    en: {
      path: "/en/flatmates-bills",
      metaTitle: "Split Flatmate Bills and Rent | Orti",
      metaDescription:
        "Electricity, internet, shared groceries: log every household expense in Orti and see each person's share and who owes whom. iOS and Android.",
      eyebrow: "For flatmates",
      h1: "Flatmate bills in one group",
      lead: "When the electricity bill lands in the house chat, who paid and what is everyone's share? Orti records household expenses so you can check the same place every month.",
      stepsTitle: "How it works at home",
      steps: [
        {
          screen: "add-expense",
          title: "Add the bill or the groceries",
          body: "Pick whoever paid the bill and tick who shares it. You can scan the shared grocery receipt on your phone.",
          alt: "Orti add expense screen",
        },
        {
          screen: "debt-simplify",
          title: "Let mutual debts simplify",
          body: "If Ali owes Can and Can owes Deniz, Orti looks at the group balances and works out a plan that settles up with fewer payments.",
          alt: "Orti debt simplification screen",
        },
        {
          screen: "settle-up",
          title: "Record it once it is paid",
          body: "You pay from your bank or in person, then record it in Orti. The question of who paid stays in the log.",
          alt: "Orti record payment screen",
        },
      ],
      goodTitle: "Details that suit a shared home",
      good: [
        "If someone was away for a month, adjust their share by percentage or amount.",
        "Rooms of different sizes? Give everyone a different share.",
        "Use the ready-made reminder messages to nudge a late payment politely.",
        "When someone new moves in, they join the group with an invite link.",
      ],
      faqTitle: "Common questions",
      faq: [
        {
          q: "How do I split bills with flatmates?",
          a: "Create a group for the home, add each bill as an expense with whoever paid it, and choose the shares. Split equally or enter percentages or exact amounts.",
        },
        {
          q: "Can the share differ in a month someone was away?",
          a: "Yes. Split the expense only between the people involved, or set the shares by hand with percentages or amounts.",
        },
        {
          q: "Does Orti pay the rent or the bills for me?",
          a: moneyNote.en,
        },
        {
          q: "Is Orti free?",
          a: "The core features are free, for up to 3 groups you own. Unlimited groups, PDF reports and data export come with Orti Pro.",
        },
      ],
      ctaTitle: "Open your home group today",
      ctaBody: "Add this month's first bill and let the log do the remembering.",
      guideId: "flatmates",
      breadcrumb: "Flatmate bills",
    },
  },
  friends: {
    tr: {
      path: "/arkadas-grubu-hesap",
      metaTitle: "Arkadaş Grubunda Hesap Bölüşme | Orti",
      metaDescription:
        "Yemek, kahve, hediye: arkadaş grubunda kim ödedi, kim payını aldı Orti'de kayıtta. Grubu kur, linki at, herkes kendi payını görsün.",
      eyebrow: "Arkadaş grupları için",
      h1: "Arkadaş grubunda hesap net kalsın",
      lead: "Bir akşam yemeği, ortak hediye, hafta sonu planı. Orti kim ödedi ve kim payını aldı bilgisini tutar, hesap konuşması kolaylaşır.",
      stepsTitle: "Grupla nasıl kullanılır",
      steps: [
        {
          screen: "add-expense",
          title: "Hesabı masada ekle",
          body: "Tutarı yaz, kimin ödediğini seç, payı eşit ya da yüzdeyle böl. Herkes kendi payını görür.",
          alt: "Orti harcama ekleme ekranı",
        },
        {
          screen: "group-debts",
          title: "Açık kalan hesabı gör",
          body: "Kimin kime ne kadar borcu olduğu grup bakiyelerinde durur. Kimse sayıyı aklında tutmak zorunda kalmaz.",
          alt: "Orti grup bakiyeleri ekranı",
        },
        {
          screen: "settle-up",
          title: "Ödemeyi kaydet, hesap kapansın",
          body: "Ödemeyi bankandan ya da elden yaparsın. Orti'de kaydedince satır listeden kalkar.",
          alt: "Orti ödeme kaydetme ekranı",
        },
      ],
      goodTitle: "Arkadaş grubuna uyan ayrıntılar",
      good: [
        "Grubu kur, davet linkini gruba at, katılan herkes aynı hesabı görür.",
        "Uygulaması olmayan arkadaşını misafir olarak ekle.",
        "Ortak hediye ya da yaz tatili gibi hedefleri gruba tanımla.",
        "Hatırlatmayı sen yazma, hazır mesajlar nazik bir dille hatırlatır.",
      ],
      faqTitle: "Sık sorulanlar",
      faq: [
        {
          q: "Arkadaş grubunda hesabı nasıl bölerim?",
          a: "Bir grup aç ve her harcamayı ekle. Kimin ödediğini ve kimlerin paylaştığını seçersin, bakiyeler otomatik güncellenir.",
        },
        {
          q: "Gruba nasıl katılırlar?",
          a: "Davet linkiyle. Linke dokunan kişi uygulamayı açıp gruba katılır. Uygulaması olmayanı misafir olarak da ekleyebilirsin.",
        },
        {
          q: "Orti para transferi yapıyor mu?",
          a: moneyNote.tr,
        },
        {
          q: "Orti ücretsiz mi?",
          a: "Temel özellikler ücretsiz; sahibi olduğun 3 gruba kadar kullanabilirsin. Sınırsız grup, PDF rapor ve veri dışa aktarma Orti Pro ile gelir.",
        },
      ],
      ctaTitle: "Bu akşamki hesapla dene",
      ctaBody: "Grubu aç, ilk harcamayı ekle, linki arkadaşlarına at.",
      guideId: "trip",
      breadcrumb: "Arkadaş grubu hesap",
    },
    en: {
      path: "/en/split-with-friends",
      metaTitle: "Split the Bill With Friends | Orti",
      metaDescription:
        "Dinner, coffee, a shared gift: Orti keeps track of who paid and who has paid their share. Create a group, share the link, everyone sees their part.",
      eyebrow: "For friend groups",
      h1: "Keep the tab clear in your friend group",
      lead: "A dinner, a shared gift, a weekend plan. Orti keeps track of who paid and who has paid their share, so talking about the tab gets easier.",
      stepsTitle: "How it works with friends",
      steps: [
        {
          screen: "add-expense",
          title: "Add the bill at the table",
          body: "Enter the amount, pick who paid and split it equally or by percentage. Everyone sees their own share.",
          alt: "Orti add expense screen",
        },
        {
          screen: "group-debts",
          title: "See what is still open",
          body: "Who owes whom stays in the group balances. Nobody has to keep the numbers in their head.",
          alt: "Orti group balances screen",
        },
        {
          screen: "settle-up",
          title: "Record the payment and close it",
          body: "You pay from your bank or in person. Record it in Orti and the line leaves the list.",
          alt: "Orti record payment screen",
        },
      ],
      goodTitle: "Details that suit a friend group",
      good: [
        "Create the group, drop the invite link in the chat and everyone who joins sees the same tab.",
        "Add a friend without the app as a guest.",
        "Set shared goals for a group gift or a summer trip.",
        "You do not have to write the reminder; ready-made messages nudge politely.",
      ],
      faqTitle: "Common questions",
      faq: [
        {
          q: "How do I split the bill in a friend group?",
          a: "Create a group and add each expense. You pick who paid and who shares it, and the balances update on their own.",
        },
        {
          q: "How do friends join the group?",
          a: "With an invite link. They tap it, open the app and join. A friend without the app can be added as a guest.",
        },
        {
          q: "Does Orti transfer money?",
          a: moneyNote.en,
        },
        {
          q: "Is Orti free?",
          a: "The core features are free, for up to 3 groups you own. Unlimited groups, PDF reports and data export come with Orti Pro.",
        },
      ],
      ctaTitle: "Try it with tonight's bill",
      ctaBody: "Open the group, add the first expense and send the link to your friends.",
      guideId: "trip",
      breadcrumb: "Split with friends",
    },
  },
};
