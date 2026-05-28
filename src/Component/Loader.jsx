import { motion } from "framer-motion";

let letters = "Your Tailoring Business, Fully Organized".split("");

export default function Loader() {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 overflow-hidden"
      style={{ backgroundColor: "rgba(255,249,245,0.82)", backdropFilter: "blur(8px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.4, 0, 1, 1] } }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >

      {/* Spinner */}
      <motion.div
        className="relative w-[88px] h-[88px]"
        initial={{ opacity: 0, scale: 0.7, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.06, 0.64, 1] }}
      >

        {/* Pulse ring 1 */}
        <motion.div
          className="absolute inset-[-12px] rounded-full border border-[#8B0000]/20"
          animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Pulse ring 2 — delayed */}
        <motion.div
          className="absolute inset-[-12px] rounded-full border border-[#8B0000]/10"
          animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
        />

        {/* Outer track */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 88 88" fill="none">
          <circle cx="44" cy="44" r="38" stroke="#EAD8D0" strokeWidth="3" />
        </svg>

        {/* Dark arc — forward */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 88 88"
          fill="none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="44" cy="44" r="38"
            stroke="#1a1a1a"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="238.76"
            strokeDashoffset="178"
          />
        </motion.svg>

        {/* Red arc — forward, offset */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 88 88"
          fill="none"
          animate={{ rotate: [-60, 300] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="44" cy="44" r="38"
            stroke="#8B0000"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="238.76"
            strokeDashoffset="205"
          />
        </motion.svg>

        {/* Inner track */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 88 88" fill="none">
          <circle cx="44" cy="44" r="24" stroke="#EAD8D0" strokeWidth="2" />
        </svg>

        {/* Inner red arc — counter-rotating */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 88 88"
          fill="none"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="44" cy="44" r="24"
            stroke="#8B0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="150.8"
            strokeDashoffset="112"
            opacity="0.5"
          />
        </motion.svg>

        {/* Center breathing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#8B0000]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

      </motion.div>

      {/* TAILORED letter stagger */}
      <div className="flex items-center gap-[3px]">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="text-[10px] font-light tracking-[0.22em] text-black/35"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif" }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.3, ease: "easeOut" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Thread progress line */}
      <div className="w-12 h-px bg-[#8B0000]/15 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#8B0000] rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>

    </motion.div>
  );
}