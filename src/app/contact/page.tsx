import { ContactForm } from "@/components/ContactForm";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-500 dark:text-midnight-50 hover:text-slate-900 dark:hover:text-white transition-colors mb-8"
      >
        <IconArrowLeft size={20} />
        Back to home
      </Link>

      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Let&apos;s work together
      </h1>
      <p className="text-lg text-slate-500 dark:text-white/70 mb-8">
        Have a project in mind? Fill out the form below and I&apos;ll get back to you as soon as possible.
      </p>

      <ContactForm />
    </div>
  );
}
