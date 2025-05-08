/* eslint-disable @next/next/no-img-element */
import { likeProject } from "@/app/actions";
import { cn } from "@/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { forwardRef, useState } from "react";

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
}

interface IProjectCard extends React.HTMLAttributes<HTMLDivElement> {
  project: IProject;
}

interface ExternalIconButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

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
}: {
  title?: string;
  short_description?: string;
}) => {
  return (
    <div className="py-2">
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
    {
      className,
      project: { id, title, short_description, likes, cover, sub_cover },
      ...props
    },
    ref
  ) => {
    const [likesCount, setLikesCount] = useState(likes || 0);

    const handleLike = async (likesCount: number) => {
      const newLikes = await likeProject(id, likesCount);
      setLikesCount(newLikes);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "p-2 bg-white dark:bg-midnight-900 hover:dark:bg-midnight-800 flex-1 rounded-md relative cursor-pointer hover:scale-[1.01] hover:-translate-y-1 border border-slate-200 dark:border-midnight-800 hover:shadow-lg hover:shadow-midnight-500/10 transition-all duration-200 ease-in-out group/card",
          className
        )}
        aria-labelledby={`project-title-${title}`}
        aria-describedby={`project-description-${title}`}
        {...props}
      >
        <IconExternalLink
          stroke={1.5}
          className="group-hover/card:text-slate-400 absolute top-3 right-3 group-hover/card:top-2 group-hover/card:right-2 text-slate-100 hover:text-slate-900 transition-all duration-500 ease-in-out"
        />

        <div className="h-36 rounded-md bg-midnight-800 relative overflow-hidden">
          <Image
            src={cover || ""}
            alt="Genilson Fernandes"
            fill
            className="object-cover w-full h-full group-hover/card:scale-[1.03] transition-all duration-500 ease-in-out"
          />
        </div>

        {/* {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover || ""}
            alt="Genilson Fernandes"
            className="rounded-md shadow-sm object-cover w-full h-40"
          />
        )}

        <img
          src={icon || ""}
          alt="Genilson Fernandes"
          className="object-cover w-full h-40 opacity-1 group-hover/card:opacity-0 transition-all duration-500 ease-in-out"
        /> */}

        <ProjectCardDescription
          title={title}
          short_description={short_description}
        />
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
