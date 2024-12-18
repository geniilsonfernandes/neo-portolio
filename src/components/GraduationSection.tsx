import { IconExternalLink } from "@tabler/icons-react";

export const GraduationSection: React.FC = () => {
  return (
    <div className="flex gap-2 flex-wrap mt-4">
      <div className="border p-2 bg-white rounded-md w-full relative cursor-pointer hover:bg-gray-100">
        <span className="absolute right-2 top-2">
          <IconExternalLink size={18} stroke={1} />
        </span>
        <h3 className="text-md font-normal">
          Análise E Desenvolvimento De Sistemas
        </h3>
        <span className="text-sm">Anhanguera | jun de 2022 - jun de 2024</span>
      </div>
    </div>
  );
};
