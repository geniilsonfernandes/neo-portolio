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

export const ProjectCard = forwardRef<HTMLDivElement, IProjectCard>(
  (
    {
      className,
      project: {
        id,
        title,
        description = "",
        demo,
        github,
        icon,
        youtube,
        storybook,
        technologies,
        short_description,
        likes,
        cover,
      },
      ...props
    },
    ref
  ) => {
    const [likesCount, setLikesCount] = useState(likes || 0);

    const handleLike = async (likesCount: number) => {
      const newLikes = await likeProject(id, likesCount);
      setLikesCount(newLikes);
    };

    const shortDescription =
      description.length > 100
        ? description.substring(0, 100) + "..."
        : description;

    return (
      <article
        ref={ref}
        className={cn(
          "p-4 bg-white flex-1 rounded-md relative cursor-pointer hover:scale-[1.01] border boder-slate-200 hover:border-slate-300 transition-all duration-200 ease-in-out group/card",
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
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover || ""}
            alt="Genilson Fernandes"
            className="rounded-md shadow-sm object-cover w-full h-40"
          />
        )}
        {!cover && icon && (
          <Image
            src={icon || ""}
            alt="Genilson Fernandes"
            width={40}
            height={40}
            className="rounded-md shadow-sm"
          />
        )}

        <h3 id={`project-title-${title}`} className="font-bold text-lg mt-2">
          {title}
        </h3>
        <p
          id={`project-description-${title}`}
          className="text-sm text-slate-500 "
        >
          {short_description}
        </p>
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
