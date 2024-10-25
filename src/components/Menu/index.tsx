"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (pathname === path) {
      return true;
    }
  };
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative flex justify-center items-center w-full">
        <Link href="/">
          <Logo />
        </Link>
        <div className="absolute right-0">
          <LocaleSwitcher />
        </div>
      </div>

      <nav className="p-6 fixed w-full left-0  bottom-0 z-10 bg-stone-50">
        <ul className="flex gap-4 container sm:text-sm text-sm justify-center">
          <li>
            <Link
              href="/"
              className={cn("font-light px-2", {
                "bg-neutral-900 text-neutral-200": isActive("/"),
              })}
            >
              {t("home")}
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
              {t("about")}
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
              {t("projects")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
