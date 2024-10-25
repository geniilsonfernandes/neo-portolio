import { jobs, skills, socials, stacks } from "@/cms";
import About from "@/components/About";
import AnchorButton from "@/components/AnchorButton";
import Job from "@/components/Job";
import Section from "@/components/Section";
import { Stack } from "@/components/Stack";
import Tag from "@/components/Tag";

const Page = () => {
  return (
    <div className="space-y-8 py-8">
      <h2 className="text-2xl">About me</h2>
      <About />
      <ul className="flex gap-2 mt-6">
        {socials.map((item) => (
          <li key={item.name}>
            <AnchorButton href={item.path}>{item.name}</AnchorButton>
          </li>
        ))}
      </ul>

      <Section title="Stacks">
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <Tag key={skill} name={skill} />
          ))}
        </div>
      </Section>

      <Section title="Interesses">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {stacks.map((stack) => (
            <Stack id={stack} key={stack} />
          ))}
        </div>
      </Section>

      <Section title="Experiência">
        <div className="flex gap-2 flex-wrap">
          {jobs && jobs.map((job, i) => <Job key={i} {...job} />)}
        </div>
      </Section>

      <Section title="Escolaridade">
        <div>
          <h3 className=" text-md font-bold ">
            Anhanguera - Análise E Desenvolvimento De Sistemas
          </h3>
          <span className="text-sm mt-4">
            Sistemas jun de 2022 - jun de 2024
          </span>
          <p className="text-sm mt-4"></p>
          <p className="text-sm mt-4">
            Desenvolvimento de software · Boas práticas de programação · Design
            de interface do usuário · Controle de versão · Banco de dados ·
            Ciência da computação · C# · SQL · Requisitos de negócio ·
            Arquitetura de software · Web Design Responsivo · Programação
            orientada a objetos (POO) · Jest · Testes automatizados de software
            · Desenvolvimento de tecnologia · UML (Linguagem de modelagem
            unificada)
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Page;
