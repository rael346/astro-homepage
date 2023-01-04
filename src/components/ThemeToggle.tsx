import { createEffect, createSignal, onMount } from "solid-js";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeToggle = () => {
  const [theme, setTheme] = createSignal(
    localStorage.getItem("theme") ?? "light"
  );

  const [isMounted, setIsMounted] = createSignal(false);

  const handleClick = () => {
    setTheme(theme() === "light" ? "dark" : "light");
  };

  createEffect(() => {
    if (theme() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme());
  });

  onMount(() => setIsMounted(true));

  if (!isMounted) return null;

  return (
    <button
      type="button"
      class="w-9 h-9 flex items-center justify-center rounded-md bg-slate-300 hover:ring-2 ring-gray-400 dark:bg-slate-700 dark:ring-slate-500 transition"
      onClick={handleClick}
    >
      {theme() === "dark" ? <SunIcon fill="#FFFFFF" /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
