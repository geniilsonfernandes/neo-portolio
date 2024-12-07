import { ProjectProps } from "@/cms";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AnchorButton from "../AnchorButton";
import { ProjectDescription } from "../ProjectDescription";
import Tag from "../Tag";

type SectionProps = {
  title: string;
  paragraphs?: string[];
  images?: string[];
};

const Section = ({ title, paragraphs, images }: SectionProps) => {
  const t = useTranslations("Projects");
  return (
    <section className="space-y-4 relative w-full">
      <h1 className="text-lg sm:text-2xl font-bold">
        {t(`sections.${title}`)}
      </h1>
      {paragraphs?.map((p, i) => (
        <p key={i} className="text-sm leading-5 font-mono mt-4">
          {p}
        </p>
      ))}
      <div className="flex gap-2 flex-wrap justify-center">
        {images?.map((image) => (
          <Image
            key={image}
            className="bg-slate-50 cursor-pointer border border-slate-200"
            width={380}
            height={380}
            src={image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export const ProjectDetails = ({ project }: { project: ProjectProps }) => {
  return (
    <main className="space-y-8 animation-slide-up">
      <div className="relative w-full h-96">
        <Image
          src={project.cover}
          alt="image"
          fill
          className="object-cover  shadow-lg shadow-gray-100 rounded-md"
        />
      </div>
      <div className="flex gap-1">
        {project.github && (
          <AnchorButton href={project.github} target="_blank" variant="button">
            Repo
          </AnchorButton>
        )}
        {project.demo && (
          <AnchorButton href={project.demo} target="_blank" variant="button">
            Demo
          </AnchorButton>
        )}
        {project.link && (
          <AnchorButton href={project.link} target="_blank" variant="button">
            Link
          </AnchorButton>
        )}
      </div>
      <div className="col-span-12 sm:col-span-9 ">
        <div className="flex gap-2 justify-between items-end ">
          <h2 className="text-2xl font-bold ">{project.title}</h2>
          <Tag
            name={project.status === "ready" ? "Concluído" : "Em andamento"}
            color={project.status === "ready" ? "green" : "yellow"}
          />
        </div>
        <div className="flex gap-2 flex-wrap mt-8">
          {project.technologies.map((tech, i) => (
            <Tag key={i} name={tech} />
          ))}
        </div>
      </div>
      <ProjectDescription description={project.description} showTitle />
      {project.youtube && (
        <iframe
          width="100%"
          height="415"
          src={project.youtube}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="rounded-lg border-4 border-neutral-300 "
        ></iframe>
      )}
      {project?.sections?.map((section, i) => (
        <Section
          key={i}
          title={section.title}
          paragraphs={section.paragraphs}
          images={section.images}
        />
      ))}
    </main>
  );
};
