"use client";

import { motion } from "framer-motion";
import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const ContactMe = () => {
  return (
    <div className="sm:px-6 lg:px-30 px-8 py-25" id="contactUs">
      <ScrollAnimation>
        <h1 className="text-center text-4xl md:text-5xl font-semibold mb-10">
          Contact Me
        </h1>
      </ScrollAnimation>

      <div className="lg:w-[70%] w-full lg:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <ScrollAnimation>
            <div>
              <label
                htmlFor="firstName"
                className="text-gray-400 dark:text-white"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-white focus:outline-none mt-2 rounded-md"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div>
              <label
                htmlFor="lastName"
                className="text-gray-400 dark:text-white"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-white focus:outline-none mt-2 rounded-md"
              />
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation>
          <div className="mb-5">
            <label htmlFor="email" className="text-gray-400 dark:text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-white focus:outline-none mt-2 rounded-md"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mb-5">
            <label htmlFor="message" className="text-gray-400 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 border border-gray-300 dark:border-white focus:outline-none mt-2 rounded-md"
            ></textarea>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-4 rounded-md cursor-pointer font-bold bg-[#96bb7c] text-xs text-white"
          >
            SEND MESSAGE
          </motion.button>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ContactMe;
