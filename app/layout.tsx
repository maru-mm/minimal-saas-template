import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini SaaS Template",
  description: "Un mini SaaS di test pronto per il deploy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}

