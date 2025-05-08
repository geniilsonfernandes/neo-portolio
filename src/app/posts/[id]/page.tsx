import { FloatingPlayer } from "@/components/floating-player";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="container mx-auto animate-fade-in animate-once animate-duration-500 animate-ease-in-out">
      <FloatingPlayer />
    </div>
  );
}
