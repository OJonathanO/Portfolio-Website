"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdCode, MdSchool, MdWorkOutline } from "react-icons/md";
import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

const facts = [
  {
    label: "Current Role",
    value: "Open to New Opportunities",
    icon: MdWorkOutline,
  },
  {
    label: "Focus",
    value: "Backend Engineering, REST APIs & AI/NLP",
    icon: MdCode,
  },
  {
    label: "Education",
    value: "B.E. CS & Business Systems, St Joseph College of Engineering",
    icon: MdSchool,
  },
] as const;

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[70rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-start">
        <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-white/5">
          <Image
            className="aspect-[4/5] w-full object-cover"
            width={420}
            height={520}
            alt="Jonathan Miranda"
            src="/headshot2.jpg"
            priority
          />

          <figcaption className="border-t border-black/5 px-5 py-4 dark:border-white/10">
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              Jonathan Miranda
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
              Backend &amp; Full-Stack Developer building REST APIs, web apps and AI/NLP solutions.
            </p>
          </figcaption>
        </figure>

        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <p className="text-lg leading-8 text-gray-700 dark:text-white/80 sm:text-[1.15rem]">
              I am a Computer Science &amp; Business Systems graduate who loves turning ideas into
              reliable software. I build backend services with Java and Spring Boot, full-stack web
              applications with React, and AI/NLP solutions such as RAG-based educational platforms
              and machine-learning classifiers.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-white/80 sm:text-[1.15rem]">
              Currently, I work as a Java Backend Developer Intern at NxtGenAI, where I developed
              and maintained RESTful APIs following a layered architecture using Spring Boot,
              Spring MVC and Spring Data JPA. I value clean code, good API design and continuous
              learning.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-white/80 sm:text-[1.15rem]">
              Beyond development, I am passionate about system design, AI integrations, building
              products that deliver measurable impact, and exploring new technologies. I enjoy
              collaborating in teams and contributing to shared goals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <Icon className="text-2xl text-gray-900 dark:text-white" />

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-white/50">
                    {fact.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/75">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}