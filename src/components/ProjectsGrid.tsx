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
      id: "pantrinho",
      title: "Pantrinho",
      short_description:
        "Pantrinho is a smart and minimalist pantry manager designed to simplify inventory tracking.",
      cover: "https://res.cloudinary.com/dbpayojb3/image/upload/v1764940482/pantinho_cover_portfolio_endpfl.png",
      status: "In Progress",
    },
    {
      id: "Proposa",
      title: "Proposa",
      short_description:
        "Close deals up to 70% faster. by creating, sending, and tracking professional proposals.",
      cover: "https://res.cloudinary.com/dbpayojb3/image/upload/v1764942752/proposa_cover_portfolio_uvocgf.png",
      status: "In Progress",
    },
    {
      id: "zephyr",
      title: "Zephyr",
      short_description:
        "Zephyr is a minimalist and offline-first event timer app.",
      cover:
        "https://res.cloudinary.com/dbpayojb3/image/upload/v1745873085/portfolio/ygkrlxuqhj4seykcyxqi.png",
      status: "Completed",
    },
    {
      id: "classes-app",
      title: "Classes App",
      short_description:
        "Classes is an e-learning app created with the goal of practicing tab and stack navigation",
      cover:
        "https://res.cloudinary.com/dbpayojb3/image/upload/v1745870147/portfolio/classes_cover.png",
      status: "Completed",
    },

  ];

  return (
    <div className={clsx("gap-4 group mt-4 grid grid-cols-1")}>
      {projects?.map((project, i) => (
        <Link
          href={`/project/${project.id}`}
          className={`animate-fade-up animate-once animate-ease-in-out animate-delay-${i}00`}
          key={project.id}
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
};