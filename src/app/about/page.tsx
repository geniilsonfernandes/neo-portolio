import { jobs, sections, skills } from "@/cms";
import AnchorButton from "@/components/AnchorButton";
import Job from "@/components/Job";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { IconChevronLeft } from "@tabler/icons-react";
import { icons } from "lucide-react";

import Image from "next/image";
type StackProps = {
  name: string;
  icon?: string;
  description?: string;
};

const Stack = ({ name, description, icon }: StackProps) => {
  const LucideIcon = icons[icon as keyof typeof icons];
  return (
    <div className="p-4 bg-slate-100">
      <LucideIcon size={16} className="" />
      <h3 className=" text-md font-bold font-mono flex gap-2 mt-2">{name}</h3>
      <p className="text-sm mt-4">{description}</p>
    </div>
  );
};

const Page = () => {
  const stacks = [
    {
      name: "Front-end",
      description:
        "Development of web interfaces and applications with a focus on user experience.",
      icon: "Terminal",
    },
    {
      name: "Back-end",
      description:
        "Development of APIs and server logic to support web applications and services.",
      icon: "Terminal",
    },
    {
      name: "Mobile",
      description:
        "Development of mobile applications for iOS and Android platforms using Expo.",
      icon: "Terminal",
    },
    {
      name: "Automated Testing",
      description:
        "Implementation of automated tests to ensure the quality and robustness of APIs and applications.",
      icon: "Terminal",
    },
    {
      name: "Clean Code",
      description:
        "Writing clean and readable code, following best practices and development standards.",
      icon: "Terminal",
    },
    {
      name: "UX/UI",
      description:
        "Design and implementation of intuitive and attractive user interfaces to provide an exceptional user experience.",
      icon: "Terminal",
    },
  ];

  const socials = [
    {
      name: "Github",
      path: "https://github.com/geniilsonfernandes",
    },
    {
      name: "Twitter",
      path: "https://twitter.com/genilsonf_",
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/genilson-fernandes/",
    },
    {
      name: "dev.to",
      path: "https://dev.to/geniilsonfernandes",
    },
  ];

  return (
    <div className="space-y-8 py-8">
      <h2 className="text-2xl">About me</h2>
      <div className="gap-4">
        <div className="space-y-4">
          <h1 className="text-2xl">{sections.about.title}</h1>
          {sections.about.history.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
          <ul className="flex gap-2 mt-6">
            {socials.map((item) => (
              <li key={item.name}>
                <AnchorButton href={item.path}>{item.name}</AnchorButton>
              </li>
            ))}
          </ul>
        </div>
      </div>

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
            <Stack key={stack.name} {...stack} />
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
