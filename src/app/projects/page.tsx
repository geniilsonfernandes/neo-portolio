import Project from "@/components/Project";

type StackStatusProps = {
  name: string;
  percent?: number;
};
const StackStatus = ({ name, percent = 0 }: StackStatusProps) => {
  return (
    <div className="border-l border-neutral-800 pl-4 w-full">
      <h3 className="text-neutral-400 font-mono font-bold mb-8">{name}</h3>
      <div className="w-full h-20 bg-neutral-900/40 relative flex items-end">
        <div
          className="text-neutral-300 font-mono font-bold absolute flex justify-center items-center w-full bg-white/40"
          style={{ height: `${percent}%` }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <h2 className="text-neutral-300 text-2xl font-bold font-mono">
        Todos os projetos
      </h2>

      <div className="flex justify-between gap-2 my-8 ">
        <StackStatus name="Front-end" percent={50} />
        <StackStatus name="Back-end" percent={20} />
        <StackStatus name="Mobile" percent={30} />
      </div>

      <div className="space-y-4">
        <Project path="1" />
        <Project path="1" />
        <Project path="1" />
        <Project path="1" />
        <Project path="1" />
        <Project path="1" />
        <Project path="1" />
      </div>
    </div>
  );
};

export default Page;
