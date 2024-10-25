import { sections } from "@/cms";
import Logo from "@/components/Logo";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconCode,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-col  h-screen max-h-[80vh]">
      <div
        className="flex flex-1 flex-col justify-center items-center text-center"
        aria-label="header info section"
      >
        <div className="flex w-[74px] h-[74px] rounded-full gap-4 justify-center bg-white shadow-2xl mb-4 items-center">
          <Image
            src="/cover.png"
            alt="image"
            className="rounded-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <h1 className="text-4xl font-bold leading-9">
          {sections.header.title}
        </h1>
        <p className="text-lg font-normal leading-6 mt-8 ">
          {sections.header.description}
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="https://www.instagram.com/genilsonfernandes_"
            target="_blank"
            title="Github"
          >
            <IconBrandInstagram />
          </a>
          <a
            href="https://github.com/geniilsonfernandes"
            target="_blank"
            title="Github"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://www.threads.net/@genilsonfernandes_"
            target="_blank"
            title="Github"
          >
            <IconBrandThreads />
          </a>
          <a
            href="https://www.linkedin.com/in/genilson-fernandes-489870320/"
            target="_blank"
            title="Github"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://dev.to/geniilsonfernandes"
            target="_blank"
            title="Github"
          >
            <IconCode />
          </a>
        </div>
      </div>
    </div>
  );
};
