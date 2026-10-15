"use client";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="mb-28 w-full max-w-[70rem] scroll-mt-28"
    >
      <SectionHeading>Featured Projects</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="relative h-36 bg-gradient-to-br from-gradient-1-start to-gradient-2-end p-6 text-white">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  {project.year}
                </p>
                <h3 className="mt-1 text-xl font-bold leading-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/90">{project.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="mb-4 text-sm leading-6 text-gray-700 dark:text-white/75">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white transition hover:scale-105 dark:bg-white dark:text-gray-900"
                >
                  <FaGithub className="text-sm" />
                  Code
                </a>
                <a
                  href={project.dlink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 transition hover:scale-105 dark:border-white/20 dark:text-white/80"
                >
                  Details
                  <BsArrowUpRight className="text-sm" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}