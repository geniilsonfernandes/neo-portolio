import AnchorButton from "../AnchorButton";

type BlogProps = {
  title: string;
  url: string;
};

const Blog = ({ title, url }: BlogProps) => {
  return (
    <div className="border-t bg-neutral-800/40 p-2">
      <h3 className="text-neutral-300 text-md font-bold font-mono">{title}</h3>
      <AnchorButton href={url} variant="button" target="_blank">
        Ler
      </AnchorButton>
    </div>
  );
};

export default Blog;
