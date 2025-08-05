"use client";

import React from "react";
import PortfolioCard from "./PortfolioCard";
import ScrollAnimation from "./ScrollAnimation";

const MyPortfolio = () => {
  const portfolioData = [
    {
      src: "/assets/work_1.webp",
      title: "Landing Page Design",
      subtitle: "UI/UX",
    },
    {
      src: "/assets/work_2.webp",
      title: "Mobile App Concept",
      subtitle: "App Design",
    },
    {
      src: "/assets/work_3.webp",
      title: "Brand Identity",
      subtitle: "Logo & Colors",
    },
    {
      src: "/assets/work_4.webp",
      title: "Web Redesign",
      subtitle: "Responsive",
    },
    {
      src: "/assets/work_5.webp",
      title: "Illustration",
      subtitle: "Creative Art",
    },
    {
      src: "/assets/work_6.webp",
      title: "E-commerce Site",
      subtitle: "Shopify Custom",
    },
    {
      src: "/assets/work_7.webp",
      title: "Portfolio Site",
      subtitle: "Personal Brand",
    },
  ];

  return (
    <div className="sm:px-6 lg:px-30 px-4" id="portfolio">
      <ScrollAnimation>
        <h1 className="text-center text-4xl md:text-5xl font-semibold mb-8">
          My Portfolio
        </h1>
      </ScrollAnimation>

      <div className="flex flex-wrap md:flex-nowrap gap-x-4">
        {/* First Column - 3 cards */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 mb-4">
          {portfolioData.slice(0, 3).map((item, i) => (
            <ScrollAnimation>
              <PortfolioCard
                key={i}
                src={item.src}
                title={item.title}
                subtitle={item.subtitle}
              />
            </ScrollAnimation>
          ))}
        </div>

        {/* Second Column - 2 cards */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 mb-4">
          {portfolioData.slice(3, 5).map((item, i) => (
            <ScrollAnimation>
              <PortfolioCard
                key={i + 3}
                src={item.src}
                title={item.title}
                subtitle={item.subtitle}
              />
            </ScrollAnimation>
          ))}
        </div>

        {/* Third Column - 2 cards */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 mb-4">
          {portfolioData.slice(5, 7).map((item, i) => (
            <ScrollAnimation>
              <PortfolioCard
                key={i + 5}
                src={item.src}
                title={item.title}
                subtitle={item.subtitle}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
