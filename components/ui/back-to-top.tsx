"use client"

import { useEffect, useState, startTransition } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => startTransition(() => setVisible(window.scrollY > 400))
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full glass-card text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
                    aria-label="Back to top"
                >
                    <ArrowUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
