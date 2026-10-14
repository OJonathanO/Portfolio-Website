"use client";

import { useThemeContext } from "@/contexts/theme-context";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-900 transition-transform active:scale-95 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
      onClick={toggleTheme}
      title="Theme switching button"
    >
      {theme === "light" ? (
        <ImSun size={20} />
      ) : (
        <BsFillMoonStarsFill size={18} />
      )}
    </button>
  );
}
