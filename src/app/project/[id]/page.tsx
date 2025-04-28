import { getPageContent, getProject } from "@/app/actions";
import { IconArrowNarrowLeft, IconExternalLink } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await getProject(params.id);

  return {
    title: data.title,
    description: data.short_description,
    openGraph: {
      title: data.title,
      description: data.short_description,
      url: `https://genilsondev.vercel.app/project/${params.id}`, // Ajuste conforme seu domínio
      images: [
        {
          url: data.icon || "/default-og.png", // se tiver imagem de capa
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.short_description,
      images: [data.icon || "/default-og.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getProject(id);
  const cont = await getPageContent(id);

  const getYTubeId = (url: string) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };
  return (
    <>
      <header className="container mx-auto mt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full group text-slate-600"
        >
          <IconArrowNarrowLeft className="transform group-hover:-translate-x-1 transition-all duration-300 ease-in-out" />
          <span>Back</span>
        </Link>
        <div className="space-y-6 my-5">
          <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {data.short_description}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.technologies?.map((tech, i) => (
              <div
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-normal border p-1 px-2 rounded-md hover:bg-gray-100"
            >
              GitHub <IconExternalLink size={16} />
            </a>
            {data.demo && (
              <a
                href={data.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-normal border p-1 px-2 rounded-md hover:bg-gray-100"
              >
                Demo <IconExternalLink size={16} />
              </a>
            )}
            {data.youtube && (
              <a
                href={data.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-normal border p-1 px-2 rounded-md hover:bg-gray-100"
              >
                youtube <IconExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto ">
        {data.youtube && (
          <iframe
            width="100%"
            className="rounded-md overflow-hidden"
            height="315"
            src={`https://www.youtube.com/embed/${getYTubeId(
              data.youtube || ""
            )}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        )}

        <hr className="my-8" />
        {cont.map((item) => {
          if (item.type === "heading_1") {
            return (
              <h1 className="text-4xl mb-4 font-bold" key={item.id}>
                {item.text}
              </h1>
            );
          }
          if (item.type === "paragraph") {
            return (
              <p key={item.id} className="text-lg text-slate-600">
                {item.text
                  ?.replace(/<[^>]+>/g, "")
                  .replace(/&nbsp;/g, " ")
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")}
              </p>
            );
          }
          if (item.type === "divider") {
            return <hr key={item.id} className="my-8" />;
          }
          if (item.type === "image") {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.url}
                alt={item.text}
                key={item.id}
                className="my-4 w-full rounded-md shadow-md"
              />
            );
          }
        })}
      </main>
    </>
  );
}
