import Button from "@/components/Button";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

async function getData(id: string) {
  const res = 100;

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
          src=""
          alt="image"
          className="w-full h-80 object-cover bg-neutral-900/80"
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-3 space-y-4">
          <div>
            <Button>Repositório</Button>
          </div>
          <Section title="Stack">
            <div className="flex gap-2 flex-wrap">
              <Tag name="Next.js" />
              <Tag name="React" />
              <Tag name="Tailwind" />
              <Tag name="Typescript" />
              <Tag name="Next.js" />
              <Tag name="React" />
              <Tag name="Tailwind" />
              <Tag name="Typescript" />
              <Tag name="Next.js" />
              <Tag name="React" />
              <Tag name="Tailwind" />
              <Tag name="Typescript" />
            </div>
          </Section>
        </div>
        <div className="col-span-12 sm:col-span-9 ">
          <div className="flex gap-2 justify-between items-end ">
            <h2 className="text-neutral-300 text-2xl font-bold font-mono">
              Money Guard
            </h2>
            <Tag name="Finalizado" />
          </div>
          <p className="text-neutral-400 text-sm leading-5 font-mono mt-4">
            Money Guard é um aplicativo de controle financeiro focado na gestão
            mensal, estabelecendo metas e tendo como ponto central o salário do
            usuário. Com ele, podemos acompanhar de forma mais eficiente o que
            recebemos, estabelecer objetivos e economizar nossa graninha.
          </p>
          <p className="text-neutral-400 text-sm leading-5 font-mono mt-4">
            Este aplicativo nasceu da necessidade de substituir o uso do Google
            Sheets por um sistema mais completo. Eu e minha esposa enfrentamos
            limitações ao utilizar o Google Sheets para gerenciar nossas
            finanças, o que nos motivou a criar o Money Guard.
          </p>
        </div>
      </div>
      <div className="w-full h-96 bg-neutral-900/40 mt-8">video do youtube</div>
    </div>
  );
}
