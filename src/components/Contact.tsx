"use client";

import { createContact } from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandThreads,
  IconCheck,
  IconLayoutBottombarCollapse,
  IconLayoutBottombarExpand,
  IconSend,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { create } from "zustand";
import { Input, TextArea } from "./form";

// Defina a interface do estado da store
interface StoreState {
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
  close: () => void;
}

// Crie a store usando a interface
const contactStore = create<StoreState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type formType = z.infer<typeof formSchema>;

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { close, open, isOpen } = contactStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

    reset,
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const onSubmit = async (data: formType) => {
    await createContact(data.name, data.email, data.message);
    setIsSubmitted(true);
    reset();
    // close();
  };

  return (
    <>
      <button aria-label="Collapse Layout" onClick={open}>
        <IconLayoutBottombarCollapse size={24} stroke={1} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-gray-500/30 backdrop-blur-sm z-40"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed justify-center top-4 w-[98%] left-[50%] z-50"
              initial={{ opacity: 0, y: "-100%", x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: "-100%", x: "-50%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: 0,
              }}
            >
              <div
                className="bg-white rounded-lg border p-8 w-full relative"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                {/* Close Button */}
                <button
                  onClick={close}
                  className="absolute top-8 right-4 text-gray-600 hover:text-gray-800"
                  aria-label="Close Modal"
                >
                  <IconLayoutBottombarExpand size={24} stroke={1} />
                </button>

                {/* Modal Content */}
                <h1 className="text-2xl font-bold lg:max-w-[50%]">
                  Let build something great together.
                </h1>
                <div className="flex gap-2 my-8">
                  <a
                    href="https://github.com/geniilsonfernandes"
                    className="p-2 border rounded-md gap-2 flex flex-col items-start hover:bg-gray-100"
                    aria-label="Visit GitHub profile of gefernandes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-2 items-center">
                      <IconBrandGithub size={24} stroke={1} />
                      <span className="font-semibold">Github</span>
                    </div>
                  </a>
                  <a
                    href="https://www.threads.net/@genilsonfernandes_"
                    className="p-2 border rounded-md gap-2 flex flex-col items-start hover:bg-gray-100"
                    aria-label="Visit threads profile of gefernandes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-2 items-center">
                      <IconBrandThreads size={24} stroke={1} />
                      <span className="font-semibold">Threads</span>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/genilson-fernandes-489870320/"
                    className="p-2 border rounded-md gap-2 flex flex-col items-start hover:bg-gray-100"
                    aria-label="Visit Linkedin profile of gefernandes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-2 items-center">
                      <IconBrandLinkedin size={24} stroke={1} />
                      <span className="font-semibold">Linkedin</span>
                    </div>
                  </a>
                </div>

                <form
                  className="grid grid-cols-2 gap-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Input
                    label="Name"
                    className="lg:col-span-1 col-span-2"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                  <Input
                    label="Email"
                    className="lg:col-span-1 col-span-2"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                  <TextArea
                    label="Message"
                    className="col-span-2"
                    {...register("message")}
                    error={errors.message?.message}
                  />
                  <div className="col-span-2 flex gap-2 justify-end">
                    {isSubmitted && (
                      <div className="text-green-500 flex gap-2 p-4 bg-green-100 border rounded-md border-green-200">
                        <IconCheck size={18} stroke={1} />
                        Message sent successfully!
                      </div>
                    )}

                    <button
                      type="submit"
                      className="bg-neutral-800 hover:bg-neutral-600 text-white p-4  rounded-md inline-flex items-center gap-2"
                    >
                      <IconSend size={18} stroke={1} />

                      {isSubmitting ? "..." : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
