import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Section } from "@/components/Section";
import { Metadata } from "next";
import { Header } from "../components/Header";

import {
  BackEndTechnologies,
  FrontEndTechnologies,
  technologies,
  TestingTechnologies,
} from "@/cms/data";
import { BadgeGroup } from "@/components/BadgeGroup";

export const metadata: Metadata = {
  title: "Ge | Desenvolvedor Full Stack",
  description:
    "Portfólio pessoal com projetos, experiências profissionais e tecnologias que utilizo no desenvolvimento web e mobile.",
  openGraph: {
    title: "Ge | Desenvolvedor Full Stack",
    description:
      "Conheça meus projetos, stack de tecnologias e experiências profissionais.",
    url: "https://genilsondev.vercel.app/",
    siteName: "Ge | Desenvolvedor Full Stack",
    images: [
      {
        url: "/default-og.png",
        width: 1200,
        height: 630,
        alt: "Imagem de capa do portfólio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ge | Desenvolvedor Full Stack",
    description: "Veja meus projetos e experiências como desenvolvedor.",
    images: ["/default-og.png"],
  },
};

export default async function Home() {
  return (
    <div className="container mx-auto">
      <Header />

      <Section
        className="mt-16 animate-fade-up animate-once animate-delay-[500ms] animate-ease-in-out"
        title="Projects"
        id="projects"
        aria-labelledby="projects"
      >
        <ProjectsGrid />
      </Section>
      <Section
        className="mt-16"
        title="My Technologies and tools"
        id="technologies"
      >
        <BadgeGroup
          id="technologies"
          title="Technologies Used"
          items={technologies}
        />
        <BadgeGroup
          id="front-end-technologies"
          title="Front-end Technologies"
          items={FrontEndTechnologies}
        />
        <BadgeGroup
          id="back-end-technologies"
          title="Back-end Technologies"
          items={BackEndTechnologies}
        />
        <BadgeGroup
          id="testing-technologies"
          title="Testing Technologies"
          items={TestingTechnologies}
        />
      </Section>

    </div>
  );
}
