import Link from "next/link";
import Button from "../Button";

const About = () => {
  return (
    <div className="space-y-4  p-4 bg-neutral-900/40">
      <h1 className="text-2xl font-bold text-neutral-300 ">
        👋 Olá! Sou Genilson Fernandes
      </h1>
      <p className="text-neutral-400 ">
        Desenvolvedor Frontend com uma formação em design. Minha jornada
        profissional é criar experiências digitais significativas e funcionais.
      </p>
      <p className="text-neutral-400  pb-8">
        💼 Com experiência valiosa na Beuni Tech e na Teamsoft, contribuí para o
        desenvolvimento de soluções robustas e inovadoras. Meu compromisso em
        resolver problemas e implementar novas funcionalidades tem sido
        constante em cada projeto em que estive envolvido.
      </p>
      <Link href="/about" passHref>
        <Button>Saber Mais</Button>
      </Link>
    </div>
  );
};

export default About;
