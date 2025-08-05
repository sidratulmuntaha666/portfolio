import { Building, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const Resume = () => {
  type WorkExperience = {
    role: string;
    type: string;
    company: string;
    location: string;
    duration: string;
  };

  type education = {
    degree: string;
    university: string;
    duration: string;
  };

  const workExperiences: WorkExperience[] = [
    {
      role: "Senior Front End Developer",
      type: "Fulltime",
      company: "Facebook, Inc.",
      location: "San Francisco",
      duration: "November 2019 - Present",
    },
    {
      role: "Frontend Engineer",
      type: "Contract",
      company: "Google LLC",
      location: "Mountain View",
      duration: "January 2018 - October 2019",
    },
    {
      role: "Senior Front End Developer",
      type: "Fulltime",
      company: "Facebook, Inc.",
      location: "San Francisco",
      duration: "November 2019 - Present",
    },
    {
      role: "Senior Front End Developer",
      type: "Fulltime",
      company: "Facebook, Inc.",
      location: "San Francisco",
      duration: "November 2019 - Present",
    },
  ];

  const education: education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      university: "Stanford University",
      duration: "2013 - 2017",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      university: "Stanford University",
      duration: "2013 - 2017",
    },
  ];

  return (
    <div className="sm:px-6 lg:px-30 px-4" id="resume">
      <h1 className="text-center text-4xl md:text-5xl font-semibold lg:m-0 my-5">
        <ScrollAnimation>Resume</ScrollAnimation>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-1/3 w-full">
          <ScrollAnimation>
            <Image
              src="/assets/resume_img.webp"
              alt="resume"
              width={850}
              height={450}
            />
          </ScrollAnimation>
        </div>

        <div className="lg:w-2/3 w-full lg:ps-24">
          <ScrollAnimation>
            <h1 className="text-2xl md:text-3xl font-medium mb-10 mt-10">
              Work Experience
            </h1>
          </ScrollAnimation>
          {workExperiences.map((item, index) => (
            <ScrollAnimation>
              <div key={index} className="border-b border-gray-200 py-5">
                <div className="flex justify-between pb-2">
                  <h1 className="text-lg font-medium">{item.role}</h1>
                  <button className="bg-[rgba(150,187,124,0.1)] uppercase text-sm font-semibold tracking-widest py-1 ml-5 rounded-2xl px-4 text-[#96bb7c]">
                    {item.type}
                  </button>
                </div>

                <div className="flex justify-between flex-wrap gap-y-2">
                  <div className="flex items-center gap-x-5">
                    <div className="flex items-center gap-x-2">
                      <Building className="text-gray-400 h-4 w-4" />
                      <p className="text-gray-400 dark:text-white text-sm">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <MapPin className="text-gray-400 h-4 w-4" />
                      <p className="text-gray-400 dark:text-white text-sm">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <CalendarDays className="text-gray-400 h-4 w-4" />
                    <p className="text-gray-400 dark:text-white text-sm">
                      {item.duration}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
          <ScrollAnimation>
            <h1 className="text-2xl md:text-3xl font-medium mt-6">Education</h1>
          </ScrollAnimation>
          <div className="mb-18">
            {education.map((item, index) => (
              <ScrollAnimation>
                <div key={index} className="border-b border-gray-200 py-5">
                  <div className="flex lg-flex-nowrap flex-wrap gap-2 justify-between pb-2">
                    <h1 className="text-lg font-medium">{item.degree}</h1>
                    <div className="flex items-center gap-x-2">
                      <CalendarDays className="text-gray-400 dark:text-white h-4 w-4" />
                      <p className="text-gray-400 text-sm">{item.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <CalendarDays className="text-gray-400 dark:text-white h-4 w-4" />
                    <p className="text-gray-400 text-sm">{item.university}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
