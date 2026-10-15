"use client";

import { useActiveSectionContext } from "@/contexts/active-session-context";
import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const codeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz-";
    const targetWord = "Spring Boot";
    const intervalOne = setInterval(() => {
      let iterations = 0;
      const intervalTwo = setInterval(() => {
        if (codeRef.current) {
          codeRef.current.innerText = codeRef.current.innerText
            .split("")
            .map((_letter, index) => {
              if (index < iterations) return targetWord[index];
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
          if (iterations >= targetWord.length) clearInterval(intervalTwo);
          iterations++;
        }
      }, 100);
    }, 2500);

    return () => clearInterval(intervalOne);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="flex w-full max-w-[80rem] scroll-mt-[100rem] flex-col-reverse items-center gap-2 text-center lg:mt-16 lg:max-w-[90rem] lg:flex-row lg:items-start"
    >
      <div className="mx-auto w-full">
        <div className="mb-4">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left text-base font-extralight sm:ml-24 sm:text-lg"
          >
            Hey! I'm
          </motion.p>
          <motion.h1
            className="mx-auto select-none text-4xl font-extrabold leading-[1.05] !tracking-tighter sm:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              data-content="Jonathan"
              className="relative inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:inline-block before:w-full before:animate-gradient-background-1 before:text-center before:text-black before:content-[attr(data-content)] before:dark:text-white"
            >
              <span className="inline-block animate-gradient-foreground-1 bg-gradient-to-r from-gradient-1-start to-gradient-1-end bg-clip-text px-1 text-transparent">
                Jonathan
              </span>
            </span>{" "}
            <span
              data-content="Miranda"
              className="relative inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:inline-block before:w-full before:animate-gradient-background-2 before:text-center before:text-black before:content-[attr(data-content)] before:dark:text-white"
            >
              <span className="inline-block animate-gradient-foreground-2 bg-gradient-to-r from-gradient-2-start to-gradient-2-end bg-clip-text px-1 text-transparent">
                Miranda
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-lg lg:text-xl"
          >
            A Backend Developer who builds{" "}
            <span
              ref={codeRef}
              className="bg-black px-1 py-[2px] font-mono font-medium text-[#00FF41]"
            >
              Spring Boot
            </span>{" "}
            services, full-stack web apps & AI/NLP solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm font-medium text-gray-500 sm:text-base"
          >
            Computer Science &amp; Business Systems graduate 
          </motion.p>
        </div>
        <motion.div
          className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 px-0 text-lg font-medium sm:flex-row sm:items-center sm:gap-4 sm:px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="group relative">
              <span className="absolute -z-10 block h-8 w-full animate-gradient-foreground-1 rounded-full bg-gradient-to-r from-gradient-1-start to-gradient-1-end blur-md duration-300 group-hover:blur-xl sm:h-12"></span>
              <span className="absolute -z-10 block h-8 w-full animate-gradient-foreground-2 rounded-full bg-gradient-to-r from-gradient-2-start to-gradient-2-end blur-md duration-300 group-hover:blur-xl sm:h-12"></span>
              <Link
                href="#contact"
                className="group flex items-center justify-center gap-3 rounded-full bg-gray-900 px-4 py-3 text-sm text-white outline-none duration-300 sm:px-9 sm:py-4 sm:text-base"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here
                <BsArrowRight className="text-lg opacity-70 transition group-hover:translate-x-1 sm:text-xl" />
              </Link>
            </div>
            <a
              className="borderBlack group flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white px-4 py-3 text-sm outline-none duration-300 hover:scale-105 focus:scale-105 active:scale-105 dark:bg-white/10 sm:px-9 sm:py-4 sm:text-base"
              href="/resume.pdf"
              download
            >
              Download Resume
              <HiDownload className="text-lg opacity-60 transition group-hover:translate-x-1 sm:text-xl" />
            </a>
          </div>
          <div className="flex justify-center gap-3">
            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 text-gray-700 duration-300 hover:scale-[1.08] hover:text-gray-950 focus:scale-[1.08] active:scale-105 dark:bg-white/10 dark:text-white/60 sm:p-4 sm:hover:scale-[1.2]"
              href="https://www.linkedin.com/in/jonathanlukemiranda"
              target="_blank"
              title="Link to my LinkedIn"
            >
              <BsLinkedin className="text-xl sm:text-3xl" />
            </a>
            <a
              href="https://github.com/OJonathanO"
              target="_blank"
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 text-gray-700 duration-300 hover:scale-[1.08] hover:text-gray-950 focus:scale-[1.08] active:scale-105 dark:bg-white/10 dark:text-white/60 sm:p-4 sm:hover:scale-[1.2]"
              title="Link to my GitHub"
            >
              <FaGithubSquare className="text-xl sm:text-3xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}