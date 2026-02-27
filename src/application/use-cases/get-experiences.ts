import { ExperienceRepository } from "../repositories/experience-repository"
import { Experience } from "../../entities/experience"

export class GetExperiencesUseCase {
    constructor(private experienceRepository: ExperienceRepository) { }

    async execute(): Promise<Experience[]> {
        return this.experienceRepository.getExperiences()
    }
}
