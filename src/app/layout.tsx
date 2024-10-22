import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter, Purple_Purse, Inria_Sans } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Link from "next/link";

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
          <div className="flex justify-between items-center py-8">
            <Link href="/">
              <Logo />
            </Link>
            <nav>
              <ul className="flex gap-4 mt-8">
                <li>
                  <Link href="about" className="font-light">
                    About me
                  </Link>
                </li>
                <span className="text-neutral-200 font-light">/</span>
                <li>
                  <a href="projects" className="font-light">
                    Projects
                  </a>
                </li>
                <span className="text-neutral-200 font-light">/</span>
                <li>
                  <Link href="blog" className="font-light">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {children}
        </main>
        <footer className="container mt-40 gap-24 flex flex-col justify-between">
          <div className="py-8">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="py-4">
            <p className="text-2xl  font-bold">
              Always exploring new ways to blend design and technology.
              <br />
              Let's build something great together.
            </p>
            <h1 className="text-2xl font-bold mt-8">
              geniilsonfernandes@gmail.com
            </h1>
            <h1 className="text-2xl font-bold">+ 55 22 99602 1627</h1>
          </div>
          <div className="text-neutral-400 font-light text-center py-4">
            Copyright © {new Date().getFullYear()} Genilson Fernandes
          </div>
        </footer>
      </body>
    </html>
  );
}
