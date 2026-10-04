"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { site } from "@/content";
import { cn } from "@/lib/cn";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label={site.ui.themeToggle}
        data-theme-toggle
        className="focus-visible:ring-accent flex h-11 w-11 items-center justify-center rounded-full p-1.5 focus:outline-none focus-visible:ring-2"
      >
        <span className="h-8 w-8 rounded-full bg-[#0a2346] dark:border dark:border-[#27272c] dark:bg-[#2a2a2d]" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    // Enable 200ms color transition only on toggle click
    document.documentElement.classList.add("theme-transition");
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 250);
  };

  return (
    <button
      type="button"
      aria-label={site.ui.themeToggle}
      data-theme-toggle
      onClick={handleToggle}
      className="focus-visible:ring-accent flex h-11 w-11 cursor-pointer items-center justify-center rounded-full p-1.5 focus:outline-none focus-visible:ring-2"
    >
      <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#0a2346] text-white transition-colors duration-200 dark:border dark:border-[#27272c] dark:bg-[#2a2a2d] dark:text-[#8da4c4]">
        <span
          className={cn(
            "flex items-center justify-center transition-all duration-300",
            isDark ? "rotate-90 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          )}
        >
          <SunIcon />
        </span>
        <span
          className={cn(
            "absolute flex items-center justify-center transition-all duration-300",
            !isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          )}
        >
          <MoonIcon />
        </span>
      </span>
    </button>
  );
}
