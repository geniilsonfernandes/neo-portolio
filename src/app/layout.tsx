import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter, Purple_Purse, Inria_Sans } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Link from "next/link";
import Menu from "@/components/Menu";
import { sections } from "@/cms";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inria.className}`}>
        <main className="container">
          <div className="flex justify-center items-center py-8">
            <Link href="/">
              <Logo />
            </Link>
            <Menu />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
