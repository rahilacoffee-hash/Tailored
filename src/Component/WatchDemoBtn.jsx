import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { FaPlay } from "react-icons/fa";

import DemoModal from "./DemoModal";

const DemoBtn = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Watch Demo Button */}
      <motion.button
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.7,
        }}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={() => setOpenModal(true)}
        className="group relative flex items-center gap-4 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 hover:bg-black dark:hover:bg-[#E11D48] px-3 py-2 pr-6 rounded-full transition-all duration-500 shadow-md hover:shadow-2xl overflow-hidden"
      >

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-[#E11D48]/10 to-transparent" />

        {/* Play Circle */}
        <div className="relative w-12 h-12 rounded-full bg-black dark:bg-[#E11D48] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 overflow-hidden">

          {/* Pulse */}
          <span className="absolute inset-0 rounded-full bg-white/20 scale-100 group-hover:scale-[1.7] opacity-0 group-hover:opacity-100 transition-all duration-700" />

          {/* Rotating Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 border border-white/20 rounded-full"
          />

          {/* Play Icon */}
          <FaPlay className="text-sm ml-[2px] relative z-10" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start relative z-10">

          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 group-hover:text-gray-300 transition-all duration-300">
            Watch
          </span>

          <span className="font-semibold text-black dark:text-white group-hover:text-white transition-all duration-300">
            Product Demo
          </span>
        </div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {openModal && (
          <DemoModal setOpenModal={setOpenModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default DemoBtn;