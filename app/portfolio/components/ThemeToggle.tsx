"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setDark(false);
    } else {
      root.classList.add("dark");
      setDark(true);
    }
  };

  if (!mounted) return <div className="p-5" />;

  return (
    <button
      onClick={toggleTheme}
      className="border-4 border-[var(--foreground)] shadow-[8px_8px_0px_0px_var(--shadow)] bg-[var(--card-bg)] text-[var(--foreground)] font-black uppercase text-base p-2 flex items-center gap-2 flex-1 sm:flex-none justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--shadow)] transition-all text-black"
    >
      {dark ? (
        <Moon size={24} className="text-white" />
      ) : (
        <Sun size={24} className="text-black" />
      )}
    </button>
  );
}
