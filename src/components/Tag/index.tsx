const Tag = ({ name }: { name: string }) => {
  return (
    <span className=" bg-green-500 text-black/80 p-1 h-6 text-xs uppercase font-mono flex items-center">
      {name}
    </span>
  );
};

export default Tag;
