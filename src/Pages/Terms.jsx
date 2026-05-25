import { motion } from "framer-motion";
import { CgArrowLeft } from "react-icons/cg";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main className="bg-[#FFF9F5] dark:bg-[#050505] min-h-screen transition-colors duration-500">
      {/* HERO */}

      <section className="relative overflow-hidden pt-40 pb-24">
        {/* LIGHTING */}

        <div className="absolute top-[-200px] left-[-120px] w-[400px] h-[400px] bg-[#E11D48]/10 blur-3xl rounded-full" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full" />

        {/* WATERMARK */}

        <img
          src="/tailored-icon1.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-[0.03] dark:hidden pointer-events-none select-none"
        />

        <img
          src="/tailored-icon.PNG"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-[0.04] hidden dark:block pointer-events-none select-none"
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 px-5 py-2 rounded-full"
          >
            <span className="text-[#E11D48] text-xs font-bold tracking-[0.2em] uppercase">
              <Link
                to="/"
                className="flex items-center gap-1  text-red-600 font-bold"
              >
                <CgArrowLeft className="w-6 h-6 animate-pulse transition-all  text-black" />
                Home
              </Link>
            </span>
          </motion.div>

          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-5xl md:text-7xl font-black leading-[1] tracking-tight mt-8 text-black dark:text-white"
          >
            Terms &<span className="block text-[#E11D48] mt-3">Conditions</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mt-8"
          >
            These Terms and Conditions govern your use of Tailored, including
            all services, features, applications, and tools provided through our
            platform.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
            <div className="space-y-14">
              {/* SECTION */}

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  1. Acceptance Of Terms
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  By accessing or using Tailored, you agree to be bound by these
                  Terms and Conditions, our Privacy Policy, and any additional
                  policies referenced herein. If you do not agree with these
                  terms, you must discontinue use of the platform immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  2. Eligibility
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  You must be at least 18 years old or have the legal authority
                  to enter into binding agreements in your jurisdiction in order
                  to use Tailored. By using the platform, you confirm that all
                  information provided is accurate and truthful.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  3. Platform Usage
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Tailored provides tools for tailoring business management
                  including customer management, measurements, order tracking,
                  invoicing, analytics, cloud storage, and related services. You
                  agree to use the platform responsibly and only for lawful
                  business purposes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  4. Account Responsibility
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities conducted
                  through your account. Tailored will not be responsible for
                  unauthorized access resulting from your failure to secure your
                  login information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  5. Prohibited Activities
                </h2>

                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-6">
                  <li>Using the platform for illegal activities.</li>

                  <li>
                    Attempting to hack, disrupt, or compromise the platform.
                  </li>

                  <li>Uploading malicious software or harmful content.</li>

                  <li>Violating intellectual property rights.</li>

                  <li>Sharing false, deceptive, or fraudulent information.</li>

                  <li>
                    Reselling or redistributing Tailored services without
                    permission.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  6. Payments & Subscriptions
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Certain features of Tailored may require subscription payments
                  or premium access. By subscribing, you agree to provide
                  accurate payment information and authorize recurring billing
                  where applicable. Prices may change at any time with prior
                  notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  7. Intellectual Property
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  All branding, software, content, designs, logos, visuals,
                  code, and platform materials belong to Tailored and are
                  protected under intellectual property laws. Users may not
                  reproduce, modify, distribute, or exploit any materials
                  without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  8. User Content
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  You retain ownership of any content uploaded to Tailored,
                  including customer data, images, notes, measurements,
                  invoices, or business records. However, you grant Tailored
                  permission to process and store such content solely for
                  platform functionality and service delivery.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  9. Data Storage & Security
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Tailored uses commercially reasonable security practices to
                  protect user data. While we strive to maintain platform
                  security, we cannot guarantee that the platform will always be
                  free from breaches, interruptions, or cyber threats.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  10. Service Availability
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Tailored may experience maintenance periods, updates,
                  downtime, or interruptions. We reserve the right to modify,
                  suspend, or discontinue any part of the platform without
                  liability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  11. Limitation Of Liability
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Tailored shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages arising from your
                  use of the platform, including loss of profits, business
                  interruption, data loss, or reputational damage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  12. Termination
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms and Conditions or engage in abusive,
                  harmful, or fraudulent activities.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  13. Changes To Terms
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Tailored may update these Terms and Conditions at any time.
                  Continued use of the platform after changes are published
                  constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  14. Governing Law
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  These Terms and Conditions shall be governed by and
                  interpreted in accordance with applicable laws within your
                  operating jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black dark:text-white mb-5">
                  15. Contact Information
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  If you have any questions regarding these Terms and
                  Conditions, please contact Tailored through the official
                  communication channels provided on the platform.
                </p>
              </div>

              {/* LAST UPDATED */}

              <div className="pt-8 border-t border-black/5 dark:border-white/5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last Updated: May 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
