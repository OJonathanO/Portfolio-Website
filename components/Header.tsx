"use client";

import { useActiveSectionContext } from "@/contexts/active-session-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-3 h-[4.9rem] w-[calc(100%-1rem)] max-w-[48rem] rounded-3xl border border-white/40 bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-md dark:border-black/40 dark:bg-gray-950/70 sm:top-24 sm:h-[3.25rem] sm:w-full sm:rounded-full md:top-20 xl:top-12"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-3 flex h-[4.9rem] -translate-x-1/2 items-center py-2 sm:top-24 sm:h-[initial] sm:py-0 md:top-[5.25rem] xl:top-[3.25rem]">
        <ul className="flex w-[calc(100vw-1.5rem)] max-w-[30rem] flex-wrap items-center justify-center gap-1 text-[0.72rem] font-medium sm:w-[40rem] sm:max-w-none sm:flex-nowrap sm:gap-6 sm:text-[0.9rem]">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center rounded-full px-3 py-2 text-gray-900 duration-300 hover:text-black dark:text-gray-300 dark:hover:text-gray-100",
                  {
                    "!text-gray-50 dark:!text-gray-950":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-950 dark:bg-gray-50"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
            <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex w-full items-center justify-center duration-300 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100 sm:px-2">
              <ThemeSwitch />
            </div>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
