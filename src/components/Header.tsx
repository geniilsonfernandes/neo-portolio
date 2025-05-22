"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";
import Image from "next/image";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <section className="mt-16">
      <Image
        src="https://res.cloudinary.com/dbpayojb3/image/upload/v1747953334/WhatsApp_Image_2025-05-22_at_11.17.24_AM_cwbrqd.jpg"
        alt="Ge Fernandes profile image"
        className="rounded-xl border-2 shadow-lg border-white object-cover animate-fade-up animate-once animate-delay-100 animate-ease-in-out"
        width={64}
        height={64}
      />

      <h1
        id="header-info"
        className="text-4xl text-slate-900 dark:text-white font-bold leading-9 my-4 animate-fade-up animate-once animate-delay-200 animate-ease-in-out"
      >
        Ge | Full Stack Developer
      </h1>

      <p className="text-md font-light text-slate-500 dark:text-white/70 leading-6 tracking-wider animate-fade-up animate-once animate-delay-300 animate-ease-in-out">
        Frontend Developer with a background in design, passionate about turning
        ideas into memorable digital experiences. I strive to combine aesthetics
        and functionality to craft interfaces that both delight and deliver.
      </p>

      <p className="text-md mt-4 font-light text-slate-500 dark:text-white/70 leading-6 tracking-wider animate-fade-up animate-once animate-delay-[400ms] animate-ease-in-out">
        With a focus on responsive design and accessibility, I ensure that every
        project I work on is both user-friendly and scalable.
      </p>
      <motion.nav
        aria-label="Social media links"
        className="flex flex-1 gap-4 mt-6 animate-fade-up animate-once animate-delay-500 animate-ease-in-out"
      >
        <a
          href="https://github.com/geniilsonfernandes"
          target="_blank"
          title="Github"
          aria-label="Github profile"
          className="text-slate-500 dark:text-midnight-50 hover:text-slate-900 dark:hover:text-white transition-all duration-200 ease-in-out"
        >
          <IconBrandGithub strokeWidth={1.5} />
        </a>

        <a
          href="https://www.linkedin.com/in/genilson-fernandes-489870320/"
          target="_blank"
          title="LinkedIn"
          aria-label="LinkedIn profile"
          className="text-slate-500 dark:text-midnight-50 hover:text-slate-900 dark:hover:text-white transition-all duration-200 ease-in-out"
        >
          <IconBrandLinkedin strokeWidth={1.5} />
        </a>

        <a
          href="https://dev.to/geniilsonfernandes"
          target="_blank"
          title="Dev.to"
          aria-label="Dev.to profile"
          className="text-slate-500 dark:text-midnight-50 hover:text-slate-900 dark:hover:text-white transition-all duration-200 ease-in-out"
        >
          <IconCode strokeWidth={1.5} />
        </a>
      </motion.nav>
    </section>
  );
};
