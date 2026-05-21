import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aisha Fashion House",
    role: "Fashion Designer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Tailored is exactly what fashion businesses in Africa need. Managing customer measurements and orders feels so much easier now.",
  },

  {
    name: "Kings Stitch Studio",
    role: "Tailor",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I no longer lose customer records or forget delivery dates. Everything is organized professionally.",
  },

  {
    name: "Ella Couture",
    role: "Fashion Entrepreneur",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "The app makes my tailoring business feel modern. Clients trust my process more because everything is digital.",
  },

  {
    name: "StyleByMimi",
    role: "Fashion Brand",
    image: "https://i.pravatar.cc/150?img=25",
    review:
      "The interface feels premium and simple. Tailored helps me manage clients without stress.",
  },

  {
    name: "Classic Stitch NG",
    role: "Tailoring Business",
    image: "https://i.pravatar.cc/150?img=50",
    review:
      "This app saves us hours every week. Everything from orders to payments is organized beautifully.",
  },

  {
    name: "Zarah Couture",
    role: "Creative Designer",
    image: "https://i.pravatar.cc/150?img=18",
    review:
      "Tailored feels like the future of fashion business management in Africa.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  /* AUTO LOOP */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="
      relative
      py-28
      overflow-hidden
      bg-[#FFF9F5]
      dark:bg-[#050505]
      transition-colors
      duration-500
      "
    >

      {/* Background Glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-150px]
        right-[-100px]
        w-[400px]
        h-[400px]
        bg-red-300/20
        dark:bg-red-500/10
        blur-3xl
        rounded-full
        "
      />

      {/* Watermark */}

      <img
        src="tailored-icon1.png"
        alt=""
        aria-hidden="true"
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[350px]
        sm:w-[500px]
        lg:w-[700px]
        opacity-[0.03]
        pointer-events-none
        select-none
        dark:hidden
        "
      />

      <img
        src="tailored-icon.PNG"
        alt=""
        aria-hidden="true"
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[350px]
        sm:w-[500px]
        lg:w-[700px]
        opacity-[0.04]
        pointer-events-none
        select-none
        hidden
        dark:block
        "
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center max-w-3xl mx-auto"
        >

          <span
            className="
            px-4
            py-2
            rounded-full
          text-[#8B0000] dark:text-[#cf0e31]
            text-xs
            font-bold
            tracking-[0.2em]
            uppercase
            "
          >
            TESTIMONIALS
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-6
            text-black
            dark:text-white
            leading-tight
            "
          >
            Loved By
            <span className="text-[#8B0000] dark:text-[#cf0e31]">
              {" "}
              Modern Tailors
            </span>
          </h2>

          <p
            className="
            text-gray-500
            dark:text-gray-400
            text-lg
            mt-6
            leading-relaxed
            "
          >
            Tailored helps fashion businesses stay organized,
            professional and more efficient every day.
          </p>
        </motion.div>

        {/* SLIDER */}

        <div className="mt-20 relative max-w-4xl mx-auto">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -40,
                scale: 0.95,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
              relative
              overflow-hidden
              rounded-[36px]
              p-10
              bg-white/70
              dark:bg-white/[0.03]
              border
              border-black/5
              dark:border-white/5
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(0,0,0,0.08)]
              "
            >

              {/* Glow */}

              <motion.div
                animate={{
                  opacity: [0.08, 0.18, 0.08],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                absolute
                -top-10
                -right-10
                w-40
                h-40
                bg-[#E11D48]/10
                blur-3xl
                rounded-full
                "
              />

              {/* Stars */}

              <div className="flex items-center gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#8B0000] dark:text-[#cf0e31] text-sm"
                  />
                ))}
              </div>

              {/* Review */}

              <p
                className="
                text-xl
                md:text-2xl
                text-gray-700
                dark:text-gray-200
                leading-relaxed
                mt-8
                font-medium
                relative
                z-10
                "
              >
                “{testimonials[current].review}”
              </p>

              {/* User */}

              <div className="flex items-center gap-4 mt-10 relative z-10">

                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                  border-2
                  border-[#E11D48]/20
                  "
                />

                <div>
                  <h3
                    className="
                    font-bold
                    text-lg
                    text-black
                    dark:text-white
                    "
                  >
                    {testimonials[current].name}
                  </h3>

                  <p
                    className="
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                    "
                  >
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}

          <div className="flex items-center justify-center gap-3 mt-10">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                h-3
                rounded-full
                transition-all
                duration-500

                ${
                  current === index
                    ? "w-10 bg-[#8B0000] dark:bg-[#cf0e31]"
                    : "w-3 bg-gray-300 dark:bg-white/20"
                }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;