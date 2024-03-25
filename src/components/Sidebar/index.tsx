"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo";
import Menu from "../Menu";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative h-full ">
      <div className="sm:hidden flex justify-between p-4">
        <Link
          href="/"
          className="w-10 h-10 flex justify-center items-center gap-4  hover:text-neutral-200 transition-all"
        >
          <Logo />
        </Link>
        <button
          className="w-10 h-10 flex justify-center items-center gap-4  hover:text-neutral-200 transition-all"
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon />
        </button>
        {openMenu && (
          <div className="absolute sm:hidden  top-0 left-0 right-0 p-4 bg-neutral-900  h-screen z-50 ">
            <Menu onClose={() => setOpenMenu(false)} />
          </div>
        )}
      </div>
      <div className="hidden sm:flex flex-col justify-between h-full">
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
