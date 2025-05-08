import { Breadcrumb } from "@/components/breadcrumb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto animate-fade-in animate-once animate-duration-500 animate-ease-in-out">
      <header className="py-4 flex items-center gap-4">
        <Breadcrumb />
      </header>

      {children}
    </main>
  );
}
