import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

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

// Inner component — has access to useLocation
let AppContent = () => {
  let location = useLocation();

  /* THEME */
  let [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* LOADER — fires on every route change */
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => setLoading(false), 3100);
    return () => clearTimeout(timer);
  }, [location.pathname]); // re-runs whenever the route changes

  return (
    <>
      {/* Routes always render so content shows behind the loader */}
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {/* Loader overlays on top */}
      <AnimatePresence>
        {loading && <Loader key={location.pathname} />}
      </AnimatePresence>
    </>
  );
};

function App() {
  return <AppContent />;
}

export default App;