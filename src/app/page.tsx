import Logo from "@/components/Logo";
import { cn } from "@/utils";
import { ArrowUpRight, Paperclip } from "lucide-react";
import { HtmlHTMLAttributes } from "react";

const menu = [
  {
    name: "index",
  },
  {
    name: "Sobre mim",
  },
  {
    name: "Projetos",
  },
  {
    name: "Experiencias",
  },
];
const socials = [
  {
    name: "Github",
  },
  {
    name: "Twitter",
  },
  {
    name: "LinkedIn",
  },
];

type ButtonProps = {} & HtmlHTMLAttributes<HTMLButtonElement>;
const Button = (props: ButtonProps) => {
  return (
    <button
      className={cn(
        props.className,
        "border-b border-b-neutral-800 text-neutral-300 hover:text-neutral-100 uppercase text-xs font-bold hover:border-b-neutral-200 px-4 py-2 flex justify-between w-full transition-all"
      )}
      {...props}
    >
      {props.children} <ArrowUpRight size={18} strokeWidth={2} />
    </button>
  );
};

type AnchorButtonProps = {
  size?: "sm" | "lg";
} & HtmlHTMLAttributes<HTMLAnchorElement>;

const AnchorButton = (props: AnchorButtonProps) => {
  return (
    <a
      className={cn(
        "cursor-pointer text-neutral-400 text-xs hover:text-neutral-200 border-b border-b-neutral-600 hover:border-b  hover:border-b-neutral-200  transition-all  py-2"
      )}
      {...props}
    />
  );
};

const Tag = ({ name }: { name: string }) => {
  return (
    <span className=" bg-green-500 text-black/80 p-1  h-6 text-sm uppercase font-mono flex items-center">
      {name}
    </span>
  );
};

const Project = () => {
  return (
    <div className="pb-2">
      <div className="flex gap-2 justify-between items-end">
        <h2 className="text-neutral-300 text-lg font-bold border-t border-t-neutral-800 pt-2 font-mono">
          Money Guard
        </h2>
        <Tag name="Finalizado" />
      </div>
      <p className="text-neutral-400 text-sm leading-5 font-mono mt-2">
        Money Guard é um aplicativo de controle financeiro focado na gestão
        mensal, estabelecendo metas e tendo como ponto central o salário do
        usuário.
      </p>
      <div className="flex gap-4 items-end mt-4">
        <AnchorButton>Github</AnchorButton>
        <AnchorButton>Demo</AnchorButton>

        <button className="border border-neutral-600 text-neutral-300 h-7  text-sm hover:text-neutral-100 px-4 py-2 flex items-center gap-2 font-mono hover:bg-neutral-900">
          ler docs <Paperclip size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};
type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section = ({ children, title }: SectionProps) => {
  return (
    <section>
      <h1 className="font-mono text-neutral-300 text-lg font-bold mb-4">
        {title}
      </h1>
      <div className="space-y-4 ">{children}</div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="container grid grid-cols-12 gap-4">
      <div className="h-screen flex flex-col justify-between col-span-3 py-8 border-r border-neutral-800 pr-4 sticky top-0">
        <button className="w-10 h-10 flex justify-center items-center gap-4 text-neutral-400 hover:text-neutral-200 transition-all">
          <Logo />
        </button>
        <div>
          <nav className="flex flex-col gap-2 col-span-3">
            {menu.map((item) => (
              <Button key={item.name}>{item.name}</Button>
            ))}
          </nav>
          <ul className="flex gap-2 mt-6">
            {socials.map((item) => (
              <li key={item.name}>
                <AnchorButton>{item.name}</AnchorButton>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-7 py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-neutral-300 font-mono">
            👋 Olá! Sou Genilson Fernandes
          </h1>
          <p className="text-neutral-400 font-mono">
            Desenvolvedor Frontend com uma formação em design. Minha jornada
            profissional é criar experiências digitais significativas e
            funcionais.
          </p>
          <p className="text-neutral-400 font-mono">
            💼 Com experiência valiosa na Beuni Tech e na Teamsoft, contribuí
            para o desenvolvimento de soluções robustas e inovadoras. Meu
            compromisso em resolver problemas e implementar novas
            funcionalidades tem sido constante em cada projeto em que estive
            envolvido.
          </p>
        </div>
        <Section title="Projetos">
          <Project />
          <Project />
          <Project />
        </Section>

        <Section title="Blog">
          <p className="text-neutral-400 font-mono">
            Ainda estamos desenvolvendo este conteúdo, por favor, tente mais
            tarde.
          </p>
        </Section>
      </div>

      <div className="col-span-2 py-8 border-l border-neutral-800 pl-4 h-screen sticky top-0">
        <h2 className="uppercase text-xs font-bold text-neutral-400">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="border border-neutral-600 text-neutral-300 text-sm p-1 px-2">
            React
          </span>
          <span className="border border-neutral-600 text-neutral-300 text-sm p-1 px-2">
            React
          </span>
          <span className="border border-neutral-600 text-neutral-300 text-sm p-1 px-2">
            React
          </span>
        </div>
      </div>
    </main>
  );
}
