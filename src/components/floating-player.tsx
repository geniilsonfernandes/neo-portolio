"use client";

import { useAnimatedBackgroundColor } from "@/hooks/useAnimatedBackgroundColor";
import {
  IconHeart,
  IconHeartFilled,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForwardFilled,
} from "@tabler/icons-react";
import clsx from "clsx";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { forwardRef, useState } from "react";

const musics = [
  {
    id: "1",
    title: "Last Nite",
    artist: "The Strokes",
    color: "#FF6B6B", // vermelho suave
    isFavorite: false,
  },
  {
    id: "2",
    title: "Reptilia",
    artist: "The Strokes",
    color: "#F7B801", // amarelo mostarda
    isFavorite: false,
  },
  {
    id: "3",
    title: "Knights of Cydonia",
    artist: "Muse",
    color: "#3B82F6", // azul vibrante
    isFavorite: false,
  },
  {
    id: "4",
    title: "Uprising",
    artist: "Muse",
    color: "#9333EA", // roxo forte
    isFavorite: false,
  },
  {
    id: "5",
    title: "Square Hammer",
    artist: "Ghost",
    color: "#10B981", // verde esmeralda
    isFavorite: false,
  },
  {
    id: "6",
    title: "Dance Macabre",
    artist: "Ghost",
    color: "#F43F5E", // rosa escuro
    isFavorite: false,
  },
  {
    id: "7",
    title: "Time Is Running Out",
    artist: "Muse",
    color: "#0EA5E9", // azul claro
    isFavorite: false,
  },
];

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8, backgroundColor: "#FFFFFF80" }}
        className={clsx(
          "flex items-center justify-center gap-2 p-2 rounded-full text-white",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

interface MusicProps {
  title: string;
  artist: string;
}

export const Music: React.FC<MusicProps> = ({ title, artist }) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col flex-1  text-white mx-4"
    >
      <h3 className="font-bold truncate">{title}</h3>
      <p className="opacity-70 text-sm truncate">{artist}</p>
    </motion.div>
  );
};

export const FloatingPlayer = () => {
  const [data, setData] = useState(musics);
  const [play, setPlay] = useState(false);
  const [index, setIndex] = useState(0);
  const controls = useAnimatedBackgroundColor(data[index].color);

  const togglePlay = () => {
    setPlay(!play);
  };

  const toggleFavorite = (index: number) => {
    setData((prevData) =>
      prevData.map((music, i) =>
        i === index ? { ...music, isFavorite: !music.isFavorite } : music
      )
    );
  };

  const nextMusic = () => {
    if (index === musics.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(Math.min(musics.length - 1, index + 1));
  };

  return (
    <motion.div
      drag
      dragSnapToOrigin
      animate={controls}
      dragConstraints={{ left: -2, right: 2, top: 0, bottom: 0 }}
      whileDrag={{ scale: 0.9 }}
      className={clsx(
        "flex items-center p-2 rounded-2xl max-w-96 w-full hover:brightness-110",
        "cursor-pointer active:cursor-grabbing"
      )}
    >
      <Button onClick={togglePlay}>
        {play ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
      </Button>

      <AnimatePresence mode="wait">
        <Music
          key={data[index].title} // importante para forçar re-render entre músicas
          title={data[index].title}
          artist={data[index].artist}
        />
      </AnimatePresence>
      <Button onClick={() => toggleFavorite(index)}>
        {data[index].isFavorite ? <IconHeartFilled /> : <IconHeart />}
      </Button>
      <Button onClick={nextMusic}>
        <IconPlayerSkipForwardFilled />
      </Button>
    </motion.div>
  );
};
