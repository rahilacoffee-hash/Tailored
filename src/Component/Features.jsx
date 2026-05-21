import {
  motion,
} from "framer-motion";

import {
  HiOutlineUserGroup,
  HiOutlineClipboardList,
  HiOutlineCash,
  HiOutlineCloud,
  HiOutlineBell,
} from "react-icons/hi";

import {
  MdStraighten,
} from "react-icons/md";

const features = [
  {
    icon: <MdStraighten />,
    title: "Digital Measurements",
    desc: "Store customer measurements securely and access them anytime from anywhere.",
  },

  {
    icon: <HiOutlineUserGroup />,
    title: "Customer Management",
    desc: "Manage customer profiles and tailoring history in one simple system.",
  },

  {
    icon: <HiOutlineClipboardList />,
    title: "Order Tracking",
    desc: "Track all tailoring orders from pending to completed delivery.",
  },

  {
    icon: <HiOutlineCash />,
    title: "Payment Management",
    desc: "Monitor payments, balances, invoices, and customer transactions easily.",
  },

  {
    icon: <HiOutlineBell />,
    title: "Smart Reminders",
    desc: "Receive reminders for delivery dates and important customer orders.",
  },

  {
    icon: <HiOutlineCloud />,
    title: "Cloud Backup",
    desc: "Never lose customer records or measurements ever again.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-28 overflow-hidden bg-[#FFF9F5] dark:bg-[#050505] transition-colors duration-500"
    >
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
      {/* Background Glow */}
      <div className="absolute left-[-200px] top-[200px] w-[400px] h-[400px] bg-red-100 dark:bg-red-500/10 blur-3xl rounded-full opacity-40" />

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

          <span className=" px-4 py-2 rounded-full text-[#8B0000] dark:text-[#cf0e31] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500">
            Features
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-6 text-black dark:text-white leading-tight transition-colors duration-500">
            Everything You Need To Run Your 
            <span className="text-[#8B0000] dark:text-[#cf0e31] "> Tailoring Business</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-lg mt-6 leading-relaxed transition-colors duration-500">
            Tailored gives fashion designers and tailors powerful tools
            to organize customers, measurements, orders, and payments
            all in one place.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

          {features.map((feature, index) => (
           <motion.div
  key={index}
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
    duration: 0.7,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
  className="
  group
  relative
  bg-white
  dark:bg-[#111111]
  border
  border-black/5
  dark:border-white/10
  rounded-3xl
  p-8
  overflow-hidden
  transition-all
  duration-500
  hover:shadow-2xl
  "
>

  {/* Ambient Light 1 */}
  <motion.div
    animate={{
      opacity: [0.15, 0.3, 0.15],
      scale: [1, 1.2, 1],
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
    bg-[#E11D48]/10
    dark:bg-[#FF4D6D]/10
    blur-3xl
    rounded-full
    "
  />

  {/* Ambient Light 2 */}
  <motion.div
    animate={{
      opacity: [0.1, 0.2, 0.1],
      scale: [1, 1.1, 1],
      x: [0, -15, 0],
      y: [0, 15, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
    absolute
    -bottom-10
    -left-10
    w-32
    h-32
    bg-red-200/20
    dark:bg-red-500/10
    blur-3xl
    rounded-full
    "
  />

  {/* Hover Gradient */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#E11D48]/5 to-transparent transition-all duration-500" />

  {/* Icon */}
  <div className="
  relative
  w-16
  h-16
  rounded-2xl
  bg-red-50
  dark:bg-red-500/10
  text-[#8B0000]
  dark:text-[#FF4D6D]
  flex
  items-center
  justify-center
  text-3xl
  transition-all
  duration-500
  group-hover:scale-110
  ">
    {feature.icon}
  </div>

  {/* Content */}
  <div className="relative mt-8">

    <h3 className="
    text-2xl
    font-bold
    text-black
    dark:text-white
    transition-colors
    duration-500
    ">
      {feature.title}
    </h3>

    <p className="
    text-gray-500
    dark:text-gray-400
    leading-relaxed
    mt-4
    transition-colors
    duration-500
    ">
      {feature.desc}
    </p>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;