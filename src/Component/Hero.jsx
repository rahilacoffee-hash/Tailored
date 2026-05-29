import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import HeroBadge from "../Component/HeroBadge";
import DemoBtn from "./WatchDemoBtn";
import MotionCounter from "./MotionCounter";

import { FaStar } from "react-icons/fa";

const heroSlides = [
  {
    image: "/tailore_phone.webp",
  },

  {
    image: "/phone.webp",
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
  const [currentSlide, setCurrentSlide] =
    useState(0);

  /* AUTO SWITCH */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1
          ? 0
          : prev + 1
      );
    }, 12000);

    return () =>
      clearInterval(interval);
  }, []);

  /* STATS */

  const statsRef = useRef(null);

  const isInView = useInView(
    statsRef,
    {
      once: true,
      amount: 0.4,
    }
  );

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
        opacity-[0.03]
        pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(#E11D48 1px, transparent 1px)",
          backgroundSize:
            "28px 28px",
        }}
      />

      {/* GLOW 1 */}

      <div
        className="
        absolute
        top-[-180px]
        left-[-120px]
        w-[420px]
        h-[420px]
        bg-[#E11D48]/15
        blur-[90px]
        rounded-full
        pointer-events-none
        "
      />

      {/* GLOW 2 */}

      <div
        className="
        absolute
        bottom-[-220px]
        right-[-120px]
        w-[380px]
        h-[380px]
        bg-blue-400/10
        blur-[90px]
        rounded-full
        pointer-events-none
        "
      />

      {/* WATERMARK LIGHT */}

      <img
        src="/tailored-icon1.png"
        alt=""
        loading="lazy"
        decoding="async"
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[520px]
        opacity-[0.03]
        pointer-events-none
        select-none
        dark:hidden
        "
      />

      {/* WATERMARK DARK */}

      <img
        src="/tailored-icon.png"
        alt=""
        loading="lazy"
        decoding="async"
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[520px]
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
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* BADGE */}

          <div
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
            backdrop-blur-sm
            shadow-lg
            "
          >
            <HeroBadge />
          </div>

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

          {/* DESCRIPTION */}

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
            Manage customers,
            measurements,
            payments and orders
            with one premium
            platform built for
            African tailors and
            fashion designers.
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
              text-white
              font-semibold
              shadow-[0_15px_40px_rgba(225,29,72,0.25)]
              transition-all
              duration-300
              hover:scale-[1.02]
              "
            >
              Join Waitlist
            </button>

            <DemoBtn />
          </div>

          {/* STATS */}

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
                label:
                  "Early Users",
              },

              {
                number: 24,
                suffix: "/7",
                label:
                  "Cloud Backup",
              },

              {
                number: 100,
                suffix: "%",
                label:
                  "AI Features",
              },
            ].map(
              (item, index) => (
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
                    delay:
                      index * 0.15,
                    duration: 0.5,
                  }}
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
                        value={
                          item.number
                        }
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
              )
            )}
          </div>

          {/* CUSTOMERS */}

          <div
            className="
            flex
            items-center
            gap-3
            mt-6
            "
          >
            <div className="flex -space-x-3">
              {[
                "/customers/customer1.webp",
                "/customers/customer2.webp",
                "/customers/customer3.webp",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="customer"
                  loading="lazy"
                  decoding="async"
                  className="
                  w-9
                  h-9
                  rounded-full
                  border-2
                  border-[#FFF9F5]
                  dark:border-[#050505]
                  object-cover
                  "
                />
              ))}
            </div>

            <div>
              <p
                className="
                text-black
                dark:text-white
                text-sm
                font-semibold
                "
              >
                Our Happy Customers
              </p>

              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400 text-xs" />

                <span
                  className="
                  text-gray-400
                  text-xs
                  "
                >
                  4.5 Review
                </span>
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

          {floatingCards.map(
            (card, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
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
                backdrop-blur-sm
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
            )
          )}

          {/* MAIN IMAGE */}

          <motion.img
            key={
              heroSlides[
                currentSlide
              ].image
            }
            src={
              heroSlides[
                currentSlide
              ].image
            }
            alt=""
            loading="eager"
            decoding="async"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
            relative
            z-20
            w-[320px]
            sm:w-[430px]
            lg:w-[500px]
            object-contain
            phone-3d
            "
          />

          {/* GLOW */}

          <div
            className="
            absolute
            w-[380px]
            h-[380px]
            rounded-full
            bg-[#E11D48]/15
            blur-[70px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;