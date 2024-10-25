"use client";

import React, { useState } from "react";
import { FloatingIndicator } from "../FloatingIndicator";
import { projects, sections } from "@/cms";
import { cn } from "@/utils";
import Link from "next/link";
import Project from "../Project";

type ProjectProps = {
  showStatus?: boolean;
};

export const Projects = ({ showStatus = false }: ProjectProps) => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLDivElement | null>
  >({});
  const [active, setActive] = useState("0");

  const setProjectRef = (name: string) => (node: HTMLDivElement) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  type StackStatusProps = {
    name: string;
    percent?: number;
  };
  const StackStatus = ({ name, percent = 0 }: StackStatusProps) => {
    return (
      <div className="border-l border-neutral-800 pl-4 w-full">
        <h3 className="font-mono font-bold mb-8">{name}</h3>
        <div className="w-full h-20 bg-neutral-900 relative flex items-end">
          <div
            className="text-neutral-300 font-mono font-bold absolute flex justify-center items-center w-full bg-neutral-700"
            style={{ height: `${percent}%` }}
          >
            {percent}%
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects">
      <h1 className="text-4xl font-bold text-center">
        {sections.projects.title}
      </h1>
      <p className="text-lg font-normal text-center leading-6 mt-8 ">
        {sections.projects.description}
      </p>
      {!showStatus ? null : (
        <div className="flex justify-between gap-2 my-8 ">
          <StackStatus name="Front-end" percent={50} />
          <StackStatus name="Back-end" percent={20} />
          <StackStatus name="Mobile" percent={30} />
        </div>
      )}
      <div className="grid grid-cols-1 pt-8 relative" ref={setRootRef}>
        <FloatingIndicator target={controlsRefs[active]} parent={rootRef} />
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={setProjectRef(i.toString())}
            onMouseEnter={() => setActive(i.toString())}
            className={cn(
              "cursor-pointer",
              active === i.toString() ? "text-neutral-100 " : ""
            )}
          >
            <Project
              key={project.id}
              projectNumber={i + 1}
              path={project.id}
              {...project}
              hiddenCover
            />
          </div>
        ))}
      </div>
    </section>
  );
};
