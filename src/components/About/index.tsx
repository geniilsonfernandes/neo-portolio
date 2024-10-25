import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      {t.rich("description", {
        p: (chunks) => <p>{chunks}</p>,
      })}
    </div>
  );
};

export default About;
