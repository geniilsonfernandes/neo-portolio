"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="mt-16">
      <Image
        src="/cover.png"
        alt="Ge Fernandes profile image"
        className="rounded-xl border-2 shadow-lg border-white object-cover"
        width={64}
        height={64}
      />
      <h1
        id="header-info"
        className="text-4xl text-slate-900 font-bold leading-9 my-4"
      >
        Ge | Desenvolvedor Full Stack
      </h1>

      <p className="text-xl text-slate-500 font-normal max-w-sm">
        Front-end developer who loves turning ideas into clean, usable
        interfaces.
      </p>

      <nav
        aria-label="Social media links"
        className="flex flex-1 gap-4 mt-6 text-slate-500"
      >
        <a
          href="https://github.com/geniilsonfernandes"
          target="_blank"
          title="Github"
          aria-label="Github profile"
        >
          <IconBrandGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/genilson-fernandes-489870320/"
          target="_blank"
          title="LinkedIn"
          aria-label="LinkedIn profile"
        >
          <IconBrandLinkedin />
        </a>
        <a
          href="https://dev.to/geniilsonfernandes"
          target="_blank"
          title="Dev.to"
          aria-label="Dev.to profile"
        >
          <IconCode />
        </a>
      </nav>
    </header>
  );
};
