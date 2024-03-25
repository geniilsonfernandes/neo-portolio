type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section = ({ children, title }: SectionProps) => {
  return (
    <section>
      <div className="flex justify-between  items-center">
        <h1 className="font-mono text-neutral-300 text-lg font-bold mb-4">
          {title}
        </h1>
      </div>
      <div className="space-y-4 ">{children}</div>
    </section>
  );
};

export default Section;
