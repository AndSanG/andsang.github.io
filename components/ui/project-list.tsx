"use client"

import { useRef, useState, useEffect, useLayoutEffect } from "react"
import { ProjectViewModel } from "@/src/interface-adapters/presenters/project-presenter"
import { ProjectCard } from "./project-card"
import { ChevronLeft, ChevronRight } from "lucide-react"


export function ProjectList({ projects }: { projects: ProjectViewModel[] }) {
    const [openId, setOpenId] = useState<string | null>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const scrollRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const container = scrollRef.current
        if (!container) return
        const captions = Array.from(container.querySelectorAll<HTMLElement>('[data-caption]'))
        captions.forEach(el => (el.style.height = ''))
        const max = Math.max(...captions.map(el => el.getBoundingClientRect().height))
        captions.forEach(el => (el.style.height = `${max}px`))
    }, [projects])

    useEffect(() => {
        if (openId !== null) return
        const container = scrollRef.current
        if (!container) return
        const timer = setTimeout(() => {
            const cards = Array.from(container.children).slice(0, projects.length) as HTMLElement[]
            cards.forEach(el => (el.style.minHeight = ''))
            const max = Math.max(...cards.map(el => el.getBoundingClientRect().height))
            cards.forEach(el => (el.style.minHeight = `${max}px`))
        }, 350)
        return () => clearTimeout(timer)
    }, [openId, projects.length])

    useEffect(() => {
        const container = scrollRef.current
        if (!container || projects.length === 0) return

        const cards = Array.from(container.children).slice(0, projects.length) as HTMLElement[]
        const first = cards[0]
        const last = cards[cards.length - 1]

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({ target, isIntersecting }) => {
                    if (target === first) setCanScrollLeft(!isIntersecting)
                    if (target === last) setCanScrollRight(!isIntersecting)
                })
            },
            { root: container, threshold: 0.9 }
        )

        observer.observe(first)
        observer.observe(last)
        return () => observer.disconnect()
    }, [projects.length])

    const getCards = () => {
        const container = scrollRef.current
        if (!container) return []
        return Array.from(container.children).slice(0, projects.length) as HTMLElement[]
    }

    const navigate = (getTarget: (cards: HTMLElement[], containerLeft: number) => HTMLElement | undefined) => {
        const container = scrollRef.current
        if (!container) return

        const containerLeft = container.getBoundingClientRect().left
        const cards = getCards()
        const target = getTarget(cards, containerLeft)
        if (!target) return

        const doScroll = () => {
            const left = target.getBoundingClientRect().left - container.getBoundingClientRect().left
            container.scrollBy({ left, behavior: 'smooth' })
        }

        if (openId !== null) {
            setOpenId(null)
            const wrapper = wrapperRef.current
            if (wrapper) {
                const top = wrapper.getBoundingClientRect().top + window.scrollY - 96
                window.scrollTo({ top, behavior: 'instant' })
            }
            doScroll()
        } else {
            doScroll()
        }
    }

    const handleScrollLeft = () => navigate((cards, containerLeft) => {
        const currentIdx = cards.findIndex(c => c.getBoundingClientRect().left >= containerLeft - 8)
        return cards[Math.max(0, currentIdx - 1)]
    })

    const handleScrollRight = () => navigate((cards, containerLeft) =>
        cards.find(c => c.getBoundingClientRect().left > containerLeft + 8)
    )

    return (
        <div ref={wrapperRef}>
            <div
                ref={scrollRef}
                className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 items-start"
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
                    onClick={handleScrollLeft}
                    disabled={!canScrollLeft}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous project"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={handleScrollRight}
                    disabled={!canScrollRight}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next project"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    )
}
