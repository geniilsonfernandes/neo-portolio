import { jobs } from "@/cms";
import { BackEndSection } from "@/components/BackEndSection";
import { FrontEndSection } from "@/components/FrontEndSection";
import { GraduationSection } from "@/components/GraduationSection";
import Job from "@/components/Job";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Section } from "@/components/Section";
import { TestingSection } from "@/components/TestingSection";
import { Metadata } from "next";
import { Header } from "../components/Header";
import { getProjects } from "./actions";

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
  const data = await getProjects();

  return (
    <div className="container mx-auto">
      <Header />
      <ProjectsSection data={data} />

      <Section title="My Technologies and tools" id="technologies">
        <LanguagesSection />
        <FrontEndSection />
        <BackEndSection />
        <TestingSection />
      </Section>
      <Section title="Experience" id="experience">
        <div className="space-y-2">
          {jobs && jobs.map((job, i) => <Job key={i} {...job} />)}
        </div>
      </Section>
      <Section title="Graduation and Courses" id="graduation-and-courses">
        <GraduationSection />
      </Section>
    </div>
  );
}
