"use client"
import Image from "next/image"
import { ProjectViewModel } from '@/src/interface-adapters/presenters/project-presenter'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// ~2 lines at text-sm / leading-relaxed (14px × 1.625 × 2 ≈ 46px)
const TEASER_HEIGHT = "2.875rem"

interface ProjectCardProps {
    project: ProjectViewModel
    isOpen: boolean
    onToggle: () => void
}

export function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {

    return (
        <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(99,102,241,0.2)" }}
            className="glass-card overflow-hidden hover:backdrop-blur-xl transition-all duration-300 flex flex-col"
        >
            {project.imagePath && (
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-900 shrink-0">
                    <Image
                        src={project.imagePath}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="p-6 flex flex-col">
                <h3 className="font-heading tracking-tight text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-accent text-sm font-medium mb-3">{project.role}</p>

                {/* Teaser + expand */}
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
                    className="mt-2 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors w-full"
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
        </motion.div>
    )
}
