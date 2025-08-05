// import { Binoculars, LucideIcon, Monitor, ShoppingBasket } from "lucide-react";
// import React, { JSX } from "react";

// type serviceItem = {
//   icon: LucideIcon;
//   title: string;
//   description: string;
// };

// const serviceItems: serviceItem[] = [
//   {
//     icon: Monitor,
//     title: "Development",
//     description:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
//   {
//     icon: Binoculars,
//     title: "Design",
//     description:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
//   {
//     icon: ShoppingBasket,
//     title: "eCommerce",
//     description:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
// ];
// const Service = () => {
//   return (
//     <div className="sm:px-6 lg:px-30 px-4 lg:py-25 py-8 ">
//       <h1 className="text-center text-4xl md:text-5xl font-semibold mb-8">
//         Services
//       </h1>
//       <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-4">
//         {serviceItems.map((item, index) => (
//           <div
//             key={index}
//             className="lg:w-1/3 flex flex-col items-center justify-center text-center w-full border-2 border-gray-200 rounded-md px-7 py-12 mb-5"
//           >
//             <item.icon className="w-16 h-16 text-[#96bb7c]" />

//             <h1 className="text-2xl font-semibold py-3">{item.title}</h1>
//             <p className="text-gray-500 dark:text-white">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;

"use client";

import React from "react";
import { Binoculars, Monitor, ShoppingBasket, LucideIcon } from "lucide-react";
import FlipCard from "./FlipCard";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  backContent: string;
};

const serviceItems: ServiceItem[] = [
  {
    icon: Monitor,
    title: "Development",
    description: "We build scalable and efficient web applications.",
    backContent:
      "Our development team specializes in modern frameworks and best practices to deliver high-quality software solutions.",
  },
  {
    icon: Binoculars,
    title: "Design",
    description: "Creating intuitive and engaging user interfaces.",
    backContent:
      "Our design process focuses on user experience, ensuring that each interface is both functional and aesthetically pleasing.",
  },
  {
    icon: ShoppingBasket,
    title: "eCommerce",
    description: "Robust eCommerce platforms tailored to your needs.",
    backContent:
      "We develop comprehensive eCommerce solutions that streamline shopping experiences and drive sales growth. ensuring that each interface is both functional and aesthetically pleasing",
  },
];

const Service = () => {
  return (
    <div className="sm:px-6 lg:px-30 px-4 lg:py-25 py-8" id="services">
      <h1 className="text-center text-4xl md:text-5xl font-semibold mb-8">
        Services
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-4">
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className="lg:w-1/3 w-full border-2 border-gray-200 h-70 cursor-pointer rounded-md px-7 py-12 mb-5"
          >
            <FlipCard
              front={
                <div className="flex flex-col items-center justify-center text-center">
                  <item.icon className="w-16 h-16 text-[#96bb7c]" />
                  <h2 className="text-2xl font-semibold py-3">{item.title}</h2>
                  <p className="text-gray-500 dark:text-white">
                    {item.description}
                  </p>
                </div>
              }
              back={
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="text-xl font-semibold py-3">
                    {item.title} Details
                  </h2>
                  <p className="text-gray-500 dark:text-white">
                    {item.backContent}
                  </p>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
