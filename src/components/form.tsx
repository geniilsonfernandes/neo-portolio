import { cn } from "@/utils";
import { forwardRef } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
interface ITextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={cn("space-y-2", className)}>
        <span className="text-gray-400">{label}</span>
        <input
          ref={ref}
          className={cn(
            "w-full bg-gray-100 p-4 focus:outline-neutral-800 rounded-md"
          )}
          {...props}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={cn("space-y-2", className)}>
        <span className="text-gray-400">{label}</span>
        <textarea
          ref={ref}
          rows={4}
          className={cn(
            "w-full bg-gray-100 p-2 focus:outline-neutral-800 rounded-md "
          )}
          {...props}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
