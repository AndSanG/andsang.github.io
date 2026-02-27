"use client"

import Image from "next/image"
import { Experience } from "@/src/entities/experience"

interface ExperienceCardProps {
    experience: Experience
    isEven: boolean
}

export function ExperienceCard({ experience, isEven }: ExperienceCardProps) {
    return (
        <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

            {/* Content Side */}
            <div className="w-full md:w-1/2 pl-16 md:px-12">
                <div className={`
                    relative z-10 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300
                    ${isEven ? 'md:text-left' : 'md:text-right'}
                 `}>
                    <span className={`inline-block px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 mb-3 font-mono`}>
                        {experience.year}
                    </span>
                    <h3 className={`text-xl font-bold text-foreground dark:text-white mb-1 ${experience.color}`}>{experience.title}</h3>
                    <p className="text-zinc-400 text-sm mb-3 font-medium">{experience.company}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                        {experience.description}
                    </p>
                </div>
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
