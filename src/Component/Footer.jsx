// Footer.jsx

import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-[#FFF9F5]
      dark:bg-[#050505]
      border-t
      border-black/5
      dark:border-white/5
      transition-colors
      duration-500
      "
    >
      {/* BACKGROUND LIGHT */}

      <div
        className="
        absolute
        top-[-120px]
        right-[-120px]
        w-[320px]
        h-[320px]
        bg-[#E11D48]/10
        blur-3xl
        rounded-full
        "
      />

      {/* WATERMARK */}

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
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        py-20
        "
      >
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-14
          "
        >
          {/* BRAND */}

          <div>
            <img
              src="tailored-icon1.png"
              alt="Tailored"
              className="w-32 dark:hidden"
            />

            <img
              src="tailored-icon.PNG"
              alt="Tailored"
              className="w-32 hidden dark:block"
            />

            <p
              className="
              text-gray-600
              dark:text-gray-400
              leading-relaxed
              mt-6
              "
            >
              Modern business management platform for African tailors and
              fashion designers.
            </p>

            {/* SOCIALS */}

            <div className="flex items-center gap-4 mt-7">
              <a
                href="#"
                className="
                w-11
                h-11
                rounded-full
                bg-black/5
                dark:bg-white/5
                flex
                items-center
                justify-center
                text-black
                dark:text-white
                hover:bg-[#E11D48]
                hover:text-white
                transition-all
                duration-300
                "
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="
                w-11
                h-11
                rounded-full
                bg-black/5
                dark:bg-white/5
                flex
                items-center
                justify-center
                text-black
                dark:text-white
                hover:bg-[#E11D48]
                hover:text-white
                transition-all
                duration-300
                "
              >
                <FiTwitter />
              </a>

              <a
                href="#"
                className="
                w-11
                h-11
                rounded-full
                bg-black/5
                dark:bg-white/5
                flex
                items-center
                justify-center
                text-black
                dark:text-white
                hover:bg-[#E11D48]
                hover:text-white
                transition-all
                duration-300
                "
              >
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3
              className="
              text-black
              dark:text-white
              font-bold
              text-lg
              mb-6
              "
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="
                text-gray-600
                dark:text-gray-400
                hover:text-[#E11D48]
                transition-all
                duration-300
                "
              >
                Features
              </a>

              <a
                href="#appview"
                className="
                text-gray-600
                dark:text-gray-400
                hover:text-[#E11D48]
                transition-all
                duration-300
                "
              >
                App View
              </a>

              <a
                href="#howitworks"
                className="
                text-gray-600
                dark:text-gray-400
                hover:text-[#E11D48]
                transition-all
                duration-300
                "
              >
                How It Works
              </a>

              <a
                href="#faq"
                className="
                text-gray-600
                dark:text-gray-400
                hover:text-[#E11D48]
                transition-all
                duration-300
                "
              >
                FAQ
              </a>

              <a
                href="#waitlist"
                className="
                text-gray-600
                dark:text-gray-400
                hover:text-[#E11D48]
                transition-all
                duration-300
                "
              >
                Waitlist
              </a>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3
              className="
              text-black
              dark:text-white
              font-bold
              text-lg
              mb-6
              "
            >
              Contact
            </h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div
                  className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#E11D48]/10
                  flex
                  items-center
                  justify-center
                  text-[#E11D48]
                  "
                >
                  <FiMail />
                </div>

                <div>
                  <p className="text-black dark:text-white font-medium">
                    Email
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    hello@tailored.app
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#E11D48]/10
                  flex
                  items-center
                  justify-center
                  text-[#E11D48]
                  "
                >
                  <FiPhone />
                </div>

                <div>
                  <p className="text-black dark:text-white font-medium">
                    Phone
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    +234 XXX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#E11D48]/10
                  flex
                  items-center
                  justify-center
                  text-[#E11D48]
                  "
                >
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-black dark:text-white font-medium">
                    Location
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}

          <div>
            <h3
              className="
              text-black
              dark:text-white
              font-bold
              text-lg
              mb-6
              "
            >
              Stay Updated
            </h3>

            <p
              className="
              text-gray-600
              dark:text-gray-400
              leading-relaxed
              mb-6
              "
            >
              Get updates about launch dates, new features and early access.
            </p>

            <a
              href="#waitlist"
              className="
              inline-flex
              items-center
              justify-center
              h-12
              px-6
              rounded-full
              bg-[#cf0e31]
              hover:bg-[#BE123C]
              text-white
              font-semibold
              shadow-[0_10px_30px_rgba(225,29,72,0.3)]
              transition-all
              duration-300
              "
            >
              Join Waitlist
            </a>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
          mt-16
          pt-8
          border-t
          border-black/5
          dark:border-white/5
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          "
        >
          <p
            className="
            text-sm
            text-gray-500
            dark:text-gray-400
            "
          >
            © 2026 Tailored. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="
              text-sm
              text-gray-500
              dark:text-gray-400
              hover:text-[#E11D48]
              transition-all
              duration-300
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="
              text-sm
              text-gray-500
              dark:text-gray-400
              hover:text-[#E11D48]
              transition-all
              duration-300
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
