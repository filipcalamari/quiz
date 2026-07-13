import type { Metadata } from "next";
import "@/devlink/css/global.css";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";

export const metadata: Metadata = {
  title: "Quiz – Oceny okresowe",
  description: "Quiz wiedzy o procesie ocen okresowych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body data-nav="static">
        <DevLinkProvider>{children}</DevLinkProvider>
      </body>
    </html>
  );
}
