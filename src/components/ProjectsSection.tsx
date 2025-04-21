"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { IProject, ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

interface IProjectsSection {
  data?: IProject[];
}

export const ProjectsSection: React.FC<IProjectsSection> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const techs = useMemo(() => {
    const allTechnologies =
      data?.flatMap((project) => project.technologies ?? []) ?? [];

    const techSet: Record<string, boolean> = {};
    const uniqueTechs: string[] = [];

    for (const tech of allTechnologies) {
      if (!techSet[tech]) {
        uniqueTechs.push(tech);
        techSet[tech] = true; // Marca a tecnologia como já vista
      }
    }

    return uniqueTechs;
  }, [data]);

  const projectMatchesTechs = useMemo(() => {
    return (
      data?.filter((project) => {
        if (selectedTechs.length === 0) {
          return true;
        }
        return project.technologies?.some((tech) =>
          selectedTechs.includes(tech)
        );
      }) ?? []
    );
  }, [selectedTechs, data]);

  return (
    <Section
      className="mt-16"
      title="Projects"
      id="projects"
      aria-labelledby="projects"
    >
      {/* <span className="font-bold text-sm text-gray-700">Filter by tech:</span>
      <div className="flex items-center gap-2 mt-4">
        {techs.map((tech, i) => (
          <button
            key={i}
            className={cn(
              "inline-flex items-center gap-2 border p-2 rounded-md",
              selectedTechs.includes(tech) && "bg-gray-700 text-white"
            )}
            onClick={() => {
              if (selectedTechs.includes(tech)) {
                setSelectedTechs(selectedTechs.filter((t) => t !== tech));
              } else {
                setSelectedTechs([...selectedTechs, tech]);
              }
            }}
          >
            {techsIcons[tech as IconType] ?? tech}
          </button>
        ))}
      </div> */}
      <div className=" gap-4 group mt-4 grid grid-cols-1 sm:grid-cols-2 ">
        <AnimatePresence>
          {projectMatchesTechs.map((project, i) => (
            <Link href={`/project/${project.id}`} key={project.id}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};
