import { siteConfig } from "@/config/site";

type Ids = { appleTeamId: string; iosBundleId: string; androidPackage: string; androidSha256: readonly string[] };

const defaults: Ids = siteConfig;

/** Apple app-site-association for /invite/*. null while the team id is unknown. */
export function appleAppSiteAssociation(ids: Ids = defaults) {
  if (!ids.appleTeamId) return null;
  return {
    applinks: {
      details: [{ appIDs: [`${ids.appleTeamId}.${ids.iosBundleId}`], components: [{ "/": "/invite/*" }] }],
    },
  };
}

/** Android assetlinks.json. null while no fingerprint is known. */
export function assetLinks(ids: Ids = defaults) {
  if (ids.androidSha256.length === 0) return null;
  return [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: { namespace: "android_app", package_name: ids.androidPackage, sha256_cert_fingerprints: [...ids.androidSha256] },
    },
  ];
}
