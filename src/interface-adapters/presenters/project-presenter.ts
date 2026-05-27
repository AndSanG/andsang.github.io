import { Project } from "@/src/entities/project"

export interface ProjectViewModel {
    id: string
    title: string
    role: string
    description: string
    challenge: string
    techStack: string[]
}

export function presentProjects(projects: Project[]): ProjectViewModel[] {
    return projects
}
