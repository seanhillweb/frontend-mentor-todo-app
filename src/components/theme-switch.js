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
      aria-label="Toggle theme"
    >
      <span className="sr-only">Current theme: {theme}</span>
      <SunSvgComponent className="fill-scheme-light-100 hidden dark:block" />
      <MoonSvgComponent className="fill-scheme-light-100 block dark:hidden" />
    </button>
  );
};
