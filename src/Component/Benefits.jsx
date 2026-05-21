import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

let benefits = [
  "No more lost measurement books",
  "Better organization",
  "Faster workflow",
  "Improved professionalism",
  "Increased customer trust",
];

let Benefits = () => {
  return (
    <section className="bg-[#FFF9F5]  dark:bg-black py-20 lg:py-28 overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            
            <span className="text-[#8B0000] text-xs font-bold tracking-[0.2em] uppercase">
              Benefits
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black dark:text-[#FFF9F5] leading-tight mt-3">
              Why Tailors Love{" "}
              <span className="text-[#8B0000] dark:text-[#cf0e31]">Tailored</span>
            </h2>

            <ul className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8B0000] flex items-center justify-center">
                    <FaCheck className="text-white text-[9px]" />
                  </span>
                  <span className="text-gray-600 text-base font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="Screenshot_from_2026-05-20_23-51-16-removebg-preview.png"
                alt="Tailor using Tailored app"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl px-5 py-4"
            >
              <p className="text-gray-400 text-xs font-medium">Trusted by tailors</p>
              <h3 className="text-2xl font-black text-black mt-1">500+</h3>
              <p className="text-[#8B0000] text-xs font-semibold mt-1">Across Africa</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;