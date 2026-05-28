"use client"

import { useState } from "react"
import { ProjectViewModel } from "@/src/interface-adapters/presenters/project-presenter"
import { ProjectCard } from "./project-card"

export function ProjectList({ projects }: { projects: ProjectViewModel[] }) {
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    isOpen={openId === project.id}
                    onToggle={() => setOpenId(openId === project.id ? null : project.id)}
                />
            ))}
        </div>
    )
}
