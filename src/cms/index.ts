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

const jobs = [
  {
    company: "Spotx",
    job: "Software Enginner Front-end",
    period: "mar de 2024 - ....",
    description: [
      "Como Desenvolvedor Fullstack, trabalho no time responsável no desenvolvimento do produto de gestão de frete, utilizando tecnologias como Node.js para o backend e React.js para o app web.",
      "No dia a dia, tive a oportunidade de trabalhar com tecnologias como React Native, Expo, Redux, Styled Components, Prática com testes automatizados.",
    ],
    stacks: [
      "TypeScript",
      "Node",
      "Express",
      "React.js",
      "testes automatizados",
      "MongoDB",
      "desenvolvimento Scrum",
    ],
  },
  {
    company: "Beuni tecnologia",
    job: "FullStack Developer",
    period: "jul de 2023 - fev de 2024 · 8 meses",
    description: [
      "O Beuni é uma empresa de tecnologia e inovação a de compra, armazenamento e envio de brindes e produtos. Atuo no time como responsável pelo front end implementando novas features e melhorado a experiência dos usuários.",
    ],
    stacks: [
      "TypeScript",
      "Node",
      "Express",
      "NestJs",
      "GraphQL",
      "MongoDB",
      "desenvolvimento Scrum",
    ],
  },
  {
    company: "TeamSoft Tecnologia e Sistemas",
    job: "Software Enginner Front-end",
    period: "ago de 2022 - jul de 2023 · 7 meses",
    description: [
      "Como Desenvolvedor Frontend na Team Soft, fui responsável por criar projetos logísticos, além de implementar novas funcionalidades e garantir a qualidade do sistema. Trabalhei no sistema de call center para a franquia Domino 's-RJ",
      " Uma das realizações foi o desenvolvimento de uma solução de gestão de atividades dedicada à otimização da preservação de estoques, em colaboração com a empresa MRO.",
    ],
    stacks: [
      "TypeScript",
      "Node",
      "Prisma ORM",
      "desenvolvimento Scrum",
      "Express",
      "NestJs",
      "GraphQL",
      "MongoDB",
      "Integração com backend",
    ],
  },
  {
    company: "Sib - Sistema Impulse de Educação Bilíngue",
    job: "Designer gráfico",
    period: "jan de 2018 - jun de 2020 · 2 anos 6 meses",
    description: [
      "Responsável por desenvolver peças e gerenciar projetos em diversas áreas de comunicação offline e online, criação de animações e edição de vídeos, material didático para uso da metodologia de ensino aplicada e eventos.",
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
      "Money Guard é um aplicativo de controle financeiro focado na gestão mensal, estabelecendo metas e tendo como ponto central o salário do usuário. Com ele, podemos acompanhar de forma mais eficiente o que recebemos, estabelecer objetivos e economizar nossa graninha.",
      "Este aplicativo nasceu da necessidade de substituir o uso do Google Sheets por um sistema mais completo. Eu e minha esposa enfrentamos limitações ao utilizar o Google Sheets para gerenciar nossas finanças, o que nos motivou a criar o Money Guard",
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
    status: "ready", // Em andamento, Concluído
  },
  {
    id: "use-pagination",
    title: "use Hook Pagination pull",
    description: [
      "usePagination é um hook personalizado para lidar com paginação em aplicativos React. Com ele você pode gerar uma sequência de paginação e navegar entre as páginas.",
      "Este hook gera uma sequência de páginas para renderizar na tela e permite controlar a ação do usuário ao navegar entre elas. É um código simples, mas que sempre me ajuda quando preciso criar esse tipo de interface de usuário",
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
    status: "ready", // Em andamento, Concluído
  },
  {
    id: "catalobby",
    title: "Catalobby - Catalogo de produtos",
    description: [
      "ParaFacilitar o aluguel de uma variedade de itens para clientes que precisam temporariamente, proporcionando conveniência e economia. Desenvolvido com cuidado meticuloso para proporcionar uma experiência auto-intuitiva e envolvente.",
      "Um software de aluguel online que funciona para todos os nichos de aluguel populares",
    ],
    type: "front-end",
    technologies: [
      "React",
      "Typescript",
      "NPM",
      "TDD",
      "Vites",
      "Hook",
      "Figma",
      "storybook",
    ],
    cover: "/images/catalobby_cover.png",
    youtube: "https://www.youtube.com/watch?v=QpV5Y5kXbq4",
    github: "https://github.com/geniilsonfernandes/catalobby-clientn",
    status: "progress", // Em andamento, Concluído
  },
  {
    id: "just-travel",
    title: "Just travel | Front end",
    description: [
      "Para o processo seletivo na Just Travel, desenvolvi uma aplicação de listagem de ingressos com paginação de dados. Utilizei Storybook e realizei testes automatizados em todo o fluxo de trabalho.",
      "Adotei testes unitários utilizando a biblioteca Vitest, os quais cobriram desde funções básicas de renderização condicional até operações mais complexas, como aquelas relacionadas à manipulação do carrinho. ",
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
    status: "ready", // Em andamento, Concluído
  },
  {
    id: "moneyguard-api",
    title: "Money Guard api Back end",
    description: [
      "Money Guard é um aplicativo de controle financeiro focado na gestão mensal, estabelecendo metas e tendo como ponto central o salário do usuário. Com ele, podemos acompanhar de forma mais eficiente o que recebemos, estabelecer objetivos e economizar nossa graninha.",
      "Este aplicativo nasceu da necessidade de substituir o uso do Google Sheets por um sistema mais completo. Eu e minha esposa enfrentamos limitações ao utilizar o Google Sheets para gerenciar nossas finanças, o que nos motivou a criar o Money Guard",
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
    status: "ready", // Em andamento, Concluído
  },
  {
    id: "crm-dashboard",
    title: "CRM Dashboard | Front end | Back end",
    description: [
      "Neste projeto, foi utilizado o Docker para simular ambientes de produção e desenvolvimento. Além disso, o Redis e o BullMQ estão sendo empregados para o processamento de dados de maneira assíncrona e paralela.",
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
    status: "ready", // Em andamento, Concluído
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

export { jobs, projects, skills };
