import { ProjectProps, projects } from "@/cms";
import { ProjectDetails } from "@/components/ProjectDetails";
import { cn } from "@/utils";
import Link from "next/link";

type getDataResponse = {
  project: ProjectProps;
  previous: ProjectProps | null;
  next: ProjectProps | null;
};

async function getData(id: string) {
  const project = projects.find((project) => project.id === id);
  const index = projects.findIndex((project) => project.id === id);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return {
    project,
    previous,
    next,
  };
}

export const revalidate = 3600;

type ProjetctLinkProps = {
  project: ProjectProps;
  isNext?: boolean;
  isPrevious?: boolean;
};

const ProjetctLink = ({ project, isNext, isPrevious }: ProjetctLinkProps) => {
  const title = {
    next: "proximo projeto",
    previous: "projeto anterior",
  };

  if (!project) return <div className="bg-neutral-50 flex-1" />;

  return (
    <Link href={`${project.id}`} className="flex-1">
      <div
        className={cn(
          "p-4 border w-full border-neutral-800 rounded-sm hover:bg-neutral-200",
          {
            "rounded-tl-none": isNext,
            "rounded-tr-none": isPrevious,
            "text-end": isNext,
          }
        )}
      >
        <div className={cn("text-xs text-neutral-800 uppercase", {})}>
          {isNext && title.next}
          {isPrevious && title.previous}
        </div>
        <div className="text-lg font-bold underline">{project.title}</div>
      </div>
    </Link>
  );
};

export default async function Page({ params }: { params: { id: string } }) {
  const { project, next, previous } = await getData(params.id);

  return (
    <>
      {project && <ProjectDetails project={project} />}

      <div
        className={cn(
          "flex flex-col sm:flex-row gap-2 justify-between mt-8 pt-8 border-t border-neutral-800"
        )}
      >
        <ProjetctLink project={previous} isPrevious />
        <ProjetctLink project={next} isNext />
      </div>
    </>
  );
}
