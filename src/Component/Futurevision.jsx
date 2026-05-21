import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

let visionItems = [
  "AI Body Measurement",
  "Tailor Marketplace",
  "Analytics Dashboard",
  "Multi-shop Management",
  "WhatsApp Integration",
];

let FutureVision = () => {
  return (
    <section className="relative bg-black dark:bg-[#FFF9F5] overflow-hidden py-20 lg:py-28">
      {/* Background glow */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#8B0000]/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-[#8B0000]/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[#cf0e31] dark:text-[#8B0000] text-xs font-bold tracking-[0.2em] uppercase">
              Future Vision
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white dark:text-black leading-tight mt-3">
              Building the Future of{" "}
              <span className="text-[#cf0e31] dark:text-[#8B0000]">Fashion Business</span> in Africa
            </h2>

            <ul className="mt-8 flex flex-col gap-4">
              {visionItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8B0000] flex items-center justify-center">
                    <FaCheck className="text-white text-[9px]" />
                  </span>
                  <span className="text-white/70 dark:text-black/70 text-base font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — dark app screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center items-center"
          >
            {/* Glow ring behind image */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-[#8B0000]/20 blur-2xl" />

            {/* Rotating ring */}
            <motion.div
              className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#8B0000]/20 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="Screenshot_from_2026-05-20_23-54-35-removebg-preview.png"
              alt="Tailored Future Vision"
              className="relative z-10 w-full max-w-sm lg:max-w-md drop-shadow-[0_40px_80px_rgba(139,0,0,0.3)]"
            />

            {/* Floating badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                duration: 0.5,
                ease: [0.34, 1.06, 0.64, 1],
              }}
              animate={{ y: [0, -8, 0] }}
              className="absolute top-6 -right-4 lg:-right-8 z-20 bg-[#cf0e31] dark:bg-[#8B0000]  text-white rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs font-bold tracking-wide uppercase">
                Coming Soon
              </p>
              <h3 className="text-lg font-black mt-0.5">AI Measurement</h3>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
