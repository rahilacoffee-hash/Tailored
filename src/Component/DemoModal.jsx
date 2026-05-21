import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";

const DemoModal = ({ setOpenModal }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
      onClick={() => setOpenModal(false)}
    >

      {/* Modal Box */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        transition={{
          duration: 0.4,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-5xl"
      >

        {/* Close Button */}
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-5 right-5 z-20 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <HiX className="text-2xl" />
        </button>

        {/* Video */}
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Tailored Demo"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DemoModal;