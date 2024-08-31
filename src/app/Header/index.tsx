import useMouseNear from "@/hook/useMouseNear";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Circle = () => {
  const circleRef = useRef(null);
  const isNear = useMouseNear(circleRef, 100);

  return (
    <div
      className="rounded-full bg-neutral-300 transition-all duration-1000"
      style={{
        width: isNear ? "8px" : "4px",
        height: isNear ? "8px" : "4px",
      }}
      ref={circleRef}
    />
  );
};

export const Header = () => {
  const [activeSub, setActiveSub] = useState("front-end");

  useEffect(() => {
    const subs = ["front-end", "back-end", "mobile", "UX/UI"];

    const interval = setInterval(() => {
      // Gera um novo número aleatório dentro do intervalo a cada execução
      const radom = Math.floor(Math.random() * subs.length);
      setActiveSub(subs[radom]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen pb-40 pt-16  flex flex-col justify-between">
      <div className="grid grid-cols-dots">
        {Array.from({ length: 240 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "20px",
              height: "20px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title={i.toString()}
          >
            <Circle key={i} />
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.1, ease: "easeInOut" },
          }}
          className="text-neutral-300 text-6xl font-bold flex yeseva-one-regular"
        >
          Dev.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.1, ease: "easeInOut", delay: 0.1 },
          }}
          className="text-neutral-300 text-3xl flex uppercase font-thin "
        >
          {activeSub}
        </motion.h1>
      </div>
    </div>
  );
};
