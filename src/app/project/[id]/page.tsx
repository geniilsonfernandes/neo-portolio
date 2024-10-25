import { projects } from "@/cms";
import AnchorButton from "@/components/AnchorButton";
import { ProjectDescription } from "@/components/Project";
import Tag from "@/components/Tag";
import { useLocale } from "next-intl";
import Image from "next/image";

async function getData(id: string) {
  const res = projects.find((project) => project.id === id);

  if (res === undefined) {
    throw new Error("Failed to fetch data");
  }

  return res;
}

export const revalidate = 3600;

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  return (
    <div className="space-y-8 animation-slide-up">
      <div className="relative w-full h-96">
        <Image src={data.cover} alt="image" fill className="object-contain" />
      </div>
      <div className="flex gap-4 ">
        {data.github && (
          <AnchorButton href={data.github} target="_blank" variant="button">
            Repo
          </AnchorButton>
        )}
        {data.demo && (
          <AnchorButton href={data.demo} target="_blank" variant="button">
            Demo
          </AnchorButton>
        )}
      </div>
      <div className="col-span-12 sm:col-span-9 ">
        <div className="flex gap-2 justify-between items-end ">
          <h2 className="text-2xl font-bold ">{data.title}</h2>
          <Tag
            name={data.status === "ready" ? "Concluído" : "Em andamento"}
            color={data.status === "ready" ? "green" : "yellow"}
          />
        </div>
        <ProjectDescription description={data.description} />
        <div className="flex gap-2 flex-wrap mt-8">
          {data.technologies.map((tech, i) => (
            <Tag key={i} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
