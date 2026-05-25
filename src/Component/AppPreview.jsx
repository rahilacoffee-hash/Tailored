// AppPreview.jsx

import { motion } from "framer-motion";

import { CgBell, CgChevronRight } from "react-icons/cg";

const PhoneMockup = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
      relative
      w-[280px]
      h-[580px]
      rounded-[45px]
      border
      border-white/10
      bg-[#0B0B0B]
      overflow-hidden
      backdrop-blur-xl
      ${className}
      `}
    >
      {/* TOP NOTCH */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[120px]
        h-[28px]
        bg-black
        rounded-b-3xl
        z-50
        "
      />

      {/* SCREEN */}

      <div className="w-full h-full bg-[#111111]">
        {children}
      </div>
    </div>
  );
};

const AppPreview = () => {
  return (
    <section
      id="appview"
      className="
      relative
      py-32
      overflow-hidden
      bg-[#050505]
      text-white
      "
    >
      {/* GRID BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.07]
        "
        style={{
          backgroundImage:
            "radial-gradient(#E11D48 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* GLOW */}

      <div
        className="
        absolute
        top-[-150px]
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-[#E11D48]/20
        blur-[120px]
        rounded-full
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        relative
        z-10
        "
      >
        {/* HEADER */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          text-center
          max-w-3xl
          mx-auto
          "
        >
          <span
            className="
            inline-flex
            items-center
            gap-2
            bg-white/5
            border
            border-white/10
            px-5
            py-2
            rounded-full
            text-xs
            font-bold
            tracking-[0.25em]
            uppercase
            text-[#FF4D6D]
            "
          >
            App Experience
          </span>

          <h2
            className="
            text-4xl
            md:text-6xl
            font-black
            leading-tight
            mt-7
            "
          >
            See Tailored
            <span className="text-[#E11D48]">
              {" "}
              In Action
            </span>
          </h2>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            mt-6
            "
          >
            A premium dark-mode experience built for
            modern African tailors and fashion designers.
          </p>
        </motion.div>

        {/* PHONE SECTION */}

        <div
          className="
          relative
          h-[760px]
          flex
          items-center
          justify-center
          mt-24
          perspective-[2500px]
          "
        >
          {/* CENTER PHONE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
            absolute
            z-30
            "
          >
            <PhoneMockup
              className="
              scale-[1.08]
              shadow-[0_25px_80px_rgba(0,0,0,0.65)]
              "
            >
              <div className="p-5 pt-12 h-full">

                {/* HEADER */}

                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="text-gray-400 text-sm">
                      Welcome back
                    </p>

                    <h3 className="font-bold text-xl mt-1">
                      Tailor Dashboard
                    </h3>
                  </div>

                  <CgBell
                    size={21}
                    className="text-gray-400"
                  />
                </div>

                {/* CARD */}

                <div
                  className="
                  bg-[#E11D48]
                  rounded-3xl
                  p-5
                  mb-5
                  "
                >
                  <p className="text-sm opacity-80">
                    Monthly Revenue
                  </p>

                  <h2 className="text-4xl font-black mt-2">
                    ₦850K
                  </h2>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm">
                      +18% growth
                    </span>

                    <button
                      className="
                      bg-white
                      text-black
                      text-xs
                      font-bold
                      px-4
                      py-2
                      rounded-full
                      "
                    >
                      View
                    </button>
                  </div>
                </div>

                {/* GRAPH */}

                <div
                  className="
                  bg-[#191919]
                  border
                  border-white/5
                  rounded-3xl
                  p-5
                  "
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      Revenue Overview
                    </p>

                    <p className="text-xs text-[#E11D48]">
                      Last 7 days
                    </p>
                  </div>

                  <div className="flex items-end gap-2 h-40 mt-8">
                    {[45, 80, 55, 95, 70, 100, 88].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="
                          flex-1
                          rounded-t-xl
                          bg-white/5
                          relative
                          overflow-hidden
                          "
                        >
                          <motion.div
                            initial={{
                              height: 0,
                            }}
                            whileInView={{
                              height: `${height}%`,
                            }}
                            viewport={{
                              amount: 0.3,
                            }}
                            transition={{
                              duration: 1,
                              delay: i * 0.08,
                            }}
                            className="
                            absolute
                            bottom-0
                            left-0
                            w-full
                            bg-[#E11D48]
                            rounded-t-xl
                            "
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>

          {/* LEFT PHONE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -120,
              rotateY: 20,
            }}
            whileInView={{
              opacity: 0.8,
              x: -260,
              rotateY: 18,
            }}
            viewport={{
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
            absolute
            z-20
            hidden
            lg:block
            "
          >
            <PhoneMockup>
              <div className="p-5 pt-12 h-full">

                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <CgChevronRight
                      size={17}
                      className="rotate-180"
                    />
                  </div>

                  <h3 className="font-bold text-lg">
                    Measurements
                  </h3>
                </div>

                <div
                  className="
                  bg-[#E11D48]
                  rounded-2xl
                  p-5
                  mb-5
                  "
                >
                  <p className="font-bold text-lg">
                    David O.
                  </p>

                  <p className="text-sm opacity-80 mt-1">
                    Senator Wear • Updated Today
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      label: "Chest",
                      value: '42"',
                    },

                    {
                      label: "Shoulder",
                      value: '18"',
                    },

                    {
                      label: "Sleeve",
                      value: '24"',
                    },

                    {
                      label: "Waist",
                      value: '36"',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="
                      flex
                      items-center
                      justify-between
                      p-4
                      rounded-2xl
                      bg-[#191919]
                      border
                      border-white/5
                      "
                    >
                      <span className="text-gray-400 text-sm">
                        {item.label}
                      </span>

                      <span className="font-bold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneMockup>
          </motion.div>

          {/* RIGHT PHONE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 120,
              rotateY: -20,
            }}
            whileInView={{
              opacity: 0.8,
              x: 260,
              rotateY: -18,
            }}
            viewport={{
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
            absolute
            z-20
            hidden
            lg:block
            "
          >
            <PhoneMockup>
              <div className="p-5 pt-12 h-full">

                <h3 className="font-bold text-xl mb-7">
                  Active Orders
                </h3>

                <div className="flex gap-2 mb-7">
                  <span
                    className="
                    bg-[#E11D48]
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-bold
                    "
                  >
                    All
                  </span>

                  <span
                    className="
                    bg-white/10
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    "
                  >
                    Cutting
                  </span>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="
                      bg-[#191919]
                      border
                      border-white/5
                      rounded-3xl
                      p-5
                      "
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold">
                            Agbada Premium
                          </h4>

                          <p className="text-xs text-gray-400 mt-1">
                            Due: Oct {12 + item}
                          </p>
                        </div>

                        <span
                          className="
                          text-[10px]
                          uppercase
                          bg-white/10
                          px-3
                          py-1
                          rounded-full
                          "
                        >
                          Fitting
                        </span>
                      </div>

                      <div
                        className="
                        mt-5
                        w-full
                        h-2
                        rounded-full
                        bg-black
                        overflow-hidden
                        "
                      >
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: "68%",
                          }}
                          viewport={{
                            amount: 0.3,
                          }}
                          transition={{
                            duration: 1,
                          }}
                          className="
                          h-full
                          rounded-full
                          bg-[#E11D48]
                          "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;