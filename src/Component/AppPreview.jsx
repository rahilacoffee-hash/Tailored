import React from 'react'
import {
  motion,
} from "framer-motion";

const AppPreview = () => {
  return (
       <section
      id="appview"
      className="relative py-10 overflow-hidden bg-[#1A1A1A] dark:bg-[#FFF9F5] transition-colors duration-500"
    >

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

          <span className=" px-4 py-2 rounded-full text-[#cf0e31] dark:text-[#8B0000] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500">
            APP PREVIEW
          </span>


            <h2 className="text-4xl md:text-5xl font-black mt-6 text-white dark:text-black leading-tight transition-colors duration-500">
           See Tailored
            <span className="text-[#cf0e31] dark:text-[#8B0000]"> in Action</span>
          </h2>
          </motion.div>
          </div>
          </section>
  )
}

export default AppPreview;
