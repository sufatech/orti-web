import { siteConfig } from "@/config/site";

export function inviteUniversalLink(token: string): string {
  return `${siteConfig.url}/invite/${encodeURIComponent(token)}`;
}

export function inviteSchemeLink(token: string): string {
  return `${siteConfig.appScheme}://invite/${encodeURIComponent(token)}`;
}

/** Play Store link carrying the invite token as Install Referrer. */
export function playStoreInviteLink(token: string): string {
  const referrer = encodeURIComponent(`invite_token=${token}`);
  return `${siteConfig.links.googlePlay}&referrer=${referrer}`;
}
