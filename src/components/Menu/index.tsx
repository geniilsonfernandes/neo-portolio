"use client";

import { X } from "lucide-react";
import Link from "next/link";
import AnchorButton from "../AnchorButton";
import Button from "../Button";
import Logo from "../Logo";

const menu = [
  {
    name: "./index",
    path: "/",
  },
  {
    name: "./sobre_mim",
    path: "/about",
  },
  {
    name: "./projetos",
    path: "/projects",
  },
  {
    name: "./experiencias",
    path: "/experience",
  },
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
];

type MenuProps = {
  onClose?: () => void;
};
const Menu = ({ onClose }: MenuProps) => {
  return (
    <div className="flex flex-col gap-14  sm:justify-between w-full h-full">
      <div className="flex justify-between">
        <Link
          href="/"
          className="w-10 h-10 flex justify-center items-center gap-4  hover:text-neutral-200 transition-all"
        >
          <Logo />
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            className="w-10 h-10 flex justify-center items-center gap-4  hover:text-neutral-200 transition-all"
          >
            <X />
          </button>
        )}
      </div>
      <div>
        <nav className="flex flex-col gap-2 col-span-3">
          {menu.map((item) => (
            <Link href={item.path} key={item.name} passHref>
              <Button key={item.name} onClick={onClose}>
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
        <ul className="flex gap-2 mt-6">
          {socials.map((item) => (
            <li key={item.name}>
              <AnchorButton href={item.path}>{item.name}</AnchorButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
