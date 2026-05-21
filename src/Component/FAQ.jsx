import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is Tailored?",
    answer:
      "Tailored is a fashion-tech platform that helps tailors and fashion designers manage customers, measurements, orders, and payments digitally.",
  },

  {
    question: "Who is Tailored for?",
    answer:
      "Tailored is built for tailors, fashion designers, small fashion businesses, apprentices, and fashion entrepreneurs across Africa.",
  },

  {
    question: "Will the app work offline?",
    answer:
      "Yes. Tailored is being designed with offline-friendly features so users can still access important business tools without internet connection.",
  },

  {
    question: "Is Tailored free?",
    answer:
      "Tailored will offer a free version with essential features and premium plans for advanced business tools.",
  },

  {
    question: "When will Tailored launch?",
    answer:
      "We are currently preparing for early access launch. Join the waitlist to be among the first users.",
  },

  {
    question: "Will WhatsApp integration be available?",
    answer:
      "Yes. Future updates will include WhatsApp integration for customer communication, order updates, and receipts.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
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

      {/* Ambient Glow */}

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

      {/* Watermark Light */}

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

      {/* Watermark Dark */}

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

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

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
          className="text-center"
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
            FAQ
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
            Frequently Asked
            <span className="text-[#8B0000] dark:text-[#cf0e31]">
              {" "}
              Questions
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
            Everything you need to know about Tailored.
          </p>
        </motion.div>

        {/* FAQ ITEMS */}

        <div className="mt-20 grid md:grid-cols-2 gap-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
              overflow-hidden
              rounded-[28px]
              bg-white/70
              dark:bg-white/[0.03]
              border
              border-black/5
              dark:border-white/5
              backdrop-blur-xl
              shadow-lg
              "
            >

              {/* Question */}

              <button
                onClick={() => toggleFAQ(index)}
                className="
                w-full
                flex
                items-center
                justify-between
                gap-6
                px-7
                py-6
                text-left
                "
              >

                <h3
                  className="
                  text-lg
                  md:text-xl
                  font-bold
                  text-black
                  dark:text-white
                  "
                >
                  {faq.question}
                </h3>

                <div
                  className="
                  min-w-[42px]
                  h-[42px]
                  rounded-full
                  bg-red-50
                  dark:bg-red-500/10
                  text-[#8B0000]
                  dark:text-[#FF4D6D]
                  flex
                  items-center
                  justify-center
                  text-xl
                  "
                >
                  {active === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>

              {/* Answer */}

              <AnimatePresence>

                {active === index && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="px-7 pb-7">

                      <p
                        className="
                        text-gray-600
                        dark:text-gray-300
                        leading-relaxed
                        text-base
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;