import { GetProjectsUseCase } from "../../application/use-cases/get-projects"

export class ProjectController {
    constructor(private getProjectsUseCase: GetProjectsUseCase) { }

    async getProjects() {
        // In a real API route, we might validate request params here.
        // For RSCs, we just delegate to the use case.
        return this.getProjectsUseCase.execute()
    }
}
