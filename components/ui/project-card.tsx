"use client"
import Image from "next/image"
import { useRef, useEffect } from 'react'
import { ProjectViewModel } from '@/src/interface-adapters/presenters/project-presenter'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const TEASER_HEIGHT = "2.875rem"

interface ProjectCardProps {
    project: ProjectViewModel
    isOpen: boolean
    onToggle: () => void
}

export function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    }, [isOpen])

    return (
        <div ref={cardRef} className="snap-start shrink-0 w-[calc(90%-1.5rem)] md:w-[44%] flex flex-col">
            <div data-caption className="px-1 mb-2">
                <h3 className="font-heading tracking-tight text-xl font-bold text-zinc-900 dark:text-white">
                    {project.title}
                </h3>
                <p className="text-accent text-sm font-medium mt-0.5">{project.role}</p>
            </div>

            {project.imagePath ? (
                <div className="group relative h-64 w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-4 shadow-lg">
                    <Image
                        src={project.imagePath}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            ) : null}

            <div className="px-1 flex flex-col flex-1">
                <motion.div
                    animate={{ height: isOpen ? "auto" : TEASER_HEIGHT }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="bg-zinc-100 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800/50 mb-4">
                        <strong className="block text-zinc-600 dark:text-gray-300 mb-1 text-xs uppercase tracking-wider">Challenge</strong>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 border border-zinc-300 dark:border-zinc-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <button
                    onClick={onToggle}
                    className="mt-2 self-end flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
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
