import Tag from "../Tag";

export type JobProps = {
  small?: boolean;
  company?: string;
  period?: string;
  job?: string;
  description?: string[];
  stacks?: string[];
};

const Job = ({
  small = false,
  description,
  company,
  job,
  period,
  stacks = [],
}: JobProps) => {
  return (
    <div className="border-t bg-neutral-800/40 p-2">
      <div>
        <h3 className="text-neutral-300 text-md font-bold font-mono">
          💼 {company} <span className="text-neutral-400">{job}</span>
        </h3>
        <span className="text-neutral-400 text-sm font-mono">{period}</span>
      </div>
      {small ? null : (
        <>
          {description?.map((desc, i) => (
            <p
              className="text-neutral-400 text-sm leading-5 font-mono mt-2"
              key={i}
            >
              {desc}
            </p>
          ))}

          <div className="flex gap-2 flex-wrap mt-8">
            {stacks.map((stack) => (
              <Tag key={stack} name={stack} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Job;
