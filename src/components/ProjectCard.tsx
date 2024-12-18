import { IProject } from "@/types";
import { cn } from "@/utils";
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandStorybook,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandYoutube,
  IconExternalLink,
} from "@tabler/icons-react";
import { forwardRef } from "react";

interface IProjectCard extends React.HTMLAttributes<HTMLDivElement> {
  project: IProject;
}

export const ProjectCard = forwardRef<HTMLDivElement, IProjectCard>(
  (
    {
      className,
      project: { title, description, demo, github, youtube, storybook },
      ...props
    },
    ref
  ) => {
    const shortDescription =
      description.length > 100
        ? description.substring(0, 100) + "..."
        : description;

    return (
      <div
        ref={ref}
        className={cn(
          "font-bold p-4 border border-gray-200 bg-white flex-1 rounded-md hover:scale-[1.05] transition-all",
          className
        )}
        {...props}
      >
        <div className="flex justify-between">
          <div className="flex gap-2 flex-wrap">
            <IconBrandReact size={18} stroke={1} />
            <IconBrandTailwind size={18} stroke={1} />
            <IconBrandTypescript size={18} stroke={1} />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="font-light text-sm text-neutral-600 mt-4">
            {shortDescription}
          </p>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {demo && (
            <a
              href={demo}
              className="items-center gap-2 text-xs font-normal border inline-flex p-1 px-2 rounded-md hover:bg-gray-100"
            >
              <IconExternalLink size={18} stroke={1} /> Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              className="items-center gap-2 text-xs font-normal border inline-flex p-1 px-2 rounded-md hover:bg-gray-100"
            >
              <IconBrandGithub size={18} stroke={1} /> GitHub
            </a>
          )}
          {youtube && (
            <a
              href={youtube}
              className="items-center gap-2 text-xs font-normal border inline-flex p-1 px-2 rounded-md hover:bg-gray-100"
            >
              <IconBrandYoutube size={18} stroke={1} /> YouTube
            </a>
          )}
          {storybook && (
            <a
              href={storybook}
              className="items-center gap-2 text-xs font-normal border inline-flex p-1 px-2 rounded-md hover:bg-gray-100"
            >
              <IconBrandStorybook size={18} stroke={1} /> Storybook
            </a>
          )}
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
