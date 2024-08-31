import { skills } from "@/cms";
import AnchorButton from "@/components/AnchorButton";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
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
    <div className="p-4">
      <LucideIcon size={16} className="text-neutral-300" />
      <h3 className="text-neutral-300 text-md font-bold font-mono flex gap-2 mt-2">
        {name}
      </h3>
      <p className="text-neutral-400 text-sm mt-4">{description}</p>
    </div>
  );
};

const Page = () => {
  const stacks = [
    {
      name: "Front-end",
      description:
        "Desenvolvimento de interfaces web e aplicativos com foco na experiência do usuário.",
      icon: "Terminal",
    },
    {
      name: "Back-end",
      description:
        "Desenvolvimento de APIs e lógica de servidor para suportar aplicativos web e serviços.",
      icon: "Terminal",
    },
    {
      name: "Mobile",
      description:
        "Desenvolvimento de aplicativos móveis para plataformas iOS e Android com expo.",
      icon: "Terminal",
    },
    {
      name: "Testes Automatizados",
      description:
        "Implementação de testes automatizados para garantir a qualidade e robustez de APIs e aplicativos.",
      icon: "Terminal",
    },
    {
      name: "Clean Code",
      description:
        "Escrever código limpo e legível, seguindo melhores práticas e padrões de desenvolvimento.",
      icon: "Terminal",
    },
    {
      name: "UX/UI",
      description:
        "Design e implementação de interfaces de usuário intuitivas e atraentes para proporcionar uma experiência de usuário excepcional.",
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
    <div className="space-y-8 pb-8 animation-slide-up">
      <h2 className="text-neutral-300 text-2xl font-bold font-mono">
        Sobre mim
      </h2>

      <div className="bg-neutral-900/40 grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-3 space-y-4">
          <Image
            src="/images/1710776694538-01.jpeg"
            alt="genilson-fernandes"
            width={300}
            height={300}
            className="w-full h-80 object-cover bg-neutral-900/80 filter grayscale"
          />
        </div>
        <div className="space-y-4 p-4 col-span-12 sm:col-span-9">
          <h1 className="text-2xl font-bold text-neutral-300 font-mono">
            👋 Olá! Sou Genilson Fernandes
          </h1>
          <p className="text-neutral-400 font-mono">
            Desenvolvedor Frontend com uma formação em design. Minha jornada
            profissional é criar experiências digitais significativas e
            funcionais.
          </p>
          <p className="text-neutral-400 font-mono">
            💼 Com experiência valiosa na Beuni Tech e na Teamsoft, contribuí
            para o desenvolvimento de soluções robustas e inovadoras. Meu
            compromisso em resolver problemas e implementar novas
            funcionalidades tem sido constante em cada projeto em que estive
            envolvido.
          </p>
          <p className="text-neutral-400 font-mono">
            🚀 Ao longo dos anos, aprimorei minha compreensão de processos e
            resolução de problemas complexos, sempre buscando entregar soluções
            de alta qualidade. Estou empenhado em aprender e crescer
            profissionalmente, buscando constantemente aprimorar minhas
            habilidades técnicas e soft skills.
          </p>
          <ul className="flex gap-2 mt-6">
            {socials.map((item) => (
              <li key={item.name}>
                <AnchorButton href={item.path}>{item.name}</AnchorButton>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Section title="Interesses">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {stacks.map((stack) => (
            <Stack key={stack.name} {...stack} />
          ))}
        </div>
      </Section>

      <Section title="Stacks">
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <Tag key={skill} name={skill} />
          ))}
        </div>
      </Section>
      <Section title="Escolaridade">
        <div>
          <h3 className="text-neutral-300 text-md font-bold font-mono">
            Anhanguera - Análise E Desenvolvimento De Sistemas
          </h3>
          <span className="text-neutral-400 text-sm mt-4">
            Sistemas jun de 2022 - jun de 2024
          </span>
          <p className="text-neutral-400 text-sm mt-4"></p>
          <p className="text-neutral-400 text-sm mt-4">
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
