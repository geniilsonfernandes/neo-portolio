"use client";

import clsx from "clsx";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

type Props = {
  grid?: boolean;
};

export const ProjectsGrid: React.FC<Props> = ({ grid = true }) => {
  const projects = [
    {
      id: "zephyr",
      title: "Zephyr",
      short_description:
        "Zephyr is a minimalist and offline-first event timer app.",
      cover:
        "https://res.cloudinary.com/dbpayojb3/image/upload/v1745873085/portfolio/ygkrlxuqhj4seykcyxqi.png",
    },
    {
      id: "classes-app",
      title: "Classes App",
      short_description:
        "Classes is an e-learning app created with the goal of practicing tab and stack navigation",
      cover:
        "https://res.cloudinary.com/dbpayojb3/image/upload/v1745870147/portfolio/classes_cover.png",
    },
  ];
  return (
    <div className={clsx("gap-4 group mt-4 grid grid-cols-1 lg:grid-cols-2")}>
      {projects?.map((project, i) => (
        <Link
          href={`/project/zephyr`}
          className={`animate-fade-up animate-once animate-ease-in-out animate-delay-${i}00`}
          key={project.id}
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
};
