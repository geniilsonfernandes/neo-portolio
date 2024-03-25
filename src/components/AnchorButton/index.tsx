import { cn } from "@/utils";
import { HtmlHTMLAttributes } from "react";

type AnchorButtonProps = {
  size?: "sm" | "lg";
} & HtmlHTMLAttributes<HTMLAnchorElement>;

const AnchorButton = (props: AnchorButtonProps) => {
  return (
    <a
      className={cn(
        "cursor-pointer text-neutral-400 text-xs hover:text-neutral-200 border-b border-b-neutral-600 hover:border-b  hover:border-b-neutral-200  transition-all  py-2"
      )}
      {...props}
    />
  );
};

export default AnchorButton;
