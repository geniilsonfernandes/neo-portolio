"use client";

import { useHotkeys } from "@/hooks/useHotkeys";
import { cn } from "@/utils";
import {
  IconAdjustments,
  IconAdjustmentsOff,
  IconBlockquote,
  IconBriefcase,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconExternalLink,
  IconFolders,
  IconLink,
  IconPaperclip,
  IconSearch,
  IconSignRightFilled,
  IconTerminal2,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useEffect, useMemo, useRef } from "react";
import { create } from "zustand";

const useFocusOnOpen = (
  isOpen: boolean,
  ref: React.RefObject<HTMLInputElement>
) => {
  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.focus(); // Dá foco ao input quando o modal for aberto
    }
  }, [isOpen, ref]); // Executa o efeito sempre que isOpen mudar
};

// Defina a interface do estado da store
interface StoreState {
  isOpen: boolean;
  query: string;
  category: string;
  setQuery: (query: string) => void;
  setCategory: (category: string) => void;
  showFilter: boolean;
  toggleFilter: () => void;
  open: () => void;
  toggle: () => void;
  close: () => void;
}

// Crie a store usando a interface
const spotlightStore = create<StoreState>((set) => ({
  isOpen: false,
  query: "",
  category: "",
  showFilter: false,
  toggleFilter: () => set((state) => ({ showFilter: !state.showFilter })),
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => {},
}));

interface ISpotlightButton extends React.HTMLAttributes<HTMLLIElement> {
  title: string;
  description?: string;
  variant?: "projects" | "articles" | "experience" | "links" | String;

  value?: string;
  icon?: React.ReactNode;
  selected?: boolean;
}

const SpotlightButton = forwardRef<HTMLLIElement, ISpotlightButton>(
  ({ icon, ...props }, ref) => {
    const { query } = spotlightStore();

    const icons = () => {
      switch (props.variant) {
        case "projects":
          return <IconBriefcase size={18} stroke={1} />;
        case "articles":
          return <IconPaperclip size={18} stroke={1} />;
        case "experience":
          return <IconSignRightFilled size={18} stroke={1} />;
        case "links":
          return <IconLink size={18} stroke={1} />;
        default:
          return <IconLink size={18} stroke={1} />;
      }
    };

    const handleClick = () => {
      window.open(props.value, "_blank");
    };

    useHotkeys([
      {
        keys: ["Enter"], // Cmd + Enter no macOS
        callback: handleClick,
      },
      {
        keys: ["Enter"], // Ctrl + Enter no Windows/Linux
        callback: handleClick,
      },
    ]);

    return (
      <li
        ref={ref}
        className={cn(
          "flex gap-2 border-l-2 cursor-pointer items-center justify-between border-transparent px-4 py-2 w-full text-left focus:bg-slate-100 focus:outline-none  data-[selected=true]:bg-slate-100 data-[selected=true]:border-slate-900 focus:border-slate-900  data-[selected=true]:border-l-2 focus:border-l-2 relative"
        )}
        {...props}
        onClick={handleClick}
      >
        <div className="pr-2">
          {icon ? icon : null}
          {!icon && props.variant && icons()}
        </div>
        <div className="relative flex-1 ">
          <h3 className="text-sm font-medium ">{props.title}</h3>
          {props.description && (
            <p className="text-sm text-slate-500 text-ellipsis overflow-hidden whitespace-nowrap w-[400px]">
              {props.description}
            </p>
          )}
        </div>
        <div className="w-8 flex items-center p-2 justify-center border hover:bg-slate-100 border-slate-300 rounded-md">
          <IconExternalLink size={18} stroke={1} />
        </div>
      </li>
    );
  }
);

SpotlightButton.displayName = "SpotlightButton";

export interface ISpotlightOption {
  id: string;
  title: string;
  description?: string;
  value?: string;
  icon?: React.ReactNode;
  variant: "projects" | "articles" | "experience" | "links" | string;
  onClick?: () => void;
}

interface ISpotlight {
  data: ISpotlightOption[];
}

export const Spotlight: React.FC<ISpotlight> = ({ data }) => {
  const {
    close,
    open,
    isOpen,
    query,
    setQuery,
    setCategory,
    category,
    toggleFilter,
    showFilter,
  } = spotlightStore();

  const buttonRefs = useRef<Record<string, HTMLLIElement>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  useHotkeys([
    {
      keys: ["Meta", "k"], // Cmd + K no macOS
      callback: open,
    },
    {
      keys: ["Control", "k"], // Ctrl + K no Windows/Linux
      callback: open,
    },
    {
      keys: ["Escape"],
      callback: close,
    },
  ]);

  useFocusOnOpen(isOpen, inputRef);

  const clearQuery = () => {
    setQuery("");
    setCategory("");
  };

  useEffect(() => {
    if (isOpen) {
      console.log(1);

      document.body.style.overflow = "hidden";
    } else {
      console.log(2);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const categories = useMemo(
    () => [
      {
        label: "Projects",
        value: "projects",
        icon: <IconBriefcase size={18} />,
      },
      { label: "Blog", value: "blog", icon: <IconBlockquote size={18} /> },
      { label: "Links", value: "link", icon: <IconLink size={18} /> },
      { label: "Others", value: "others", icon: <IconFolders size={18} /> },
    ],
    []
  );

  const selectedCategory = useMemo(() => {
    return categories.find((value) => value.value === category);
  }, [categories, category]);

  // key functions

  const indexPrevPosition = useRef("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const focusedId = document.activeElement?.getAttribute("data-index") || "";
    const keys = Object.keys(buttonRefs.current); // Obtem as chaves em ordem

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const newIndex = keys.indexOf(focusedId) + 1;
      updateSelected(focusedId, keys[newIndex]);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const newIndex = keys.indexOf(focusedId) - 1;
      if (newIndex < 0) {
        inputRef.current?.focus();
        updateSelected(focusedId, "");
        return;
      }
      updateSelected(focusedId, keys[newIndex]);
    }
  };

  const updateSelected = (currentIndex: string, newIndex: string) => {
    // Remove atributo "data-selected" do item atual

    indexPrevPosition.current = newIndex;
    if (buttonRefs.current[currentIndex]) {
      buttonRefs.current[currentIndex].setAttribute("data-selected", "false");
      buttonRefs.current[currentIndex].setAttribute("aria-selected", "false");
    }

    // Adiciona atributo "data-selected" no novo item
    if (buttonRefs.current[newIndex]) {
      buttonRefs.current[newIndex].setAttribute("data-selected", "true");
      buttonRefs.current[newIndex].setAttribute("aria-selected", "true");
      buttonRefs.current[newIndex]?.focus();
    }
  };

  useEffect(() => {
    return () => {
      indexPrevPosition.current = "";
      setQuery("");
      setCategory("");
    };
  }, [isOpen, setQuery, setCategory]);

  const filteredData = useMemo(() => {
    const normalizedQuery = query?.toLowerCase().trim();

    const filtered = data.filter((item) => {
      if (!normalizedQuery) return !category || item.variant === category;

      const isMatch =
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description?.toLowerCase().includes(normalizedQuery);

      return isMatch && (!category || item.variant === category);
    });

    const reducePerVariant = filtered.reduce((acc, item) => {
      const findIndex = acc.findIndex((i) => i.variant === item.variant);
      if (findIndex !== -1) {
        acc[findIndex].items.push(item);
      } else {
        acc.push({ variant: item.variant, items: [item] });
      }
      return acc;
    }, [] as { variant: string; items: typeof filtered }[]);

    return reducePerVariant;
  }, [data, category, query]);

  return (
    <>
      <button aria-label="open spotlight" onClick={open}>
        <IconTerminal2 size={24} stroke={1} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={close}
              className="fixed inset-0 bg-gray-500/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed top-[50%] left-[50%] w-11/12 lg:w-8/12 z-50 "
              initial={{ opacity: 0, y: "-100%", x: "-50%" }}
              animate={{ opacity: 1, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, y: "-100%", x: "-50%" }}
              onKeyDown={handleKeyDown}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.5,
              }}
            >
              <div
                className="rounded-lg border w-full h-full relative bg-white "
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                <div className="p-4 flex items-center gap-4 border-b">
                  <span className="w-4 h-4">
                    <IconSearch size={18} className="text-neutral-600" />
                  </span>
                  {selectedCategory && (
                    <button
                      onClick={() => setCategory("")}
                      className="text-sm text-neutral-600 gap-2 bg-slate-10 border p-1 pl-2 rounded-full inline-flex items-center  hover:bg-slate-50"
                    >
                      {selectedCategory.label}
                      <span className="border bg-slate-100 p-1 rounded-full">
                        <IconX size={18} stroke={1} />
                      </span>
                    </button>
                  )}
                  <input
                    className="h-8 w-full focus:outline-none"
                    placeholder="Type to search"
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />

                  {query && (
                    <button className="text-slate-500 p-2 bg-slate-100 rounded-full">
                      <IconX size={18} stroke={1} onClick={clearQuery} />
                    </button>
                  )}
                  <button
                    className={cn(
                      "p-2 rounded-full hover:bg-slate-100 text-slate-500 border"
                    )}
                    onClick={toggleFilter}
                  >
                    {showFilter ? (
                      <IconAdjustmentsOff size={18} />
                    ) : (
                      <IconAdjustments size={18} />
                    )}
                  </button>

                  <button
                    className="text-slate-500 p-2 border rounded-full hover:bg-slate-100"
                    onClick={close}
                  >
                    <IconX size={18} stroke={1} onClick={clearQuery} />
                  </button>
                </div>

                <AnimatePresence>
                  {showFilter && (
                    <motion.div
                      className="flex gap-2 p-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          onClick={() => setCategory(category.value)}
                          className={cn(
                            "inline-flex items-center gap-2 border p-2 rounded-md text-sm text-slate-600",
                            category.value === selectedCategory?.value &&
                              "bg-slate-100"
                          )}
                        >
                          {category.icon && category.icon}
                          {category.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className="h-[calc(100vh-250px)] overflow-y-auto"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {filteredData.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="text-xs text-slate-500 bg-slate-200 w-full uppercase px-4 py-1"
                      >
                        {item.variant}
                      </div>
                      <ul>
                        {item.items?.map((item) => (
                          <SpotlightButton
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            variant={item.variant}
                            value={item.value}
                            data-index={item.id}
                            icon={item.icon}
                            onMouseOver={() =>
                              updateSelected(indexPrevPosition.current, item.id)
                            }
                            tabIndex={0}
                            ref={(el) => (buttonRefs.current[item.id] = el!)}
                          />
                        ))}
                      </ul>
                    </>
                  ))}
                </div>
                <div
                  className="bg-gray-50 p-4 rounded-b-lg border-t flex justify-between items-center"
                  aria-labelledby="spotlight-footer"
                >
                  <div className="flex gap-1 items-center">
                    <button className="bg-slate-200 p-1 rounded-sm text-slate-700">
                      <IconCaretUpFilled size={16} stroke={1} />
                    </button>
                    <button className="bg-slate-200 p-1 rounded-sm text-slate-700">
                      <IconCaretDownFilled size={16} stroke={1} />
                    </button>
                    <span className="text-sm text-slate-500 ml-2">
                      To Navigate
                    </span>
                  </div>
                  <span className="text-sm text-slate-500 ml-2">
                    Press <b>esc</b> to close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
