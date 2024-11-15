"use client";

import { ProjectProps } from "@/cms";
import Image from "next/image";
import Link from "next/link";
import { ProjectDescription } from "../ProjectDescription";
import Tag from "../Tag";

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
  status,
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
          <div className="flex gap-4 align-center">
            <h1 className="text-lg font-bold underline">{title}</h1>
            <Tag
              name={status === "ready" ? "Concluído" : "Em andamento"}
              color={status === "ready" ? "green" : "yellow"}
            />
          </div>
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
