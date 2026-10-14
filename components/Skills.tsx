"use client";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { skillsGroups } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.03 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-[70rem] scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {skillsGroups.map((group, gi) => (
          <div
            key={group.title}
            className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-white/50">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  className="borderBlack flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-800 dark:bg-white/10 dark:text-white/80"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={gi * 10 + index}
                >
                  <span className="!text-base">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}