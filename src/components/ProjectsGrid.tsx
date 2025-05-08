"use client";

import Link from "next/link";
import { IProject, ProjectCard } from "./ProjectCard";

interface IProjectsGrid {
  data?: IProject[];
}

export const ProjectsGrid: React.FC<IProjectsGrid> = ({ data }) => {
  return (
    <div className="gap-4 group mt-4 grid grid-cols-1 lg:grid-cols-2 ">
      {data?.map((project, i) => (
        <Link
          href={`/project/${project.id}`}
          className={`animate-fade-up animate-once animate-ease-in-out animate-delay-${i}00`}
          key={project.id}
        >
          <ProjectCard project={project} />
        </Link>
      ))}
      <Link
        href="/projects"
        className=" text-teal-200 hover:underline col-span-1 font-light"
      >
        See all projects
      </Link>
    </div>
  );
};
