import { getPageContent, getProject } from "@/app/actions";
import { Title } from "@/components/Title";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
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

const ExternalLink = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="inline-flex text-md items-center gap-2 hover:underline rounded-full group text-slate-600 dark:text-white/80"
    >
      {children}
    </Link>
  );
};

const Divider = () => (
  <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />
);

const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={clsx(
        "font-light text-slate-700 dark:text-white/80",
        className
      )}
    >
      {children}
    </p>
  );
};

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
          className="inline-flex items-center gap-2 rounded-full group text-slate-700 dark:text-white"
        >
          <IconArrowNarrowLeft className="transform group-hover:-translate-x-1 transition-all duration-300 ease-in-out" />
          <span>Back</span>
        </Link>
        <div className="my-5">
          <Title>{data.title}</Title>
          <div className="flex gap-2 flex-wrap mt-1">
            {data.demo && (
              <ExternalLink url={data.demo}>Link for Project</ExternalLink>
            )}

            {data.storybook && (
              <ExternalLink url={data.storybook}>Storybook</ExternalLink>
            )}
          </div>
          <Paragraph className="my-4">{data.description}</Paragraph>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="font-semibold dark:text-white">Tech stack:</span>
            {data.technologies?.map((tech, i) => (
              <div
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-20 ">
        {data.youtube && (
          <>
            <Title order={2} className="mb-4">
              Video Demo
            </Title>
            <iframe
              width="100%"
              className="rounded-md overflow-hidden"
              height="515"
              src={`https://www.youtube.com/embed/${getYTubeId(
                data.youtube || ""
              )}`}
              allowFullScreen
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </>
        )}

        {cont.map((item) => {
          if (item.type === "heading_1")
            return (
              <Title order={2} key={item.id} className="my-8 mt-16">
                {item.text}
              </Title>
            );
          if (item.type === "paragraph")
            return (
              <Paragraph key={item.id} className="my-4">
                {item.text
                  ?.replace(/<[^>]+>/g, "")
                  .replace(/&nbsp;/g, " ")
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")}
              </Paragraph>
            );
          if (item.type === "link")
            return (
              <ExternalLink key={item.id} url={item.url || ""}>
                {item.text}
              </ExternalLink>
            );
          if (item.type === "divider") return <Divider key={item.id} />;
          if (item.type === "image") {
            return (
              <Image
                src={item.url || "/default-og.png"}
                alt={item.text || ""}
                key={item.id}
                width={1000}
                height={1000}
                className="my-4 w-full rounded-md shadow-md"
              />
            );
          }
        })}
        <Title className="my-8 mt-16">Application source code</Title>
        <Paragraph className="my-4">
          Find the code on:{" "}
          <ExternalLink url={data.github || ""}>GitHub</ExternalLink>
        </Paragraph>
      </main>
    </>
  );
}
