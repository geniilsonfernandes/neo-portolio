"use client";

import { IProject } from "@/types";
import { cn } from "@/utils";
import {
  IconBrandGolang,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

interface IProjectsSection {
  data: IProject[];
}

export const ProjectsSection: React.FC<IProjectsSection> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const techs = [
    {
      name: "React",
      icon: <IconBrandReact size={18} stroke={1} />,
    },
    {
      name: "Tailwind",
      icon: <IconBrandTailwind size={18} stroke={1} />,
    },
    {
      name: "Typescript",
      icon: <IconBrandTypescript size={18} stroke={1} />,
    },
    {
      name: "Nextjs",
      icon: <IconBrandNextjs size={18} stroke={1} />,
    },
    {
      name: "Golang",
      icon: <IconBrandGolang size={18} stroke={1} />,
    },
    {
      name: "Nodejs",
      icon: <IconBrandNodejs size={18} stroke={1} />,
    },
  ] as {
    name: string;
    icon: React.ReactNode;
  }[];

  const projectMatchesTechs = useMemo(() => {
    return data?.filter((project) => {
      if (selectedTechs.length === 0) {
        return true;
      }
      return project.technologies?.some((tech) => selectedTechs.includes(tech));
    });
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
              selectedTechs.includes(tech.name) && "bg-gray-700 text-white"
            )}
            onClick={() => {
              if (selectedTechs.includes(tech.name)) {
                setSelectedTechs(selectedTechs.filter((t) => t !== tech.name));
              } else {
                setSelectedTechs([...selectedTechs, tech.name]);
              }
            }}
          >
            {tech.icon}
          </button>
        ))}
      </div>
      <div className=" gap-4 group mt-4 grid grid-cols-1 lg:grid-cols-2">
        {projectMatchesTechs.map((project, i) => (
          <ProjectCard
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn({
              "opacity-50": i !== hoveredIndex && hoveredIndex !== null,
            })}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
};
