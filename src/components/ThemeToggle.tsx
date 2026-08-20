import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={`inline-flex items-center rounded-full border border-[#290B00]/15 dark:border-[#F6F4F3]/20 bg-[#EAE5E2] dark:bg-[#381406] p-1 shadow-sm ${className}`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={resolvedTheme === "light"}
        onClick={() => setTheme("light")}
        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-200 ${
          resolvedTheme === "light"
            ? "bg-[#290B00] text-[#F6F4F3] shadow-sm"
            : "text-[#290B00]/60 hover:text-[#290B00] dark:text-[#F6F4F3]/60 dark:hover:text-[#F6F4F3]"
        }`}
      >
        <Sun className="size-3.5" aria-hidden="true" />
        <span>Light</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={resolvedTheme === "dark"}
        onClick={() => setTheme("dark")}
        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-200 ${
          resolvedTheme === "dark"
            ? "bg-[#F6F4F3] text-[#290B00] shadow-sm"
            : "text-[#290B00]/60 hover:text-[#290B00] dark:text-[#F6F4F3]/60 dark:hover:text-[#F6F4F3]"
        }`}
      >
        <Moon className="size-3.5" aria-hidden="true" />
        <span>Dark</span>
      </button>
    </div>
  );
}
