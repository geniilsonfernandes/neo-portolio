"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (pathname === path) {
      return true;
    }
  };
  return (
    <nav className="p-6 fixed w-full left-0  bottom-0 z-10 bg-stone-50">
      <ul className="flex gap-4 container sm:text-sm text-sm justify-center">
        <li>
          <Link
            href="/"
            className={cn("font-light px-2", {
              "bg-neutral-900 text-neutral-200": isActive("/"),
            })}
          >
            Home
          </Link>
        </li>
        <span className="text-neutral-200 font-light">/</span>
        <li>
          <Link
            href="/about"
            className={cn("font-light px-2", {
              "bg-neutral-900 text-neutral-200": isActive("/about"),
            })}
          >
            About me
          </Link>
        </li>
        <span className="text-neutral-200 font-light">/</span>
        <li>
          <a
            href="/projects"
            className={cn("font-light px-2", {
              "bg-neutral-900 text-neutral-200": isActive("/projects"),
            })}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
