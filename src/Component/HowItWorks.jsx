import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiClipboard, FiCreditCard, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

let steps = [
  {
    id: "01",
    title: "Create Your Tailored Account",
    desc: "Sign up in seconds and set up your tailoring business profile to start managing everything digitally.",
    icon: <FiUser />,
  },
  {
    id: "02",
    title: "Add Customers & Save Measurements",
    desc: "Create customer profiles, store body measurements securely, and access them anytime without notebooks.",
    icon: <FiClipboard />,
  },
  {
    id: "03",
    title: "Track Orders & Delivery Progress",
    desc: "Manage tailoring orders from pending to delivered with organized status updates and reminders.",
    icon: <FiCreditCard />,
  },
  {
    id: "04",
    title: "Monitor Payments & Grow Your Business",
    desc: "Track deposits, balances, invoices, and customer payments while building a more professional business.",
    icon: <FiTrendingUp />,
  },
];

/* ── SCREEN 01 — Create Account ─────────────────────────── */
let Screen01 = () => (
  <div className="h-full bg-[#111] p-6 pt-10 flex flex-col gap-4">
    <h3 className="text-white font-bold text-base mb-2">Create Account</h3>

    {/* Avatar placeholder */}
    <div className="flex justify-center mb-2">
      <div className="w-16 h-16 rounded-full bg-[#8B0000]/20 border-2 border-[#8B0000]/40 flex items-center justify-center">
        <FiUser className="text-[#8B0000] text-2xl" />
      </div>
    </div>

    {[
      { label: "Full Name", value: "David Okonkwo" },
      { label: "Phone Number", value: "+234 812 345 6789" },
      { label: "Business Name", value: "David Couture" },
    ].map((field, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
        className="bg-[#1C1C1C] border border-white/8 rounded-2xl px-4 py-3"
      >
        <p className="text-white/40 text-[10px] mb-0.5">{field.label}</p>
        <p className="text-white text-sm font-medium">{field.value}</p>
      </motion.div>
    ))}

    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="w-full bg-[#8B0000] text-white text-sm font-bold py-3.5 rounded-2xl mt-2"
    >
      Get Started →
    </motion.button>

    <p className="text-white/30 text-[10px] text-center">Already have an account? <span className="text-[#8B0000]">Login</span></p>
  </div>
);

/* ── SCREEN 02 — Measurements ───────────────────────────── */
let Screen02 = () => (
  <div className="h-full bg-[#111] p-6 pt-10 flex flex-col gap-3">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-white font-bold text-base">Measurements</h3>
      <span className="text-[10px] text-[#8B0000] font-bold bg-[#8B0000]/10 px-3 py-1 rounded-full">+  Add</span>
    </div>

    {/* Customer card */}
    <div className="bg-gradient-to-br from-[#8B0000] to-[#5A0000] rounded-2xl p-4 mb-1">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">D</div>
        <div>
          <p className="text-white font-bold text-sm">David Okonkwo</p>
          <p className="text-white/60 text-[10px]">Senator Wear · 5 measurements</p>
        </div>
      </div>
    </div>

    {[
      { label: "Chest", value: '42"', w: "85%" },
      { label: "Shoulder", value: '18"', w: "60%" },
      { label: "Sleeve", value: '24"', w: "70%" },
      { label: "Waist", value: '36"', w: "72%" },
    ].map((m, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 + i * 0.08 }}
        className="flex items-center justify-between bg-[#1C1C1C] border border-white/5 rounded-xl px-4 py-2.5"
      >
        <span className="text-white/50 text-xs">{m.label}</span>
        <div className="flex items-center gap-3">
          <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#8B0000] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: m.w }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
            />
          </div>
          <span className="text-white font-bold text-xs w-7 text-right">{m.value}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ── SCREEN 03 — Orders ─────────────────────────────────── */
let Screen03 = () => (
  <div className="h-full bg-[#111] p-6 pt-10 flex flex-col gap-3">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-white font-bold text-base">Active Orders</h3>
      <span className="text-white/40 text-[10px]">8 total</span>
    </div>

    <div className="flex gap-2 mb-1">
      <span className="bg-[#8B0000] text-white text-[10px] font-bold px-3 py-1.5 rounded-full">All</span>
      <span className="bg-white/8 text-white/50 text-[10px] px-3 py-1.5 rounded-full">Pending</span>
      <span className="bg-white/8 text-white/50 text-[10px] px-3 py-1.5 rounded-full">Done</span>
    </div>

    {[
      { name: "Agbada Premium", due: "Oct 14", pct: 68, status: "Fitting", color: "text-yellow-400" },
      { name: "Senator Wear", due: "Oct 16", pct: 35, status: "Cutting", color: "text-blue-400" },
      { name: "Kaftan Deluxe", due: "Oct 19", pct: 100, status: "Done", color: "text-green-400" },
    ].map((o, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + i * 0.1 }}
        className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-4"
      >
        <div className="flex items-start justify-between mb-2.5">
          <div>
            <p className="text-white font-bold text-xs">{o.name}</p>
            <p className="text-white/40 text-[10px] mt-0.5">Due: {o.due}</p>
          </div>
          <span className={`text-[10px] font-bold ${o.color}`}>
            {o.pct === 100 ? <FiCheckCircle size={13} /> : o.status}
          </span>
        </div>
        <div className="w-full h-1 bg-black rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8B0000] to-[#CC2020] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${o.pct}%` }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
          />
        </div>
        <p className="text-[#8B0000] text-[9px] font-bold text-right mt-1">{o.pct}%</p>
      </motion.div>
    ))}
  </div>
);

/* ── SCREEN 04 — Payments ───────────────────────────────── */
let Screen04 = () => (
  <div className="h-full bg-[#111] p-6 pt-10 flex flex-col gap-3">
    <h3 className="text-white font-bold text-base mb-2">Payments</h3>

    {/* Big revenue card */}
    <div className="bg-gradient-to-br from-[#8B0000] to-[#5A0000] rounded-2xl p-5 mb-1">
      <p className="text-white/70 text-xs">Total Earnings</p>
      <h2 className="text-white text-3xl font-black mt-1">₦245,600</h2>
      <div className="flex items-center gap-1.5 mt-3">
        <span className="text-green-400 text-xs">↑ +18%</span>
        <span className="text-white/50 text-xs">this month</span>
      </div>
    </div>

    {/* Transactions */}
    <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mt-1">Recent Transactions</p>
    {[
      { name: "Chioma Esther", amt: "+₦35,000", time: "Today", type: "Full payment" },
      { name: "Adebayo Samuel", amt: "+₦18,000", time: "Yesterday", type: "Deposit" },
      { name: "Emeka David", amt: "+₦52,000", time: "Oct 10", type: "Full payment" },
    ].map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 + i * 0.09 }}
        className="flex items-center justify-between bg-[#1C1C1C] border border-white/5 rounded-xl px-4 py-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#8B0000]/20 flex items-center justify-center text-[#8B0000] text-xs font-bold">
            {t.name[0]}
          </div>
          <div>
            <p className="text-white text-xs font-medium">{t.name}</p>
            <p className="text-white/40 text-[10px]">{t.type} · {t.time}</p>
          </div>
        </div>
        <span className="text-green-400 text-xs font-bold">{t.amt}</span>
      </motion.div>
    ))}
  </div>
);

let screens = [Screen01, Screen02, Screen03, Screen04];

let HowItWorks = () => {
  let [active, setActive] = useState(0);
  let ActiveScreen = screens[active];

  return (
    <section
      id="howitworks"
      className="relative py-28 overflow-hidden bg-[#FFF9F5] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#8B0000]/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15], x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-200px] left-[-100px] w-[450px] h-[450px] bg-[#8B0000]/5 blur-3xl rounded-full"
      />

      {/* Watermark */}
      <motion.img
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        src="/tailored-icon1.png"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[700px] opacity-[0.03] pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#8B0000] dark:text-[#cc1010] text-xs font-bold tracking-[0.2em] uppercase">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-6 text-black dark:text-white leading-tight transition-colors duration-500">
            Everything You Need,
            <span className="text-[#8B0000] dark:text-[#cc1010]"> In Just A Few Steps.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-6 leading-relaxed">
            Tailored helps you manage customers, measurements, orders and payments effortlessly.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — step cards */}
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ x: 6 }}
                className={`
                  relative rounded-3xl p-5 overflow-hidden border cursor-pointer
                  transition-all duration-400
                  ${active === i
                    ? "bg-white dark:bg-[#111] border-red-200 dark:border-[#8B0000]/30 shadow-[0_20px_60px_rgba(139,0,0,0.08)]"
                    : "bg-white/60 dark:bg-white/[0.03] border-black/5 dark:border-white/5"
                  }
                `}
              >
                {/* Active glow */}
                {active === i && (
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#8B0000]/8 blur-2xl rounded-full pointer-events-none" />
                )}

                <div className="relative flex gap-4 items-start">
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg transition-colors duration-300
                      ${active === i ? "bg-[#8B0000] text-white" : "bg-red-50 dark:bg-[#8B0000]/10 text-[#8B0000]"}`}>
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-black text-[#8B0000]/50 tracking-wider">{step.id}</span>
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="text-base font-bold text-black dark:text-white leading-snug transition-colors duration-500">
                      {step.title}
                    </h3>
                    <AnimatePresence>
                      {active === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-2 overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — phone with hardcoded screens */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-[#8B0000]/10 blur-[100px] rounded-full" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative hidden md:block"
            >
              {/* Phone frame */}
              <div className="relative w-[290px] h-[600px] rounded-[48px] bg-[#0C0C0C] border-[8px] border-black dark:border-[#1A1A1A] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.35)]">

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-b-3xl z-50 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-8 h-1 rounded-full bg-white/10" />
                </div>

                {/* Screen content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -16 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full h-full"
                  >
                    <ActiveScreen />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom bar */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20 z-50" />
              </div>

              {/* Step indicator dots */}
              <div className="flex justify-center gap-2 mt-5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300
                      ${active === i ? "w-6 bg-[#8B0000]" : "w-1.5 bg-black/15 dark:bg-white/15"}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;