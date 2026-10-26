import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { formatInvite, inviteStrings, resolveInviteLocale } from "@/i18n/invite";
import { fetchInvitePreview, type InvitePreviewResult } from "@/lib/invite/preview";
import { inviteSchemeLink, inviteUniversalLink } from "@/lib/invite/links";
import { OpenInApp } from "./OpenInApp";
import { StoreButtons } from "./StoreButtons";

type Props = {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ lang?: string }>;
};

async function loadLocale(searchParams: Props["searchParams"]) {
  const [{ lang }, h] = await Promise.all([searchParams, headers()]);
  return resolveInviteLocale(h.get("accept-language"), lang);
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ token }, locale] = await Promise.all([params, loadLocale(searchParams)]);
  const s = inviteStrings[locale];
  const result = await fetchInvitePreview(token);
  const title =
    result.status === "ok" ? `${result.preview.groupName} | ${s.title}` : s.genericTitle;
  const description = s.whatIsOrti;
  return {
    title,
    description,
    robots: { index: false, follow: false, nocache: true },
    openGraph: { title, description, type: "website", url: inviteUniversalLink(token) },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: inviteUniversalLink(token) },
  };
}

function StateCard({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-extrabold tracking-tight text-text-main text-balance">{title}</h1>
      <p className="text-text-muted leading-relaxed">{body}</p>
      {action}
    </div>
  );
}

function renderBody(
  result: InvitePreviewResult,
  token: string,
  s: (typeof inviteStrings)["tr" | "en"],
  locale: string,
) {
  if (result.status === "ok") {
    const { groupName, memberCount, inviterName } = result.preview;
    const initial = Array.from(groupName)[0]?.toLocaleUpperCase(locale) ?? "O";
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div
            aria-hidden="true"
            className="size-20 rounded-3xl bg-primary text-white text-3xl font-extrabold flex items-center justify-center"
          >
            {initial}
          </div>
          <div className="space-y-2 min-w-0 w-full">
            <p className="text-sm font-semibold text-primary">{s.invitedTo}</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-text-main break-words text-balance">
              {groupName}
            </h1>
            <p className="text-sm text-text-muted">
              {[
                inviterName ? formatInvite(s.invitedBy, { name: inviterName }) : "",
                memberCount > 0
                  ? memberCount === 1
                    ? s.membersOne
                    : formatInvite(s.members, { count: memberCount })
                  : "",
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
        </div>
        <p className="text-sm text-text-muted leading-relaxed text-center">{s.whatIsOrti}</p>
        <OpenInApp
          href={inviteUniversalLink(token)}
          schemeHref={inviteSchemeLink(token)}
          className="flex items-center justify-center h-14 w-full rounded-xl bg-primary text-white text-lg font-semibold shadow-[0_4px_14px_rgba(99,14,212,0.39)] transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {s.openCta}
        </OpenInApp>
        <div className="pt-2 space-y-3">
          <p className="text-sm font-semibold text-text-main">{s.storeIntro}</p>
          <StoreButtons token={token} s={s} />
        </div>
      </div>
    );
  }

  const copy = {
    expired: { title: s.expiredTitle, body: s.expiredBody },
    invalid: { title: s.invalidTitle, body: s.invalidBody },
    error: { title: s.errorTitle, body: s.errorBody },
  }[result.status];

  return (
    <div className="space-y-6">
      <StateCard
        title={copy.title}
        body={copy.body}
        action={
          result.status === "error" ? (
            <Link
              href={`/invite/${encodeURIComponent(token)}`}
              className="inline-flex text-sm font-semibold text-primary underline underline-offset-4"
            >
              {s.retry}
            </Link>
          ) : undefined
        }
      />
      <p className="text-sm text-text-muted leading-relaxed">{s.whatIsOrti}</p>
      <StoreButtons s={s} />
    </div>
  );
}

export default async function InvitePage({ params, searchParams }: Props) {
  const [{ token }, locale] = await Promise.all([params, loadLocale(searchParams)]);
  const s = inviteStrings[locale];
  const result = await fetchInvitePreview(token);

  return (
    <main
      lang={locale}
      className="flex-grow flex flex-col items-center px-4 py-8 bg-[radial-gradient(ellipse_at_top_right,_#7D2AE8_0%,_#630ED4_50%,_#4905A3_100%)]"
    >
      <Link href="/" aria-label={s.home} className="text-white mb-8 mt-2">
        <Logo className="h-7 w-auto" />
      </Link>
      <div className="w-full max-w-md rounded-3xl bg-surface p-6 sm:p-8 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.45)]">
        {renderBody(result, token, s, locale)}
      </div>
    </main>
  );
}
