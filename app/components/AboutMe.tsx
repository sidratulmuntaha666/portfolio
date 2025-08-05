"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const AboutMe = () => {
  const skills = [
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 97 },
    { name: "JavaScript", level: 96 },
    { name: "Next JS", level: 93 },
    { name: "React JS", level: 94 },
    { name: "Node Js", level: 88 },
  ];

  return (
    <div className="py-25 px-4 sm:px-6 lg:px-30" id="about">
      {" "}
      <div className="flex flex-wrap justify-center items-center md:flex-nowrap">
        <div className="w-full md:w-[50%]">
          <ScrollAnimation>
            <Image
              src="/assets/about_me.webp"
              alt="hero"
              width={850}
              height={450}
            />
          </ScrollAnimation>
          {/*<motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/about_me.webp"
              alt="hero"
              width={850}
              height={450}
            />
          </motion.div> */}
        </div>
        <div className="w-full md:w-[40%] mt-4 md:mt-0 mx-auto">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">My Bio</h1>
          </ScrollAnimation>

          <ScrollAnimation>
            <p className="text-gray-500 dark:text-white mb-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="text-gray-500 dark:text-white">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </ScrollAnimation>

          <div className="my-10  space-y-6">
            {skills.map((skill) => (
              <ScrollAnimation>
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 dark:text-white font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-white">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#96bb7c] rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}

            <ScrollAnimation>
              <div className="flex gap-4 mt-8">
                <button className="px-7 py-3 cursor-pointer font-bold bg-[#96bb7c] text-xs text-white rounded-md ">
                  HIRE ME
                </button>
                <button className="px-7 py-3 cursor-pointer font-bold bg-gray-600 text-xs text-white rounded-md ">
                  DOWNLOAD CV
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
