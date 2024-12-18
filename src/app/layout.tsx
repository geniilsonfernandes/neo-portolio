import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { Inria_Sans } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${inria.className} bg-red-100 bg-gradient-to-t from-gray-100 to-gray-50`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
