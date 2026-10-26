import type { Locale } from "./translations";

/**
 * Invite-page copy. The site ships tr and en; any other browser language
 * falls back to en (same rule as the client I18nProvider).
 */
export const inviteStrings = {
  tr: {
    title: "Orti daveti",
    invitedTo: "Bu gruba davet edildin",
    invitedBy: "{name} seni davet etti",
    members: "{count} üye",
    membersOne: "1 üye",
    whatIsOrti:
      "Orti, ev arkadaşların, tatil grubun veya ailenle ortak harcamaları takip edip kimin kime ne kadar borçlu olduğunu gösteren bir uygulama.",
    openCta: "Orti'de aç",
    storeIntro: "Orti yüklü değil mi?",
    appStore: "App Store'dan indir",
    googlePlay: "Google Play'den indir",
    iosNote:
      "iPhone'da: yükledikten sonra bu sayfaya dönüp \"Orti'de aç\" düğmesine tekrar dokun.",
    androidNote:
      "Android'de: Google Play'den yükledikten sonra davet otomatik olarak açılır.",
    expiredTitle: "Bu davetin süresi dolmuş",
    expiredBody:
      "Davet linkleri belirli bir süre geçerli. Seni davet eden kişiden yeni bir link iste.",
    invalidTitle: "Bu davet linki geçerli değil",
    invalidBody:
      "Link iptal edilmiş, yanlış kopyalanmış ya da artık kullanılamıyor olabilir. Seni davet eden kişiden yeni bir link iste.",
    errorTitle: "Davet şu an yüklenemedi",
    errorBody:
      "Sunucuya ulaşamadık. Birkaç saniye sonra sayfayı yenile; Orti'yi yine de yükleyebilirsin.",
    retry: "Tekrar dene",
    genericTitle: "Orti'ye davetlisin",
    ogDescription: "Orti ile ortak harcamaları birlikte takip edin.",
    home: "Orti'yi tanı",
    mark: "Orti",
  },
  en: {
    title: "Orti invitation",
    invitedTo: "You are invited to join",
    invitedBy: "{name} invited you",
    members: "{count} members",
    membersOne: "1 member",
    whatIsOrti:
      "Orti helps roommates, travel groups and families track shared expenses and see who owes whom.",
    openCta: "Open in Orti",
    storeIntro: "Don't have Orti yet?",
    appStore: "Download on the App Store",
    googlePlay: "Get it on Google Play",
    iosNote:
      "On iPhone: after installing, come back to this page and tap \"Open in Orti\" again.",
    androidNote:
      "On Android: after installing from Google Play, the invite opens automatically.",
    expiredTitle: "This invitation has expired",
    expiredBody:
      "Invite links are only valid for a limited time. Ask the person who invited you for a new link.",
    invalidTitle: "This invitation link is not valid",
    invalidBody:
      "The link may have been revoked, copied incorrectly, or can no longer be used. Ask the person who invited you for a new link.",
    errorTitle: "We could not load the invitation",
    errorBody:
      "We could not reach the server. Reload the page in a few seconds; you can still install Orti meanwhile.",
    retry: "Try again",
    genericTitle: "You are invited to Orti",
    ogDescription: "Track shared expenses together with Orti.",
    home: "Discover Orti",
    mark: "Orti",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type InviteStrings = (typeof inviteStrings)[Locale];

export function resolveInviteLocale(
  acceptLanguage: string | null | undefined,
  override?: string | null,
): Locale {
  if (override === "tr" || override === "en") return override;
  const first = (acceptLanguage ?? "").split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("tr") ? "tr" : "en";
}

export function formatInvite(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}
