"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => { setMounted(true) }, [])

    const isDark = mounted ? resolvedTheme === "dark" : false

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-10 h-10 rounded-full bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md backdrop-saturate-150 border border-white/50 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-white hover:bg-white/60 dark:hover:bg-zinc-900/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
    )
}
