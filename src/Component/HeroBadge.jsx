
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "Built For Modern Tailors",
  "Manage Orders Easily",
  "Track Measurements Fast",
  "Grow Your Fashion Brand",
];

const HeroBadge = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="
      inline-flex
      items-center
      gap-3
      bg-white/70
      dark:bg-white/[0.04]
      border
      border-black/5
      dark:border-white/10
      backdrop-blur-md
      px-5
      py-2.5
      rounded-full
      shadow-lg
      "
    >
      {/* Animated Dot */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        w-2.5
        h-2.5
        rounded-full
        bg-[#E11D48]
        "
      />

      {/* Text */}
      <motion.span
        key={textIndex}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="
        text-[#8B0000]
        dark:text-[#cf0e31]
        text-[10px]
        sm:text-xs
        font-bold
        tracking-[0.2em]
        uppercase
        min-w-[220px]
        "
      >
        {texts[textIndex]}
      </motion.span>
    </motion.div>
  );
};

export default HeroBadge;
