import { useDebouncedCallback } from "@/hooks/useDebouncedCallback";
import { IconHeart } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ILike {
  onLike: (likes: number) => void;
  initialLikes?: number;
}
export const Like: React.FC<ILike> = ({ onLike, initialLikes }) => {
  const [newsLikesCount, setNewsLikes] = useState(initialLikes || 0);

  const handleSearch = useDebouncedCallback(() => {
    onLike(newsLikesCount);
  }, 1000);

  const incrementLikes = () => {
    setNewsLikes(newsLikesCount + 1);
    handleSearch();
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.8 }}
      className="hover:text-red-500 inline-flex gap-1 items-center"
      aria-label="Save to favorites"
      onClick={incrementLikes}
    >
      {newsLikesCount}
      <IconHeart size={18} stroke={1} />
    </motion.button>
  );
};
