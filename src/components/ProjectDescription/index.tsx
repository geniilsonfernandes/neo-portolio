import { ProjectProps } from "@/cms";
import { useLocale, useTranslations } from "next-intl";

type ProjectDescriptionProps = {
  description: ProjectProps["description"];
  className?: string;
  short?: boolean;
  showTitle?: boolean;
};

export const ProjectDescription = ({
  description,
  className = "text-sm leading-5 font-mono mt-4",
  short = false,
  showTitle,
}: ProjectDescriptionProps) => {
  const locale = useLocale() as "en" | "pt";
  const t = useTranslations("Projects");

  if (short) {
    return <p className={className}>{description[locale][0]}</p>;
  }

  return (
    <>
      {showTitle && (
        <h1 className="text-lg sm:text-2xl font-bold">
          {t("sections.resume")}
        </h1>
      )}
      <h1 className="text-lg sm:text-2xl font-bold"></h1>
      {description[locale].map((desc, i) => (
        <p key={i} className={className}>
          {desc}
        </p>
      ))}
    </>
  );
};
