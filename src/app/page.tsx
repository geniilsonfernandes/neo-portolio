"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";

import { blogPosts, jobs, projects } from "@/cms";
import About from "@/components/About";
import AnchorButton from "@/components/AnchorButton";
import Blog from "@/components/Blog";
import Button from "@/components/Button";
import Job from "@/components/Job";
import Project from "@/components/Project";
import Section from "@/components/Section";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";

export default function Home() {
  const [containerSize, setContainerSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollY } = useScroll();
  const router = useRouter();

  const transform = useTransform(
    scrollY,
    [0, containerSize],
    [0, -containerSize]
  );
  const spring = useSpring(transform, {
    damping: 10,
    restDelta: 0.001,
  });
  useEffect(() => {
    if (containerRef.current) {
      setContainerSize(containerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <Header />
      <About />
      <Section title="Projetos">
        <div className="space-y-12">
          {projects.slice(0, 3).map((project, i) => (
            <Project
              key={project.id}
              path={project.id}
              onClick={() => router.push(`project/${project.id}`)}
              {...project}
              hiddenCover
            />
          ))}
        </div>

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
      <Section title="Experiências">
        {jobs &&
          jobs.slice(0, 3).map((job, i) => <Job key={i} {...job} small />)}
        <Button onClick={() => router.push("/experience")}>
          Ver todas as experiências
        </Button>
      </Section>
    </>
  );
}
