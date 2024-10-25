import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { Inria_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";

const inria = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300", "700"],
});

export const metadata: Metadata = {
  title: "Ola! Sou Genilson Fernandes",
  description:
    "Software Enginner Front-end | React js | React Native | NextJs | TypeScript | GraphQL | Nest | NodeJs",
  authors: [{ name: "Genilson Fernandes" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inria.className}`}>
        <NextIntlClientProvider messages={messages}>
          <main className="container">
            <Menu />
            {children}
          </main>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
