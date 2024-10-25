import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { LocaleSwitcherSelect } from "../LocaleSwitcherSelect";

export const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "pt",
          label: t("pt"),
        },
      ]}
      label={t("label")}
    />
  );
};
