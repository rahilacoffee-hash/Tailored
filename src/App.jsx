// App.jsx

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import Loader from "./Component/Loader";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Features from "./Component/Features";
import AppPreview from "./Component/AppPreview";
import HowItWorks from "./Component/HowItWorks";
import Benefits from "./Component/Benefits";
import FutureVision from "./Component/Futurevision";
import FAQ from "./Component/FAQ";
import Waitlist from "./Component/WaitList";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import AIChat from "./Component/AIChat";



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [loading, setLoading] = useState(true);

  /* THEME */

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* LOADER ONLY ON FIRST WEBSITE OPEN */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* WEBSITE */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />
      </Routes>

      {/* LOADER */}

      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>
    </>
  );
}

export default App;

const Home = () => {
  return (
    <main className="bg-[#FFF9F5] dark:bg-[#050505] overflow-hidden transition-colors duration-500">
      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
      <HowItWorks />
      <Benefits />
      <FutureVision />
      <FAQ />
      <Waitlist />
      <Contact />
      <Footer />
      <AIChat />
    </main>
  );
};
