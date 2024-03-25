import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ola! Sou Genilson Fernandes",
  description: "Este é meu portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container grid grid-cols-12 gap-4">
          <div className="col-span-12  sm:col-span-3  sm:sticky top-0  sm:h-screen sm:p-4 sm:pt-8">
            <Sidebar />
          </div>

          <div className="col-span-12  sm:col-span-9  space-y-4 sm:py-8  px-4">
            {children}
          </div>
        </main>
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color="0,0,0"
          outerAlpha={0.2}
          outerStyle={{
            border: "1px solid rgb(255, 255, 255)",
            borderRadius: "0",
          }}
          innerScale={2}
          outerScale={5}
          innerStyle={{
            border: "1px solid rgb(255, 255, 255)",
            borderRadius: "0",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </body>
    </html>
  );
}
