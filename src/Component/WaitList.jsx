// Waitlist.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiArrowRight,
  FiMail,
  FiPhone,
  FiUser,
  FiCheck,
} from "react-icons/fi";

const Waitlist = () => {
  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // UI STATES
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xykvweel",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError("Something went wrong.");
      }
    } catch (err) {
      setError("Network error.");
    }

    setLoading(false);
  };

  return (
    <section
      id="waitlist"
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

      {/* BACKGROUND LIGHT */}

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-200px]
        right-[-100px]
        w-[400px]
        h-[400px]
        bg-[#E11D48]/20
        blur-3xl
        rounded-full
        "
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-200px]
        left-[-100px]
        w-[350px]
        h-[350px]
        bg-blue-400/10
        blur-3xl
        rounded-full
        "
      />

      {/* WATERMARK LIGHT */}

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
        lg:w-[650px]
        opacity-[0.03]
        pointer-events-none
        select-none
        dark:hidden
        "
      />

      {/* WATERMARK DARK */}

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
        lg:w-[650px]
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
        max-w-6xl
        mx-auto
        px-6
        lg:px-12
        relative
        z-10
        "
      >

        {/* CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-white/70
          dark:bg-white/[0.04]
          border
          border-black/5
          dark:border-white/10
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          p-8
          sm:p-12
          lg:p-16
          "
        >

          {/* INNER GLOW */}

          <div
            className="
            absolute
            top-[-120px]
            right-[-120px]
            w-[280px]
            h-[280px]
            bg-[#E11D48]/15
            blur-3xl
            rounded-full
            "
          />

          <div
            className="
            grid
            lg:grid-cols-2
            gap-14
            items-center
            relative
            z-10
            "
          >

            {/* LEFT SIDE */}

            <div>

              {/* BADGE */}

              <div
                className="
                inline-flex
                items-center
                gap-2
                bg-red-50
                dark:bg-red-500/10
                border
                border-red-100
                dark:border-red-500/20
                px-4
                py-2
                rounded-full
                "
              >

                <span
                  className="
                  text-[#8B0000]
                  dark:text-[#FF4D6D]
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  uppercase
                  "
                >
                  Early Access
                </span>
              </div>

              {/* HEADING */}

              <h2
                className="
                text-4xl
                sm:text-5xl
                font-black
                leading-[1]
                tracking-tight
                mt-7
                text-black
                dark:text-white
                "
              >
                Be Among The First Tailors To Experience The
                <span
                  className="
                  text-[#E11D48]
                  block
                  mt-3
                  "
                >
                  Future Of Fashion Business.
                </span>
              </h2>

              {/* TEXT */}

              <p
                className="
                text-gray-600
                dark:text-gray-400
                text-lg
                leading-relaxed
                mt-7
                max-w-lg
                "
              >
                Join the Tailored waitlist and get early access
                to the modern business management platform built
                specifically for African tailors and fashion designers.
              </p>
            </div>

            {/* FORM */}

            <motion.form
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="
              relative
              rounded-[32px]
              bg-white
              dark:bg-[#0D0D0D]
              border
              border-black/5
              dark:border-white/5
              p-7
              sm:p-8
              shadow-xl
              "
            >

              {/* SUCCESS MESSAGE */}

              <AnimatePresence>

                {success && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="
                    mb-6
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-green-500/10
                    border
                    border-green-500/20
                    px-4
                    py-4
                    "
                  >

                    <FiCheck className="text-green-500 text-xl" />

                    <p className="text-sm text-green-500 font-medium">
                      Successfully joined the waitlist 🎉
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* NAME */}

              <div className="mb-5">

                <label className="text-sm font-semibold text-black dark:text-white block mb-3">
                  Full Name
                </label>

                <div
                  className="
                  flex
                  items-center
                  gap-3
                  h-14
                  px-4
                  rounded-2xl
                  border
                  border-black/10
                  dark:border-white/10
                  bg-[#FAFAFA]
                  dark:bg-white/[0.03]
                  "
                >

                  <FiUser className="text-gray-400 text-lg" />

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="
                    bg-transparent
                    outline-none
                    w-full
                    text-black
                    dark:text-white
                    placeholder:text-gray-400
                    "
                  />
                </div>
              </div>

              {/* PHONE */}

              <div className="mb-5">

                <label className="text-sm font-semibold text-black dark:text-white block mb-3">
                  Phone Number
                </label>

                <div
                  className="
                  flex
                  items-center
                  gap-3
                  h-14
                  px-4
                  rounded-2xl
                  border
                  border-black/10
                  dark:border-white/10
                  bg-[#FAFAFA]
                  dark:bg-white/[0.03]
                  "
                >

                  <FiPhone className="text-gray-400 text-lg" />

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 812 345 6789"
                    className="
                    bg-transparent
                    outline-none
                    w-full
                    text-black
                    dark:text-white
                    placeholder:text-gray-400
                    "
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div className="mb-6">

                <label className="text-sm font-semibold text-black dark:text-white block mb-3">
                  Email Address
                </label>

                <div
                  className="
                  flex
                  items-center
                  gap-3
                  h-14
                  px-4
                  rounded-2xl
                  border
                  border-black/10
                  dark:border-white/10
                  bg-[#FAFAFA]
                  dark:bg-white/[0.03]
                  "
                >

                  <FiMail className="text-gray-400 text-lg" />

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="
                    bg-transparent
                    outline-none
                    w-full
                    text-black
                    dark:text-white
                    placeholder:text-gray-400
                    "
                  />
                </div>
              </div>

              {/* ERROR */}

              {error && (
                <p className="text-red-500 text-sm mb-5">
                  {error}
                </p>
              )}

              {/* BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={loading}
                type="submit"
                className="
                group
                w-full
                h-14
                rounded-2xl
                bg-[#E11D48]
                hover:bg-[#BE123C]
                disabled:opacity-70
                text-white
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
                {loading ? "Joining..." : "Join Waitlist"}

                {!loading && (
                  <FiArrowRight
                    className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    "
                  />
                )}
              </motion.button>

              {/* FOOTER */}

              <p
                className="
                text-center
                text-xs
                text-gray-500
                dark:text-gray-400
                leading-relaxed
                mt-5
                "
              >
                By joining the waitlist, you’ll receive updates,
                early access notifications and launch announcements.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;