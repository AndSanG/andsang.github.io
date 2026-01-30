"use client"

import { Briefcase, Calendar, Code, GraduationCap, Trophy, User } from "lucide-react"
import { useRef } from "react"

import { ExperienceCard, ExperienceItem } from "@/components/ui/experience-card"

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
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={exp.id}
                                experience={exp}
                                isEven={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
