"use client";

import React from "react";
import { educationData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { useThemeContext } from "@/contexts/theme-context";
import SectionHeading from "./SectionHeading";
import { MdOutlineSchool } from "react-icons/md"; // Outlined Education Icon
import { motion } from "framer-motion";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);
  const { theme } = useThemeContext();

  return (
    <section id="education" ref={ref} className="mb-28 w-full scroll-mt-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>

      {/* Timeline Container */}
      <div className="relative mt-10 flex flex-col items-center gap-10 lg:gap-20">
        {/* Center Branch Line */}
        <div className="absolute left-1/2 hidden h-full w-[4px] -translate-x-1/2 bg-gray-400 dark:bg-gray-600 lg:block"></div>

        {/* Timeline Items */}
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex w-full max-w-4xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-center"
          >
            {/* Git Graph Node & Branch Connector */}
            <div className="relative hidden h-full w-1 items-center justify-center lg:flex"></div>

            {/* Outlined Education Icon (Matches Experience) */}
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-lg sm:h-16 sm:w-16 sm:text-3xl ${
                theme === "light"
                  ? "bg-gray-100 text-gray-800 border border-gray-400"
                  : "bg-gray-700 text-white border border-gray-500"
              } ${index % 2 === 0 ? "lg:ml-6" : "lg:mr-6"}`}
            >
              <MdOutlineSchool />
            </div>

            {/* Education Card */}
            <div
              className="w-full rounded-lg border border-gray-300 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:p-6 lg:w-[500px] lg:ml-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
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
