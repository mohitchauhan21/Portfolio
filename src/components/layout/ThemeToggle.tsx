"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { site } from "@/content";

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

  return (
    <button
      type="button"
      aria-label={site.ui.themeToggle}
      data-theme-toggle
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-visible:ring-accent flex h-11 w-11 cursor-pointer items-center justify-center rounded-full p-1.5 focus:outline-none focus-visible:ring-2"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a2346] text-white transition-colors dark:border dark:border-[#27272c] dark:bg-[#2a2a2d] dark:text-[#8da4c4]">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
