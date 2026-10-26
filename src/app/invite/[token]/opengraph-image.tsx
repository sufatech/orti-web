import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import { inviteStrings, resolveInviteLocale, formatInvite } from "@/i18n/invite";
import { fetchInvitePreview } from "@/lib/invite/preview";

export const alt = "Orti";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const h = await headers();
  const s = inviteStrings[resolveInviteLocale(h.get("accept-language"))];
  const result = await fetchInvitePreview(token);
  const ok = result.status === "ok";
  const title = ok ? result.preview.groupName : s.genericTitle;
  const members = ok && result.preview.memberCount > 0
    ? formatInvite(result.preview.memberCount === 1 ? s.membersOne : s.members, {
        count: result.preview.memberCount,
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #7D2AE8 0%, #630ED4 55%, #4905A3 100%)",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", fontSize: 52, fontWeight: 800 }}>Orti</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 34, opacity: 0.85 }}>
            {ok ? s.invitedTo : s.title}
          </div>
          <div style={{ display: "flex", fontSize: title.length > 24 ? 64 : 92, fontWeight: 800, lineHeight: 1.1 }}>
            {title.slice(0, 60)}
          </div>
          {members ? (
            <div style={{ display: "flex", fontSize: 34, opacity: 0.85 }}>{members}</div>
          ) : null}
        </div>
      </div>
    ),
    { ...size },
  );
}
