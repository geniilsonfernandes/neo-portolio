import { JobProps } from "@/components/Job";

const skills = [
  "C#",
  ".NET",
  "JavaScript",
  "TypeScript",
  "Node",
  "Express",
  "NestJs",
  "Expo",
  "FastifyJs",
  "React",
  "React Native",
  "Vue JS",
  "GraphQL",
  "Next.js",
  "UI/UX",
  "Docker",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "GIT",
  "SOLID",
  "POO",
  "Styled Components",
  "Stiches",
  "Tailwind",
  "Redux",
  "Jest",
  "Vitest",
];

const sections = {
  projects: {
    title: "All projects",
    description:
      "Here are some of the projects I've worked on, focusing on developing efficient and innovative software solutions to tackle complex frontend challenges.",
  },
  about: {
    title: "👋 Hello! I'm Genilson Fernandes",
    history: [
      `Frontend Developer with a background in design. My professional journey is about creating meaningful and functional digital experiences.`,
      ` 💼 With valuable experience at Beuni Tech and Teamsoft, I have contributed to the development of robust and innovative solutions. My commitment to problem-solving and implementing new features has been constant in every project I've been involved in.`,
      ` 🚀 Over the years, I have honed my understanding of processes and complex problem-solving, always striving to deliver high-quality solutions. I am committed to learning and growing professionally, constantly seeking to improve my technical skills and soft skills.`,
    ],
  },
  header: {
    title: "👋 My name is Ge, and I’m a Front-end",
    description: `Frontend Developer with a design background, focused on creating
    functional digital experiences and solving complex problems with high-quality solutions. How can I help you?`,
  },
  footer: {
    title:
      "Always exploring new ways to blend design and technology. Let's build something great together.",
    email: "geniilsonfernandes@gmail.com",
    phone: "+ 55 22 99602 1627",
  },
};

const jobs = [
  {
    company: "Spotx",
    job: "Front-end Software Engineer",
    period: "Mar 2024 - ....",
    description: [
      "As a Fullstack Developer, I work in the team responsible for developing the freight management product, using technologies such as Node.js for the backend and React.js for the web app.",
      "In my daily tasks, I had the opportunity to work with technologies like React Native, Expo, Redux, Styled Components, and automated testing practices.",
    ],
    stacks: [
      "TypeScript",
      "Node",
      "Express",
      "React.js",
      "Automated Testing",
      "MongoDB",
      "Scrum Development",
    ],
  },
  {
    company: "Beuni Tecnologia",
    job: "FullStack Developer",
    period: "Jul 2023 - Feb 2024 · 8 months",
    description: [
      "Beuni is a technology and innovation company focused on purchasing, storing, and shipping gifts and products. I am responsible for the front-end team, implementing new features and improving user experience.",
    ],
    stacks: [
      "TypeScript",
      "Node",
      "Express",
      "NestJs",
      "GraphQL",
      "MongoDB",
      "Scrum Development",
    ],
  },
  {
    company: "TeamSoft Tecnologia e Sistemas",
    job: "Front-end Software Engineer",
    period: "Aug 2022 - Jul 2023 · 7 months",
    description: [
      "As a Frontend Developer at TeamSoft, I was responsible for creating logistics projects, as well as implementing new features and ensuring system quality. I worked on the call center system for Domino's-RJ franchise.",
      "One of the achievements was developing an activity management solution dedicated to optimizing stock preservation, in collaboration with MRO.",
    ],
    stacks: [
      "TypeScript",
      "Node",
      "Prisma ORM",
      "Scrum Development",
      "Express",
      "NestJs",
      "GraphQL",
      "MongoDB",
      "Backend Integration",
    ],
  },
  {
    company: "SIB - Sistema Impulse de Educação Bilíngue",
    job: "Graphic Designer",
    period: "Jan 2018 - Jun 2020 · 2 years 6 months",
    description: [
      "Responsible for developing pieces and managing projects in various offline and online communication areas, creating animations and editing videos, and creating educational materials for teaching methodology and events.",
    ],
    stacks: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "Adobe XD",
      "HTML",
      "CSS",
      "Javascript",
      "React",
    ],
  },
] as JobProps[];

const projects = [
  {
    id: "money_guard",
    title: "Money Guard",
    description: [
      "Money Guard is a financial control app focused on monthly management, setting goals, and having the user's salary as the central point. With it, we can track income more efficiently, set objectives, and save money.",
      "This app was born out of the need to replace Google Sheets with a more complete system. My wife and I faced limitations using Google Sheets to manage our finances, which motivated us to create Money Guard.",
    ],
    type: "front-end",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Typescript",
      "Prisma",
      "Docker",
      "Redux",
      "Jest",
      "Vercel",
      "Figma",
    ],
    cover: "/images/money_guard_cover.png",
    youtube: "https://www.youtube.com/watch?v=QpV5Y5kXbq4",
    github: "https://github.com/geniilsonfernandes/moneyguard",
    status: "ready", // In Progress, Completed
  },
  {
    id: "use-pagination",
    title: "use Hook Pagination",
    description: [
      "usePagination is a custom hook for handling pagination in React applications. With it, you can generate a pagination sequence and navigate between pages.",
      "This hook generates a sequence of pages to render on the screen and allows controlling user action while navigating through them. It's a simple code, but it always helps me when I need to create this type of user interface.",
    ],
    type: "front-end",
    technologies: [
      "Rollup.js",
      "React",
      "Typescript",
      "NPM",
      "TDD",
      "Jest",
      "Hook",
      "Figma",
      "storybook",
    ],
    cover: "/images/use_pagination_cover.png",
    youtube: "https://www.youtube.com/watch?v=QpV5Y5kXbq4",
    github: "https://github.com/geniilsonfernandes/use-pagination",
    demo: "https://www.npmjs.com/package/use-pagination-pull",
    status: "ready", // In Progress, Completed
  },
  {
    id: "catalobby",
    title: "Catalobby - Product Catalog",
    description: [
      "Catalobby facilitates the rental of various items for customers who need them temporarily, providing convenience and savings. Developed with meticulous care to provide an intuitive and engaging experience.",
      "An online rental software that works for all popular rental niches.",
    ],
    type: "front-end",
    technologies: [
      "React",
      "Typescript",
      "NPM",
      "TDD",
      "Vite",
      "Hook",
      "Figma",
      "storybook",
    ],
    cover: "/images/catalobby_cover.png",
    youtube: "https://www.youtube.com/watch?v=QpV5Y5kXbq4",
    github: "https://github.com/geniilsonfernandes/catalobby-clientn",
    status: "progress", // In Progress, Completed
  },
  {
    id: "just-travel",
    title: "Just Travel | Front end",
    description: [
      "For the selection process at Just Travel, I developed a ticket listing application with data pagination. I used Storybook and performed automated tests throughout the workflow.",
      "I adopted unit testing using the Vitest library, covering everything from basic conditional rendering functions to more complex operations related to cart management.",
    ],
    type: "front-end",
    technologies: [
      "Next.js",
      "React",
      "Typescript",
      "NPM",
      "TDD",
      "Vitest",
      "Hook",
      "Figma",
      "storybook",
    ],
    cover: "/images/just_travel_cover.png",
    youtube: "https://www.youtube.com/watch?v=QpV5Y5kXbq4",
    github: "https://github.com/geniilsonfernandes/just-travel",
    demo: "https://just-travel-tau.vercel.app/",
    status: "ready", // In Progress, Completed
  },
  {
    id: "moneyguard-api",
    title: "Money Guard API Back end",
    description: [
      "Money Guard is a financial control app focused on monthly management, setting goals, and having the user's salary as the central point. With it, we can track income more efficiently, set objectives, and save money.",
      "This app was born out of the need to replace Google Sheets with a more complete system. My wife and I faced limitations using Google Sheets to manage our finances, which motivated us to create Money Guard.",
    ],
    type: "Back-end",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Typescript",
      "Prisma",
      "Docker",
      "Redux",
      "Jest",
      "Vercel",
      "Figma",
    ],
    cover: "/images/money_guard_cover.png",
    youtube: "https://www.youtube.com/watch?v=QpV5Y5kXbq4",
    github: "https://github.com/geniilsonfernandes/moneyguard",
    status: "ready", // In Progress, Completed
  },
  {
    id: "crm-dashboard",
    title: "CRM Dashboard | Front end | Back end",
    description: [
      "In this project, Docker was used to simulate production and development environments. Additionally, Redis and BullMQ were employed for asynchronous and parallel data processing.",
    ],
    type: "Back-end",
    technologies: [
      "React",
      "Tailwind",
      "Typescript",
      "Prisma",
      "Docker",
      "Redux",
      "Jest",
      "Vercel",
      "Figma",
      "Redis",
      "BullMQ",
      "Express",
      "MongoDB",
    ],
    cover: "/images/crm_app_cover.png",
    youtube: "https://www.youtube.com/watch?v=QpV5Y5kXbq4",
    github: "https://github.com/geniilsonfernandes/crm-dashboard",
    status: "ready", // In Progress, Completed
  },
] as ProjectProps[];
export type ProjectProps = {
  id: string;
  title: string;
  description: string[];
  type: string;
  technologies: string[];
  cover: string;
  youtube: string;
  github: string;
  demo: string;
  status: "ready" | "progress" | "paused";
};

export { jobs, projects, skills, sections };
