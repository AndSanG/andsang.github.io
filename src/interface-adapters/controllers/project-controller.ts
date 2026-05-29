import { GetProjectsUseCase } from "../../application/use-cases/get-projects"
import { ProjectViewModel, presentProjects } from "../presenters/project-presenter"

export class ProjectController {
    constructor(private getProjectsUseCase: GetProjectsUseCase) { }

    async getProjects(): Promise<ProjectViewModel[]> {
        const projects = await this.getProjectsUseCase.execute()
        return presentProjects(projects)
    }
}
