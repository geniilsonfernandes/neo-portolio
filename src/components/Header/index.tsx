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
        <h1 className="text-4xl font-bold leading-9">{t("title")}</h1>
        <p className="text-lg font-normal leading-6 mt-8 ">
          {t.rich("description", {
            i: (chunks) => <i>{chunks}</i>,
            b: (chunks) => <b>{chunks}</b>,
          })}
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
