"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;

    const initial = saved || "system";
    setTheme(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      const current = (localStorage.getItem("theme") as
        | "light"
        | "dark"
        | "system"
        | null) || "system";
      applyTheme(current);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  function applyTheme(nextTheme: "light" | "dark" | "system") {
    const root = document.documentElement;
    const isDark =
      nextTheme === "dark" ||
      (nextTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDark);
  }

  function toggleTheme() {
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const icon = theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🖥️";

  return (
    <button
      onClick={toggleTheme}
      className="px-0.5 py-0.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {icon}
    </button>
  );
}
