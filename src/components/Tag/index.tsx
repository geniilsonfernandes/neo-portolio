import { cn } from "@/utils";

type TagProps = {
  name: string;
  color?: "green" | "red" | "blue" | "yellow";
};

const Tag = ({ name, color = "green" }: TagProps) => {
  return (
    <span
      className={cn(
        "text-black/80 p-1 h-6 text-xs uppercase font-mono flex items-center",
        color === "green"
          ? "bg-green-500"
          : color === "red"
          ? "bg-red-500"
          : color === "blue"
          ? "bg-blue-500"
          : "bg-yellow-500"
      )}
    >
      {name}
    </span>
  );
};

export default Tag;
