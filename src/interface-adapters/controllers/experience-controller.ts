import { GetExperiencesUseCase } from "../../application/use-cases/get-experiences"
import { ExperienceViewModel, presentExperiences } from "../presenters/experience-presenter"

export class ExperienceController {
    constructor(private getExperiencesUseCase: GetExperiencesUseCase) { }

    async getExperiences(): Promise<ExperienceViewModel[]> {
        const experiences = await this.getExperiencesUseCase.execute()
        return presentExperiences(experiences)
    }
}
