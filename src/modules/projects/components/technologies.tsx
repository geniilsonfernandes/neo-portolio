"use client";

import React from "react";

type Props = {
  technologies: string[];
};

export const Technologies: React.FC<Props> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2 py-8">
      <span className="font-semibold dark:text-white">Tech stack:</span>
      {technologies?.map((tech, i) => (
        <div key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
          {tech}
        </div>
      ))}
    </div>
  );
};

// url 

