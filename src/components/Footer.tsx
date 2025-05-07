import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "./Logo";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer
      className="mt-40 container flex flex-col gap-24 justify-between"
      role="contentinfo"
    >
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
        <h2 className="text-2xl font-bold">{t("title")}</h2>

        <p className="text-lg mt-8">
          <strong className="block sr-only">Email</strong>
          <a href={`mailto:${t("email")}`} className="hover:underline">
            {t("email")}
          </a>
        </p>

        <p className="text-lg mt-4">
          <strong className="block sr-only">Phone</strong>
          <a href={`tel:${t("phone")}`} className="hover:underline">
            {t("phone")}
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
    </footer>
  );
};
