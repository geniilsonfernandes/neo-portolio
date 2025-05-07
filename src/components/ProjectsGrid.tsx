"use client";

import Link from "next/link";
import { IProject, ProjectCard } from "./ProjectCard";

interface IProjectsGrid {
  data?: IProject[];
}

export const ProjectsGrid: React.FC<IProjectsGrid> = ({ data }) => {
  return (
    <div className="gap-4 group mt-4 grid grid-cols-1 sm:grid-cols-2 items-stretch ">
      {data?.map((project, i) => (
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
