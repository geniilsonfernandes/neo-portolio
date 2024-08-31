"use client";

import { ProjectProps } from "@/cms";
import { AnimatePresence, motion } from "framer-motion";
import { Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnchorButton from "../AnchorButton";
import Tag from "../Tag";

import useMouse from "@react-hook/mouse-position";
import { useRef, useState } from "react";

type ProjectCardProps = {
  path: string;
  hiddenCover?: boolean;
  onClick?: () => void;
} & ProjectProps;

const Project = ({
  path,
  cover,
  status,
  description,
  github,
  demo,
  title,
  hiddenCover = false,
  onClick,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMouse(elementRef);

  return (
    <>
      <motion.div
        className="cursor-pointer relative"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, scale: 0.5 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        ref={elementRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              style={{
                position: "absolute",
                width: "250px",
                height: "350px",
                borderRadius: "10px",
                left: 200,
                top: -100,
                display: isHovered ? "block" : "none",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                zIndex: 1,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                y: y ? y / 3 : 0,
                x: x ? x / 8 : 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                mass: 1,
                duration: 0.2,
              }}
            >
              <img
                src={cover}
                alt="noise"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          {cover && !hiddenCover && (
            <Image
              src={cover}
              alt="Money Guard"
              width={600}
              height={400}
              className="w-full h-36 bg-neutral-800 mb-4"
            />
          )}
        </div>
        <div className="flex gap-2 justify-between items-end">
          <Link
            href={`project/${path}`}
            className="text-neutral-300 text-lg font-bold capitalize
             
            "
          >
            {title}
          </Link>
          <Tag
            name={status === "ready" ? "Concluído" : "Em andamento"}
            color={status === "ready" ? "green" : "yellow"}
          />
        </div>
        <p className="text-neutral-400  text-sm leading-5  my-4">
          {description[0]}
        </p>
        <div className="flex gap-4 items-end mt-4">
          {github && <AnchorButton href={github}>Github</AnchorButton>}
          {demo && <AnchorButton href={demo}>Demo</AnchorButton>}
          <Link href={`project/${path}`} passHref>
            <button className="border border-neutral-600 text-neutral-300 h-7 text-sm hover:text-neutral-100 px-4 py-2 flex items-center gap-2  hover:bg-neutral-900">
              ./documentação <Paperclip size={16} strokeWidth={2} />
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
