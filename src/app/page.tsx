"use client";
import { blogPosts, jobs, projects } from "@/cms";
import About from "@/components/About";
import AnchorButton from "@/components/AnchorButton";
import Blog from "@/components/Blog";
import Button from "@/components/Button";
import Job from "@/components/Job";
import Project from "@/components/Project";
import Section from "@/components/Section";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <About />
      <Section title="Projetos">
        {projects.slice(0, 3).map((project, i) => (
          <Project
            key={project.id}
            path={project.id}
            {...project}
            hiddenCover
          />
        ))}

        <Button onClick={() => router.push("/projects")}>
          Ver todos projetos
        </Button>
      </Section>

      <Section title="Blog">
        {blogPosts &&
          blogPosts.slice(0, 3).map((post, i) => <Blog key={i} {...post} />)}
        <AnchorButton
          href="https://dev.to/geniilsonfernandes"
          target="_blank"
          variant="button"
        >
          Ver todos os posts
        </AnchorButton>
      </Section>
      <Section title="Experiencias">
        {jobs &&
          jobs.slice(0, 3).map((job, i) => <Job key={i} {...job} small />)}
        <Button onClick={() => router.push("/experience")}>
          Ver todas as experiências
        </Button>
      </Section>
    </>
  );
}
