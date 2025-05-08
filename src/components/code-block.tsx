"use client";

import { highlight } from "@/utils/highlight";
import { useLayoutEffect, useState } from "react";

export function CodeBlock({ initial }: { initial?: JSX.Element }) {
  const [nodes, setNodes] = useState(initial);

  useLayoutEffect(() => {
    void highlight('console.log("Rendered on client")', "ts").then(setNodes);
  }, []);

  return nodes ?? <p>Loading...</p>;
}