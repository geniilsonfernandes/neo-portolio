import { FloatingPlayer } from "@/components/floating-player";
import { Section } from "@/components/Section";
import Link from "next/link";
import React from "react";
import { BorderRadius } from "../components/border-radius";
import { DragToExpanded } from "../components/drag-to-expanded";
import { Increment } from "../components/Increment";

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

export const Labs = () => {
  return (
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
  );
};
