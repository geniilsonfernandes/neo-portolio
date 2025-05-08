import { Breadcrumb } from "@/components/breadcrumb";
import { IconArrowBackUp } from "@tabler/icons-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto animate-fade-in animate-once animate-duration-500 animate-ease-in-out">
      <Link
        href="/"
        scroll={false}
        className="text-gray-600 sticky top-4 z-50 inline-flex items-center gap-1 dark:text-midnight-300 hover:text-gray-800 dark:hover:text-midnight-400 my-8 p-2 bg-white dark:bg-midnight-900 border border-gray-200 dark:border-midnight-800 rounded-md hover:underline"
      >
        <IconArrowBackUp /> Go back
      </Link>
      <header className=" flex items-center gap-40">
        <Breadcrumb />
      </header>

      {children}
    </main>
  );
}
