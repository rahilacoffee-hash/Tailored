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
import Testimonials from "./Component/Testimonials";
import FAQ from "./Component/FAQ";
import Waitlist from "./Component/WaitList";

function App() {
    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );
    }
  }, [darkMode]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-[#FFF9F5] overflow-hidden">
          <Navbar />
          <Hero/>
          <Features/>
          <AppPreview/>
          <HowItWorks/>
          <Benefits/>
          <FutureVision/>
          <Testimonials/>
          <FAQ/>
          <Waitlist/>
        </main>
      )}
    </>
  );
}

export default App;