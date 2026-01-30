import { GetProjectsUseCase } from "./application/use-cases/get-projects"
import { GetExperiencesUseCase } from "./application/use-cases/get-experiences"
import { InMemoryProjectRepository } from "./infrastructure/repositories/in-memory-project-repository"
import { InMemoryExperienceRepository } from "./infrastructure/repositories/in-memory-experience-repository"
import { ProjectController } from "./interface-adapters/controllers/project-controller"
import { ExperienceController } from "./interface-adapters/controllers/experience-controller"

// Repositories
const projectRepo = new InMemoryProjectRepository()
const experienceRepo = new InMemoryExperienceRepository()

// Use Cases
const getProjectsUseCase = new GetProjectsUseCase(projectRepo)
const getExperiencesUseCase = new GetExperiencesUseCase(experienceRepo)

// Controllers
const projectController = new ProjectController(getProjectsUseCase)
const experienceController = new ExperienceController(getExperiencesUseCase)

export {
    projectController,
    experienceController
}
