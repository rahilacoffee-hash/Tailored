import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "Built For Modern Tailors",
  "Manage Orders Easily",
  "Track Measurements Fast",
  "Grow Your Fashion Brand",
];

const HeroBadge = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          return currentText.substring(0, prev.length + 1);
        }

        return currentText.substring(0, prev.length - 1);
      });

      // Finished Typing
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }

      // Finished Deleting
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.2,
      }}
      className="
      inline-flex
      items-center
      gap-3
      bg-white/70
      dark:bg-white/[0.04]
      border
      border-black/5
      dark:border-white/10
      backdrop-blur-xl
      px-5
      py-2.5
      rounded-full
      shadow-lg
      "
    >
      {/* Animated Dot */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        w-2.5
        h-2.5
        rounded-full
        bg-[#E11D48]
        shadow-[0_0_15px_rgba(225,29,72,0.8)]
        "
      />

      {/* Typewriter Text */}
      <span
        className="
        text-[#8B0000] dark:text-[#cf0e31]
        text-[10px]
        sm:text-xs
        font-bold
        tracking-[0.2em]
        uppercase
        min-w-[220px]
        "
      >
        {displayText}

        {/* Cursor */}
        <span className="animate-pulse">|</span>
      </span>
    </motion.div>
  );
};

export default HeroBadge;
