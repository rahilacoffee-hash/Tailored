import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import HeroBadge from "../Component/HeroBadge";
import DemoBtn from "./WatchDemoBtn";
import MotionCounter from "./MotionCounter";
import { FaStar } from "react-icons/fa";

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

const floatingCards = [
  {
    title: "New Customer",
    value: "Esther Johnson",
    top: "18%",
    left: "0%",
  },

  {
    title: "Payment Received",
    value: "₦120,000",
    top: "70%",
    right: "0%",
  },

  {
    title: "New Order",
    value: "Agbada Premium",
    top: "50%",
    left: "-5%",
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

  const statsRef = useRef(null);

const isInView = useInView(statsRef, {
  once: false,
  amount: 0.5,
});

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
      "
    >
      {/* GRID */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        "
        style={{
          backgroundImage: "radial-gradient(#E11D48 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* GLOW 1 */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.2, 1],
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-200px]
        left-[-150px]
        w-[550px]
        h-[550px]
        bg-[#E11D48]/20
        blur-[140px]
        rounded-full
        "
      />

      {/* GLOW 2 */}

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-250px]
        right-[-150px]
        w-[500px]
        h-[500px]
        bg-blue-400/10
        blur-[140px]
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
        w-[650px]
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
        w-[650px]
        opacity-[0.03]
        pointer-events-none
        select-none
        hidden
        dark:block
        "
      />

      {/* MAIN */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        pt-36
        pb-24
        grid
        lg:grid-cols-2
        gap-20
        items-center
        "
      >
        {/* LEFT */}

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
            duration: 0.9,
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
            px-5
            py-2.5
            rounded-full
            bg-white/70
            dark:bg-white/[0.04]
            border
            border-black/5
            dark:border-white/10
            backdrop-blur-xl
            shadow-lg
            "
          >
            <HeroBadge />
          </motion.div>

          {/* TITLE */}

          <h1
            className="
            mt-8
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-black
            leading-[0.92]
            tracking-tight
            text-black
            dark:text-white
            "
          >
            Run Your
            <span
              className="
              block
              text-[#8B0000]
              dark:text-[#cf0e31]
              "
            >
              Tailoring Business
            </span>
            Like A Modern Brand.
          </h1>

          {/* TEXT */}

          <p
            className="
            mt-8
            max-w-xl
            text-lg
            leading-relaxed
            text-gray-600
            dark:text-gray-400
            "
          >
            Manage customers, measurements, payments and orders with one premium
            platform built for African tailors and fashion designers.
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
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
              h-14
              px-8
              rounded-full
              bg-[#8B0000]
              dark:bg-[#cf0e31]
              text-white
              font-semibold
              shadow-[0_15px_40px_rgba(225,29,72,0.35)]
              hover:shadow-[0_20px_60px_rgba(225,29,72,0.45)]
              transition-all
              duration-300
              "
            >
              Join Waitlist
            </motion.button>

            <DemoBtn />
          </div>

          {/* SOCIAL PROOF */}

          <div
  ref={statsRef}
  className="
  flex
  items-center
  gap-10
  mt-14
  flex-wrap
  "
>
  {[
    {
      number: 50,
      suffix: "+",
      label: "Early Users",
    },

    {
      number: 24,
      suffix: "/7",
      label: "Cloud Backup",
    },

    {
      number: 100,
      suffix: "%",
      label: "AI Features",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      className="relative"
    >
      <h3
        className="
        text-4xl
        font-black
        text-black
        dark:text-white
        "
      >
        {isInView && (
          <MotionCounter
            value={item.number}
          />
        )}

        {item.suffix}
      </h3>

      <p
        className="
        text-sm
        text-gray-500
        dark:text-gray-400
        mt-2
        "
      >
        {item.label}
      </p>
    </motion.div>
  ))}
</div>
 <div className="flex items-center gap-3  mt-4 justify-center lg:justify-start">
                <div className="flex -space-x-3 ">
                  {[
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ipASQND97C9Q6_KpMfBqJ8NNSJ4KjeZ8SQ&s",
                    "https://i.pravatar.cc/150?img=12",
                    "https://uosjournalism.shorthandstories.com/weareigbo/assets/mpAsy14sZs/still-1920x1080.jpeg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="customer"
                      className="w-9 h-9 rounded-full border-2 border-[#1a0000] object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-black dark:text-white text-sm font-semibold">
                    Our Happy Customers
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-gray-400 text-xs">4.5 Review</span>
                  </div>
                </div>
              </div>
        </motion.div>

        

        {/* RIGHT */}

        <div
          className="
          relative
          h-[720px]
          flex
          items-center
          justify-center
          perspective
          "
        >
          {/* FLOATING CARDS */}

          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}
              style={{
                top: card.top,
                left: card.left,
                right: card.right,
              }}
              className="
              absolute
              z-30
              bg-white/80
              dark:bg-[#0D0D0D]/90
              backdrop-blur-2xl
              border
              border-black/5
              dark:border-white/10
              rounded-3xl
              p-4
              shadow-2xl
              "
            >
              <p
                className="
                text-xs
                text-gray-500
                dark:text-gray-400
                "
              >
                {card.title}
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
                {card.value}
              </h3>
            </motion.div>
          ))}

          {/* MAIN VISUAL */}

          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlides[currentSlide].image}
              src={heroSlides[currentSlide].image}
              alt=""
              initial={{
                opacity: 0,
                scale: 0.85,
                rotateY: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                y: [0, -18, 0],
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                rotateY: 20,
              }}
              transition={{
                duration: 1,
              }}
              className="
              relative
              z-20
              w-[320px]
              sm:w-[430px]
              lg:w-[520px]
              object-contain
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]
              phone-3d
              "
            />
          </AnimatePresence>

          {/* GLOW RING */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#E11D48]/20
            blur-[120px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
