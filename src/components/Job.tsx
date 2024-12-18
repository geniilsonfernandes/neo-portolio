import { IconCalendar } from "@tabler/icons-react";

export type JobProps = {
  small?: boolean;
  company?: string;
  period?: string;
  job?: string;
  description?: {
    pt: string[];
    en: string[];
  };
  stacks?: string[];
};

const Job = ({ company, job, period }: JobProps) => {
  return (
    <div className="border p-2  bg-white rounded-md w-full">
      <h3 className="text-md ">
        {job} <span className="text-neutral-400 text-sm"> - {company} </span>
      </h3>
      <span className="text-sm inline-flex gap-2 mt-1">
        <IconCalendar size={18} stroke={1} /> {period}
      </span>
    </div>
  );
};
export default Job;
