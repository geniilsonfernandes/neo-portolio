import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";

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
  // const locale = await getLocale();
  // const messages = await getMessages();

  return (
    <html lang="en">
      <body className={`${inria.className} bg-gray-50 dark:bg-midnight-900 `}>
        {/* <NextIntlClientProvider messages={messages}> */}
        <div className=" bg-gray-50 dark:bg-midnight-900 z-50 pb-20">
          {children}
        </div>
        <Footer />
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
