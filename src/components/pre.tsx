"use client";

import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";


export function Pre({ children }: { children?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const text =
    typeof children === "string"
      ? children
      : (children as any)?.props?.children;

  const handleCopy = async () => {
    if (typeof text === "string") {
      await navigator.clipboard.writeText(text.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group">
      <pre className="bg-midnight-800 p-4 rounded-md overflow-x-auto text-sm my-4">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 hover:bg-white/20 text-white dark:text-gray-300 text-xs px-2 py-1 rounded flex items-center gap-1"
      >
        <IconCopy size={14} />
        {copied ? "copied!" : "copy"}
      </button>
     
    </div>
  );
}
