"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);


  return (
    <nav className="text-sm text-midnight-100">
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
