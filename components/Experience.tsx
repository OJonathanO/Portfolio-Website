"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { useThemeContext } from "@/contexts/theme-context";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useThemeContext();

  return (
    <section id="experience" ref={ref} className="mb-28 w-full scroll-mt-28 sm:mb-40">
      <SectionHeading>Professional Experience</SectionHeading>

      {/* Timeline Container */}
      <div className="relative mt-10 flex flex-col gap-10 lg:gap-20">
        {/* Center Branch Line */}
        <div className="absolute left-1/2 hidden h-full w-[4px] -translate-x-1/2 bg-gray-400 dark:bg-gray-600 lg:block"></div>

        {/* Timeline Items */}
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative flex w-full flex-col gap-4 lg:max-w-4xl lg:flex-row lg:items-center ${
              index % 2 === 0 ? "lg:ml-0 lg:flex-row" : "lg:ml-auto lg:flex-row-reverse"
            }`}
          >
            {/* Connector Spacer */}
            <div className="relative hidden h-full w-1 items-center justify-center lg:flex"></div>

            {/* Outlined Icon */}
            <div
              className={`z-10 flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-lg sm:h-16 sm:w-16 sm:text-3xl ${
                theme === "light"
                  ? "bg-gray-100 text-gray-800 border border-gray-400"
                  : "bg-gray-700 text-white border border-gray-500"
              } ${index % 2 === 0 ? "lg:ml-6" : "lg:mr-6"}`}
            >
              {item.icon}
            </div>

            {/* Experience Card */}
            <div
              className={`w-full rounded-lg border border-gray-300 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:p-6 lg:w-[500px] ${
                index % 2 === 0 ? "lg:ml-6" : "lg:mr-6"
              }`}
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 whitespace-nowrap">
                  {item.date}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.location}
              </p>
              <p className="mt-2 text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

