import { GetExperiencesUseCase } from "../../application/use-cases/get-experiences"
import { Experience } from "../../entities/experience"

// We can create a View Model here if we want to add UI-specific properties (like mapping iconName to actual Icon reference)
// BUT, since we are in strict clean arch, we shouldn't import UI libraries (lucide-react) even in the Controller if we can avoid it.
// The Presenter pattern usually handles formatting. 
// For this simpler refactor, the Controller can return the Entity or a DTO.
// Let's return the Entity for now and handle the Icon mapping in the UI Component (which acts as the Viewer/Presenter).

export class ExperienceController {
    constructor(private getExperiencesUseCase: GetExperiencesUseCase) { }

    async getExperiences(): Promise<Experience[]> {
        return this.getExperiencesUseCase.execute()
    }
}
