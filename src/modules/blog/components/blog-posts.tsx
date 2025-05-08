import { Section } from "@/components/Section";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const BlogPost: React.FC<{
  title: string;
  description: string;
}> = ({ description, title }) => {
  return (
    <li className="dark:hover:bg-midnight-800 hover:bg-slate-200 p-3 pr-6 -mx-3 rounded-md transition-colors duration-100 flex items-center">
      <div className="flex-1 dark:text-white">
        <h4 className="text-foreground dark:text-white underline">{title}</h4>
        <p className="text-muted-foreground dark:text-white/50 mt-2">
          {description}
        </p>
      </div>
      <IconChevronRight className="dark:text-white/50" />
    </li>
  );
};

export const BlogPosts = () => {
  return (
    <Section
      className="mt-16 animate-fade-up animate-once animate-delay-[600ms] animate-ease-in-out"
      title="Blog"
      id="blog"
    >
      <ul className="flex gap-1 flex-col">
        <Link href="/posts/floating-player">
          <BlogPost
            title="Motion and Tailwind CSS: Building a grab player animation"
            description="Creating a floating player with tailwind and framer motion"
          />
        </Link>
        <Link href="/posts/animated-color">
          <BlogPost
            title="Hook useAnimatedBackgroundColor"
            description="Animação suave de cores de fundo com Framer Motion"
          />
        </Link>
      </ul>
    </Section>
  );
};
