import { GetProjectsUseCase } from "@/src/application/use-cases/get-projects"
import { InMemoryProjectRepository } from "@/src/infrastructure/repositories/in-memory-project-repository"
import { ProjectController } from "@/src/interface-adapters/controllers/project-controller"

const projectRepo = new InMemoryProjectRepository()
const getProjectsUseCase = new GetProjectsUseCase(projectRepo)
export const projectController = new ProjectController(getProjectsUseCase)
