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
        Hello, I&apos;m Ge, Frontend Developer and Product Creator
      </h1>

      {/* COPY ATUALIZADA */}
      <p className="text-md font-light text-slate-500 dark:text-white/70 leading-6 tracking-wider animate-fade-up animate-once animate-delay-300 animate-ease-in-out">
        Uniting design and engineering, I build end-to-end digital products as an
        independent creator. From concept to implementation, I craft intuitive,
        fast, and well-structured interfaces for the web.
      </p>

      <p className="text-md mt-4 font-light text-slate-500 dark:text-white/70 leading-6 tracking-wider animate-fade-up animate-once animate-delay-[400ms] animate-ease-in-out">
        As a solo developer, I focus on performance, accessibility, and a
        consistent user experience, delivering complete solutions that are both
        scalable and impactful.
      </p>


      <div className="mt-6 animate-fade-up animate-once animate-delay-[500ms] animate-ease-in-out flex gap-4">

        <a
          href="https://cal.com/genilson-fernandes-ryjfqe/30min" // Replace with your actual booking link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 text-xs font-semibold border border-sky-200 dark:border-sky-900 transition-colors hover:bg-sky-100 dark:hover:bg-sky-950/50"
        >
          Book a call
        </a>


        <a
          href="mailto:genilsonfernandes.dev@gmail.com"
          className="inline-flex items-center gap-2 px-3 py-1.5  bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-900 transition-colors hover:bg-emerald-100 dark:hover:bg-emerald-950/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full  bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex  h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new projects
        </a>
      </div>

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