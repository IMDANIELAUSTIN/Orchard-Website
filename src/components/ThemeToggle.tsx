import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  variant?: "segmented" | "button" | "floating";
  className?: string;
}

export function ThemeToggle({ variant = "segmented", className = "" }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-secondary active:scale-95 ${className}`}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      >
        {resolvedTheme === "dark" ? (
          <>
            <Sun className="size-4 text-accent" aria-hidden="true" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="size-4 text-accent" aria-hidden="true" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <button
          type="button"
          onClick={toggleTheme}
          className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card backdrop-blur-xl transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
        >
          {resolvedTheme === "dark" ? (
            <Sun className="size-5 text-accent" aria-hidden="true" />
          ) : (
            <Moon className="size-5 text-accent" aria-hidden="true" />
          )}
        </button>
      </div>
    );
  }

  // Default: Segmented 3-option control (Light / System / Dark)
  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={`inline-flex items-center rounded-full border border-border bg-card p-1 shadow-sm ${className}`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={theme === "light"}
        onClick={() => setTheme("light")}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
          theme === "light"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun className="size-3.5" aria-hidden="true" />
        <span>Light</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={theme === "system"}
        onClick={() => setTheme("system")}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
          theme === "system"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Laptop className="size-3.5" aria-hidden="true" />
        <span>Auto</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={theme === "dark"}
        onClick={() => setTheme("dark")}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
          theme === "dark"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon className="size-3.5" aria-hidden="true" />
        <span>Dark</span>
      </button>
    </div>
  );
}
