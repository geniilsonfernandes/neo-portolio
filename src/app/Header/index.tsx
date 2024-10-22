import Logo from "@/components/Logo";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCode,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-col ">
      <div className="h-full flex">
        <div
          className="flex flex-1 flex-col justify-between py-8"
          aria-label="header info section"
        >
          <div className="py-28">
            <div className="flex w-[74px] h-[74px] rounded-full gap-4 justify-center bg-white shadow-sm mb-4 items-center">
              <Image
                src="/cover.png"
                alt="image"
                className="rounded-full object-cover"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-4xl font-bold leading-9">
              My name is Genilson, <br /> and I’m a Front-end
            </h1>
            <p className="text-lg font-normal leading-6 mt-8 max-w-[600px]">
              Frontend Developer with a design background, focused on creating
              functional digital experiences and solving
              <i>
                <b> complex </b>
              </i>
              problems with high-quality solutions.<b> How can I help you? </b>
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/GenilsonFernandes"
                target="_blank"
                title="Github"
              >
                <IconBrandInstagram />
              </a>
              <a
                href="https://github.com/GenilsonFernandes"
                target="_blank"
                title="Github"
              >
                <IconBrandGithub />
              </a>

              <a
                href="https://github.com/GenilsonFernandes"
                target="_blank"
                title="Github"
              >
                <IconBrandTwitter />
              </a>

              <a
                href="https://github.com/GenilsonFernandes"
                target="_blank"
                title="Github"
              >
                <IconBrandYoutube />
              </a>

              <a
                href="https://github.com/GenilsonFernandes"
                target="_blank"
                title="Github"
              >
                <IconCode />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
