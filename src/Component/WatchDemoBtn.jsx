
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

import DemoModal from "./DemoModal";

const DemoBtn = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpenModal(true)}
        className="
        group
        flex
        items-center
        gap-4
        bg-white
        dark:bg-[#111111]
        border
        border-black/10
        dark:border-white/10
        px-3
        py-2
        pr-6
        rounded-full
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300
        "
      >
        {/* Play Circle */}
        <div
          className="
          relative
          w-12
          h-12
          rounded-full
          bg-black
          dark:bg-[#E11D48]
          text-white
          flex
          items-center
          justify-center
          transition-all
          duration-300
          group-hover:scale-105
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
            absolute
            inset-0
            rounded-full
            border
            border-white/20
            "
          />

          <FaPlay className="text-sm ml-[2px] relative z-10" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start">
          <span
            className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-gray-400
            "
          >
            Watch
          </span>

          <span
            className="
            font-semibold
            text-black
            dark:text-white
            "
          >
            Product Demo
          </span>
        </div>
      </motion.button>

      <AnimatePresence>
        {openModal && (
          <DemoModal setOpenModal={setOpenModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default DemoBtn;

