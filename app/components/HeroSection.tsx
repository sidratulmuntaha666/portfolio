"use client";

import React from "react";
import Navbar from "./Navbar";
// import Zoom from "react-reveal/Zoom";
// import Bounce from "react-reveal/Bounce";

import { Typewriter } from "react-simple-typewriter";
import ScrollAnimation from "./ScrollAnimation";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/assets/hero_img.webp')`,
      }}
      id="home"
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Typing Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-0 text-center px-4">
        <ScrollAnimation>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            I'm James Anderson
          </h1>
        </ScrollAnimation>
        <ScrollAnimation>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-4">
            A{" "}
            <Typewriter
              words={[
                "Back-end Developer",
                "Front-end Developer",
                "Full-Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1500}
            />
          </h1>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="text-white mt-4">An Experienced Developer</p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default HeroSection;
