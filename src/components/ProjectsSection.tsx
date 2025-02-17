"use client";

import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { IProject, ProjectCard } from "./ProjectCard";
import { Section } from "./Section";
import { IconType, techsIcons } from "./techIcons";

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
    <Section title="Projects" id="projects" aria-labelledby="projects">
      <span className="font-bold text-sm text-gray-700">Filter by tech:</span>
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
      </div>
      <div className=" gap-4 group mt-4 grid grid-cols-1 lg:grid-cols-2">
        <AnimatePresence>
          {projectMatchesTechs.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <ProjectCard
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn({
                  "opacity-50 blur-[2px]":
                    i !== hoveredIndex && hoveredIndex !== null,
                })}
                project={project}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};
