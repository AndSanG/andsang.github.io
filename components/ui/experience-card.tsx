"use client"

import Image from "next/image"
import { useState } from "react"
import { ExperienceViewModel } from "@/src/interface-adapters/presenters/experience-presenter"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ExperienceCardProps {
    experience: ExperienceViewModel
    isEven: boolean
}

// ~2 lines at text-sm / leading-relaxed (14px × 1.625 × 2 ≈ 46px)
const TEASER_HEIGHT = "2.875rem"

export function ExperienceCard({ experience, isEven }: ExperienceCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

            {/* Content Side */}
            <div className="w-full md:w-1/2 pl-16 md:px-12">
                <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(99,102,241,0.2)" }}
                    className={`
                    relative z-10 glass-card p-6 transition-all duration-300 hover:backdrop-blur-xl
                    ${isEven ? 'md:text-left' : 'md:text-right'}
                 `}>
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 mb-3 font-mono">
                        {experience.year}
                    </span>
                    <h3 className={`font-heading tracking-tight text-xl font-bold text-foreground  mb-1 ${experience.color}`}>
                        {experience.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3 font-medium">{experience.company}</p>

                    {/* Teaser + expand */}
                    <motion.div
                        animate={{ height: isOpen ? "auto" : TEASER_HEIGHT }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            {experience.description}
                        </p>
                    </motion.div>

                    <button
                        onClick={() => setIsOpen(prev => !prev)}
                        className={`mt-2 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
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
                </motion.div>
            </div>

            {/* Timeline Node (Image) */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-black border-4 border-zinc-200 dark:border-zinc-900 z-10 overflow-hidden">
                <Image
                    src={experience.imagePath}
                    alt={experience.company}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Connection Line (Desktop) */}
            <div className={`absolute top-1/2 -translate-y-1/2 h-1 bg-zinc-300 dark:bg-zinc-800 hidden md:block w-4
                ${isEven ? 'left-1/2 ml-8' : 'right-1/2 mr-8'}
             `}></div>

            {/* Empty Side for Spacing */}
            <div className="w-full md:w-1/2 hidden md:block"></div>

        </div>
    )
}
