import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Section } from "@/components/Section";
import { Metadata } from "next";
import { Header } from "../components/Header";
import { getProjects } from "./actions";

import {
  BackEndTechnologies,
  FrontEndTechnologies,
  technologies,
  TestingTechnologies,
} from "@/cms/data";
import { BadgeGroup } from "@/components/BadgeGroup";
import { FloatingPlayer } from "@/components/floating-player";
import { BorderRadius } from "@/modules/lab/components/border-radius";
import { DragToExpanded } from "@/modules/lab/components/drag-to-expanded";
import { Increment } from "@/modules/lab/components/incremenent";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

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

const LabCard: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div className="w-full h-60 bg-slate-100 dark:bg-midnight-800 border dark:border-midnight-700 rounded-2xl flex items-center px-4 justify-center overflow-hidden group/lab relative">
      {children}
      <div className="absolute -bottom-4 left-4 group-hover/lab:bottom-4 transition-bottom duration-300">
        <Link
          rel="stylesheet"
          href={"https://github.com/genilsondev/floating-player"}
          className="text-xs text-foreground dark:text-white underline"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

const BlogPost: React.FC<{
  title: string;
  description: string;
}> = ({ description, title }) => {
  return (
    <li className="dark:hover:bg-midnight-800 hover:bg-slate-200 p-3 pr-6 -mx-3 rounded-md transition-colors duration-100 flex items-center">
      <div className="flex-1 dark:text-white">
        <h4 className="text-foreground dark:text-white underline">{title}</h4>
        <p className="text-muted-foreground dark:text-white/50 mt-2">
          {description}
        </p>
      </div>
      <IconChevronRight className="dark:text-white/50" />
    </li>
  );
};

export default async function Home() {
  const data = await getProjects();

  return (
    <div className="container mx-auto">
      <Header />

      <Section
        className="mt-16 animate-fade-up animate-once animate-delay-[600ms] animate-ease-in-out"
        title="Blog"
        id="blog"
      >
        <ul className="flex gap-1 flex-col">
          <Link href="/posts/floating-player">
            <BlogPost
              title="Motion and Tailwind CSS: Building a grab player animation"
              description="Creating a floating player with tailwind and framer motion"
            />
          </Link>
          <Link href="/posts/animated-color">
            <BlogPost
              title="Hook useAnimatedBackgroundColor"
              description="Animação suave de cores de fundo com Framer Motion"
            />
          </Link>
        </ul>
      </Section>
      <Section
        className="mt-16 animate-fade-up animate-once animate-delay-[500ms] animate-ease-in-out"
        title="Projects"
        id="projects"
        aria-labelledby="projects"
      >
        <ProjectsGrid data={data} />
      </Section>
      <Section
        className="mt-16 animate-fade-up animate-once animate-delay-[400ms] animate-ease-in-out"
        title="Playground lab"
        id="playground-lab"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LabCard title="Floating Player">
            <FloatingPlayer />
          </LabCard>
          <LabCard title="Drag to expanded">
            <DragToExpanded />
          </LabCard>
          <LabCard title="Border Radius">
            <BorderRadius />
          </LabCard>
          <LabCard title="Increment Animation">
            <Increment />
          </LabCard>
        </div>
      </Section>

      {/* blog */}

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
      {/* <Section title="Experience" id="experience">
        <div className="space-y-2">
          {jobs && jobs.map((job, i) => <Job key={i} {...job} />)}
        </div>
      </Section>
      <Section title="Graduation and Courses" id="graduation-and-courses">
        <GraduationSection />
      </Section> */}
    </div>
  );
}
