import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import Download from "./components/Download";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="md:mx-12">
        <HeroSection />

        <Benefits />

        <Overview />

        <Download />
      </div>

      <Footer />
    </>
  );
};

export default App;
