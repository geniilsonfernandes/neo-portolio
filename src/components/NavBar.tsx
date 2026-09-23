"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "technologies", label: "Stack" },
];

export const NavBar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Marks a section as active when it crosses the upper third of the viewport
      { rootMargin: "-30% 0px -65% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-midnight-800 bg-gray-50/80 dark:bg-midnight-900/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex h-12 items-center justify-between"
      >
        <a
          href="#about"
          aria-label="Back to top"
          className="text-slate-700 dark:text-white scale-75 origin-left"
        >
          <Logo />
        </a>

        <ul className="flex items-center gap-1 sm:gap-2 list-none text-sm">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "px-2 py-1 transition-colors duration-200",
                  active === id
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-midnight-50 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-1 px-3 py-1 text-xs font-semibold border bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
