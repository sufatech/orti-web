import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { publicPages } from "@/lib/pages";
import { appleAppSiteAssociation, assetLinks } from "@/lib/wellknown";

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("lists every public page in TR and EN", () => {
    for (const path of [
      "/",
      "/en",
      "/tatil-masrafi-bolme",
      "/en/split-trip-expenses",
      "/ev-arkadasi-fatura",
      "/en/flatmates-bills",
      "/arkadas-grubu-hesap",
      "/en/split-with-friends",
      "/rehber/tatile-cikmadan-once",
      "/en/guides/before-a-group-trip",
      "/rehber/ev-arkadasi-fatura-duzeni",
      "/en/guides/flatmate-bills-rules",
    ]) {
      expect(urls).toContain(path === "/" ? "https://orti.app" : `https://orti.app${path}`);
    }
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("never lists invite or go links", () => {
    expect(urls.some((u) => u.includes("/invite") || u.includes("/go"))).toBe(false);
  });

  it("carries hreflang alternates for paired pages", () => {
    const trip = entries.find((e) => e.url.endsWith("/tatil-masrafi-bolme"));
    expect(trip?.alternates?.languages).toEqual({
      tr: "https://orti.app/tatil-masrafi-bolme",
      en: "https://orti.app/en/split-trip-expenses",
      "x-default": "https://orti.app/tatil-masrafi-bolme",
    });
  });
});

describe("page metadata limits", () => {
  it("keeps titles <= 60 and descriptions <= 155 and unique", () => {
    const titles: string[] = [];
    for (const page of publicPages) {
      for (const m of Object.values(page.meta)) {
        expect(m.title.length, m.title).toBeLessThanOrEqual(60);
        expect(m.description.length, m.description).toBeLessThanOrEqual(155);
        titles.push(m.title);
      }
    }
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe("well-known files", () => {
  it("serve nothing while ids are unknown", () => {
    expect(appleAppSiteAssociation({ appleTeamId: "", iosBundleId: "app.orti", androidPackage: "app.orti", androidSha256: [] })).toBeNull();
    expect(assetLinks({ appleTeamId: "", iosBundleId: "app.orti", androidPackage: "app.orti", androidSha256: [] })).toBeNull();
  });
  it("cover /invite/* once filled", () => {
    const ids = { appleTeamId: "ABCDE12345", iosBundleId: "app.orti", androidPackage: "app.orti", androidSha256: ["AA:BB"] };
    expect(JSON.stringify(appleAppSiteAssociation(ids))).toContain("ABCDE12345.app.orti");
    expect(JSON.stringify(appleAppSiteAssociation(ids))).toContain("/invite/*");
    expect(assetLinks(ids)?.[0].target.sha256_cert_fingerprints).toEqual(["AA:BB"]);
  });
});
