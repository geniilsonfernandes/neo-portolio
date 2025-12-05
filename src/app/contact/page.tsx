import { ContactForm } from "@/components/ContactForm";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white hover:text-slate-900 dark:hover:text-white transition-colors mb-8"
      >
        <IconArrowLeft size={20} />
        Back to home
      </Link>

      <h1 className="text-4xl font-bold text-white mb-4">
        Let's work together
      </h1>
      <p className="text-lg text-midnight-300 mb-8">
        Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <ContactForm />
    </div>
  );
}
