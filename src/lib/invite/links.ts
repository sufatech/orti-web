import { siteConfig } from "@/config/site";

export function inviteUniversalLink(token: string): string {
  return `${siteConfig.url}/invite/${encodeURIComponent(token)}`;
}

const SCHEME_PATTERN = /^[a-z][a-z0-9-]*$/;

/** Custom URL scheme of the app for this environment (prod `orti`, dev `orti-dev`, local `orti-local`). */
export function getAppScheme(): string {
  const raw = process.env.ORTI_APP_SCHEME?.trim();
  return raw && SCHEME_PATTERN.test(raw) ? raw : siteConfig.appScheme;
}

export function inviteSchemeLink(token: string): string {
  return `${getAppScheme()}://invite/${encodeURIComponent(token)}`;
}

/** Play Store link carrying the invite token as Install Referrer. */
export function playStoreInviteLink(token: string): string {
  const referrer = encodeURIComponent(`invite_token=${token}`);
  return `${siteConfig.links.googlePlay}&referrer=${referrer}`;
}
