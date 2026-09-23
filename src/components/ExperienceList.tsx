import { cn } from "@/utils";
import { Badge } from "./Badge";
import { IconCalendar } from "@tabler/icons-react";

type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Synergia - UFMG",
    period: "Jan 2026 – Present",
    current: true,
    highlights: [
      "Built a robust full stack architecture with Node.js/NestJS, React.js and TypeScript.",
      "Implemented scalable microservices using Kafka and RabbitMQ for messaging.",
      "Used Docker and Kubernetes for containerization and orchestration, along with CI/CD pipelines.",
      "Rigorously applied SOLID and Clean Code principles to ensure software quality, maintainability and scalability.",
      "Managed version control and development workflow with Git.",
    ],
    stack: ["TypeScript", "Node.js", "NestJS", "React", "Kafka", "RabbitMQ", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    role: "Front-end Developer",
    company: "SpotX",
    period: "Feb 2024 – Dec 2024",
    highlights: [
      "Created a design system and standardized components.",
      "Defined architecture patterns and development best practices.",
      "Implemented automated tests with Jest and Vitest.",
      "Integrated and orchestrated RESTful APIs and third-party services.",
      "Ensured scalability and reliability of the production environment.",
    ],
    stack: ["TypeScript", "React", "Design System", "Jest", "Vitest", "REST APIs"],
  },
  {
    role: "Full Stack Developer",
    company: "Beuni Tech",
    period: "Jun 2023 – Feb 2024",
    highlights: [
      "Developed an interactive dashboard for subscription management.",
      "Implemented an analytics system to consolidate data and generate insights.",
      "Integrated relational and non-relational databases (PostgreSQL, MongoDB).",
      "Optimized queries and data flows to improve efficiency.",
      "Applied agile methodologies (Scrum/Kanban) for continuous delivery.",
    ],
    stack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "Scrum"],
  },
  {
    role: "Software Developer",
    company: "TeamSoft",
    period: "Jun 2022 – Jul 2023",
    highlights: [
      "Developed logistics rule engines for inventory optimization.",
      "Structured data integrations and persistence in relational databases.",
      "Implemented load testing and API performance monitoring.",
      "Took part in agile ceremonies, proposing continuous improvements.",
      "Implemented API integrations and reusable components.",
    ],
    stack: ["TypeScript", "Node.js", "NestJS", "SQL", "Load Testing"],
  },
];

export const ExperienceList = () => {
  return (
    <ol className="relative mt-4 border-l border-slate-200 dark:border-midnight-700 list-none">
      {experiences.map((experience, i) => (
        <li
          key={`${experience.company}-${experience.period}`}
          className="relative pl-6 pb-8 last:pb-0 animate-fade-up animate-once animate-ease-in-out"
          style={{ animationDelay: `${600 + i * 100}ms` }}
        >
          <span
            aria-hidden
            className={cn(
              "absolute -left-[5px] top-6 h-[9px] w-[9px] border",
              experience.current
                ? "bg-emerald-500 border-emerald-400"
                : "bg-slate-200 border-slate-300 dark:bg-midnight-700 dark:border-midnight-500"
            )}
          />

          <article className="p-4 bg-white dark:bg-midnight-900 hover:dark:bg-midnight-800 border border-slate-200 dark:border-midnight-800 hover:shadow-lg hover:shadow-midnight-500/10 transition-all duration-200 ease-in-out">
            <header className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {experience.role}
                </h3>
                <p className="text-sm text-slate-500 dark:text-white/50">
                  {experience.company}
                </p>
              </div>

              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-semibold border",
                  experience.current
                    ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900"
                    : "bg-gray-100 dark:bg-midnight-800 text-slate-600 dark:text-white/60 border-gray-200 dark:border-midnight-700"
                )}
              >
                <IconCalendar size={14} stroke={1.5} />
                {experience.period}
              </span>
            </header>

            <ul className="mt-4 space-y-2 list-none">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-4 text-sm font-light leading-6 text-slate-600 dark:text-white/70 before:absolute before:left-0 before:top-[10px] before:h-1 before:w-1 before:bg-slate-400 dark:before:bg-midnight-100"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2 list-none" aria-label="Technologies">
              {experience.stack.map((tech) => (
                <li key={tech}>
                  <Badge label={tech} className="px-2 py-0.5 text-xs" />
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
};
