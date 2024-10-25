"use client";

import { ProjectProps } from "@/cms";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type ProjectDescriptionProps = {
  description: ProjectProps["description"];
  className?: string;
  short?: boolean;
};

export const ProjectDescription = ({
  description,
  className = "text-sm leading-5 font-mono mt-4",
  short = false,
}: ProjectDescriptionProps) => {
  const locale = useLocale() as "en" | "pt";

  if (short) {
    return <p className={className}>{description[locale][0]}</p>;
  }

  return (
    <>
      {description[locale].map((desc, i) => (
        <p key={i} className={className}>
          {desc}
        </p>
      ))}
    </>
  );
};

type ProjectCardProps = {
  path: string;
  hiddenCover?: boolean;
  onClick?: () => void;
  projectNumber: number;
} & ProjectProps;

const Project = ({
  path,
  cover,
  description,
  title,
  projectNumber = 0,
  onClick,
}: ProjectCardProps) => {
  return (
    <Link
      href={`project/${path}`}
      className="border-b border-neutral-800 flex group gap-8 py-8 px-4"
    >
      <span className="font-mono text-2xl mt-1">
        {Number(projectNumber).toString().padStart(2, "0")}
      </span>
      <div className="flex flex-1 justify-between">
        <div>
          <h1 className="text-lg font-bold underline">{title}</h1>

          <ProjectDescription
            description={description}
            className="text-sm  max-w-[400px]"
            short
          />
        </div>
        <div className="w-28 h-full relative">
          <Image src={cover} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
};

export default Project;
