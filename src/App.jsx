import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import {
  Routes,
  Route,
} from "react-router-dom";

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

import Contact from "./Component/Contact";

import Footer from "./Component/Footer";

import PrivacyPolicy from "./Pages/PrivacyPolicy";

import Terms from "./Pages/Terms";

/* HOME PAGE */

const Home = () => {
  return (
    <main
      className="
      bg-[#FFF9F5]
      dark:bg-[#050505]
      overflow-hidden
      transition-colors
      duration-500
      "
    >
      <Navbar />

      <Hero />

      <Features />

      <AppPreview />

      <HowItWorks />

      <Benefits />

      <FutureVision />

      <Testimonials />

      <FAQ />

      <Waitlist />

      <Contact />

      <Footer />
    </main>
  );
};

function App() {

  /* THEME */

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

  /* LOADER */

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3100);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <Loader key="loader" />
        )}
      </AnimatePresence>

      {!loading && (
        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* PRIVACY POLICY */}

          <Route
            path="/privacy-policy"
            element={
              <>
              

                <PrivacyPolicy />
              </>
            }
          />

          {/* TERMS */}

          <Route
            path="/terms"
            element={
              <>
             

                <Terms />
              </>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;