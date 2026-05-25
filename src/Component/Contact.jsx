import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_xxxxxxx", // YOUR SERVICE ID
        "template_xxxxxxx", // YOUR TEMPLATE ID
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);

          setSuccess(
            "Message sent successfully!"
          );

          form.current.reset();
        },
        (error) => {
          setLoading(false);

          console.log(error.text);

          setSuccess(
            "Something went wrong."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="
      py-28
      bg-[#FFF9F5]
      dark:bg-[#050505]
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-[-150px]
        left-[-100px]
        w-[350px]
        h-[350px]
        bg-[#E11D48]/10
        blur-3xl
        rounded-full
        "
      />

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
        {/* Heading */}

        <div className="text-center mb-20">
          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            text-black
            dark:text-white
            "
          >
            Contact Us
          </h2>

          <p
            className="
            mt-5
            text-gray-600
            dark:text-gray-400
            max-w-2xl
            mx-auto
            "
          >
            Have questions about Tailored?
            Reach out and we’ll respond as
            soon as possible.
          </p>
        </div>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-start
          "
        >
          {/* LEFT INFO */}

          <div className="space-y-6">
            {[
              {
                icon: <FiMail />,
                title: "Email",
                value:
                  "tailoredfashionapp@gmail.com",
              },

              {
                icon: <FiPhone />,
                title: "Phone",
                value: "+234 812 345 6789",
              },

              {
                icon: <FiMapPin />,
                title: "Location",
                value: "Abuja, Nigeria",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -30,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                flex
                items-center
                gap-5
                bg-white
                dark:bg-[#0D0D0D]
                border
                border-black/5
                dark:border-white/10
                rounded-3xl
                p-6
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#E11D48]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  "
                >
                  {item.icon}
                </div>

                <div>
                  <h3
                    className="
                    font-bold
                    text-black
                    dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    text-gray-600
                    dark:text-gray-400
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FORM */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            bg-white
            dark:bg-[#0D0D0D]
            rounded-[35px]
            p-8
            border
            border-black/5
            dark:border-white/10
            shadow-xl
            "
          >
            {/* Name */}

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
              w-full
              h-14
              rounded-2xl
              px-5
              mb-5
              bg-[#F5F5F5]
              dark:bg-white/[0.04]
              border
              border-black/5
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
              "
            />

            {/* Email */}

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
              w-full
              h-14
              rounded-2xl
              px-5
              mb-5
              bg-[#F5F5F5]
              dark:bg-white/[0.04]
              border
              border-black/5
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
              "
            />

            {/* Message */}

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="
              w-full
              rounded-2xl
              p-5
              mb-6
              bg-[#F5F5F5]
              dark:bg-white/[0.04]
              border
              border-black/5
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
              "
            />

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              h-14
              rounded-2xl
              bg-[#E11D48]
              hover:bg-[#BE123C]
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}

              <FiSend />
            </button>

            {/* Success */}

            {success && (
              <p
                className="
                mt-5
                text-center
                text-sm
                text-green-500
                "
              >
                {success}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;