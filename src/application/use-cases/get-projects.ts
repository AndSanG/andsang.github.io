import { ProjectRepository } from "../repositories/project-repository"
import { Project } from "../../entities/project"

export class GetProjectsUseCase {
    constructor(private projectRepository: ProjectRepository) { }

    async execute(): Promise<Project[]> {
        return this.projectRepository.getProjects()
    }
}
