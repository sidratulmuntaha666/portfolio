import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  type Testimonial = {
    image: string;
    alt: string;
    text: string;
    name: string;
  };

  const testimonials: Testimonial[] = [
    {
      image: "/assets/person_1.webp",
      alt: "Client 1",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      name: "— Jeremy Winston, CEO XYZ Inc.",
    },
    {
      image: "/assets/person_1.webp",
      alt: "Client 2",
      text: " “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      name: "— Jeremy Winston, CEO XYZ Inc.",
    },
    {
      image: "/assets/person_1.webp",
      alt: "Client 3",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      name: "— Jeremy Winston, CEO XYZ Inc.",
    },
    {
      image: "/assets/person_1.webp",
      alt: "Client 4",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      name: "— Jeremy Winston, CEO XYZ Inc.",
    },
    {
      image: "/assets/person_1.webp",
      alt: "Client 5",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      name: "— Jeremy Winston, CEO XYZ Inc.",
    },
    {
      image: "/assets/person_1.webp",
      alt: "Client 6",
      text: " “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      name: "— Jeremy Winston, CEO XYZ Inc.",
    },
  ];

  return (
    <div
      className="sm:px-6 lg:px-20 px-4 py-16 bg-gray-100 dark:bg-background"
      id="testimonial"
    >
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
        Happy Clients
      </h1>
      <div className="relative">
        <Carousel className="max-w-full">
          <CarouselContent className="flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white px-6 py-8 flex flex-col justify-center items-center rounded-md shadow-md h-full">
                  <Image
                    src={testimonial.image}
                    width={80}
                    height={80}
                    className="rounded-full mb-3"
                    alt={testimonial.alt}
                  />
                  <p className="text-center text-gray-500 mb-2 text-sm sm:text-base">
                    {testimonial.text}
                  </p>
                  <i className="text-center text-gray-500 text-sm sm:text-base">
                    {testimonial.name}
                  </i>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-0" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
