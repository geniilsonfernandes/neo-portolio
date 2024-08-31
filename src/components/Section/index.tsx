type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section = ({ children, title }: SectionProps) => {
  return (
    <section className="pt-16">
      <div className="flex justify-between items-center">
        <h1 className="font-mono text-neutral-300 text-4xl font-bold yeseva-one-regular mb-10">
          {title}
        </h1>
      </div>
      <div className="space-y-8 ">{children}</div>
    </section>
  );
};

export default Section;
