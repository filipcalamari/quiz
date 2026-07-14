import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { basePath } from "@/basePath";

// Public share landing page for a completed certificate. Its whole reason for
// existing is the Open Graph metadata below: when the personalized share URL
// (/certyfikat?name=…&date=…) is posted to LinkedIn, LinkedIn scrapes these
// tags and renders og:image (the dynamic certificate) as the preview card.
// A human who clicks the card lands on this page.

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ name?: string; date?: string }>;

async function resolveOrigin(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "";
  const proto = h.get("x-forwarded-proto") ?? "https";
  return host ? `${proto}://${host}` : "";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { name = "", date = "" } = await searchParams;
  const origin = await resolveOrigin();

  const query = new URLSearchParams();
  if (name) query.set("name", name);
  if (date) query.set("date", date);
  const qs = query.toString();

  const ogImage = `${origin}${basePath}/certyfikat/og${qs ? `?${qs}` : ""}`;
  const pageUrl = `${origin}${basePath}/certyfikat${qs ? `?${qs}` : ""}`;

  const title = "Certyfikat – Akademia Ocen Pracowniczych";
  const description = name
    ? `${name} ukończył(a) Akademię Ocen Pracowniczych.`
    : "Certyfikat ukończenia Akademii Ocen Pracowniczych.";

  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: pageUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CertificateSharePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { name = "", date = "" } = await searchParams;
  const query = new URLSearchParams();
  if (name) query.set("name", name);
  if (date) query.set("date", date);
  const qs = query.toString();
  const ogImage = `${basePath}/certyfikat/og${qs ? `?${qs}` : ""}`;

  return (
    <main
      style={{
        maxWidth: "56rem",
        margin: "0 auto",
        padding: "3rem 1.5rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.75rem", color: "#0d1d44" }}>
        {name ? `Gratulacje, ${name}!` : "Certyfikat ukończenia"}
      </h1>
      <p style={{ margin: 0, fontSize: "1.0625rem", color: "#344775" }}>
        Akademia Ocen Pracowniczych – quiz wiedzy o procesie ocen okresowych.
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ogImage}
        alt="Certyfikat ukończenia Akademii Ocen Pracowniczych"
        style={{
          width: "100%",
          maxWidth: "44rem",
          height: "auto",
          borderRadius: "1rem",
          boxShadow: "0 0.5rem 2rem rgba(13,29,68,0.15)",
        }}
      />

      <Link href="/" className="button" style={{ textDecoration: "none" }}>
        Rozwiąż quiz
      </Link>
    </main>
  );
}
