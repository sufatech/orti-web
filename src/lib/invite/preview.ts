/**
 * Server-side client for the public invite preview endpoint of the group service:
 *   GET {ORTI_API_BASE_URL}/api/v1/invites/{token}/preview
 * Envelope: { success, data?: InvitePreviewResponse, error?: { code, message } }.
 * Only whitelisted fields are kept; nothing else is rendered or logged.
 */

export const INVITE_TOKEN_PATTERN = /^[A-Za-z0-9_-]{1,128}$/;

export type InvitePreview = {
  groupName: string;
  memberCount: number;
  /** Empty for the unauthenticated endpoint today; shown only when present. */
  inviterName: string;
};

export type InvitePreviewResult =
  | { status: "ok"; preview: InvitePreview }
  | { status: "invalid" } // malformed, unknown, used or revoked token
  | { status: "expired" }
  | { status: "error" }; // network, timeout, 5xx, unexpected body

const DEFAULT_API_BASE_URL = "https://api.orti.app";
const REQUEST_TIMEOUT_MS = 4000;

export function getApiBaseUrl(): string {
  const raw = process.env.ORTI_API_BASE_URL || DEFAULT_API_BASE_URL;
  return raw.replace(/\/+$/, "");
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, 120) : "";
}

export function parsePreviewBody(body: unknown): InvitePreview | null {
  if (typeof body !== "object" || body === null) return null;
  const data = (body as { data?: unknown }).data;
  if (typeof data !== "object" || data === null) return null;
  const d = data as Record<string, unknown>;
  const groupName = asString(d.groupName);
  if (!groupName) return null;
  const count = typeof d.memberCount === "number" ? d.memberCount : 0;
  return {
    groupName,
    memberCount: Number.isFinite(count) && count > 0 ? Math.floor(count) : 0,
    inviterName: asString(d.inviterName),
  };
}

function classifyFailure(status: number, body: unknown): InvitePreviewResult {
  const code =
    typeof body === "object" && body !== null
      ? (body as { error?: { code?: unknown } }).error?.code
      : undefined;
  if (code === "EXPIRED_INVITATION") return { status: "expired" };
  if (
    code === "INVALID_INVITATION" ||
    code === "REVOKED_INVITATION" ||
    code === "NOT_FOUND" ||
    status === 404
  ) {
    return { status: "invalid" };
  }
  return { status: "error" };
}

export async function fetchInvitePreview(
  token: string,
  fetchImpl: typeof fetch = fetch,
): Promise<InvitePreviewResult> {
  if (!INVITE_TOKEN_PATTERN.test(token)) return { status: "invalid" };

  try {
    const res = await fetchImpl(
      `${getApiBaseUrl()}/api/v1/invites/${encodeURIComponent(token)}/preview`,
      {
        cache: "no-store",
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      },
    );
    let body: unknown = null;
    try {
      body = await res.json();
    } catch {
      body = null;
    }
    if (!res.ok) return classifyFailure(res.status, body);
    const preview = parsePreviewBody(body);
    return preview ? { status: "ok", preview } : { status: "error" };
  } catch {
    return { status: "error" };
  }
}
