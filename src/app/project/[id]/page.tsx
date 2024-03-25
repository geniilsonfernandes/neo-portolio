/* eslint-disable @next/next/no-img-element */
import { projects } from "@/cms";
import AnchorButton from "@/components/AnchorButton";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

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
    <div className="container space-y-8  animation-slide-up">
      <div>
        <img
          src={data.cover}
          alt="image"
          className="w-full h-80 object-cover bg-neutral-900/80"
        />
      </div>
      <div className="flex gap-4 ">
        {data.github && (
          <AnchorButton href={data.github} target="_blank" variant="button">
            Repositório
          </AnchorButton>
        )}
        {data.demo && (
          <AnchorButton href={data.demo} target="_blank" variant="button">
            Demo
          </AnchorButton>
        )}
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-3 space-y-4">
          <Section title="Stack">
            <div className="flex gap-2 flex-wrap">
              {data.technologies.map((tech, i) => (
                <Tag key={i} name={tech} />
              ))}
            </div>
          </Section>
        </div>
        <div className="col-span-12 sm:col-span-9 ">
          <div className="flex gap-2 justify-between items-end ">
            <h2 className="text-neutral-300 text-2xl font-bold font-mono">
              {data.title}
            </h2>
            <Tag
              name={data.status === "ready" ? "Concluído" : "Em andamento"}
              color={data.status === "ready" ? "green" : "yellow"}
            />
          </div>
          {data.description.map((desc, i) => (
            <p
              key={i}
              className="text-neutral-400 text-sm leading-5 font-mono mt-4"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
