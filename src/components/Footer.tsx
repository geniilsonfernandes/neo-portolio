"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

export const Footer = () => {
  const { scrollYProgress } = useScroll();

  // Mapeia o progresso do scroll (0 a 1) para um deslocamento Y (0 a -100px)
  const translateY = useTransform(scrollYProgress, [0, 1], [500, -100]);

  return (
    <motion.footer
      style={{ translateY }}
      className="sticky bottom-0 -z-50 pt-20 border-t border-slate-200 dark:border-midnight-600 flex flex-col gap-24 justify-between"
      role="contentinfo"
    >
      <div className="container">
        {/* Logo */}
        <div className="py-8">
          <Link
            href="/"
            className="dark:text-white text-slate-700"
            aria-label="Go to homepage"
          >
            <Logo />
          </Link>
        </div>

        {/* Contact info */}
        <address className="not-italic py-4 text-slate-700 dark:text-white">
          <h2 className="text-2xl font-bold">
            Always exploring new ways to blend design and technology. Let`s
            build something great together.
          </h2>

          <p className="text-lg mt-8">
            <strong className="block sr-only">Email</strong>
            <a
              href={`mailto:geniilsonfernandes@gmail.com`}
              className="hover:underline"
            >
              geniilsonfernandes@gmail.com
            </a>
          </p>

          <p className="text-lg mt-4">
            <strong className="block sr-only">Phone</strong>
            <a href={`tel:+55 22 9 99602-1627`} className="hover:underline">
              +55 22 9 99602-1627
            </a>
          </p>
        </address>

        {/* Copyright */}
        <div className="text-slate-300 font-light text-center py-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Genilson Fernandes. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
