// components/ThemeToggle.tsx
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

  // Prevent rendering the toggle until the client is ready
  if (!mounted) return <div className="p-5" />;

  return (
    <button
      onClick={toggleTheme}
      className="brutalist-border brutalist-shadow bg-[var(--card-bg)] p-2 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-none transition-all flex items-center justify-center"
    >
      {dark ? (
        <Moon size={24} className="text-white" />
      ) : (
        <Sun size={24} className="text-black" />
      )}
    </button>
  );
}
