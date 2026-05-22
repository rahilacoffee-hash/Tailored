import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroBadge from "../Component/HeroBadge";
import DemoBtn from "./WatchDemoBtn";

const heroSlides = [
  {
    type: "phone",
    image: "/hero-phone1.png",
  },

  {
    type: "tailor",
    image: "/tailor-using-app1.png",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* AUTO SWITCH */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#FFF9F5]
      dark:bg-[#050505]
      transition-colors
      duration-500
      flex
      items-center
      pt-32
      lg:pt-19
      "
    >
      {/* DISCO LIGHTING */}

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.2, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-200px]
        left-[-100px]
        w-[500px]
        h-[500px]
        bg-[#E11D48]/20
        blur-3xl
        rounded-full
        "
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-200px]
        right-[-100px]
        w-[450px]
        h-[450px]
        bg-blue-400/10
        blur-3xl
        rounded-full
        "
      />

      {/* WATERMARK */}

      <img
        src="/tailored-icon1.png"
        alt=""
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        opacity-[0.03]
        pointer-events-none
        select-none
        dark:hidden
        "
      />

      <img
        src="/tailored-icon.PNG"
        alt=""
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        opacity-[0.03]
        pointer-events-none
        select-none
        hidden
        dark:block
        "
      />

      {/* CONTENT */}

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        grid
        lg:grid-cols-2
        gap-16
        items-center
        relative
        z-10
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* BADGE */}

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            inline-flex
            items-center
            gap-2
            bg-red-50
            dark:bg-red-900/5
            border
            border-red-100
            dark:border-red-500/5
            px-4
            py-2
            rounded-full
            "
          >
            <HeroBadge />
          </motion.div>

          {/* HEADING */}

          <h1
            className="
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-black
            leading-[0.95]
            tracking-tight
            text-black
            dark:text-white
            mt-8
            "
          >
            The Smartest Way
            <span
              className="
              block
              text-[#8B0000] dark:text-[#cf0e31]
              mt-3
              "
            >
              To Run Your
            </span>
            Tailoring Business.
          </h1>

          {/* TEXT */}

          <p
            className="
            text-lg
            leading-relaxed
            text-gray-600
            dark:text-gray-400
            mt-8
            max-w-xl
            "
          >
            Manage customers, measurements, orders and payments with one modern
            platform built for African fashion designers and tailors.
          </p>

          {/* BUTTONS */}

          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-10
            "
          >
            <button
              className="
              h-14
              px-8
              rounded-full
              bg-[#8B0000]
              dark:bg-[#cf0e31]
              hover:bg-[#BE123C]
               hover:dark:bg-[#cf0e31]
              text-white
              font-semibold
              shadow-[0_15px_40px_rgba(225,29,72,0.35)]
              transition-all
              duration-300
              "
            >
              Join Waitlist
            </button>

          <DemoBtn/>
          </div>
        </motion.div>

        {/* RIGHT */}

        <div
          className="
          relative
          h-[700px]
          flex
          items-center
          justify-center
          "
        >
          {/* FLOATING CUSTOMER CARD */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            top-20
            left-0
            z-30
            bg-white
            dark:bg-[#0D0D0D]
            border
            border-black/5
            dark:border-white/10
            rounded-3xl
            p-4
            shadow-xl
            backdrop-blur-xl
            "
          >
            <p
              className="
              text-xs
              text-gray-500
              dark:text-gray-400
              "
            >
              New Customer
            </p>

            <h3
              className="
              text-sm
              font-bold
              text-black
              dark:text-white
              mt-1
              "
            >
              Esther Johnson
            </h3>
          </motion.div>

          {/* FLOATING PAYMENT CARD */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-24
            right-0
            z-30
            bg-white
            dark:bg-[#0D0D0D]
            border
            border-black/5
            dark:border-white/10
            rounded-3xl
            p-4
            shadow-xl
            "
          >
            <p
              className="
              text-xs
              text-gray-500
              dark:text-gray-400
              "
            >
              Payment Received
            </p>

            <h3
              className="
              text-lg
              font-black
              text-[#E11D48]
              mt-1
              "
            >
              ₦120,000
            </h3>
          </motion.div>

          {/* MAIN HERO VISUAL */}

          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlides[currentSlide].image}
              src={heroSlides[currentSlide].image}
              alt=""
              initial={{
                opacity: 0,
                scale: 0.9,
                rotateY: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                y: [0, -15, 0],
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                rotateY: 20,
              }}
              transition={{
                duration: 1,
              }}
              className="
              relative
              z-20
              w-[300px]
              sm:w-[380px]
              lg:w-[450px]
              object-contain
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]
              "
            />
          </AnimatePresence>

          {/* GLOW RING */}

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            absolute
            w-[420px]
            h-[420px]
            rounded-full
            bg-[#E11D48]/10
            blur-3xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
