import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

import DemoModal from "./DemoModal";

const DemoBtn = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{
          y: -2,
          scale: 1.01,
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpenModal(true)}
        className="
        group

        relative

        flex
        items-center
        gap-4

        h-14
        px-3
        pr-6

        rounded-full

        bg-white
        dark:bg-[#111111]

        border
        border-black/5
        dark:border-white/10

        shadow-[0_10px_35px_rgba(0,0,0,0.08)]
        hover:shadow-[0_16px_45px_rgba(139,0,0,0.15)]

        transition-all
        duration-300

        overflow-hidden
        "
      >
        {/* Hover Glow */}

        <div
          className="
          absolute
          inset-0

          opacity-0
          group-hover:opacity-100

          transition-opacity
          duration-300

          bg-gradient-to-r
          from-[#8B0000]/5
          to-transparent
          "
        />

        {/* Play Circle */}

        <div
          className="
          relative

          w-10
          h-10

          rounded-full

          bg-[#8B0000]
          dark:bg-[#cf0e31]

          text-white

          flex
          items-center
          justify-center

          flex-shrink-0

          transition-all
          duration-300

          group-hover:scale-105
          "
        >
          {/* Pulse Ring */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            inset-0
            rounded-full
            border
            border-white/30
            "
          />

          {/* Icon */}

          <FaPlay className="text-[11px] ml-[2px] relative z-10" />
        </div>

        {/* Text */}

        <div className="flex flex-col items-start relative z-10">
          <span
            className="
            text-[10px]
            uppercase
            tracking-[0.22em]

            text-gray-400
            dark:text-gray-500

            leading-none
            "
          >
            Watch
          </span>

          <span
            className="
            mt-1

            text-[16px]
            font-semibold

            text-black
            dark:text-white

            leading-none
            "
          >
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