import { Footer } from "@/components/Footer";

import { jobs } from "@/cms";
import { BackEndSection } from "@/components/BackEndSection";
import { Contact } from "@/components/Contact";
import { FrontEndSection } from "@/components/FrontEndSection";
import { GraduationSection } from "@/components/GraduationSection";
import Job from "@/components/Job";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Section } from "@/components/Section";
import { Spotlight } from "@/components/Spotlight";
import { TestingSection } from "@/components/TestingSection";
import { IProject } from "@/types";
import { Header } from "../components/Header";

const projects = [
  {
    id: "a",
    title: "Estimou - Orçamentos Personalizados",
    description:
      "Uma ferramenta que elimina a complexidade e o tempo desperdiçado na criação de orçamentos. Oferece rastreamento de visualização e toque pessoal nas propostas.",
    cover: "https://via.placeholder.com/300x200?text=Estimou",
    status: "Completed",
    type: "Web App",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Firebase"],
    storybook: "https://storybook.estimou.com",
    github: "https://github.com/user/estimou",
    youtube: "https://www.youtube.com/watch?v=estimou-demo",
    demo: "https://estimou.com",
  },
  {
    id: "b",
    title: "Taskify - Gerenciador de Tarefas",
    description:
      "Aplicativo de gerenciamento de tarefas com interface intuitiva e funcionalidades de arrastar e soltar para organizar o seu dia.",
    cover: "https://via.placeholder.com/300x200?text=Taskify",
    status: "In Progress",
    type: "Mobile App",
    technologies: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/user/taskify",
    demo: "https://taskify.app",
  },
  {
    id: "c",
    title: "Lunar Webs - Plataforma de Serviços",
    description:
      "Plataforma onde os usuários podem oferecer e contratar diferentes tipos de serviços, com sistema de avaliações e integração de pagamento.",
    cover: "https://via.placeholder.com/300x200?text=Lunar+Webs",
    status: "Prototype",
    type: "Web App",
    technologies: ["Nextjs", "Prisma", "Tailwind", "TypeScript"],
    storybook: "https://storybook.lunarwebs.com",
    github: "https://github.com/user/lunarwebs",
  },
  {
    id: "d",
    title: "Lunar Webs - Plataforma de Serviços",
    description:
      "Plataforma onde os usuários podem oferecer e contratar diferentes tipos de serviços, com sistema de avaliações e integração de pagamento.",
    cover: "https://via.placeholder.com/300x200?text=Lunar+Webs",
    status: "Prototype",
    type: "Web App",
    technologies: ["Nextjs", "Prisma", "Tailwind", "TypeScript"],
    storybook: "https://storybook.lunarwebs.com",
    github: "https://github.com/user/lunarwebs",
  },
  {
    id: "f",
    title: "Lunar Webs - Plataforma de Serviços",
    description:
      "Plataforma onde os usuários podem oferecer e contratar diferentes tipos de serviços, com sistema de avaliações e integração de pagamento.",
    cover: "https://via.placeholder.com/300x200?text=Lunar+Webs",
    status: "Prototype",
    type: "Web App",
    technologies: ["Nextjs", "Prisma", "Tailwind", "TypeScript"],
    storybook: "https://storybook.lunarwebs.com",
    github: "https://github.com/user/lunarwebs",
  },
] as IProject[];

export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col">
      <aside
        className="lg:max-w-[480px] p-4 py-8 lg:sticky top-0 lg:h-[100vh]"
        aria-label="Main Header"
      >
        <header className="flex items-center justify-between border rounded-md bg-white p-4 mb-4 lg:hidden">
          <Spotlight
            data={[
              ...projects.map((project) => ({
                id: project.id,
                title: project.title,
                description: project.technologies?.join(", ") || "",
                variant: "projects",
              })),
              {
                id: "git2hub",
                title: "GitHub",
                variant: "link",
              },
              {
                id: "github2",
                title: "GitHub",
                variant: "link",
              },
              {
                id: "git1hub2",
                title: "GitHub",
                variant: "link",
              },
            ]}
          />
          <Contact />
        </header>
        <Header />
      </aside>

      <main className="px-4 py-8">
        <header className="items-center justify-between border rounded-md bg-white p-4 hidden lg:flex sticky top-8 z-50">
          <Spotlight
            data={[
              ...projects.map((project) => ({
                id: project.id,
                title: project.title,
                description: project.technologies?.join(", ") || "",
                variant: "projects",
              })),
              {
                id: "git2hub",
                title: "GitHub",
                variant: "link",
              },
              {
                id: "github2",
                title: "GitHub",
                variant: "link",
              },
              {
                id: "git1hub2",
                title: "GitHub",
                variant: "link",
              },
            ]}
          />
          <Contact />
        </header>
        <section aria-labelledby="projects-header">
          <ProjectsSection data={projects} />
        </section>

        <hr className="my-8" />

        <section aria-labelledby="experience-header">
          <h3 id="experience-header" className="font-bold my-6 text-lg">
            Experience
          </h3>
          <div className="space-y-2">
            {jobs && jobs.map((job, i) => <Job key={i} {...job} />)}
          </div>
        </section>

        <hr className="my-8" />

        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          aria-labelledby="skills-header"
        >
          <Section title="Technologies I use" id="technologies">
            <LanguagesSection />
            <FrontEndSection />
            <BackEndSection />
            <TestingSection />
          </Section>
          <Section title="Graduation and Courses" id="graduation-and-courses">
            <GraduationSection />
          </Section>
        </div>

        <Footer />
      </main>
    </div>
  );
}
