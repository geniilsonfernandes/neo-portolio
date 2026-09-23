import { experiences } from "./ExperienceList";

const CAREER_START = new Date(2022, 5); // Jun 2022, first role at TeamSoft

const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

const highlights = [
  { value: `${yearsOfExperience}+`, label: "Years of experience" },
  { value: `${experiences.length}`, label: "Companies" },
  { value: "Full Stack", label: "Node.js · React · TypeScript" },
];

export const Highlights = () => {
  return (
    <dl className="mt-12 grid grid-cols-3 border border-slate-200 dark:border-midnight-800 divide-x divide-slate-200 dark:divide-midnight-800 animate-fade-up animate-once animate-delay-[500ms] animate-ease-in-out">
      {highlights.map((highlight) => (
        <div
          key={highlight.label}
          className="flex flex-col-reverse gap-1 p-3 sm:p-4 bg-white dark:bg-midnight-900"
        >
          <dt className="text-xs font-light text-slate-500 dark:text-white/50">
            {highlight.label}
          </dt>
          <dd className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {highlight.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};
