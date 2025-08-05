import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  title: string;
  subtitle: string;
};

const PortfolioCard = ({ src, title, subtitle }: Props) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={title}
        width={850}
        height={450}
        className="transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black cursor-pointer flex flex-col items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-500">
        <h2 className="font-semibold text-2xl text-white">{title}</h2>
        <p className="text-[#96bb7c]">{subtitle}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
