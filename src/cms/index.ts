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

const stacks = [
  "front-end",
  "back-end",
  "mobile",
  "automated-testing",
  "clean-code",
  "ux-ui",
];
const socials = [
  {
    name: "Github",
    path: "https://github.com/geniilsonfernandes",
  },
  {
    name: "Twitter",
    path: "https://twitter.com/genilsonf_",
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/genilson-fernandes/",
  },
  {
    name: "dev.to",
    path: "https://dev.to/geniilsonfernandes",
  },
];

const jobs = [
  {
    company: "Spotx",
    job: "Front-end Software Engineer",
    period: "jan 2024 - Dec 2024 · 1 year",
    description: {
      pt: [
        "Como Desenvolvedor Fullstack, trabalho na equipe responsável pelo desenvolvimento do produto de gestão de frete, utilizando tecnologias como Node.js para o backend e React.js para o aplicativo web.",
        "Nas minhas tarefas diárias, tive a oportunidade de trabalhar com tecnologias como React Native, Expo, Redux, Styled Components e práticas de testes automatizados.",
      ],
      en: [
        "As a Fullstack Developer, I work in the team responsible for developing the freight management product, using technologies such as Node.js for the backend and React.js for the web app.",
        "In my daily tasks, I had the opportunity to work with technologies like React Native, Expo, Redux, Styled Components, and automated testing practices.",
      ],
    },
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
    description: {
      pt: [
        "A Beuni é uma empresa de tecnologia e inovação focada na compra, armazenamento e envio de presentes e produtos. Sou responsável pela equipe de front-end, implementando novas funcionalidades e aprimorando a experiência do usuário.",
      ],
      en: [
        "Beuni is a technology and innovation company focused on purchasing, storing, and shipping gifts and products. I am responsible for the front-end team, implementing new features and improving user experience.",
      ],
    },
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
    description: {
      pt: [
        "Como Desenvolvedor Frontend na TeamSoft, fui responsável por criar projetos de logística, além de implementar novas funcionalidades e garantir a qualidade do sistema. Trabalhei no sistema de call center da franquia Domino's-RJ.",
        "Um dos destaques foi o desenvolvimento de uma solução de gestão de atividades dedicada à otimização da preservação de estoque, em colaboração com o MRO.",
      ],
      en: [
        "As a Frontend Developer at TeamSoft, I was responsible for creating logistics projects, as well as implementing new features and ensuring system quality. I worked on the call center system for Domino's-RJ franchise.",
        "One of the achievements was developing an activity management solution dedicated to optimizing stock preservation, in collaboration with MRO.",
      ],
    },
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
] as JobProps[];

const projects = [
  {
    id: "estimou",
    title: "Estimou - Orçamentos personalizados",
    description: {
      pt: [
        "Estimou é a ferramenta que elimina a complexidade e o tempo perdido com orçamentos. Chega de enviar propostas via PDF ou WhatsApp sem controle de visualização e sem personalidade.",
        "Com o Estimou, você cria orçamentos personalizados em segundos e envia um link exclusivo e profissional para cada cliente. Assim, você transforma suas propostas em conversas ágeis e altamente eficazes, gerando mais confiança e fechando negócios mais rápido.",
      ],
      en: [
        "Estimou is the tool that eliminates the complexity and wasted time in creating estimates. No more sending proposals through PDF or WhatsApp without view tracking or personal touch.",
        "With Estimou, you can create customized quotes in seconds and send a unique, professional link to each client. This way, you turn your proposals into quick and highly effective conversations, building trust and closing deals faster.",
      ],
    },
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
    sections: [
      {
        title: "implementations",
        paragraphs: [
          "Este projeto está sendo desenvolvido em React, com Firebase atuando como backend-as-a-service, e integra uma API externa para funcionalidades específicas da aplicação.",
          "Meu principal desafio foi implementar uma solução que facilitasse a criação de orçamentos de maneira dinâmica e intuitiva.",
          "A utilização do Firebase permite sincronizar os orçamentos em tempo real, proporcionando uma experiência fluida e responsiva ao usuário.",
        ],
      },
    ],
    cover: "/images/estumou_cover.png",
    status: "progress",
    link: "https://www.estimou.com/",
  },
  {
    id: "money_guard",
    title: "Money Guard",
    description: {
      pt: [
        "Money Guard é um aplicativo de controle financeiro focado na gestão mensal, definição de metas e tendo o salário do usuário como ponto central. Com ele, podemos acompanhar a renda de forma mais eficiente, definir objetivos e economizar dinheiro.",
        "Este aplicativo nasceu da necessidade de substituir o Google Sheets por um sistema mais completo. Minha esposa e eu enfrentamos limitações ao usar o Google Sheets para gerenciar nossas finanças, o que nos motivou a criar o Money Guard.",
      ],
      en: [
        "Money Guard is a financial control app focused on monthly management, setting goals, and having the user's salary as the central point. With it, we can track income more efficiently, set objectives, and save money.",
        "This app was born out of the need to replace Google Sheets with a more complete system. My wife and I faced limitations using Google Sheets to manage our finances, which motivated us to create Money Guard.",
      ],
    },
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
    sections: [
      {
        title: "implementations",
        paragraphs: [
          "Este projeto estava sendo desenvolvido em React, com Firebase atuando como backend-as-a-service, e integra uma API externa para funcionalidades específicas da aplicação.",
          "Meu principal desafio foi implementar uma solução que facilitasse a criação de orçamentos de maneira dinâmica e intuitiva.",
          "A utilização do Firebase permite sincronizar os orçamentos em tempo real, proporcionando uma experiência fluida e responsiva ao usuário.",
        ],
      },
      {
        title: "design",
        paragraphs: [
          "O principal desafio deste projeto foi a implementação de uma solução que facilitasse a criação de entradas e saidas de maneira dinâmica e intuitiva.",
        ],
        images: [
          "/images/money-01.png",
          "/images/money-02.png",
          "/images/money-03.png",
          "/images/money-04.png",
        ],
      },
    ],
    cover: "/images/money_guard_cover.png",
    github: "https://github.com/geniilsonfernandes/moneyguard",
    status: "ready",
  },
  {
    id: "use-pagination",
    title: "use Hook Pagination",
    description: {
      pt: [
        "usePagination é um hook customizado para lidar com paginação em aplicações React. Com ele, é possível gerar uma sequência de páginas e navegar entre elas.",
        "Este hook gera uma sequência de páginas para renderizar na tela e permite controlar a ação do usuário durante a navegação. É um código simples, mas que sempre me ajuda quando preciso criar esse tipo de interface de usuário.",
      ],
      en: [
        "usePagination is a custom hook for handling pagination in React applications. With it, you can generate a pagination sequence and navigate between pages.",
        "This hook generates a sequence of pages to render on the screen and allows controlling user action while navigating through them. It's a simple code, but it always helps me when I need to create this type of user interface.",
      ],
    },
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
    github: "https://github.com/geniilsonfernandes/use-pagination",
    demo: "https://www.npmjs.com/package/use-pagination-pull",
    status: "ready",
  },
  {
    id: "catalobby",
    title: "Catalobby - Catálogo de Produtos",
    description: {
      pt: [
        "Catalobby facilita a locação de diversos itens para clientes que precisam deles temporariamente, oferecendo conveniência e economia. Desenvolvido com cuidado para proporcionar uma experiência intuitiva e envolvente.",
        "Um software de locação online que atende a todos os nichos de locação populares.",
      ],
      en: [
        "Catalobby facilitates the rental of various items for customers who need them temporarily, providing convenience and savings. Developed with meticulous care to provide an intuitive and engaging experience.",
        "An online rental software that works for all popular rental niches.",
      ],
    },
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
    github: "https://github.com/geniilsonfernandes/catalobby-client",
    status: "progress",
  },
  {
    id: "just-travel",
    title: "Just Travel | Front end",
    description: {
      pt: [
        "Para o processo seletivo da Just Travel, desenvolvi uma aplicação de listagem de passagens com paginação de dados. Utilizei Storybook e realizei testes automatizados em todo o fluxo de trabalho.",
        "Adotei testes unitários utilizando a biblioteca Vitest, cobrindo desde funções de renderização condicional até operações mais complexas relacionadas ao gerenciamento de carrinho.",
      ],
      en: [
        "For the selection process at Just Travel, I developed a ticket listing application with data pagination. I used Storybook and performed automated tests throughout the workflow.",
        "I adopted unit testing using the Vitest library, covering everything from basic conditional rendering functions to more complex operations related to cart management.",
      ],
    },
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
    github: "https://github.com/geniilsonfernandes/just-travel",
    demo: "https://just-travel-tau.vercel.app/",
    status: "ready",
  },
  {
    id: "moneyguard-api",
    title: "Money Guard API Back end",
    description: {
      pt: [
        "Money Guard é um aplicativo de controle financeiro focado na gestão mensal, definição de metas e tendo o salário do usuário como ponto central. Com ele, podemos acompanhar a renda de forma mais eficiente, definir objetivos e economizar dinheiro.",
        "Este aplicativo nasceu da necessidade de substituir o Google Sheets por um sistema mais completo. Minha esposa e eu enfrentamos limitações ao usar o Google Sheets para gerenciar nossas finanças, o que nos motivou a criar o Money Guard.",
      ],
      en: [
        "Money Guard is a financial control app focused on monthly management, setting goals, and having the user's salary as the central point. With it, we can track income more efficiently, set objectives, and save money.",
        "This app was born out of the need to replace Google Sheets with a more complete system. My wife and I faced limitations using Google Sheets to manage our finances, which motivated us to create Money Guard.",
      ],
    },
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
    github: "https://github.com/geniilsonfernandes/moneyguard",
    status: "ready",
  },
  {
    id: "crm-dashboard",
    title: "CRM Dashboard | Front end | Back end",
    description: {
      pt: [
        "Neste projeto, o Docker foi utilizado para simular ambientes de produção e desenvolvimento. Além disso, Redis e BullMQ foram empregados para o processamento assíncrono e paralelo de dados.",
      ],
      en: [
        "In this project, Docker was used to simulate production and development environments. Additionally, Redis and BullMQ were employed for asynchronous and parallel data processing.",
      ],
    },
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
    github: "https://github.com/geniilsonfernandes/crm-dashboard",
    status: "ready",
  },
] as ProjectProps[];

export type ProjectProps = {
  id: string;
  title: string;
  description: {
    pt: string[];
    en: string[];
  };
  type: string;
  technologies: string[];
  cover: string;
  youtube?: string;
  github: string;
  link?: string;
  demo: string;
  status: "ready" | "progress" | "paused";
  sections?: {
    title: string;
    images?: string[];
    paragraphs?: string[];
  }[];
};

export { jobs, projects, skills, socials, stacks };
