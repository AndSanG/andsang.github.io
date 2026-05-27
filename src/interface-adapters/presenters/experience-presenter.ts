import { Experience } from "@/src/entities/experience"

export interface ExperienceViewModel {
    id: string
    year: string
    title: string
    company: string
    description: string
    imagePath: string
    color: string
}

export function presentExperiences(experiences: Experience[]): ExperienceViewModel[] {
    return experiences
}
