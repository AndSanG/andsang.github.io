"use client"

import * as React from "react"
import { Moon, Sun, User } from "lucide-react"
import { useTheme } from "next-themes"

const options = [
    { key: "light", icon: Sun, label: "Light Mode" },
    { key: "system", icon: User, label: "System Mode" },
    { key: "dark", icon: Moon, label: "Dark Mode" },
]

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => { setMounted(true) }, [])

    React.useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false)
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside)
            document.addEventListener("keydown", handleKeyDown)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [open])

    const current = mounted ? (options.find((o) => o.key === theme) ?? options[1]) : options[1]
    const CurrentIcon = current.icon

    return (
        <div ref={ref} className="relative">
            {/* Main button — shows active theme icon */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                aria-label="Toggle theme menu"
                aria-haspopup="menu"
                aria-expanded={open}
            >
                <CurrentIcon className="w-4 h-4" />
            </button>

            {/* Dropdown — slides down from the button */}
            <div
                role="menu"
                className={`absolute top-full right-0 mt-2 flex flex-col gap-1 p-1 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg z-50 origin-top motion-safe:transition-all motion-safe:duration-150 ${
                    open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
                }`}
            >
                {options.map(({ key, icon: Icon, label }) => (
                    <button
                        key={key}
                        role="menuitem"
                        onClick={() => { setTheme(key); setOpen(false) }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 ${
                            mounted && theme === key
                                ? "bg-zinc-100 dark:bg-zinc-700 text-black dark:text-white"
                                : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                        }`}
                        aria-label={label}
                    >
                        <Icon className="w-4 h-4" />
                    </button>
                ))}
            </div>
        </div>
    )
}
