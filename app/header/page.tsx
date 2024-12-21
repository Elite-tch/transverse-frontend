import React from "react";
import HeroSection from "../components/Header";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto container">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default page;
