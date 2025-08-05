"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
// import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerHeight =
    typeof window !== "undefined" ? window.innerHeight * 0.5 : 0;

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contactUs" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  const renderLinks = (textColor: string) =>
    navLinks.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={handleLinkClick}
        className={`font-medium transition-colors duration-300 ${textColor}`}
      >
        {item.name}
      </Link>
    ));

  return (
    <>
      {/* Transparent Navbar at Top */}
      <nav
        className={`absolute top-0 left-0 w-full z-40 bg-transparent text-white transition-opacity duration-500 ease-in-out
           ${scrollY === 0 ? "opacity-100" : "opacity-0 "}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex gap-x-3 items-center">
              <Link href="/" className="text-xl font-semibold">
                Portfolio.
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            <div className="hidden lg:flex space-x-6 items-center">
              {renderLinks("text-[rgba(255,255,255,0.8)] hover:text-white")}
            </div>
          </div>
        </div>
      </nav>

      {/* White Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white  dark:bg-background shadow-md transform transition-all duration-500 ease-in-out
           ${
             scrollY > triggerHeight
               ? "translate-y-0 opacity-100"
               : "-translate-y-full opacity-0 pointer-events-none"
           }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex gap-x-3 items-center">
              <Link href="/" className="text-xl font-semibold">
                Portfolio.
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-black dark:text-white focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            <div className="hidden lg:flex space-x-6 items-center">
              {renderLinks(
                "text-black dark:text-white hover:text-[#96bb7c] dark:hover:text-[#96bb7c]"
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="flex justify-between items-center px-4 py-4 ">
          <div className="flex gap-x-3 items-center">
            <Link href="/" className="text-xl font-semibold">
              Portfolio.
            </Link>
            <ThemeToggle />
          </div>{" "}
          <button
            onClick={() => setIsOpen(false)}
            className="text-black dark:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="block text-black dark:text-white font-medium transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
