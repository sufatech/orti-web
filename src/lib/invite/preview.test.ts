import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchInvitePreview, parsePreviewBody } from "./preview";
import { inviteSchemeLink, inviteUniversalLink, playStoreInviteLink } from "./links";
import { resolveInviteLocale } from "../../i18n/invite";

const json = (status: number, body: unknown) =>
  vi.fn().mockResolvedValue(new Response(JSON.stringify(body), { status }));

describe("fetchInvitePreview", () => {
  it("returns only whitelisted fields on success", async () => {
    const f = json(200, {
      success: true,
      data: {
        token: "tok123",
        groupId: 7,
        groupName: "Lisbon Trip",
        memberCount: 4,
        inviterName: "",
        expiresAt: "2026-12-01T00:00:00Z",
      },
    });
    const r = await fetchInvitePreview("tok123", f);
    expect(r).toEqual({
      status: "ok",
      preview: { groupName: "Lisbon Trip", memberCount: 4, inviterName: "" },
    });
    expect(f.mock.calls[0][0]).toContain("/api/v1/invites/tok123/preview");
  });

  it("maps EXPIRED_INVITATION to expired", async () => {
    const r = await fetchInvitePreview(
      "tok",
      json(400, { success: false, error: { code: "EXPIRED_INVITATION" } }),
    );
    expect(r.status).toBe("expired");
  });

  it.each(["INVALID_INVITATION", "REVOKED_INVITATION", "NOT_FOUND"])("maps %s to invalid", async (code) => {
    const r = await fetchInvitePreview("tok", json(404, { error: { code } }));
    expect(r.status).toBe("invalid");
  });

  it("treats 5xx, bad bodies and network failures as error", async () => {
    expect((await fetchInvitePreview("tok", json(500, { error: { code: "INTERNAL_ERROR" } }))).status).toBe("error");
    expect((await fetchInvitePreview("tok", json(200, { success: true, data: {} }))).status).toBe("error");
    expect((await fetchInvitePreview("tok", vi.fn().mockRejectedValue(new Error("boom")))).status).toBe("error");
  });

  it("rejects malformed tokens without calling the API", async () => {
    const f = vi.fn();
    expect((await fetchInvitePreview("../etc/passwd", f)).status).toBe("invalid");
    expect(f).not.toHaveBeenCalled();
  });
});

describe("parsePreviewBody", () => {
  it("clamps counts and trims strings", () => {
    expect(parsePreviewBody({ data: { groupName: "  A  ", memberCount: -3 } })).toEqual({
      groupName: "A",
      memberCount: 0,
      inviterName: "",
    });
    expect(parsePreviewBody(null)).toBeNull();
  });
});

describe("links", () => {
  it("builds universal, scheme and Play referrer links", () => {
    expect(inviteUniversalLink("abc")).toBe("https://orti.app/invite/abc");
    expect(inviteSchemeLink("abc")).toBe("orti://invite/abc");
    expect(playStoreInviteLink("abc")).toBe(
      "https://play.google.com/store/apps/details?id=app.orti&referrer=invite_token%3Dabc",
    );
  });
});

describe("app scheme", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("uses ORTI_APP_SCHEME when valid", () => {
    vi.stubEnv("ORTI_APP_SCHEME", "orti-dev");
    expect(inviteSchemeLink("abc")).toBe("orti-dev://invite/abc");
  });

  it.each(["", "Orti", "1orti", "orti://", "or ti", "javascript:alert(1)//"])(
    "falls back to orti for invalid value %j",
    (value) => {
      vi.stubEnv("ORTI_APP_SCHEME", value);
      expect(inviteSchemeLink("abc")).toBe("orti://invite/abc");
    },
  );
});

describe("resolveInviteLocale", () => {
  it("uses tr for Turkish browsers, en otherwise, and honours ?lang", () => {
    expect(resolveInviteLocale("tr-TR,tr;q=0.9")).toBe("tr");
    expect(resolveInviteLocale("de-DE,de")).toBe("en");
    expect(resolveInviteLocale(null)).toBe("en");
    expect(resolveInviteLocale("de", "tr")).toBe("tr");
  });
});
