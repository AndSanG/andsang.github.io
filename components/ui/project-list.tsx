"use client"

import { useRef, useState } from "react"
import { ProjectViewModel } from "@/src/interface-adapters/presenters/project-presenter"
import { ProjectCard } from "./project-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectList({ projects }: { projects: ProjectViewModel[] }) {
    const [openId, setOpenId] = useState<string | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollToIndex = (index: number) => {
        const container = scrollRef.current
        if (!container) return
        const cards = Array.from(container.children) as HTMLElement[]
        if (!cards[index]) return
        const containerLeft = container.getBoundingClientRect().left
        const cardLeft = cards[index].getBoundingClientRect().left
        container.scrollBy({ left: cardLeft - containerLeft, behavior: 'smooth' })
        setCurrentIndex(index)
    }

    return (
        <div>
            <div
                ref={scrollRef}
                className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 items-start"
            >
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        isOpen={openId === project.id}
                        onToggle={() => setOpenId(prev => prev === project.id ? null : project.id)}
                    />
                ))}
            </div>

            <div className="flex items-center gap-3 mt-6">
                <button
                    onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous project"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => scrollToIndex(Math.min(projects.length - 1, currentIndex + 1))}
                    disabled={currentIndex >= projects.length - 2}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next project"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    )
}
