"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"
import { ExperienceViewModel } from "@/src/interface-adapters/presenters/experience-presenter"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ExperienceCardProps {
    experience: ExperienceViewModel
    isOpen: boolean
    onToggle: () => void
}

const TEASER_HEIGHT = "2.875rem"

export function ExperienceCard({ experience, isOpen, onToggle }: ExperienceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    }, [isOpen])

    return (
        <div ref={cardRef} className="snap-start shrink-0 w-[90%] md:w-[44%] flex flex-col">

            {/* Horizontal timeline + circle node */}
            <div className="relative h-12 mb-1">
                <div className="absolute top-1/2 h-1 bg-zinc-300 dark:bg-zinc-700 -translate-y-1/2 left-0 right-0" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/50 dark:border-white/15 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm overflow-hidden z-10">
                    <Image
                        src={experience.imagePath}
                        alt={experience.company}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Vertical stem from circle to card */}
            <div className="w-1 h-4 bg-zinc-300 dark:bg-zinc-700 mx-auto" />

            {/* Card */}
            <div className="glass-card mx-3 p-6 flex flex-col flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 mb-3 font-mono w-fit">
                    {experience.year}
                </span>
                <h3 className={`font-heading tracking-tight text-xl font-bold mb-1 ${experience.color}`}>
                    {experience.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3 font-medium">{experience.company}</p>

                <motion.div
                    animate={{ height: isOpen ? "auto" : TEASER_HEIGHT }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">{experience.description}</p>
                </motion.div>

                <button
                    onClick={onToggle}
                    className="mt-2 self-end flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    aria-expanded={isOpen}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isOpen ? "less" : "more"}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.15 }}
                        >
                            {isOpen ? "Show less" : "Read more"}
                        </motion.span>
                    </AnimatePresence>
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <ChevronDown size={12} />
                    </motion.span>
                </button>
            </div>
        </div>
    )
}
