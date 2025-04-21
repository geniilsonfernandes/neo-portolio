interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
  id: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  id,
  ...props
}) => {
  return (
    <section id={id} {...props}>
      <h2 id={`${id}-title`} className="font-bold my-6 text-2xl text-slate-400">
        {title}
      </h2>
      {children}
    </section>
  );
};
