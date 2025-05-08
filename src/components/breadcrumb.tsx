"use client";

import { IconArrowBackUp } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);


  return (
    <nav className="text-sm text-gray-600 dark:text-midnight-300">
      <Link href="/" scroll={false} className="text-gray-600 flex items-center gap-1 dark:text-midnight-300 hover:text-gray-800 dark:hover:text-midnight-400 my-4 hover:underline">
        <IconArrowBackUp />  Go back
      </Link>
      <ul className="flex items-center gap-1">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {segments.map((seg, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");
          return (
            <li key={href} className="flex items-center gap-1">
              <span>/</span>
              <Link href={href} className="hover:underline capitalize">
                {decodeURIComponent(seg)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
