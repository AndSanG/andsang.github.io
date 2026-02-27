"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-10 h-10" /> // Placeholder to avoid hydration mismatch
    }

    return (
        <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all ${theme === "light"
                        ? "bg-white text-black shadow-sm"
                        : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    }`}
                aria-label="Light Mode"
            >
                <Sun className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`p-2 rounded-full transition-all ${theme === "system"
                        ? "bg-white dark:bg-zinc-700 text-black dark:text-white shadow-sm"
                        : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    }`}
                aria-label="System Mode"
            >
                <Monitor className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all ${theme === "dark"
                        ? "bg-zinc-700 text-white shadow-sm"
                        : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    }`}
                aria-label="Dark Mode"
            >
                <Moon className="w-4 h-4" />
            </button>
        </div>
    )
}
