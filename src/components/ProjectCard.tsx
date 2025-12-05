/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { forwardRef } from "react";

export interface IProject {
  id: string;
  title?: string;
  description?: string;
  short_description?: string;
  technologies?: string[];
  demo?: string;
  icon?: string;
  github?: string;
  youtube?: string;
  storybook?: string;
  likes?: number;
  cover?: string;
  sub_cover?: string;
  status?: string;
}

interface IProjectCard extends React.HTMLAttributes<HTMLDivElement> {
  project: {
    id: string;
    title?: string;
    short_description?: string;
    cover?: string;
    status?: string;
  };
}

interface ExternalIconButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

const ExternalIconButton = forwardRef<
  HTMLAnchorElement,
  ExternalIconButtonProps
>((props, ref) => {
  return (
    <a
      ref={ref}
      className="items-center gap-2 text-xs font-normal border inline-flex p-1 px-2 rounded-md hover:bg-gray-100"
      {...props}
    />
  );
});

// Define um display name útil para depuração
ExternalIconButton.displayName = "ExternalIconButton";

const ProjectCardDescription = ({
  title,
  short_description,
  status,
}: {
  title?: string;
  short_description?: string;
    status?: string;
}) => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between gap-2 mb-1">
        {status && (
          <span
            className={cn(
              "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 ",
              (() => {
                switch (status?.toLowerCase()) {
                  case "active":
                  case "online":
                    return "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300";
                  case "pending":
                  case "in progress":
                    return "bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-300";
                  case "completed":
                  case "finished":
                    return "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-300";
                  case "deprecated":
                  case "archived":
                    return "bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-300";
                  default:
                    return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300";
                }
              })()
            )}
          >
            {status}
          </span>
        )}
      </div>
      <h3
        id={`project-title-${title}`}
        className="font-bold text-lg  dark:text-white"
      >
        {title}
      </h3>
      <p
        id={`project-description-${title}`}
        className="text-md font-light text-slate-500 dark:text-white/50 mt-2"
      >
        {short_description}
      </p>
    </div>
  );
};

export const ProjectCard = forwardRef<HTMLDivElement, IProjectCard>(
  (
    { className, project: { id, title, short_description, cover, status }, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-2 bg-white dark:bg-midnight-900 hover:dark:bg-midnight-800 flex relative cursor-pointer hover:scale-[1.01] hover:-translate-y-1 border border-slate-200 dark:border-midnight-800 hover:shadow-lg hover:shadow-midnight-500/10 transition-all duration-200 ease-in-out group/card",
          className
        )}
        aria-labelledby={`project-title-${title}`}
        aria-describedby={`project-description-${title}`}
        {...props}
      >
        <IconExternalLink
          stroke={1.5}
          className="group-hover/card:text-slate-400  absolute top-3 right-3 group-hover/card:top-2 group-hover/card:right-2 text-slate-100 hover:text-teal-900 transition-all duration-500 ease-in-out"
        />

        <div className="w-36 h-36 flex-shrink-0 bg-midnight-800 relative overflow-hidden">
          <Image
            src={cover || ""}
            alt="Genilson Fernandes"
            fill
            className="object-cover w-full h-full group-hover/card:scale-[1.03] transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="flex-1 ml-4">
          <ProjectCardDescription
            title={title}
            short_description={short_description}
            status={status}
          />
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
