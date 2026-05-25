import { motion } from "framer-motion";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

let ProgressDots = () => {
  let dots = [0, 1, 2];
  return (
    <div className="flex gap-1.5">
      {dots.map((i) => (
        <motion.span
          key={i}
          className="w-1 h-1 rounded-full"
          animate={{
            backgroundColor: [
              "rgba(0,0,0,0.1)",
              "rgba(0,0,0,0.45)",
              "rgba(0,0,0,0.1)",
            ],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

let ThinProgressBar = () => {
  let progress = useMotionValue(0);
  let width = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    let controls = animate(progress, 1, {
      duration: 3,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.5,
    });
    return controls.stop;
  }, []);

  return (
    <div className="w-20 h-px bg-black/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ width, backgroundColor: "#8B0000" }}
      />
    </div>
  );
};

export default function Loader() {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.4, 0, 1, 1] } }}
    >
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,0,0,0.06) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      />

      <motion.div
        className="flex flex-col items-center gap-3 relative z-10"
        initial={{ opacity: 0, scale: 0.82, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.06, 0.64, 1] }}
      >
        <img
          src="/tailored-icon1.png"
          alt="Tailored"
          className="w-36 md:w-44 absolute -top-28"
        />

        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
        >
          
          <span
            className="text-black/30 tracking-[0.18em] text-[9px] uppercase font-light"
            style={{ fontFamily: "-apple-system, 'Helvetica Neue', sans-serif" }}
          >
           Your Tailoring Business, Fully Organized
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
      >
        <ThinProgressBar />
      
      </motion.div>

     
    </motion.div>
  );
}