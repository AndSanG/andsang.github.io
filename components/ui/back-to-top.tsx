"use client"

import { useEffect, useState, startTransition } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => startTransition(() => setVisible(window.scrollY > 400))
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full glass-card text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            aria-label="Back to top"
            aria-hidden={!visible}
        >
            <ArrowUp size={18} />
        </button>
    )
}
