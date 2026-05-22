import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./Component/Loader";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Features from "./Component/Features";
import AppPreview from "./Component/AppPreview";
import HowItWorks from "./Component/HowItWorks";
import Benefits from "./Component/Benefits";
import FutureVision from "./Component/Futurevision";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [loading, setLoading] = useState(true);

  /* DARK MODE */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* PREMIUM LOADER (REAL LOAD + MIN TIME) */
  useEffect(() => {
    const minTime = new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    const pageLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve);
      }
    });

    Promise.all([minTime, pageLoad]).then(() => {
      setLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-[#FFF9F5] overflow-hidden">
          <Navbar />
          <Hero />
          <Features />
          <AppPreview />
          <HowItWorks />
          <Benefits />
          <FutureVision />
        </main>
      )}
    </>
  );
}

export default App; 