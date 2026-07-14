"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Certificate from "@/components/Certificate";

// Base (unscaled) certificate size, in rem — matches Certificate.module.css.
const CERT_W_REM = 70;
const CERT_H_REM = 49.5;

function formatPlDate(d: Date): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/**
 * Preview / review page for the certificate template. Renders it on-screen
 * (scaled to fit) and lets you download the exact A4 PDF — no quiz or
 * MailerLite required. Safe to delete; not linked from the app.
 */
export default function CertificatePreview() {
  const [name, setName] = useState("Jan Kowalski");
  const [date] = useState(() => formatPlDate(new Date()));
  const [scale, setScale] = useState(1);
  const boxRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const certWidthPx = CERT_W_REM * 16;
    const fit = () => {
      const w = boxRef.current?.clientWidth ?? certWidthPx;
      setScale(Math.min(1, w / certWidthPx));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const download = useCallback(async () => {
    const node = certRef.current;
    if (!node) return;
    const [{ toPng }, { default: jsPDF }] = await Promise.all([
      import("html-to-image"),
      import("jspdf"),
    ]);
    const dataUrl = await toPng(node, { pixelRatio: 2, cacheBust: true });
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    pdf.addImage(
      dataUrl,
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight(),
    );
    pdf.save("certyfikat-podglad.pdf");
  }, []);

  return (
    <main
      style={{
        maxWidth: "76rem",
        margin: "0 auto",
        padding: "2rem 1.5rem 4rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Podgląd certyfikatu</h1>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Imię i nazwisko"
          style={{
            flex: "1 1 16rem",
            height: "3rem",
            padding: "0 1rem",
            borderRadius: "0.75rem",
            border: "0.0625rem solid var(--color-border, #e1e1e6)",
            fontSize: "1rem",
          }}
        />
        <button
          onClick={download}
          className="button"
          style={{ cursor: "pointer" }}
        >
          Pobierz PDF (A4)
        </button>
      </div>

      {/* Scaled-to-fit viewport of the real (unscaled) certificate. */}
      <div ref={boxRef} style={{ width: "100%" }}>
        <div
          style={{
            width: `${(CERT_W_REM * scale).toFixed(3)}rem`,
            height: `${(CERT_H_REM * scale).toFixed(3)}rem`,
            overflow: "hidden",
            borderRadius: "1rem",
            boxShadow: "0 0.5rem 2rem rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              width: `${CERT_W_REM}rem`,
              height: `${CERT_H_REM}rem`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <Certificate ref={certRef} name={name} date={date} />
          </div>
        </div>
      </div>
    </main>
  );
}
