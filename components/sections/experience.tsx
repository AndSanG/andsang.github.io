"use client"

import { Briefcase, Calendar, Code, GraduationCap, Trophy, User } from "lucide-react"
import { useRef } from "react"

interface ExperienceItem {
    id: string
    year: string
    title: string
    company: string
    description: string
    icon: React.ElementType
    color: string
}

const experiences: ExperienceItem[] = [
    {
        id: "2024",
        year: "2024 - Present",
        title: "Senior iOS Engineer",
        company: "Tech Giant Corp",
        description: "Leading the mobile architecture migration to SwiftUI and modularizing the codebase for faster build times.",
        icon: User,
        color: "text-orange-500"
    },
    {
        id: "2022",
        year: "2022 - 2024",
        title: "Mobile Dept. Lead",
        company: "Innovative Startups Inc.",
        description: "Managed a team of 5 developers, established CI/CD pipelines, and reduced crash/error rates by 40%.",
        icon: Briefcase,
        color: "text-blue-500"
    },
    {
        id: "2020",
        year: "2020 - 2022",
        title: "iOS Developer",
        company: "App Solutions Ltd.",
        description: "Developed and launched 3 major apps on the App Store, featuring real-time data synchronization.",
        icon: Code,
        color: "text-green-500"
    },
    {
        id: "2018",
        year: "2018 - 2020",
        title: "Junior Developer",
        company: "Web & Mobile Studio",
        description: "Collaborated on cross-platform projects using React Native and assisted in backend API integration.",
        icon: GraduationCap,
        color: "text-purple-500"
    }
]


export function ExperienceSection() {
    return (
        <section id="experience" className="bg-black py-24 border-t border-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">
                    Professional <span className="text-accent">Journey</span>
                </h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-zinc-800 md:-translate-x-1/2 rounded-full hidden md:block"></div>

                    {/* Mobile Line (Left aligned) */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-zinc-800 md:hidden rounded-full"></div>


                    <div className="space-y-12 md:space-y-24">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0
                            return (
                                <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Content Side */}
                                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                                        <div className={`
                                            bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300
                                            ${isEven ? 'md:text-left' : 'md:text-right'}
                                         `}>
                                            <span className={`inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-400 mb-3 font-mono`}>
                                                {exp.year}
                                            </span>
                                            <h3 className={`text-xl font-bold text-white mb-1 ${exp.color}`}>{exp.title}</h3>
                                            <p className="text-zinc-400 text-sm mb-3 font-medium">{exp.company}</p>
                                            <p className="text-zinc-500 text-sm leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Node (Icon) */}
                                    <div className={`
                                        absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center
                                        w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-4 border-zinc-900 z-10
                                        ${exp.color}
                                    `}>
                                        <exp.icon className="w-5 h-5 md:w-8 md:h-8" />
                                    </div>

                                    {/* Connection Line (Desktop) */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 h-1 bg-zinc-800 hidden md:block w-12 
                                        ${isEven ? 'left-1/2 ml-8' : 'right-1/2 mr-8'}
                                     `}></div>


                                    {/* Empty Side for Spacing */}
                                    <div className="w-full md:w-1/2 hidden md:block"></div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
