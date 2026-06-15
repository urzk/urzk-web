import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "katex/dist/katex.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import BaseLayout from "~/components/layouts/BaseLayout";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "urzk-web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
