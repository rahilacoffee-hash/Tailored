import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiUsers,
  FiCreditCard,
  FiClipboard,
} from "react-icons/fi";

import DemoBtn from "./WatchDemoBtn";
import HeroBadge from "./HeroBadge";

const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-[#FFF9F5]
      dark:bg-[#050505]
      pt-32
      lg:pt-28
      transition-colors
      duration-500
      "
    >

      {/* GRID OVERLAY */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.4]
        dark:opacity-[0.2]
        bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]
        dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      {/* DISCO LIGHTING */}

      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.2, 1],
          x: [0, 60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-250px]
        right-[-100px]
        w-[500px]
        h-[500px]
        bg-[#E11D48]/25
        blur-3xl
        rounded-full
        "
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.25, 0.08],
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-200px]
        left-[-100px]
        w-[400px]
        h-[400px]
        bg-blue-500/15
        blur-3xl
        rounded-full
        "
      />

      {/* WATERMARK */}

      <img
        src="tailored-icon1.png"
        alt=""
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[400px]
        sm:w-[550px]
        lg:w-[800px]
        opacity-[0.03]
        pointer-events-none
        select-none
        dark:hidden
        "
      />

      <img
        src="tailored-icon.PNG"
        alt=""
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[400px]
        sm:w-[550px]
        lg:w-[800px]
        opacity-[0.04]
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
        lg:gap-10
        items-center
        relative
        z-10
        w-full
        "
      >

        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          flex
          flex-col
          items-center
          lg:items-start
          text-center
          lg:text-left
          "
        >

          {/* BADGE */}

           <HeroBadge/>
          {/* HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
            text-5xl
            sm:text-6xl
            xl:text-[92px]
            font-black
            leading-[0.9]
            tracking-tight
            mt-7
            text-black
            dark:text-white
            "
          >
            Your
            <br />

            Tailoring
            <br />

            Business,
            <span
              className="
              block
              text-[#8B0000] dark:text-[#cf0e31]
              mt-2
              "
            >
              Organized.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
            text-gray-600
            dark:text-gray-400
            text-lg
            leading-relaxed
            mt-7
            max-w-xl
            "
          >
            Tailored helps tailors and fashion designers
            manage customers, measurements, orders and
            payments — all inside one beautiful modern app.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="
            flex
            flex-col
            sm:flex-row
            items-center
            gap-4
            mt-10
            w-full
            sm:w-auto
            "
          >

            {/* JOIN BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
              group
              w-full
              sm:w-auto
               bg-[#8B0000] dark:bg-[#cf0e31]
            
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              shadow-[0_15px_40px_rgba(225,29,72,0.35)]
              transition-all
              duration-300
              "
            >
              Join Waitlist

              <FiArrowRight
                className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                "
              />
            </motion.button>

            {/* DEMO BUTTON */}

            <DemoBtn />
          </motion.div>

          {/* STATS */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="
            flex
            flex-wrap
            justify-center
            lg:justify-start
            gap-6
            mt-14
            "
          >

            {[
              "50+ Tailors",
              "Cloud Backup",
              "24/7 Access",
            ].map((item, index) => (
              <div
                key={index}
                className="
                px-5
                py-3
                rounded-2xl
                bg-white/70
                dark:bg-white/[0.04]
                border
                border-black/5
                dark:border-white/10
                backdrop-blur-xl
                shadow-lg
                "
              >
                <p
                  className="
                  text-sm
                  font-semibold
                  text-black
                  dark:text-white
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          relative
          flex
          justify-center
          items-center
          mt-10
          lg:mt-0
          "
          style={{
            perspective: 2000,
          }}
        >

          {/* GLOW */}

          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            w-[350px]
            h-[350px]
            lg:w-[550px]
            lg:h-[550px]
            bg-[#E11D48]/20
            blur-3xl
            rounded-full
            "
          />

          {/* FLOATING CARD 1 */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            top-10
            left-0
            lg:left-10
            z-20
            hidden
            md:flex
            items-center
            gap-4
            bg-white/80
            dark:bg-white/[0.05]
            backdrop-blur-2xl
            border
            border-white/10
            rounded-3xl
            px-5
            py-4
            shadow-2xl
            "
          >

            <div
              className="
              w-12
              h-12
              rounded-2xl
              bg-[#cf0e31]
              text-white
              flex
              items-center
              justify-center
              "
            >
              <FiUsers />
            </div>

            <div>
              <p className="font-bold text-black dark:text-white">
                Customers
              </p>

              <span className="text-sm text-gray-500">
                120+ Managed
              </span>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            bottom-16
            right-0
            lg:right-10
            z-20
            hidden
            md:flex
            items-center
            gap-4
            bg-white/80
            dark:bg-white/[0.05]
            backdrop-blur-2xl
            border
            border-white/10
            rounded-3xl
            px-5
            py-4
            shadow-2xl
            "
          >

            <div
              className="
              w-12
              h-12
              rounded-2xl
              bg-black
              dark:bg-white
              text-white
              dark:text-black
              flex
              items-center
              justify-center
              "
            >
              <FiCreditCard />
            </div>

            <div>
              <p className="font-bold text-black dark:text-white">
                Payments
              </p>

              <span className="text-sm text-gray-500">
                Orders Tracked
              </span>
            </div>
          </motion.div>

          {/* FLOATING CARD 3 */}

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
            absolute
            bottom-0
            left-10
            z-20
            hidden
            xl:flex
            items-center
            gap-4
            bg-white/80
            dark:bg-white/[0.05]
            backdrop-blur-2xl
            border
            border-white/10
            rounded-3xl
            px-5
            py-4
            shadow-2xl
            "
          >

            <div
              className="
              w-12
              h-12
              rounded-2xl
              bg-blue-500
              text-white
              flex
              items-center
              justify-center
              "
            >
              <FiClipboard />
            </div>

            <div>
              <p className="font-bold text-black dark:text-white">
                Orders
              </p>

              <span className="text-sm text-gray-500">
                Live Tracking
              </span>
            </div>
          </motion.div>

          {/* PHONE */}

          <motion.img
            src="ChatGPT Image May 20, 2026, 12_46_24 AM.png"
            alt="Tailored App"
            animate={{
              rotateY: [0, -15, 15, 0],
              rotateX: [0, 5, -5, 0],
              rotateZ: [0, 1, -1, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.03,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
            phone-3d
            w-full
            max-w-[320px]
            sm:max-w-md
            lg:max-w-xl
            relative
            z-10
            will-change-transform
            drop-shadow-[0_60px_100px_rgba(0,0,0,0.25)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;