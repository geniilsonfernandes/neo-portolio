"use client";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconCode,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="flex flex-col h-full border rounded-lg p-4 bg-white">
      <section
        className="flex flex-1 flex-col mt-[56px]"
        aria-labelledby="header-info"
      >
        <div className="flex w-[74px] h-[74px] rounded-full gap-4 justify-center bg-white shadow-2xl mb-4 items-center">
          <Image
            src="/cover.png"
            alt="Ge Fernandes profile image"
            className="rounded-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <h1 id="header-info" className="text-4xl font-bold leading-9">
          Ge. Fernandes
        </h1>
        <h2 className="text-2xl mt-2 font-bold leading-9">
          Frontend Developer
        </h2>
        <p className="text-sm font-normal leading-loose mt-8">
          {t.rich("description", {
            i: (chunks) => <i>{chunks}</i>,
            b: (chunks) => <b>{chunks}</b>,
          })}
        </p>
        <hr className="my-8" />
        <nav
          aria-label="Social media links"
          className="flex flex-1 items-end gap-4"
        >
          <a
            href="https://www.instagram.com/genilsonfernandes_"
            target="_blank"
            title="Instagram"
            aria-label="Instagram profile"
          >
            <IconBrandInstagram />
          </a>
          <a
            href="https://github.com/geniilsonfernandes"
            target="_blank"
            title="Github"
            aria-label="Github profile"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://www.threads.net/@genilsonfernandes_"
            target="_blank"
            title="Threads"
            aria-label="Threads profile"
          >
            <IconBrandThreads />
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
      </section>
    </header>
  );
};
