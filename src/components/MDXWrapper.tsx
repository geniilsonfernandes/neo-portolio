"use client";

import { MDXProvider } from "@mdx-js/react";

export const MDXWrapper = ({
  components,
  children,
}: {
  components?: any
  children: React.ReactNode;
}) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
