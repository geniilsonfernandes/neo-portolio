"use client";
import About from "@/components/About";
import Button from "@/components/Button";
import Project from "@/components/Project";
import Section from "@/components/Section";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <About />
      <Section title="Projetos">
        <Project path="1" />
        <Project path="2" />
        <Project path="3" />
        <Button onClick={() => router.push("/projects")}>
          Ver todos projetos
        </Button>
      </Section>

      <Section title="Blog">
        <Button>Ver todos</Button>
      </Section>
      <Section title="Experiencias">
        <Button>Ver todos</Button>
      </Section>
    </>
  );
}
