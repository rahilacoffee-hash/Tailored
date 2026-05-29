import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiMenu,
  HiX,
  HiMoon,
  HiSun,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* THEME */

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* CLOSE MENU ON DESKTOP */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  /* NAV LINKS */

  const navLinks = [
    {
      name: "Home",
      href: "#",
    },

    {
      name: "Features",
      href: "#features",
    },

    {
      name: "App View",
      href: "#appview",
    },

    {
      name: "How It Works",
      href: "#howitworks",
    },

  

    {
      name: "FAQ",
      href: "#faq",
    },


    {
      name: "Contact",
      href: "#contact",
    },
    

    
  ];

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-500
      "
    >
      {/* BACKDROP */}

      <div
        className="
        absolute
        inset-0
        bg-[#FFF9F5]/70
        dark:bg-[#050505]/70
        backdrop-blur-2xl
        border-b
        border-black/5
        dark:border-white/5
        "
      />

      {/* NAVBAR */}

      <nav
        className="
        relative
        z-20
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        h-20
        flex
        items-center
        justify-between
        "
      >
        {/* LOGO */}

        <motion.a
          href="/"
          whileHover={{
            scale: 1.03,
          }}
          className="
          flex
          items-center
          relative
          z-50
          "
        >
          {/* LIGHT MODE LOGO */}

          <img
            src="tailored-icon1.png"
            alt="Tailored"
            className="
            w-28
            object-contain
            dark:hidden
            "
          />

          {/* DARK MODE LOGO */}

          <img
            src="tailored-icon.PNG"
            alt="Tailored"
            className="
            w-28
            object-contain
            hidden
            dark:block
            "
          />
        </motion.a>

        {/* DESKTOP LINKS */}

        <ul
          className="
          hidden
          lg:flex
          items-center
          gap-10
          "
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{
                y: -2,
              }}
            >
              <a
                href={link.href}
                className="
                relative
                text-[15px]
                font-semibold
                text-black
                dark:text-white
                hover:text-[#E11D48]
                dark:hover:text-[#cf0e31]
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[#E11D48]
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">
          {/* THEME TOGGLE */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="
            relative
            w-16
            h-9
            rounded-full
            bg-black/5
            dark:bg-white/10
            border
            border-black/10
            dark:border-white/10
            transition-all
            duration-500
            flex
            items-center
            px-1
            overflow-hidden
            "
          >
            {/* GLOW */}

            <motion.div
              animate={{
                opacity: darkMode ? 1 : 0.5,
              }}
              className={`
              absolute
              inset-0
              rounded-full
              ${
                darkMode
                  ? "bg-[#E11D48]/10"
                  : "bg-yellow-400/10"
              }
              `}
            />

            {/* SLIDER */}

            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className={`
              absolute
              top-1
              w-7
              h-7
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
              z-10
              ${
                darkMode
                  ? "translate-x-7 bg-[#cf0e31]"
                  : "translate-x-0 bg-white"
              }
              `}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? "moon" : "sun"}
                  initial={{
                    rotate: -180,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 180,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  {darkMode ? (
                    <HiMoon className="text-white text-sm" />
                  ) : (
                    <HiSun className="text-yellow-500 text-sm" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.button>

          {/* DESKTOP CTA */}

          <motion.a
            href="#waitlist"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
            hidden
            lg:flex
            items-center
            justify-center
            bg-[#cf0e31]
            hover:bg-[#BE123C]
            text-white
            px-6
            py-3
            rounded-full
            text-sm
            font-semibold
            shadow-[0_10px_35px_rgba(225,29,72,0.25)]
            transition-all
            duration-300
            "
          >
            Join Waitlist
          </motion.a>

          {/* HAMBURGER */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setMenuOpen(true)
            }
            className="
            lg:hidden
            w-11
            h-11
            rounded-full
            bg-black/5
            dark:bg-white/10
            border
            border-black/10
            dark:border-white/10
            flex
            items-center
            justify-center
            text-black
            dark:text-white
            "
          >
            <HiMenu className="text-2xl" />
          </motion.button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setMenuOpen(false)
            }
            className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-30
            lg:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="
            fixed
            top-0
            right-0
            h-screen
            w-[78%]
            bg-[#FFF9F5]
            dark:bg-[#050505]
            shadow-2xl
            z-40
            lg:hidden
            overflow-hidden
            "
          >
            {/* GLOW */}

            <div
              className="
              absolute
              top-[-100px]
              right-[-100px]
              w-[250px]
              h-[250px]
              bg-[#E11D48]/20
              blur-3xl
              rounded-full
              "
            />

            {/* CLOSE BUTTON */}

            <button
              onClick={() =>
                setMenuOpen(false)
              }
              className="
              absolute
              top-6
              right-6
              z-50
              w-11
              h-11
              rounded-full
              bg-black/5
              dark:bg-white/10
              border
              border-black/10
              dark:border-white/10
              flex
              items-center
              justify-center
              text-black
              dark:text-white
              transition-all
              duration-300
              hover:rotate-90
              "
            >
              <HiX className="text-2xl" />
            </button>

            {/* CONTENT */}

            <div
              className="
              relative
              z-10
              flex
              flex-col
              pt-32
              px-8
              "
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                  py-5
                  border-b
                  border-black/5
                  dark:border-white/5
                  text-lg
                  font-semibold
                  text-black
                  dark:text-white
                  hover:text-[#E11D48]
                  dark:hover:text-[#FF4D6D]
                  transition-all
                  duration-300
                  "
                >
                  {link.name}
                </motion.a>
              ))}

              {/* MOBILE CTA */}

              <motion.a
                href="#waitlist"
                onClick={() =>
                  setMenuOpen(false)
                }
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                mt-10
                bg-[#cf0e31]
                hover:bg-[#BE123C]
                text-white
                py-4
                rounded-full
                font-semibold
                text-center
                shadow-[0_10px_35px_rgba(225,29,72,0.3)]
                transition-all
                duration-300
                "
              >
                Join Waitlist
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;