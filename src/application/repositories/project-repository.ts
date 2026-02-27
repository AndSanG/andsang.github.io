import { Project } from "../../entities/project"

export interface ProjectRepository {
    getProjects(): Promise<Project[]>
}
