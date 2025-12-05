import { Breadcrumb } from "@/components/breadcrumb";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <div className=" py-8 sticky top-0 z-50 w-full bg-black/20 animate-fade-up animate-once animate-delay-100 animate-ease-in-out">
        <div className="container mx-auto">
          <Link
            href="/"
            scroll={false}
            className="text-white inline-flex items-center gap-1"
          >
            <IconChevronLeft /> Go back
          </Link>
        </div>
      </div>
      <header className="container mx-auto flex items-center gap-40 animate-fade-up animate-once animate-delay-200 animate-ease-in-out">
        <Breadcrumb />
      </header>
      <div className="container mx-auto animate-fade-up animate-once animate-delay-300 animate-ease-in-out">
        {children}
      </div>
    </main>
  );
}
