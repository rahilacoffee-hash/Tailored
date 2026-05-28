import React, { useState } from "react";
import { motion } from "framer-motion";

import { CgMail } from "react-icons/cg";
import { FaMapPin } from "react-icons/fa6";
import { PiPhone } from "react-icons/pi";
import { BiCheckCircle } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";

import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <CgMail />,
    label: "Email",
    value: "Tailoredtailorhub@gmail.com",
    href: "mailto:Tailoredtailorhub@gmail.com",
  },

  {
    icon: <PiPhone />,
    label: "Phone",
    value: "+234 816 5662 099",
    href: "tel:+2348165662099",
  },

  {
    icon: <FaMapPin />,
    label: "Location",
    value: "Abuja, Nigeria",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] =
    useState(false);

  const [submitStatus, setSubmitStatus] =
    useState({
      type: null,
      message: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId =
        import.meta.env
          .VITE_EMAILJS_SERVICE_ID;

      const templateId =
        import.meta.env
          .VITE_EMAILJS_TEMPLATE_ID;

      const publicKey =
        import.meta.env
          .VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
      relative
      py-32
      overflow-hidden
      bg-[#050505]
      text-white
      "
    >
      {/* BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
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
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-[#E11D48]/20
        rounded-full
        blur-[140px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
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
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          text-center
          max-w-3xl
          mx-auto
          mb-20
          "
        >
          <span
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
         
            text-[#8B0000] dark:text-[#cf0e31]
            text-xs
            uppercase
            tracking-[0.25em]
            font-bold
            "
          >
            Contact Us
          </span>

          <h2
            className="
            mt-7
            text-4xl
            md:text-6xl
            font-black
            leading-tight
            "
          >
            Let’s Build
            <span className="text-[#8B0000] dark:text-[#cf0e31]">
              {" "}
              Something Great
            </span>
          </h2>

          <p
            className="
            mt-6
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            Have questions, ideas, or want
            early access? Reach out and
            let’s talk.
          </p>
        </motion.div>

        {/* CONTENT */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          items-start
          "
        >
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            bg-white/[0.03]
            border
            border-white/10
            rounded-[32px]
            p-8
            backdrop-blur-xl
            "
          >
            <h3
              className="
              text-2xl
              font-bold
              mb-3
              "
            >
              Send a Message
            </h3>

            <p className="text-gray-400 mb-8">
              We usually reply within 24
              hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* NAME */}

              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  mb-3
                  text-gray-300
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name:
                        e.target.value,
                    })
                  }
                  placeholder="John Doe"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  outline-none
                  focus:border-[#E11D48]
                  focus:ring-2
                  focus:ring-[#E11D48]/20
                  transition-all
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  mb-3
                  text-gray-300
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email:
                        e.target.value,
                    })
                  }
                  placeholder="you@example.com"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  outline-none
                  focus:border-[#E11D48]
                  focus:ring-2
                  focus:ring-[#E11D48]/20
                  transition-all
                  "
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  mb-3
                  text-gray-300
                  "
                >
                  Message
                </label>

                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message:
                        e.target.value,
                    })
                  }
                  placeholder="Tell us about your idea..."
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  outline-none
                  resize-none
                  focus:border-[#E11D48]
                  focus:ring-2
                  focus:ring-[#E11D48]/20
                  transition-all
                  "
                />
              </div>

              {/* BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={isLoading}
                className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                bg-[#cf0e31]
                hover:bg-[#BE123C]
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                shadow-[0_10px_40px_rgba(225,29,72,0.35)]
                disabled:opacity-70
                "
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <BsSend className="text-lg" />
                  </>
                )}
              </motion.button>

              {/* STATUS */}

              {submitStatus.type && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-2xl
                  border
                  ${
                    submitStatus.type ===
                    "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  }
                  `}
                >
                  {submitStatus.type ===
                  "success" ? (
                    <BiCheckCircle className="text-xl flex-shrink-0" />
                  ) : (
                    <FiAlertCircle className="text-xl flex-shrink-0" />
                  )}

                  <p className="text-sm">
                    {
                      submitStatus.message
                    }
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            flex
            flex-col
            gap-6
            "
          >
            {contactInfo.map(
              (item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                  group
                  flex
                  items-center
                  gap-5
                  p-7
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-[#E11D48]/40
                  transition-all
                  duration-300
                  "
                >
                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#E11D48]/10
                    flex
                    items-center
                    justify-center
                    text-[#E11D48]
                    text-3xl
                    group-hover:scale-110
                    transition-transform
                    duration-300
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p
                      className="
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                      mb-2
                      "
                    >
                      {item.label}
                    </p>

                    <h4
                      className="
                      text-lg
                      font-semibold
                      text-white
                      "
                    >
                      {item.value}
                    </h4>
                  </div>
                </motion.a>
              )
            )}

            {/* EXTRA CARD */}

            <div
              className="
              mt-4
              rounded-[32px]
              border
              border-[#E11D48]/20
              bg-gradient-to-br
              from-[#E11D48]/10
              to-transparent
              p-8
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                mb-4
                "
              >
                Tailored
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Helping African tailors
                manage measurements,
                orders, customers, and
                business growth with one
                premium platform.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;