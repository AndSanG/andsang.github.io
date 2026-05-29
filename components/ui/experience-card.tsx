"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"
import { ExperienceViewModel } from "@/src/interface-adapters/presenters/experience-presenter"
import { ChevronDown } from "lucide-react"
import { useGlassTilt } from "@/hooks/use-glass-tilt"

interface ExperienceCardProps {
    experience: ExperienceViewModel
    isOpen: boolean
    onToggle: () => void
}

const TEASER_HEIGHT = "2.875rem"

export function ExperienceCard({ experience, isOpen, onToggle }: ExperienceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { ref: tiltRef, onMouseMove, onMouseLeave } = useGlassTilt(0.6)

    useEffect(() => {
        if (isOpen) cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    }, [isOpen])

    return (
        <div ref={cardRef} className="snap-start shrink-0 w-[90%] md:w-[44%] flex flex-col">

            {/* Horizontal timeline + circle node */}
            <div className="relative h-12 mb-1">
                <div className="absolute top-1/2 h-px bg-zinc-300/60 dark:bg-white/15 -translate-y-1/2 left-0 right-0" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/50 dark:border-white/15 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm backdrop-saturate-150 overflow-hidden z-10">
                    <Image
                        src={experience.imagePath}
                        alt={experience.company}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Vertical stem from circle to card */}
            <div className="w-px h-4 bg-zinc-300/60 dark:bg-white/15 mx-auto" />

            {/* Card */}
            <div
                ref={tiltRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{ transition: "transform 0.25s ease-out" }}
                className="glass-card mx-3 p-6 flex flex-col flex-1"
            >
                <span className="inline-block px-3 py-1 rounded-full bg-white/50 dark:bg-white/8 backdrop-blur-sm border border-white/40 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-400 mb-3 font-mono w-fit">
                    {experience.year}
                </span>
                <h3 data-exp-title className={`font-heading tracking-tight text-xl font-bold mb-1 ${experience.color}`}>
                    {experience.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3 font-medium">{experience.company}</p>

                {/* CSS grid expand — shows TEASER_HEIGHT when closed */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        transition: "grid-template-rows 0.3s ease-in-out",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ minHeight: TEASER_HEIGHT }}>
                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">{experience.description}</p>
                    </div>
                </div>

                <button
                    onClick={onToggle}
                    className="mt-2 self-end flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    aria-expanded={isOpen}
                >
                    <span className="transition-opacity duration-150">
                        {isOpen ? "Show less" : "Read more"}
                    </span>
                    <ChevronDown
                        size={12}
                        className={`transition-transform duration-250 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                </button>
            </div>
        </div>
    )
}
