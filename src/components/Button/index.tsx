import { cn } from "@/utils";
import { ArrowUpRight } from "lucide-react";
import { HtmlHTMLAttributes } from "react";

type ButtonProps = {} & HtmlHTMLAttributes<HTMLButtonElement>;
const Button = (props: ButtonProps) => {
  return (
    <button
      className={cn(
        props.className,
        "border-b border-b-neutral-800 text-neutral-300 hover:text-neutral-100 uppercase text-xs font-light hover:border-b-neutral-200 px-4 py-2 flex justify-between w-full transition-all"
      )}
      {...props}
    >
      {props.children} <ArrowUpRight size={18} strokeWidth={2} />
    </button>
  );
};

export default Button;
