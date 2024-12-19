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
import { ISpotlightOption, Spotlight } from "@/components/Spotlight";
import { TestingSection } from "@/components/TestingSection";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconCode,
  IconFileTypeDocx,
} from "@tabler/icons-react";
import { Header } from "../components/Header";
import { getProjects } from "./actions";

export default async function Home() {
  const projects = await getProjects();

  const spotlight: ISpotlightOption[] = [
    ...projects?.map((project) => ({
      id: project.id,
      title: project.title || "",
      description: project.description || "",
      variant: "projects",
      value: project.demo,
    })),
    {
      id: "threads",
      title: "Threads",
      variant: "link",
      icon: <IconBrandThreads size={18} stroke={1} />,
      value: "https://threads.net/@gefernandes",
    },
    {
      id: "github",
      title: "Github",
      variant: "link",
      icon: <IconBrandGithub size={18} stroke={1} />,
      value: "https://github.com/geniilsonfernandes",
    },
    {
      id: "linkedin",
      title: "Linkedin",
      variant: "link",
      icon: <IconBrandLinkedin size={18} stroke={1} />,
      value: "https://www.linkedin.com/in/genilson-fernandes-489870320/",
    },
    {
      id: "instagram",
      title: "Instagram",
      variant: "link",
      icon: <IconBrandInstagram size={18} stroke={1} />,
      value: "https://www.instagram.com/genilsonfernandes_",
    },
    {
      id: "devto",
      title: "Dev.to",
      variant: "link",
      icon: <IconCode size={18} stroke={1} />,
      value: "https://dev.to/geniilsonfernandes",
    },
    {
      id: "cv",
      title: "CV",
      variant: "others",
      icon: <IconFileTypeDocx size={18} stroke={1} />,
      value:
        "https://docs.google.com/document/d/e/2PACX-1vR_6I_IYYlFP8xZFukZJP5t0rTY19XRm55AjyOde9h0kBCvZ-FUbjCy3Qfo7gmBc8NeymdRcwbKaZmt/pub",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col">
      <aside
        className="lg:max-w-[480px] p-4 py-8 lg:sticky top-0 lg:h-[100vh]"
        aria-label="Main Header"
      >
        <header className="flex items-center justify-between border rounded-md bg-white p-4 mb-4 lg:hidden">
          <Spotlight data={spotlight} />
          <Contact />
        </header>
        <Header />
      </aside>

      <main className="px-4 py-8">
        <header className="items-center justify-between border rounded-md bg-white p-4 hidden lg:flex sticky top-8 z-50">
          <Spotlight data={spotlight} />
          <Contact />
        </header>

        {projects.length > 0 && (
          <section aria-labelledby="projects-header">
            <ProjectsSection data={projects} />
          </section>
        )}

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
