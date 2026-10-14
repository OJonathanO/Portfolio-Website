"use client";

import { motion } from "framer-motion";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="mb-16 mt-8 flex animate-bounce flex-col items-center sm:mt-24 lg:mb-36 lg:mt-32"
    >
      <div className="h-4 w-1 rounded-full bg-gray-400"></div>
      <BsFillCaretDownFill className="!text-gray-400" />
    </motion.div>
  );
}
