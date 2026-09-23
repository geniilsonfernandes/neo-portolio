import { ExperienceList } from "@/components/ExperienceList";
import { Section } from "@/components/Section";
import { Metadata } from "next";
import { Header } from "../components/Header";
import { NavBar } from "@/components/NavBar";

import { HeroBackground } from "@/components/HeroBackground";
import { Highlights } from "@/components/Highlights";
import { StackGrid } from "@/components/StackGrid";

export const metadata: Metadata = {
  title: "Ge | Full Stack Developer",
  description:
    "Personal portfolio featuring my professional experience and the technologies I use for web and mobile development.",
  openGraph: {
    title: "Ge | Full Stack Developer",
    description:
      "Explore my professional experience and technology stack.",
    url: "https://genilsondev.vercel.app/",
    siteName: "Ge | Full Stack Developer",
    images: [
      {
        url: "/default-og.png",
        width: 1200,
        height: 630,
        alt: "Portfolio cover image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ge | Full Stack Developer",
    description: "See my experience as a developer.",
    images: ["/default-og.png"],
  },
};

export default async function Home() {
  return (
    <div className="relative isolate">
      <HeroBackground />
      <NavBar />
      <div className="container mx-auto">
        <Header />
        <Highlights />

        <Section
          className="mt-16 animate-fade-up animate-once animate-delay-[500ms] animate-ease-in-out"
          title="Experience"
          id="experience"
        >
          <ExperienceList />
        </Section>
        <Section
          className="mt-16"
          title="Stack"
          id="technologies"
        >
          <StackGrid />
        </Section>

      </div>
    </div>
  );
}
