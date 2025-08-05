import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="sm:px-6 lg:px-30 px-8 py-25 bg-gray-200 dark:bg-background">
        <div className="flex lg:flex-nowrap flex-wrap gap-5">
          <div className="lg:w-2/5  ">
            <p className="font-semibold mb-4">About Orbit.</p>
            <p className="text-sm text-gray-400 dark:text-white">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>{" "}
            <p className="font-semibold mb-2 mt-4">Connect</p>
            <div className="flex gap-x-2">
              <div className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <Instagram className="text-white w-4 h-4" />
              </div>{" "}
              <div className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <Twitter className="text-white w-4 h-4" />
              </div>{" "}
              <div className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <Facebook className="text-white w-4 h-4" />
              </div>{" "}
              <div className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <Linkedin className="text-white w-4 h-4" />
              </div>{" "}
            </div>
          </div>
          <div className="lg:w-1/5">
            <p className="font-semibold mb-4">Navagation</p>
            <p className="text-sm text-gray-400 dark:text-white mb-2"> HTML5</p>
            <p className="text-sm text-gray-400 dark:text-white mb-2"> CSS</p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              {" "}
              Javascript
            </p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              {" "}
              Jquery
            </p>
          </div>{" "}
          <div className="lg:w-1/5">
            <p className="font-semibold mb-4">Services</p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              Web Design
            </p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              eCommerce
            </p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              WordPress
            </p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              Frontend
            </p>
          </div>{" "}
          <div className="lg:w-1/5">
            <p className="font-semibold mb-4"> Contact Us</p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              43 Raymouth Rd. Baltemoer, London 3910
            </p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              +1(123)-456-7890
            </p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              +1(123)-456-7890
            </p>
            <p className="text-sm text-gray-400 dark:text-white mb-2">
              info@mydomain.com
            </p>
          </div>{" "}
        </div>
        <p className="text-sm text-[#96bb7c] text-center mt-6">
          Copyright &copy; 2025 All Rights Reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
