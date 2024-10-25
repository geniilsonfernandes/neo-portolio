import { IconCode } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

type StackProps = {
  id: string;
};

export const Stack = ({ id }: StackProps) => {
  const t = useTranslations("Stack");
  return (
    <div className="p-4 bg-slate-100">
      <IconCode />
      <h3 className=" text-md font-bold font-mono flex gap-2 mt-2">
        {t(`${id}.title`)}
      </h3>
      <p className="text-sm mt-4">{t(`${id}.description`)}</p>
    </div>
  );
};
