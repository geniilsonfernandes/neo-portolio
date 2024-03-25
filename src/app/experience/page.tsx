import Job from "@/components/Job";

const Page = () => {
  return (
    <div className="space-y-8 pb-8 animation-slide-up">
      <h2 className="text-neutral-300 text-2xl font-bold font-mono">
        Experiências
      </h2>

      <Job />
      <Job />
      <Job />
      <Job />
    </div>
  );
};

export default Page;
