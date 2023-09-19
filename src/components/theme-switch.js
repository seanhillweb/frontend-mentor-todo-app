"use client";

import { useTheme } from "next-themes";
import SunSvgComponent from "./svgs/sun";
import MoonSvgComponent from "./svgs/moon";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="inline-block"
      title="Toggles light and dark theme"
      aria-label="auto"
      aria-live="polite"
    >
      <SunSvgComponent className="hidden fill-scheme-light-100 dark:block" />
      <MoonSvgComponent className="block fill-scheme-light-100 dark:hidden" />
    </button>
  );
};
