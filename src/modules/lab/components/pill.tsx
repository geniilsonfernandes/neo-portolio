"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type ChipProps = {
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Chip = ({
  variant = "solid",
  children,
  className,
  onClick,
}: ChipProps) => {
  const variantStyles = {
    solid: "bg-blue-600 text-white",
    outline: "border border-blue-600 text-blue-600 bg-transparent",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={clsx(
        "inline-flex p-1 px-2  text-sm rounded-full font-medium transition cursor-pointer",
        variantStyles[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );
};

const musicGenres = [
  {
    genre: "Rock",
    subgenres: [
      "Classic Rock",
      "Alternative Rock",
      "Hard Rock",
      "Indie Rock",
      "Progressive Rock",
      "Punk Rock",
    ],
  },
  {
    genre: "Pop",
    subgenres: ["Dance Pop", "Synthpop", "Electropop", "Teen Pop", "Pop Rock"],
  },
  {
    genre: "Hip-Hop",
    subgenres: [
      "Trap",
      "Boom Bap",
      "Conscious Rap",
      "Drill",
      "Gangsta Rap",
      "Lo-fi Hip-Hop",
    ],
  },
  {
    genre: "Electronic",
    subgenres: [
      "House",
      "Techno",
      "Trance",
      "Dubstep",
      "Drum and Bass",
      "Ambient",
    ],
  },
  {
    genre: "Jazz",
    subgenres: ["Smooth Jazz", "Bebop", "Swing", "Free Jazz", "Fusion"],
  },
  {
    genre: "Classical",
    subgenres: ["Baroque", "Romantic", "Modern", "Contemporary", "Opera"],
  },
  {
    genre: "Reggae",
    subgenres: ["Roots Reggae", "Dub", "Dancehall", "Lovers Rock"],
  },
  {
    genre: "Country",
    subgenres: [
      "Classic Country",
      "Country Pop",
      "Bluegrass",
      "Outlaw Country",
      "Americana",
    ],
  },
  {
    genre: "Metal",
    subgenres: [
      "Heavy Metal",
      "Death Metal",
      "Black Metal",
      "Power Metal",
      "Symphonic Metal",
    ],
  },
  {
    genre: "Latin",
    subgenres: ["Reggaeton", "Salsa", "Bachata", "Cumbia", "Latin Pop"],
  },
];

export const ChipGrid = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres = useMemo(() => {
    const g = musicGenres.reduce((acc, genre) => {
      const subgenres = genre.subgenres;
      if (selectedGenres.includes(genre.genre)) {
        return [...acc, genre.genre, ...subgenres];
      } else {
        return [...acc, genre.genre];
      }
    }, [] as string[]);

    return g;
  }, [selectedGenres]);
  return (
    <div className="flex flex-wrap gap-2 max-w-[300px] ">
      <AnimatePresence mode="wait">
        {genres.map((genre) => (
          <Chip
            key={genre}
            variant="outline"
            onClick={() => {
              if (selectedGenres.includes(genre)) {
                setSelectedGenres(selectedGenres.filter((g) => g !== genre));
              } else {
                setSelectedGenres([...selectedGenres, genre]);
              }
            }}
          >
            {genre}
          </Chip>
        ))}
      </AnimatePresence>
    </div>
  );
};
