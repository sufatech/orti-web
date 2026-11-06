export const siteConfig = {
  name: "Orti",
  domain: "orti.app",
  url: "https://orti.app",
  supportEmail: "support@orti.app",
  links: {
    appStore: "https://apps.apple.com/app/id6812050509",
    googlePlay: "https://play.google.com/store/apps/details?id=app.orti",
  },
  appScheme: "orti",
  /** Numeric App Store id (from the store link). Empty = no smart banner. */
  appleAppId: "6812050509",
  iosBundleId: "app.orti",
  androidPackage: "app.orti",
  /** TODO(owner): Apple Developer Team ID (10 chars). Empty = apple-app-site-association returns 404. */
  appleTeamId: "",
  /** TODO(owner): SHA-256 signing certificate fingerprints (Play Console > App integrity). Empty = assetlinks.json returns 404. */
  androidSha256: [] as readonly string[],
} as const;
