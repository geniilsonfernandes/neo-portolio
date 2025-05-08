"use client";

import { useAnimatedBackgroundColor } from "@/hooks/useAnimatedBackgroundColor";
import { motion } from "framer-motion";
import { useState } from "react";

export  function ColorSwitcher() {
  const [color, setColor] = useState("#1e40af"); // azul
  const controls = useAnimatedBackgroundColor(color);

  return (
    <div className="space-y-4">
      <motion.div animate={controls} className="w-full h-40 rounded-lg" />

      <div className="flex gap-2">
        <button
          onClick={() => setColor("#1e40af")} // azul
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
       
        </button>
        <button
          onClick={() => setColor("#047857")} // verde
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          
        </button>
        <button
          onClick={() => setColor("#dc2626")} // vermelho
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
         
        </button>
      </div>
    </div>
  );
}
