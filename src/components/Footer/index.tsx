import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import { sections } from "@/cms";

export const Footer = () => {
  return (
    <footer className="container mt-40 gap-24 flex flex-col justify-between">
      <div className="py-8">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="py-4">
        <p className="text-2xl  font-bold">{sections.footer.title}</p>
        <h1 className="text-2xl font-bold mt-8">{sections.footer.email}</h1>
        <h1 className="text-2xl font-bold">{sections.footer.phone}</h1>
      </div>
      <div className="text-neutral-400 font-light text-center py-4">
        Copyright © {new Date().getFullYear()} Genilson Fernandes
      </div>
    </footer>
  );
};
