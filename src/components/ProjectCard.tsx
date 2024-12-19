import { likeProject } from "@/app/actions";
import { cn } from "@/utils";
import {
  IconBrandGithub,
  IconBrandStorybook,
  IconBrandYoutube,
  IconExternalLink,
} from "@tabler/icons-react";
import { forwardRef, useState } from "react";
import { Like } from "./Like";
import { IconType, techsIcons } from "./techIcons";

export interface IProject {
  id: string;
  title?: string;
  description?: string;
  technologies?: string[];
  demo?: string;
  github?: string;
  youtube?: string;
  storybook?: string;
  likes?: number;
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
        youtube,
        storybook,
        technologies,
        likes,
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
          "font-bold flex flex-col gap-4 justify-between p-4 border border-gray-200 bg-white flex-1 rounded-md hover:scale-[1.05] transition-all relative",
          className
        )}
        aria-labelledby={`project-title-${title}`}
        aria-describedby={`project-description-${title}`}
        {...props}
      >
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <ul className="flex gap-1 flex-wrap" aria-label="Technologies used">
              {technologies?.map((tech) => (
                <li key={tech}>{techsIcons[tech as IconType] ?? null}</li>
              ))}
            </ul>
            <div className="flex gap-2">
              <Like initialLikes={likesCount} onLike={handleLike} />
              {demo && (
                <ExternalIconButton
                  href={demo}
                  aria-label="Open demotration"
                  tabIndex={0}
                >
                  <IconExternalLink size={18} stroke={1} /> Demo
                </ExternalIconButton>
              )}
            </div>
          </div>
          <h3 id={`project-title-${title}`} className="font-bold text-lg mt-2">
            {title}
          </h3>
        </header>
        <p
          id={`project-description-${title}`}
          className="font-light text-sm text-neutral-600"
        >
          {shortDescription}
        </p>
        <footer>
          <ul className="flex gap-2 flex-wrap" aria-label="Project links">
            {github && (
              <li>
                <ExternalIconButton
                  href={github}
                  aria-label="Open GitHub"
                  tabIndex={0}
                >
                  <IconBrandGithub size={18} stroke={1} /> GitHub
                </ExternalIconButton>
              </li>
            )}
            {youtube && (
              <li>
                <ExternalIconButton
                  href={youtube}
                  aria-label="Open YouTube"
                  tabIndex={0}
                >
                  <IconBrandYoutube size={18} stroke={1} /> YouTube
                </ExternalIconButton>
              </li>
            )}
            {storybook && (
              <li>
                <ExternalIconButton
                  href={storybook}
                  aria-label="Open Storybook"
                  tabIndex={0}
                >
                  <IconBrandStorybook size={18} stroke={1} /> Storybook
                </ExternalIconButton>
              </li>
            )}
          </ul>
        </footer>
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
