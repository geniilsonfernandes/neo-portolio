import { Footer } from "@/components/Footer";

import { jobs } from "@/cms";
import { BackEndSection } from "@/components/BackEndSection";
import { Contact } from "@/components/Contact";
import { FrontEndSection } from "@/components/FrontEndSection";
import { GraduationSection } from "@/components/GraduationSection";
import Job from "@/components/Job";
import { LanguagesSection } from "@/components/LanguagesSection";
import { IProject } from "@/components/ProjectCard";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Section } from "@/components/Section";
import { TestingSection } from "@/components/TestingSection";
import { Header } from "../components/Header";

export const projects = [
  {
    id: "1618d3b7-8a16-80d2-bc23-e8b6a53afc84",
    title: "Pango | Shopping List",
    description: `Pango is a shopping list application designed to simplify your shopping experience. With Pango, users can:
Create, edit, and manage their shopping lists.
Share lists with other users for collaborative shopping.
Explore and view public lists shared by other users.
Whether you're planning your weekly groceries or organizing a group shopping trip, Pango helps you stay on track.`,
    demo: "https://pangolist.netlify.app/",
    github: "https://github.com/geniilsonfernandes/pango-front-end",
    technologies: ["Nodejs", "React", "Tailwind", "TypeScript"],
  },
  {
    id: "9c1c6f9aADADADbc23-e8b6a53afc84",
    title: "Just Travel | Front end",
    description: `Just Travel is a web application that allows users to plan and manage their travel experiences`,
    demo: "https://just-travel-tau.vercel.app/",
    github: "https://github.com/geniilsonfernandes/just-travel",
    storybook:
      "https://65cbede3c9638330bc52e843--dreamy-shortbread-14a8ff.netlify.app/",
    technologies: ["Nextjs", "React", "Tailwind", "TypeScript"],
  },
  {
    id: "9c1c6f9a-8aDASD3-e8b6a53afc84",
    title: "Money Guard | Front end",
    description: `Money Guard is a financial management app focused on monthly budgeting, setting goals, and centering around the user’s salary. With it, users can efficiently track their income, set objectives, and save their hard-earned money.`,
    demo: "https://moneyguard.netlify.app/",
    github: "https://github.com/geniilsonfernandes/moneyguard",
    technologies: ["React", "Tailwind", "TypeScript", "Nodejs"],
  },
  {
    id: "9c1c6f9aePaper | Frontend",
    title: "ePaper | Frontend",
    description: `This project was developed as part of a practical test for a selection process. The goal was to build a frontend application efficiently while adhering to development best practices, with a focus on performance optimization and compliance with the proposed design.`,
    demo: "https://e-paper-teste-front-end.vercel.app/",
    youtube: "https://www.youtube.com/embed/CVMx3trycY0?si=I9t4fpuCabmI1Km4",
    github: "https://github.com/geniilsonfernandes/e-paper-teste-front-end",
    technologies: ["React", "Tailwind", "TypeScript", "Nextjs"],
  },
] as IProject[];

export default async function Home() {
  return (
    <div className="flex lg:flex-row flex-col">
      <aside
        className="lg:max-w-[480px] p-4 py-8 lg:sticky top-0 lg:h-[100vh]"
        aria-label="Main Header"
      >
        <header className="flex items-center justify-between border rounded-md bg-white p-4 mb-4 lg:hidden">
          <Contact />
        </header>
        <Header />
      </aside>

      <main className="px-4 py-8">
        <header className="items-center justify-between border rounded-md bg-white p-4 hidden lg:flex sticky top-8 z-50">
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
