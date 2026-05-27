"use client"
import Image from "next/image"
import { ProjectViewModel } from '@/src/interface-adapters/presenters/project-presenter'
import { motion } from 'framer-motion'

export function ProjectCard({ project }: { project: ProjectViewModel }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(99,102,241,0.2)" }}
            className="glass-card overflow-hidden hover:backdrop-blur-xl transition-all duration-300 flex flex-col h-full"
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

            <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading tracking-tight text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{project.role}</p>

                <div className="space-y-4 text-gray-400 text-sm">
                    <p className="line-clamp-3 min-h-[3.75rem]">{project.description}</p>
                    <div className="bg-zinc-100 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800/50">
                        <strong className="block text-zinc-600 dark:text-gray-300 mb-1 text-xs uppercase tracking-wider">Challenge</strong>
                        <p className="line-clamp-3 min-h-[3.75rem]">{project.challenge}</p>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 border border-zinc-300 dark:border-zinc-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
