import { Experience } from "../../entities/experience"

export interface ExperienceRepository {
    getExperiences(): Promise<Experience[]>
}
