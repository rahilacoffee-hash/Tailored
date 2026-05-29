import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  HiMenu,
  HiX,
  HiMoon,
  HiSun,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  /* THEME */

  const [darkMode, setDarkMode] =
    useState(() => {
      return (
        localStorage.getItem("theme") ===
        "dark"
      );
    });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }
  }, [darkMode]);

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
      "
    >
      {/* BACKDROP */}

      <div
        className="
        absolute
        inset-0
        bg-[#FFF9F5]/80
        dark:bg-[#050505]/80
        backdrop-blur-md
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

        <a
          href="/"
          className="
          flex
          items-center
          relative
          z-50
          transition-transform
          duration-300
          hover:scale-[1.02]
          "
        >
          {/* LIGHT MODE LOGO */}

          <img
            src="tailored-icon1.png"
            alt="Tailored"
            loading="lazy"
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
            loading="lazy"
            className="
            w-28
            object-contain
            hidden
            dark:block
            "
          />
        </a>

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
            <li
              key={index}
              className="
              transition-transform
              duration-200
              hover:-translate-y-0.5
              "
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
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">
          {/* THEME TOGGLE */}

          <button
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
            duration-300
            flex
            items-center
            px-1
            overflow-hidden
            "
          >
            {/* GLOW */}

            <div
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

            <div
              className={`
              absolute
              top-1
              w-7
              h-7
              rounded-full
              flex
              items-center
              justify-center
              shadow-md
              z-10
              transition-all
              duration-300
              ${
                darkMode
                  ? "translate-x-7 bg-[#cf0e31]"
                  : "translate-x-0 bg-white"
              }
              `}
            >
              {darkMode ? (
                <HiMoon className="text-white text-sm" />
              ) : (
                <HiSun className="text-yellow-500 text-sm" />
              )}
            </div>
          </button>

          {/* DESKTOP CTA */}

          <a
            href="#waitlist"
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
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            "
          >
            Join Waitlist
          </a>

          {/* HAMBURGER */}

          <button
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
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}

      {menuOpen && (
        <div
          onClick={() =>
            setMenuOpen(false)
          }
          className="
          fixed
          inset-0
          bg-black/30
          backdrop-blur-sm
          z-30
          lg:hidden
          "
        />
      )}

      {/* MOBILE MENU */}

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
            duration: 0.25,
          }}
          className="
          fixed
          top-0
          right-0
          h-screen
          w-[78%]
          bg-[#FFF9F5]
          dark:bg-[#050505]
          shadow-xl
          z-40
          lg:hidden
          "
        >
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
            "
          >
            <HiX className="text-2xl" />
          </button>

          {/* CONTENT */}

          <div
            className="
            flex
            flex-col
            pt-32
            px-8
            "
          >
            {navLinks.map(
              (link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
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
                </a>
              )
            )}

            {/* MOBILE CTA */}

            <a
              href="#waitlist"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
              mt-10
              bg-[#cf0e31]
              hover:bg-[#BE123C]
              text-white
              py-4
              rounded-full
              font-semibold
              text-center
              shadow-lg
              transition-all
              duration-300
              "
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;