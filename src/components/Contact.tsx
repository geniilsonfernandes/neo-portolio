"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandThreads,
  IconLayoutBottombarCollapse,
  IconLayoutBottombarExpand,
  IconSend,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useEffect } from "react";
import { create } from "zustand";

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

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
interface ITextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, className, ...props }, ref) => {
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
      </div>
    );
  }
);

Input.displayName = "Input";

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ label, className, ...props }, ref) => {
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
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export const Contact = () => {
  const { close, open, isOpen } = contactStore();
  const ref = useClickOutside(close, ["mouseup", "touchend"]);

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
              className="fixed inset-0 justify-center z-50 p-4"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
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
                ref={ref}
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
                    href="https://github.com/b"
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
                    href="https://github.com/b"
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
                    href="https://github.com/b"
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

                <div className="grid grid-cols-2 gap-4">
                  <Input label="Name" className="lg:col-span-1 col-span-2" />
                  <Input label="Email" className="lg:col-span-1 col-span-2" />
                  <TextArea label="Message" className="col-span-2" />
                  <div className="col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="bg-neutral-800 hover:bg-neutral-600 text-white p-4 px-8 rounded-md inline-flex items-center gap-2"
                    >
                      <IconSend size={18} stroke={1} />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

