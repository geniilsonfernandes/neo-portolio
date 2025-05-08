import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { Pre } from "./components/pre";

const Divider = () => <hr className="my-8" />;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold dark:text-white mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold dark:text-white mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold dark:text-white mt-5 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium dark:text-white mt-4 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-medium dark:text-white mt-3 mb-1">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-medium dark:text-white mt-2 mb-1">
        {children}
      </h6>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        width={1000}
        height={1000}
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt || "generated image"}
      />
    ),
    ul: ({ children }) => (
      <ul className="my-4 list-disc list-inside dark:text-white/80 font-light">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="my-2 dark:text-white/80 font-light"> - {children}</li>
    ),
    a: ({ children, ...props }) => (
      <a
        className="underline text-[#01FFB3]"
        style={{ color: "#01FFB3" }}
        {...props}
      >
        {children}
      </a>
    ),

    p: ({ children }) => (
      <p className="my-4 dark:text-white/80 font-light">{children}</p>
    ),
    pre: Pre,
    code: ({ children }) => (
      <code className="text-sm text-white px-1 py-0.5 rounded bg-gray-800">
        {children}
      </code>
    ),
    hr: () => <Divider />,
    i: ({ children }) => <i className="italic">{children}</i>,
    ...components,
  };
}
