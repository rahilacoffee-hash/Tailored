import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiClipboard,
  FiCreditCard,
  FiTrendingUp,
} from "react-icons/fi";

const steps = [
  {
    id: "01",

    title: "Create Your Tailored Account",

    desc: "Sign up in seconds and set up your tailoring business profile to start managing everything digitally.",

    icon: <FiUser />,

    image: "Createaccount.png",
  },

  {
    id: "02",

    title: "Add Customers & Save Measurements",

    desc: "Create customer profiles, store body measurements securely, and access them anytime without notebooks.",

    icon: <FiClipboard />,

    image: "measurement.png",
  },

  {
    id: "03",

    title: "Track Orders & Delivery Progress",

    desc: "Manage tailoring orders from pending to delivered with organized status updates and reminders.",

    icon: <FiCreditCard />,

    image: "TrackOrders.png",
  },

  {
    id: "04",

    title: "Monitor Payments & Grow Your Business",

    desc: "Track deposits, balances, invoices, and customer payments while building a more professional business.",

    icon: <FiTrendingUp />,

    image: "MonitorPayments.png",
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="howitworks"
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
      {/* Background Ambient Lights */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
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
        bg-red-400/20
        dark:bg-red-500/20
        blur-3xl
        rounded-full
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-200px]
        left-[-100px]
        w-[450px]
        h-[450px]
        bg-pink-300/20
        dark:bg-[#E11D48]/10
        blur-3xl
        rounded-full
        "
      />

      {/* Watermark */}

      <motion.img
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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

      <motion.img
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
            HOW IT WORKS
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
            transition-colors
            duration-500
            "
          >
            Everything You Need,
            <span className="text-[#8B0000] dark:text-[#cf0e31]">
              {" "}
              In Just A Few Steps.
            </span>
          </h2>

          <p
            className="
            text-gray-500
            dark:text-gray-400
            text-lg
            mt-6
            leading-relaxed
            transition-colors
            duration-500
            "
          >
            Tailored helps you manage customers, measurements, orders and
            payments effortlessly.
          </p>
        </motion.div>

        {/* Main Content */}

        <div
          className="
          mt-24
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* LEFT SIDE */}

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActive(index)}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  x: 10,
                }}
                className={`
                group
                relative
                rounded-[32px]
                p-6
                overflow-hidden
                border
                transition-all
                duration-500
                cursor-pointer

                ${
                  active === index
                    ? `
                    bg-white
                    dark:bg-[#111111]
                    border-red-200
                    dark:border-red-500/20
                    shadow-[0_20px_80px_rgba(225,29,72,0.08)]
                    `
                    : `
                    bg-white/60
                    dark:bg-white/[0.03]
                    border-black/5
                    dark:border-white/5
                    `
                }
                `}
              >
                {/* Ambient Light */}

                <motion.div
                  animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.15, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
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
                  bg-[#8B0000] dark:bg-[#cf0e31]/10
                  blur-3xl
                  rounded-full
                  "
                />

                <div className="relative flex gap-5">
                  {/* Icon */}

                  <div
                    className="
                    min-w-[60px]
                    h-[60px]
                    rounded-2xl
                    bg-red-50
                    dark:bg-red-500/10
                    text-[#8B0000] dark:text-[#cf0e31]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    "
                  >
                    {step.icon}
                  </div>

                  {/* Content */}

                  <div>
                    <span
                      className="
                      text-sm
                      font-bold
                     text-[#8B0000] dark:text-[#cf0e31]
                      tracking-wider
                      "
                    >
                      {step.id}
                    </span>

                    <h3
                      className="
                      text-2xl
                      font-bold
                      text-black
                      dark:text-white
                      mt-1
                      transition-colors
                      duration-500
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                      text-gray-500
                      dark:text-gray-400
                      leading-relaxed
                      mt-3
                      transition-colors
                      duration-500
                      "
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center">
            {/* Glow */}

            <div
              className="
              absolute
              w-[350px]
              h-[350px]
              bg-[#E11D48]/10
              blur-[120px]
              rounded-full
              "
            />

            {/* Phone */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              relative
              hidden
              md:flex
              w-[300px]
              sm:w-[340px]
              h-[620px]
              sm:h-[600px]
              rounded-[45px]
              border-[10px]
              border-black
              dark:border-white
            bg-gray-700
              dark:bg-black
              overflow-hidden
              shadow-[0_40px_100px_rgba(0,0,0,0.25)]
              "
            >
              {/* Dynamic Image */}

              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[active].image}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  src={steps[active].image}
                  alt={steps[active].title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
