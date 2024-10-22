"use client";

import { ProjectProps } from "@/cms";
import { motion } from "framer-motion";
import { Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnchorButton from "../AnchorButton";
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
  status,
  description,
  github,
  demo,
  title,
  hiddenCover = false,
  projectNumber = 0,
  onClick,
  ...props
}: ProjectCardProps) => {
  return (
    <div className="border-b border-neutral-800 flex gap-8 py-8 px-4">
      <span className="font-mono text-2xl mt-1">
        {Number(projectNumber).toString().padStart(2, "0")}
      </span>
      <div>
        <h1 className="text-lg font-bold underline">{title}</h1>
        <p className="text-sm  max-w-[400px]">
          {description[0].substring(0, 100)}
        </p>
      </div>
      <div className="flex justify-end flex-1 items-end gap-2">
        {demo && (
          <a
            href={demo}
            className="text-xs font-sm uppercase hover:underline"
            target="_blank"
          >
            LIVE
          </a>
        )}
        {github && (
          <a
            href={github}
            className="text-xs font-sm uppercase hover:underline"
            target="_blank"
          >
            GITHUB
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
