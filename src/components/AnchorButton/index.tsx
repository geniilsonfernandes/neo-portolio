import { cn } from "@/utils";
import { ArrowUpRight } from "lucide-react";

type AnchorButtonProps = {
  size?: "sm" | "lg";
  variant?: "text" | "button";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const AnchorButton = (props: AnchorButtonProps) => {
  const { variant = "text" } = props;
  if (variant === "button") {
    return (
      <a
        className={cn(
          props.className,
          "border-b border-b-neutral-800 uppercase text-xs font-bold hover:border-b-neutral-200 px-4 py-2 flex justify-between  transition-all"
        )}
        {...props}
      >
        {props.children}
        <ArrowUpRight className="ml-8" size={18} strokeWidth={2} />
      </a>
    );
  }

  return (
    <a
      className={cn(
        "cursor-pointer text-xs hover:text-neutral-200 border-b border-b-neutral-600 hover:border-b  hover:border-b-neutral-200  transition-all  py-2"
      )}
      {...props}
    />
  );
};

export default AnchorButton;
